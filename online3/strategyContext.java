package online3;

public interface strategyContext {
    public void checkOut();
    public paymentStrategy getPaymentMethod();
    public void setPaymentMethod(paymentStrategy paymentMethod);
}
