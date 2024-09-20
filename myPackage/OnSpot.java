package myPackage;

public class OnSpot implements Payment {
   private  int collect;
    private int store;
    private int change;

    public int getCollect() {
        return collect;
    }

    public void setCollect(int collect) {
        this.collect = collect;
    }

    public void setStore(int store) {
        this.store = store;
    }

    public void setChange(int cash) {
        this.change = cash;
    }

    public int getStore() {
        return store;
    }

    public int getChange() {
        return change;
    }

    public String pay() {
        return "on spot ,collect " + collect + " ,store: " + store + " ,change: " + change;
    }
}
