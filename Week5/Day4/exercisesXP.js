//Exercise 1
{
    // fetch("https://swapi.dev/api/starships/9/")
    //     .then(response => response.json())
    //     .then(console.log);

    async function fetchShips() {
        try {
            let response = await fetch('https://swapi.dev/api/starships/9/');
            let data = await response.json();
            console.log(data);
        } catch (err) {
            console.log('Request Failed', err);
        }
    }

    fetchShips();
}

//Exercise 1
{
    
    function resolveAfter2Seconds() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');                    //3
            }, 2000);
        });
    }
    
    async function asyncCall() {
        console.log('calling');                         //2 calling
        let result = await resolveAfter2Seconds();
        console.log(result);                            //4 resolved
    }
    
    asyncCall();                                        //1
}