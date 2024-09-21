package myPackage2;

import java.util.*;

public class main {
    public static void main(String[] args) {
        Integer customerType;
        BankFactory bankManager = null;
        Scanner scanner = new Scanner(System.in);
        System.out.println("Choose Customer type");
        System.out.println("1. Regular");
        System.out.println("2. Premium");
        System.out.println("3. VIP");
        customerType = scanner.nextInt();
        switch (customerType) {
            case 1:
                System.out.println("Regular Customer");
                bankManager = new RegularFactory();
                break;
            case 2:
                System.out.println("Premium Customer");
                bankManager = new PremiumFactory();
                break;
            case 3:
                System.out.println("VIP Customer");
                bankManager = new VIPfactory();
                break;
            default:
                System.out.println("Invalid Customer Type");
        }

        System.out.println("CHOOSE OPERATION");
        System.out.println("1. ACCOUNTS");
        System.out.println("2. LOAN");
        Integer operation = scanner.nextInt();
        switch (operation) {
            case 1:
                System.out.println("simple Total interest: "+bankManager.getAccount().getTotalInterest(1000.00, 2));
                System.out.println("compound Total interest: "+bankManager.getAccount().getTotalCompoundInterest(1000.00, 2, 2));
                break;
            case 2:
                System.out.println("simple Total interest: "+bankManager.getLoan().getTotalInterest(1000.00, 2));
                System.out.println("compound Total interest: "+bankManager.getLoan().getTotalCompoundInterest(1000.00, 2, 2));
                break;
            default:
                System.out.println("Invalid Operation");
        }

    }
}
