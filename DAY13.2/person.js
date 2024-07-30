// person.js

// Create an object representing a person
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,

    // Method to get the full name of the person
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Method to celebrate a birthday
    celebrateBirthday() {
        this.age += 1;
        console.log(`Happy Birthday, ${this.firstName}! You are now ${this.age} years old.`);
    }
};

// Export the person object
export default person;
