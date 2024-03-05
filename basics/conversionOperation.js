
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


// ****************Operations**********************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 4);
console.log(2 / 3);
console.log(2 % 3);

let str1 = "hello"
let str2 = " rohit"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);  //12
console.log(1 + "2");  //12 
console.log("1" + 2 + 2);  //122
console.log(1 + 2 + "2" );  //32

console.log((3 + 4) * 5 % 3);

// (+) use for conversion
console.log(+true);  //1
console.log(+"");   //0  empty sting reps 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 3

let gameCounter = 100
// ++gameCounter;          //prefix
gameCounter++;          //postfix
console.log(gameCounter);