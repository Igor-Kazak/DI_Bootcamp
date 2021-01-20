function exercise1() {
    var num = Math.floor(Math.random() * 100);
    for (let i = 0; i < num; i++){
        if ((i % 2) == 0){
            console.log(i);
        }
    }
}

function exercise2() {
    var str = prompt('Enter your string:');
    var newstr1 = '';
    var newstr2 = '';
    for (let i = 0; i < str.length; i++){
        if ((i % 2) == 0){
            newstr1 += str[i].toUpperCase();
        }
        else {
            newstr1 += str[i];
        }
    }
    for (let i = 0; i < str.length; i++){
        if ((i % 2) != 0){
            newstr2 += str[i].toUpperCase();
        }
        else {
            newstr2 += str[i];
        }
    }
    console.log(newstr1 + ', ' + newstr2);
}

function exercise3() {
    var str = prompt('Enter your string:');
    var flag = true;
    for (let i = 0; i < str.length; i++){
        if (str[i] == str[str.length-i-1]){
            b = true;
        }
        else {
            b=false;
            break;
        }
    }
    if (b) {
        console.log('Palindrome');
    }
    else {
        console.log('Not a palindrome');
    }
}

function exercise4() {
    function biggestNumberInArray(arrayNumber){
        var max = arrayNumber[0];
        for (let i in arrayNumber){
            if (max < arrayNumber[i]){
                max = arrayNumber[i];
            }
        }
        return max;
    }
    console.log(biggestNumberInArray([-1,0,3,100, 99, 2, 99]));
    console.log(biggestNumberInArray(['a', 3, 4, 2]));
    console.log(biggestNumberInArray([]));
}

function exercise5() {
    function unique(array){
        for (let i in array){
            for (let j in array){
            if (i != j && array[i] == array[j]){
                delete array[j];
            }
            }
        }
        array = array.filter(function(item){
            return item != undefined;
        });
        return array;
    }
    console.log(unique([1,2,3,3,3,3,4,5]));
}

exercise1();
exercise2();
exercise3();
exercise4();
exercise5();
exercise6();
exercise7();