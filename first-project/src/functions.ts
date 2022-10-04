let greet:Function; 

greet = () => {
    console.log('hello, world')
}

// 'greet' = hello won't work because we already declared greet as a function, it can't be changed to be a string. 

const add = (a: number, b: number, c?: number|string, d: number|string = 10) => {
    console.log(a+b);
    // console.log(c) will return undefined because c is optional and wasn't declared
    //console.log(d) will return 10 because 10 is set as a default parameter
    //question mark for optional parameter and = "value" shouldn't be used together
    //if we give value to default parameter, the value will be updated
}

// c? means that the third parameter "c" is optional 
add(5, 10); 

//because add doesn't return anything, the return will be considered void 

const minus = (a: number, b: number) => {
    return a + b;
}
let result = minus(10,5) // result will be a number, because it inherits this from the add function which is made of numbers. 


// _________________ FUNCTIION SIGNATURE __________________

let gree : (a:string, b:string) => void; 

gree = (name: string, greeting: string) => {
    console.log(`${name} says${greeting}`)
}

// we have 2 string parameters at a function and we return void. Tyscript implies that we return void because there is no return. 

let calc: (a: number, b: number, c: string) => number; 

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo; 
    }
    else {
        return numOne - numTwo;
    }
}

//Typescript infers the return type because it's the operation between two numbers. Without else, the app would crash because there are other cases possible at if. 


let details: (obj: {name: string, age: number}) => void; 

type person = {name: string, age: number}; 

details = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}

