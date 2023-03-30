// own module
//  const operObject = require("./op");
// const name= require("./op");
// console.log(add(2,5));


// console.log(operObject.add(5,5));
// console.log(operObject.sub(5,5));
// console.log(operObject.name);


const {add,mul,sub} = require("./op.js");
console.log(add(5,5));
console.log(sub(5,5));
console.log(mul(5,5));