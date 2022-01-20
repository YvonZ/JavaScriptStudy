function isEven(n) {
    let result;
    if (typeof n === 'number'){
        if (n % 2 == 0){
            result= true
        } else {result= false}
    } else { result ='Error: parameter type is not a Number'
    }
    return console.log(result);
} 
isEven(3);
isEven(4);
isEven('3');
