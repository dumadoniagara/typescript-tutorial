// tipe data array dan object manjadi lebih strict pada ts
// co : array yang memuat semua tipe data string ga akan bisa di assign tipe data lainnya
// gitu juga object --> harus memuat pasang key-value pair yang sama DAN tipe data dari value masing-masing
// key akan bersifat sama. 
// array
var arr = ['duma', 'doniagara', 'sambora'];
arr.push('nama'); //valid
arr.push(3); //ga valid
