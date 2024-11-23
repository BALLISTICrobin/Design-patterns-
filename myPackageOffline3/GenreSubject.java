package myPackageOffline3;

public interface GenreSubject {
    void addObserver(UserObserver observer);
    void removeObserver(UserObserver observer);
    void notifyObservers(String movieName, String genre);
}
