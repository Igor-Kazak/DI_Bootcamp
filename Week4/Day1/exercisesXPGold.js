//Exercise 1
var array = [1, 33, -50, 550, -170, 450, -24, 0, 4.8, 91, 3.1415, -100];
var result = 0;
for (let i = 0; i < array.length; i++){
    result += array[i];
}
console.log(result.toFixed(4));

//Exercise 2
var array = ['stri', 1, 33, 'asd', -50, 550, 'asd', -24, 4.8, 1, 3.1415, 'asd', -100, 1];
var j = 1;
for (let i = 0; i < array.length-1; i++) {
    while (j < array.length) {
        if (array[i] == array[j]) {
            delete array[j];
        }
        j++;
    }
    j = i+2;
}
array = array.filter(Boolean);
console.log(array);

//Exercise 3
var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
array = array.filter(Boolean);
console.log(array);

//Exercise 4
function repeat(str, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result;
}
console.log(repeat('Ha!', 3));