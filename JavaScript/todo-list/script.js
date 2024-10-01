const addBtn = document.getElementById('add-btn');
const input = document.getElementById('input');
const list = document.getElementById('list');
const message = document.getElementById('message');
const messageText = document.getElementById('message-text');

const showMessage = (text) => {
    messageText.textContent = text;
    message.classList.add('show');
    setTimeout(() => {
        message.classList.remove('show');
    }, 1000);
}

const toggleCheck = function (event) {
    const item = event.currentTarget;
    item.classList.toggle('checked');
    const checkIcon = item.querySelector(':scope > .check-icon');
    checkIcon.classList.toggle('show');
};

const setItemProperties = () => {
    const items = document.querySelectorAll('.todo-item');
    items.forEach((item, index) => {
        item.removeEventListener('click', toggleCheck);
        item.addEventListener('click', toggleCheck);

        item.classList.remove('bg-color-1');
        item.classList.remove('bg-color-2');
        if (index % 2 === 0) {
            item.classList.add('bg-color-2');
        } else {
            item.classList.add('bg-color-1');
        }
    });
}
setItemProperties();

const addEventListenerForRemoveButtons = () => {
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const li = button.closest('li');
            li.remove();
            setItemProperties();
        });
    });
}
addEventListenerForRemoveButtons();

addBtn.addEventListener('click', () => {
    if (input.value.trim() === '') {
        showMessage('Listeye boş ekleme yapamazsınız!');
    } else {

        const newRemoveButton = document.createElement('div');
        newRemoveButton.textContent = '✖';
        newRemoveButton.classList.add('remove-btn');

        const newCheckIcon = document.createElement('div');
        newCheckIcon.textContent = '✓';
        newCheckIcon.classList.add('check-icon');

        const newItem = document.createElement('li');
        newItem.textContent = input.value;
        newItem.classList.add('todo-item');
        newItem.appendChild(newCheckIcon);
        newItem.appendChild(newRemoveButton);

        list.appendChild(newItem);
        input.value = '';
        showMessage('Listeye eklendi.');
    }
    setItemProperties();
    addEventListenerForRemoveButtons();
});