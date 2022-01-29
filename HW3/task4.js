const arr = [1,2,3];

function some(arr, callback) {
    if (Array.isArray(arr) == false) {
     console.log(arr," is not array");
    } else if (typeof callback != 'function') {
     console.log(callback," is not function");
    } else {
     //this;
     for (let i=0; i<arr.length; i++){
         if (!callback(arr[i], i, arr)){
         } else {
          console.log(true) 
          return true}
      }
    console.log(false); 
    return false
    }
    }

some(arr, function(item, i, arr) {
      return typeof item == "number"
    });
