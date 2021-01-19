let names= ["john", "sarah", 23, "Rudolf", 34]

for (let i in names){
    if (typeof names[i] != 'string'){
        continue;
    }
    else {
        if (names[i][0] != names[i][0].toUpperCase()){
            names[i] = names[i].replace(names[i][0], names[i][0].toUpperCase());
            console.log(names[i]);
        }
    }
}

for (let i in names){
    if (typeof names[i] != 'string'){
        break;
        }
    else {
        console.log(names[i]);
    }
}