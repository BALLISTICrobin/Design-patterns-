package myPackage;

public class NodeJs implements webServer{
    private String framework;

    public NodeJs() {
        setFramework();
    }

    public void setFramework() {
        this.framework = "NodeJs";
    }

    public String getFramework() {
        return framework;
    }

    public void serverUse() {
        System.out.println("webserver is developed by " +framework );
    }
}
