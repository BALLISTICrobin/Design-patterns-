package myPackage;

public class ArduinoMega implements microprocessorController{
    private String name;
    private Identification cards;
    private Storage storage;
    private Controller controlSystem;
    private ArduinoMegaFactory factory;

    public ArduinoMega() {
        setFactory();
        setName();
        setTicketingOrIdentification();
        setStorage();
        setController();
    }

    public void setFactory(){
        factory = new ArduinoMegaFactory();
    }

    public void setName() {
        name = factory.getName();
    }
    public void setStorage() {
        this.storage = factory.createStorage();
    }
    public void setController() {
        this.controlSystem = factory.createController();
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
        cards = factory.createIdentification();
    }

    public Identification getTicketingOrIdentification() {
        return cards;
    }


    public void show() {
        System.out.println("Display Unit: " + name);
    }
}
