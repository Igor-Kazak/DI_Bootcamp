const users = { user1: 18273, user2: 92833, user3: 90315 };

let arr1 = [];
Object.entries(users).forEach(element => {
    arr1.push(element);
});
console.log(arr1);              // [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

let arr2 = [];
for (element in users) {
    arr2.push(element, users[element]*2);
};
console.log(arr2);  // [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]