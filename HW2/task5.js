let arr = [1, 2, -4, 3, -9, -1, 7];
let arr2 = [];
function isPositive(n) {
    if (typeof n === 'number') {
        if (n>=0){
            return true
        } else {return false}
        } else {throw new Error("Error: parameter type is not a Number")}
}
for (let i=0; i<arr.length; i++){
    if (isPositive(arr[i])== true){
        arr2.push(arr[i]);
    }
}
console.log(arr2)
