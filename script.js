const LIinput = document.getElementById('LIinput');
const addBtn = document.getElementById('addBtn');

const ulDiv = document.querySelector('.ulDiv');
const ul = document.createElement('ul');
ulDiv.appendChild(ul);

addBtn.addEventListener('click', () => {
    // Create li element
    const li = document.createElement('li');
    li.classList.add('li');
    ul.appendChild(li);

    // Add checkbox to each li
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add('checkbox');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked === true) {
            textSpan.style.textDecoration = 'line-through';
        } else {
            textSpan.style.textDecoration = 'none';
        }
    });

    li.appendChild(checkbox);


    // // Add text to each li
    const textSpan = document.createElement('span');
    textSpan.textContent = `${LIinput.value}`;
    textSpan.classList.add('textSpan');
    li.appendChild(textSpan);
    LIinput.value = '';


    // Add span for buttons
    const btnsSpan = document.createElement('span');
    btnsSpan.classList.add('btnsSpan')
    li.appendChild(btnsSpan);


    // Add edit button to each li
    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.textContent = 'ערוך';
    btnsSpan.appendChild(editBtn);

    editBtn.addEventListener('click', () => {
        textSpan.innerHTML = prompt('Edit your item:');
    })


    // Add space between the buttons
    const space = document.createElement('span');
    space.textContent = ' ';
    btnsSpan.appendChild(space);


    // Add delete button to each li
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = 'מחק';
    btnsSpan.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
        ul.removeChild(li);
    });
});

