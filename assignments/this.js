/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*   
* 1. Window --> this refers to the global scope and window binding.
* 2. Implicit --> this refers to the object on which the method is called (ie, this refers to the object left of the dot)
* 3. Constructor --> this refers to the object created using the constructor function and 'new' keyword/
* 4. Explicit --> the object is specifically identified using the call/apply/bind methods. 'this' refers to the object that has been .called(object), .apply(object), or .bind(object).
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowBinding(){
    console.log(this.x);
}
windowBinding(); //returns undefined

// Principle 2

// code example for Implicit Binding

let exampleObj = {
    name: "example object",
    purpose: "provide an example of implicit binding",
    testify: function(){
        console.log(`I am an ${this.name} and my purpose is to ${this.purpose}.`);
    }
}

exampleObj.testify();


// Principle 3

// code example for New Binding

function Example(passedData){
   return this.canBeAnything = passedData;
}

let newExample = new Example("this is what is passed to the function");

 console.log(newExample.canBeAnything);


// Principle 4

// code example for Explicit Binding
function explicitBinding(){
    console.log(this.example);
}

let explicitExample = {
    example: "this is an example of explicit binding",
}

explicitBinding.call(explicitExample);




// Constructor Function (just for practice)

function Phones(obj){
    this.name = obj.name,
    this.manufacturer = obj.manufacturer,
    this.operatingSys = obj.operatingSys
}

Phones.prototype.sentence = function(){
    return `${this.name} is built by ${this.manufacturer} and runs on ${this.operatingSys}`;
}

const iphone = new Phones({
    name: "iphone",
    manufacturer: "Apple",
    operatingSys: "iOS"
});

const pixel3 = new Phones({
    name: "Pixel 3",
    manufacturer: "Google",
    operatingSys: "Android"
});

const winPhone = new Phones({
    name: "Windows Phone",
    manufacturer: "Microsoft",
    operatingSys: "Windows Mobile"
});


console.log(iphone.sentence());
console.log(pixel3.sentence());
console.log(winPhone.sentence());
