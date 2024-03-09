//if 

// <, >, <=, >=, ==, !=, === (for strict type check), !== 

// const isUserLoggedIn = true

// if(isUserLoggedIn){

// }

// if( 2 == "2" ){
//     console.log("executed");
// }


if( 2 === "2" ){
    console.log("executed");
}
console.log("outside the condition");

const temp = 41
if(temp === 41){
    console.log("less than 50");
}else{
    console.log("greater than 50");
}
console.log("executed");

/*
const score = 200
if(score > 100 ){
    const power ="fly" //**** 
    console.log(`user power: ${power}`);
}
console.log(`user power: ${power}`);
*/

const score = 200
if(score > 100 ){
    var power ="fly" // var can be acessed
    console.log(`user power: ${power}`);
}
console.log(`user power: ${power}`);




const balance = 1000

if(balance > 500) console.log("test"), console.log("test2");  //In one line statement

if(balance < 500) {
    console.log("less than 500");
}else if(balance < 750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 900");
}else if(balance < 1200){
    console.log("less than 1200");
}




const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle =false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}