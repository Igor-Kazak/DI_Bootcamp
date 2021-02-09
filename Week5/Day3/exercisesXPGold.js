var urls = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4'
  ];
  
  let p0 = fetch(urls[0])
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log('Request Failed', err)
    });

  let p1 = fetch(urls[1])
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log('Request Failed', err)
    });

  let p2 = fetch(urls[2])
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log('Request Failed', err)
    });

  let p3 = fetch(urls[3])
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log('Request Failed', err)
    });

Promise.all([p0, p1, p2, p3])
  .then(values => {
    console.log(values);
  });