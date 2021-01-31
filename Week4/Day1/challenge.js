const gameInfo = [
    {username: "john", team: "red", score: 5, items: ["ball", "book", "pen"]},
    {username: "becky", team: "blue", score: 10, items: ["tape", "backpack", "pen"]},
    {username: "susy", team: "red", score: 55, items: ["ball", "eraser", "pen"]},
    {username: "tyson", team: "green", score: 1, items: ["book", "pen"]},
   ];
let names = [];
gameInfo.forEach(myFunction1);
function myFunction1(item){
        names.push(item.username + '!');
}
console.log(names);

let names5 = [];
gameInfo.forEach(myFunction2);
function myFunction2(item){
    if (item.score > 5){
        names5.push(item.username);
    }
}
console.log(names5);

let totalscore = 0;
gameInfo.forEach(myFunction3);
function myFunction3(item){
    totalscore += item.score;
}
console.log(totalscore);