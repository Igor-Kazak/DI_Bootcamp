function exercise1() {
    var age = prompt('Enter your age:');
    checkDriverAge(age);
    function checkDriverAge(age){
        if (age < 18){
            alert('Sorry, you are too yound to drive this car. Powering off');
        }
        else if (age > 18){
            alert('You are old enough to drive, Powering On. Enjoy the ride!');
        }
        else if (age == 18){
            alert('Congratulations on your first year of driving. Enjoy the ride!');            
        }
    }
}

function exercise2() {
    function changeEnough(arr, total){
        var sum = arr[0]*0.25+arr[1]*0.10+arr[2]*0.05+arr[3]*0.01;
        if (sum >= total){
            return true;
        }
        else {
            return false;
        }
    }
    console.log(changeEnough([2, 100, 0, 0], 14.11));
    console.log(changeEnough([0, 0, 20, 5], 0.75));
}

function exercise3() {
    function summ(){
        let result = 0;
        let str = '';
        for (let i = 0; i < 500; i++){
            if ((i % 23) == 0){
                str += i + ' ';
                result += i;
            }
        }
        console.log(str);
        console.log(result);
    }
    summ();
}

function exercise4() {
    var amazonBasket = {
        glasses: 1,
        books: 2,
        floss: 100
    }

    function checkBasket(){
        var wish = prompt('What do you want?');
        if (wish in amazonBasket){
            alert('It is already in the basket');
        }
        else {
            alert('It is not in the basket');
        }
    }
    
    checkBasket()
}

function exercise5() {
    let stock = { 
        "banana": 6, 
        "apple": 0,
        "pear": 12,
        "orange": 32,
        "blueberry":1
    }  
    
    let prices = {    
        "banana": 4, 
        "apple": 2, 
        "pear": 1,
        "orange": 1.5,
        "blueberry":10
    } 

    var shoppingList = ['banana', 'orange', 'apple'];

    function myBill(){
        let amount = 0;
        for (let i in shoppingList){
            if (shoppingList[i] in stock && stock[shoppingList[i]] > 0){
                amount += prices[shoppingList[i]];
                stock[shoppingList[i]]--;
            }
        }
        return amount;
    }

    console.log(myBill());
}

function exercise6() {
    function tips(amount){
        var tipssum = [];
        var result = [];
        for (let i in amount){
            if (amount[i] < 50){
                tipssum.push(amount[i] * 0.2);
                result.push(parseInt(amount[i]) + parseInt(amount[i] * 0.2));
            }
            if (amount[i] >= 50 && amount[i] < 200){
                tipssum.push(amount[i] * 0.15);
                result.push(parseInt(amount[i]) + parseInt(amount[i] * 0.15));
            }
            if (amount[i] >= 200){
                tipssum.push(amount[i] * 0.1);
                result.push(parseInt(amount[i]) + parseInt(amount[i] * 0.1));
            }
        }
        return tipssum + ' ' + result;
    }

    var bills = prompt('John, enter the amount of the 3 bills (a list of bills, each one separated by a comma):');

    console.log(tips(bills.split(',')));
}

function exercise7() {
    
    function hotel_cost(hotel){
        if (isNaN(hotel)){
            do {
                hotel = parseInt(prompt('Enter nights in hotel:'));
            }
            while (isNaN(hotel));
        }
        return (hotel * 140);
    }

    function plane_ride_cost(plane){
        if (plane == ''){
            do {
                plane = prompt('Enter destination:');
            }
            while (plane == '');
        }
        
        if (plane == 'London'){
            return 183;
        }
        else if (plane == 'Paris'){
            return 220;
        }
        else {
            return 300;
        }
    }

    function rental_car_cost(car){
        if (isNaN(car)){
            do {
                car = parseInt(prompt('How many days do you want to rent a car?'));
            }
            while (isNaN(car));
        }
        if (car < 10){
            return (car * 40);
        }
        else {
            return parseInt(car * 40 * 0.95);
        }


    }

    function total_vacation_cost(){
        var planeresult = plane_ride_cost(prompt('Enter destination:'));
        var hotelresult = hotel_cost(parseInt(prompt('Enter nights in hotel:')));
        var carresult = rental_car_cost(parseInt(prompt('How many days do you want to rent a car?')));
        
        alert('The car cost: $' + carresult + ', the hotel cost: $' + hotelresult + ', the plane tickets cost: $' + planeresult + '.')

    }

    total_vacation_cost();

}

//exercise1();
//exercise2();
//exercise3();
//exercise4();
//exercise5();
//exercise6();
exercise7();
