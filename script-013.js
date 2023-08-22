// objects
// singleton: only one object are created.
// Object.create(): object create using constructor.

// object lierals
// let mySym = Symbol("Key1");

// const JsUser = {
    // name: "Chiranjeev",
    // "full name": "Chiranjeev Kashyap",
    // mySym: "Key2", (its not appropriate way)
    // [mySym]: "Key2",
    // age: 22,
    // location: "rishikesh",
    // email: "chiranjeev@google.com",
    // isLoggedIn: false
// };

// JsUser.name (its not appropriate way to access the object)
// console.log(JsUser["full name"]); //(its appropriate way)

// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// how to change object value
// Object.freeze(JsUser);
// console.log(JsUser["email"]);

// Object.freeze(object): when you want to freeze the object for anyone cannot chnage the value.
// JsUser.email = "chiranjeev@microsoft.com";

// console.log(JsUser);

// function in object

// JsUser.greeting = function() {
    // console.log("Namaste JsUser");
// }
// console.log(JsUser.greeting);
// console.log(JsUser.greeting());

// JsUser.getName = function() {
    // console.log(`Namaste JsUser, ${this["full name"]}`);
// }

// console.log(JsUser.getName());

// ============== Advance Object ==============

// let tinderUser = new Object(); //key difference is this is singleton object
// let tinderUser = {}

// let tinderUser = {};
// tinderUser.id = "TU123";
// tinderUser.name = "Naman";
// tinderUser.isLoggedIn = true;
// console.log(tinderUser);

// let facebookUser = {
    // email: "someone@google.com",
    // fullName: {
        // userFullName: {
            // firstName: "Chiranjeev",
            // lastName: "kashyap"
        // }
    // }
// }
// console.log(facebookUser); //complete object
// console.log(facebookUser.fullName); //nested-object
// console.log(facebookUser.fullName.userFullName.firstName); //nested-object
// console.log(facebookUser.fullName.userFullName.lastName); //nested-object

// let obj1 = {1: "a", 2: "b", 3: "c"}
// let obj2 = {3: "a", 4: "b", 5: "c"}

// let obj3 = {obj1, obj2}
// let obj3 = Object.assign({}, obj1, obj2)

// let obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.values(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// ============== Object de-structure and JSON API ==============

let course = {
    courseName: "Javascript in Hindi",
    coursePrice: "free",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);
let {courseInstructor: instructor} = course; //object de-structuring
console.log(instructor);