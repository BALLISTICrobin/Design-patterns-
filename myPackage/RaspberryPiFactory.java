package myPackage;

public class RaspberryPiFactory implements systemFactory{
    public Identification createIdentification() {
        return new NFC();
    }

    public Storage createStorage() {
        return new Integrated();
    }

    public Controller createController() {
        return new touchScreen();
    }

    public String getName() {
        return "Raspberry Pi";
    }
}
