package myPackage;

public class ATMega32 implements microprocessorController {
    private String name;
    private Identification cards;
    private Storage storage;
    private Controller controlSystem;
    public ATMega32() {
        setName();
        setTicketingOrIdentification();
        setStorage();
        setController();
    }

    public void setName() {
        name = "ATMega32";
    }

    public String getName() {
        return name;
    }
    public void setController() {
        this.controlSystem = new externalController();
    }
    public Controller getController() {
        return controlSystem;
    }
    public void setTicketingOrIdentification() {
        cards = new RFID();
        cards.setTicketingOrIdentificationName();
    }
    public void setStorage() {
        this.storage = new SDcard();
    }
    public Storage getStorage() {
        return storage;
    }

    public Identification getTicketingOrIdentification() {
        return cards;
    }
    public void show() {
        System.out.println("Display Unit: " + name);
    }
}
