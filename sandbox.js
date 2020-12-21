// cara nulisnya sama dengan javascript 
// cara compile nya tsc <nama file .ts> <nama file .js>
// kalo misalnya nama filenya sama cukup menuliskan yang .ts nya aja.
// kalo ga ada file .js dia akan membuat extension .js nya
// biar ga harus execute manual setiap ada perubahan lakukan watch monitoring file .ts nya :
// co : sandbox.ts -w
var character = "mikha";
console.log('character ==', character);
var inputs = document.querySelectorAll('input');
console.log('inputs ==', inputs);
inputs.forEach(function (input) {
    console.log(input);
});
