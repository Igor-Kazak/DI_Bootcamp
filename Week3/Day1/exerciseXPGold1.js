var allBooks = [];
var book1 = {
    title: "The Hitchhiker's Guide to the Galaxy", 
    author: "Douglas Adams", 
    image: "https://upload.wikimedia.org/wikipedia/en/b/bd/H2G2_UK_front_cover.jpg",
    alreadyRead: false,
};
var book2 = {
    title: "The Restaurant at the End of the Universe", 
    author: "Douglas Adams", 
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/RestaurantAtTheEndOfTheUniverse.jpg/220px-RestaurantAtTheEndOfTheUniverse.jpg",
    alreadyRead: true,
};
allBooks.push(book1, book2);

let table = document.createElement('table');
document.body.appendChild(table);
table.appendChild(document.createElement('tr'));
table.appendChild(document.createElement('tr'));
table.children[0].appendChild(document.createElement('td'));
table.children[0].appendChild(document.createElement('td'));
table.children[1].appendChild(document.createElement('td'));
table.children[1].appendChild(document.createElement('td'));

var textbook1 = allBooks[0]['title'] + ' by ' + allBooks[0]['author'];
var textbook2 = allBooks[1]['title'] + ' by ' + allBooks[1]['author'];
table.children[0].children[0].appendChild(document.createTextNode(textbook1));
table.children[1].children[0].appendChild(document.createTextNode(textbook2));

table.children[0].children[1].appendChild(document.createElement('img'));
table.children[1].children[1].appendChild(document.createElement('img'));

table.children[0].children[1].firstChild.setAttribute("src", allBooks[0]['image']);
table.children[1].children[1].firstChild.setAttribute("src", allBooks[1]['image']);
table.children[0].children[1].firstChild.setAttribute("width", "100px");
table.children[1].children[1].firstChild.setAttribute("width", "100px");

if (allBooks[0]['alreadyRead']) {
    table.children[0].firstChild.style.color = "red";
}

if (allBooks[1]['alreadyRead']) {
    table.children[1].firstChild.style.color = "red";
}