var arrayOfWords = ['team', 'friend', 'earth', 'score'];
var complicatedArray = ['team', 'friend', 20, 'earth', true, 'score'];

function makeAllCaps(arr){
    return arr.map(value => value.toUpperCase());
}

function sortWords(arr){
    return arr.sort();
}

const promise1 = new Promise((resolve, reject) => {
    const result = makeAllCaps(arrayOfWords);
    if(result) {
      resolve(result);
    } else {
      reject('error');
    }
})
.then((result) => sortWords(result))
.then((result) => console.log(result))
.catch(error => console.log(error))

const promise2 = new Promise((resolve, reject) => {
    const result = makeAllCaps(complicatedArray);
    if(result) {
      resolve(result);
    } else {
      reject('error');
    }
})
.then((result) => sortWords(result))
.then((result) => console.log(result))
.catch(error => console.log(error))