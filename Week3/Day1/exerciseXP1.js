document.getElementById('navBar').setAttribute('id', 'socialNetworkNavigation');

let newli = document.createElement('li');
let text = document.createTextNode('Logout');
newli.appendChild(text);
document.getElementsByTagName('ul')[0].appendChild(newli);
console.log(document.getElementsByTagName('ul')[0].lastChild.firstChild.nodeValue);