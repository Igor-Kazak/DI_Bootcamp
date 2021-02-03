//Exercise 1
{
    console.log(printFullName({first: 'Elie', last:'Schoppik'}));
    function printFullName({first, last}){
        return 'Your full name is ' + first + ' ' + last;
    }
}

//Exercise 2
{
    class Counter {
        constructor() {
          this.count = 0;
        }
      
        increment() {
          this.count++;
        }
      }
      const counterOne = new Counter();
      counterOne.increment();
      counterOne.increment();
      const counterTwo = counterOne;
      counterTwo.increment();
      console.log(counterOne.count);        // 3 because instance of class isn't a primitive datatype
}
