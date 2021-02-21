//export function untilNY(){
exports.untilNY = ()=>{
    let now = new Date();
    let nyear = new Date('2022-01-01T00:00');
    let left = new Date(nyear - now);
    let days = parseInt(left/(1000*60*60*24));
    let hours = parseInt((left/(1000*60*60*24) - days)*24);
    let min = parseInt(((left/(1000*60*60*24) - days)*24 - hours)*60);
    let sec = parseInt((((left/(1000*60*60*24) - days)*24 - hours)*60 - min)*60);
    return ('the 1st January is in ' + days + ' days ' + hours + ' hours ' + min + ' min ' + sec + ' sec.');
}