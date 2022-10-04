export class Payment {
    // readonly client: string; // read but not change inside and outside class
    // private details: string; // read and change inside the class
    // public amount: number; // default one - read and change the value outside and inside the class 
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details} `;
    }
}
// Invoice implements HasFormatter means that it has to have the same structure as HasFormatter. HasFormatter has a structure that includes format() so this will work 
