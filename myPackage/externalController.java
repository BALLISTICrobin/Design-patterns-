package myPackage;

public class externalController implements Controller {
    private String name;

    public externalController() {
        setName();
    }

    public void setName() {
        this.name = "External Controller";
    }
    @Override
    public String control() {
        return "Controlled by " + name;
    }

}
