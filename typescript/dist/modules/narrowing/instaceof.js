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
    class CheckingAccount extends BankAccount {
        overdraftLimit;
        constructor(holder, balance, overdraftLimit) {
            super(holder, balance);
            this.overdraftLimit = overdraftLimit;
        }
        getOverdraftLimit() {
            return this.overdraftLimit;
        }
    }
    class SavingsAccount extends BankAccount {
        interestRate;
        constructor(holder, balance, interestRate) {
            super(holder, balance);
            this.interestRate = interestRate;
        }
        getInterestRate() {
            return this.interestRate;
        }
    }
    // lista de contas bancárias
    const accountList = [
        new CheckingAccount('Alice', 1500, 300),
        new SavingsAccount('João', 4000, 0.005),
        new CheckingAccount('Maria', 10000, 3000),
        new SavingsAccount('Paulo', 1000, 0.005),
    ];
    function processAccounts(accounts) {
        accounts.forEach(account => {
            // console.log(account)
            if (account instanceof CheckingAccount) {
                console.log('Processando a conta corrente: ', account.getOverdraftLimit());
            }
            else if (account instanceof SavingsAccount) {
                console.log('Processando a conta poupanca: ', account.getInterestRate());
            }
            console.log('--------------------');
        });
    }
    processAccounts(accountList);
};
