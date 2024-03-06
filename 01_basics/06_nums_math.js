
console.log(Math.ceil(5.2));
console.log(Math.floor(6.9));
console.log(Math.min(8,3,11,7,5));
console.log(Math.max(8,3,11,7,5));


//random value gives only bitween 0 to 1
console.log(Math.random());  
console.log((Math.random()*10) + 1);    // +1 is using to get number greater than one. if random generates the number 0.02 then the output will be 0.2 when we are not adding 1 to that random function 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // output will range between 10 to 20 bcoz adding min value to define minimum value