package myPackage;

public class touchScreenDisplay implements Display {
    private String name;

    public touchScreenDisplay() {
        setName();
    }

    public void setName() {
        name = "Touch Screen Display";
    }

    public String getName() {
        return name;
    }

    public void show() {
        System.out.println("Display Unit: " + name);
    }

}
