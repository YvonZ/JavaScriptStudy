function getDivisors(n){
    let result;
    let arr=[];
    if (typeof n === 'number' && n>0){
        for (let i = 1; i<=n; i++){
            if (n%i==0){
                arr.push(i);
            }
        }
        result = arr;
        } else if (typeof n === 'number' && n==0) {
            result = "Error: parameter can't be a 0"
            } else if (typeof n === 'number' && n<0) {
                result = "Error: parameter can't be less than 0"
                } else {result = "Error: parameter type is not a Number"}
    
    return console.log(result);
}
