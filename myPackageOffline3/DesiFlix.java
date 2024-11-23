package myPackageOffline3;

public class DesiFlix {
    public static void main(String[] args) throws InterruptedException {
        // Create genres
        Genre thriller = new Genre("Thriller");
        Genre horror = new Genre("Horror");
        Genre comedy = new Genre("Comedy");

        // Create users
        User user1 = new User("Alice");
        User user2 = new User("Bob");
        User user3 = new User("Charlie");

        // Users subscribe to genres
        user1.addFavoriteGenre(thriller);
        user2.addFavoriteGenre(horror);
        user3.addFavoriteGenre(thriller);
        user3.addFavoriteGenre(comedy);

        // Upload new movies and notify users
        System.out.println("Uploading 'Inception' to Thriller...");
        thriller.notifyObservers("Inception", thriller.getGenreName());

        System.out.println("\nUploading 'Conjuring' to Horror...");
        horror.notifyObservers("Conjuring", horror.getGenreName());

        System.out.println("\nUploading 'The Hangover' to Comedy...");
        comedy.notifyObservers("The Hangover", comedy.getGenreName());
    }
}
