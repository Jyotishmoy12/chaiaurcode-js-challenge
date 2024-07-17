function checkEvenORodd(num){
    if(num%2==0){
        return "even";
    }
    else{
        return "odd";
    }
}

console.log(checkEvenORodd(9))


function calculateSquare(num){
    return num*num;
}

console.log(calculateSquare(90))

function findMaximum(num1, num2){
    return Math.max(num1, num2);
}

console.log(findMaximum(4,6))


function concateStrings(str1, str2){
    return str1 + str2;
}

console.log(concateStrings("hello", "world"))


const calculateSum=(num1, num2)=>{
    return num1 + num2;
}

console.log(calculateSum(8,9))

const checkString=(str,ch)=>{
    return str.indexOf(ch) !== -1; // learnt something new
}

console.log(checkString("hello" ,"e"));

function calculateProduct(num1, num2=4){
    return num1 * num2;
}

console.log(calculateProduct(3));


const greetingPerson=(str, age=18)=>{
    return str+" "+"hello hi welcome";
}

console.log(greetingPerson("Jyotishmoy"))


function callFunctionNTimes(num, func) {
    for (let i = 0; i < num; i++) {
        func(); // Call the provided function 'num' times
    }
}

function greet() {
    console.log("Hello, world!");
}

callFunctionNTimes(3, greet);


function composeFunctions(func1, func2, value) {
    return func2(func1(value));
}

function double(x) {
    return x * 2; // 5*2=10
}

function square(x) {
    return x * x; // 10*10=100
}

let num = 5;
let result = composeFunctions(double, square, num);
console.log(result); 

