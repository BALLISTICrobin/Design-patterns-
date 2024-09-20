package myPackage;

public class Ruby implements webServer{
    private String framework;

    public Ruby() {
        setFramework();
    }

    public void setFramework() {
        this.framework = "Ruby";
    }

    public String getFramework() {
        return framework;
    }

    public void serverUse() {
        System.out.println("webserver is developed by " +framework );
    }
}
