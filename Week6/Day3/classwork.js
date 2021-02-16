function whoIsAbsentToday(str) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let arr = str.split('');
    let firstLetter;
    for (let i = 0; i < alphabet.length; i++) {
        if (arr[0] == alphabet[i]) {
            firstLetter = i;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != alphabet[firstLetter + i]) {
            return alphabet[firstLetter + i];
        }
    }
    return 'All letters are here'
}
console.log(whoIsAbsentToday('abcdefh'));
console.log(whoIsAbsentToday('stuvxyz'));
console.log(whoIsAbsentToday('rstuvwxyz'));
