const numbers = [5,0,9,1,7,4,2,6,3,8];

console.log(numbers.toString());
console.log(numbers.join('+'));

var temp;
for (let i = 0; i < numbers.length; i++){
    for (let b = i + 1; b < numbers.length; b++){
        if (numbers[i] < numbers[b]){
            temp = numbers[i];
            numbers[i] = numbers[b];
            numbers[b] = temp;
        }
    }
}
console.log(numbers);