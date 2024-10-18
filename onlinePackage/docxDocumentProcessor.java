package onlinePackage;

public class docxDocumentProcessor implements DocumentProcessor{
    private File file;

    public docxDocumentProcessor(File file){
        this.file = file;
    }
    public void LoadDocument(){
        System.out.println(file.getName()+"document is loaded");
    }
    public void SaveDocument(){
        System.out.println(file.getName()+"document is saved");
    }

}
