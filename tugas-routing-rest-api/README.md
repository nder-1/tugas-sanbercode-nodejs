jalankan node index.js di terminal

buka postman untuk melakukan method dibawah ini

1. GET http://localhost:3000/categories/ Mengembalikan daftar semua kategori produk.
2. GET http://localhost:3000/categories/1 Mengembalikan detail kategori berdasarkan ID. (contoh ID 1)
3. POST http://localhost:3000/categories/ Menambahkan kategori baru.
4. PUT http://localhost:3000/categories/3 Memperbarui kategori berdasarkan ID. (contoh mengganti pada ID 3)
5. DELETE http://localhost:3000/categories/3 Menghapus kategori berdasarkan ID. (comtoh menghapus ID 3)
6. GET http://localhost:3000/products?name=Laptop Mencari produk berdasarkan nama menggunakan query string. (contoh name=Laptop)
7. GET http://localhost:3000/categories/Perabotan/products?name=Meja Mendapatkan produk dalam kategori tertentu dan mencari berdasarkan nama. 
    (contoh name=Meja dalam kategori Perabotan)

8. ctrl + C untuk mematikan server

Dengan ini, kamu dapat menangani operasi dasar CRUD untuk kategori dan juga pencarian produk dalam aplikasi e-commerce.