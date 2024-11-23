package myPackageOffline3;

public class NotificationTask implements Runnable {
    private final UserObserver observer;
    private final String movieName;
    private final String genre;
    Thread t;

    public NotificationTask(UserObserver observer, String movieName, String genre) {
        this.observer = observer;
        this.movieName = movieName;
        this.genre = genre;
        t = new Thread(this);
        t.start();
    }

    @Override
    public void run() {
//        System.out.println("thread started");
        observer.update(movieName, genre);
    }
}
