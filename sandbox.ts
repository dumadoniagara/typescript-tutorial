// explicit types 
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 30; // valid
// age = 'luigi' --> not valid 

let ninjas: string[] = []; //--> declare empty array, just allow string type

ninjas.push('shaun');

let mixed: (string | number)[] = []; // declare empty array, allow string or number type
mixed.push('hello');
mixed.push(20);
// mixed.push(true); --> invalid

console.log(mixed); // ['hello',20]

let uid: string | number;
uid = '123';
uid = 123;

console.log(uid); // 123

// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
// ninjaOne = 'string' --> not allowed
ninjaOne = ['string', 23] // --> allowed


let ninjaTwo: {
   name: string,
   age: number,
   beltColor: string,
}

ninjaTwo = {
   name: 'mario',
   age: 23,
   beltColor: 'black',
}

console.log('ninjaOne object ==', ninjaOne);