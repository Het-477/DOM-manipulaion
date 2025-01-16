// Select the <ul>, <input>, and <button> elements from the DOM
const shoppingList = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

// Function to add a new shoppingList item
function addListItem() {
    const inputText = input.value.trim();
    if (inputText === '') return; // Prevent adding empty items
    input.value = '';

    // Create new elements: a <li> for the list item, a <span> for the text, and a <button> for deletion
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listDeleteBtn = document.createElement('button');

    // Append the <span> and <button> to the <li>
    listItem.appendChild(listText);
    listText.textContent = inputText;
    listItem.appendChild(listDeleteBtn);
    listDeleteBtn.textContent = 'Delete'; // Set the button text to 'Delete'

    // Append the completed <li> to the <ul>
    shoppingList.appendChild(listItem);

    // Add an event listener to the 'Delete' button to remove the shoppingList item when clicked
    listDeleteBtn.addEventListener('click', () => {
        shoppingList.removeChild(listItem);
    });

    // Set focus back to the input field for convenience
    input.focus();
}

// Add an event listener to the button for the 'click' event
button.addEventListener(keys, addListItem);

const keys = ['click', 'Enter'];

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addListItem();
    }
});
