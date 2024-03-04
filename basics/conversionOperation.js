let Name= "Rohit"

console.log(typeof Name);   // Type = string
console.log(typeof (Name));  //Both are same syntax with or without parenthesis

let valueInNumber = Number(Name)
console.log(typeof valueInNumber);  // type number
console.log(valueInNumber);   //type NaN

// "32" => 33
// "32abc" => NaN(Not a Number)
// true => 1; false => 0

let isLoggedIn = "rohit"

let booleanIsLoggedIn = Boolean(isLoggedIn)    
console.log(booleanIsLoggedIn)      // o/p => true

// // 1 => true; 0 => false
// // "" => false
// // "hitesh" => true

let someNumber = 33

let stringNumber =String(someNumber)
console.log(stringNumber);     // o/p => 33 as string
console.log(typeof stringNumber);