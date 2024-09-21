package myPackage;

public interface systemFactory {
    Identification createIdentification();
    Storage createStorage();
    Controller createController();
    String getName();
}
