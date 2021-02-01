//Exercise 1
{
    const fruits = ["apple", "orange"];
    const vegetables = ["carrot", "potato"];
    const result = ['bread', ...vegetables, 'chicken', ...fruits];  // ['bread',carrot','potato','chicken','apple','orange']
    console.log(result);
}
{
    const country = "USA";
    console.log([...country]);      //['U','S','A']
}
{
    let newArray = [...[, ,]];      //[ , ]
    console.log(newArray);
}

//Exercise 2
let users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];
const sayHello = (item) => ('Hello ' + item.firstName);
const whatRole = (item) => (item.role == 'Full Stack Resident');
console.log(users.map(sayHello));
console.log(users.filter(whatRole).map(sayHello));

//Exercise 3
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const douglasAdams = epic.reduce((acc, next) => {
    return acc + ' ' + next;
});
console.log(douglasAdams);

//Exercise 4
let student = [
    { name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false }];
const passed = (item) => item.isPassed == true;
const congrat = (item) => console.log('Congrats, ' + item.name + '!');
student.filter(passed).forEach(congrat);