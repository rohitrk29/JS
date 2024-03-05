
//Basic comparision with same datatype
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// comparision with different datatype
console.log("2" > 1);    //true
console.log("02" > 1);   //true


// comparision and equality check ==  works differently
console.log(null > 0);   //false
console.log(null == 0);  //false
console.log(null >= 0);  //true   //In case of comparision, null will converted into 0 


console.log(undefined > 0);   //false
console.log(undefined == 0);   //false
console.log(undefined >= 0);   //false

// === use for strict check. its also use to check datatype. 
console.log("2" === 2);