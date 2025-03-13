const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
        
        li.append(deleteButton);
        
        list.append(li);

        input.value = '';

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
        });
    } else {
        alert('Please enter a valid chapter!');
    }

    button.addEventListener('click', function() {
        if (input.value.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = input.value;
    
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '❌';
            deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
            
            li.append(deleteButton);
            list.append(li);
    
            input.value = ''; 
            input.focus();  

            deleteButton.addEventListener('click', function() {
                list.removeChild(li);
                input.focus(); 
            });
        } else {
            alert('Please enter a chapter!');
            input.focus();
        }

        button.addEventListener('click', function() {
            if (input.value.trim() !== '') {
                const li = document.createElement('li');
                li.textContent = input.value;
        
                const deleteButton = document.createElement('button');
                deleteButton.textContent = '❌';
                deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
                
                li.append(deleteButton);
                list.append(li);
        
                input.value = ''; 
                input.focus();    
        
                deleteButton.addEventListener('click', function() {
                    list.removeChild(li);
                    input.focus(); 
                });
            } else {
                alert('Please enter a chapter!');
                input.focus();
            }
        });
        
    });
    
});
