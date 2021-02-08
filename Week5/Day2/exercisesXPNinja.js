document.getElementById('myForm').addEventListener('submit', submitForm);
document.getElementById('erase').addEventListener('click', erase);

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
            for (let i = 0; i < 5; i++) {
                let gif = document.createElement('img');
                gif.setAttribute('src', giphy.response.data[i].images['fixed_height_small'].url);
                gif.classList.add('gif');
                document.getElementById('gifs').appendChild(gif);
            }
            //console.log(giphy.response);
        }
    };
    giphy.onerror = function () {
        alert("Request failed");
    };
}

function erase() {
    let div = document.getElementById('gifs')
    for (let i = div.children.length-1; i >= 0; i--) {
        div.removeChild(div.lastElementChild);
    }
}