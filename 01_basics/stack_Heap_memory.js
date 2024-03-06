// Stack (Primitive) By Copy,  Heap (Non-Primitive) By Reference =>

// In stack memory, it will take the copy of the varibale and work on it.

let myName = "Rohit"
let anotherName = "Rahul"
anotherName = "kumar"

console.log(anotherName);
console.log(myName);


// In Heap memory, it will take Reference of the variable (which is actual value) and the copy of variable.

let userOne = {
    email : "rohit@gmail.com",
    upi : "userOne@ybl"
}

let userTwo = userOne;

// to access object
userTwo.email = "kumar@gmail.com"   

console.log(userOne.email);
console.log(userTwo.email);