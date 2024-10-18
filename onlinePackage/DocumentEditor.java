package onlinePackage;
import java.util.*;

public class DocumentEditor {
    public static void main(String[] args) {
        String filename=null;
        DocumentProcessor docProcessor = null;
        File file = null;
        Scanner scanner = new Scanner(System.in);
        System.out.println("enter file name");
        filename = scanner.nextLine();
        StringTokenizer token = new StringTokenizer(filename,".");
        while (token.hasMoreTokens()){
            switch (token.nextToken()){

                case "docx":
                    file = new docx(filename);
                    docProcessor = new docxDocumentProcessor(file);
                    break;

                case "pdf":
                    file = new pdf(filename);
                    docProcessor = new pdfDocumentProcessor(file);
                    break;

                case "txt":
                    file = new txt(filename);
                    docProcessor = new txtDocumentProcessor(file);
                    break;

                default:
                    continue;
            }
        }
        docProcessor.LoadDocument();
        docProcessor.SaveDocument();

    }
}
