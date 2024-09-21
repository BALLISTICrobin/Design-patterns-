package myPackage;

public class RaspberryPi implements microprocessorController {
    private String name;
    private Identification cards;
    private Storage storage;
    private Controller controlSystem;
    private RaspberryPiFactory factory;

    public RaspberryPi() {
        setFactory();
        setName();
        setTicketingOrIdentification();
        setStorage();
        setController();
    }

    public void setFactory(){
        factory = new RaspberryPiFactory();
    }

    public void setName() {
        name = factory.getName();
    }

    public String getName() {
        return name;
    }
    public void setController() {
        this.controlSystem = factory.createController();
    }
    public Controller getController() {
        return controlSystem;
    }
    public void setTicketingOrIdentification() {
        cards = factory.createIdentification();
    }
    public Identification getTicketingOrIdentification() {
        return cards;
    }

    public void setStorage() {
        this.storage = factory.createStorage();
    }
    public Storage getStorage() {
        return storage;
    }

    public void show() {
        System.out.println("Display Unit: " + name);
    }
}
