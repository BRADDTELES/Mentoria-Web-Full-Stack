export const bootstrap = (): void => {
  function processAndReturn(value: string | number): string | number {
    return value;
  }

  function processAndReturnGeneric<T>(n: T): T {
    return n;
  }

  const y = processAndReturnGeneric(7);
  console.log(y.toFixed(2))

  /* const x = processAndReturnGeneric('The Big Bang Theory');
  console.log(x.toUpperCase());

  const y = processAndReturnGeneric(7);
  console.log(y.toFixed(2))
  
  const z = processAndReturnGeneric(true);
  console.log(z) */


  /* const x = processAndReturn('The Big Bang Theory');
  if (typeof x === 'string') {
    console.log(x.toUpperCase());
  }

  const y = processAndReturn(7);
  if(typeof y === 'number'){
    console.log(y.toFixed(2))
  } */
};
