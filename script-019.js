// control flow

//  ========== conditional statement ========== 
// if (2 > 0){
//     console.log("true");
// }

// if (2 > 0){
//     console.log("true");
// } else {
//     console.log("false");
// }

// let price = 1200;

// if (price < 500) {
//     console.log("no discount");
// } else if (price <= 1000) {
//     console.log("5% discount");
// } else if (price <= 1500) {
//     console.log("7% discount");
// } else if (price <= 2500) {
//     console.log("10% discount");
// }

// if (2 == 2 && 2 > 1 && 2 < 3) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// if (2 != 2 || 2 > 1 || 2 > 3) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// ========== Nullish Coalescing Operator (??) ========== 
// null, undefined

// let val1 = 5 ?? 10;
// console.log(val1); //5

// let val1 = null ?? 10;
// console.log(val1); //10

// let val1 = undefined ?? 10;
// console.log(val1); //10

// let val1 = null ?? undefined;
// console.log(val1); //undefined

// let val1 = undefined ?? null;
// console.log(val1); //null

// let val1 = null ?? 10 ?? 5;
// console.log(val1); //10

// ========== Terniary Operator ========== 
// condition ? true : false;

// let icecream = 100;
// icecream >= 80 ? console.log("more than 80") : console.log("less than 80");

// ========== switch case statement ========== 
// let monthName = "july";
// switch (monthName) {
//     case "january":
//         console.log("January");
//         break;

//     case "febuary":
//         console.log("February");
//         break;

//     case "march":
//         console.log("March");
//         break;

//     case "april":
//         console.log("April");
//         break;

//     case "may":
//         console.log("May");
//         break;

//     default:
//         console.log("you enter may's after month");
//         break;
// }

// ========== truthy value ========== 
// let userEmail = "narayan@google.com"; //true
// let userEmail = ""; //false
// let userEmail = []; //false
// if (userEmail) {
    // console.log(`user email is: ${userEmail}`);
// }
// else {
    // console.log(`user cannot enter any email.`);
// }

// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value:
// except of falsy value all are true
// surprising truthy value:
// "0", "false", " ", [], {}, function(){}

// for array case
// let userEmail = [];
// if (!(userEmail.length === 0)) {
    // console.log(`user email is: ${userEmail}`);
// }
// else {
    // console.log(`user cannot enter any email.`);
// }

// for object case
// let emptyObj = {};
// if (!(Object.keys(emptyObj).length === 0)) {
    // console.log("true");
// }
// else {
    // console.log("false");
// }

