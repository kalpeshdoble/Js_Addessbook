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

// Example Usage:
try {
    let contact = new Contact("John", "Doe", "1234 Main St", "Delhi", "Delhi", "110001", "9876543210", "john.doe@example.com");
    console.log("Contact added successfully:", contact);
} catch (error) {
    console.error("Error:", error.message);
}
