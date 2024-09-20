package myPackage;

public class TicketingSystemBuilder implements Builder{
    private microprocessorController micCtrlPcsr;
    private Display display;
    private Identification ticketing;
    private Payment paymentSystem;
    private InternetConnection module;
    private Storage storage;
    private Controller controlSystem;
    private webServer server;
    private PackageType packageType;
    private TicketingSystem ticketingSystem;

    public microprocessorController getMicCtrlPcsr() {
        return micCtrlPcsr;
    }

    public void setMicroprocessorController(microprocessorController micCtrlPcsr) {
        this.micCtrlPcsr = micCtrlPcsr;
    }

    public void setDisplayUnit(Display display) {
        this.display = display;
    }

    public void setIdentification(Identification ticketing) {
        this.ticketing = ticketing;
    }

    public void setPayment(Payment paymentSystem) {
        this.paymentSystem = paymentSystem;
    }

    public void setInternetConnection(InternetConnection module) {
        this.module = module;
    }

    public void setStorage(Storage storage) {
        this.storage = storage;
    }

    public void setController(Controller controlSystem) {
        this.controlSystem = controlSystem;
    }

    public void setWebServer(webServer server) {
        this.server = server;
    }

    public void setPackageType(PackageType packageType) {
        this.packageType = packageType;
    }

    public TicketingSystem build() {
        this.ticketingSystem = new TicketingSystem(micCtrlPcsr, display, ticketing, paymentSystem, module, storage, controlSystem, server, packageType);
        return ticketingSystem;
    }

    public void showBuilder(){
        ticketingSystem.show();
    }
}
