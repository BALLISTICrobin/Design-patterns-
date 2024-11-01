package myPackageOffline2;

public class discountDecorator extends offerDecorator{
    private double discount;

    public discountDecorator(menuItem item, double discount) {
        super(item);
        this.discount = discount;
    }

    public double getPrice() {
        return super.getPrice() * (1 - discount/100);
    }

    public String getDescription() {
        return super.getDescription();
    }
}
