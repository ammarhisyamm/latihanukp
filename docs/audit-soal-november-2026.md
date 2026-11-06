# Audit soal dan materi · November 2026

## Temuan

| Masalah | Kondisi lama | Dampak |
| --- | --- | --- |
| Soal berulang | 1.024 dari 1.216 soal (84%) adalah 32 salinan per pola hitung yang hanya diganti angkanya | Sesi "Semua soal" berisi pola yang sama puluhan kali |
| Bank tertulis tipis | 192 soal tertulis, sekitar 20–27 per topik | Banyak butir booklet tanpa soal |
| Konsep kembar | Contoh: rangkap perjanjian ×3, pemeteraian kemudian 100% ×3, masa pajak terakhir PPh 21 ×3, sewa gudang + mesin ×3, pisah harta 300/200 ×2, NJOPTKP objek terbesar ×2 | Soal terasa mengulang walau kalimatnya beda |
| Materi | Satu paragraf per bahasan | Tidak cukup untuk belajar; tidak ada tabel angka, jebakan, atau hafalan |
| Antarmuka | Satu daftar tombol mode; tanpa navigasi nomor soal, waktu, ragu-ragu, atau rekap per bagian | Tidak terasa seperti latihan ujian |

## Perubahan

- Bank soal baru di `src/lib/content/<topik>.ts`: **438 soal kurasi** (Tingkat A 259, Tingkat B 371; sebagian dipakai kedua tingkat). Setiap soal punya bagian rangkuman, jenis (konsep/hitung/kasus), dan dasar hukum.
- Pola hitung tidak lagi dihitung sebagai bank. Pola itu kini menjadi mode **Drill hitung** dengan angka acak, satu soal per pola per sesi.
- Rangkuman baru: **134 bagian** (A 60, B 74), mengikuti butir booklet. Setiap bagian memuat poin inti, tabel angka, jebakan soal, dan dasar hukum. Ada juga **369 kartu hafalan**.
- Pengujian `src/lib/content/content.test.ts` menolak:
  - id ganda;
  - bagian yatim;
  - pilihan kembar;
  - butir booklet yang tidak ada;
  - bagian tanpa soal;
  - soal yang hanya beda angka.

## Koreksi dan pembaruan fakta

| Topik | Lama | Baru | Sumber |
| --- | --- | --- | --- |
| PPh OP / PPh Badan | PPh final 0,5% dibatasi 7 tahun untuk OP; badan per bentuk badan | PP 20/2026 (22 April 2026) menghapus Pasal 59 PP 55/2022: OP dan perseroan perorangan tanpa batas waktu; badan hanya perseroan perorangan dan koperasi (koperasi 4 tahun pajak); PT/CV/firma lama lewat ketentuan peralihan | pajak.go.id, DDTCNews, IKPI |
| PPh OP | Batas Rp4,8 miliar per WP | Diuji gabungan omzet suami, istri, dan perseroan perorangan mereka (PP 20/2026) | pajak.go.id, hukumonline |
| PPh Badan | Biaya natura berpotensi dikoreksi | Natura pegawai dapat dibiayakan pemberi kerja (UU HPP, PMK 66/2023) | PMK 66/2023 |
| PPh Badan | Saat mulai penyusutan kurang rinci | PMK 72/2023: bulan pengeluaran; harta dalam pengerjaan saat selesai; bulan mulai menghasilkan dengan persetujuan DJP | DDTCNews |
| Potput | Dasar hukum PPh 22 impor diragukan | PMK 51/2025 benar ada (berlaku 1 Agustus 2025); tarif Lampiran A/B/C dan emas batangan ditambahkan | BPK, DDTCNews |
| KUP | Tanggapan SPHP | 5 hari kerja (PMK 15/2025; sebelumnya 7 hari kerja) | pajakku, IKPI |
| KUP | Bunga sanksi tanpa rumus | (tarif acuan + uplift) ÷ 12, uplift 0/5/10/15% per pasal; angka tarif selalu asumsi soal | fiskal.kemenkeu.go.id |

Diperiksa dan tetap benar:
- Bea Meterai: setor dan lapor pemungut sama-sama tanggal 15 (PMK 78/2024).
- PPN Kegiatan Membangun Sendiri tetap 2,2% (PMK 11/2025).
- Pemetaan TER A/B/C.
- Biaya jabatan dan biaya pensiun.
- NJKP PBB-P5L 40%.

## Belum terverifikasi dari teks peraturan

Butir berikut dipakai di rangkuman, tetapi tidak atau jarang dijadikan soal:
- Rincian PP 20/2026. Sumbernya artikel DJP, DDTC, dan IKPI; PDF resmi belum terbaca penuh.
- Ambang pemungut Bea Meterai lebih dari 1.000 dokumen per bulan.
- Panjang NITKU 22 digit.
- Tenggat permohonan pengurangan PBB (3 bulan / 1 bulan).
- Dasar NJOPTKP pada objek dengan NJOP terbesar. Ini mengikuti booklet dan belum ditemukan di teks PMK.

## Format ujian

Menurut BPPK, UKP berbentuk pilihan ganda, satu sesi 3–3,5 jam, daring, dengan passing grade 60. Jumlah butir soal per tingkat belum diumumkan. Karena itu simulasi di situs memakai 25/50/100 soal dengan 2 menit per soal.
