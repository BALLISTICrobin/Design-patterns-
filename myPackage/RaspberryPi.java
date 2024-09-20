package myPackage;

public class RaspberryPi implements microprocessorController {
    private String name;
    private Identification cards;
    private Storage storage;
    private Controller controlSystem;

    public RaspberryPi() {
        setName();
        setTicketingOrIdentification();
        setStorage();
        setController();
    }

    public void setName() {
        name = "Raspberry Pi";
    }

    public String getName() {
        return name;
    }
    public void setController() {
        this.controlSystem = new touchScreen();
    }
    public Controller getController() {
        return controlSystem;
    }
    public void setTicketingOrIdentification() {
        cards = new NFC();
        cards.setTicketingOrIdentificationName();
    }
    public Identification getTicketingOrIdentification() {
        return cards;
    }

    public void setStorage() {
        this.storage = new Integrated();
    }
    public Storage getStorage() {
        return storage;
    }

    public void show() {
        System.out.println("Display Unit: " + name);
    }
}
