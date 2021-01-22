document.getElementsByClassName('list')[0].children[1].textContent = 'Richard';

let myname = 'Igor';
document.getElementsByClassName('list')[0].children[0].textContent = myname;
document.getElementsByClassName('list')[1].children[0].textContent = myname;

let newli1 = document.createElement('li');
let newli2 = document.createElement('li');
let text1 = document.createTextNode('Hey students');
let text2 = document.createTextNode('Hey students');
newli1.appendChild(text1);
newli2.appendChild(text2);
document.getElementsByClassName('list')[0].appendChild(newli1);
document.getElementsByClassName('list')[1].appendChild(newli2);

let toremove = document.getElementsByClassName('list')[1].children[1];
document.getElementsByClassName('list')[1].removeChild(toremove);


//document.body.children[1].classList.add('student_list');
document.body.children[1].classList.replace('list', 'student_list');
document.body.children[2].classList.replace('list', 'student_list'); 
document.body.children[1].classList.add('university', 'attendance'); 