var arr = [1,2,3,4,5,6]
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let tmp = arr[i];
        arr[i] = arr[j]; 
        arr[j] = tmp
      }
    }
  }
console.log(arr)
