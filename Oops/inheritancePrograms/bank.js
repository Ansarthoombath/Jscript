class BankAccount{

    constructor(balance){
        this.balance=balance
    }

    deposit(amount){
        this.balance+=amount;
        return `Deposited:${amount}. New Balance:${this.balance}`
    }

    withdraw(amount){
        if(amount>this.balance){
            return ` Insufficient funds`;
        }
        this.balance-=amount
        return `withdraw:${amount} .New Balance: ${this.balance}` 
    }

    checkBalance(){
        return `Current Balance:${this.balance}`
    }


}

class SavingsAccount extends BankAccount{
    constructor(balance=0,penalty){
        super(balance)
        this.penalty=penalty
    }
}