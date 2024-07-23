let changeParagraph=document.getElementById("changeParagraph")
let changeButton=document.getElementById("buttonChange")

changeButton.addEventListener("click",function(){
    changeParagraph.innerHTML="I have changed !"
})

let changeMouse=document.getElementById('changeMouse')
changeMouse.addEventListener('mouseover', function(){
    changeMouse.style.backgroundColor="red"
}
)

let resetColor = document.getElementById('resetColor');

resetColor.addEventListener("mouseleave", function() {
    resetColor.style.backgroundColor = ''; // Reset background color
});

let keydownEvent=document.getElementById('keydownEvent');

keydownEvent.addEventListener("keydown", function(){
    let key=keydownEvent.textContent="key was down!"
    console.log(key)
})


const inputField = document.getElementById('myInput');
const displayParagraph = document.getElementById('display');

// Add event listener for 'keyup' event
inputField.addEventListener('keyup', function() {
    // Update the paragraph content with the current value of the input field
    displayParagraph.textContent = inputField.value;
});


const formAction=document.getElementById('formAction')
const submitButton=document.getElementById('submitButton')

formAction.addEventListener("submit", function(e){
    e.preventDefault();
    // log the data to the console
    const formData=new FormData(formAction)
    console.log(formData.get('message'))
})

const selectDropdown=document.getElementById('mySelect')
const selectedValueParagraph = document.getElementById('selectedValue');

selectDropdown.addEventListener("change", function(){
    // got the selected values
    const selectOptions=selectDropdown.options[selectDropdown.selectedIndex].text
    // update the paragraph content with the selected value
    selectedValueParagraph.textContent = ` Selected Value: ${selectOptions}`;
})


const myList = document.getElementById('myList')
const log=document.getElementById('log')

myList.addEventListener("click", function(e){
    // check if the click event occured on an li element inside ul
    if(e.target.tagName==='LI'){
        // log the text content of the clicked li element
        console.log("clicked item:", e.target.textContent)
        // update the log paragraph with the clicked items text content
        log.textContent = `Clicked item: ${e.target.textContent}`
    }
})


// learn something new

const parentList = document.getElementById('parentList');

function handleItemClick(event) {
    // Log the text content of the clicked <li> element
    console.log('Clicked item:', event.target.textContent);
}

parentList.addEventListener('click', function(event) {
    // Check if the click occurred on an <li> element inside <ul>
    if (event.target.tagName === 'LI') {
        handleItemClick(event);
    }
});

function addItemToList() {
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item ' + (parentList.childElementCount + 1);

    // Add a class for styling (optional)
    newItem.classList.add('list-item');

    // Append the new <li> item to the <ul> list
    parentList.appendChild(newItem);
}

const addItemBtn = document.getElementById('addItemBtn');
addItemBtn.addEventListener('click', function() {
    addItemToList();
});