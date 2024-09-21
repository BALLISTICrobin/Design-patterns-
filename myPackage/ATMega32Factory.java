package myPackage;

public class ATMega32Factory implements systemFactory{
    public Identification createIdentification() {
        return new RFID();
    }

    public Storage createStorage() {
        return new SDcard();
    }

    public Controller createController() {
        return new externalController();
    }

    public String getName() {
        return "ATMega32";
    }
}
