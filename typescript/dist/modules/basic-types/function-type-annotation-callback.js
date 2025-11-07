const shoppingCart = {
    cardItems: [
        { id: 1000, price: 200 },
        { id: 1070, price: 300 },
        { id: 3000, price: 500 },
    ],
};
const addresses = [
    { cep: '00000-000', default: false },
    { cep: '00000-001', default: false },
    { cep: '00000-002', default: true },
];
const customer = {
    addresses: addresses,
};
const applyDiscountFn = (total, discount) => {
    return total - total * discount;
};
let calculateTotal = function (shoppingCart, applyDiscountFn) {
    const total = shoppingCart.cardItems.reduce((acc, item) => acc + item.price, 0);
    return applyDiscountFn(total, 0.1);
};
/* let getPrincipalAddress: AddressOrUndefined

getPrincipalAddress = (customer: Customer): Address | undefined => {
  return customer.addresses.find((addresses) => addresses.default);
}; */
// Garantir uma referência de memoria exclusiva para a função
// Na Prática é comumente utilizado dessa forma abaixo
const getPrincipalAddress = (customer) => {
    return customer.addresses.find((addresses) => addresses.default);
};
// --
const total = calculateTotal(shoppingCart, applyDiscountFn);
console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
const principalAddress = getPrincipalAddress(customer);
if (principalAddress !== undefined) {
    console.log(principalAddress);
}
export { calculateTotal, getPrincipalAddress };
