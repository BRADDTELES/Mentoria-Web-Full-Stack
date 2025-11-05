export const bootstrap = (): void => {
  enum OrderStatus {
    PENDING, // default = 0
    DELIVERED = 'Entregue',
    CANCELED = 'Cancelado',
  }

  console.log(OrderStatus);
  console.log(OrderStatus.CANCELED); // recupera o valor numerico da posição
  //   console.log(OrderStatus[5575]) // recupera a chave do valor

  enum OrderStatus {
    WAITINGFORPAYMENT = 500,
    SENT = 'Enviado',
  }

  function changeOrderStatus(newStatus: OrderStatus): void {
    if (newStatus === OrderStatus.SENT) {
      // ... PARA ENVIAR UM E-MAIL PARA O CLIENTE
      console.log('Novo Status: ', newStatus);
    }
  }

  changeOrderStatus(OrderStatus.SENT);
};
