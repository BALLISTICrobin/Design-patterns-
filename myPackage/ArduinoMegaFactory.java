package myPackage;

public class ArduinoMegaFactory implements systemFactory {
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
        return "Arduino Mega";
    }
}
