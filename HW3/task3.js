const arr = [1,2,3];

function every(arr, callback) {
    if (Array.isArray(arr) == false) {
     console.log(arr," is not array");
    } else if (typeof callback != 'function') {
     console.log(callback," is not function");
    } else {
     //this;
     for (let i=0; i<arr.length; i++){
         if (callback(arr[i], i, arr)){
         } else {
          console.log(false) 
          return false}
      }
    console.log(true); 
    return true
    }
    }

every(arr, function(item, i, arr) {
      return typeof item == "number"
    });
