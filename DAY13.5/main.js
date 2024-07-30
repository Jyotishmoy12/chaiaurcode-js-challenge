// main.js

// Import the entire module as an object
import * as utils from './utils.js';

// Using the imported constants and functions
const a = 10;
const b = 5;

console.log(`PI: ${utils.PI}`);                  // Output: PI: 3.14159
console.log(`E: ${utils.E}`);                    // Output: E: 2.71828
console.log(`Add: ${utils.add(a, b)}`);          // Output: Add: 15
console.log(`Subtract: ${utils.subtract(a, b)}`); // Output: Subtract: 5
console.log(`Multiply: ${utils.multiply(a, b)}`); // Output: Multiply: 50
console.log(`Divide: ${utils.divide(a, b)}`);    // Output: Divide: 2
