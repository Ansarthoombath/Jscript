
   // Base class BankAccount
   class BankAccount {
    #accountNumber;
    #accountHolderName;
    #balance;

    constructor(accountNumber, accountHolderName, balance) {
      this.#accountNumber = accountNumber;
      this.#accountHolderName = accountHolderName;
      this.#balance = balance;
    }

    showAccountDetails() {
      console.log(`Account Number: ${this.#accountNumber}`);
      console.log(`Account Holder Name: ${this.#accountHolderName}`);
      console.log(`Balance: ${this.#balance}`);
    }

    deposit(amount) {
      this.#balance += amount;
      this.showAccountDetails();
    }

    withdraw(amount) {
      if (this.#balance >= amount) {
        this.#balance -= amount;
        this.showAccountDetails();
      } else {
        console.log("Insufficient Balance");
      }
    }
  }

  // Derived class can extend BankAccount (though no new functionality added here)
  class SavingsAccount extends BankAccount {
    // You can add new properties or methods specific to SavingsAccount if needed
  }

  // Create an instance of the SavingsAccount (which is extended from BankAccount)
  let mySavingsAccount = new SavingsAccount("123456", "John Doe", 1000);

  // Deposit an amount and check the updated balance
  mySavingsAccount.deposit(500); 
  // Output: Account Number: 123456 Account Holder Name: John Doe Balance: 1500

  // Attempt to withdraw
  mySavingsAccount.withdraw(500); 
  // Output: Account Number: 123456 Account Holder Name: John Doe Balance: 1000

  // Trying to access private properties directly (this will fail)
  // console.log(mySavingsAccount.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class