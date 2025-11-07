//TODO criar variável do tipo ShoppingCart contendo CardItem
const shoppingCart = {
    cardItems: [
        { id: 1000, price: 200 },
        { id: 1070, price: 300 },
        { id: 3000, price: 500 },
    ],
};
//TODO função do tipo void para somar os valores dos itens
export function calculateTotal(shoppingCart) {
    const total = shoppingCart.cardItems.reduce((acc, item) => acc + item.price, 0);
    console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
}
calculateTotal(shoppingCart);
