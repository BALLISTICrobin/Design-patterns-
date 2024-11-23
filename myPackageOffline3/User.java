package myPackageOffline3;

import java.util.*;

public class User implements UserObserver{
    private final String name;
    private final List<String> favoriteGenres = new ArrayList<>();

    public User(String name) {
        this.name = name;
    }

    public void addFavoriteGenre(Genre genre) {
        favoriteGenres.add(genre.getGenreName());
        genre.addObserver(this);
    }

    public void removeFavoriteGenre(Genre genre) {
        favoriteGenres.remove(genre.getGenreName());
        genre.removeObserver(this);
    }

    @Override
    public void update(String movieName, String genre) {
        System.out.println("Notification to " + name + ": A new movie '" + movieName + "' has been added to your favorite genre: " + genre);
    }
}
