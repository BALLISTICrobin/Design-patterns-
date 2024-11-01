package myPackageOffline2;
import java.util.ArrayList;

public class combo implements menuItem{
    private String description;
    private ArrayList<menuItem> items;
    private double price;

    public combo(String description,double money) {
        this.description = description;
        this.items = new ArrayList<menuItem>();
        this.price = money;
    }

    public void addItem(menuItem item) {
        items.add(item);
    }

    public void removeItem(menuItem item) {
        items.remove(item);
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

    public ArrayList<menuItem> getItems() {
        return items;
    }
}
