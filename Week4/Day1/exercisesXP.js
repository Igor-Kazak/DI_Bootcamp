//Exercise 1
var bankAmount = 80000;
var vat = 1.17;
var details = ["+200", "-100", "+146", "+167", "-2900"];
var endAmount = bankAmount;
for (let i = 0; i < details.length; i++){
    if (details[i] < 0){
        details[i] *= vat;
    }
    else {
        details[i] = parseInt(details[i]);
    }
    endAmount += details[i];
}
console.log(endAmount);

//Exercise 2
let colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
colors.forEach((color, i) => {
    console.log(i+1 + '# choice is ' + color + '.');
});

//Exercise 3
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let ordinal = ["th", "st", "nd", "rd"];
colors.forEach((color, i) => {
    switch (i + 1) {
        case 1:
            console.log(i + 1 + ordinal[1] + ' choice is ' + color + '.');
            break;
        case 2:
            console.log(i + 1 + ordinal[2] + ' choice is ' + color + '.');
            break;
        case 3:
            console.log(i + 1 + ordinal[3] + ' choice is ' + color + '.');
            break;
        default:
            console.log(i + 1 + ordinal[0] + ' choice is ' + color + '.');
    }
});

//Exercise 4
function is_string(inp){
    return typeof inp == 'string';
}
console.log(is_string('hello')); 
console.log(is_string([1, 2, 4, 0]));