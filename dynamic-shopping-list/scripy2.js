const shoppingList = document.querySelector("ul");
const input = document.querySelector("input");
const addButton = document.querySelector("button");

addButton.addEventListener("click", () => {

});

function addListItem() {
    // creating elements to add inside our shopping list 
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const itemDeleteBtn = document.createElement("button");

    const inputText = input.value.trim();
    if (input.value === '') return;
    input.value = '';

    
}
