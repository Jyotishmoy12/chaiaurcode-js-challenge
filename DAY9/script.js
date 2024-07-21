const heading=document.getElementById("heading")
heading.textContent="nice haha"

const color=document.querySelector(".color")
color.style.backgroundColor="yellow"

const newDiv=document.createElement("div")
newDiv.textContent="hjgkqwguaSKQWG"
document.body.appendChild(newDiv)

const newListItem = document.createElement('li');
newListItem.textContent = 'New List Item';
const existingUl = document.querySelector('#existingList'); 
existingUl.appendChild(newListItem);



var parentElement = document.querySelector('#myDiv');
if(parentElement.lastElementChild){
    parentElement.removeChild(parentElement.lastElementChild);
}
else{
    console.log("no child element")
}


var changeButton = document.getElementById('changeButton');
var myParagraph = document.getElementById('myParagraph');

changeButton.addEventListener('click', function(){
    myParagraph.textContent = 'I changed!';
})

const changeMouse=document.getElementById('changeMouse')
changeMouse.addEventListener('mouseover', function(){
    changeMouse.style.backgroundColor="red"
}
)