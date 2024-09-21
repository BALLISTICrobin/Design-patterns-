package myPackage2;

public class PremiumFactory implements BankFactory {
    Accounts account;
    Loan loan;

    public PremiumFactory() {
        setAccount();
        setLoan();
    }

    public void setAccount() {
        account = new PremiumAccounts();
    }

    public void setLoan() {
        loan = new PremiumLoan();
    }

    public Accounts getAccount() {
        return account;
    }

    public Loan getLoan() {
        return loan;
    }
}
