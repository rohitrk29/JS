// Objects can be declare by two types : 
// 1> Literals  2> Constructor

// Singleton by only using constructor not literals 


// Object.create  // by constructor


// object literals
const mysymb = Symbol("key1") //Symbol

const JsUser = {
    name : "Rohit",
    "full name" : "Rohit kumar",
    [mysymb] : "mykey1",    // defining Symbol using sqr bracket
    age: 22,
    location: "Bangalore",
    email: "rohit@gmail.com",
    isLoggesIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//access object
console.log(JsUser.email);
console.log(JsUser["email"]);
// console.log(JsUser.full name); //you can't access the value of full name by using dot(.) operator.
console.log(JsUser["full name"]);  // to access the full name value, you have to use Square bracket[].

//symbol access
console.log(JsUser[mysymb]);

JsUser.email = "rohitrk@gmail.com"
// Object.freeze(JsUser)   //freeze is use restrict the change. it won't allow us to change the value.  
JsUser.email = "rohitkumar@gmail.com"
console.log(JsUser.email);



JsUser.greeting = function() {
    console.log("hello JS user");
}

JsUser.greeting2 = function() {
    console.log(`hello JS user ${this.name}`);       //this keyword
    console.log(`hello JS user ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
