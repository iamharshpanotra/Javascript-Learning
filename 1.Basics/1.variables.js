const accountId = 506325
let accountEmail = "harsh@panotra.com"
var accountPassword = "again"
accountCity = "Jammu"
let accountState;

// accountId = 2 // not allowed


accountEmail = "new@new.com"
accountPassword = "new"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])