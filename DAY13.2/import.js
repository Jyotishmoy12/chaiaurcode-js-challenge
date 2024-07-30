// main.js

// Import the person object from the person module
import person from './person.js';

// Use the person's methods and properties
console.log(`Full Name: ${person.getFullName()}`);
console.log(`Age: ${person.age}`);

// Celebrate the person's birthday
person.celebrateBirthday();
