 function f(n) {
    let result;
     if (typeof n === 'number' ) {
        result = n*n*n;
        console.log(result)
    } else { 
        console.log('Error: parameter type is not a Number')
     }
 }

f(3); // 8
f('Content'); // Error: parameter type is not a Number
