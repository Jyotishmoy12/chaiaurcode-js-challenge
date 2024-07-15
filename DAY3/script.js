let num1=40;

if(num1>0) console.log("positive")
else if(num1<0) console.log("negative")
else console.log("zero");


let age=19

if(age>=18) console.log("eligible")
    else console.log("not eligible");


function findLargestNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1 + " is the largest number.";
    } else if (num2 >= num1 && num2 >= num3) {
        return num2 + " is the largest number.";
    } else {
        return num3 + " is the largest number.";
    }
}

let number1 = 15;
let number2 = 27;
let number3 = 10;

let largestNumber = findLargestNumber(number1, number2, number3);
console.log(largestNumber);



switch (1) {
    case 1: 
    console.log("A");
    break

    case 2:
        console.log("B");
        break
    
    case 3:
        console.log("C");
        break
    
    case 4:
        console.log('D')
        break

    case 5:
        console.log('E')
        break;

    default:
        break;
}


let year = 2012;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(year + " is a leap year");
        } else {
            console.log(year + " is not a leap year");
        }
    } else {
        console.log(year + " is a leap year");
    }
} else {
    console.log(year + " is not a leap year");
}
