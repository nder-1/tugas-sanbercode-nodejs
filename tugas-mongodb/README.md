Cara eksekusi program pada folder ini

1. pastikan data url mongodb anda benar dan ip pada mongodb terkoneksi
2. pastikan juga data cloudinary anda benar untuk upload file ke akun cloudinary anda
3. npm run dev
untuk memulai program typescript ini
4. buka postman untuk pengecekan CRUD pada categories

5. CREATE; gunakan POST untuk path http://localhost:3000/api/categories
6. isi body, raw, JSON, dengan key name dan description, lalu isi value sesuai keinginan
contoh saya : {
  "name": "Electronics",
  "description": "Devices and gadgets"
}
SEND
7. READ; gunakan GET untuk path http://localhost:3000/api/categories untuk semua dan path http://localhost:3000/api/categories/:id untuk id yang spesifik
SEND
8. UPDATE; gunakan PUT untuk path http://localhost:3000/api/categories/:id untuk merubah kategori pada id tertentu
9. isi body, raw, JSON, dengan key name dan description, lalu isi value sesuai keinginan
contoh saya : {
  "name": "Updated Electronics",
  "description": "Updated description"
}
SEND
10. DELETE; gunakan DELETE untuk path http://localhost:3000/api/categories/:id untuk menghapus kategori pada id tertentu
SEND

11. testing CRUD juga bisa dilakukan pada path products
12. Pastikan bahwa Anda mengisi categoryId dengan ID yang valid ketika membuat atau memperbarui produk. agar data Product mempunyai relasi dengan Category

tambahan :
dapat upload file pada path /api/upload untuk single file dan /api/uploads untuk multiple file

ctrl + C untuk mematikan server localhost