let fs = require('fs');
let request =  require('request');


request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR20GSdKClDe5lvU3MiXPygbLhU0DPz_Oi6npoZ7W6XM72oSPdhmZpMI7bE',
    function (error, response, body) {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    let currArr = JSON.parse(body);
    for (let i = 0; i < currArr.length; i++) {
        for (key in currArr[i]) {
            if (key == 'ccy') console.log('Курс ' + currArr[i][key] + ' к ');
            if (key == 'base_ccy') console.log(currArr[i][key] + ' равен:\n');
            if (key == 'buy') console.log('Покупка: ' + currArr[i][key]);
            if (key == 'buy') console.log('Продажа: ' + currArr[i][key] + '\n__________________\n');
        }
    }
    });
