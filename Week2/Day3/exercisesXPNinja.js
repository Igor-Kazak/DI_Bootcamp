let person1 = {
    fullName: "Ben",
    mass: 98,
    height: 191,
    bmi: function() {
        return (this.mass/(this.height*2/100)).toFixed(2);
      }
}

let person2 = {
    fullName: "Anna",
    mass: 65,
    height: 178,
    bmi: function() {
        return (this.mass/(this.height*2/100)).toFixed(2);
      }
}
console.log((person1.bmi() > person2.bmi()) ? person1['fullName'] : person2['fullName']);