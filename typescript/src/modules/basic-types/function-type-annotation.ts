type CardItem = {
  id: number;
  price: number;
};
type Address = {
  cep: string;
  default: boolean;
};

type ShoppingCart = {
  cardItems: CardItem[];
};

type Customer = {
  addresses: Address[];
};

const shoppingCart: ShoppingCart = {
  cardItems: [
    { id: 1000, price: 200 },
    { id: 1070, price: 300 },
    { id: 3000, price: 500 },
  ],
};

const addresses: Address[] = [
  { cep: '00000-000', default: false },
  { cep: '00000-001', default: false },
  { cep: '00000-002', default: true },
];

const customer: Customer = {
  addresses: addresses,
};

// --
// let calculateTotal: (sC: ShoppingCart) => number

/* calculateTotal = function (shoppingCart: ShoppingCart): number {
  const total = shoppingCart.cardItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );
  
  return total
} */
let calculateTotal: (sC: ShoppingCart) => number = function (
  shoppingCart: ShoppingCart,
): number {
  const total = shoppingCart.cardItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );

  return total;
};

type AddressOrUndefined = (c: Customer) => Address | undefined;

/* let getPrincipalAddress: AddressOrUndefined

getPrincipalAddress = (customer: Customer): Address | undefined => {
  return customer.addresses.find((addresses) => addresses.default);
}; */

// Garantir uma referência de memoria exclusiva para a função
// Na Prática é comumente utilizado dessa forma abaixo
const getPrincipalAddress: AddressOrUndefined = (
  customer: Customer,
): Address | undefined => {
  return customer.addresses.find((addresses) => addresses.default);
};

// --
const total = calculateTotal(shoppingCart);

console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);

const principalAddress = getPrincipalAddress(customer);

if (principalAddress !== undefined) {
  console.log(principalAddress);
}

export { calculateTotal, getPrincipalAddress };
