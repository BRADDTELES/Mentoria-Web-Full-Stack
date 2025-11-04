/* type CardItem = {
  id: number;
  price: number;
};

type ShoppingCart = {
  cardItems: CardItem[];
};

const shoppingCart: ShoppingCart = {
  cardItems: [
    { id: 1000, price: 200 },
    { id: 1070, price: 300 },
    { id: 3000, price: 500 },
  ],
};

export function calculateTotal(shoppingCart: ShoppingCart): number {
  const total = shoppingCart.cardItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );
  
  return total
}

const total = calculateTotal(shoppingCart);

console.log(`Total do carrinho: R$ ${total.toFixed(2)}`); */

type Address = {
  cep: string;
  default: boolean;
};

type Customer = {
  addresses: Address[];
};

const addresses: Address[] = [
  { cep: '00000-000', default: false },
  { cep: '00000-001', default: false },
  { cep: '00000-002', default: true },
];

const customer: Customer = {
  addresses: addresses,
};

// console.log(`Detalhes do customer`, customer);

export function getPrincipalAddress(customer: Customer): Address | undefined {
  return customer.addresses.find((addresses) => addresses.default);
}

const principalAddress = getPrincipalAddress(customer);

if (principalAddress !== undefined) {
  console.log(principalAddress);
}
