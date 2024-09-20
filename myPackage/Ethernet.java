package myPackage;

public class Ethernet implements InternetConnection {
    private String name;

    public Ethernet() {
        setName();
    }

    @Override
    public String connect() {
        return  "Connected to " + name;
    }

    public void setName() {
        this.name = "Ethernet";
    }

    public String getName() {
        return name;
    }


}
