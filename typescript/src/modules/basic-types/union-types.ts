let total: string | number = 200;
total = '500'
let shoppingCart = [200.75, 150.12, '33.90', '44', 'not defined'];

// export function totalize( value: Array<number | string | null | object> ) {}
export function totalize( values: (number | string)[] ) { //retornar o total
    return values
    .map(value => typeof value === 'number' ? value : parseFloat(value)) // Converter todos os valores para números
    .filter(value => !isNaN(value)) // Filtrar os valores válidos
    .reduce((acc, curr) => acc + curr, 0)// Totalizar
}

console.log(totalize(shoppingCart));