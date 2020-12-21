// assigning allowable data types.
// typescript hanya membolehkan re-assigning variable dengan jenis data type yang sejenis.
var character = "luigi";
var age = 40;
var isBlackBelt = true;
isBlackBelt = false;
// ngasih tau kalo diameter tuh jenis data yang diperbolehkannya hanya number.
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
