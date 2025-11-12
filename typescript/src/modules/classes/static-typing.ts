export const bootstrap = (): void => {
  /* Tipagem Estática */
  class Product {
    name: string = 'Smartphone';
    price: number = 3750.55;

    showDetails(): void {
      console.log(`${this.name} : ${this.price}`);
    }
  }

  const product = new Product();
  product.showDetails();
  console.log('Atributo público: ', product.name);
};
