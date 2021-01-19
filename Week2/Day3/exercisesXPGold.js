function exercise1() {
    let building = {
        number_levels: 4,
        number_of_apt_by_level: {
            "1": 3,
            "2": 4,
            "3": 9,
            "4": 2,
        },
        name_of_tenants: ["Sarah", "Dan", "David"],
        number_of_rooms_and_rent: {
            "Sarah": [3, 990],
            "Dan": [4, 1000],
            "David": [1, 500],
        },
    }

    console.log(building['number_levels']);
    console.log(building['number_of_apt_by_level']['1'] + ',' + building['number_of_apt_by_level']['3']);
    console.log(building['name_of_tenants'][1] + ',' + building['number_of_rooms_and_rent'][building['name_of_tenants'][1]][0]);

    var sarahDavid = building['number_of_rooms_and_rent']['Sarah'][1] + building['number_of_rooms_and_rent']['David'][1];
    if (sarahDavid > building['number_of_rooms_and_rent']['Dan'][1]) {
        alert("Dan's rent should be increased");
        building['number_of_rooms_and_rent']['Dan'][1] = sarahDavid;
    }
}

function exercise2() {
    var str = prompt('Enter your number:');
    var sum = 0;
    for (let i = 0; i < str.length; i++){
        sum += parseInt(str[i]);
    }
    if (sum % 3 == 0) {
        console.log(str + ' is divisible by three');
    }
    else {
        console.log(str + ' is not divisible by three');
    }
}

function exercise3() {
    let age = [20,5,12,43,98,55];
    
    let sum = 0;
    for (let i = 0; i < age.length; i++){
        sum += age[i]
    }
    console.log(sum);
    
    let max = age[0];
    for (let i = 0; i < age.length; i++){
        if (max < age[i]){
            max = age[i];
        }
    }
    console.log(max);
}

exercise1();
exercise2();
exercise3();