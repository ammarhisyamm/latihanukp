# Latihan UKP

Situs persiapan Ujian Kompetensi Perpajakan (UKP) Tingkat A dan B. Setiap topik punya rangkuman per butir booklet (poin inti, tabel angka, jebakan soal), contoh langkah demi langkah, dan kartu hafalan. Bank latihan memuat 438 soal kurasi tanpa duplikat konsep, ditambah drill hitung dengan angka acak. Mode latihan mencakup latihan dengan pembahasan langsung, simulasi ujian berwaktu dengan navigasi nomor soal dan tanda ragu-ragu, serta ulang soal salah. Riwayat dan jadwal ulang disimpan per tingkat di browser.

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

Rangkuman, soal, dan kartu hafalan ada di `src/lib/content/<topik>.ts` (tipe di `src/lib/content/types.ts`). Pola drill hitung ada di `src/lib/ukp-calculations.ts`. Hasil audit November 2026 dicatat di [audit soal dan materi](docs/audit-soal-november-2026.md). Cakupan, sumber, dan tahapan pengembangan dicatat di [rencana konten UKP](docs/ukp-content-plan.md).
