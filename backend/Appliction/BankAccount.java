package Backend.Appliction;

public class BankAccount {
    public static void main(String[] args) {
        String Account_holder_Name = "Revanth";
        System.out.println("Account holder name: "+Account_holder_Name);
        int transactions = 0;
        double Account_Balance = 89000;
        boolean Account_Status = Account_Balance>10000;
        System.out.println("Account-Balance: "+Account_Balance);
        System.out.println("Account-Status: "+Account_Status);
        double Deposit_Amount = 1000;
        System.out.println("Deposit_Amount "+Deposit_Amount);
        boolean Valid_deposit = Deposit_Amount>500 && Account_Status;
        System.out.println("valid_deposit_status: "+Valid_deposit);
        Account_Balance+= Deposit_Amount;
        transactions++;
        System.out.println("Account-Balance: "+Account_Balance);
        double withdrawal_amount = 100;
        System.out.println("Withdrawal-Amount: "+withdrawal_amount);
        Account_Balance =Account_Balance-withdrawal_amount;
        transactions++;
        System.out.println("Account-Balance: "+Account_Balance);
        System.out.println();
        System.out.println("Account holder name: "+Account_holder_Name);
        System.out.println("Final Balance in Account: "+Account_Balance);
        System.out.println("Number of Transcations: "+transactions);
    }
}
