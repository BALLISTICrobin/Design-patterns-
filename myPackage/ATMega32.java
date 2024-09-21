package myPackage;

public class ATMega32 implements microprocessorController {
    private String name;
    private Identification cards;
    private Storage storage;
    private Controller controlSystem;
    private ATMega32Factory factory;
    public ATMega32() {
        setFactory();
        setName();
        setTicketingOrIdentification();
        setStorage();
        setController();
    }

    public void setFactory(){
        factory = new ATMega32Factory();
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
    public void setStorage() {
        this.storage = factory.createStorage();
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
