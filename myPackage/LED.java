package myPackage;

public class LED implements Display {
    private String name;
    public LED() {
        setName();
    }

    public void setName() {
        name = "LED Display";
    }

    public String getName() {
        return name;
    }

    public void show() {
        System.out.println("Display Unit: " + name);
    }
}
