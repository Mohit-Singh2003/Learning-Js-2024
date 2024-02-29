// const myArray = [1, 2, 4];
// // console.log(myArray[0]); 

// let sum = 0;
// for(let i = 0; i < myArray.length; i++){
//     sum = sum + myArray[i];
// }
// // console.log(sum); 
// if(myArray.includes(3)){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }
// ******************* Slice vs Splice in Arrays ***********************************
const myArray = [1,2,3,4];
console.log(myArray);
const new1 = myArray.slice(1,3);
console.log(new1); // Output will be 2,3 as it will include 0th, 1st & 2nd index, uses shallow copy concept
const myArray2 = [1,2,3,4,5,6,7,8];
const new2 = myArray2.splice(1,3); // 1,3 means from index 1 remove 3 elements hence output is 
console.log("B", new2);
console.log(myArray);
// Using splice will print 