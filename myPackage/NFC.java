package myPackage;

public class NFC implements Identification {


    private String ticketingOrIdentificationName;

    public NFC() {
        setTicketingOrIdentificationName();
    }

    public void setTicketingOrIdentificationName() {
        ticketingOrIdentificationName = "NFC Cards";
    }

    public String getTicketingOrIdentificationName() {
        return ticketingOrIdentificationName;
    }

    public NFC getTicketingOrIdentification() {
        return this;
    }
}
