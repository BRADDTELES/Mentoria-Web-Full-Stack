// let product: string = 'Micro-ondas'; // Type Annotation, usa a anotação ": string"
let product = 'Micro-ondas'; // Type Inference, sem type annotation, sem inserir o ": string"
let price = 647.52;
// usamos type annotation dentro do constructor da função
export function display(product, price) {
    console.log(product.toUpperCase(), price.toFixed(0));
}
display(product, price);
