var birthday = new Date("1984-02-11");
var now = new Date();
var myage = Math.floor((now-birthday)/31536000000);
console.log('I will be ' + (myage + 1) + ' in ' + (Math.floor(now/31536000000)+1970+1))