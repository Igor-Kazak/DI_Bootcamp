class Item {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
}

getItems();

function getItems(){
    fetch('http://localhost:3000/items')
    .then(res => res.json())
    .then(data => {
      printAll(data);
    })
    .catch(err => {
      console.log(err);
    })
}

function additem(){
    let name = document.getElementById('name').value;
    let quantity = document.getElementById('quantity').value;
    fetch('http://localhost:3000/items',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify((new Item(name, quantity)))
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
    window.location.reload();
}

function printAll(obj) {
    let table = document.getElementById('table');
    for (let i = 0; i < obj.length; i++) {
        let tr = document.createElement('tr');
        tr.addEventListener('mousedown', done);
        tr.id = i;
        let th = document.createElement('th');
        th.setAttribute('scope', 'row');
        th.textContent = i + 1;
        let td1 = document.createElement('td');
        td1.textContent = obj[i].name;
        let td2 = document.createElement('td');
        td2.textContent = obj[i].quantity;
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }

}

function done(event) {
    let i = event.target.parentElement.id;
    fetch('http://localhost:3000/items/'+i)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
    window.location.reload();
}
