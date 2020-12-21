// assigning allowable data types.
// typescript hanya membolehkan re-assigning variable dengan jenis data type yang sejenis.

let character = "luigi";
let age = 40;
let isBlackBelt = true;

isBlackBelt = false;

// ngasih tau kalo diameter tuh jenis data yang diperbolehkannya hanya number.
const circ = (diameter: number) => {
   return diameter * Math.PI;
}

console.log(circ(7.5));