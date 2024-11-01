package myPackageOffline2;

public class food implements menuItem {
    private String description;
    private double price;

    public food(String description, double price) {
        this.description = description;
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public double getPrice() {
        return price;
    }
}
