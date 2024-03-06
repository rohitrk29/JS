const accountId = 123
let accountEmail = "rohit@gmail.com"
var accountPassword = "789"  //prefer not to use var because of issue in block scope and functional scope
accountCity = "Jaipur"
let accountState;    //undefined

// accountId = 2  // not allowed

accountEmail = "kumar@gmail.com"
accountPassword = "1020"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);