//Exercise 1
{
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(async function (url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (err) {
        console.log('ooooooops', err)
    }
  }));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

getData();
}

//Exercise 2
{
let resolveAfter2Seconds = function () {
  console.log("starting slow promise");                         //2
  return new Promise(resolve => {
      setTimeout(function () {
          resolve("slow");
          console.log("slow promise is done");                  //5
      }, 2000);
  });
};

let resolveAfter1Second = function () {
  console.log("starting fast promise");                         //3
  return new Promise(resolve => {
      setTimeout(function () {
          resolve("fast");
          console.log("fast promise is done");                  //4
      }, 1000);
  });
};

let concurrentPromise = function () {
  console.log('==CONCURRENT START with Promise.all==');         //1
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
      console.log(messages[0]);                                 //6 slow
      console.log(messages[1]);                                 //7 fast
  });
}

setTimeout(concurrentPromise, 1000)
}

//Exercise 3
{
let resolveAfter2Seconds = function () {
  console.log("starting slow promise");                                //2
  return new Promise(resolve => {
      setTimeout(function () {
          resolve("slow");
          console.log("slow promise is done");                          //6
      }, 2000);
  });
};

let resolveAfter1Second = function () {
  console.log("starting fast promise");                                 //3
  return new Promise(resolve => {
      setTimeout(function () {
          resolve("fast");
          console.log("fast promise is done");                          //4
      }, 1000);
  });
};

let parallel = async function () {
  console.log('==PARALLEL with await Promise.all==');                   //1
  await Promise.all([
      (async () => console.log(await resolveAfter2Seconds()))(),        //7
      (async () => console.log(await resolveAfter1Second()))()          //5
  ]);
}

setTimeout(parallel, 5000)
}

//Exercise 4
{
let resolveAfter2Seconds = function () {
  console.log("starting slow promise");                                 //2
  return new Promise(resolve => {
      setTimeout(function () {
          resolve("slow");
          console.log("slow promise is done");                          //6                   
      }, 2000);
  });
};

let resolveAfter1Second = function () {
  console.log("starting fast promise");                                 //3
  return new Promise(resolve => {
      setTimeout(function () {
          resolve("fast");
          console.log("fast promise is done");                          //4                  
      }, 1000);
  });
};

let parallelPromise = function () {
  console.log('==PARALLEL with Promise.then==');                        //1
  resolveAfter2Seconds().then((message) => console.log(message));       //7
  resolveAfter1Second().then((message) => console.log(message));        //5
}

setTimeout(parallelPromise, 13000)
}