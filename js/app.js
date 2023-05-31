let addButton = document.getElementById('addIdem');
let listConatainer = document.getElementById('shoppingListContainer');
let userInput = document.getElementById('shoppingListIdem');

userInput.addEventListener('click'. selectInput);

addButton.addEventListener('click', addTodList);

function selectInput(){
    userInput.style["boxShadow"] = '0 6px 2px -2px green';
}

function addTodList(){
    if(userInput.ariaValueMax.trim().length) {
    let newItem = document.createElement('li');
    newItem.classList.add('li-styling');
    newItem.innerText = userInput.value;
    listConatainer.appendChild(newItem); 

    newItem.addEventListener('click', function(){
        newItem.style.color = "grey";
        newItem.style.textDecoration = "line-through";
    })

    newItem.addEventListener('dblclick', function(){
        listConatainer.removeChild(newItem);
    })

    userInput.value = "";
    } else {
        console.log('empty value');
        userInput.style["boxShadow"] = '0 6px 2px -2px red';
    }
    
    userInput.value = "";
}
