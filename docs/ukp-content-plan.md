# Peta dan rencana pengembangan Latihan UKP

Peta di halaman Rujukan mencatat judul butir, halaman awal, dan dasar hukum yang disebut di masing-masing booklet 17 Oktober 2026. Tingkat A memuat 58 judul butir pada lima bagian. Tingkat B memuat 58 judul pada delapan bagian. Jika nomor yang ditulis berkelompok dihitung satu per satu, Tingkat B memuat 69 nomor. Materi PBB-P5L Tingkat B mengikuti booklet sebagai materi tambahan, dengan catatan tentang baris PBB-P5L pada kisi-kisi publik.

| Cakupan              | Kondisi awal                                                                        | Pekerjaan lanjutan                                                                                                 |
| -------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Kurikulum            | Peta 13 bagian dengan nomor dan halaman awal per butir                              | Hubungkan rangkuman dan pertanyaan yang relevan dengan identitas butir                                             |
| Soal                 | 154 soal unik dan 37 soal kasus, dengan navigasi berdasarkan tingkat dan topik      | Audit pemetaan, kesulitan, periode pajak, dasar hukum, dan duplikasi sebelum memperluas bank                       |
| Sumber               | Booklet, arsip latihan, panduan DJP, dan tautan peraturan dipisahkan menurut fungsi | Simpan versi aturan, masa berlaku, pasal, dan hasil verifikasi secara terpisah dari kutipan booklet                |
| Verifikasi hitungan  | Pembahasan tersimpan bersama soal                                                   | Tambahkan kalkulasi deterministik per jenis pajak, periode, dan asumsi soal                                        |
| Latihan dan kemajuan | Latihan cepat, lengkap, dan kasus per topik                                         | Tambahkan latihan per butir, filter, ulang soal salah, dan simulasi dengan rancangan yang dilabeli sebagai latihan |
| Review konten        | Situs saat ini bersifat baca saja dengan soal di kode                               | Siapkan penyimpanan berversi dan peran peninjau sebelum membuka penerbitan dari panel admin                        |

## Urutan implementasi

1. Gunakan kunci tingkat, bagian, dan nomor butir sebagai referensi kurikulum. Pertahankan nomor gabungan seperti yang tercetak. Tandai topik di luar cakupan sebagai tambahan.
2. Tambahkan metadata ke soal yang sudah ada, termasuk identitas stabil, butir, jenis, kesulitan, dan periode. Pisahkan rujukan booklet dari dasar hukum terverifikasi. Tinjau soal dengan periode atau referensi yang belum jelas.
3. Bangun fungsi hitung yang menerima tarif, ambang, dan asumsi sesuai periode. Periksa hasil soal pilot secara independen dan simpan kasus uji batas.
4. Mulai batch pilot setelah alur draf, pemeriksaan sumber, pemeriksaan hitungan, dan review tersedia. Publikasikan soal setelah review. Target 3.000 soal adalah target pengembangan konten, bukan jumlah soal resmi.
5. Tambahkan filter, latihan ulang, simulasi berwaktu, dan analitik setelah pemetaan soal stabil. Uji ulang alur latihan lama dan pisahkan data kemajuan Tingkat A dan B.

## Implementasi tahap latihan

Bank sekarang memuat 192 soal tertulis, termasuk 12 adaptasi dari tiga PDF tryout Tingkat B, dan 1.024 variasi hitungan dari 32 pola. Variasi memakai angka yang menghasilkan perhitungan berbeda, dengan butir dan tautan aturan per pola. Kunci diperiksa ulang dengan rumus terpisah di pengujian. Latihan acak mendahulukan soal baru dan menyebar pola hitung. Mode ulang menyimpan jawaban yang perlu ditinjau dan menjadwalkan pengulangan per tingkat di browser.

Pemetaan soal tertulis lama, verifikasi pasal dan masa berlaku secara menyeluruh, simulasi berwaktu, dan panel review dengan penyimpanan bersama masih menjadi pekerjaan lanjutan.
