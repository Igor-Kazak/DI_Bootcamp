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



const robots = [
    {
        id: 1,
        name: 'Arthur Dent',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ford Prefect',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Zaphod Beeblebrox',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Marvin',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Trillian',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Slartibartfast',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Eddie',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Hotblack Desiato',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Prostetnic Vogon Jeltz',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Zarniwoop',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];

function createRobots(obj){
for (let i = 0; i < robots.length; i++) {
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
    img.setAttribute("src", robots[i].image);
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