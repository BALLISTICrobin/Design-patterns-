package myPackage;

public class OLED implements Display {
    private String name;

    public OLED() {
        setName();
    }

    public void setName() {
        name = "OLED Display";
    }

    public String getName() {
        return name;
    }

    public void show() {
        System.out.println("Display Unit: " + name);
    }
}
