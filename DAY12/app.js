
// function throwNewError(){
//     try{
//         throw new Error('Error thrown from try block');
//     }
//     catch(error){
//         console.error("error caught:", error.message)
//     }
// }

// throwNewError()

// function divideTwoNumbers(num1, num2){
//     try{
//         if(num2==0){
//             throw new Error('Cannot divide by zero')
//         }
//     }
//     catch(error){
//         console.error("error caught:", error.message)
//     }
// }

// divideTwoNumbers(1,0)
// divideTwoNumbers(2,4)


// function exampleFunction() {
//     try {
//         console.log("Inside try block: Start of try block");
        
//         // Simulate some operation that might throw an error
//         const randomValue = Math.random();
//         if (randomValue < 0.5) {
//             throw new Error("Random value less than 0.5");
//         }
        
//         console.log("Inside try block: End of try block");
//     } catch (error) {
//         console.log("Inside catch block:", error.message);
//     } finally {
//         console.log("Inside finally block: This always runs");
//     }
// }

// // Calling the function to observe execution flow
// exampleFunction();



// // returns a promise if the number is greater that 0.5 then the promise will return resolve else reject
// function getRandomPromise(){
//     return new Promise((resolve, reject) => {
//         const isSuccess=Math.random()>0.5;
//         setTimeout(()=>{
//             if(isSuccess){
//                 resolve("Promise resolved")
//             }
//             else{
//                 reject("Promise rejected")
//             }
//         }, 1000)
//     })
// }

// getRandomPromise()
// .then((message)=>{
//     console.log(message)
// })
// .catch((error)=>{
//     console.error(error)
// });


// function getRandomPromise(){
//     return new Promise((resolve, reject) => {
//         const isSuccess=Math.random()>0.5;
//         setTimeout(()=>{
//             if(isSuccess){
//                 resolve("Promise resolved")
//             }
//             else{
//                 reject("Promise rejected")
//             }
//         }, 1000);
//     })
// }

// async function handlePromise(){
//     try{
//         const message = await getRandomPromise();
//         console.log(message)
//     }
//     catch(error){
//         console.error(error)
//     }
// }


function fetchDataFromInvalidUrl(){
    const invalidUrl ='https://invalid.url/not-found';
    fetch(invalidUrl)
    .then(response=>{
        if(!response.ok){
            throw new Error('Network response was not ok')
        }
        return response.json()
    })
    .then(data=>{
        console.log(data)  // log the data is the response is succesfull
    })
    .catch(error=>{
        console.error(error)
    })
}

fetchDataFromInvalidUrl()