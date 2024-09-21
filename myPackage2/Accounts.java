package myPackage2;

public interface Accounts {
    void setInterestRate();
    Double getInterestRate();
    Double getTotalInterest(Double principal, Integer years);
    Double getTotalCompoundInterest(Double principal,Integer times, Integer years);
}
