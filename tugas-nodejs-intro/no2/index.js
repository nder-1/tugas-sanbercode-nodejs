const http = require('http');  // Import modul 'http' untuk membuat server

const hostname = '127.0.0.1';  // Hostname server
const port = 3000;             // Port server

// Membuat server HTTP
const server = http.createServer((req, res) => {
    res.statusCode = 200;           // Menetapkan status kode HTTP ke 200 (OK)
    res.setHeader('Content-Type', 'text/plain');  // Menetapkan tipe konten respons ke 'text/plain'
    res.end('Hello, World!\n');    // Mengirim respons "Hello, World!" dan mengakhiri respons
});

// Menjalankan server dan mendengarkan pada hostname dan port yang ditentukan
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);  // Mencetak pesan ke konsol saat server berjalan
});
