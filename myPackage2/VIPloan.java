package myPackage2;

public class VIPloan implements Loan{
    Double interestRate;

    public VIPloan() {
        setInterestRate();
    }

    public void setInterestRate() {
        this.interestRate = 0.1;
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
