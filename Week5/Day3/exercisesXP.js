//Exercise 1
let promise1 = new Promise(function (resolve, reject) {
    if (compareToTen(15)) {
        resolve('Bigger than 10');
    } else {
        reject('Smaller than 10');
    }
})
.then(result => console.log(result))
.catch(error => console.log(error));

let promise2 = new Promise(function (resolve, reject) {
    if (compareToTen(8)) {
        resolve('Bigger than 10');
    } else {
        reject('Smaller than 10');
    }
})
.then(result => console.log(result))
.catch(error => console.log(error));

function compareToTen(num) {
    if (num > 10) {
        return true;
    } else {
        return false;
    }
}

//Exercise 2
{
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success');
        }, 4000);
    })
        .then(result => console.log(result))
        .catch(error => console.log(error));


    Promise.resolve(setTimeout(() => {
        console.log('success');
    }, 4500))

    Promise.reject(new Error('Ooops something went wrong')).then(function (success) { },
        function (error) {
            console.log(error);
        });

}

// //var1
// {
// let survive = true;

// let seger = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         if (survive) {
//             resolve("We will survive!");
//         } else {
//             reject("We will die!");
//         }
//     }, 4000);
// });

// console.log(seger)
// seger.catch(function () {
//     console.log('Ooops something went wrong');
// });
// }
// //var2
// {
//     const promise = Promise.resolve('success');
    
//     promise.then(function(value) {
//         setTimeout(console.log(value), 4000); 
//     }, function (reason) {
//       console.log(reason); 
//     });    
// }

