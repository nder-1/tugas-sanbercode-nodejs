// Demonstrasi penggunaan let, const, dan var
let name = "Lando Norris";  // tipe data string
const birthYear = 1999; // tipe data number, konstanta
var isStudent = false;  // tipe data boolean

// Tipe data primitif lainnya
let age = 24;            // tipe data number
let height = 1.80;       // tipe data number (float)
let undefinedValue;      // tipe data undefined
let nullValue = null;    // tipe data null
let bigNumber = 9007199254740991n; // tipe data BigInt
let symbol = Symbol('id'); // tipe data Symbol

// Tipe data non-primitif (object)
let person = {
    firstName: "Lando",
    lastName: "Norris",
    age: 24,
    isStudent: true
};

let fruits = ["Apple", "Banana", "Cherry"]; // Array
let greet = function() {                    // Function
    return "Hello, World!";
};

// Menggunakan operator aritmatika
let sum = age + height;    // Penjumlahan
let difference = age - 5;  // Pengurangan
let product = age * 2;     // Perkalian
let quotient = age / 2;    // Pembagian
let remainder = age % 3;   // Sisa bagi

console.log("Penjumlahan:", sum);      
console.log("Pengurangan:", difference); 
console.log("Perkalian:", product);   
console.log("Pembagian:", quotient);   
console.log("Sisa bagi:", remainder);  

// Menggunakan operator perbandingan
console.log("Apakah age lebih besar dari 20?", age > 20); // Output: true
console.log("Apakah height lebih kecil atau sama dengan 1.75?", height <= 1.75); // Output: false
console.log("Apakah name sama dengan 'Lando Norris'?", name === "Lando Norris"); // Output: true
console.log("Apakah isStudent tidak sama dengan true?", isStudent !== true); // Output: true

// Contoh penggunaan tipe data non-primitif
console.log("Nama lengkap:", person.firstName + " " + person.lastName); // Output: Lando Norris
console.log("Apel ada di urutan:", fruits.indexOf("Apple")); // Output: 0
console.log("Pesan selamat:", greet()); // Output: Hello, World!

// Mengubah nilai variabel let dan var
name = "Lewis Hamilton"; // Mengubah nilai name (let)
isStudent = true;   // Mengubah nilai isStudent (var)

console.log("Nama baru:", name); // Output: Lewis Hamilton
console.log("Apakah isStudent sekarang true?", isStudent); // Output: true

// const tidak bisa diubah
