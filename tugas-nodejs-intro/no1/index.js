const fs = require('fs');  // Import modul 'fs' untuk berinteraksi dengan sistem file

// Membaca file secara asinkron
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);  // Menangani kesalahan jika terjadi
        return;
    }
    console.log('File content:\n', data);  // Mencetak isi file ke konsol
});
