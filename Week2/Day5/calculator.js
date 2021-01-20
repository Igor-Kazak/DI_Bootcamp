var str = '';

function num(argument){
    str = str.concat('', argument);
}

function enter(){
    alert('Result is: ' + eval(str));
    reset();
}

function clear(){

}

function reset(){
    str = '';
}