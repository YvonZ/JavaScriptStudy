function f(arr) {
    if (Array.isArray(arr) == true){
        let result = 0;
        let darr = arr.flat(Infinity);
        let res = darr.every(function(item) {
                return typeof item == "number";
            });
        if (res == true){
            for(let i = 0; i < darr.length; i++){
            result += darr[i];
        } 
        } else if (JSON.stringify.darr == "[]") { 
            result = 0
        } else {throw new Error("Error: parameter type is not a Number")};
        console.log(result)
    } else {throw new Error("Error: parameter type is not a Array")}
    }
f(arr)
