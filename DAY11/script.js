// const myPromise = new Promise((resolve, reject) => { ... }): 
// This creates a new Promise instance. 
// Inside the executor function, resolve is a function that 
// will be called when the asynchronous operation 
// (in this case, a timeout) completes successfully.

const myPromise=new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('promise resolved after 2 seconds!')
    },2000 )
})


// myPromise.then((message) => { console.log(message); }): 
// The then method is used to handle the resolved value (message). 
// When the Promise resolves successfully (i.e., after 2 seconds), the callback function 
// passed to then will execute, logging the resolved message
//  ('Promise resolved after 2 seconds!') to the console.

myPromise.then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.error('error', error)
})


const newPromise= new Promise((resolve, reject)=>{
    setTimeout(()=>{
       reject('Cant resolve the promise!')
    }, 2000)
})

newPromise.then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.error('error', error)
})


// // Simulated function to fetch data from server
// function fetchDataFromServer() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = { id: 1, name: 'John Doe', age: 30 };
//             resolve(data); // Simulated successful response
//         }, 1000); // Simulate 1 second delay
//     });
// }

// // Log messages in a specific order using chained Promises
// fetchDataFromServer()
//     .then((data) => {
//         console.log('Step 1: Initiated request to fetch data');
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(data); // Pass the data to the next .then block
//             }, 1000); // Simulate 1 second delay
//         });
//     })
//     .then((data) => {
//         console.log(`Step 2: Received response from server - Data: ${JSON.stringify(data)}`);
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(data);
//             }, 1500); // Simulate processing delay of 1.5 seconds
//         });
//     })
//     .then((data) => {
//         console.log(`Step 3: Processed data - Name: ${data.name}, Age: ${data.age}`);
//         console.log('All steps completed successfully');
//     })
//     .catch((error) => {
//         console.error('Error:', error); // Handle any errors that occur during the Promise chain
//     });




// function fetchDataFromServer() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = { id: 1, name: 'John Doe', age: 30 };
//             resolve(data); // Simulated successful response
//         }, 2000); // Simulate 2 seconds delay
//     });
// }

// async function logResolvedValue(){
//     try{
//         const data = await fetchDataFromServer();
//         console.log("Resolved value", data);
//     }
//     catch(error){
//         console.log("Error", error);
//     }
// }

function fetchDataFromServer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: 'John Doe', age: 30 };
            reject(data); // Simulated unsuccessful response
        }, 2000); // Simulate 2 seconds delay
    });
}

async function logResolvedValue(){
    try{
        const data = await fetchDataFromServer();
        console.log("Resolved value", data);
    }
    catch(error){
        console.log("Error", error);
    }
}



function fetchDataFromServer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id, name: 'John Doe', age: 30 };
            resolve(data); // Simulate successful response
        }, Math.random() * 2000); // Simulate random delay up to 2 seconds
    });
}

async function logResolvedValues(){
    try {
        const promises = [];
        
        // Create multiple promises
        for (let i = 1; i <= 5; i++) {
            promises.push(fetchDataFromServer(i));
        }
        
        // Wait for all promises to resolve
        const results = await Promise.all(promises);
        
        // Log all resolved values
        results.forEach((data, index) => {
            console.log(`Resolved value ${index + 1}`, data);
        });
        
    } catch(error) {
        console.log("Error", error);
    }
}

// Call the function to start fetching data
logResolvedValues();
