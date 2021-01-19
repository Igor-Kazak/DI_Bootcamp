function exercise1() {
    let colors = ["White", "Yellow", "Green", "Black", "Pink"];
    let suffix = ['st', 'nd', 'd', 'th', 'th']

    for (let i in colors){
        console.log('My #' + (parseInt(i)+1) +' choice is ' + colors[i]);
    }

    for (let i in colors){
        console.log('My ' + (parseInt(i)+1) + suffix[i] + ' choice is ' + colors[i]);
    }

}

function exercise2() {
    let people = ["Greg", "Mary", "Devon", "James"];
    let copy = [];
    for (let i in people){
        console.log(people[i]);
    }
    people.splice(0,1);
    people.splice(-1,1, 'Jason');
    people.push('Igor');
    for (let i in people){
        console.log(people[i]);
        if (people[i] == 'Mary') {
            break;
        }
    }
    for (let i in people){
        if (people[i] != 'Mary' && people[i] != 'Igor'){
            copy.push(people[i])
        }
    }
    console.log(people.indexOf('Mary'));
    console.log(people.indexOf('Foo'));
    let last = people.slice(people.length-1);
    console.log(last);

}

function exercise3() {
    var str;
    do {
    str = prompt('Enter your number not smaller than 10:');
    str = parseInt(str);
    if (isNaN(str)) {
        str = 0;
    }
    }
    while (str < 10);
}

function exercise4() {
    let guestList = {
        Randy: "Germany",
        Karla: "France",
        Wendy: "Japan",
        Norman: "England",
        Sam: "Argentina"
    }
    var guest;
    str = prompt('Enter your name:');
    country = guestList[str];
    if (typeof country === "undefined"){
        console.log("Hi! I'm a guest.");
    }
    else {
        console.log("Hi! I'm " + str + ", and I'm from " + country + ".");
    }
}

function exercise5() {
    let family = {
        Father: "Ivan",
        Mother: "Maria",
        Son1: "Ben",
        Son2: "David",
        Dauther1: "Tal"
    }
    for (member in family){
        console.log(family[member]);
    }
}

function exercise6() {
    let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
    let name = [];

    for (member in names){
        name.push(names[member][0]);
    }
    name.sort();
    console.log(name.join(''));
}

exercise1();
exercise2();
exercise3();
exercise4();
exercise5();
exercise6();