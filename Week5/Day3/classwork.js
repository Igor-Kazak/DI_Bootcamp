// let chuckNorris = new Promise(function (resolve, reject) {
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'json'

//     xhr.onload = function () {
//         if (xhr.status != 200) {
//             reject(xhr);
//         } else {
//             resolve(xhr);
//         }
//     };

//     xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);
//     xhr.send();
// })

// chuckNorris.then(x => console.log(`Joke :  ${x.response.value}`))
// chuckNorris.catch(error => console.log(`Error ${error.status}`))
// chuckNorris.finally(() => console.log(`I love Chuck Norris!`))

// console.log(chuckNorris)

{
function flip(){
    let rnd = parseInt(Math.random()*2);
    if (rnd == 0){
        return 'side A';
    }
    else {
        return 'side B';
    }
}

const flipCoin = new Promise((resolve, reject) => {
    const res = flip();
    if (res == 'side A'){
        resolve(res);
    }
    else{
        reject(res);
    }
})
.then((res)=>{console.log(res)})
.catch((err)=>{console.log(err)})
.finally(()=>{console.log('But it is just in 3D world.')});
}