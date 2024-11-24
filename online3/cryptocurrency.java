package online3;

public class cryptocurrency implements paymentStrategy{
    String type;

    public cryptocurrency() {
        this.type = "cryptocurrency";
    }
    @Override
    public void checkOut() {
        System.out.println("Your Payment Method: " + type +" checkout successfully");
    }
}
