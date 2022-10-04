"use strict";
// __________________________ VARIABLES __________________________________ // 
let character = 'luigi';
character = 'mario'; //works because it's still a string
//character = 10; won't work because character was initially a string
console.log(character);
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    console.log(input);
});
const circ = (diameter) => {
    return diameter * Math.PI;
};
// console.log(circ('hello')) won't work because diameter must be a number; 
console.log(circ(7.5));
// __________________________ ARRAYS __________________________________ // 
let names = ['luigi', 'mario', 'vesna'];
names.push('toad'); // will work because we are pushing a string into a string arr 
// names.push(10) won't work because it's a number
//names = 'something' won't work because name was declared as an array, can't be transformed into a string
let mixed = ['mario', 9, 'luigi', 10];
mixed.push('ryu'); // will work because mixed it's an array of strings and numbers
mixed.push(20); // will work because mixed it's an array of strings and numbers
mixed[0] = 3; // will work even though position 1 of mixed is a string because mixed is formed of numbers and strings
// mixed.push(true) won't work because boolean hasn't been declared at the begining
// __________________________ OBJECTS __________________________________ // 
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40; //will work because age is defined as a number 
//ninja.skills = ['fighting', 'dancing'] won't work because we haven't declared at the begining an array of skills inside ninja. once the object is defined, additional properties can't be added
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
    // skills = ['fighthing', 'dancing'] won't work because initially the array wasn't containing skills. Typescript is very strict with this
};
// ______________________ EXPLICIT TYPES ______________________________ // 
let person; // we declare a variable but we don't give a value to it. also, we are telling typescript that when the value will be added, it should be a string 
let howOld;
// howOld = 'luigi' won't work because we set the type of howOld to number;
let fighters = []; //this tells typescript we are creating an array of strings and it is initialized as an empty array. this let's us do fighters.push['ryu'] without error
// ______________________ UNION TYPES ______________________________ //
let combined = []; //this tells typescript we are creating an array of strings or numbers and it is initialized as an empty array. this let's us do fighters.push['ryu'] without error
combined.push('ryu'); // will work 
combined.push(10); // will work
// mixed.push[true] won't work because boolean hasn't been declared
let uid;
uid = '123'; // will work 
uid = 123; // will work
let ninjaOne;
ninjaOne = {
    name: 'yoshi',
    age: 30
};
// this still works
let ninjaTwo;
//here we say ninjaTwo is an object and has to have those three types inside without declaring them at the beginning 
ninjaTwo = {
    name: 'Mario',
    age: 30,
    beltColor: 'red'
};
// ______________________ ANY TYPE ______________________________ //
let num = 25;
num = true; //this works because num type was set to any 
num = 'mario'; //this works because num type was set to any 
num = { name: 'luigi' }; //this works because num type was set to any
let mixedAnyArray = [];
mixedAnyArray.push('mario'); //this works because num type was set to any
mixedAnyArray.push(25); //this works because num type was set to any
mixedAnyArray.push(true); //this works because num type was set to any
let samurai;
