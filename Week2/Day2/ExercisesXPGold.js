function exercise1() {
    var lang = prompt('What language do you speak?');
    var sorry = '01110011 01101111 01110010 01110010 01111001';

    switch (lang) {
        case 'French':
            alert('Bonjour');
            break;
        case 'English':
            alert('Hello');
            break;
        case 'Hebrew':
            alert('Shalom');
            break;
        default:
            alert(sorry);
    }
}

function exercise2() {
    var grade = prompt('What is your grade?');

    if (grade > 90) {
        console.log('A')
    }
    else if (grade > 80 && grade <= 90) {
        console.log('B')
    }
    else if (grade >= 70 && grade <= 80) {
        console.log('C')
    }
    else {
        console.log('D')
    }
}

function exercise3() {
    var verb = prompt('Enter the verb:');

    if (verb.length < 3) {
        console.log(verb);
    }
    else {
        if (verb[verb.length - 1] == 'g' && verb[verb.length - 2] == 'n' && verb[verb.length - 3] == 'i') {
            console.log(verb + 'ly')
        }
        else {
            console.log(verb + 'ing')
        }
    }
}

exercise1();
exercise2();
exercise3();