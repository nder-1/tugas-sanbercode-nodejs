CARA MENGGUNAKAN MIDDLEWARE CLOUDINARY UNTUK UPLOAD FILE/IMAGE

1. eksekusi index.js pada direktori src
2. masuk ke postman
3. pada path http://localhost:3000 gunakan get untuk cek server sudah berjalan
4. jika sudah gunakan method post dan gunakan path http://localhost:3000/upload/single untuk upload 1 file/image
5. pilih tab body dan form-data
6. masukkan key : 'file'. lalu masukkan file yang ingin di upload... send

7. gunakan method post dan gunakan path http://localhost:3000/upload/multiple untuk upload lebih dari 1 file/image, max 10
8. pilih tab body dan form-data
9. masukkan key : 'files'. lalu masukkan beberapa file yang ingin di upload... send
10. crtl + C pada terminal vscode untuk mematikan server