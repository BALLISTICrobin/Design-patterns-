package myPackage;

public class GSM implements InternetConnection {
    private String name;

    public GSM() {
        setName();
    }

    @Override
    public String connect() {
        return "Connected to " + name;
    }

    public void setName() {
        this.name = "GSM";
    }

    public String getName() {
        return name;
    }
}
