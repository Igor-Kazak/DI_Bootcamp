function exercise1() {
    var man1 = parseInt(prompt('Man-1, what is your birthday year?'));
    var man2 = parseInt(prompt('Man-2, what is your birthday year?'));
    var delta = 0;

    if (man1 > man2) {
        delta = man1 - man2;
        alert('The year when the younger one is exactly half the age of the other is:' + (man1 + delta));
    }
    else if (man1 < man2) {
        delta = man2 - man1;
        alert('The year when the younger one is exactly half the age of the other is:' + (man2 + delta));
    }
    else {
        alert('The task has no solution')
    }
}

function exercise2() {
    var zip = prompt('Enter your zip-code:');

    try {
        zip = parseInt(zip);
    }
    catch (NaN){
        console.log('error');
    }
    if (zip > 9999 && zip <= 99999){
        console.log('good');
    }
    else {
        console.log('error');
    }

}

function exercise3() {
    var word = prompt('Enter your word:');
    var result1 = '';
    var result2 = [];

    for (i=0; i<word.length; i++){
        if (word[i] != 'a' && word[i] != 'e' && word[i] != 'i' && word[i] != 'o' && word[i] != 'u'){
            result1 = result1 + word[i];
        }
    }
    console.log(result1);

    result2 = word.split('');
    for (i=0; i<result2.length; i++){
        if (result2[i] == 'a') {
            result2[i] = '1';
        }
        if (result2[i] == 'e') {
            result2[i] = '2';
        }
        if (result2[i] == 'i') {
            result2[i] = '3';
        }
        if (result2[i] == 'o') {
            result2[i] = '4';
        }
        if (result2[i] == 'u') {
            result2[i] = '5';
        }
    }
    word = result2.join();
    console.log(word);
}

exercise1();
exercise2();
exercise3();