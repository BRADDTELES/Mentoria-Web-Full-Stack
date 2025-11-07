/* const file = {
    name: 'lista_de_funcionarios.txt',
    size: 456123789,
} as const; */
const file = {
    name: 'lista_de_funcionarios.txt',
    size: 456123789,
};
// file.name = 'lista_de_dependentes.txt' // Não é possível alterar uma propriedade readonly dentro de um objeto constante
export function handleFileUpload(file) {
    console.log(`Nome: ${file.name}`);
    console.log(`Tamanho: ${file.size}`);
}
handleFileUpload(file);
