function show() {
    fetch('http://localhost:3000/show')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let ol = document.getElementById('ol');
            for (let i = 0; i < data.length; i++) {
                let li = document.createElement('li');
                li.textContent = data[i].name;
                ol.appendChild(li);
            }
        })
        .catch(e => console.log(e))
}