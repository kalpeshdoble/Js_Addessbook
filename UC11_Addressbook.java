import java.util.*;
import java.util.stream.Collectors;

class Contact {
    private String firstName, lastName, address, city, state, zip, phone, email;

    public Contact(String firstName, String lastName, String address, String city, String state, String zip, String phone, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    public String getFirstName() { return firstName; }
    public String getLastName() { return lastName; }

    @Override
    public String toString() {
        return firstName + " " + lastName + " | " + address + ", " + city + ", " + state + " - " + zip + " | " + phone + " | " + email;
    }
}

class AddressBook {
    private List<Contact> contacts;

    public AddressBook() {
        this.contacts = new ArrayList<>();
    }

    public void addContact(Contact contact) {
        contacts.add(contact);
    }

    public void sortByName() {
        contacts = contacts.stream()
                .sorted(Comparator.comparing(Contact::getFirstName).thenComparing(Contact::getLastName))
                .collect(Collectors.toList());
    }

    public void displayContacts() {
        System.out.println("\nContacts (Sorted Alphabetically by Name):");
        contacts.forEach(System.out::println);
    }
}

public class UC11_Addressbook {
    public static void main(String[] args) {
        AddressBook addressBook = new AddressBook();

        // Adding sample contacts
        addressBook.addContact(new Contact("John", "Doe", "123 Main St", "Delhi", "Delhi", "110001", "9876543210", "john@example.com"));
        addressBook.addContact(new Contact("Alice", "Smith", "456 Oak St", "Mumbai", "Maharashtra", "400001", "9123456789", "alice@example.com"));
        addressBook.addContact(new Contact("Bob", "Johnson", "789 Pine St", "Delhi", "Delhi", "110002", "9898989898", "bob@example.com"));
        addressBook.addContact(new Contact("Emma", "Davis", "555 Willow Rd", "Pune", "Maharashtra", "411001", "9999999999", "emma@example.com"));

        // Sorting contacts by Name
        addressBook.sortByName();

        // Displaying sorted contacts
        addressBook.displayContacts();
    }
}
