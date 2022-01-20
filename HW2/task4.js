function f(n) {
    let result;
    if (typeof n !== 'number'){
        result ='Error: parameter type is not a Number'
    } else if (n<1 || n>7){
        result ='Error: parameter should be in the range of 1 to 7'
    } else {
        switch(n){
            case 1:
            result = 'Воскресенье';
            break;
            case 2:
            result = 'Понедельник';
            break;
            case 3:
            result = 'Вторник';
            break;
            case 4:
            result = 'Среда';
            break;
            case 5:
            result = 'Четверг';
            break;
            case 6:
            result = 'Пятница';
            break;
            case 7:
            result = 'Суббота';
            break;
        }
    }
return console.log(result)
}


f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number
