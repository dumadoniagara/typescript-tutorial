// tipe data array dan object manjadi lebih strict pada ts
// co : array yang memuat semua tipe data string ga akan bisa di assign tipe data lainnya
// gitu juga object --> harus memuat pasang key-value pair yang sama DAN tipe data dari value masing-masing
// key akan bersifat sama. 

// array
let arr = ['duma', 'doniagara', 'sambora'];
arr.push('nama'); //valid
// arr.push(3); -> ga valid (di error-in)

// kalo nimpa variable jadi tipe data lain juga gabisa.


let mixed = [4, 3, 'duma', 'doniagara'];
mixed.push(54); //valid
// mixed.push(true); --> ga valid


// object
let ninja = {
   name: 'mario',
   belt: 'black',
   age: 30,
};

ninja.age = 40; //--> valid
// ninja.age = '30'; // --> not valid

// ninja.skills = ['fighting', 'sneaking']; //can't add additional property

// kalo mau nimpa object yang udah ada harus sama strukturnya.
 

// gak valid karena ga akan nambah key baru yang sebelumnya ga ada.
// ninja = {
//    name: 'yoshi',
//    belt: 'orange',
//    age: 40
//    skills: ['fighting']
// }
