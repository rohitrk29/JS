const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "flash", "batman"]

marvel_heros.push(dc_heros) //inserting array into another array
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);


// Spread operator(...Array_Name) used to concate the element one by one.
// by this method you can concate more than two arrays values to any new array 
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);


const another_array = [1, 2, 3, [4,5,6], 7, [6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)  //flat is used to automatically spread out the value. 
console.log(real_another_array);



console.log(Array.isArray("Rohit")); 
//false


//form method 
console.log(Array.from("Rohit"));  //It will change any types of value into Array form.
console.log(Array.from({name: "Rohit"})); //it will return empty array bcoz from method is confused between keys and values inside the object to the converts into array form. 
//It can't decide whether to choose keys or values to convert into array. 



//Array.of method => its also convert into array form 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));