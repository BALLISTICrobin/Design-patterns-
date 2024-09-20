package myPackage;

public class Django implements webServer{
    private String framework;

    public Django() {
        setFramework();
    }

    public void setFramework() {
        this.framework = "Django";
    }

    public String getFramework() {
        return framework;
    }

    public void serverUse() {
        System.out.println("webserver is developed by " +framework );
    }
}
