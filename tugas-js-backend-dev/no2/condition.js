// Instalasi readline-sync

// Mengimpor readline-sync
const readline = require('readline-sync');

// Fungsi untuk menentukan apakah angka genap atau ganjil
function checkEvenOdd() {
    // Meminta input angka dari pengguna
    let number = parseInt(readline.question("Masukkan sebuah angka: "));

    // Memeriksa apakah angka tersebut genap atau ganjil
    if (isNaN(number)) {
        console.log("Input bukan angka yang valid.");
    } else if (number % 2 === 0) {
        console.log(number + " adalah angka genap.");
    } else {
        console.log(number + " adalah angka ganjil.");
    }
}

// Fungsi untuk mencetak nama hari berdasarkan nomor hari
function printDayName() {
    // Meminta input nomor hari dari pengguna
    let dayNumber = parseInt(readline.question("Masukkan nomor hari (1-7): "));

    // Menggunakan switch untuk menentukan nama hari
    switch (dayNumber) {
        case 1:
            console.log("Hari ke-1 adalah Senin.");
            break;
        case 2:
            console.log("Hari ke-2 adalah Selasa.");
            break;
        case 3:
            console.log("Hari ke-3 adalah Rabu.");
            break;
        case 4:
            console.log("Hari ke-4 adalah Kamis.");
            break;
        case 5:
            console.log("Hari ke-5 adalah Jumat.");
            break;
        case 6:
            console.log("Hari ke-6 adalah Sabtu.");
            break;
        case 7:
            console.log("Hari ke-7 adalah Minggu.");
            break;
        default:
            console.log("Nomor hari tidak valid. Masukkan angka antara 1 hingga 7.");
            break;
    }
}

// Memanggil fungsi untuk memeriksa genap atau ganjil
checkEvenOdd();

// Memanggil fungsi untuk mencetak nama hari
printDayName();