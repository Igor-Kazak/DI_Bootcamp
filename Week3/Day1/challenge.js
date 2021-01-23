var solarsystem = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
var planetcolor = ['yellow', 'green', 'blue', 'orange', 'grey', 'white', 'pink', 'violet', 'red'];
var moons = [0, 0, 1, 0, 4, 9, 6, 3, 1];
var i = 0;

for (let k = 0; k < solarsystem.length; k++) {
    document.body.appendChild(document.createElement('div'));
    document.body.children[i + 1].className = "planet";
    document.body.children[i + 1].classList.add(solarsystem[k]);
    document.body.children[i + 1].style.background = planetcolor[k];
    document.body.children[i + 1].appendChild(document.createTextNode(solarsystem[k]))
    i++;
    if (moons[k] > 0) {
        for (let j = 0; j < moons[k]; j++) {
            document.body.appendChild(document.createElement('div'));
            document.body.children[i + 1].className = "moon";
            document.body.children[i + 1].appendChild(document.createTextNode(j+1));
            i++;
        }
    }
}