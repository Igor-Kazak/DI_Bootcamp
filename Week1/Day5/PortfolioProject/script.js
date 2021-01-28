let picp = document.getElementsByClassName('picp');
for (let i = 0; i < picp.length; i++){
    picp[i].addEventListener('mouseover', mouseon);
    picp[i].addEventListener('mouseout', mouseout);
}

function mouseon(event){
    event.target.setAttribute('width', '240px');
    event.target.setAttribute('height', '192px');
}

function mouseout(event){
    event.target.setAttribute('width', '250px');
    event.target.setAttribute('height', '200px');
}