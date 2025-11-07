export const bootstrap = () => {
    let OrderStatus;
    (function (OrderStatus) {
        OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
        OrderStatus["DELIVERED"] = "Entregue";
        OrderStatus["CANCELED"] = "Cancelado";
    })(OrderStatus || (OrderStatus = {}));
    console.log(OrderStatus);
    console.log(OrderStatus.CANCELED); // recupera o valor numerico da posição
    //   console.log(OrderStatus[5575]) // recupera a chave do valor
    (function (OrderStatus) {
        OrderStatus[OrderStatus["WAITINGFORPAYMENT"] = 500] = "WAITINGFORPAYMENT";
        OrderStatus["SENT"] = "Enviado";
    })(OrderStatus || (OrderStatus = {}));
    function changeOrderStatus(newStatus) {
        if (newStatus === OrderStatus.SENT) {
            // ... PARA ENVIAR UM E-MAIL PARA O CLIENTE
            console.log('Novo Status: ', newStatus);
        }
    }
    changeOrderStatus(OrderStatus.SENT);
};
