// explicit types 
var character;
var age;
var isLoggedIn;
age = 30; // valid
// age = 'luigi' --> not valid 
var ninjas = []; //--> declare empty array, just allow string type
ninjas.push('shaun');
var mixed = []; // declare empty array, allow string or number type
mixed.push('hello');
mixed.push(20);
// mixed.push(true); --> invalid
console.log(mixed); // ['hello',20]
var uid;
uid = '123';
uid = 123;
console.log(uid); // 123
// objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
// ninjaOne = 'string' --> not allowed
ninjaOne = ['string', 23]; // --> allowed
var ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 23,
    beltColor: 'black'
};
console.log('ninjaOne object ==', ninjaOne);
