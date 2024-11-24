package online3;

import myPackage2.PremiumFactory;
import myPackage2.RegularFactory;
import myPackage2.VIPfactory;

import java.util.Scanner;

public class paymentClass {
    public static void main(String[] args) {
        strategyContext payment = new paymentSystemContext();
        Scanner scanner = new Scanner(System.in);
        System.out.println("choose your payment method:");
        System.out.println("1. credit");
        System.out.println("2. bkash");
        System.out.println("3. cryptocurrency");
        Integer choice;
        choice = scanner.nextInt();
        switch (choice) {
            case 1:
                payment.setPaymentMethod(new creditCards());
                payment.checkOut();
                break;
            case 2:
                payment.setPaymentMethod(new bkash());
                payment.checkOut();
                break;
            case 3:
                payment.setPaymentMethod(new cryptocurrency());
                payment.checkOut();
                break;
            default:
                System.out.println("Invalid choice Type");
        }

    }
}
