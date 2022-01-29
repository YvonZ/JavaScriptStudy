function arrayFill(a,b) {
    console.log(typeof a)
    let result =[];
    if (typeof a !== 'string'&& typeof a !== 'number' && typeof a !== 'object' && typeof a !== 'array' ){
        result ='Error: not defined parametr'
    } else if (typeof b !== 'number') {
        result ='Error: b is not number'
    } else {
        let i=0;
        while (i<b) {
            result.push(a);
            i++
        }
    }
    console.log(result)
}


arrayFill('x',5);
