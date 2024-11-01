package myPackageOffline2;
import java.util.ArrayList;
import java.util.Scanner;

public class KhaidaiBistro {
    private ArrayList<menuItem> menuItems;
    private Scanner scanner;

    public KhaidaiBistro() {
        this.menuItems = new ArrayList<menuItem>();
        this.scanner = new Scanner(System.in);
//        1. Burger - 300tk
//        2. Fries - 100tk
//        3. Wedges - 150tk
//        4. Shawarma - 200tk
//        5. Drink - 25tk
        menuItem food1 = new food("Burger", 300);
        menuItem food2 = new food("Fries", 100);
        menuItem food3 = new food("Wedges", 150);
        menuItem food4 = new food("Shawarma", 200);
        menuItem food5 = new food("Drink", 25);

        menuItems.add(food1);
        menuItems.add(food2);
        menuItems.add(food3);
        menuItems.add(food4);
        menuItems.add(food5);

//        6. Combo1 (Burger + Fries + Drink) - 400tk
//        7. Combo2 (Shawarma + Drink) - 215tk

        menuItem combo1 = new combo("Combo1",400);
        ((combo)combo1).addItem(food1);
        ((combo)combo1).addItem(food2);
        ((combo)combo1).addItem(food5);

        menuItem combo2 = new combo("Combo2",215);
        ((combo)combo2).addItem(food4);
        ((combo)combo2).addItem(food5);

        menuItems.add(combo1);
        menuItems.add(combo2);

    }

    public void showMenu() {
        System.out.println("Menu:");
        for (int i = 0; i < menuItems.size(); i++) {
            System.out.println((i+1) + ". " + menuItems.get(i).getDescription() + " - " + menuItems.get(i).getPrice() + "tk");
        }
    }

    public menuItem findItem(String name) {
        for (menuItem item : menuItems) {
            if (item.getDescription().contains(name)) {
                return item;
            }
        }
        return null;
    }

    public void createCombo(){
        double discount=0;
        System.out.println("Enter the name of the combo:");
        String comboName = scanner.nextLine();

//        Available commands:
//        Add [item]
//        Remove [item]
//        Free [item]
//        Discount [percentage]
//        Done

        menuItem combo = new combo(comboName,0);
        System.out.println("Available commands:");
        System.out.println("Add [item]");
        System.out.println("Remove [item]");
        System.out.println("Free [item]");
        System.out.println("Discount [percentage]");
        System.out.println("Done");

            while (true) {
                String command = scanner.nextLine();
                if (command.equalsIgnoreCase("Done")) {
                    break;
                }
                else if (command.startsWith("Add")) {
                    String itemName = command.substring(4);
                    menuItem item = findItem(itemName);
                    if (item != null) {
                        ((combo) combo).addItem(item);
                    }
                }
                else if (command.startsWith("Remove")) {
                    String itemName = command.substring(7);
                    menuItem item = findItem(itemName);
                    if (item != null) {
                        ((combo) combo).removeItem(item);
                    }
                }
                else if (command.startsWith("Free")) {
                    String itemName = command.substring(5);
                    menuItem item = findItem(itemName);
                    if(item!=null){
                        menuItem freeItem = new freeDecorator(item);
                        ((combo) combo).addItem(freeItem);
                    }

                }
                else if (command.startsWith("Discount")) {
                    String discountValue = command.substring(9);
                    discount = Double.parseDouble(discountValue);
                }
            }
        menuItem discountCombo = new discountDecorator(combo, discount);
        menuItems.add(discountCombo);
        System.out.println("Your Combo");
        System.out.println(comboName);
        for(menuItem item: ((combo) combo).getItems()){
            System.out.println("-"+item.getDescription());
        }
        System.out.print("Total-");
        System.out.println(combo.getPrice());
        System.out.print("Discount-");
        System.out.println(discount);
        System.out.print("Discounted total-");
        System.out.println(discountCombo.getPrice());
    }

    public static void main(String[] args) {
        KhaidaiBistro bistro = new KhaidaiBistro();
        bistro.showMenu();

//        Press 1 to create a combo, 2 to view menu
//        and 0 to exit
        int your_choice;
        do {
            System.out.println("Press 1 to create a combo, 2 to view menu and 0 to exit");
            your_choice= bistro.scanner.nextInt();
            bistro.scanner.nextLine();
            if (your_choice == 1) {
                bistro.createCombo();
            } else if (your_choice == 2) {
                bistro.showMenu();
            }
        } while (your_choice != 0);
    }

}
