const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
};

// user.welcomeMessage();
// user.username = 'Mohit';
// user.welcomeMessage();
// **********************Arrow Functions*********************
const addTwoNum = (num1, num2) => (num1 + num2) //1st method
// const addTwoNum = (num1, num2) => {
//     return (num1 + num2);
// }
// Ye upar wala 2nd tareeka hai
const obj = (n1,n2) => ({username:"Mohit"});
console.log(obj(3,5));