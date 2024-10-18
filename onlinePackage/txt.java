package onlinePackage;

public class txt implements File{
    private String fileName;

    public txt(String name){
        setName(name);
    }

    public void setName(String name){
        this.fileName = name;
    }
    public String getName(){
        return fileName;
    }
}
