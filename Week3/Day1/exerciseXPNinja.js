function createCalendar(year, month) {
    let d = new Date(year, month - 1);
    let counter = 0;
    let firstday = d.getDay() - 1;

    if (d.getMonth() == 1) {
        if (d.getFullYear() % 4 == 0){
            if (d.getFullYear() % 100 != 0 || d.getFullYear() % 400 == 0){
                lastday = 29;
            }
            else {
                lastday = 28;
            }
        }
        else {
            lastday = 28;
        }
    }
    else if (d.getMonth() % 2 == 0) {
        lastday = 31;
    }
    else {
        lastday = 30;
    }

    let table = document.createElement('table');
    document.body.appendChild(table);

    for (let i = 0; i < 6; i++) { //strings
        table.appendChild(document.createElement('tr'));
        for (let j = 0; j < 7; j++) { //dayofweek
            if (i == 0) {
                table.children[i].appendChild(document.createElement('th'));
                table.children[i].children[j].style.border = '1px solid lightgrey';
                if (j == 0) {
                    table.children[i].children[j].appendChild(document.createTextNode(' MO '));
                }
                else if (j == 1) {
                    table.children[i].children[j].appendChild(document.createTextNode(' TU '));
                }
                else if (j == 2) {
                    table.children[i].children[j].appendChild(document.createTextNode(' WE '));
                }
                else if (j == 3) {
                    table.children[i].children[j].appendChild(document.createTextNode(' TH '));
                }
                else if (j == 4) {
                    table.children[i].children[j].appendChild(document.createTextNode(' FR '));
                }
                else if (j == 5) {
                    table.children[i].children[j].appendChild(document.createTextNode(' SA '));
                }
                else if (j == 6) {
                    table.children[i].children[j].appendChild(document.createTextNode(' SU '));
                }
            }
            else {
                table.children[i].appendChild(document.createElement('td'));
                table.children[i].children[j].style.border = '1px solid lightgrey';
                if (j == firstday) {
                    table.children[i].children[j].appendChild(document.createTextNode(' 1 '));
                    firstday = 100;
                    counter = 2;

                }
                else {
                    if (firstday != 100) {
                        table.children[i].children[j].appendChild(document.createTextNode('-'));
                    }
                    else {
                        if (counter <= lastday) {
                            table.children[i].children[j].appendChild(document.createTextNode(counter++));
                        }
                        else {
                            table.children[i].children[j].appendChild(document.createTextNode('-'));
                        }
                    }
                }
            }
        }
    }

    document.getElementsByTagName('tr')[0].style.fontsize = '1em';
    document.getElementsByTagName('tr')[1].style.backgroundColor = 'lightgrey';
    document.getElementsByTagName('tr')[3].style.backgroundColor = 'lightgrey';
    document.getElementsByTagName('tr')[5].style.backgroundColor = 'lightgrey';

}

createCalendar(2021, 2);