//Exercise 1
{
    let myObj = {
        name : "John",
        lastName : "Doe",
        age : 25,
        friends : ["Mark", "Lucie", "Anet"]
    };
    let counKey = 0;
    let counVal = 0;
    Object.keys(myObj).forEach(element => {
        counKey++;
    });
    Object.values(myObj).forEach(element => {
        counVal++;
    });
    console.log('The x# key is: ' + counKey + '. The x# value is: ' + counVal + '.');
}

//Exercise 2
{
    const user = { name: 'Lydia', age: 21 };
    const admin = { admin: true, ...user };
    console.log(admin);                         //{admin: true, name: "Lydia", age: 21}
}

//Exercise 3

{
    class Rabbit {
        constructor(type) {
            this.type = type;
        }
        speak(line) {
            console.log(`The ${this.type} rabbit says '${line}'`);
        }
    }
    let killerRabbit = new Rabbit("killer");
    let blackRabbit = new Rabbit("black");
    killerRabbit.speak("I'll kill you");
    blackRabbit.speak("You don't see me");
}
