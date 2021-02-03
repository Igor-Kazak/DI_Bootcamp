//Exercise 1
{
    const letters = ['x', 'y', 'z', 'z'];
    console.log(loopMe(letters));

    function loopMe(letters) {          //1. Use a for loop to get this output { x: 1, y: 1, z: 2 };
        let obj = {};                   //2. Use the reduce() method to get this output { x: 1, y: 1, z: 2 };
        let count = 0;
        for (let i = 0; i < letters.length; i++) {
            for (let j = 0; j < letters.length; j++) {
                if (letters[i] == letters[j]) {
                    count++;
                }
            }
            obj[letters[i]] = count;
            count = 0;
        }
        return obj;
    }
}

//Exercise 2
{
    const gameInfo = [
        {
            username: "john",
            team: "red",
            score: 5,
            items: ["ball", "book", "pen"]
        },
        {
            username: "becky",
            team: "blue",
            score: 10,
            items: ["tape", "backpack", "pen"]
        },
        {
            username: "susy",
            team: "red",
            score: 55,
            items: ["ball", "eraser", "pen"]
        },
        {
            username: "tyson",
            team: "green",
            score: 1,
            items: ["book", "pen"]
        },
    ];
    function userNames(arr) {
        let newArr = arr.map(item => {
            return item.username + "!";
        });
        return newArr;
    }
    function filterRed(arr, color) {
        let newArr = arr.filter(item => item.team == color);
        return newArr;
    }
    console.log(userNames(gameInfo));
    console.log(filterRed(gameInfo, 'red'));
}

//Exercise 3
{
    const data = [
        {
            name: 'Butters', age: 3, type: 'dog'
        },
        {
            name: 'Cuty', age: 5, type: 'rabbit'
        },
        {
            name: 'Lizzy', age: 6, type: 'dog'
        },
        {
            name: 'Red', age: 1, type: 'cat'
        },
        {
            name: 'Joey', age: 3, type: 'dog'
        },
        {
            name: 'Rex', age: 10, type: 'dog'
        },
    ];

    function yearsLoop(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++){
            sum += arr[i].age;
        }
        return sum*7;
    }
    function yearsMap(arr) {
        let sum = 0;
        arr.map((item) => {
            return sum+=item.age;
        });
        return sum*7;
    }
    function yearsFilter(arr) {
        let sum = 0;
        arr.filter((item) => {
            return sum+=item.age;
        });
        return sum*7;
    }
    function yearsReduce(arr) {
        let sum = arr.reduce((acc, next) => {
            return {age:acc.age + next.age};
        });
        return sum.age*7;
    }
    console.log(yearsLoop(data));
    console.log(yearsMap(data));
    console.log(yearsFilter(data));
    console.log(yearsReduce(data));
}

//Exercise 4
{
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '
console.log(userEmail3.trim());
}

//Exercise 5
{
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
let newusers = users.map(item => {
    return {[item.firstName + ' ' + item.lastName]: item.role}
});
console.log(newusers);
}