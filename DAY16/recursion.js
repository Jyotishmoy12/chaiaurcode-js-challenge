function calculateFactorial(n){
    if(n==0) return 1

    if(n==1) return 1

    return n*calculateFactorial(n-1)
}

console.log(calculateFactorial(5))

function fibonacci(n){
     if(n<=1) return n

    return fibonacci(n-1)+fibonacci(n-2)
}

console.log(fibonacci(5))




function sumOfElements(arr){
    if(arr.length==0) return 0;

    return arr[0]+sumOfElements(arr.slice(1))
}

const numbers = [1, 2, 3, 4, 5];
const result = sumOfElements(numbers);
console.log(`The sum of the array elements is: ${result}`);


function findMax(arr){
    if(arr.length==1) return arr[0];

    const maxOfRest=findMax(arr.slice(1))
    return arr[0]>maxOfRest?arr[0]:maxOfRest
}

const num = [10, 5, 8, 23, 1];
const max = findMax(num);
console.log(`The maximum element in the array is: ${max}`);

function reverseString(s){
    if(s.length<=1) return s;

    return reverseString(s.slice(1))+s[0]
}

const originalString = 'Hello, world!';
const reversedString = reverseString(originalString);
console.log(`The reversed string is: ${reversedString}`);


// Recursive function to check if a string is a palindrome
function isPalindrome(str) {
    // Base case: if the string is empty or has one character, it is a palindrome
    if (str.length <= 1) {
        return true;
    }
    
    // Compare the first and last characters
    if (str[0] === str[str.length - 1]) {
        // Recursive case: check the substring without the first and last characters
        return isPalindrome(str.slice(1, -1));
    } else {
        // If the first and last characters don't match, it's not a palindrome
        return false;
    }
}

// Example usage
const testString = 'mouuom';
const res = isPalindrome(testString);
console.log(`The string "${testString}" is ${res ? 'a palindrome' : 'not a palindrome'}`);
// Output: The string "mouuom" is a palindrome
