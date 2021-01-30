//Exercise 1
let menu = [
    {type: "starter", name: "Houmous with Pita"},
    {type: "starter", name: "Vegetable Soup with Houmous peas"},
    {type: "dessert", name: "Chocolate Cake"}
]
console.log(menu.some((value) => { return value.type == 'dessert' || value.name == 'dessert'; }));
console.log(menu.every((value) => { return value.type == 'starter' || value.name == 'starter'; }));
if (!menu.some((value) => {return value.type == 'main course' || value.name == 'main course'})){
    menu.push({ type: "main course", name: "main course" });
}
let vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ];
for (let i = 0; i < menu.length; i++){
    for (let j = 0; j < vegetarian.length; j++){
        if (menu[i].name.toLowerCase().includes(vegetarian[j], 0)){
            menu[i].vegetarian = true;
            break;
        }
        else {
            menu[i].vegetarian = false;
        }
    }
}
console.log(menu);

//Exercise 2
console.log(string_chop('w3resource',2)); 
function string_chop(str, num){
    var array = [];
    for (let i = 0; i < (str.length / num); i++){
        array.push(str.slice(i*num, i*num+num));
    }
    return array;
}

//Exercise 3
console.log(search_word('The quick brown fox', 'fox')); 
function search_word(str, word){
    str = str.replace(/[\,\.\-\!\?\:\;\&\$\#]/g, ' ');
    str = str.split(' ');
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] == word){
            count++;
        }
    }
    return word + ' was found ' + count + ' times.';
}