Cara eksekusi program pada folder ini

1. pastikan data url mongodb anda benar dan ip pada mongodb terkoneksi
2. pastikan juga data cloudinary anda benar untuk upload file ke akun cloudinary anda
3. lakukan npx ts-node secret.ts pada terminal, untuk mendapatkan SECRET, lalu masukan kode tersebut ke .env pada bagian SECRET

4. npm run dev, untuk memulai server
5. buka postman

6. lakukan register akun di path http://localhost:3000/api/auth/register gunakan post
7. tambahkan data pada tab body, pilih raw, JSON. contoh:
{
  "email": "admin@toko.com",
  "fullName": "Admin",
  "password": "12341234",
  "username": "admintoko",
  "roles": ["admin"]
}
SEND

8. lakukan login akun di path http://localhost:3000/api/auth/login gunakan post
9. isi data pada tab body, pilih raw, JSON. isi data yang register tadi. contoh:
{
  "email": "admin@toko.com",
  "password": "12341234"
}
SEND
10. copy isi "data". untuk menjadi token jwt login nanti

11. masuk ke akun yang tadi kita login melalui path http://localhost:3000/api/auth/me gunakan get
12. pilih tab headers, isi key dengan "Authorization", dan value "Bearer <paste token login yang tadi>"
SEND

data akan keluar
{
    "message": "success fetch user profile",
    "data": {
        "_id": "66d834e12f669b2036b7caa1",
        "fullName": "Admin",
        "username": "admintoko",
        "email": "admin@toko.com",
        "roles": [
            "admin"
        ],
        "profilePicture": "user.jpg",
        "createdAt": "2024-09-04T10:22:25.270Z",
        "updatedAt": "2024-09-04T10:22:25.270Z",
        "__v": 0
    }
}