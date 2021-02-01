//Exercise 1
{
    myArr = [10, 20, 30, 40];

    let newArr = myArr.map((val, i, arr) => {   //arr is unnecessary
        return {            // creating objects inside new array
            value: val,
            index: i
        };
    });
    console.log(newArr);
}

//Exercise 2
{
    let party = [
        { desert: 'Chocolate Mousse', calories: 30, },
        { desert: 'Apple Pie', calories: 15, },
        { desert: 'Croissant', calories: 50, },
        { desert: 'Strawberry Icecream', calories: 5, },
    ]

    const sum = party.reduce((total, num) => {
        return {calories:total.calories + (num.desert != 'Apple Pie' ? num.calories : 0)};
      });
      console.log(sum.calories);
}

//Exercise 3
{
let prices = [12, 20, 18];
let newPriceArray = [...prices];    //array 'prices' will be cloned to 'newPriceArray'
console.log(newPriceArray);
}

{
let alphabets = ["A", ..."BCD", "E"]; //"BCD" will be splitted into "B" "C" "D" due to "..."
console.log(alphabets);
}