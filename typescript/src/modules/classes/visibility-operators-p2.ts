export const bootstrap = (): void => {
  /* Operadores de Visibilidade Public, Protected e Private - Parte 2 */
  class Looger {
    public static info(message: string): void {
      console.log(message);
    }
    protected static warn(message: string): void {
      console.warn(message);
    }
    private static error(message: string): void {
      console.error(message);
    }

    // ACESSO NA CLASSE
    public static wrapperLogger(
      type: 'INFO' | 'WARN' | 'ERROR',
      message: string,
    ): void {
      const msg = `${Date.now()} - ${message}`;
      switch (type) {
        case 'INFO':
          Looger.info(msg);
          break;
        case 'WARN':
          Looger.warn(msg);
          break;
        case 'ERROR':
          Looger.error(msg);
          break;
      }
    }
  }

  // ACESSO POR FORA DA CLASSE
  Looger.info('Acesso público');

  class LoogerSlack extends Looger {
    public static send(message: string): void {
        // ACESSO NA SUBCLASSE
        Looger.info('Public')
        Looger.warn('Protected')
    }
  }
};
