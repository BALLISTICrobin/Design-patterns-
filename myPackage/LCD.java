package myPackage;

public class LCD implements Display {
    private String name;

    public LCD() {
        setName();
    }

    public void setName() {
        name = "LCD Display";
    }

    public String getName() {
        return name;
    }

    public void show() {
        System.out.println("Display Unit: " + name);
    }
}
