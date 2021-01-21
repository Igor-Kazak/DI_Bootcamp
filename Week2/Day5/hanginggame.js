var words = ['accuracy', 'beverage', 'carousel', 'decision', 'employer'];
var word = words[parseInt(Math.random()*5)];
var leng = word.length;
var hidden = '*'.repeat(leng);
var was = [];
let temp = word.split('');
var ok = true;
let letter = '';
let show = '';
hidden = hidden.split('');
for (let i = 10; i > 0; i--) {
    console.log('Lives left: ' + i);
    while (hidden.indexOf('*') !== -1 && ok) {
        show = hidden.join('');
        console.log(show);
        letter = prompt('Enter your letter:');
        if (was.indexOf(letter) == -1) {
            was.push(letter);
            ok = false;
            while (temp.indexOf(letter) !== -1) {
                hidden[temp.indexOf(letter)] = letter;
                temp[temp.indexOf(letter)] = '_';
                ok = true;
            }
        }
        else {
            ok = false;
        }
    }
    ok = true;
    if (hidden.indexOf('*') == -1){
        show = hidden.join('');
        console.log(show);
        console.log('You won!!!');
        break;
    }
    else if (i == 1) {
        console.log('You lost!!!');
        break;
    }
}