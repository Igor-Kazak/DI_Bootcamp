//Exercise 1
{
    function add() {                // 1 putting function into the memory
        let counter = 0;            // 4 defining variable = 0
        function plus() {           // 2 putting function into the memory
            counter += 1;           // 6 incrementing counter = 0+1 = 1
            console.log(counter);   // 7 console.log incremented counter = 1
        }
        plus();                     // 5 calling function plus
    }
    add();                          // 3 calling function add
}

//Exercise 2
{
    let add = (function () {        // 1 defining variable
        let counter = 0;            // 3 defining variable = 0
        function calculus() {       // 4 putting function into the memory
            counter += 1;           // 6 incrementing counter = 0+1 = 1
            return counter          // 7 return = 1
        }
        return calculus             // 5 calling calculus
    })();

    console.log(add());             // 2 will be 1
    console.log(add());             // 8 will be 2
    console.log(add());             // 14 will be 3
}

//Exercise 3
{
    const g = n => n + 1;           // 4 n=20+1=21
    const f = n => n * 2;           // 3 go to g and get 21*2=42
    const h = x => f(g(x));         // 2 go to f and get 42
    console.log(h(20));             // 1 call h with arg 20 and get 42
}


//Classwork
{
let arr1 = [1, 2, 3, 4, 5];

function rev(arr) {
    let arr2 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr2.push(arr[i]);
    }
    return arr2;
}

console.log(rev(arr1));
}