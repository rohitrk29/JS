// This keywords =>tells us about the current content
/*
const user = {
    username: "Rohit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}
user.welcomeMessage() 
user.username = "sam"
user.welcomeMessage()

console.log(this);  // this will show the current context In node it show empty but in browser it is shown as window object.
*/

// function chai(){
//     let username = "rohit"
//     console.log(this.username);
// }
// chai()



// const chai = function () {
//     let username = "rohit"
//     console.log(this.function);
// }


// This keywords can't use in arrow function

const chai = () => {
    let username = "rohit"
    console.log(this);
}
chai()


//Explicit return............. 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4, 5));



//Implicit return............
// const addTwo = (num1, num2) => num1 + num2

// console.log(addTwo(8 , 9));




// const addTwo = (num1, num2) => (num1 + num2)  //don't have to write return keyword when we are not using '{}' after arrow.

// console.log(addTwo(5, 6));





const addTwo = (num1, num2) => ({username: "rohit",
age: 22}) //for returning the object, we have to wrap in '()'
console.log(addTwo(2, 3));



// const myArray = [2,5,3,7,8]
// myArray.forEach(function () {})
// myArray.forEach( () => {} )
// myArray.forEach( () => () )