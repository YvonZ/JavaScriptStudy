function filter(arr, callback) {
    let res = [];
    if (Array.isArray(arr) == false) {
     console.log(arr," is not array");
    } else if (typeof callback !== 'function') {
     console.log(callback," is not function");
    } else {
        this;
        for (let i=0; i<arr.length; i++){
        if (callback(arr[i], i, arr)) {
            res.push(arr[i])
        };
     }}
     console.log(res)
     return res;
 } 
 
 const arr = [1,2,3];
 
 filter(arr, function (item, i, arr) { //проверка на положительное число
      if (item < 0) {
        return false
      } else {
        return true
      }
 })
