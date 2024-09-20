package myPackage;

public class touchScreen implements Controller {
    private String name;

    public touchScreen() {
        setName();
    }

    public void setName() {
        this.name = "Touch Screen";
    }
    @Override
    public String control() {
        return "Controlled by " + name;
    }

}
