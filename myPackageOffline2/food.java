package myPackageOffline2;

public class food implements menuItem {
    private String description;
    private double price;
    private double discount;

    public food(String description, double price) {
        this.description = description;
        this.price = price;
        this.discount = 0;
    }

    public String getDescription() {
        return description;
    }

    public double getPrice() {
        return price * (1 - discount / 100.00);
    }

//    public void free(){
//        this.price = 0.00;
//    }
//
//    public void discount(double percent){
//        this.discount = percent;
//    }
}
