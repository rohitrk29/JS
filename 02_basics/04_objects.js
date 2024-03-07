//Singleton object creation
    // const instaUser =new Object()


//Non-Singleton object creation
const instaUser = {}
instaUser.id = "123abc"
instaUser.name = "Rohit"
instaUser.isLoggedIn = false

// console.log(instaUser);


const regularUser = {
    email: "rohit@gmal.com",
    fullname: {
        userfullname: {
            firstname: "Rohit",
            lastname: "Kumar"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2)  // {} this empty object is target and other are source

const obj3 = {...obj1, ...obj2} //using speard method()
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "rohit@gmail.com"
    },
    {
        id: 1,
        email: "rohit@gmail.com"
    },
    {
        id: 1,
        email: "rohit@gmail.com"
    }
]

users[1].email
/*console.log(users);

console.log(instaUser);
//access the keys and their values in the objects
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isLoggedIn')); //it will check the value that is present or not. and return in boolean true or false.
*/


const course = {
    coursename: "javascript",
    price:"999",
    courseInstructor: "rohit" 
}

// course.courseInstructor 
//      or

const {courseInstructor : instructor} = course 

// console.log(courseInstructor);  or
console.log(instructor);




// All these API are in json format
// json format 
// {
//     "name": "rohit",
//     "coursename": "javascript",
//     "price": "free"
// } 

// data in the form of array conataining objects 
// [
//     {},
//     {},
//     {}
// ]