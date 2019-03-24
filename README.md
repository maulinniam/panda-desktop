<p align="center">
  <img src="https://www.panda.id/wp-content/uploads/logo-panda.png" width="50%" />
</p>

# Panda Desktop

Panda merupakan salah satu cita-cita kami mewujudkan Indonesia yang lebih baik. PuskoMedia Indonesia berpengalaman selama 8 tahun mendampingi desa di berbagai pelosok Indonesia. Bersama Gedhe Foundation kami membantu banyak desa menuju keterbukaan informasi.

Desa sebagai ujung tombak pelayanan pemerintahan sangat strategis untuk menjalankan amanat Undang-Undang No 6 Tahun 2014 tentang Desa. Menyadari hal tersebut, lahirlah Panda sebagai salah satu aplikasi untuk membantu pelayanan masyarakat agar lebih baik.

## Fitur

Panda memiliki fitur yang dibutuhkan untuk mengelola data administrasi, kependudukan, pelayanan publik, anggaran dan masih banyak lagi.

## Cara Cepat
**Pastikan Anda memiliki versi Node >= 6.0 dan NPM >= 3**
> Clone/Unduh repo kemudian edit `app.component.ts` di [`/src/app/app.component.ts`](/src/app/app.component.ts)

```bash
# clone repo
# --depth 1 menghapus semua kecuali satu riwayat .git commit
hg clone https://razaqultegar@bitbucket.org/pandadesktop/panda-desktop

# masuk ke direktori
cd panda-desktop

# instal repo dengan npm
npm install

# luncurkan dengan mode pengembangan
npm start
```
Electron akan secara otomatis meluncurkan dan memperbarui dirinya sendiri ketika kode sumber Anda berubah.

# Memulai

## Dependensi
Apa yang Anda butuhkan untuk menjalankan aplikasi ini:
* `node` dan `npm` (`brew install node`)
* Pastikan Anda menjalankan versi terbaru Node `v6.x.x`+ (atau `v7.x.x`) dan NPM `3.x.x`+

## Menginstal
* `fork` repo ini
* `clone` hasil fork Anda
* `npm install` untuk menginstal semua dependensi atau `yarn`
* `npm start` untuk memulai alur kerja pengembangan

## Membangun

```bash
# pengembangan
npm run build:dev
# produksi (jit)
npm run build:prod
# AoT
npm run build:aot
```

## Membuat Paket Rilis

Pastikan untuk membangun aplikasi Anda terlebih dahulu. File paket aplikasi akan dihasilkan di dalam direktori `/packages`.

```bash
# semua platforms
npm run package
# Linux
npm run package:linux
# Mac
npm run package:mac
# Windows
npm run package:windows
```

# Konfigurasi
File konfigurasi ada di `config/`. Anda dapat mengubah pengaturan untuk Webpack dan Karma di sini.

Konfigurasi untuk Anda membangun Electron ada di dalam `package.json` di bawah `build`. Anda dapat membaca dokumen [di sini](https://github.com/electron-userland/electron-builder).

# Mengelola Dependensi

Setiap paket yang tercantum dalam `package.json` pada` dependencies` akan secara otomatis dipaket dengan aplikasi Anda dan dibangun kembali untuk Electron jika mengandung binding asli. Hanya daftar paket di sini yang diperlukan untuk runtime aplikasi Anda. Angular, CoreJS dan paket terkait dikompilasi oleh Webpack dan karenanya tidak diperlukan saat runtime. Ini dan hal lain yang tidak diperlukan untuk menjalankan aplikasi Anda harus berada di bawah `devDependencies`.

Setiap kali Anda menjalankan `npm install` atau` yarn install`, dependensi aplikasi Anda akan secara otomatis dibuat dan dikemas untuk sistem operasi dan arsitektur Anda saat ini. Setelah Anda menjalankan `npm update` atau` upgrade benang`, Anda perlu memperbarui secara manual dependensi aplikasi juga terbaru:

```bash
# jika Anda menggunakan yarn
yarn run install-app-deps
# jika tidak
npm run install-app-deps
```

# Pertanyaan yang sering diajukan
> Segera [hubungi](m.me/puskomedia.id) with `Team Puskomedia Indonesia`.

# Lisensi
 [MIT](/LICENSE)
