//Exercise 1
function checkYear(year) {
    return ((year > 2000) ? "You are in the 21st century" : "You live in the Middle Age");
}
console.log(checkYear(2021));

//Exercise 2
calculator = (a, b) => (a > b) ? a - b : a + b;
console.log(calculator(9, 8));

//Exercise 3
let myArr = [10,11,12,15,20];
myArr.forEach((number) => {
    console.log((number % 2 == 0) ? number + " is even" : number + " is odd" );
});

//Exercise 4
let myArra = ["wow","hey","bye"];
console.log(myArra.some((value)=> { return value[0] == 'h'; }));

//Exercise 5
let myArray = ["hello","hey","haloa"];
console.log(myArray.every((value)=> { return value[0] == 'h'; }));