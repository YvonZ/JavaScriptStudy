const arr = [1,2,3];
const acc = 0;

function reduce(arr, callback, acc) {
    if (Array.isArray(arr) == false) {
     console.log(arr," is not array");
    } else if (typeof callback != 'function') {
     console.log(callback," is not function");
    } else {
     //this;
     for (let i=0; i<arr.length; i++){
            acc=callback(acc,arr[i], i, arr)
      }
    }
    console.log(acc); 
    return acc
    }

reduce(arr, function(acc, item, i, arr) {
      return acc + item
    },acc);
