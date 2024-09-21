package myPackage2;

public class PremiumLoan implements Loan{
    Double interestRate;

    public PremiumLoan() {
        setInterestRate();
    }

    public void setInterestRate() {
        this.interestRate = 0.12;
    }

    public Double getInterestRate() {
        return interestRate;
    }

    public Double getTotalInterest(Double principal, Integer years) {
        return (principal * interestRate * years + principal);
    }

    public Double getTotalCompoundInterest(Double principal,Integer times, Integer years) {
        return principal * Math.pow((1 + interestRate/times), times*years);
    }
}
