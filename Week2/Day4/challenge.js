var str = prompt('Enter several words (separated by commas)');
var arr = str.split(',');
var max = arr[0].length;
for (let i=0; i < arr.length; i++){
    if (max < arr[i].length){
        max = arr[i].length;
    }
}
console.log('*'.repeat(max+4));
for (let i=0; i < arr.length; i++){
    console.log('* ' + arr[i] + ' '.repeat(max-arr[i].length) + ' *');
}
console.log('*'.repeat(max+4));