"use strict";
let greet;
greet = () => {
    console.log('hello, world');
};
// 'greet' = hello won't work because we already declared greet as a function, it can't be changed to be a string. 
const add = (a, b, c, d = 10) => {
    console.log(a + b);
    // console.log(c) will return undefined because c is optional and wasn't declared
    //console.log(d) will return 10 because 10 is set as a default parameter
    //question mark for optional parameter and = "value" shouldn't be used together
    //if we give value to default parameter, the value will be updated
};
// c? means that the third parameter "c" is optional 
add(5, 10);
//because add doesn't return anything, the return will be considered void 
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 5); // result will be a number, because it inherits this from the add function which is made of numbers. 
// _________________ FUNCTIION SIGNATURE __________________
let gree;
gree = (name, greeting) => {
    console.log(`${name} says${greeting}`);
};
// we have 2 string parameters at a function and we return void. Tyscript implies that we return void because there is no return. 
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//Typescript infers the return type because it's the operation between two numbers. Without else, the app would crash because there are other cases possible at if. 
let details;
details = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
