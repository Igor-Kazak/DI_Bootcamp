//Exercise 1
{
    class Bird {
        constructor() {
          console.log("I'm a bird. 🦢");
        }
      }
      
      class Flamingo extends Bird {
        constructor() {
            console.log("I'm pink. 🌸");
            super();
        }
      }
      
      const pet = new Flamingo();           // first 🌸 and than 🦢
}
