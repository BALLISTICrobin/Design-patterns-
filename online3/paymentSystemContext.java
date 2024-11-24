package online3;

public class paymentSystemContext implements strategyContext{
    paymentStrategy paymentMethod;

    public paymentSystemContext() {
        this.paymentMethod = new creditCards();
    }

    public paymentStrategy getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(paymentStrategy paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public void checkOut(){
        paymentMethod.checkOut();
    }
}
