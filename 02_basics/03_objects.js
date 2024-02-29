const user = {
    name : "Mohit",
    class : "IT-C",
    RollNumber : "2101920130109",
    IsLoggedIn : false
};
// console.log(user.class); // 1st method to access
// console.log(user["class"]); // 2nd method to access
/*********Symbols***************/
const mySym = Symbol("mysymbol1");
const myObject = {
    [mySym]: "Value associated with the symbol" //use square bracket in symbols []
};
console.log(myObject[mySym]);
