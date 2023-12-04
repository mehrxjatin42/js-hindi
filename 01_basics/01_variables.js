const accountId = 144553;
let accountEmail = "abc@hmail.com";
var accoundPassword = "12345";
accountCity = "Jaipur";
let accountState;
// accountId = 2; // not allowed

accountEmail = "accb@mail.cpm";
accoundPassword = "21212121";
accountCity = "Bangaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accoundPassword,accountCity,accountState]);
// a temp let