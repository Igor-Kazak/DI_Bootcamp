function exercise1(){
    var num = 8;
    var num = 10;
    console.log(num); //10
}

function exercise2(){
    function numbers() {
        for (let i = 0; i < 5; i += 1) {
          console.log(i);
        }
          console.log(i);
      }
    numbers();
}

function exercise3(){
    var amount = 1000;
    var vat = 1.17;
    var changes = -100;

    console.log(newamount());

    function plusvat(){
        return changes*vat;
    }

    function newamount(){
        return amount + plusvat();
    }
}

exercise1();
exercise2();
exercise3();