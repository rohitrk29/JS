// array 

const myArr = [0,1,2,3,4,5]
const myHeros = ["Ironman", "Spiderman"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[3]);
console.log(myArr2);


//Array Methods

myArr.push(10)
myArr.push(11)  //push at last
myArr.pop()     // pop form last 

myArr.unshift(9)   //add 9 form the begining of the array
myArr.shift()  // remove the element form the beginning of the array. without taking any parameter.

console.log(myArr.includes(9));   //return boolean values. return true, if it is present.
console.log(myArr.indexOf(2));  //return the index of the present element

const newArr = myArr.join()


console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


//Slice and Splice

//slice is used to do partion on the basis of the argument value, here 3 is excluded. o/p [1,2]
// Original array won't be affected.
console.log("A ", myArr );


const myn1= myArr.slice(1,3)   
console.log(myn1);
console.log("B ", myArr);

//In splice both the paramerter is included and its removes that particular part according to the given parameter (like from index 1 to 3 will be removed from the array).
// Original array will be changed.
const myn2 = myArr.splice(1,3) 
console.log(myn2);
console.log("C", myArr);