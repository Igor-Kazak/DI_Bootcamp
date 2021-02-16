var arr = [];

if (localStorage.getItem('mylist')) {
    arr = localStorage.getItem('mylist').split(',');
    printAll();
}

function printAll() {
    let list = document.getElementById('list');
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.addEventListener('click', clearMe);
        li.textContent = arr[i];
        list.appendChild(li);
    }
}

function print() {
    let list = document.getElementById('list');
    let li = document.createElement('li');
    li.addEventListener('click', clearMe);
    li.textContent = arr[arr.length - 1];
    list.appendChild(li);
}

function add() {
    let item = document.getElementById('itemtext');
    arr.push(item.value);
    localStorage.setItem('mylist', arr);
    print();
}

function clearAll() {
    localStorage.clear('myList');
    let list = document.getElementById('list');
    for (let i = 0; i < list.length; i++) {
        list.removeChild[i];
    }
}

function clearMe(event) {
    let toClear = event.target.textContent;
    event.target.remove();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == toClear) {
            arr.splice(i, 1);
            localStorage.setItem('mylist', arr);
            return null;
        }
    }
}