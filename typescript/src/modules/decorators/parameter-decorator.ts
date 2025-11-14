export const bootstrap = (): void => {
  function SomeAction() {
    return (target: Object, propertyKey: string | symbol) => {
        console.log(target)
        console.log(propertyKey)
        console.log('Executar algo na inicialização da propriedade na classe')
    };
  }

  function AnotherAction(param: string) {
    return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
        console.log(param)
        console.log('target: ', target)
        console.log('propertyKey: ', propertyKey)
        console.log('parameterIndex: ', parameterIndex)

        console.log('Executar algo no parâmetro decorado')
    }
  }

  class Event {
    @SomeAction()
    date: Date;

    constructor(date: Date) {
      this.date = date;
    }

    checkAvailability(test: string, @AnotherAction('xyz') room: number) {
        console.log('Verifica disponibilidade do espaço')
    }
  }

  const event = new Event(new Date(2024, 11, 25));
  event.date = new Date(2025, 0, 1)
  event.checkAvailability('teste', 15)
  event.checkAvailability('teste', 5)
  event.checkAvailability('teste', 3)
};
