// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     getGreeting(){
//         return `Hello my name is ${this.name} and I am ${this.age} years old`
//     }
//     updateAge(newAge){
//         this.age = newAge;
//         console.log(`Age updated to ${this.age}`)
//     }
//     static getGreetingGeneric(){
//         return "Hello welcome to my house !"
//     }
// }
// // creating an instance of the person class
// const person = new Person("Alice", 30)

// console.log(person.getGreeting())

// person.updateAge(45)
// console.log(person.getGreeting())

// const getGreetings=Person.getGreetingGeneric
// console.log(getGreetings)



// class Student extends Person{
//     static numberOfStudents=0;
//     constructor(name, age, studentId){
//         super(name, age); // call the parent class 
//         this.studentId=studentId;
//         Student.numberOfStudents++;
//     }
//     getStudentId(){
//         return this.studentId;
//     }
//     getGreeting(){
//        return `${super.getGreeting()} My student Id is ${this.studentId}`; 
//     }
//     static getTotalStudents(){
//         return`Total number of students: ${Student.numberOfStudents}`
//     }
// }

// const student = new Student("Alice", 20, 321567)
// const student2 = new Student('Bob', 22, 'S67890');
// const student3 = new Student('Charlie', 25, 'S11223');
// console.log(Student.getTotalStudents());
// console.log(`Student Id: ${student.getStudentId()}`)
// console.log(student.getGreeting())


class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(name){
        const [firstName, lastName]=name.split(' ')
        this.firstName = firstName;
        this.lastName = lastName;

    }
    getGreeting(){
        return `Hello, My name is ${this.fullName} and i am ${this.age} years old`
    }
}

const person = new Person('John', 'Doe', 28);
console.log(person.fullName);
person.fullName = 'Jane Smith';
console.log(person.fullName);
console.log(person.getGreeting());



