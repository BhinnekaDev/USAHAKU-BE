# 🧩 USAHAKU-BE

**Backend API untuk platform manajemen usaha — Usahaku**

Backend ini dibangun menggunakan **NestJS** dan **TypeScript**, dengan **MongoDB** sebagai basis data utama.
Proyek ini dirancang dengan arsitektur **monolith modular**, sehingga mudah dikembangkan dan dapat dipecah menjadi microservices di tahap selanjutnya.

[![Stars](https://img.shields.io/github/stars/BhinnekaDev/USAHAKU-BE?style=flat-square)](https://github.com/BhinnekaDev/USAHAKU-BE/stargazers)
[![Forks](https://img.shields.io/github/forks/BhinnekaDev/USAHAKU-BE?style=flat-square)](https://github.com/BhinnekaDev/USAHAKU-BE/network)
[![Last Commit](https://img.shields.io/github/last-commit/BhinnekaDev/USAHAKU-BE?style=flat-square)](https://github.com/BhinnekaDev/USAHAKU-BE/commits/master)

![Platform](https://img.shields.io/badge/platform-API-blue?style=flat-square)
![NestJS](https://img.shields.io/badge/NestJS-11-red?logo=nestjs&style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white&style=flat-square)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white&style=flat-square)

---

## ⚙️ Teknologi yang Digunakan

| Layer          | Stack / Library                    |
| -------------- | ---------------------------------- |
| **Backend**    | NestJS 11, TypeScript 5            |
| **Database**   | MongoDB (Mongoose)                 |
| **Validation** | class-validator, class-transformer |
| **Testing**    | Jest, Supertest                    |
| **Linting**    | ESLint, Prettier                   |

---

## 📁 Struktur Direktori

```

```

---

## 🚀 Modul API

| Modul | Deskripsi |
| ----- | --------- |

> ⚠️ Catatan: Modul dapat dikembangkan atau ditambah sesuai kebutuhan bisnis.

---

## 🔌 Konfigurasi `.env`

Buat file `.env` di root project:

```env
# Server
PORT=3000
NODE_ENV=development

# MongoDB
MONGO_URI=your_mongo_uri

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```

---

## 🧩 Koneksi MongoDB

`src/config/database.config.ts`:

```ts
import { MongooseModule } from '@nestjs/mongoose';

export const DatabaseConfig = MongooseModule.forRoot(process.env.MONGO_URI);
```

---

## 🛠️ Script NPM

| Perintah             | Fungsi                                 |
| -------------------- | -------------------------------------- |
| `npm run start:dev`  | Jalankan server dalam mode development |
| `npm run start`      | Jalankan server NestJS                 |
| `npm run build`      | Build project                          |
| `npm run lint`       | Jalankan ESLint & perbaiki otomatis    |
| `npm run format`     | Format kode menggunakan Prettier       |
| `npm run test`       | Jalankan unit test dengan Jest         |
| `npm run test:watch` | Jalankan test dengan mode watch        |
| `npm run test:e2e`   | Jalankan end-to-end test               |
| `npm run test:cov`   | Generate laporan coverage              |

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

Server akan berjalan di `http://localhost:PORT`.

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

1. Fork repo ➜ buat branch baru (`feature/example-module`, `fix/example-bug`, dsb)
2. Tambahkan fitur atau endpoint API baru
3. Jalankan `npm run lint` dan pastikan semua test lolos
4. Buat Pull Request dengan deskripsi perubahan yang jelas

---

## 📜 Lisensi

UNLICENSED © 2025 [Bhinneka Dev](https://github.com/BhinnekaDev)

---
