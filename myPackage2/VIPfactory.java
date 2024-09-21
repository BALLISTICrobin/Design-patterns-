package myPackage2;

public class VIPfactory implements BankFactory {
    Accounts account;
    Loan loan;

    public VIPfactory() {
        setAccount();
        setLoan();
    }

    public void setAccount() {
        account = new VIPaccounts();
    }

    public void setLoan() {
        loan = new VIPloan();
    }

    public Accounts getAccount() {
        return account;
    }

    public Loan getLoan() {
        return loan;
    }
}
