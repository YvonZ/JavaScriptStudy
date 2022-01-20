function f() {
    let result = 0;
    if (arguments.length>0){
        for (let i=0;i<arguments.length; i++){
            if(typeof arguments[i] !== 'number'){
                result='Error: parameter type is not a Number';
                break
            } else {
                result = result + arguments[i];
                }
        }
    } 
    return result
}
console.log(f(1,2,4,5));
