var str = '';
var elem = document.getElementById('calc');

function num(argument){
    str = str.concat('', argument);
    elem.innerHTML = str;
}

function enter(){
    elem.innerHTML = eval(str);
    str = '';
}

function clear(){

}

function reset(){
    str = '';
    elem.innerHTML = '0';
}