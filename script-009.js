// strings

// let name = "Chiranjev Kashyap"
// let repoCount = 50;
// console.log(`My Name is ${name} and my repo count is ${repoCount}`);

// let username = new String("Laxmi-Narayan");
// console.log(username.length);
// console.log(username.toLowerCase());
// console.log(username.toUpperCase());
// console.log(username.charAt(3));
// console.log(username.indexOf('y'));

// let newString = username.substring(0, 4);
// console.log(newString);

// let anotherString = username.slice(-10, 5);
// console.log(anotherString);


// string bulit-in method in javascript
let str = new String("Narayan");

// 1. at(index): its return character on passed index, on index absense its assume 0.
// console.log(str.at(5)); //'a'

// 2. charAt(index): its return character on passed index, on index absense its assume 0.
// console.log(str.charAt(5)); //'a'/

// 3. charCodeAt(): its return character unicode on passed index, on index absense its assume 0.
// console.log(str.charCodeAt(5)); //'a' == 97(in unicode)

// 4. charPointAt(): its return character unicode on passed index, on index absense its assume 0.
// console.log(str.charPointAt(5)); //'a' == 97(in unicode)

// 5. concat(): its take string, character or number, then append on last and return new string with passed argument.
// console.log(str.concat(' Coder')); //Namaste Coder

// 6. constructor(): its used to initialized instanace variable of class.
// class MyClass {
    // constructor(param1, param2) {
        // this.param1 = param1;
        // this.param2 = param2;
    // }
// }

// 7. endsWith(searchString, endPosition): when you passed only one argument then its assume endPosition is string length and when you passed both argument then, you clear one thing endPosition == stringIndex+1 and its return true or false string are end on passed character or not.

// 8. includes(searchString, position): when you passed only searchString then, its find passed character or string are available or not and when you passed both argument then, its start from passed position(index) are working same.

// 9. indexOf(searchString, position): its working same as includes and its result are -1, 0, 1. when searchingString are match then return is 1 or not match return is -1 and empty string return is 0.




console.log(str.lastIndexOf()) //Namaste Coder
// deprecated methods:
// anchor(), big(), blink(), bold(), fixed(), fontcolor(), fontsize(), italics()
