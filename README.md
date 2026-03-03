# 🎗️ CharityChain - Smart Contract Based Donation System

CharityChain adalah Aplikasi Desentralisasi (DApp) yang memungkinkan penggalangan dana secara transparan dan aman di atas blockchain Ethereum. Proyek ini dibangun menggunakan **Solidity**, **Hardhat**, dan **Ethers.js**.

## ✨ Fitur Utama
* **Donasi dengan Pesan**: Donatur dapat mengirimkan ETH beserta pesan dukungan yang tersimpan permanen di blockchain.
* **Monitoring Real-time**: Tabel riwayat donatur yang diperbarui secara otomatis menggunakan *Event Logs*.
* **Countdown Timer**: Penghitung waktu mundur otomatis berdasarkan *deadline* yang ditentukan saat deployment.
* **Verifikasi MetaMask**: Integrasi login dan verifikasi tanda tangan untuk memastikan keamanan wallet pengguna.

---

## 📂 Struktur Folder
```text
Charity/
├── contracts/           # Smart Contract Solidity (.sol)
├── scripts/             # Script Deployment dan Utility JS
├── frontend/            # Antarmuka Web (HTML, CSS, JS)
├── hardhat.config.js    # Konfigurasi Jaringan & Compiler
├── package.json         # Dependensi Node.js
└── .gitignore           # File yang diabaikan oleh Git (node_modules, dll)

```

---

## Teknologi yang Digunakan

* **Solidity 0.8.20**
* **Hardhat**
* **Ethers.js v5**
* **Tailwind CSS**

---

## Cara Menjalankan Secara Lokal

### 1. Instalasi Dependensi

Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/). Jalankan perintah berikut di terminal:

```bash
npm install

```

### 2. Jalankan Node Lokal (Hardhat Node)

Buka terminal dan jalankan blockchain lokal:

```bash
npx hardhat node

```

### 3. Deploy Smart Contract

Buka terminal baru, lalu jalankan script deploy:

```bash
npx hardhat run scripts/deploy-charity.js --network localhost

```

> **Catatan**: Salin alamat kontrak yang muncul di terminal ke variabel `contractAddress` di file `frontend/index.html`.

### 4. Jalankan Frontend

Buka file `frontend/index.html` menggunakan **Live Server** di VS Code atau cukup buka di browser Anda. Pastikan MetaMask terhubung ke jaringan **Localhost 8545**.

---

## Keamanan & Transparansi

Proyek ini menggunakan `.gitignore` untuk memastikan file sensitif seperti `.env` atau folder berat seperti `node_modules` tidak terunggah ke repositori publik.

---


**Author:** [Ryouda0](https://www.google.com/search?q=https://github.com/Ryouda0)

