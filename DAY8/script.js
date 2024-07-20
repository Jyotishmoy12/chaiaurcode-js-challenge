
// let name="Jyotishmoy";
// let age=22;
// let string=(`${name} and ${age}`)
// console.log(string)

const multiLineString = `
    This is a multi-line string
    using template literals.
    
    It allows us to easily create strings
    that span across multiple lines.
    
    We can also interpolate variables like this:
    Current date: ${new Date().toLocaleDateString()}.
`;

console.log(multiLineString);


const arr=[10,20,30,40,50,60]

const [firstElement, secondElement, ... remaining] = arr

console.log(firstElement, secondElement)


// destructuring
const book={
    title:"The man on the moon",
    author:"Jyotishmoy",
}

const {title, author} = book
console.log(title, "by", author)


// spread
const numbers=[1,2,3,4,5,6,7,8,9]
const additionalElements=[10,11,12];
const newArray=[...numbers, ...additionalElements]
console.log(newArray)


// rest operator
function nums(...newNumber){
    let total=0;
    for(const num of newNumber){
        total+=num
    }
    return total
}
console.log(nums(1,2,3,4))


function product(num1, num2=10){
   return num1*num2;
}
console.log(product(10))

// Example using enhanced object literals
const name = "John";
const age = 30;

const person = {
    name,
    age, 
    greet() { 
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    celebrateBirthday() {
        this.age++;
        console.log(`Happy Birthday! Now I am ${this.age} years old.`);
    }
};

console.log(person);
person.greet();
person.celebrateBirthday();



// learnt something new
const PropertyName="color"
const propertyValue="blue"
const dynamicObject={
    [PropertyName]:propertyValue,
    [`is${PropertyName.charAt(0).toUpperCase()+PropertyName.slice(1)}present`]:true
}

console.log(dynamicObject)