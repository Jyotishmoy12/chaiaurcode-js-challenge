const arr=[1,2,3,4,5];

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log(arr[0], arr[arr.length-1])

arr.push(6); // add a new number to the last of array
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

arr.pop(arr[arr.length-1]); // remove the last element from the array
for(let i=0; i<arr.length; i++){
   console.log(arr[i]);
}

//shift remove the first element from the array
// unshift add a new number to the begining of the array


const num1=[1,2,3,4,5]
const num2=num1.map((e)=>e*2);
for(let i=0; i<num2.length; i++){
    console.log((num2[i]))
}

const number1=[4,5,6,7,8,9,10];
const number2= number1.filter((e)=>e%2==0);
for(let i=0;i<number2.length;i++){
    console.log(number2[i])
}

const arr1=[10,20,30,40,50,60];
const arr2=arr1.reduce((acc,curr)=>acc+curr,0);
console.log(arr2)


const array=[9,8,7,6,5]
array.forEach(e => {
   console.log(e) 
});

const twoDAarray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < twoDAarray.length; i++) {
    for (let j = 0; j < twoDAarray[i].length; j++) {
        console.log(twoDAarray[i][j]);
    }
}

console.log(twoDAarray[2][1]);