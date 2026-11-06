import type { TopicContent } from "./types";

const content: TopicContent = {
  "summary": [
    {
      "id": "npwp-pkp",
      "title": "NPWP dan pengukuhan PKP",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "1",
        "b": "1"
      },
      "points": [
        "Setiap wajib pajak yang memenuhi persyaratan subjektif dan objektif wajib mendaftarkan diri untuk memperoleh NPWP.",
        "Bagi orang pribadi penduduk, NIK berfungsi sebagai NPWP; orang pribadi bukan penduduk, badan, dan instansi pemerintah memakai NPWP 16 digit.",
        "Tempat kegiatan usaha (cabang) tidak lagi diberi NPWP cabang, tetapi Nomor Identitas Tempat Kegiatan Usaha (NITKU) 22 digit, yaitu NPWP 16 digit ditambah 6 digit kode.",
        "Pengusaha yang peredaran bruto atau penerimaan brutonya melebihi Rp4,8 miliar dalam satu tahun buku wajib melaporkan usaha untuk dikukuhkan sebagai PKP paling lambat akhir tahun buku saat batas itu terlampaui.",
        "Pengusaha kecil boleh memilih dikukuhkan sebagai PKP; setelah dikukuhkan ia wajib melaksanakan seluruh kewajiban PPN.",
        "DJP dapat menerbitkan NPWP dan mengukuhkan PKP secara jabatan bila wajib pajak tidak mendaftar padahal memenuhi syarat."
      ],
      "table": {
        "head": [
          "Identitas",
          "Untuk siapa",
          "Format"
        ],
        "rows": [
          [
            "NIK",
            "Orang pribadi penduduk",
            "16 digit"
          ],
          [
            "NPWP",
            "Badan, instansi, OP bukan penduduk",
            "16 digit"
          ],
          [
            "NITKU",
            "Tempat kegiatan usaha/cabang",
            "22 digit (NPWP + 6 digit)"
          ]
        ]
      },
      "traps": [
        "Batas lapor pengukuhan PKP adalah akhir tahun buku, bukan akhir bulan berikutnya (aturan lama PMK 197/2013).",
        "Cabang tidak mendapat NPWP tersendiri; identitasnya NITKU yang melekat pada NPWP pusat."
      ],
      "legal": "UU KUP Pasal 2; PMK 112/2022 s.t.d.d. PMK 136/2023; PMK 164/2023; PMK 81/2024."
    },
    {
      "id": "bayar-lapor",
      "title": "Pembayaran, penyetoran, dan pelaporan",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "2",
        "b": "2"
      },
      "points": [
        "PPh Masa (PPh 21/26, 22, 23, 4 ayat (2), 15, dan angsuran PPh 25) disetor paling lambat tanggal 15 bulan berikutnya.",
        "SPT Masa PPh dilaporkan paling lambat tanggal 20 bulan berikutnya; PMK 81/2024 menyeragamkan SPT Masa PPh pemotongan dalam satu SPT Masa per jenis.",
        "PPN/PPnBM disetor paling lambat akhir bulan berikutnya dan sebelum SPT Masa PPN disampaikan; SPT Masa PPN dilaporkan paling lambat akhir bulan berikutnya.",
        "SPT Tahunan PPh orang pribadi disampaikan paling lambat 3 bulan dan badan 4 bulan setelah akhir tahun pajak; kekurangan PPh Pasal 29 dilunasi sebelum SPT disampaikan.",
        "Penyampaian SPT Tahunan dapat diperpanjang paling lama 2 bulan dengan pemberitahuan tertulis atau elektronik.",
        "Bila batas setor atau lapor jatuh pada hari libur (termasuk Sabtu, Minggu, cuti bersama), batasnya bergeser ke hari kerja berikutnya.",
        "Pelaporan dan pembayaran dilakukan secara elektronik melalui Coretax dengan kode billing."
      ],
      "table": {
        "head": [
          "Kewajiban",
          "Batas setor",
          "Batas lapor"
        ],
        "rows": [
          [
            "PPh Masa / PPh 25",
            "Tanggal 15 bulan berikutnya",
            "Tanggal 20 bulan berikutnya"
          ],
          [
            "PPN Masa",
            "Akhir bulan berikutnya, sebelum SPT disampaikan",
            "Akhir bulan berikutnya"
          ],
          [
            "SPT Tahunan OP",
            "Sebelum SPT disampaikan",
            "3 bulan setelah akhir tahun pajak"
          ],
          [
            "SPT Tahunan badan",
            "Sebelum SPT disampaikan",
            "4 bulan setelah akhir tahun pajak"
          ]
        ]
      },
      "traps": [
        "Tanggal 15/20 hanya untuk PPh Masa; PPN memakai akhir bulan berikutnya.",
        "Tahun buku tidak sama dengan tahun kalender: hitung 4 bulan dari akhir tahun buku badan."
      ],
      "legal": "UU KUP Pasal 3 dan 9; PMK 81/2024."
    },
    {
      "id": "stp-skp",
      "title": "STP dan jenis SKP",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "3",
        "b": "3"
      },
      "points": [
        "STP diterbitkan untuk menagih pajak yang tidak/kurang dibayar dalam tahun berjalan, kekurangan akibat salah tulis/hitung pada SPT, serta sanksi administratif berupa bunga dan/atau denda.",
        "PKP yang tidak membuat faktur pajak atau membuatnya tidak tepat waktu ditagih dengan STP berikut denda 1% dari Dasar Pengenaan Pajak.",
        "SKPKB diterbitkan dalam jangka waktu 5 tahun setelah saat terutang atau berakhirnya Masa/Tahun Pajak, bila hasil pemeriksaan menunjukkan pajak kurang dibayar.",
        "SKPKB karena SPT tidak disampaikan setelah ditegur, tidak menyelenggarakan pembukuan, atau PPN/PPh potput tidak dibayar dikenai kenaikan 75% (Pasal 13 ayat (3) setelah UU HPP).",
        "SKPKBT diterbitkan bila ditemukan data baru atau data yang semula belum terungkap yang menambah pajak; kenaikannya 100% dari jumlah kekurangan, kecuali diungkapkan sendiri sebelum pemeriksaan.",
        "SKPLB diterbitkan bila kredit pajak lebih besar dari pajak terutang; SKPN bila sama besar atau tidak ada pajak terutang dan tidak ada kredit."
      ],
      "table": {
        "head": [
          "Produk",
          "Kondisi",
          "Sanksi khas"
        ],
        "rows": [
          [
            "SKPKB",
            "Kurang bayar hasil pemeriksaan",
            "Bunga Pasal 13(2) atau kenaikan 75%"
          ],
          [
            "SKPKBT",
            "Data baru setelah SKP",
            "Kenaikan 100%"
          ],
          [
            "SKPLB",
            "Kredit > terutang",
            "—"
          ],
          [
            "SKPN",
            "Kredit = terutang",
            "—"
          ],
          [
            "STP",
            "Tagihan pajak/sanksi tanpa pemeriksaan penuh",
            "Bunga Pasal 14(3) atau denda 1% DPP"
          ]
        ]
      },
      "traps": [
        "SKPKBT bukan \"SKPKB kedua\"; syaratnya data baru dan kenaikannya 100%.",
        "Kenaikan setelah UU HPP 75%, bukan 50%/100% versi lama untuk Pasal 13 ayat (3)."
      ],
      "legal": "UU KUP Pasal 13, 14, 15, 17, 17A."
    },
    {
      "id": "penagihan",
      "title": "Penagihan Pajak dengan Surat Paksa",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "4",
        "b": "4"
      },
      "points": [
        "SKPKB, SKPKBT, STP, dan keputusan yang menambah pajak wajib dilunasi dalam 1 bulan sejak tanggal diterbitkan.",
        "Surat Teguran diterbitkan setelah 7 hari sejak jatuh tempo pelunasan; Surat Paksa diterbitkan setelah 21 hari sejak Surat Teguran disampaikan.",
        "Penyitaan dapat dilakukan bila utang tidak dilunasi dalam 2 × 24 jam sejak Surat Paksa diberitahukan.",
        "Pengumuman lelang dilakukan paling cepat 14 hari setelah penyitaan, dan lelang paling cepat 14 hari setelah pengumuman lelang.",
        "Hasil lelang dipakai untuk biaya penagihan dan utang pajak; sisanya dikembalikan kepada Penanggung Pajak, dan risalah lelang menjadi bukti peralihan hak.",
        "Pencegahan dan penyanderaan dapat dilakukan atas utang paling sedikit Rp100 juta (penyanderaan juga bila diragukan itikad baiknya), masing-masing paling lama 6 bulan dan dapat diperpanjang paling lama 6 bulan.",
        "Hak penagihan daluwarsa 5 tahun, tertangguh antara lain bila Surat Paksa diterbitkan atau ada pengakuan utang."
      ],
      "table": {
        "head": [
          "Tahap",
          "Dihitung dari",
          "Jeda"
        ],
        "rows": [
          [
            "Surat Teguran",
            "Jatuh tempo pelunasan",
            "7 hari"
          ],
          [
            "Surat Paksa",
            "Surat Teguran disampaikan",
            "21 hari"
          ],
          [
            "Penyitaan",
            "Surat Paksa diberitahukan",
            "2 × 24 jam"
          ],
          [
            "Pengumuman lelang",
            "Penyitaan",
            "14 hari"
          ],
          [
            "Lelang",
            "Pengumuman lelang",
            "14 hari"
          ]
        ]
      },
      "traps": [
        "Jeda sita dihitung dari pemberitahuan Surat Paksa, bukan dari Surat Teguran.",
        "Sisa hasil lelang = hasil lelang − biaya penagihan − utang pajak."
      ],
      "legal": "UU 19/1997 s.t.d.d. UU 19/2000 (UU PPSP); UU KUP Pasal 18–24; PMK 61/2023."
    },
    {
      "id": "pembetulan-keberatan",
      "title": "Pembetulan, keberatan, pengurangan sanksi, dan pembatalan ketetapan",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "5",
        "b": "5"
      },
      "points": [
        "Pembetulan SPT atas kemauan sendiri boleh dilakukan selama belum diperiksa; pembetulan yang menyatakan rugi atau lebih bayar diajukan paling lama 2 tahun sebelum daluwarsa penetapan.",
        "Pembetulan Pasal 16 memperbaiki salah tulis, salah hitung, atau kekeliruan penerapan ketentuan dalam SKP, STP, atau keputusan, atas permohonan maupun secara jabatan.",
        "Keberatan diajukan dalam 3 bulan sejak tanggal dikirim SKP, satu keberatan untuk satu SKP, dalam bahasa Indonesia dengan alasan yang jelas, dan setelah melunasi jumlah yang disetujui dalam pembahasan akhir.",
        "Keputusan keberatan diterbitkan paling lama 12 bulan sejak surat keberatan diterima; lewat waktu berarti keberatan dianggap dikabulkan.",
        "Denda 30% dari pajak menurut keputusan keberatan dikurangi pembayaran sebelum keberatan dikenakan bila keberatan ditolak/dikabulkan sebagian dan WP tidak mengajukan banding.",
        "Pasal 36 ayat (1): pengurangan/penghapusan sanksi karena kekhilafan atau bukan kesalahan WP (a), pengurangan/pembatalan SKP yang tidak benar (b), pengurangan/pembatalan STP yang tidak benar (c), dan pembatalan hasil pemeriksaan tanpa SPHP atau pembahasan akhir (d)."
      ],
      "traps": [
        "Salah hitung murni pada SKP diselesaikan dengan pembetulan Pasal 16, bukan keberatan.",
        "Denda 30% tidak dikenakan bila WP mengajukan banding; yang berlaku kemudian denda 60% bila banding ditolak/dikabulkan sebagian."
      ],
      "legal": "UU KUP Pasal 8, 16, 25, 26, 36; PMK 118/2024 s.t.d.d. PMK 71/2026."
    },
    {
      "id": "sengketa",
      "title": "Gugatan, banding di Pengadilan Pajak, dan peninjauan kembali",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "6",
        "b": "6"
      },
      "points": [
        "Banding diajukan ke Pengadilan Pajak atas keputusan keberatan, paling lama 3 bulan sejak keputusan diterima, dan diputus paling lama 12 bulan.",
        "Gugatan atas pelaksanaan penagihan (Surat Paksa, sita, pengumuman lelang) diajukan paling lama 14 hari sejak pelaksanaan penagihan.",
        "Gugatan atas keputusan lain, mis. SKP atau keputusan keberatan yang diterbitkan tidak sesuai prosedur, diajukan paling lama 30 hari sejak keputusan diterima; gugatan diputus paling lama 6 bulan.",
        "Selama banding, jangka waktu pelunasan pajak yang belum dibayar tertangguh sampai 1 bulan sejak putusan banding.",
        "Bila banding ditolak atau dikabulkan sebagian, denda 60% dari pajak menurut putusan banding dikurangi pembayaran sebelum keberatan.",
        "Peninjauan kembali diajukan ke Mahkamah Agung melalui Pengadilan Pajak, hanya satu kali, umumnya dalam 3 bulan, dan tidak menangguhkan pelaksanaan putusan.",
        "Putusan MK 26/PUU-XXI/2023 mengalihkan pembinaan organisasi, administrasi, dan keuangan Pengadilan Pajak dari Kementerian Keuangan ke Mahkamah Agung paling lambat 31 Desember 2026."
      ],
      "table": {
        "head": [
          "Upaya",
          "Objek",
          "Tenggat ajukan",
          "Jangka putus"
        ],
        "rows": [
          [
            "Banding",
            "Keputusan keberatan",
            "3 bulan",
            "12 bulan"
          ],
          [
            "Gugatan penagihan",
            "Pelaksanaan Surat Paksa, sita, lelang",
            "14 hari",
            "6 bulan"
          ],
          [
            "Gugatan lain",
            "Keputusan selain keberatan",
            "30 hari",
            "6 bulan"
          ],
          [
            "PK",
            "Putusan Pengadilan Pajak",
            "3 bulan",
            "6 bulan"
          ]
        ]
      },
      "traps": [
        "Banding untuk substansi keputusan keberatan; gugatan untuk pelaksanaan penagihan dan keputusan lain.",
        "PK tidak menunda eksekusi putusan banding."
      ],
      "legal": "UU 14/2002 Pasal 35, 40, 77, 81, 91; UU KUP Pasal 23, 27; Putusan MK 26/PUU-XXI/2023."
    },
    {
      "id": "pembukuan",
      "title": "Pembukuan dan pencatatan",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "7",
        "b": "7"
      },
      "points": [
        "Wajib pajak badan dan orang pribadi yang melakukan kegiatan usaha atau pekerjaan bebas wajib menyelenggarakan pembukuan.",
        "Dikecualikan dari pembukuan (cukup pencatatan): orang pribadi yang boleh memakai NPPN dan orang pribadi yang tidak melakukan usaha atau pekerjaan bebas.",
        "NPPN boleh dipakai orang pribadi dengan peredaran bruto kurang dari Rp4,8 miliar setahun dan wajib diberitahukan dalam 3 bulan pertama tahun pajak.",
        "Pembukuan memakai stelsel akrual atau kas, bahasa Indonesia, huruf Latin, angka Arab, dan Rupiah; bahasa asing dan mata uang selain Rupiah hanya setelah mendapat izin Menteri Keuangan.",
        "Perubahan metode pembukuan atau tahun buku harus mendapat persetujuan Direktur Jenderal Pajak.",
        "Buku, catatan, dan dokumen dasar pembukuan disimpan 10 tahun di Indonesia."
      ],
      "traps": [
        "PT dengan omzet kecil tetap wajib pembukuan; NPPN hanya untuk orang pribadi.",
        "Jangka simpan 10 tahun, bukan 5 tahun seperti daluwarsa penetapan."
      ],
      "legal": "UU KUP Pasal 28; UU PPh Pasal 14."
    },
    {
      "id": "pemeriksaan",
      "title": "Penelitian, pemeriksaan, dan penyidikan",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "8",
        "b": "8"
      },
      "points": [
        "Penelitian menguji kelengkapan formal dan kebenaran penulisan/penghitungan; pemeriksaan menguji kepatuhan atau untuk tujuan lain (mis. penghapusan NPWP, pencabutan PKP).",
        "PMK 15/2025 membagi pemeriksaan menjadi lengkap (pengujian paling lama 5 bulan), terfokus (3 bulan), dan spesifik (1 bulan; 10 hari kerja untuk data konkret).",
        "Tanggapan tertulis atas SPHP disampaikan paling lama 5 hari kerja sejak SPHP diterima (sebelumnya 7 hari kerja) tanpa ketentuan perpanjangan.",
        "Bila WP tidak menanggapi, pemeriksa membuat berita acara dan pemeriksaan berlanjut ke pembahasan akhir hasil pemeriksaan.",
        "Pembahasan akhir dan pelaporan diselesaikan paling lama 30 hari kerja sejak SPHP disampaikan (10 hari kerja untuk pemeriksaan spesifik data konkret).",
        "Selama pemeriksaan, WP dapat mengungkapkan ketidakbenaran SPT dengan sanksi bunga Pasal 8 ayat (5); selama pemeriksaan bukti permulaan, pengungkapan disertai denda 100% (Pasal 8 ayat (3a)).",
        "Pemeriksaan bukti permulaan mencari bukti permulaan dugaan tindak pidana perpajakan sebelum penyidikan."
      ],
      "table": {
        "head": [
          "Jenis pemeriksaan",
          "Pengujian",
          "PAHP + laporan"
        ],
        "rows": [
          [
            "Lengkap",
            "5 bulan",
            "30 hari kerja"
          ],
          [
            "Terfokus",
            "3 bulan",
            "30 hari kerja"
          ],
          [
            "Spesifik",
            "1 bulan",
            "30 hari kerja"
          ],
          [
            "Spesifik data konkret",
            "10 hari kerja",
            "10 hari kerja"
          ]
        ]
      },
      "traps": [
        "Batas tanggapan SPHP 5 hari kerja (PMK 15/2025), bukan 7 hari kerja (PMK 17/2013).",
        "Pengungkapan saat pemeriksaan → bunga; saat bukti permulaan → denda 100%."
      ],
      "legal": "UU KUP Pasal 8 ayat (3)–(5), 29, 43A, 44B; PMK 15/2025; PMK 177/2022."
    },
    {
      "id": "sanksi",
      "title": "Sanksi administratif: denda, bunga, dan kenaikan",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "9",
        "b": "9"
      },
      "points": [
        "Denda telat lapor Pasal 7: SPT Masa PPN Rp500.000, SPT Masa lainnya Rp100.000, SPT Tahunan PPh badan Rp1.000.000, dan SPT Tahunan PPh orang pribadi Rp100.000.",
        "Denda Pasal 7 tidak dikenakan antara lain atas OP yang meninggal dunia, OP yang tidak lagi melakukan usaha/pekerjaan bebas, WNA yang tidak lagi bertempat tinggal di Indonesia, BUT yang tidak lagi beroperasi, dan wajib pajak terdampak bencana.",
        "Tarif bunga per bulan = (suku bunga acuan + uplift) ÷ 12, ditetapkan Menteri Keuangan tiap bulan.",
        "Uplift 0% untuk Pasal 19 (angsuran/penundaan dan ketetapan yang terlambat dilunasi), 5% untuk Pasal 8 ayat (2)/(2a), 9 ayat (2a)/(2b), dan 14 ayat (3), 10% untuk Pasal 8 ayat (5), dan 15% untuk Pasal 13 ayat (2).",
        "Bunga dikenakan paling lama 24 bulan, dan bagian dari bulan dihitung satu bulan penuh.",
        "Bunga pembetulan SPT Pasal 8 ayat (2) dihitung sejak jatuh tempo pembayaran berakhir sampai tanggal pembayaran.",
        "Kenaikan Pasal 13 ayat (3) 75% dan Pasal 15 ayat (2) (SKPKBT) 100%."
      ],
      "table": {
        "head": [
          "Pasal",
          "Peristiwa",
          "Uplift"
        ],
        "rows": [
          [
            "19 ayat (1)–(3)",
            "Ketetapan telat dilunasi, angsuran/penundaan",
            "0%"
          ],
          [
            "8(2), 8(2a), 9(2a), 9(2b), 14(3)",
            "Pembetulan, telat bayar, STP",
            "5%"
          ],
          [
            "8 ayat (5)",
            "Pengungkapan saat pemeriksaan",
            "10%"
          ],
          [
            "13 ayat (2)",
            "SKPKB hasil pemeriksaan",
            "15%"
          ]
        ]
      },
      "traps": [
        "Tarif dalam soal biasanya diberikan sebagai asumsi; yang diuji adalah rumus, uplift, batas 24 bulan, dan pembulatan bulan.",
        "Denda Pasal 7 untuk badan Rp1 juta tetapi untuk OP hanya Rp100 ribu."
      ],
      "legal": "UU KUP Pasal 7, 8, 9, 13, 14, 15, 19 s.t.d.t.d. UU HPP; KMK tarif bunga bulanan."
    },
    {
      "id": "restitusi",
      "title": "Restitusi dan pengembalian pendahuluan",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "10",
        "b": "10"
      },
      "points": [
        "Permohonan restitusi diproses melalui pemeriksaan dan DJP wajib menerbitkan SKP paling lama 12 bulan sejak permohonan diterima; lewat waktu berarti dianggap dikabulkan dan SKPLB diterbitkan paling lama 1 bulan kemudian.",
        "Kelebihan pembayaran dalam SKPLB lebih dahulu diperhitungkan dengan utang pajak; sisanya dikembalikan.",
        "Pengembalian dilakukan paling lama 1 bulan sejak permohonan atau SKPLB; keterlambatan memberi WP imbalan bunga dengan tarif (suku bunga acuan ÷ 12).",
        "Pengembalian pendahuluan tanpa pemeriksaan tersedia bagi WP kriteria tertentu (Pasal 17C), WP persyaratan tertentu (Pasal 17D, mis. OP tanpa usaha atau lebih bayar sampai jumlah tertentu), dan PKP berisiko rendah (Pasal 9 ayat (4c) UU PPN).",
        "Hasil pengembalian pendahuluan dituangkan dalam SKPPKP, yang bukan SKP; DJP tetap dapat memeriksa dan menerbitkan SKPKB dengan sanksi kenaikan."
      ],
      "traps": [
        "SKPLB tidak otomatis dibayar penuh: utang pajak diperhitungkan lebih dahulu.",
        "SKPPKP tidak menutup kemungkinan pemeriksaan kemudian."
      ],
      "legal": "UU KUP Pasal 11, 17B, 17C, 17D; UU PPN Pasal 9 ayat (4c); PMK 28/2026."
    },
    {
      "id": "pidana",
      "title": "Ketentuan pidana perpajakan",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "11",
        "b": "11"
      },
      "points": [
        "Pasal 38 mengatur kealpaan: tidak menyampaikan SPT atau menyampaikan SPT yang isinya tidak benar sehingga merugikan pendapatan negara.",
        "Pasal 39 mengatur kesengajaan, antara lain tidak mendaftar, tidak menyampaikan SPT, menyampaikan SPT tidak benar, atau tidak menyetor pajak yang dipotong/dipungut.",
        "Pasal 39A mengatur penerbitan atau penggunaan faktur pajak/bukti potong yang tidak berdasarkan transaksi sebenarnya.",
        "Pasal 44B: penyidikan dapat dihentikan bila WP melunasi kerugian pendapatan negara ditambah denda 1× (Pasal 38), 3× (Pasal 39), atau 4× (Pasal 39A).",
        "Pengungkapan ketidakbenaran saat pemeriksaan bukti permulaan mencegah penyidikan bila kekurangan pajak dilunasi bersama denda 100%.",
        "Tindak pidana perpajakan tidak dapat dituntut setelah lewat 10 tahun (Pasal 40); penyesuaian ancaman pidana dilakukan melalui UU 1/2026."
      ],
      "table": {
        "head": [
          "Pasal pidana",
          "Perbuatan",
          "Denda penghentian (44B)"
        ],
        "rows": [
          [
            "38",
            "Kealpaan",
            "1 × kerugian"
          ],
          [
            "39",
            "Kesengajaan",
            "3 × kerugian"
          ],
          [
            "39A",
            "Faktur/bukti potong fiktif",
            "4 × kerugian"
          ]
        ]
      },
      "traps": [
        "Pasal 44B: pokok kerugian tetap dilunasi; denda adalah tambahan di atas pokok.",
        "Denda 100% (pengungkapan saat bukti permulaan) berbeda dengan denda 44B (saat penyidikan)."
      ],
      "legal": "UU KUP Pasal 38, 39, 39A, 40, 44B s.t.d.t.d. UU HPP; UU 1/2026."
    }
  ],
  "questions": [
    {
      "id": "kup-001",
      "levels": [
        "a",
        "b"
      ],
      "section": "npwp-pkp",
      "kind": "konsep",
      "prompt": "PT Cakra membuka cabang di kota lain setelah sistem Coretax berlaku. Identitas perpajakan apa yang dipakai cabang tersebut?",
      "options": [
        "NITKU yang melekat pada NPWP 16 digit kantor pusat",
        "NPWP cabang 15 digit yang terdaftar terpisah",
        "NIK kepala cabang sebagai penanggung jawab",
        "NPWP 16 digit baru yang terpisah dari pusat"
      ],
      "answer": 0,
      "explanation": "Tempat kegiatan usaha diidentifikasi dengan NITKU, bukan NPWP cabang. NIK hanya berfungsi sebagai NPWP bagi orang pribadi penduduk.",
      "legal": "PMK 112/2022 s.t.d.d. PMK 136/2023; PMK 81/2024"
    },
    {
      "id": "kup-002",
      "levels": [
        "a",
        "b"
      ],
      "section": "npwp-pkp",
      "kind": "kasus",
      "prompt": "Pengusaha dengan tahun buku Januari–Desember melampaui batas pengusaha kecil Rp4,8 miliar pada Juli. Kapan batas melaporkan usaha untuk dikukuhkan sebagai PKP?",
      "options": [
        "Akhir Agustus tahun yang sama",
        "Akhir Juli tahun yang sama",
        "Akhir Maret tahun berikutnya",
        "Akhir Desember tahun buku tersebut"
      ],
      "answer": 3,
      "explanation": "PMK 164/2023 (diteruskan PMK 81/2024) memakai batas akhir tahun buku saat batas terlampaui. Akhir bulan berikutnya adalah pola aturan lama.",
      "legal": "PMK 164/2023; PMK 81/2024"
    },
    {
      "id": "kup-003",
      "levels": [
        "a",
        "b"
      ],
      "section": "npwp-pkp",
      "kind": "konsep",
      "prompt": "Pengusaha dengan peredaran bruto Rp2 miliar memilih dikukuhkan sebagai PKP agar pembelinya dapat mengkreditkan pajak masukan. Apa akibatnya?",
      "options": [
        "Ia boleh memungut PPN tanpa membuat faktur pajak",
        "Ia dibebaskan dari SPT Masa PPN sampai omzet Rp4,8 miliar",
        "Ia wajib memungut, menyetor, dan melaporkan PPN seperti PKP lain",
        "Ia cukup melaporkan PPN dalam SPT Tahunan"
      ],
      "answer": 2,
      "explanation": "Pengusaha kecil yang memilih dikukuhkan menjadi PKP penuh: wajib membuat faktur, memungut, menyetor, dan melaporkan SPT Masa PPN.",
      "legal": "UU PPN Pasal 3A; PMK 164/2023"
    },
    {
      "id": "kup-004",
      "levels": [
        "a",
        "b"
      ],
      "section": "bayar-lapor",
      "kind": "konsep",
      "prompt": "PPh Pasal 23 dipotong pada Masa Mei. Kapan batas setor dan lapornya menurut PMK 81/2024?",
      "options": [
        "Setor 10 Juni, lapor 20 Juni",
        "Setor 15 Juni, lapor 20 Juni",
        "Setor dan lapor 30 Juni",
        "Setor 15 Juni, lapor 30 Juni"
      ],
      "answer": 1,
      "explanation": "PPh Masa disetor paling lambat tanggal 15 dan dilaporkan paling lambat tanggal 20 bulan berikutnya. Tanggal 10 adalah pola setor lama; akhir bulan berlaku untuk PPN.",
      "legal": "UU KUP Pasal 3 dan 9; PMK 81/2024"
    },
    {
      "id": "kup-005",
      "levels": [
        "a",
        "b"
      ],
      "section": "bayar-lapor",
      "kind": "konsep",
      "prompt": "PKP mempunyai PPN kurang bayar Masa Agustus. Kapan batas setor dan lapornya?",
      "options": [
        "Setor 15 September, lapor 20 September",
        "Setor sebelum SPT disampaikan dan paling lambat 30 September; lapor 30 September",
        "Setor 15 September, lapor 30 September",
        "Setor dan lapor 20 September"
      ],
      "answer": 1,
      "explanation": "PPN disetor paling lambat akhir bulan berikutnya dan sebelum SPT Masa PPN disampaikan; SPT Masa PPN dilaporkan paling lambat akhir bulan berikutnya.",
      "legal": "PMK 81/2024"
    },
    {
      "id": "kup-006",
      "levels": [
        "a",
        "b"
      ],
      "section": "bayar-lapor",
      "kind": "kasus",
      "prompt": "PT Danau memakai tahun buku Juli 2025–Juni 2026 dan tidak mengajukan perpanjangan. Kapan batas penyampaian SPT Tahunan PPh badannya?",
      "options": [
        "31 Oktober 2026",
        "30 April 2026",
        "30 September 2026",
        "30 April 2027"
      ],
      "answer": 0,
      "explanation": "SPT Tahunan badan disampaikan paling lambat 4 bulan setelah akhir tahun buku: 30 Juni 2026 + 4 bulan = 31 Oktober 2026. 30 April keliru karena mengasumsikan tahun kalender.",
      "legal": "UU KUP Pasal 3 ayat (3)"
    },
    {
      "id": "kup-007",
      "levels": [
        "a",
        "b"
      ],
      "section": "bayar-lapor",
      "kind": "hitung",
      "prompt": "Badan dengan tahun buku kalender 2025 menyampaikan pemberitahuan perpanjangan penyampaian SPT Tahunan untuk jangka maksimal. Kapan batas akhirnya?",
      "options": [
        "31 Mei 2026",
        "31 Juli 2026",
        "30 April 2026",
        "30 Juni 2026"
      ],
      "answer": 3,
      "explanation": "Batas normal 30 April 2026 diperpanjang paling lama 2 bulan menjadi 30 Juni 2026. 31 Juli muncul bila perpanjangan dikira 3 bulan.",
      "legal": "UU KUP Pasal 3 ayat (4)"
    },
    {
      "id": "kup-008",
      "levels": [
        "a",
        "b"
      ],
      "section": "bayar-lapor",
      "kind": "konsep",
      "prompt": "Batas setor PPh 21 Masa jatuh pada tanggal 15 yang kebetulan hari Minggu. Bagaimana perlakuannya menurut PMK 81/2024?",
      "options": [
        "Penyetoran harus dimajukan ke hari kerja sebelumnya",
        "Penyetoran pada hari Senin dikenai bunga satu bulan",
        "Penyetoran dapat dilakukan pada hari kerja berikutnya tanpa sanksi",
        "Batas setor otomatis bergeser ke tanggal 20"
      ],
      "answer": 2,
      "explanation": "Bila batas setor atau lapor jatuh pada hari libur, termasuk Sabtu dan Minggu, batasnya menjadi hari kerja berikutnya.",
      "legal": "PMK 81/2024"
    },
    {
      "id": "kup-009",
      "levels": [
        "b"
      ],
      "section": "bayar-lapor",
      "kind": "konsep",
      "prompt": "Pasangan kewajiban dan tenggat manakah yang TIDAK sesuai PMK 81/2024?",
      "options": [
        "Angsuran PPh Pasal 25 disetor paling lambat tanggal 15 bulan berikutnya",
        "SPT Masa PPh 4 ayat (2) dilaporkan paling lambat tanggal 20 bulan berikutnya",
        "SPT Masa PPN dilaporkan paling lambat tanggal 20 bulan berikutnya",
        "Kekurangan PPh Pasal 29 dilunasi sebelum SPT Tahunan disampaikan"
      ],
      "answer": 2,
      "explanation": "SPT Masa PPN dilaporkan paling lambat akhir bulan berikutnya, bukan tanggal 20. Tiga pasangan lain sesuai jadwal PMK 81/2024.",
      "legal": "PMK 81/2024"
    },
    {
      "id": "kup-010",
      "levels": [
        "a",
        "b"
      ],
      "section": "stp-skp",
      "kind": "kasus",
      "prompt": "SKPKB PPh badan tahun pajak 2022 terbit pada 2024. Pada 2026 DJP menemukan data baru yang menambah pajak terutang. Produk dan sanksi yang sesuai adalah apa?",
      "options": [
        "SKPKB kedua dengan bunga Pasal 13 ayat (2)",
        "SKPKBT dengan kenaikan 100% dari jumlah kekurangan",
        "STP dengan denda 1% dari tambahan penghasilan",
        "SKPKBT dengan bunga acuan + 15% ÷ 12"
      ],
      "answer": 1,
      "explanation": "Data baru setelah SKP diterbitkan menjadi dasar SKPKBT dengan kenaikan 100% (Pasal 15 ayat (2)). Bunga Pasal 13 ayat (2) melekat pada SKPKB, bukan SKPKBT.",
      "legal": "UU KUP Pasal 15"
    },
    {
      "id": "kup-011",
      "levels": [
        "a",
        "b"
      ],
      "section": "stp-skp",
      "kind": "hitung",
      "prompt": "Hasil pemeriksaan: PPh terutang Rp80 juta, kredit pajak Rp95 juta, dan WP tidak mempunyai utang pajak lain. Ketetapan apa yang terbit dan berapa nilainya?",
      "options": [
        "SKPLB Rp15 juta",
        "SKPKB Rp15 juta",
        "SKPN karena selisihnya kecil",
        "SKPLB Rp95 juta"
      ],
      "answer": 0,
      "explanation": "Kredit lebih besar dari terutang: Rp95 juta − Rp80 juta = Rp15 juta lebih bayar, ditetapkan dengan SKPLB. SKPN hanya bila kredit sama dengan terutang.",
      "legal": "UU KUP Pasal 17"
    },
    {
      "id": "kup-012",
      "levels": [
        "a",
        "b"
      ],
      "section": "stp-skp",
      "kind": "konsep",
      "prompt": "Manakah yang TIDAK menjadi dasar penerbitan Surat Tagihan Pajak?",
      "options": [
        "PPh tahun berjalan tidak atau kurang dibayar",
        "SPT kurang bayar akibat salah tulis atau salah hitung",
        "PKP tidak membuat faktur pajak tepat waktu",
        "Data baru yang menambah pajak setelah SKP diterbitkan"
      ],
      "answer": 3,
      "explanation": "Data baru setelah SKP menjadi dasar SKPKBT. Tiga kondisi lainnya termasuk dasar STP dalam Pasal 14 ayat (1).",
      "legal": "UU KUP Pasal 14 dan 15"
    },
    {
      "id": "kup-013",
      "levels": [
        "a",
        "b"
      ],
      "section": "stp-skp",
      "kind": "hitung",
      "prompt": "PKP terlambat membuat faktur pajak atas penyerahan dengan DPP Rp200 juta. Berapa denda yang ditagih dengan STP?",
      "options": [
        "Rp4.000.000",
        "Rp22.000.000",
        "Rp1.000.000",
        "Rp2.000.000"
      ],
      "answer": 3,
      "explanation": "Pasal 14 ayat (4) setelah UU HPP: denda 1% × DPP = 1% × Rp200 juta = Rp2 juta. Rp4 juta memakai tarif lama 2%; Rp22 juta keliru memakai PPN 11%.",
      "legal": "UU KUP Pasal 14 ayat (4)"
    },
    {
      "id": "kup-014",
      "levels": [
        "a",
        "b"
      ],
      "section": "stp-skp",
      "kind": "hitung",
      "prompt": "Untuk Tahun Pajak 2021, sampai kapan DJP masih dapat menerbitkan SKPKB menurut daluwarsa penetapan Pasal 13 ayat (1)?",
      "options": [
        "31 Desember 2031",
        "30 April 2026",
        "31 Desember 2026",
        "31 Desember 2025"
      ],
      "answer": 2,
      "explanation": "SKPKB diterbitkan dalam 5 tahun setelah berakhirnya Tahun Pajak: akhir 2021 + 5 tahun = 31 Desember 2026. 2031 keliru memakai 10 tahun (jangka simpan dokumen).",
      "legal": "UU KUP Pasal 13 ayat (1)"
    },
    {
      "id": "kup-015",
      "levels": [
        "a",
        "b"
      ],
      "section": "stp-skp",
      "kind": "kasus",
      "prompt": "WP badan tidak menyampaikan SPT Tahunan dalam jangka waktu yang ditentukan Surat Teguran. Pemeriksaan menghasilkan PPh kurang bayar Rp40 juta. Berapa jumlah dalam SKPKB?",
      "options": [
        "Rp40 juta",
        "Rp70 juta",
        "Rp80 juta",
        "Rp60 juta"
      ],
      "answer": 1,
      "explanation": "Pasal 13 ayat (3) setelah UU HPP: kenaikan 75% × Rp40 juta = Rp30 juta; total Rp70 juta. Rp80 juta memakai 100% dan Rp60 juta memakai 50%.",
      "legal": "UU KUP Pasal 13 ayat (3)"
    },
    {
      "id": "kup-016",
      "levels": [
        "a",
        "b"
      ],
      "section": "penagihan",
      "kind": "konsep",
      "prompt": "Setelah Surat Paksa diberitahukan, utang tetap tidak dibayar dan penyitaan telah dilaksanakan. Urutan tindakan berikutnya menuju penjualan barang sitaan adalah apa?",
      "options": [
        "Pengumuman lelang, lalu pelaksanaan lelang",
        "Pelaksanaan lelang, lalu pengumuman lelang",
        "Surat Teguran baru, lalu pelaksanaan lelang",
        "Penerbitan SKPKBT, lalu pengajuan banding"
      ],
      "answer": 0,
      "explanation": "Penyitaan diikuti pengumuman lelang (paling cepat 14 hari setelah sita), lalu lelang (paling cepat 14 hari setelah pengumuman). Surat Teguran berada sebelum Surat Paksa.",
      "legal": "UU PPSP Pasal 25–26"
    },
    {
      "id": "kup-017",
      "levels": [
        "a",
        "b"
      ],
      "section": "penagihan",
      "kind": "konsep",
      "prompt": "Utang pajak belum dibayar setelah Surat Paksa diberitahukan. Berapa lama jeda sebelum penyitaan dapat dilakukan?",
      "options": [
        "2 × 24 jam sejak Surat Paksa diberitahukan",
        "21 hari sejak Surat Paksa diberitahukan",
        "14 hari sejak Surat Paksa diterbitkan",
        "7 hari sejak Surat Teguran disampaikan"
      ],
      "answer": 0,
      "explanation": "Penyitaan dapat dilakukan bila utang tidak dilunasi dalam 2 × 24 jam sejak pemberitahuan Surat Paksa. 21 hari adalah jeda Surat Teguran ke Surat Paksa.",
      "legal": "UU PPSP Pasal 11–12"
    },
    {
      "id": "kup-018",
      "levels": [
        "a",
        "b"
      ],
      "section": "penagihan",
      "kind": "hitung",
      "prompt": "Surat Teguran atas SKPKB disampaikan kepada Penanggung Pajak pada 17 Maret dan utang tetap tidak dilunasi. Paling cepat kapan Surat Paksa dapat diterbitkan?",
      "options": [
        "24 Maret",
        "31 Maret",
        "14 April",
        "7 April"
      ],
      "answer": 3,
      "explanation": "Surat Paksa diterbitkan setelah 21 hari sejak Surat Teguran disampaikan: 17 Maret + 21 hari = 7 April. 24 Maret keliru memakai jeda 7 hari (jatuh tempo ke Surat Teguran).",
      "legal": "UU PPSP Pasal 8; PMK 61/2023"
    },
    {
      "id": "kup-019",
      "levels": [
        "b"
      ],
      "section": "penagihan",
      "kind": "kasus",
      "prompt": "Dalam lelang barang sitaan, hasil penjualan Rp365 juta. Biaya penagihan Rp9 juta dan utang pajak Rp248 juta. Tidak ada kewajiban lain yang dibebankan pada hasil lelang. Berapa yang dikembalikan kepada Penanggung Pajak?",
      "options": [
        "Rp117 juta",
        "Rp126 juta",
        "Rp108 juta",
        "Rp356 juta"
      ],
      "answer": 2,
      "explanation": "Sisa = Rp365 juta − Rp9 juta − Rp248 juta = Rp108 juta. Rp117 juta lupa mengurangkan biaya penagihan.",
      "legal": "UU PPSP Pasal 26–27",
      "source": "Try Out UKP Tingkat B"
    },
    {
      "id": "kup-020",
      "levels": [
        "b"
      ],
      "section": "penagihan",
      "kind": "kasus",
      "prompt": "Pembeli memenangkan lelang peralatan produksi hasil penagihan pajak. Dokumen mana yang membuktikan peralihan hak karena lelang?",
      "options": [
        "Salinan Surat Paksa",
        "Risalah lelang",
        "Berita acara pelaksanaan sita",
        "Pengumuman lelang"
      ],
      "answer": 1,
      "explanation": "Risalah lelang adalah bukti peralihan hak atas barang yang dilelang. Berita acara sita mencatat tahap penyitaan sebelumnya.",
      "legal": "UU PPSP Pasal 26",
      "source": "Try Out UKP Tingkat B"
    },
    {
      "id": "kup-021",
      "levels": [
        "a",
        "b"
      ],
      "section": "penagihan",
      "kind": "konsep",
      "prompt": "Manakah syarat penyanderaan Penanggung Pajak yang tepat?",
      "options": [
        "Utang paling sedikit Rp50 juta, paling lama 1 tahun tanpa perpanjangan",
        "Utang paling sedikit Rp100 juta dan diragukan itikad baiknya, paling lama 6 bulan dan dapat diperpanjang 6 bulan",
        "Utang berapa pun setelah Surat Teguran, paling lama 3 bulan",
        "Utang paling sedikit Rp100 juta, paling lama 2 tahun sekaligus"
      ],
      "answer": 1,
      "explanation": "Penyanderaan hanya atas utang paling sedikit Rp100 juta dan Penanggung Pajak diragukan itikad baiknya, paling lama 6 bulan dan dapat diperpanjang paling lama 6 bulan.",
      "legal": "UU PPSP Pasal 33"
    },
    {
      "id": "kup-022",
      "levels": [
        "a",
        "b"
      ],
      "section": "penagihan",
      "kind": "konsep",
      "prompt": "Jurusita melakukan penyitaan atas harta Penanggung Pajak. Barang mana yang DAPAT disita?",
      "options": [
        "Deposito berjangka atas nama Penanggung Pajak",
        "Pakaian dan tempat tidur Penanggung Pajak dan keluarganya",
        "Peralatan masak yang digunakan sehari-hari di rumah",
        "Persediaan makanan dan minuman untuk satu bulan"
      ],
      "answer": 0,
      "explanation": "Deposito termasuk barang yang dapat disita. Pakaian, tempat tidur, peralatan masak, serta makanan dan minuman untuk satu bulan dikecualikan dari penyitaan.",
      "legal": "UU PPSP Pasal 15"
    },
    {
      "id": "kup-023",
      "levels": [
        "a",
        "b"
      ],
      "section": "pembetulan-keberatan",
      "kind": "kasus",
      "prompt": "Ada dua dokumen yang hendak dipersoalkan. Pertama, SKP dengan kesalahan penjumlahan murni. Kedua, keputusan keberatan yang substansinya diperselisihkan. Pasangan tindakan mana yang sesuai?",
      "options": [
        "Keberatan untuk keduanya",
        "Gugatan untuk keduanya",
        "Banding untuk dokumen pertama dan pembetulan untuk dokumen kedua",
        "Pembetulan Pasal 16 untuk dokumen pertama dan banding untuk dokumen kedua"
      ],
      "answer": 3,
      "explanation": "Pembetulan Pasal 16 menangani salah tulis, salah hitung, atau kekeliruan penerapan ketentuan. Keputusan keberatan yang substansinya disengketakan diuji melalui banding.",
      "legal": "UU KUP Pasal 16 dan 27"
    },
    {
      "id": "kup-024",
      "levels": [
        "a",
        "b"
      ],
      "section": "pembetulan-keberatan",
      "kind": "hitung",
      "prompt": "SKPKB dikirim pada 10 Februari dan diterima WP pada 14 Februari. Kapan batas akhir pengajuan keberatan?",
      "options": [
        "14 Mei",
        "10 Maret",
        "10 Mei",
        "14 Agustus"
      ],
      "answer": 2,
      "explanation": "Keberatan diajukan paling lama 3 bulan sejak tanggal dikirim SKP: 10 Februari + 3 bulan = 10 Mei. Banding, bukan keberatan, yang dihitung sejak keputusan diterima.",
      "legal": "UU KUP Pasal 25 ayat (3)"
    },
    {
      "id": "kup-025",
      "levels": [
        "a",
        "b"
      ],
      "section": "pembetulan-keberatan",
      "kind": "konsep",
      "prompt": "Manakah yang BUKAN syarat pengajuan keberatan?",
      "options": [
        "Satu keberatan diajukan untuk satu SKP",
        "Ditulis dalam bahasa Indonesia dengan alasan yang jelas",
        "Melunasi 50% pajak menurut SKP sebelum mengajukan keberatan",
        "Melunasi jumlah yang disetujui dalam pembahasan akhir"
      ],
      "answer": 2,
      "explanation": "Pelunasan yang disyaratkan hanya jumlah yang disetujui dalam pembahasan akhir hasil pemeriksaan. Syarat 50% tidak ada dalam Pasal 25 UU KUP.",
      "legal": "UU KUP Pasal 25 ayat (2) dan (3a)"
    },
    {
      "id": "kup-026",
      "levels": [
        "a",
        "b"
      ],
      "section": "pembetulan-keberatan",
      "kind": "konsep",
      "prompt": "Surat keberatan diterima DJP pada 5 Juni 2025. Sampai 5 Juni 2026 keputusan belum diterbitkan. Apa akibatnya?",
      "options": [
        "Keberatan dianggap ditolak",
        "Keberatan dianggap dikabulkan",
        "WP otomatis dapat mengajukan banding",
        "Jangka waktu keputusan diperpanjang 6 bulan"
      ],
      "answer": 1,
      "explanation": "Keputusan keberatan wajib terbit paling lama 12 bulan sejak surat keberatan diterima; lewat waktu, keberatan dianggap dikabulkan.",
      "legal": "UU KUP Pasal 26 ayat (1) dan (5)"
    },
    {
      "id": "kup-027",
      "levels": [
        "a",
        "b"
      ],
      "section": "pembetulan-keberatan",
      "kind": "kasus",
      "prompt": "Keberatan WP ditolak dan WP segera mengajukan banding dalam tenggat. Bagaimana denda 30% Pasal 25 ayat (9)?",
      "options": [
        "Tidak dikenakan; sanksi selanjutnya bergantung putusan banding",
        "Tetap dikenakan 30% dan ditambah 60% bila banding ditolak",
        "Dikenakan 30% lalu dikembalikan bila banding dikabulkan",
        "Dikenakan 15% karena banding sedang berjalan"
      ],
      "answer": 0,
      "explanation": "Denda 30% hanya bila WP tidak mengajukan banding. Bila banding diajukan, yang berlaku adalah denda 60% bila banding ditolak atau dikabulkan sebagian.",
      "legal": "UU KUP Pasal 25 ayat (9) dan 27 ayat (5d)"
    },
    {
      "id": "kup-028",
      "levels": [
        "b"
      ],
      "section": "pembetulan-keberatan",
      "kind": "kasus",
      "prompt": "WP menerima STP yang memuat sanksi administratif. Ia menerima jumlah pokoknya dan punya bukti bahwa sanksi timbul bukan karena kesalahannya. Jalur apa yang sesuai untuk menghapus sanksi itu?",
      "options": [
        "Banding langsung ke Pengadilan Pajak atas pokok pajak",
        "Permohonan angsuran pembayaran Pasal 9 ayat (4)",
        "Pembetulan SPT untuk menghapus seluruh pokok",
        "Permohonan pengurangan atau penghapusan sanksi Pasal 36 ayat (1) huruf a"
      ],
      "answer": 3,
      "explanation": "Pasal 36 ayat (1) huruf a mengatur pengurangan/penghapusan sanksi karena kekhilafan atau bukan kesalahan WP. Pokok tidak dipersoalkan.",
      "legal": "UU KUP Pasal 36",
      "source": "Latihan Soal UKP Tingkat B (v2)"
    },
    {
      "id": "kup-029",
      "levels": [
        "a",
        "b"
      ],
      "section": "pembetulan-keberatan",
      "kind": "konsep",
      "prompt": "SKP diterbitkan tanpa SPHP pernah disampaikan kepada WP. Jalur administrasi yang secara khusus disediakan untuk kondisi ini adalah apa?",
      "options": [
        "Pembetulan Pasal 16 atas kekeliruan penerapan ketentuan",
        "Pengurangan sanksi Pasal 36 ayat (1) huruf a",
        "Gugatan atas pelaksanaan Surat Paksa dalam 14 hari",
        "Pembatalan hasil pemeriksaan atau SKP berdasarkan Pasal 36 ayat (1) huruf d"
      ],
      "answer": 3,
      "explanation": "Pasal 36 ayat (1) huruf d memungkinkan pembatalan hasil pemeriksaan atau SKP yang dilaksanakan tanpa penyampaian SPHP atau pembahasan akhir.",
      "legal": "UU KUP Pasal 36 ayat (1) huruf d"
    },
    {
      "id": "kup-030",
      "levels": [
        "b"
      ],
      "section": "pembetulan-keberatan",
      "kind": "konsep",
      "prompt": "SPT Tahunan PPh badan 2022 hendak dibetulkan sehingga menjadi lebih bayar. Kapan batas akhir pembetulan seperti itu?",
      "options": [
        "Kapan saja selama belum ada SKP",
        "Paling lama 3 bulan setelah batas lapor SPT",
        "Paling lama 2 tahun sebelum daluwarsa penetapan, yaitu akhir 2025",
        "Paling lama 5 tahun setelah akhir tahun pajak"
      ],
      "answer": 2,
      "explanation": "Pembetulan yang menyatakan rugi atau lebih bayar diajukan paling lama 2 tahun sebelum daluwarsa penetapan: daluwarsa akhir 2027 dikurangi 2 tahun = akhir 2025.",
      "legal": "UU KUP Pasal 8 ayat (1a)"
    },
    {
      "id": "kup-031",
      "levels": [
        "a",
        "b"
      ],
      "section": "sengketa",
      "kind": "kasus",
      "prompt": "WP menerima keputusan keberatan yang hanya mengabulkan sebagian permohonannya dan ingin menguji substansinya. Tindakan dan tenggat umum mana yang sesuai?",
      "options": [
        "Gugatan penagihan paling lama 14 hari sejak keputusan diterima",
        "Banding ke Pengadilan Pajak paling lama 3 bulan sejak keputusan diterima",
        "Keberatan kedua paling lama 3 bulan sejak keputusan dikirim",
        "Peninjauan kembali langsung ke Mahkamah Agung"
      ],
      "answer": 1,
      "explanation": "Banding menguji keputusan keberatan dalam 3 bulan sejak keputusan diterima. Gugatan penagihan untuk pelaksanaan penagihan; PK untuk putusan Pengadilan Pajak.",
      "legal": "UU 14/2002 Pasal 35; UU KUP Pasal 27"
    },
    {
      "id": "kup-032",
      "levels": [
        "a",
        "b"
      ],
      "section": "sengketa",
      "kind": "hitung",
      "prompt": "Penyitaan dilaksanakan pada 5 Mei dan Penanggung Pajak ingin menggugat pelaksanaannya. Kapan batas akhir pengajuan gugatan?",
      "options": [
        "19 Mei",
        "4 Juni",
        "5 Agustus",
        "12 Mei"
      ],
      "answer": 0,
      "explanation": "Gugatan atas pelaksanaan penagihan diajukan paling lama 14 hari sejak pelaksanaan: 5 Mei + 14 hari = 19 Mei. 4 Juni keliru memakai 30 hari untuk gugatan keputusan lain.",
      "legal": "UU 14/2002 Pasal 40 ayat (2)"
    },
    {
      "id": "kup-033",
      "levels": [
        "b"
      ],
      "section": "sengketa",
      "kind": "konsep",
      "prompt": "WP berpendapat SKP diterbitkan tanpa prosedur yang benar dan memilih jalur gugatan. Berapa tenggat pengajuan gugatannya?",
      "options": [
        "30 hari sejak keputusan diterima",
        "14 hari sejak keputusan diterima",
        "3 bulan sejak keputusan dikirim",
        "6 bulan sejak keputusan diterima"
      ],
      "answer": 0,
      "explanation": "Gugatan atas keputusan selain pelaksanaan penagihan diajukan paling lama 30 hari sejak keputusan diterima. Tenggat 14 hari khusus pelaksanaan penagihan.",
      "legal": "UU KUP Pasal 23 ayat (2) huruf d; UU 14/2002 Pasal 40"
    },
    {
      "id": "kup-034",
      "levels": [
        "a",
        "b"
      ],
      "section": "sengketa",
      "kind": "konsep",
      "prompt": "Manakah pernyataan yang TIDAK tepat tentang peninjauan kembali (PK) putusan Pengadilan Pajak?",
      "options": [
        "PK diajukan ke Mahkamah Agung melalui Pengadilan Pajak",
        "PK hanya dapat diajukan satu kali",
        "Tenggat umum pengajuan PK adalah 3 bulan",
        "PK menangguhkan pelaksanaan putusan Pengadilan Pajak"
      ],
      "answer": 3,
      "explanation": "Permohonan PK tidak menangguhkan atau menghentikan pelaksanaan putusan Pengadilan Pajak. Tiga pernyataan lain sesuai UU 14/2002.",
      "legal": "UU 14/2002 Pasal 89–92"
    },
    {
      "id": "kup-035",
      "levels": [
        "b"
      ],
      "section": "sengketa",
      "kind": "hitung",
      "prompt": "WP telah membayar Rp40 juta sebelum keberatan. Banding ditolak sebagian dan pajak menurut putusan banding Rp130 juta. Berapa denda Pasal 27 ayat (5d)?",
      "options": [
        "Rp78 juta",
        "Rp27 juta",
        "Rp54 juta",
        "Rp90 juta"
      ],
      "answer": 2,
      "explanation": "Dasar denda = Rp130 juta − Rp40 juta = Rp90 juta; denda 60% × Rp90 juta = Rp54 juta. Rp78 juta lupa mengurangkan pembayaran; Rp27 juta memakai 30%.",
      "legal": "UU KUP Pasal 27 ayat (5d)"
    },
    {
      "id": "kup-036",
      "levels": [
        "a",
        "b"
      ],
      "section": "sengketa",
      "kind": "konsep",
      "prompt": "Apa inti Putusan MK 26/PUU-XXI/2023 terkait Pengadilan Pajak?",
      "options": [
        "Pengadilan Pajak dibubarkan dan perkara dialihkan ke PTUN",
        "Pembinaan organisasi, administrasi, dan keuangan dialihkan ke Mahkamah Agung paling lambat 31 Desember 2026",
        "Tenggat banding diperpanjang menjadi 6 bulan",
        "Putusan banding dapat diajukan kasasi ke Mahkamah Agung"
      ],
      "answer": 1,
      "explanation": "MK memutus pembinaan Pengadilan Pajak beralih dari Kementerian Keuangan ke Mahkamah Agung paling lambat 31 Desember 2026. Hukum acara banding dan PK tidak diubah.",
      "legal": "Putusan MK 26/PUU-XXI/2023"
    },
    {
      "id": "kup-037",
      "levels": [
        "a",
        "b"
      ],
      "section": "pembukuan",
      "kind": "konsep",
      "prompt": "Berapa lama buku, catatan, dan dokumen dasar pembukuan wajib disimpan?",
      "options": [
        "5 tahun di Indonesia",
        "10 tahun di Indonesia",
        "10 tahun di mana saja",
        "3 tahun setelah SPT disampaikan"
      ],
      "answer": 1,
      "explanation": "Pasal 28 ayat (11): disimpan 10 tahun di Indonesia. 5 tahun adalah daluwarsa penetapan, bukan jangka simpan.",
      "legal": "UU KUP Pasal 28 ayat (11)"
    },
    {
      "id": "kup-038",
      "levels": [
        "a",
        "b"
      ],
      "section": "pembukuan",
      "kind": "kasus",
      "prompt": "Dokter praktik mandiri memiliki penerimaan bruto 2025 sebesar Rp3 miliar dan ingin memakai NPPN untuk Tahun Pajak 2026. Kapan batas pemberitahuannya?",
      "options": [
        "31 Maret 2026",
        "31 Januari 2026",
        "30 April 2026",
        "31 Desember 2026"
      ],
      "answer": 0,
      "explanation": "Orang pribadi dengan bruto kurang dari Rp4,8 miliar boleh memakai NPPN dengan memberitahukan dalam 3 bulan pertama tahun pajak, yaitu paling lambat 31 Maret 2026.",
      "legal": "UU PPh Pasal 14 ayat (2) dan (3)"
    },
    {
      "id": "kup-039",
      "levels": [
        "a",
        "b"
      ],
      "section": "pembukuan",
      "kind": "konsep",
      "prompt": "Anak perusahaan asing ingin menyelenggarakan pembukuan dalam bahasa Inggris dan dolar Amerika Serikat. Apa syaratnya?",
      "options": [
        "Cukup memberitahukan dalam SPT Tahunan",
        "Boleh langsung asalkan pemegang saham mayoritas asing",
        "Tidak diperbolehkan dalam kondisi apa pun",
        "Harus terlebih dahulu mendapat izin Menteri Keuangan"
      ],
      "answer": 3,
      "explanation": "Pembukuan pada dasarnya dalam bahasa Indonesia dan Rupiah; bahasa asing dan mata uang selain Rupiah dapat dipakai setelah mendapat izin Menteri Keuangan.",
      "legal": "UU KUP Pasal 28 ayat (4)"
    },
    {
      "id": "kup-040",
      "levels": [
        "a",
        "b"
      ],
      "section": "pembukuan",
      "kind": "konsep",
      "prompt": "Wajib pajak manakah yang boleh hanya menyelenggarakan pencatatan?",
      "options": [
        "PT perorangan dengan omzet Rp500 juta",
        "Bentuk usaha tetap dengan omzet di bawah Rp4,8 miliar",
        "Orang pribadi pekerjaan bebas yang memenuhi syarat dan memberitahukan NPPN",
        "CV yang baru berdiri dan belum berlaba"
      ],
      "answer": 2,
      "explanation": "Pengecualian pembukuan hanya untuk orang pribadi yang boleh memakai NPPN dan orang pribadi tanpa usaha. Badan, termasuk PT perorangan dan BUT, wajib pembukuan.",
      "legal": "UU KUP Pasal 28 ayat (2)"
    },
    {
      "id": "kup-041",
      "levels": [
        "a",
        "b"
      ],
      "section": "pemeriksaan",
      "kind": "kasus",
      "prompt": "WP menerima SPHP dalam pemeriksaan lengkap. Berapa batas tanggapan tertulisnya menurut PMK 15/2025 dan apa akibat bila tidak menanggapi?",
      "options": [
        "7 hari kerja; pemeriksaan ditunda sampai tanggapan diterima",
        "5 hari kerja dan dapat diperpanjang 3 hari kerja atas permohonan",
        "5 hari kerja; pemeriksa membuat berita acara dan pemeriksaan berlanjut ke pembahasan akhir",
        "10 hari kerja; WP kehilangan hak mengajukan keberatan"
      ],
      "answer": 2,
      "explanation": "PMK 15/2025 Pasal 18 memangkas batas tanggapan SPHP menjadi 5 hari kerja tanpa perpanjangan. Tanpa tanggapan, dibuat berita acara dan proses berlanjut. 7 hari kerja adalah aturan PMK 17/2013.",
      "legal": "PMK 15/2025 Pasal 18"
    },
    {
      "id": "kup-042",
      "levels": [
        "a",
        "b"
      ],
      "section": "pemeriksaan",
      "kind": "konsep",
      "prompt": "Pasangan jenis pemeriksaan dan jangka waktu pengujian manakah yang TIDAK sesuai PMK 15/2025?",
      "options": [
        "Pemeriksaan lengkap – paling lama 5 bulan",
        "Pemeriksaan terfokus – paling lama 6 bulan",
        "Pemeriksaan spesifik – paling lama 1 bulan",
        "Pemeriksaan spesifik atas data konkret – 10 hari kerja"
      ],
      "answer": 1,
      "explanation": "Pemeriksaan terfokus diuji paling lama 3 bulan. Tiga pasangan lain sesuai Pasal 6 PMK 15/2025.",
      "legal": "PMK 15/2025 Pasal 6"
    },
    {
      "id": "kup-043",
      "levels": [
        "a",
        "b"
      ],
      "section": "pemeriksaan",
      "kind": "konsep",
      "prompt": "Apa tujuan pemeriksaan bukti permulaan?",
      "options": [
        "Mendapatkan bukti permulaan tentang dugaan tindak pidana perpajakan",
        "Menguji kepatuhan formal dan menerbitkan SKP",
        "Meneliti kelengkapan dan kebenaran hitungan SPT",
        "Menagih utang pajak yang telah jatuh tempo"
      ],
      "answer": 0,
      "explanation": "Pemeriksaan bukti permulaan dilakukan untuk memperoleh bukti permulaan dugaan tindak pidana sebelum penyidikan. Menerbitkan SKP adalah tujuan pemeriksaan kepatuhan.",
      "legal": "UU KUP Pasal 43A; PMK 177/2022"
    },
    {
      "id": "kup-044",
      "levels": [
        "a",
        "b"
      ],
      "section": "pemeriksaan",
      "kind": "konsep",
      "prompt": "Pasangan tahap pengungkapan ketidakbenaran dan sanksinya manakah yang tepat?",
      "options": [
        "Selama pemeriksaan: denda 100%; selama bukti permulaan: bunga Pasal 8 ayat (5)",
        "Keduanya dikenai kenaikan 75% sesuai Pasal 13",
        "Selama pemeriksaan: bebas sanksi; selama bukti permulaan: denda 50%",
        "Selama pemeriksaan: bunga Pasal 8 ayat (5); selama bukti permulaan: denda 100%"
      ],
      "answer": 3,
      "explanation": "Pengungkapan selama pemeriksaan (sebelum SKP) dikenai bunga Pasal 8 ayat (5) dengan uplift 10%. Pengungkapan selama bukti permulaan disertai denda 100% (Pasal 8 ayat (3a)).",
      "legal": "UU KUP Pasal 8 ayat (3a), (4), (5)"
    },
    {
      "id": "kup-045",
      "levels": [
        "b"
      ],
      "section": "pemeriksaan",
      "kind": "konsep",
      "prompt": "Manakah yang termasuk pemeriksaan untuk tujuan lain, bukan untuk menguji kepatuhan?",
      "options": [
        "Pemeriksaan atas SPT yang menyatakan lebih bayar",
        "Pemeriksaan bukti permulaan dugaan pidana",
        "Penelitian kelengkapan SPT Masa",
        "Pemeriksaan dalam rangka permohonan penghapusan NPWP"
      ],
      "answer": 3,
      "explanation": "Penghapusan NPWP dan pencabutan PKP termasuk pemeriksaan untuk tujuan lain. SPT lebih bayar diperiksa untuk menguji kepatuhan; bukti permulaan dan penelitian adalah prosedur lain.",
      "legal": "UU KUP Pasal 29; PMK 15/2025"
    },
    {
      "id": "kup-046",
      "levels": [
        "a",
        "b"
      ],
      "section": "sanksi",
      "kind": "konsep",
      "prompt": "Bagaimana rumus tarif bunga per bulan untuk keterlambatan pembayaran Pasal 9 ayat (2a) setelah UU HPP?",
      "options": [
        "(Suku bunga acuan + 15%) ÷ 12",
        "Suku bunga acuan ÷ 12 tanpa uplift",
        "(Suku bunga acuan + 5%) ÷ 12",
        "(Suku bunga acuan + 10%) ÷ 12"
      ],
      "answer": 2,
      "explanation": "Pasal 8 ayat (2)/(2a), 9 ayat (2a)/(2b), dan 14 ayat (3) memakai uplift 5%. Uplift 10% untuk Pasal 8 ayat (5), 15% untuk Pasal 13 ayat (2), dan 0% untuk Pasal 19.",
      "legal": "UU KUP Pasal 9 ayat (2a) s.t.d.t.d. UU HPP"
    },
    {
      "id": "kup-047",
      "levels": [
        "a",
        "b"
      ],
      "section": "sanksi",
      "kind": "kasus",
      "prompt": "SKPKB menetapkan kurang bayar Rp100 juta. Asumsikan suku bunga acuan 6% sepanjang periode dan jangka waktu dari jatuh tempo sampai SKPKB terbit 30 bulan. Berapa bunga Pasal 13 ayat (2)?",
      "options": [
        "Rp52,5 juta",
        "Rp42 juta",
        "Rp22 juta",
        "Rp27,5 juta"
      ],
      "answer": 1,
      "explanation": "Tarif = (6% + 15%) ÷ 12 = 1,75% per bulan; bunga dibatasi 24 bulan: 24 × 1,75% × Rp100 juta = Rp42 juta. Rp52,5 juta lupa batas 24 bulan; Rp22 juta memakai uplift 5%.",
      "legal": "UU KUP Pasal 13 ayat (2)"
    },
    {
      "id": "kup-048",
      "levels": [
        "a",
        "b"
      ],
      "section": "sanksi",
      "kind": "hitung",
      "prompt": "Seorang wajib pajak orang pribadi terlambat menyampaikan SPT Tahunan PPh, SPT Masa PPh 21, dan SPT Masa PPN. Berapa total denda Pasal 7?",
      "options": [
        "Rp700.000",
        "Rp1.600.000",
        "Rp600.000",
        "Rp300.000"
      ],
      "answer": 0,
      "explanation": "SPT Tahunan OP Rp100.000 + SPT Masa PPh 21 Rp100.000 + SPT Masa PPN Rp500.000 = Rp700.000. Rp1,6 juta keliru memakai denda badan Rp1 juta.",
      "legal": "UU KUP Pasal 7 ayat (1)"
    },
    {
      "id": "kup-049",
      "levels": [
        "a",
        "b"
      ],
      "section": "sanksi",
      "kind": "konsep",
      "prompt": "Pihak manakah yang TIDAK termasuk dikecualikan dari denda keterlambatan SPT Pasal 7?",
      "options": [
        "PT yang mengalami rugi fiskal pada tahun pajak tersebut",
        "Orang pribadi yang telah meninggal dunia",
        "Orang pribadi yang tidak lagi melakukan usaha atau pekerjaan bebas",
        "WNA yang tidak lagi bertempat tinggal di Indonesia"
      ],
      "answer": 0,
      "explanation": "Rugi fiskal tidak menghapus kewajiban lapor tepat waktu. Pasal 7 ayat (2) mengecualikan OP meninggal, OP berhenti usaha, WNA yang tidak lagi tinggal di Indonesia, dan kondisi lain yang ditentukan.",
      "legal": "UU KUP Pasal 7 ayat (2)"
    },
    {
      "id": "kup-050",
      "levels": [
        "a",
        "b"
      ],
      "section": "sanksi",
      "kind": "hitung",
      "prompt": "SKPKB Rp60 juta tidak dilunasi sampai 3 bulan setelah jatuh tempo pelunasan. Asumsikan suku bunga acuan 6%. Berapa bunga Pasal 19 ayat (1)?",
      "options": [
        "Rp1.650.000",
        "Rp3.150.000",
        "Rp2.400.000",
        "Rp900.000"
      ],
      "answer": 3,
      "explanation": "Pasal 19 memakai uplift 0%: 6% ÷ 12 = 0,5% per bulan; 3 × 0,5% × Rp60 juta = Rp900.000. Rp1,65 juta keliru memakai uplift 5%; Rp3,15 juta memakai uplift 15%.",
      "legal": "UU KUP Pasal 19 ayat (1)"
    },
    {
      "id": "kup-051",
      "levels": [
        "b"
      ],
      "section": "sanksi",
      "kind": "hitung",
      "prompt": "Selama pemeriksaan, WP mengungkapkan ketidakbenaran SPT dengan kekurangan pajak Rp50 juta. Asumsikan suku bunga acuan 6% dan periode bunga 10 bulan. Berapa bunga Pasal 8 ayat (5)?",
      "options": [
        "Rp4.583.333",
        "Rp8.750.000",
        "Rp6.666.667",
        "Rp50.000.000"
      ],
      "answer": 2,
      "explanation": "Tarif = (6% + 10%) ÷ 12 = 1,3333% per bulan; 10 × 1,3333% × Rp50 juta ≈ Rp6.666.667. Rp4.583.333 memakai uplift 5%; Rp50 juta keliru memakai denda 100% tahap bukti permulaan.",
      "legal": "UU KUP Pasal 8 ayat (5)"
    },
    {
      "id": "kup-052",
      "levels": [
        "a",
        "b"
      ],
      "section": "restitusi",
      "kind": "konsep",
      "prompt": "WP mengajukan permohonan restitusi yang diproses melalui pemeriksaan. DJP belum menerbitkan keputusan setelah 12 bulan sejak permohonan diterima. Apa akibatnya?",
      "options": [
        "Permohonan dianggap ditolak dan WP dapat banding",
        "Permohonan dianggap dikabulkan dan SKPLB terbit paling lama 1 bulan kemudian",
        "Jangka waktu otomatis diperpanjang 6 bulan",
        "WP harus mengajukan permohonan restitusi ulang"
      ],
      "answer": 1,
      "explanation": "Pasal 17B: keputusan paling lama 12 bulan; lewat waktu, permohonan dianggap dikabulkan dan SKPLB diterbitkan paling lama 1 bulan setelah jangka waktu berakhir.",
      "legal": "UU KUP Pasal 17B"
    },
    {
      "id": "kup-053",
      "levels": [
        "b"
      ],
      "section": "restitusi",
      "kind": "konsep",
      "prompt": "WP menerima SKPLB dan masih mempunyai utang pajak yang dapat diperhitungkan. Apa yang dilakukan sebelum dana dikembalikan?",
      "options": [
        "Kelebihan dibayar penuh tanpa melihat utang",
        "Kelebihan dikompensasikan dahulu dengan utang pajak",
        "SKPLB diubah menjadi Surat Teguran",
        "Selisih dikenai denda banding 60%"
      ],
      "answer": 1,
      "explanation": "Pasal 11 ayat (1): kelebihan pembayaran dikembalikan setelah diperhitungkan dengan utang pajak. Sisanya baru dikembalikan.",
      "legal": "UU KUP Pasal 11 ayat (1)"
    },
    {
      "id": "kup-054",
      "levels": [
        "a",
        "b"
      ],
      "section": "restitusi",
      "kind": "konsep",
      "prompt": "Pernyataan manakah yang tepat tentang Surat Keputusan Pengembalian Pendahuluan Kelebihan Pajak (SKPPKP)?",
      "options": [
        "SKPPKP bukan SKP, sehingga DJP tetap dapat memeriksa dan menerbitkan SKPKB",
        "SKPPKP sama dengan SKPLB dan menutup pemeriksaan",
        "SKPPKP hanya terbit setelah pemeriksaan lengkap",
        "SKPPKP dapat diajukan banding langsung"
      ],
      "answer": 0,
      "explanation": "Pengembalian pendahuluan diberikan tanpa pemeriksaan. SKPPKP bukan ketetapan, sehingga DJP masih dapat memeriksa dan menerbitkan SKPKB dengan sanksi kenaikan.",
      "legal": "UU KUP Pasal 17C, 17D"
    },
    {
      "id": "kup-055",
      "levels": [
        "a",
        "b"
      ],
      "section": "restitusi",
      "kind": "kasus",
      "prompt": "Karyawan tanpa usaha atau pekerjaan bebas menyatakan lebih bayar dalam SPT Tahunan karena PPh 21 yang dipotong berlebih. Jalur pengembalian yang tersedia baginya adalah apa?",
      "options": [
        "Pengembalian pendahuluan sebagai PKP berisiko rendah",
        "Restitusi melalui pemeriksaan lengkap 12 bulan sebagai satu-satunya jalur",
        "Pemindahbukuan ke PPh 21 pemberi kerja",
        "Pengembalian pendahuluan sebagai WP persyaratan tertentu (Pasal 17D)"
      ],
      "answer": 3,
      "explanation": "Orang pribadi yang tidak menjalankan usaha atau pekerjaan bebas termasuk WP persyaratan tertentu Pasal 17D. PKP berisiko rendah adalah jalur PPN.",
      "legal": "UU KUP Pasal 17D"
    },
    {
      "id": "kup-056",
      "levels": [
        "a",
        "b"
      ],
      "section": "restitusi",
      "kind": "hitung",
      "prompt": "SKPLB Rp80 juta terbit, tetapi pengembalian baru dilakukan 2 bulan setelah batas waktu pengembalian 1 bulan berakhir. Gunakan tarif imbalan bunga 0,5% per bulan yang diberikan. Berapa imbalan bunganya?",
      "options": [
        "Rp1.200.000",
        "Rp400.000",
        "Rp800.000",
        "Rp1.600.000"
      ],
      "answer": 2,
      "explanation": "Imbalan bunga dihitung sejak batas waktu 1 bulan berakhir sampai pengembalian: 2 × 0,5% × Rp80 juta = Rp800.000. Rp1,2 juta keliru menghitung 3 bulan sejak SKPLB.",
      "legal": "UU KUP Pasal 11 ayat (3)"
    },
    {
      "id": "kup-057",
      "levels": [
        "a",
        "b"
      ],
      "section": "pidana",
      "kind": "konsep",
      "prompt": "Penyidikan atas tindak pidana Pasal 39 UU KUP dapat dihentikan Jaksa Agung atas permintaan Menteri Keuangan bila WP melunasi apa?",
      "options": [
        "Kerugian pendapatan negara ditambah denda 1 kali kerugian",
        "Kerugian pendapatan negara ditambah denda 4 kali kerugian",
        "Kerugian pendapatan negara ditambah denda 3 kali kerugian",
        "Denda 100% tanpa harus melunasi pokok kerugian"
      ],
      "answer": 2,
      "explanation": "Pasal 44B setelah UU HPP: denda 1× untuk Pasal 38, 3× untuk Pasal 39, dan 4× untuk Pasal 39A, di atas pelunasan kerugian.",
      "legal": "UU KUP Pasal 44B"
    },
    {
      "id": "kup-058",
      "levels": [
        "a",
        "b"
      ],
      "section": "pidana",
      "kind": "hitung",
      "prompt": "Penyidikan perkara faktur pajak tidak berdasarkan transaksi sebenarnya (Pasal 39A) menghitung kerugian pendapatan negara Rp500 juta. Berapa total yang harus dilunasi agar penyidikan dihentikan menurut Pasal 44B?",
      "options": [
        "Rp2 miliar",
        "Rp2,5 miliar",
        "Rp2 miliar ditambah bunga",
        "Rp1 miliar"
      ],
      "answer": 1,
      "explanation": "Pelunasan kerugian Rp500 juta + denda 4 × Rp500 juta = Rp2,5 miliar. Rp2 miliar hanya menghitung dendanya.",
      "legal": "UU KUP Pasal 39A dan 44B"
    },
    {
      "id": "kup-059",
      "levels": [
        "a",
        "b"
      ],
      "section": "pidana",
      "kind": "hitung",
      "prompt": "Dalam pemeriksaan bukti permulaan, WP mengungkapkan ketidakbenaran SPT dengan kekurangan pajak Rp200 juta. Berapa total pelunasan agar perkara tidak dilanjutkan ke penyidikan?",
      "options": [
        "Rp400 juta",
        "Rp200 juta",
        "Rp350 juta",
        "Rp800 juta"
      ],
      "answer": 0,
      "explanation": "Pasal 8 ayat (3a): kekurangan Rp200 juta + denda 100% Rp200 juta = Rp400 juta. Rp800 juta keliru memakai pola denda 3× Pasal 44B tahap penyidikan.",
      "legal": "UU KUP Pasal 8 ayat (3) dan (3a)"
    },
    {
      "id": "kup-060",
      "levels": [
        "a",
        "b"
      ],
      "section": "pidana",
      "kind": "konsep",
      "prompt": "Berapa daluwarsa penuntutan tindak pidana perpajakan menurut Pasal 40 UU KUP?",
      "options": [
        "5 tahun sejak saat terutang pajak",
        "10 tahun sejak penyidikan dimulai",
        "12 tahun sejak SPT disampaikan",
        "10 tahun sejak saat terutang atau berakhirnya masa/tahun pajak"
      ],
      "answer": 3,
      "explanation": "Pasal 40: tindak pidana perpajakan tidak dapat dituntut setelah lampau 10 tahun sejak saat terutang atau berakhirnya Masa/Bagian Tahun/Tahun Pajak. 5 tahun adalah daluwarsa penetapan dan penagihan.",
      "legal": "UU KUP Pasal 40"
    }
  ],
  "flashcards": [
    {
      "front": "NPWP orang pribadi penduduk",
      "back": "NIK",
      "levels": [
        "a",
        "b"
      ],
      "section": "npwp-pkp"
    },
    {
      "front": "Format NITKU",
      "back": "22 digit: NPWP 16 digit + 6 digit",
      "levels": [
        "a",
        "b"
      ],
      "section": "npwp-pkp"
    },
    {
      "front": "Batas lapor pengukuhan PKP setelah omzet > Rp4,8 miliar",
      "back": "Akhir tahun buku saat batas terlampaui",
      "levels": [
        "a",
        "b"
      ],
      "section": "npwp-pkp"
    },
    {
      "front": "Setor dan lapor PPh Masa",
      "back": "Setor tgl 15, lapor tgl 20 bulan berikutnya",
      "levels": [
        "a",
        "b"
      ],
      "section": "bayar-lapor"
    },
    {
      "front": "Setor dan lapor PPN Masa",
      "back": "Setor sebelum lapor; lapor akhir bulan berikutnya",
      "levels": [
        "a",
        "b"
      ],
      "section": "bayar-lapor"
    },
    {
      "front": "Batas SPT Tahunan OP / badan",
      "back": "3 bulan / 4 bulan setelah akhir tahun pajak",
      "levels": [
        "a",
        "b"
      ],
      "section": "bayar-lapor"
    },
    {
      "front": "Perpanjangan SPT Tahunan",
      "back": "Paling lama 2 bulan dengan pemberitahuan",
      "levels": [
        "a",
        "b"
      ],
      "section": "bayar-lapor"
    },
    {
      "front": "Kenaikan Pasal 13 ayat (3) setelah UU HPP",
      "back": "75%",
      "levels": [
        "a",
        "b"
      ],
      "section": "stp-skp"
    },
    {
      "front": "Kenaikan SKPKBT",
      "back": "100% dari jumlah kekurangan",
      "levels": [
        "a",
        "b"
      ],
      "section": "stp-skp"
    },
    {
      "front": "Denda STP faktur tidak/terlambat dibuat",
      "back": "1% dari DPP",
      "levels": [
        "a",
        "b"
      ],
      "section": "stp-skp"
    },
    {
      "front": "Daluwarsa penetapan SKP",
      "back": "5 tahun",
      "levels": [
        "a",
        "b"
      ],
      "section": "stp-skp"
    },
    {
      "front": "Jeda jatuh tempo → Surat Teguran → Surat Paksa",
      "back": "7 hari → 21 hari",
      "levels": [
        "a",
        "b"
      ],
      "section": "penagihan"
    },
    {
      "front": "Jeda Surat Paksa diberitahukan → sita",
      "back": "2 × 24 jam",
      "levels": [
        "a",
        "b"
      ],
      "section": "penagihan"
    },
    {
      "front": "Jeda sita → pengumuman lelang → lelang",
      "back": "14 hari → 14 hari",
      "levels": [
        "a",
        "b"
      ],
      "section": "penagihan"
    },
    {
      "front": "Syarat utang untuk penyanderaan/pencegahan",
      "back": "Paling sedikit Rp100 juta; 6 bulan + 6 bulan",
      "levels": [
        "a",
        "b"
      ],
      "section": "penagihan"
    },
    {
      "front": "Tenggat keberatan",
      "back": "3 bulan sejak SKP dikirim",
      "levels": [
        "a",
        "b"
      ],
      "section": "pembetulan-keberatan"
    },
    {
      "front": "Jangka keputusan keberatan",
      "back": "12 bulan; lewat = dianggap dikabulkan",
      "levels": [
        "a",
        "b"
      ],
      "section": "pembetulan-keberatan"
    },
    {
      "front": "Denda keberatan ditolak tanpa banding",
      "back": "30% × (pajak keputusan − bayar sebelum keberatan)",
      "levels": [
        "a",
        "b"
      ],
      "section": "pembetulan-keberatan"
    },
    {
      "front": "Empat huruf Pasal 36 ayat (1)",
      "back": "a sanksi; b SKP tidak benar; c STP tidak benar; d tanpa SPHP/pembahasan akhir",
      "levels": [
        "a",
        "b"
      ],
      "section": "pembetulan-keberatan"
    },
    {
      "front": "Tenggat banding / putusan banding",
      "back": "3 bulan / 12 bulan",
      "levels": [
        "a",
        "b"
      ],
      "section": "sengketa"
    },
    {
      "front": "Tenggat gugatan penagihan / keputusan lain",
      "back": "14 hari / 30 hari",
      "levels": [
        "a",
        "b"
      ],
      "section": "sengketa"
    },
    {
      "front": "Denda banding ditolak/dikabulkan sebagian",
      "back": "60% × (pajak putusan − bayar sebelum keberatan)",
      "levels": [
        "a",
        "b"
      ],
      "section": "sengketa"
    },
    {
      "front": "Batas alih pembinaan Pengadilan Pajak ke MA",
      "back": "31 Desember 2026",
      "levels": [
        "a",
        "b"
      ],
      "section": "sengketa"
    },
    {
      "front": "Jangka simpan dokumen pembukuan",
      "back": "10 tahun di Indonesia",
      "levels": [
        "a",
        "b"
      ],
      "section": "pembukuan"
    },
    {
      "front": "Batas pemberitahuan NPPN",
      "back": "3 bulan pertama tahun pajak",
      "levels": [
        "a",
        "b"
      ],
      "section": "pembukuan"
    },
    {
      "front": "Batas tanggapan SPHP (PMK 15/2025)",
      "back": "5 hari kerja sejak SPHP diterima",
      "levels": [
        "a",
        "b"
      ],
      "section": "pemeriksaan"
    },
    {
      "front": "Pengujian pemeriksaan lengkap / terfokus / spesifik",
      "back": "5 bulan / 3 bulan / 1 bulan",
      "levels": [
        "a",
        "b"
      ],
      "section": "pemeriksaan"
    },
    {
      "front": "Rumus tarif bunga per bulan",
      "back": "(Suku bunga acuan + uplift) ÷ 12",
      "levels": [
        "a",
        "b"
      ],
      "section": "sanksi"
    },
    {
      "front": "Uplift Pasal 19 / 8(2)-9(2a)-14(3) / 8(5) / 13(2)",
      "back": "0% / 5% / 10% / 15%",
      "levels": [
        "a",
        "b"
      ],
      "section": "sanksi"
    },
    {
      "front": "Batas jumlah bulan bunga",
      "back": "24 bulan; bagian bulan = 1 bulan penuh",
      "levels": [
        "a",
        "b"
      ],
      "section": "sanksi"
    },
    {
      "front": "Denda telat lapor: PPN / masa lain / badan / OP",
      "back": "Rp500 rb / Rp100 rb / Rp1 jt / Rp100 rb",
      "levels": [
        "a",
        "b"
      ],
      "section": "sanksi"
    },
    {
      "front": "Jangka keputusan restitusi melalui pemeriksaan",
      "back": "12 bulan; lewat = dianggap dikabulkan",
      "levels": [
        "a",
        "b"
      ],
      "section": "restitusi"
    },
    {
      "front": "Tarif imbalan bunga",
      "back": "Suku bunga acuan ÷ 12",
      "levels": [
        "a",
        "b"
      ],
      "section": "restitusi"
    },
    {
      "front": "Denda Pasal 44B per pasal pidana",
      "back": "38: 1×; 39: 3×; 39A: 4×",
      "levels": [
        "a",
        "b"
      ],
      "section": "pidana"
    },
    {
      "front": "Daluwarsa penuntutan pidana pajak",
      "back": "10 tahun",
      "levels": [
        "a",
        "b"
      ],
      "section": "pidana"
    }
  ]
};

export default content;
