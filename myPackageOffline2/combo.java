package myPackageOffline2;
import java.util.ArrayList;

public class combo implements menuItem{
    private String description;
    private ArrayList<menuItem> items;
    private ArrayList<menuItem> freeItems;
    private double price;
    private boolean flag;

    public combo(String description,double money) {
        this.description = description;
        this.items = new ArrayList<menuItem>();
        this.freeItems = new ArrayList<menuItem>();
        this.price = money;
        if(money==0){
            flag = true;
        }
        else {
            flag = false;
        }
    }

    public void addItem(menuItem item) {
        items.add(item);
//        if(flag){
//            price += item.getPrice();
//        }
//        System.out.println(price);
    }

    public void removeItem(menuItem item) {
        items.remove(item);
//        if(flag){
//            price -= item.getPrice();
//        }
//        System.out.println(price);
    }

    public void addFreeItem(menuItem item) {
        freeItems.add(item);
//        System.out.println(price);
    }

    public String getDescription() {
        String desc = description;
        desc+="(";
        for (int i = 0; i < items.size(); i++) {
            desc+=items.get(i).getDescription();
            if (i < items.size() - 1) {
                desc+="+";
            }
        }
        desc+=")";
        return desc;
    }

    public double getPrice() {
        if(price==0){
            for (menuItem item : items) {
                price += item.getPrice();
            }
        }

        return price;
    }

    public double getDiscountedPrice(double discount){
        this.price = this.price*(1-discount/100.00);
        return this.price;
    }

    public ArrayList<menuItem> getItems() {
        return items;
    }

    public ArrayList<menuItem> getFreeItems() {
        return freeItems;
    }
}
