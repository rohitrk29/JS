
let a =300

if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner:", a); 
}

console.log(a);
// console.log(b);
console.log(c);  // only 30 will print bcoz of using var outside the scope


//global scope is different in "node" and "browser" console