package myPackage;

public class RFID implements Identification {
    private String ticketingOrIdentificationName;

    public RFID() {
        setTicketingOrIdentificationName();
    }

    public void setTicketingOrIdentificationName() {
        ticketingOrIdentificationName = "RFID Cards";
    }

    public String getTicketingOrIdentificationName() {
        return ticketingOrIdentificationName;
    }

    public RFID getTicketingOrIdentification() {
        return this;
    }
}
