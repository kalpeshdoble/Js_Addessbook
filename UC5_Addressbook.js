class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateAddress(address, "Address");
        this.city = this.validateAddress(city, "City");
        this.state = this.validateAddress(state, "State");
        this.zip = this.validateZip(zip);
        this.phone = this.validatePhone(phone);
        this.email = this.validateEmail(email);
    }

    validateName(name, fieldName) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (!nameRegex.test(name)) {
            throw new Error(`${fieldName} must start with a capital letter and have at least 3 characters.`);
        }
        return name;
    }

    validateAddress(value, fieldName) {
        if (value.length < 4) {
            throw new Error(`${fieldName} must have at least 4 characters.`);
        }
        return value;
    }

    validateZip(zip) {
        const zipRegex = /^[1-9][0-9]{5}$/; // Example: Indian PIN code format
        if (!zipRegex.test(zip)) {
            throw new Error(`Invalid Zip Code format.`);
        }
        return zip;
    }

    validatePhone(phone) {
        const phoneRegex = /^[6-9][0-9]{9}$/; // Example: Indian mobile number format
        if (!phoneRegex.test(phone)) {
            throw new Error(`Invalid Phone Number format.`);
        }
        return phone;
    }

    validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw new Error(`Invalid Email format.`);
        }
        return email;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (this.contacts.some(c => c.phone === contact.phone || c.email === contact.email)) {
            throw new Error("Contact with the same phone or email already exists.");
        }
        this.contacts.push(contact);
        console.log("Contact added successfully!");
    }

    findContact(firstName, lastName) {
        return this.contacts.find(contact => contact.firstName === firstName && contact.lastName === lastName);
    }

    editContact(firstName, lastName, newDetails) {
        let contact = this.findContact(firstName, lastName);
        if (!contact) {
            throw new Error(`Contact ${firstName} ${lastName} not found.`);
        }

        // Update fields if provided
        if (newDetails.address) contact.address = contact.validateAddress(newDetails.address, "Address");
        if (newDetails.city) contact.city = contact.validateAddress(newDetails.city, "City");
        if (newDetails.state) contact.state = contact.validateAddress(newDetails.state, "State");
        if (newDetails.zip) contact.zip = contact.validateZip(newDetails.zip);
        if (newDetails.phone) contact.phone = contact.validatePhone(newDetails.phone);
        if (newDetails.email) contact.email = contact.validateEmail(newDetails.email);

        console.log(`Contact ${firstName} ${lastName} updated successfully!`);
    }

    deleteContact(firstName, lastName) {
        const index = this.contacts.findIndex(contact => contact.firstName === firstName && contact.lastName === lastName);
        if (index === -1) {
            throw new Error(`Contact ${firstName} ${lastName} not found.`);
        }
        this.contacts.splice(index, 1);
        console.log(`Contact ${firstName} ${lastName} deleted successfully!`);
    }

    displayContacts() {
        console.log("Address Book Contacts:");
        if (this.contacts.length === 0) {
            console.log("No contacts available.");
            return;
        }
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.firstName} ${contact.lastName}, ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}, ${contact.phone}, ${contact.email}`);
        });
    }
}

// Example Usage:
try {
    let myAddressBook = new AddressBook();
    
    let contact1 = new Contact("John", "Doe", "1234 Main St", "Delhi", "Delhi", "110001", "9876543210", "john.doe@example.com");
    myAddressBook.addContact(contact1);

    let contact2 = new Contact("Alice", "Smith", "5678 Park Ave", "Mumbai", "Maharashtra", "400001", "9123456789", "alice.smith@example.com");
    myAddressBook.addContact(contact2);

    myAddressBook.displayContacts();

    // Delete a contact
    myAddressBook.deleteContact("John", "Doe");

    myAddressBook.displayContacts();
} catch (error) {
    console.error("Error:", error.message);
}
