package myPackage;

public class ArduinoMega implements microprocessorController{
    private String name;
    private Identification cards;
    private Storage storage;
    private Controller controlSystem;

    public ArduinoMega() {
        setName();
        setTicketingOrIdentification();
        setStorage();
        setController();
    }

    public void setName() {
        name = "Arduino Mega";
    }
    public void setStorage() {
        this.storage = new SDcard();
    }
    public void setController() {
        this.controlSystem = new externalController();
    }
    public Controller getController() {
        return controlSystem;
    }
    public Storage getStorage() {
        return storage;
    }

    public String getName() {
        return name;
    }
    public void setTicketingOrIdentification() {
        cards = new RFID();
        cards.setTicketingOrIdentificationName();
    }

    public Identification getTicketingOrIdentification() {
        return cards;
    }


    public void show() {
        System.out.println("Display Unit: " + name);
    }
}
