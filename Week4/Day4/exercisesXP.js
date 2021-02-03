//Exercise 1
{
    const person = {
        name: 'John Doe',
        age: 25,
        location: {
            country: 'Canada',
            city: 'Vancouver',
            coordinates: [49.2827, -123.1207]
        }
    }
    const {name, location: {country, city, coordinates: [lat, lng]}} = person;
    console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
    //I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
}

//Exercise 2
{
    console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
    function displayStudentInfo(obj){
        let {first, last} = obj;
        return 'Your full name is ' + first + ' ' + last;
    }
}

//Exercise 3
{
    class Person {
        constructor(name) {
          this.name = name;
        }
      }
      
      const member = new Person('John');
      console.log(typeof member);           //object
}

//Exercise 4
class Dog {
    constructor(name) {
        this.name = name;
    }
};

class Labrador extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
};