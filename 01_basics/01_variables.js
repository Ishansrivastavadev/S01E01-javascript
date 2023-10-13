const accountId = 1524
let accountEmail = "ishan@mail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState
 
// accountId = 5 typeError assignment to constant variable
accountEmail = "is@mail.com"
accountPassword = "abcd"
accountCity = "mumbai" // not good practise


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/**
 * prefer not to use var to declare variables
 * because of issue in block scope and functional scope
 */