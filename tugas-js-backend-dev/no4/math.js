// Fungsi untuk menghitung luas lingkaran berdasarkan jari-jari yang diberikan
function calculateCircleArea(radius) {
    const pi = Math.PI;  // Nilai PI dari objek Math
    return pi * Math.pow(radius, 2);  // Luas lingkaran = π * r^2
}

// Fungsi untuk menerima array angka dan mengembalikan array baru dengan angka-angka yang dikuadratkan
function squareNumbers(numbersArray) {
    return numbersArray.map(number => Math.pow(number, 2));  // Menggunakan map untuk mengkuadratkan setiap elemen
}

// Contoh penggunaan fungsi calculateCircleArea
const radius = 10;
const area = calculateCircleArea(radius);
console.log(`Luas lingkaran dengan jari-jari ${radius} adalah: ${area}`);

// Contoh penggunaan fungsi squareNumbers
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = squareNumbers(numbers);
console.log(`Array asli: ${numbers}`);
console.log(`Array setelah dikuadratkan: ${squaredNumbers}`);
