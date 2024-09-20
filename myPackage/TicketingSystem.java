package myPackage;

public class TicketingSystem {
    private microprocessorController micCtrlPcsr;
    private Display display;
    private Identification ticketing;
    private Payment paymentSystem;
    private InternetConnection module;
    private Storage storage;
    private Controller controlSystem;
    private webServer server;
    private PackageType packageType;
    public TicketingSystem(microprocessorController micCtrlPcsr, Display display,
                           Identification ticketing, Payment paymentSystem, InternetConnection module,
                           Storage storage, Controller controlSystem, webServer server, PackageType packageType) {
        this.micCtrlPcsr = micCtrlPcsr;
        this.display = display;
        this.ticketing = ticketing;
        this.paymentSystem = paymentSystem;
        this.module = module;
        this.storage = storage;
        this.controlSystem = controlSystem;
        this.server = server;
        this.packageType = packageType;
    }

    public microprocessorController getMicCtrlPcsr() {
        return micCtrlPcsr;
    }

    public Display getDisplay() {
        return display;
    }

    public Identification getTicketing() {
        return ticketing;
    }

    public Payment getPaymentSystem() {
        return paymentSystem;
    }

    public InternetConnection getModule() {
        return module;
    }

    public Storage getStorage() {
        return storage;
    }

    public Controller getControlSystem() {
        return controlSystem;
    }

    public webServer getServer() {
        return server;
    }
    public void show(){
        System.out.println("Microcontroller/Processor: " + micCtrlPcsr.getName() + "\n" +
                "Display Unit: " + display.getName() + "\n " +
                "Identification: " + ticketing.getTicketingOrIdentificationName() + "\n " +
                "Payment System: " + paymentSystem.pay() + "\n " +
                "Internet Connection: " + module.connect() + "\n " +
                "Storage: " + storage.getStorageType() + "\n" +
                "Controller: " + controlSystem.control() + "\n " +
                "Web Server: " + server.getFramework() + "\n " +
                "Package Type: " + packageType);
    }
}
