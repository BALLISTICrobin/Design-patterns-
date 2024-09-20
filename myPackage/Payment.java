package myPackage;

public interface Payment {
    void setCollect(int collect);
    void setStore(int store);
    void setChange(int cash);
    int getCollect();
    int getStore();
    int getChange();
    String pay();
}
