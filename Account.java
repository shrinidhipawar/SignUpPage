public class Account {
private static int totalAccounts = 0; private static double totalBalance = 0;
private int accountNumber; private double balance;
public Account(double initialBalance) { accountNumber = ++totalAccounts; balance = initialBalance; totalBalance += initialBalance;
}
public void deposit(double amount) { balance += amount;
totalBalance += amount;
}
public void withdraw(double amount) { if (balance >= amount) {
balance -= amount;
totalBalance -= amount; } else {
System.out.println("Insufficient funds!"); }
}
public static void displayTotalBalance() {
System.out.println("Total Balance across all accounts: $" + totalBalance);
}
// Other methods can be added here }
    