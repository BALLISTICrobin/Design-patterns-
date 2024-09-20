package myPackage;

public interface Display extends DisplayUnit {
    String displayUnitName = "Display";

    void setName();
    String getName();

    @Override
    void show();
}
