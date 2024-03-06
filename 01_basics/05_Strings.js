const name = "rohit"
const repoCount = 50

//This is the old ways to write syntax
console.log(name + repoCount + " Value");  


// String interpolation  (new syntax for writing below code line)
console.log(`Hello ${name} and my repo count is ${repoCount}`);


const gameName = new String('rohit-kumar-mehta')

console.log(gameName[0]);
// console.log(gameName.__proto__);  // will get objects

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4);  //last index is excluded
console.log(newString);

const anotherString = gameName.slice(-2, 3);
console.log(anotherString);

const newStringOne = "  rohit  "   
console.log(newStringOne);
console.log(newStringOne.trim());  //trim  whitespace. 

const url = "https://rohit.com/rohit%20kumar"
console.log(url.replace('%20', '-'));

console.log(gameName.split('-'));  //it will split the string where '-' is present.