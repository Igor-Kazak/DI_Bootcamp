let arr = [1, 2, 5, 2, 3, 6, 7, 8, 3, 7];
let temp = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            temp.push(j - i);
        }
    }
}
console.log(temp.sort()[0]);