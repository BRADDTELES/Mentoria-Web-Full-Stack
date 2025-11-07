let films = ['Duna: Parte 2', 'Divertida Mente 2'];
// let films: string[] = ['Duna: Parte 2', 'Divertida Mente 2']; // T[]
// let numbers: number[] = [10, 20];
// let films: Array<string> = ['Duna: Parte 2', 'Divertida Mente 2']; // Array<T>
// let numbers: Array<number> = [10, 20];
export function toUpperCaseStrings(arr) {
    return arr.map(value => value.toUpperCase());
}
console.log(toUpperCaseStrings(films));
