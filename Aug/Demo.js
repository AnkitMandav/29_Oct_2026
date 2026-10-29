class BankAccount{
    constructor (balance){
        this.balance=balance;
    }
}

const acc= new BankAccount(5000);
console.log(acc.balance);

acc.balance=100;
acc.balance=400;

console.log(acc.balance);