import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

// const anchor = document.querySelector('a'); 

// if(anchor) {
//     console.log(anchor.href)
// }

//this is one method to make a check that anchor won't return null 
// another option to do this, is to add an exlamation mark at the end of the declaration. this tells Typescript that we know for sure that "a" exists


// const anchor = document.querySelector('a')!; 
// console.log(anchor.href);

//interfaces _______ example  ______

// interface IsPerson {
//     name: string; 
//     age: number; 
//     speak(a: string) : void; 
//     spend(a: number) : number; 
// }

// const me : IsPerson = {
//     name: 'shaun', 
//     age: 30, 
//     speak(text: string): void{
//         console.log(text); 
//     },
//     spend(amount: number): number{
//         console.log('I spent', amount);
//         return amount; 
//     },
// }; 

// const greetPerson = (person: IsPerson) => {
//     console.log('hello', person.name)
// }

// greetPerson(me);  

// let docOne: HasFormatter; 
// let docTwo: HasFormatter; 

// docOne = new Invoice('yoshi', 'web work', 250); 
// docTwo = new Payment('mario', 'plumbing work', 200);

// let docs: HasFormatter[] =[]; //only objects with this structure can be added to this array 

// docs.push(docOne);
// docs.push(docTwo); 

// console.log(docs); 

// //classes 

// const invOne = new Invoice('mario', 'work on the mario web', 250); 
// const invTwo = new Invoice('luigi', 'work on the luigi web', 300); 

// let invoices: Invoice[] = []; //only objects created with Invoice class can be added to invoices array
// invoices.push(invOne); 
// invoices.push(invTwo); 

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })


const form = document.querySelector('.new-item-form') as HTMLFormElement;
//we set the type to be HTML Form element

//inputs 

const type = document.querySelector('#type') as HTMLSelectElement; 
const tofrom = document.querySelector('#tofrom') as HTMLInputElement; 
const details = document.querySelector('#details') as HTMLInputElement; 
const amount = document.querySelector('#amount') as HTMLInputElement; 

//list template instance

const ul = document.querySelector('ul')!;//"!" is to show typescript that the tag definetely exists 
const list = new ListTemplate(ul); 

form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); 

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter; 
    if(type.value === 'invoice') {
        doc = new Invoice(...values)
    } 

    else{ 
        doc = new Payment(...values)
    }

    list.render(doc, type.value, "end");
})

// GENERICS

const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100); 
    return {...obj, uid}; 
} 
//capture whatever item we pass in to the function. When we return it will know the property that is on the object. Let's us access the assigned properties like docOne.name after assiging them

let docOne = addUID({name: 'yoshi', age: 40}); 

console.log(docOne.name)

//with Interfaces 

interface Resource<T> {
    uid: number;
    resourceName: string; 
    data: T; 
}

const docThree: Resource<object> = {
    uid: 1, 
    resourceName: 'person',
    data: { name: 'shaun' }
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['milk', 'bread', 'toilet paper']
}

console.log(docThree, docFour)


// ENUMS 

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource2<T> {
    uid: number;
    resourceType: ResourceType; 
    data: T;
}

const docFive: Resource2<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK, 
    data: { title: 'name of the wind'}
}

const docSix: Resource2<object> = {
    uid: 10,
    resourceType: ResourceType.PERSON, 
    data: { title: 'yoshi'}
}

console.log(docFive, docSix);


// TUPLES 

let arr = ['ryu', 25, true]; 
arr[0] = false; 
arr[1] = 'yoshi'; 
arr = [30, false, 'yoshi']; 

let tup: [string, number, boolean] = ['ryu', 25, true]; //when we set the type of each position, we can't change that.

tup[0]= 'ken';
tup[1]= 30; 

let student: [string, number]; 
student = ['chun-li', 223423];
