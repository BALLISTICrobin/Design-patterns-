package myPackage2;

public class RegularFactory implements BankFactory{
    Accounts account;
    Loan loan;

    public RegularFactory() {
        setAccount();
        setLoan();
    }

    public void setAccount() {
        account = new RegularAccounts();
    }

    public void setLoan() {
        loan = new RegularLoan();
    }

    public Accounts getAccount() {
        return account;
    }

    public Loan getLoan() {
        return loan;
    }
}
