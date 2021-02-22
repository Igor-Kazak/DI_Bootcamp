fetch('http://localhost:3000/login')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.body.innerHTML = JSON.stringify(data);
    })
    .catch(e => console.log(e))