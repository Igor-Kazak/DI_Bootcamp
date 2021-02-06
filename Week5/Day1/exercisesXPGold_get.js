var url = document.location.href;
var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

if (queryString) {                                      // если есть строка запроса
    queryString = queryString.split('#')[0];            // данные после знака # будут опущены
    var arr = queryString.split('&');                   // разделяем параметры
    var obj = {};                                       // объект для хранения параметров
    for (var i = 0; i < arr.length; i++) {
        var a = arr[i].split('=');                      // разделяем параметр на ключ => значение
        var paramNum = undefined;                       // обработка данных вида: list[]=thing1&list[]=thing2
        var paramName = a[0].replace(/\[\d*\]/, function (v) {
            paramNum = v.slice(1, -1);
            return '';
        });
        var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];  // передача значения параметра ('true' если значение не задано)
        //paramName = paramName.toLowerCase();            // преобразование регистра
        //paramValue = paramValue.toLowerCase();          // преобразование регистра
        paramValue = paramValue.replace(/\+/g, ' ');
        if (obj[paramName]) {                               // если ключ параметра уже задан
            if (typeof obj[paramName] === 'string') {       // преобразуем текущее значение в массив
                obj[paramName] = [obj[paramName]];
            }
            if (typeof paramNum === 'undefined') {          // если не задан индекс...
                obj[paramName].push(paramValue);            // помещаем значение в конец массива
            }
            else {                                          // если индекс задан...
                obj[paramName][paramNum] = paramValue;      // размещаем элемент по заданному индексу
            }
        }
        else {                                              // если параметр не задан, делаем это вручную
            obj[paramName] = paramValue;
        }
    }
    document.getElementById('get').textContent = 'Hey! We got the request from: ' + Object.values(obj)[0] + ' ' + Object.values(obj)[1];
}