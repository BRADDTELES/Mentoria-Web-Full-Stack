export const bootstrap = (): void => {
  function CapitalizeText() {
    return function <T>(
      target: Object,
      propertyKey: string | symbol,
      descriptor: TypedPropertyDescriptor<T>, // PropertyDescriptor
    ) {
      console.log('descriptor set: ', descriptor.set);
      console.log('descriptor get: ', descriptor.get);

      descriptor.set = function () {
        console.log('Modificamos o comportamento do setter');
      };
      descriptor.get = function <T>() {
        return 'Teste' as T;
      };

      return descriptor;
    };
  }

  class ServiceOrder {
    private _title: string = '';

    @CapitalizeText()
    set title(value: string) {
      this._title = value;
    }

    get title(): string {
      return this._title;
    }
  }

  const serviceOrder = new ServiceOrder();
  serviceOrder.title = 'Implementar a pipeline de deploy do projeto x';
  console.warn(serviceOrder.title);
};
