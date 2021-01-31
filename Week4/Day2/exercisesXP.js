//Exercise 1
{
    plus = (a, b) => a + b;
    console.log(plus(5, 7));
}

//Exercise 2
{
    const addTo = x => y => x + y;
    var addToTen = addTo(10);
    console.log(addToTen(3));           // 10 + 3 = 13
}

//Exercise 3
{
    const sum = (a, b) => a + b;                 //never used
    const curriedSum = (a) => (b) => a + b;
    console.log(curriedSum(30)(1));             // 30 + 1 = 31
}

//Exercise 4
{
    const sum = (a, b) => a + b;                 //never used
    const curriedSum = (a) => (b) => a + b;
    const add5 = curriedSum(5);
    console.log(add5(12));                      // 12 + 5 = 17
}

//Exercise 5
{
    const compose = (f, g) => (a) => f(g(a)); 
    const add1 = (num) => num + 1;              // 15 + 1 = 16
    const add5 = (num) => num + 5;              // 10 + 5 = 15
    console.log(compose(add1, add5)(10));       // 16
}