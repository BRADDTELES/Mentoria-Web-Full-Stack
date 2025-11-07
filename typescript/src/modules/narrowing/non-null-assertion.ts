export const bootstrap = (): void => {
  /* Non-Null Assertion
  esse operador requer Cuidados!
  ele diz ao TS que o elemento não é nulo, mas isso pode ser um erro de programação.
  */
  const subtitle = document.getElementById('subtitle')!;
  subtitle.style.color = 'green'


  /* if (subtitle) {
    subtitle.style.color = 'green';
  } */

    const getProducts = (): string[] | null => {
        // return ['Smartphone', 'Headset']
        return null // Lançar o Error no Browser
    }

    // define que a atribuição será de um valor null ou undefined
    const products = getProducts()!; // Error: em tempo de execução no Browser
    products.map(item => console.log(item)) 
};
