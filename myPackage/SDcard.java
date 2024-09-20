package myPackage;

public class SDcard implements Storage{
    private String storageType;

    public SDcard() {
        setStorageType();
    }

    public void setStorageType() {
        this.storageType = "SD card";
    }

    public String getStorageType() {
        return storageType;
    }

    public void storageDetails() {
        System.out.println("Storage Type: " + getStorageType());
    }
}
