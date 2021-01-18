function exercise1() {
    var x = 2.554;
    var y = -99;
    if (x > y) {
        console.log('x is the biggest number');
    }
    else if (x < y) {
        console.log('y is the biggest number');
    }
    else {
        console.log('x = y');
    }
}

function exercise2() {
    var newDog = 'Chihuahua';
    console.log(newDog.length);
    console.log(newDog.toUpperCase());
    console.log(newDog.toLowerCase());
    if (newDog == 'Chihuahua') {
        console.log('I love Chihuahua, it’s my favorite dog breed');
    }
    else {
        console.log('I dont care, I prefer cats');        
    }
}

function exercise3() {
    var num = prompt('Enter your number');
    if ((num % 2) == 0) {
        alert(num + ' is an even number');
    }
    else {
        alert(num + ' is not an even number');
    }
}

function exercise4() {
    let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
    switch (users.length) {
        case 0:
          console.log('no one is online');  
          break;
        case 1:
            console.log(users[0] + ' is online');  
          break;
        case 2:
            console.log(users[0] + ' and ' + users[1] + ' are online');  
        break;
        default:
            console.log(users[0] + ', ' + users[1] + ' and ' + (users.length - 2) + ' more are online');  
      }
}

exercise1();
exercise2();
exercise3();
exercise4();