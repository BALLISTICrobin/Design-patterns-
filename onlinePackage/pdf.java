package onlinePackage;

public class pdf implements File{
    private String fileName;

    public pdf(String name){
        setName(name);
    }

    public void setName(String name){
        this.fileName = name;
    }
    public String getName(){
        return fileName;
    }
}
