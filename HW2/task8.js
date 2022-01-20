let n = [1, 2, 3];
let i = 0;
function f(n) {
    if (n.constructor === Array) {
        if (n.length>0){
            console.log(n[i]);
            i++
            if (i<n.length){f(n)}
        } else {console.log("Error: parameter can't be an empty")}
    } else {console.log("Error: parameter type should be an array")}

}
f(n)
