function addTwoNumbers(number1, number2){
    const sum = number1 + number2;
    console.log(sum);
    return sum 
}
// addTwoNumbers(3,5)
// console.log(ans);
function loginUserMessage(username){
    if(!username){
        console.log("Please Enter a username");
        return;
    }
    return `${username} just logged in`
}
let result = loginUserMessage("");
// console.log(result);

// Add to cart isme dikkat ye aati hai ki hume pata nahi hai ki kitne func. parameters honge i.e. user kitne item add krega cart me , so we use ... operator

function calcCartPrice(...cart){
    return cart ;    
}
console.log(calcCartPrice(200, 300, 455));
function calcCartPrice1(val1,val2,...cart){
    return cart ;    
}
console.log(calcCartPrice1(200, 300, 455));
// console.log(typeof calcCartPrice);
const user = {
    username: "Mohit",
    price : 200
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);

const myArray = [200, 400, 500, 600];
