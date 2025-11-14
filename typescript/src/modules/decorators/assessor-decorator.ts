export const bootstrap = (): void => {
  function CapitalizeText() {
    return function <T>(
      target: Object,
      propertyKey: string | symbol,
      descriptor: TypedPropertyDescriptor<T>, // PropertyDescriptor
    ) {
      const originalMethod = descriptor.set as (v: any) => void;
      descriptor.set = function (this: any, value: T) {
        if (typeof value === 'string') {
          const newValue = value
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

          originalMethod?.apply(this, [newValue]);
        }

        // value
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
  serviceOrder.title = 'ImpLemeNtar a pipEline de dePloy do projeto x';
  console.warn(serviceOrder.title);
};
