package online3;

public class bkash implements paymentStrategy{
    String type;

    public bkash() {
        this.type = "bkash";
    }

    @Override
    public void checkOut() {
        System.out.println("Your Payment Method: " + type +" checkout successfully");
    }
}
