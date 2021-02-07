var giphy = new XMLHttpRequest();
giphy.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=dc6zaTOxFJmzC');
giphy.responseType = 'json';
giphy.send();
giphy.onload = function () {
    if (giphy.status != 200) {
        alert(`Error ${giphy.status}: ${giphy.statusText}`);
    } else {
        var randomimage = giphy.response.data[parseInt(Math.random() * 50)].images['downsized_medium'].url;
        const content = `
    <div>
        <img src="${randomimage}">
    </div>`;
        document.body.innerHTML = content;
        //console.log(giphy.response);
    }
};
giphy.onerror = function () {
    alert("Request failed");
};
