var giphy = new XMLHttpRequest();
giphy.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=dc6zaTOxFJmzC');
giphy.responseType ='json';
giphy.send();
giphy.onload = function() {
    if (giphy.status != 200) {
      alert(`Error ${giphy.status}: ${giphy.statusText}`); 
    } else {
      console.log(giphy.response); 
    }
  };

  giphy.onerror = function() {
  alert("Request failed");
};