package myPackage;
import java.util.*;

public class main {
    public static void main(String[] args) {
        TicketingSystemDirector director = new TicketingSystemDirector();
        Builder builder = new TicketingSystemBuilder();
        System.out.println("Choose your package: ");
        System.out.println("1. Basic");
        System.out.println("2. Standard");
        System.out.println("3. Advanced");
        System.out.println("4. Premium");

        Scanner scanner = new Scanner(System.in);
        int choice = scanner.nextInt();

        switch(choice) {
            case 1:
                director.Basic(builder);
                break;
            case 2:
                director.Standard(builder);
                break;
            case 3:
                director.Advanced(builder);
                break;
            case 4:
                director.Premium(builder);
                break;
            default:
                System.out.println("Invalid choice");
        }

//        source and destination
        System.out.println("choose your current location and destination: ");
        System.out.println("1. Shahbagh to DU or vice versa: 20");
        System.out.println("2. Farmgate to DU or vice versa: 30");
        System.out.println("3. Motijheel 10 to DU or vice versa: 40");
        System.out.println("4. Agargaon to DU or vice versa: 50");
        System.out.println("5. Mirpur 10 to DU or vice versa: 60");
        System.out.println("6. Uttara to DU or vice versa: 70");
        System.out.println("7. Gulshan to DU or vice versa: 80");

        Payment pay = new OnSpot();
        Integer collectedCash = 0;
        int storeAmount = 0;

        System.out.println("Enter your choice: ");
        int choiceOption = scanner.nextInt();

        switch (choiceOption) {
            case 1:
                storeAmount = 20;
                break;
            case 2:
                storeAmount = 30;
                break;
            case 3:
                storeAmount = 40;
                break;
            case 4:
                storeAmount = 50;
                break;
            case 5:
                storeAmount = 60;
                break;
            case 6:
                storeAmount = 70;
                break;
            case 7:
                storeAmount = 80;
                break;
            default:
                System.out.println("Invalid choice");
                return; // Exit the method if an invalid choice is selected
        }

        // Asking for payment
        System.out.println("Enter the amount you want to pay: ");
        collectedCash = scanner.nextInt();

        pay.setCollect(collectedCash);
        pay.setStore(storeAmount);
        pay.setChange(collectedCash - storeAmount);
        System.out.println("Payment successful. Change: " + (collectedCash - storeAmount));

        builder.setPayment(pay);

        Integer moduleChoice = 0;
        if(builder.getMicCtrlPcsr().getName().equalsIgnoreCase("Raspberry Pi"))
        {
            System.out.println("choose your internet connection module: ");
            System.out.println("1. Ethernet");
            System.out.println("2. Wifi");
            System.out.println("3. GSM");
            System.out.println("enter your choice: ");
            moduleChoice = scanner.nextInt();
        }
        else{
            System.out.println("choose your internet connection module: ");
            System.out.println("4. Wifi");
            System.out.println("5. GSM");
            System.out.println("enter your choice: ");
            moduleChoice = scanner.nextInt();
        }

        switch (moduleChoice) {
            case 1:
                builder.setInternetConnection(new Ethernet());
                break;
            case 2:
                builder.setInternetConnection(new Wifi());
                break;
            case 3:
                builder.setInternetConnection(new GSM());
                break;
            case 4:
                builder.setInternetConnection(new Wifi());
                break;
            case 5:
                builder.setInternetConnection(new GSM());
                break;
            default:
                System.out.println("Invalid choice");
        }

        Integer serverChoice = 0;
        System.out.println("choose your server: ");
        System.out.println("1. Django");
        System.out.println("2. Node Js");
        System.out.println("3. Ruby");
        System.out.println("enter your choice: ");
        serverChoice = scanner.nextInt();
        switch (serverChoice) {
            case 1:
                builder.setWebServer(new Django());
                break;
            case 2:
                builder.setWebServer(new NodeJs());
                break;
            case 3:
                builder.setWebServer(new Ruby());
                break;
            default:
                System.out.println("Invalid choice");
        }
        director.showDirector(builder);


    }
}

