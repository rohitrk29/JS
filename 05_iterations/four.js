//for in      objects can be iterates by this loop

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(key);
    //console.log(myObject[key]); //it will give values of that key
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


//Array's key started from 0 to their length
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {

    console.log(key);    //key as 0 to their length
    console.log(programming[key]);   //values of their key
}

