// Declare references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        // Create the li element
        const li = document.createElement('li');
        li.textContent = input.value;

        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
        
        // Append the delete button to the li element
        li.append(deleteButton);
        
        // Append the li to the list
        list.append(li);

        // Clear the input field
        input.value = '';

        // Add an event listener for the delete button
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
        });
    } else {
        alert('Please enter a valid chapter!');
    }
});
