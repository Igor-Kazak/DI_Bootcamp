//Exercise 1
{
let resolveAfter2Seconds = function () {
  console.log("starting slow promise");           //3 starting slow promise
  return new Promise(resolve => {
      setTimeout(function () {
          resolve("slow");
          console.log("slow promise is done");    //4 slow promise is done
      }, 2000);
  });
};

let resolveAfter1Second = function () {
  console.log("starting fast promise");           //6 starting fast promise
  return new Promise(resolve => {
      setTimeout(function () {
          resolve("fast");
          console.log("fast promise is done");    //7 fast promise is done
      }, 1000);
  });
};

let sequentialStart = async function () {
  console.log('==SEQUENTIAL START==');            //2 ==SEQUENTIAL START==
  const slow = await resolveAfter2Seconds();
  console.log(slow);                              //5 slow
  const fast = await resolveAfter1Second();
  console.log(fast);                              //8 fast
}

sequentialStart()                                 //1
}

//Exercise 2
{
let resolveAfter2Seconds = function () {
  console.log("starting slow promise");                 //3 starting slow promise
  return new Promise(resolve => {
      setTimeout(function () {
          resolve("slow");
          console.log("slow promise is done");          //6 slow promise is done
      }, 2000);
  });
};

let resolveAfter1Second = function () {
  console.log("starting fast promise");                 //4 starting fast promise
  return new Promise(resolve => {
      setTimeout(function () {
          resolve("fast");
          console.log("fast promise is done");          //5 fast promise is done
      }, 1000);
  });
};

let concurrentStart = async function () {
  console.log('==CONCURRENT START with await==');       //2 ==CONCURRENT START with await==
  const slow = resolveAfter2Seconds();
  const fast = resolveAfter1Second();
  console.log(await slow);                              //7 slow
  console.log(await fast);                              //8 fast
}

setTimeout(concurrentStart, 4000)                       //1
}

//Exercise 3
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
        console.log('Request Failed', err)
    }
  }));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

getData();