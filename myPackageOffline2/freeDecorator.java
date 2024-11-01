package myPackageOffline2;

public class freeDecorator extends offerDecorator{
    double freeItemPrice = 0;
    public freeDecorator(menuItem item) {
        super(item);
        freeItemPrice = item.getPrice();
    }

    public double getPrice() {
        return super.getPrice() - freeItemPrice;
    }
    public String getDescription() {
        return super.getDescription();
    }
}
