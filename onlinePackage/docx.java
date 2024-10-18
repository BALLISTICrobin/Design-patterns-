package onlinePackage;

public class docx implements File{
    private String fileName;

    public docx(String name){
        setName(name);
    }

    public void setName(String name){
        this.fileName = name;
    }
    public String getName(){
        return fileName;
    }
}
