//Exercise 1
{
    [1, 2, 3].map(num => {
        if (typeof num === 'number') return;    // return undefined 3 times
        return num * 2;
    });
}

//Exercise 2
{
    console.log([[0, 1], [2, 3]].reduce((acc, cur) => { return acc.concat(cur); }, [1, 2],));
    // [1,2,0,1,2,3] ???
}

//Exercise 3
{
    const arrayNum = [1, 2, 4, 5, 8, 9];
    const newArray = arrayNum.map((num, i) => {     // [2, 4, 8, 10, 16, 18]
        console.log(num, i);                        // 1 0; 2 1; 4 2; 5 3; 8 4; 9 5
        alert(num);                                 // 1; 2; 4; 5; 8; 9
        return num * 2;                             // 2; 4; 8; 10; 16; 18
    });
}

//Exercise 4
{
    const array = [[1], [2], [3], [[[4]]], [[[5]]]];  // [1,2,3,[4],[5]]
    console.log(array.flat(2));

    const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
    //  [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
    console.log(greeting.flat());

    const trap = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];     // [3]
    console.log(trap.flat(Infinity));
}