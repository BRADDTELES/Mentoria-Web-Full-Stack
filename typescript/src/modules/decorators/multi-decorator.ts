export const bootstrap = (): void => {
  const UserLogin = {
    username: 'jorge',
    permissions: ['User'],
  };

  function RateLimit(limitInMilliseconds: number): MethodDecorator {
    console.log('Decorador RateLimit', limitInMilliseconds);
    return <T>(
      target: Object,
      propertyKey: string | symbol,
      descriptor: TypedPropertyDescriptor<T>,
    ) => {
      console.log(descriptor.value);
      const originalMethod = descriptor.value as () => T;
      let lastExecution = 0; // a última execução

      descriptor.value = function (this: any) {
        // o instante atual
        // liberar a execução do método somente se o intervalo de segundos for atendido
        const now = Date.now(); // instante atual

        if (now - lastExecution < limitInMilliseconds) {
          console.error(
            `O método ${String(propertyKey)} só pode ser chamado após ${limitInMilliseconds}ms`,
          );
          descriptor.value = function () {} as T;
        } else {
          lastExecution = now;
          // connecta o contexto da nova função associada ao descriptor.value com o contexto do método original, que está sendo decorado
          return originalMethod.apply(this);
        }
      } as T;

      console.log(descriptor.value);
      return descriptor;
    };
  }

  function CheckPermissions(requiredPermissions: string[]): MethodDecorator {
    console.log('Decorador CheckPermissions');
    return <T>(
      target: Object,
      propertyKey: string | symbol,
      descriptor: TypedPropertyDescriptor<T>,
    ) => {
      const hasPermission = requiredPermissions.some((permission) =>
        UserLogin.permissions.includes(permission),
      );

      if (!hasPermission) {
        console.error(
          `Usuário ${UserLogin.username} não tem permissão ${requiredPermissions} para acessar ${String(propertyKey)}`,
        );

        descriptor.value = function () {} as T;
      }

      return descriptor;
    };
  }

  class ShoppingCart {
    @CheckPermissions(['User', 'Admin', 'Super User'])
    @RateLimit(3000)
    getItems() {
      console.log('Retorna a relação de itens adicionados ao carrinho');
    }
  }

  const shoppingCart = new ShoppingCart();
  document.getElementById('getItems')?.addEventListener('click', () => {
    shoppingCart.getItems();
  });
};
