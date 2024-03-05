// Primitive 

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 142536789n  //for bigInt type data



// Reference (Non primitive)

// Array, Objects, Functions 

const heros = ["captain America" , "Thor", "Spiderman" ];

let myObj = {
    name : "Rohit",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}



console.log(typeof null);    //object

console.log(typeof myFunction);  //function

console.log(typeof heros);     //object

console.log(typeof anotherId);   //symbol