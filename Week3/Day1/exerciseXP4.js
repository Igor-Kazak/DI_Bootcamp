document.getElementsByTagName('div')[0].style.backgroundColor = "lightblue";
document.getElementsByTagName('div')[0].style.padding = "10px";

document.getElementsByTagName('div')[0].style.padding = "10px";

document.getElementsByTagName('ul')[0].children[0].style.visibility = "hidden";
document.getElementsByTagName('ul')[0].children[1].style.border = "1px solid gray";

document.body.style.fontSize = "2em";

if (document.getElementsByTagName('div')[0].style.backgroundColor == "lightblue"){
    alert('Hello ' + document.getElementsByTagName('ul')[0].children[0].innerHTML + 
    ' and ' + document.getElementsByTagName('ul')[0].children[1].innerHTML);
}
