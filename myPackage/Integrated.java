package myPackage;

public class Integrated implements Storage{
    private String storageType;

    public Integrated() {
        setStorageType();
    }

    public void setStorageType() {
        this.storageType = "Integrated";
    }

    public String getStorageType() {
        return storageType;
    }

    public void storageDetails() {
        System.out.println("Storage Type: " + getStorageType());
    }
}
