console.log("\n=== Level 2 - Q2: Bank account ===");
const account = {
  owner: "Bob",
  balance: 100,
 
  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.log(`Deposit rejected: ${amount} is not a positive amount.`);
      return;
    }
    this.balance += amount;
    console.log(`Deposited ${amount}. Balance: ${this.balance}`);
  },
 
  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.log(`Withdrawal rejected: ${amount} is not a positive amount.`);
      return;
    }
    if (amount > this.balance) {
      console.log(
        `Withdrawal rejected: ${amount} exceeds balance of ${this.balance}.`
      );
      return;
    }
    this.balance -= amount;
    console.log(`Withdrew ${amount}. Balance: ${this.balance}`);
  },
};
 

account.deposit(50); 
account.withdraw(30); 

account.deposit(-20); 
account.withdraw(-10); 
account.withdraw(1000); 
