package online3;

public class creditCards implements paymentStrategy{
    String type;

    public creditCards() {
        this.type = "credit cards";
    }
    @Override
    public void checkOut() {
        System.out.println("Your Payment Method: " + type +" checkout successfully");
    }
}
