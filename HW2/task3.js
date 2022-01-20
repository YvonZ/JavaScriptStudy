function f(a,b,c) {
    let result;
    if (typeof a !== 'number' ||typeof b !== 'number' ||typeof c !== 'number'){
        result ='Error: parameter type is not a Number'
    } else {
        result = (a-b)/c;
    }
    return result
}
