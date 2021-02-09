var req = new XMLHttpRequest();
req.open('GET', 'https://jsonplaceholder.typicode.com/users');
req.timeout = 5000;
req.responseType ='json';
req.send();
req.onload = function () {
    if (req.status != 200) {
        alert(`Error ${req.status}: ${req.statusText}`);
    } else {
        createRobots(req.response);
    }
};

req.onerror = function () {
    alert("Request failed");
};

var robots;

function createRobots(obj){
    robots = Object.assign([], obj);
for (let i = 0; i < obj.length; i++) {
    let div = document.getElementsByClassName('row')[0];
    let col = document.createElement('div');
    col.classList.add('col');
    col.id = obj[i].id;
    div.appendChild(col);
    let card = document.createElement('div');
    card.classList.add('card');
    col.appendChild(card);
    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute("src", 'https://robohash.org/'+obj[i].id+'?200x200');
    card.appendChild(img);
    let cardbody = document.createElement('div');
    cardbody.classList.add('card-body');
    card.appendChild(cardbody);
    let h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.textContent = obj[i].name;
    cardbody.appendChild(h5);
    let p = document.createElement('p');
    p.classList.add('card-text');
    p.textContent = obj[i].email;
    cardbody.appendChild(p);
    let p1 = document.createElement('p');
    p1.classList.add('card-text');
    p1.textContent = obj[i].address.city;
    cardbody.appendChild(p1);
    let btn = document.createElement('button');
    btn.classList.add(obj[i].id);
    btn.addEventListener('click', posts);
    btn.textContent = 'View posts';
    cardbody.appendChild(btn);
}
}

function keyupFunction() {
    let formcontrol = document.getElementsByClassName('form-control')[0];
    var col = document.getElementsByClassName('col');
    if (formcontrol.value != '') {
        for (let i = 0; i < col.length; i++) {
            col[i].setAttribute('hidden', '');
        }
        for (let i = 0; i < robots.length; i++) {
            if (robots[i].name.toLowerCase().includes(formcontrol.value)) {
                document.getElementById(robots[i].id).removeAttribute('hidden');
            }
        }
    }
    else {
        for (let i = 0; i < col.length; i++) {
            col[i].removeAttribute('hidden');
        }
    }
}

function posts(event) {
    var pst = new XMLHttpRequest();
    pst.open('GET', 'https://jsonplaceholder.typicode.com/posts?userId=' + event.target.className);
    pst.timeout = 5000;
    pst.responseType = 'json';
    pst.send();
    pst.onload = function () {
        if (pst.status != 200) {
            alert(`Error ${pst.status}: ${pst.statusText}`);
        } else {
            for (let i = 0; i < pst.response.length; i++) {
                console.log(pst.response[i].title);
                console.log(pst.response[i].body);
            }
        };

        pst.onerror = function () {
            alert("Request failed");
        };
    }
}