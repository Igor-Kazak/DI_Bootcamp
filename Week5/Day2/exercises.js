var chacky = new XMLHttpRequest();
chacky.open('GET', 'https://api.chucknorris.io/jokes/random?category=science');
chacky.responseType ='json';
chacky.send();
chacky.onload = function() {
    if (chacky.status != 200) {
      alert(`Error ${chacky.status}: ${chacky.statusText}`); 
    } else {
      console.log(`Joke :  ${chacky.response.value}`); 
    }
  };

chacky.onerror = function() {
  alert("Request failed");
};