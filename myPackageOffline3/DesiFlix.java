package myPackageOffline3;

public class DesiFlix {
    public static void main(String[] args) throws InterruptedException {
        // Create genres
        Genre thriller = new Genre("Thriller");
        Genre action = new Genre("action");
        Genre comedy = new Genre("Comedy");

        // Create users
        User user1 = new User("Robin");
        User user2 = new User("Sayjad");
        User user3 = new User("Jihad");

        // Users subscribe to genres
        user1.addFavoriteGenre(thriller);
        user2.addFavoriteGenre(action);
        user3.addFavoriteGenre(thriller);
        user3.addFavoriteGenre(comedy);

        // Upload new movies and notify users
        System.out.println("Uploading 'Inception' to Thriller...");
        thriller.notifyObservers("Inception", thriller.getGenreName());

        System.out.println("\nUploading 'Mission Impossible' to action...");
        action.notifyObservers("Mission Impossible", action.getGenreName());

        System.out.println("\nUploading 'Friends' to Comedy...");
        comedy.notifyObservers("Friends", comedy.getGenreName());
    }
}
