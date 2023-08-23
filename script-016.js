// scope level and mini hoisting
function one() {
    let username = "chiranjeev";
    function two() {
        let website = "youtube.com";
        console.log(username);
    }
    // console.log(website);
    two();
}


// +++++++++++ Interesting +++++++++++
addOne(5);
function addOne(num) {
    return num + 1;
}

addTwo(6);
const addTwo = function(num) {
    return num + 2;
}