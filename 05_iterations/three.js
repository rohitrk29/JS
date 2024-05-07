// for of


// ["", "", ""]
// [{}, {}, {}]


// on array
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);   
}



//on string
const greetings = "hello world!"

for (const greet of greetings) {
    console.log(`Each cahr is ${greet}`);   
}


//Maps   (contains unique value)

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")
map.set('IN', "India")   //this will not print bcoz map contains only unique values 

console.log(map);



for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {  //it will show seperate key and values
    console.log(key, ":-", value);
}

// objects can't be iterates by 'for of'  loop
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for(const [key, value] of myObject){
    console.log(key, ':-', value);
}