//Exercise 1
{
let b = 3, d = b, u = b;
const tree = ++d * d*b * b++ + --d+ + +b-- + + +d*b+ + u; //  4*4*3*3+3+4+3*3+3
console.log(tree);
}

//Exercise 2
{
    let arr = [1,4,7,5,7];
    console.log(blowMe(arr));
    
    // function blowMe(arr){
    //     let maxval = 0;
    //     let max = 0;
        
    //     for (let i = 0; i < arr.length-1; i++){
    //         if (arr[i]<arr[i+1]){
    //             maxval = arr[i+1];
    //         }
    //     }
        
    //     for (let i = 0; i < arr.length; i++){
    //         if (arr[i]==maxval){
    //             max++;
    //         }
    //     }
    //     return max;
    // }

    function blowMe(arr){
    let maxval = Math.max(...arr);
    let arr2 = arr.filter(value => value == maxval);
    return arr2.length;
    }
}

//Exercise 3

let arr = ["1,2,5,6,7", "2,5,7,8,15"];

console.log(checkMe(arr));

// function checkMe(arr) {
//     let str1 = arr[0].split(',');
//     let str2 = arr[1].split(',');
//     let result = [];
//     for (let i = 0; i < str1.length; i++) {
//         for (let j = 0; j < str2.length; j++) {
//             if (str1[i] == str2[j]) {
//                 result.push(str1[i]);
//             }
//         }
//     }
//     return result;
// }

function checkMe(arr) {
    let str1 = arr[0].split(',');
    let str2 = arr[1].split(',');
    let result = str1.filter(value => str2.includes(value));
    return result;
}

//Exercise 4

const users = {
  user1: {
    age: 44,
    name: 'picard',
  },
  user2: {
    age: 12,
    name: 'sisko',
  },
  user3: {
    age: 109,
    name: 'janeway',
  },
}
const usersKeys = Object.keys(users);
const adults = usersKeys.filter(key => users[key].age > 30).map(id => ({ id, ...users[id] }));
console.log(adults);
