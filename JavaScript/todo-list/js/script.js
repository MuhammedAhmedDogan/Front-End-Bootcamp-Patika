const addBtn = document.getElementById('add-btn');
const input = document.getElementById('input');
const list = document.getElementById('list');
const message = document.getElementById('message');
const messageText = document.getElementById('message-text');

// Mesaj gösterme fonksiyonu
const showMessage = (text) => {
    messageText.textContent = text;
    message.classList.add('show');
    setTimeout(() => {
        message.classList.remove('show');
    }, 1000);
};

// Eleman kontrolü toggle etme fonksiyonu
const toggleCheck = function (event) {
    const item = event.currentTarget;
    item.classList.toggle('checked');
    const checkIcon = item.querySelector(':scope > .check-icon');
    checkIcon.classList.toggle('show');
    saveItemsToLocalStorage();
};

// Listeyi güncelleme ve özellikleri ayarlama fonksiyonu
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
};

// Yerel depolamadan verileri yükleme
const loadItemsFromLocalStorage = () => {
    const items = JSON.parse(localStorage.getItem('todoItems')) || [];
    items.forEach(item => {
        addItemToList(item.text, item.checked);
    });
};

// Yeni öğe ekleme ve yerel depolamaya kaydetme fonksiyonu
const addItemToList = (text, checked = false) => {
    const newRemoveButton = document.createElement('div');
    newRemoveButton.textContent = '✖';
    newRemoveButton.classList.add('remove-btn');

    const newCheckIcon = document.createElement('div');
    newCheckIcon.textContent = '✓';
    newCheckIcon.classList.add('check-icon');
    if (checked) {
        newCheckIcon.classList.add('show'); // Eğer öğe işaretli ise kontrol simgesini göster
    }

    const newItem = document.createElement('li');
    newItem.textContent = text;
    newItem.classList.add('todo-item');
    newItem.appendChild(newCheckIcon);
    newItem.appendChild(newRemoveButton);
    if (checked) {
        newItem.classList.add('checked');
    }

    list.appendChild(newItem);
    setItemProperties();
    addEventListenerForRemoveButtons();

    // Mevcut öğeleri yerel depolamaya güncelle
    saveItemsToLocalStorage();
};

// Mevcut öğeleri yerel depolamaya kaydetme fonksiyonu
const saveItemsToLocalStorage = () => {
    const items = [];
    const todoItems = document.querySelectorAll('.todo-item');
    todoItems.forEach(item => {
        const text = item.textContent.replace('✓', '').replace('✖', '').trim();
        const checked = item.classList.contains('checked');
        items.push({ text, checked });
    });
    localStorage.setItem('todoItems', JSON.stringify(items));
};

// Silme butonları için etkinlik dinleyicileri ekleme fonksiyonu
const addEventListenerForRemoveButtons = () => {
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const li = button.closest('li');
            li.remove();
            saveItemsToLocalStorage(); // Öğeyi sildikten sonra yerel depolamayı güncelle
            setItemProperties();
        });
    });
};

// Sayfa yüklendiğinde verileri yükle
loadItemsFromLocalStorage();

addBtn.addEventListener('click', () => {
    if (input.value.trim() === '') {
        showMessage('Listeye boş ekleme yapamazsınız!');
    } else {
        addItemToList(input.value); // Yeni öğeyi listeye ekle
        input.value = '';
        showMessage('Listeye eklendi.');
    }
});