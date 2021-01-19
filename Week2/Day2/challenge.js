var str = prompt('Enter your text:');
var arr = str.split(' ');
var not = [];
var bad = [];
var result = '';

for (i=0; i<arr.length; i++) {
    if (arr[i] == 'not') {
        not.push(i);
    }
    if (arr[i] == 'bad') {
        bad.push(i);
    }
}

if (not.length > 0 && bad.length > 0) {
    if (not[0] < bad[0]) {
        arr.splice(not[0], (bad[0]-not[0]+1), 'good');
        result = arr.join(' ');
        console.log(result);
    }
    else {
        console.log(str);
    }
}
else {
    console.log(str);
}
