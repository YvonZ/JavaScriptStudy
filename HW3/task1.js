 function forEach(arr, callback) {
   if (Array.isArray(arr) == false) {
    console.log(arr," is not array");
   } else if (typeof callback != 'function') {
    console.log(callback," is not function");
   } else {
    this;
    for (let i=0; i<arr.length; i++){
      callback(arr[i], i, arr);
    }}
}

const arr = [1,2,3];

forEach(arr, function (item, i, arr) { 
     console.log(i,"-й элемент: ", item ," из массива ", arr);
})
