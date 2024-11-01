package myPackageOffline2;

public class offerDecorator implements menuItem{
    private menuItem item;

    public offerDecorator(menuItem item) {
        this.item = item;
    }

    public String getDescription() {
        return item.getDescription();
    }

    public double getPrice() {
        return item.getPrice();
    }
}
