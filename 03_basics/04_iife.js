// ImmediatEly Invoked Function Expression (IIFE)

// ( () {})()

// (function chai(){
//     console.log(`DB CONN`);
// })
// chai()



(function chai(){
    console.log(`DB CONNECTED`)
})();   // ; terminator is use to terminate 1st iife and execute another iife. 


//   ( () => {} )()      //with arrow function 

((name) => {
    console.log(`DB CONNECTED AGAIN ${name}`);
})('Rohit')

//js