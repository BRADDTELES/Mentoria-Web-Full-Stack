/* any é um tipo que aceita qualquer coisa.
    Deve ser evitado ao máximo, não é recomendado usar.
    O ideal é sempre tipar os dados e evitar o uso do any.
*/
export function handleFileUpload(file) {
    console.log(`Nome: ${file.name}`);
    console.log(`Tamanho: ${file.zise}`);
}
const file = {
    name: 'lista_de_funcionarios.txt',
    size: 456123789
};
handleFileUpload(file);
