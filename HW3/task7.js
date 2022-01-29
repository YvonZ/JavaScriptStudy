/*
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
arrLength[i] = arr[i].length;
}
*/
var arr = ['abcd', 'abcde', 'ab', 'abc'];
//используем метод map
var arrLength = arr.map(function(arr) {
  return arr.length;
});

console.log( arrLength ); // 4,5,2,3
