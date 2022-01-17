var arr = [6,5,4,3,2,1];
for (let i = arr.length-1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
        if (arr[i] < arr[j]) {
          let tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        };
      };
    }
console.log(arr)
