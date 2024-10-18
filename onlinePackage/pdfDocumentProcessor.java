package onlinePackage;

public class pdfDocumentProcessor implements DocumentProcessor{
    private File file;

    public pdfDocumentProcessor(File file){
        this.file = file;
    }
    public void LoadDocument(){
        System.out.println(file.getName()+"document is loaded");
    }
    public void SaveDocument(){
        System.out.println(file.getName()+"document is saved");
    }
}
