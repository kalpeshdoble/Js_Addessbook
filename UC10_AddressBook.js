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
        const zipRegex = /^[1-9][0-9]{5}$/;
        if (!zipRegex.test(zip)) {
            throw new Error(`Invalid Zip Code format.`);
        }
        return zip;
    }

    validatePhone(phone) {
        const phoneRegex = /^[6-9][0-9]{9}$/;
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
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact(contact) {
        let isDuplicate = this.contacts
            .filter(c => c.firstName === contact.firstName && c.lastName === contact.lastName)
            .reduce((exists, c) => exists || true, false);

        if (isDuplicate) {
            throw new Error(`Duplicate Entry: Contact '${contact.firstName} ${contact.lastName}' already exists in '${this.name}'.`);
        }

        this.contacts.push(contact);
        console.log(`Contact '${contact.firstName} ${contact.lastName}' added successfully to '${this.name}'!`);
    }

    countByCity() {
        return this.contacts.reduce((countMap, contact) => {
            countMap[contact.city] = (countMap[contact.city] || 0) + 1;
            return countMap;
        }, {});
    }

    countByState() {
        return this.contacts.reduce((countMap, contact) => {
            countMap[contact.state] = (countMap[contact.state] || 0) + 1;
            return countMap;
        }, {});
    }

    displayContacts() {
        console.log(`Contacts in ${this.name}:`);
        if (this.contacts.length === 0) {
            console.log("No contacts available.");
            return;
        }
        this.contacts.map((contact, index) => {
            console.log(`${index + 1}. ${contact.firstName} ${contact.lastName}, ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}, ${contact.phone}, ${contact.email}`);
        });
    }
}

// Example Usage:
try {
    let myAddressBook = new AddressBook("Personal");

    let contact1 = new Contact("John", "Doe", "1234 Main St", "Delhi", "Delhi", "110001", "9876543210", "john.doe@example.com");
    myAddressBook.addContact(contact1);

    let contact2 = new Contact("Alice", "Smith", "5678 Park Ave", "Mumbai", "Maharashtra", "400001", "9123456789", "alice.smith@example.com");
    myAddressBook.addContact(contact2);

    let contact3 = new Contact("Bob", "Johnson", "9101 Elm St", "Delhi", "Delhi", "110002", "9898989898", "bob.johnson@example.com");
    myAddressBook.addContact(contact3);

    let contact4 = new Contact("Emma", "Davis", "555 Willow Rd", "Pune", "Maharashtra", "411001", "9999999999", "emma.davis@example.com");
    myAddressBook.addContact(contact4);

    // Count contacts by City
    console.log("Number of persons by City:", myAddressBook.countByCity());

    // Count contacts by State
    console.log("Number of persons by State:", myAddressBook.countByState());

    myAddressBook.displayContacts();
} catch (error) {
    console.error("Error:", error.message);
}
