class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} | ${this.address}, ${this.city}, ${this.state} - ${this.zip} | ${this.phone} | ${this.email}`;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    sortByCity() {
        this.contacts.sort((a, b) => a.city.localeCompare(b.city));
    }

    sortByState() {
        this.contacts.sort((a, b) => a.state.localeCompare(b.state));
    }

    sortByZip() {
        this.contacts.sort((a, b) => a.zip.localeCompare(b.zip));
    }

    displayContacts() {
        console.log("\nContacts (Sorted List):");
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
}

// Example Usage
const addressBook = new AddressBook();
addressBook.addContact(new Contact("John", "Doe", "123 Main St", "Delhi", "Delhi", "110001", "9876543210", "john@example.com"));
addressBook.addContact(new Contact("Alice", "Smith", "456 Oak St", "Mumbai", "Maharashtra", "400001", "9123456789", "alice@example.com"));
addressBook.addContact(new Contact("Bob", "Johnson", "789 Pine St", "Delhi", "Delhi", "110002", "9898989898", "bob@example.com"));
addressBook.addContact(new Contact("Emma", "Davis", "555 Willow Rd", "Pune", "Maharashtra", "411001", "9999999999", "emma@example.com"));

console.log("Sorting by City:");
addressBook.sortByCity();
addressBook.displayContacts();

console.log("\nSorting by State:");
addressBook.sortByState();
addressBook.displayContacts();

console.log("\nSorting by Zip:");
addressBook.sortByZip();
addressBook.displayContacts();
