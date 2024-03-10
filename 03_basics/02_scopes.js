
let a =300

if(true){
    let a = 10
    const b = 20
    var c = 50
    console.log("Inner:", a); 
}
//sndiuni
console.log(a);
// console.log(b);  //it will not print bcoz of accessing from outside of the scope
console.log(c);  // only 50 will print bcoz of using var outside the scope


//global scope is different in "node" and "browser" console


// In this nested function chlid can access value from the parent.
function one(){
    const username = "rohit"
    console.log("kumar");
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);     
    //this line gives error bcoz this line is declared outside of the scope..it should be inside function two(){}.

    two()
}
one()




if(true){
    const username = "rohit"
    if(username === "rohit"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);   //error   
}
// console.log(username);    //error



//++++++++++++++++++++++ interesting ++++++++++++++++++++++++++

/*
function addone(num){
    return num + 1
}
console.log(addone(3));
*/


//here we are declaring before
console.log(addone(3));
function addone(num){
    return num + 1
}



/*  this will work properly 
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(9));
*/


// console.log(addTwo(9));      //This will give error bcoz of declaring before in this syntax when we store the function in any variable.
// cannot access 'addtwo' before initialization or declaration. 
const addTwo = function(num){
    return num + 2
}


