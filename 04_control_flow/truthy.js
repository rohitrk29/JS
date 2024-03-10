// const userEmail = "rohit@gmail.com"

// if(userEmail){
//     console.log("Got user email")
// }else {
//     console.log("Don't have user email");
// }


// falsy values

// false, 0, -0, BigInt 0n(zero), "", null, undefined, NaN


//Truthy values

// "0", 'false', " ", [], {}, function(){}, false == 0, false == '', 0 == ''

const userEmail = []

if(userEmail.length === 0){
    console.log("Array is empty");
}
// /sds

const emptyObj = {}

if(Object.keys(emptyObj).length ===0) {
    console.log("Object is empty");
}



//Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10  //if any null value will get then execute the other function written after ??
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);




//Terniary operator

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");