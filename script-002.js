// Variables: let, const and var
const accountId = 2324;
let accountEmail = "coder@google.com";
var accountPassword = "12345";
accountCity = "Rishikesh";
let accountState;

console.table(
    [accountId, accountEmail, accountPassword, accountCity]
); 

// accountId = 241; // its not allowed

accountEmail = "nc@gmail.com";
accountPassword = "54321";
accountCity = "Bhopal";

console.table(
    [accountId, accountEmail, accountPassword, accountCity, accountState]
); 