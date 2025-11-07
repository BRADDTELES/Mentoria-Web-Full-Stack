export const bootstrap = () => {
    /* Verificando o Tipo do Objeto (Instanceof) Parte 1 */
    class BankAccount {
        holder;
        balance;
        constructor(holder, balance) {
            this.holder = holder;
            this.balance = balance;
        }
        getHolder() {
            return this.holder;
        }
    }
    class CheckingAccount {
        overdraftLimit;
        constructor(overdraftLimit) {
            this.overdraftLimit = overdraftLimit;
        }
        getOverdraftLimit() {
            return this.overdraftLimit;
        }
    }
    const a = new BankAccount('Jorge', 15000);
    const b = new CheckingAccount(25000);
    console.log('Jorge', 15000);
    console.log(a);
    console.log(typeof a);
    console.log(a instanceof BankAccount);
    console.log(a instanceof CheckingAccount);
    function showDetails(account) {
        if (account instanceof BankAccount) {
            console.log(account.getHolder());
        }
        else if (account instanceof CheckingAccount) {
            console.log(account.getOverdraftLimit());
        }
        else {
            console.error('Conta não identificada');
        }
    }
    showDetails(a);
    showDetails(b);
};
