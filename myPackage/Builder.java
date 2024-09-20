package myPackage;

public interface Builder {
    public microprocessorController getMicCtrlPcsr();
    public void setMicroprocessorController(microprocessorController micCtrlPcsr);
    public void setDisplayUnit(Display display);
    public void setIdentification(Identification ticketing);
    public void setPayment(Payment paymentSystem);
    public void setInternetConnection(InternetConnection module);
    public void setStorage(Storage storage);
    public void setController(Controller controlSystem);
    public void setWebServer(webServer server);
    public void setPackageType(PackageType packageType);
    public TicketingSystem build();
    public void showBuilder();
}
