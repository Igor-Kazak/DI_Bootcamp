//Exercise 1
{
const numbers = [5,0,9,1,7,4,2,6,3,8];
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

const numbers1 = [...numbers];
var temp;
for (let i = 0; i < numbers1.length; i++){
    for (let b = i + 1; b < numbers1.length; b++){
        if (numbers1[i] > numbers1[b]){
            temp = numbers1[i];
            numbers1[i] = numbers1[b];
            numbers1[b] = temp;
        }
    }
}
console.log(numbers1);
}

//Exercise 2
{
let str = 'word in a given String';
let result = [];

console.log(reverse(str));

function reverse(str){
    let arrPhrase = splitMe(str, ' ');
    for (let i = 0; i < arrPhrase.length; i++){
        let arrWord = splitMe(arrPhrase[i], '');
        let wordRev = '';
            for (let b = arrWord.length-1; b>=0; b--){
               wordRev = wordRev + arrWord[b];
            }
        result.push(wordRev);
    }
    return result.join(' ');
}

function splitMe(str, a){
    let arr = str.split(a);
    return arr;
}
}

//Exercise 3
{
    console.log(multi([1, 2, 3, 4]));
    function multi(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] * 2;
        }
        return arr;
    }
}

//Exercise 4
{
    myArr = [1, 5, 7, 9];
    let newArr = myArr.filter( item => {  
        return item > 3;
    });
    console.log(newArr);
}

//Exercise 5
{
    const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
    const filtered = dragons.filter(item => {
        return item.includes('Sa');
    });
    console.log(filtered);
}

//Exercise 6
{
    let array = [2, 5, 10,100];
    let sum = 0;
    array.forEach(item => {sum+=item});
    console.log(sum);
}

//Exercise 7
{                       // with WHILE
    let num = 21942;
    console.log('Sum of digits: ' + calcSumDigits(num));

    function calcSumDigits(num) {
        num = num.toString();
        let resstr = num.split('');
        while (resstr.length > 1) {
            let summ = 0;
            for (let i = 0; i < resstr.length; i++) {
                summ += parseInt(resstr[i]);
            }

            resstr = summ.toString().split('');
        }
        return resstr.toString();

    }
}

{                       // with RECURSION
    let num = 21942;
    console.log('Sum of digits: ' + calcSumDigits(num));

    function calcSumDigits(num) {
        num = num.toString();
        let resstr = num.split('');
        let summ = 0;
        for (let i = 0; i < resstr.length; i++) {
            summ += parseInt(resstr[i]);
        }
        if (summ.toString().length == 1) {
            return summ;
        }
        else {
            return calcSumDigits(summ);
        }
    }
}

//Exercise 8
{
let str = 'Return the number (count) of vowels in the given string';
let vowels = ['a', 'e', 'i', 'o', 'u'];
console.log('Vowels: ' + vowelsCount(str));

function vowelsCount(str){
    let arr = str.split('');
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (arr[i] == vowels[j]) {
                count++;
            }
        }
    }
    return count;
}
}
