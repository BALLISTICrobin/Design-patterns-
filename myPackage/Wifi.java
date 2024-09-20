package myPackage;

public class Wifi implements InternetConnection {
    private String name;

    public Wifi() {
        setName();
    }

    @Override
    public String connect() {
        return "Connected to " + name;
    }

    public void setName() {
        this.name = "Wifi";
    }

    public String getName() {
        return name;
    }
}
