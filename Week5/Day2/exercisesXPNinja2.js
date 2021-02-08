document.getElementById('myForm').addEventListener('submit', submitForm);
document.getElementById('erase').addEventListener('click', eraseAll);

function submitForm(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let obj = {};
    formData.forEach((value, key) => obj[key] = value);
    var giphy = new XMLHttpRequest();
    var str = 'https://api.giphy.com/v1/gifs/search?q=' + obj.search + '&rating=g&api_key=dc6zaTOxFJmzC';
    giphy.open('GET', str);
    giphy.responseType = 'json';
    giphy.send();
    giphy.onload = function () {
        if (giphy.status != 200) {
            alert(`Error ${giphy.status}: ${giphy.statusText}`);
        } else {
            createGifs(giphy.response);
        }
    };
    giphy.onerror = function () {
        alert("Request failed");
    };
}

function createGifs(obj){
    for (let i = 0; i < 10; i++) {
        let gif = document.createElement('img');
        gif.setAttribute('src', obj.data[i].images['fixed_height_small'].url);
        gif.classList.add(i);
        document.getElementById('gifs').appendChild(gif);
        let btn = document.createElement('button');
        btn.addEventListener('click', erase);
        btn.textContent = '<- Erase it';
        btn.id = i;
        document.getElementById('gifs').appendChild(btn);
    }
}

function eraseAll() {
    let div = document.getElementById('gifs')
    for (let i = div.children.length-1; i >= 0; i--) {
        div.removeChild(div.lastElementChild);
    }
}

function erase(event) {
    let id = event.target.id;
    let div = document.getElementById('gifs')
        div.removeChild(document.getElementById(id));
        div.removeChild(document.getElementsByClassName(id)[0]);
}