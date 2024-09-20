package myPackage;

public interface microprocessorController extends DisplayUnit{
    String displayUnitName = "Microprocessor Controller";

    void setName();
    String getName();
    void setTicketingOrIdentification();
    Identification getTicketingOrIdentification();
    void setStorage();
    Storage getStorage();
    void setController();
    Controller getController();
}
