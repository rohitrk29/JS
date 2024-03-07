/*
function sayMyName(){
    console.log("Rohit");
}

sayMyName()


function addTwoNumbers(num1, num2){
//    let result = num1 + num2
//    return result

    return num1 + num2
}

const result = addTwoNumbers(4, 5)

console.log("Result: ", result );



function loginUserMessage(username){  //you can also passs the value to username as (username ="kumar")
     return `${username} just logged in`
}

console.log(loginUserMessage("Rohit"));
*/


function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 6000));



function calculateCartPrice(val1, val2, ...num1){  // 200 assign to val1 and 400 assign to val2 and other all are assign to ...num1
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))



const user = {
    username: "rohit",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
const myNewArray = [200,400 ,100, 600]




function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSeconValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));