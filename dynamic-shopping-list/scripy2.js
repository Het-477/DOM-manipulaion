const shoppingList = document.querySelector("ul");
const input = document.querySelector("input");
const addButton = document.querySelector("button");

input.focus();

const handleEvent = (e) => {
    if (e.type === 'click' || (e.type === 'keypress' && e.key === 'Enter')) {
        addListItem();
    }
};

// Add event listeners for both click and keypress (Enter)
addButton.addEventListener("click", handleEvent);
input.addEventListener("keypress", handleEvent);

function addListItem() {
    // creating elements to add inside our shopping list 
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const itemDeleteBtn = document.createElement("button");

    // storing and validating the input.
    const inputText = input.value.trim();
    if (input.value === '') return;
    input.value = '';

    // adding span and delete btn into list item
    listItem.appendChild(listText);
    listText.innerText = inputText;
    listItem.appendChild(itemDeleteBtn);
    itemDeleteBtn.innerText = "Delete";
    
    itemDeleteBtn.addEventListener("click", () => shoppingList.removeChild(listItem));

    // adding list item into the shopping list.
    shoppingList.appendChild(listItem);
}
