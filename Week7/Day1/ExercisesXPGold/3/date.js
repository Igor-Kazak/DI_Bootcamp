exports.holiday = () => {
    
    let Holidays = require('date-holidays');
    let hd = new Holidays('RU');
    hd.setLanguages('en');
    let now = new Date();
    let nexth = new Date();
    while (!hd.isHoliday(nexth)){
        nexth = new Date(nexth-(-1000*60*60*24));
    }
    nexth.setHours(00);
    nexth.setMinutes(01);
    let left = new Date(nexth - now);
    let days = parseInt(left/(1000*60*60*24));
    let hours = parseInt((left/(1000*60*60*24) - days)*24);
    let min = parseInt(((left/(1000*60*60*24) - days)*24 - hours)*60);
    let sec = parseInt((((left/(1000*60*60*24) - days)*24 - hours)*60 - min)*60);
    let holl = hd.isHoliday(nexth);
    return ('The next holiday "'+ holl[0].name +'" is in '+days+' days '+hours+' hours '+min+' min '+sec+' sec.');
}
