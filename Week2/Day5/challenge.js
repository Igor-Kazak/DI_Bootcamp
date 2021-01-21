let beer = parseInt(prompt('Enter a starting number of bottles:'));
let counter = 1;

console.log(beer + ' bottles of beer on the wall');
console.log(beer + ' bottles of beer');

while (beer - counter > 0){

    console.log('Take ' + counter + ' down, pass it around');
    beer -= counter;
    console.log(beer + ' bottles of beer on the wall');
    console.log(beer + ' bottles of beer on the wall');
    console.log(beer + ' bottles of beer');

    counter++;
}

console.log('Take ' + beer + ' down, pass it around');