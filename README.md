# Panel Admin BabyStore

Selamat datang di repository Panel Admin BabyStore! Proyek ini dirancang untuk menyediakan antarmuka admin yang canggih dan mudah digunakan untuk mengelola toko perlengkapan bayi. Aplikasi ini menggunakan teknologi modern untuk memastikan skalabilitas, efisiensi, dan kemudahan penggunaan.

---

## **Teknologi yang Digunakan**

- **Next.js** - Framework React untuk membangun aplikasi cepat dan server-rendered.
- **TypeScript** - Bahasa pemrograman yang memiliki tipe data kuat, berbasis JavaScript.
- **Cloudinary** - Untuk mengelola dan mengoptimalkan aset gambar.
- **Prisma** - ORM untuk berinteraksi dengan database PostgreSQL.
- **PostgreSQL** - Database relasional yang kuat dan open-source.

---

## **Fitur**

- **Manajemen Toko**: Mengelola toko, banner, kategori, dan produk.
- **Manajemen Gambar**: Integrasi mulus dengan Cloudinary untuk penyimpanan gambar yang optimal.
- **Database Relasional**: Mengelola relasi kompleks menggunakan Prisma ORM.
- **Dashboard Admin Dinamis**: Antarmuka yang responsif dan ramah pengguna untuk melihat dan mengelola data.

---

## **Panduan Memulai**

### **Persyaratan**

Pastikan Anda telah menginstal perangkat berikut di komputer Anda:

- Node.js (v16 atau lebih baru)
- npm atau Yarn
- PostgreSQL

### **Instalasi**

1. Clone repository:
   ```bash
   git clone https://github.com/daffaabp/babystore_website.git
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd babystore-website
   ```
3. Instal dependensi:
   ```bash
   npm install
   # atau
   yarn install
   ```
4. Atur variabel lingkungan:
   Buat file `.env` di direktori root dan tambahkan berikut ini:
   ```env
   DATABASE_URL=your_postgresql_database_url
   CLOUDINARY_URL=your_cloudinary_url
   ```

5. Buat Prisma client:
   ```bash
   npx prisma generate
   ```
6. Migrasikan database:
   ```bash
   npx prisma migrate dev --name init
   ```

7. Jalankan server pengembangan:
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

8. Akses aplikasi di browser Anda di [http://localhost:3000](http://localhost:3000).

---

## **Skema Database**

Database dirancang menggunakan Prisma ORM untuk mengelola relasi antar entitas dengan efisien. Berikut adalah gambaran skema:

### **Store**
- **id**: Identitas unik
- **name**: Nama toko
- **userId**: Pemilik toko
- **banners**: Relasi ke banner
- **categories**: Relasi ke kategori
- **products**: Relasi ke produk

### **Banner**
- **id**: Identitas unik
- **storeId**: Referensi ke toko
- **label**: Label banner
- **imageUrl**: URL gambar banner
- **categories**: Relasi ke kategori

### **Category**
- **id**: Identitas unik
- **storeId**: Referensi ke toko
- **bannerId**: Referensi ke banner
- **name**: Nama kategori
- **products**: Relasi ke produk

### **Product**
- **id**: Identitas unik
- **storeId**: Referensi ke toko
- **categoryId**: Referensi ke kategori
- **name**: Nama produk
- **price**: Harga produk
- **isFeatured**: Menandakan apakah produk unggulan
- **isArchived**: Menandakan apakah produk diarsipkan
- **images**: Relasi ke gambar

### **Image**
- **id**: Identitas unik
- **productId**: Referensi ke produk
- **url**: URL gambar

---

## **Penggunaan**

### **Menambah Toko**
Gunakan panel admin untuk menambahkan toko baru. Setiap toko dapat memiliki banner, kategori, dan produk masing-masing.

### **Mengelola Produk**
- Unggah detail produk, termasuk gambar (dikelola oleh Cloudinary).
- Tandai produk sebagai unggulan atau arsip sesuai kebutuhan.

### **Menyesuaikan Banner**
- Tambahkan dan perbarui banner yang akan ditampilkan di halaman toko.

---

## **Perintah**

- **`npm run dev`**: Menjalankan server pengembangan.
- **`npm run build`**: Membangun aplikasi untuk produksi.
- **`npm start`**: Menjalankan aplikasi dalam mode produksi.
- **`npx prisma studio`**: Membuka Prisma Studio untuk mengelola database.

---

## **Kontribusi**

Kontribusi sangat diterima! Silakan fork repository ini dan ajukan pull request dengan perubahan Anda. Pastikan kode Anda mengikuti pedoman gaya proyek.

---

## **Lisensi**

Proyek ini dilisensikan di bawah MIT License. Lihat file [LICENSE](LICENSE) untuk detailnya.

---

## **Kontak**

Jika ada pertanyaan atau masalah, silakan hubungi:
- **Email**: daffa.budi2003@gmail.com
- **GitHub**: [daffaabp](https://github.com/daffaabp)

Selamat coding!

