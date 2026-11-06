# Latihan UKP

Situs persiapan Uji Kompetensi Perpajakan Tingkat A dan B. Materi mencakup rumus, contoh langkah demi langkah, dan peta butir booklet. Bank latihan mencakup 192 soal tertulis dan 1.024 variasi hitungan. Riwayat latihan dan jadwal ulang disimpan per tingkat di browser.

Situs publik tersedia di [latihanukp.vercel.app](https://latihanukp.vercel.app).

## Menjalankan proyek

Gunakan Bun dan Node.js 24 atau lebih baru.

```sh
bun install --frozen-lockfile
bun run dev
```

## Pengujian dan build

```sh
bun run typecheck
bun run test
VERCEL=1 bun run build
```

Build produksi memakai Nitro dengan preset Vercel. Aplikasi tidak memerlukan variabel lingkungan untuk materi atau latihan.

Materi dan bank soal ada di `src/lib/ukp*.ts`. Cakupan, sumber, dan tahapan pengembangan dicatat di [rencana konten UKP](docs/ukp-content-plan.md).
