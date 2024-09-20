package myPackage;

public class TicketingSystemDirector {
    public void Basic(Builder builder){
        microprocessorController atmega32 = new ATMega32();
        builder.setMicroprocessorController(atmega32);
        builder.setDisplayUnit(new LCD());
        builder.setIdentification(atmega32.getTicketingOrIdentification());
        builder.setStorage(atmega32.getStorage());
        builder.setController(atmega32.getController());
        builder.setPackageType(PackageType.BASIC);

    }

    public void Standard(Builder builder){
        microprocessorController arduinoMega = new ArduinoMega();
        builder.setMicroprocessorController(arduinoMega);
        builder.setDisplayUnit(new LED());
        builder.setIdentification(arduinoMega.getTicketingOrIdentification());
        builder.setStorage(arduinoMega.getStorage());
        builder.setController(arduinoMega.getController());
        builder.setPackageType(PackageType.STANDARD);
    }

    public void Advanced(Builder builder){
        microprocessorController raspberrypi = new RaspberryPi();
        builder.setMicroprocessorController(raspberrypi);
        builder.setDisplayUnit(new OLED());
        builder.setIdentification(raspberrypi.getTicketingOrIdentification());
        builder.setStorage(raspberrypi.getStorage());
        builder.setController(raspberrypi.getController());
        builder.setPackageType(PackageType.ADVANCED);
    }

    public void Premium(Builder builder){
        microprocessorController raspberrypi = new RaspberryPi();
        builder.setMicroprocessorController(raspberrypi);
        builder.setDisplayUnit(new touchScreenDisplay());
        builder.setIdentification(raspberrypi.getTicketingOrIdentification());
        builder.setStorage(raspberrypi.getStorage());
        builder.setController(raspberrypi.getController());
        builder.setPackageType(PackageType.PREMIUM);
    }

    public void showDirector(Builder builder){
        builder.build();
        builder.showBuilder();
    }
}
