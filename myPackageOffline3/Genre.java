package myPackageOffline3;

import java.util.*;

public class Genre implements GenreSubject{
    private final String genreName;
    private final List<UserObserver> observers = new ArrayList<>();

    public Genre(String genreName) {
        this.genreName = genreName;
    }

    @Override
    public void addObserver(UserObserver observer) {
        observers.add(observer);
    }

    @Override
    public void removeObserver(UserObserver observer) {
        observers.remove(observer);
    }

    @Override
    public void notifyObservers(String movieName, String genre) {
        for (UserObserver observer : observers) {
            // Create a thread for each observer notification
            new NotificationTask(observer, movieName, genre);
        }
    }

    public String getGenreName() {
        return genreName;
    }

}
