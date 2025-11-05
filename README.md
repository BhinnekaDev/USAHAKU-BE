````markdown
# 🧩 USAHAKU-BE

**Backend API untuk platform manajemen usaha — Usahaku**  
Dibangun menggunakan **NestJS 11**, **TypeScript 5**, dan **MongoDB** sebagai basis data utama.  
Proyek ini dirancang dengan arsitektur **monolith modular**, sehingga mudah dikembangkan dan dapat dipecah menjadi microservices di tahap selanjutnya.

---

[![Stars](https://img.shields.io/github/stars/BhinnekaDev/USAHAKU-BE?style=flat-square)](https://github.com/BhinnekaDev/USAHAKU-BE/stargazers)  
[![Forks](https://img.shields.io/github/forks/BhinnekaDev/USAHAKU-BE?style=flat-square)](https://github.com/BhinnekaDev/USAHAKU-BE/network)  
[![Last Commit](https://img.shields.io/github/last-commit/BhinnekaDev/USAHAKU-BE?style=flat-square)](https://github.com/BhinnekaDev/USAHAKU-BE/commits/main)

![Platform](https://img.shields.io/badge/platform-API-blue?style=flat-square)  
![NestJS](https://img.shields.io/badge/NestJS-11-red?logo=nestjs&style=flat-square)  
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white&style=flat-square)  
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white&style=flat-square)

---

## ⚙️ Teknologi yang Digunakan

| Layer          | Stack / Library                    |
| -------------- | ---------------------------------- |
| **Backend**    | NestJS 11, TypeScript 5            |
| **Database**   | MongoDB (via Mongoose)             |
| **Validation** | class-validator, class-transformer |
| **Auth**       | JWT + Passport                     |
| **Testing**    | Jest, Supertest                    |
| **Linting**    | ESLint, Prettier                   |

---

## 📁 Struktur Direktori

```bash
usahaku-be/
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── config/
│   │   └── database.config.ts
│   ├── common/
│   │   ├── decorators/
│   │   ├── filters/
│   │   ├── guards/
│   │   └── interceptors/
│   ├── modules/
│   │   ├── auth/
│   │   ├── user/
│   │   ├── store/
│   │   ├── product/
│   │   └── sales/
│   └── shared/
│       └── utils/
├── .env.example
├── package.json
└── tsconfig.json
```
````

---

## 🚀 Modul API

| Modul    | Deskripsi                               |
| -------- | --------------------------------------- |
| **Auth** | Registrasi, login, JWT token management |

> ⚠️ Catatan: Modul tambahan seperti _Notification_ atau _Analytics_ dapat ditambahkan kemudian.

---

## 🔌 Konfigurasi `.env`

Buat file `.env` di root project:

```env

```

---

## 🧩 Koneksi MongoDB

File `src/config/database.config.ts`:

```ts
import { MongooseModule } from '@nestjs/mongoose';

export const DatabaseModule = MongooseModule.forRoot(process.env.MONGO_URI!);
```

> Gunakan `!` agar TypeScript tahu bahwa variabel `.env` sudah terdefinisi.

---

## 🛠️ Script NPM

| Perintah            | Fungsi                                 |
| ------------------- | -------------------------------------- |
| `npm run start:dev` | Jalankan server dalam mode development |
| `npm run start`     | Jalankan server NestJS                 |
| `npm run build`     | Build project untuk production         |
| `npm run lint`      | Jalankan ESLint & perbaiki otomatis    |
| `npm run format`    | Format kode menggunakan Prettier       |
| `npm run test`      | Jalankan unit test dengan Jest         |
| `npm run test:e2e`  | Jalankan end-to-end test               |
| `npm run test:cov`  | Generate laporan coverage              |

---

## ⚡ Cara Menjalankan Project

1. Clone repository:

```bash
git clone https://github.com/BhinnekaDev/USAHAKU-BE.git
cd USAHAKU-BE
```

2. Install dependencies:

```bash
npm install
```

3. Buat file `.env` sesuai contoh di atas.

4. Jalankan server:

```bash
npm run start:dev
```

Server akan berjalan di:
➡️ **[http://localhost:3000](http://localhost:3000)**

---

## 🧪 Testing

- Jalankan unit test:

```bash
npm run test
```

- Jalankan E2E test:

```bash
npm run test:e2e
```

- Generate laporan coverage:

```bash
npm run test:cov
```

---

## 🤝 Kontribusi

1. Fork repo ➜ buat branch baru (`feature/add-module`, `fix/auth-bug`, dsb)
2. Tambahkan fitur atau endpoint baru
3. Jalankan `npm run lint` dan pastikan semua test lolos
4. Buat Pull Request dengan deskripsi perubahan yang jelas

---

## 📜 Lisensi

UNLICENSED © 2025 [Bhinneka Dev](https://github.com/BhinnekaDev)

```

```
