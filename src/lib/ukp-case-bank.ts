import type { UkpLevel, UkpTopic } from "./ukp";

type CaseItem = [
  prompt: string,
  options: [string, string, string, string],
  answer: number,
  explanation: string,
];

export const sharedCaseBank = {
  "bea-meterai": [
    [
      "Dalam satu transaksi Rp8 juta, penjual dan pembeli menandatangani dua rangkap perjanjian. Penjual juga menerbitkan satu kuitansi pembayaran Rp8 juta yang diterima pembeli. Berapa dokumen yang menjadi objek Bea Meterai?",
      [
        "Satu, karena transaksinya hanya satu",
        "Dua, karena kuitansi mengikuti perjanjian",
        "Tiga, yaitu dua rangkap perjanjian dan satu kuitansi",
        "Empat, karena kuitansi ditanggung kedua pihak",
      ],
      2,
      "Nilai transaksi bukan jumlah objek. Kedua rangkap perjanjian merupakan objek tersendiri. Kuitansi juga menjadi objek karena nominalnya lebih dari Rp5 juta. Total pokoknya Rp30.000.",
    ],
    [
      "Tanda terima gaji yang semula bukan objek kemudian diajukan sebagai alat bukti. Dokumen lain berupa perjanjian yang telah terutang sejak ditandatangani tetapi belum dibayar. Bagaimana membedakan keduanya saat pemeteraian kemudian?",
      [
        "Keduanya mendapat sanksi 100%",
        "Tanda terima baru terutang saat diajukan, sedangkan perjanjian yang kurang bayar dapat dikenai sanksi 100%",
        "Keduanya bebas karena sudah ditandatangani",
        "Perjanjian baru terutang saat diajukan, sedangkan tanda terima telah terutang sejak dibuat",
      ],
      1,
      "Tanda terima gaji pada kasus ini baru menjadi objek saat dipakai sebagai alat bukti. Untuk perjanjian, kewajiban sudah timbul saat ditandatangani, sehingga pemeteraian kemudian atas kekurangan dapat mencakup pokok dan sanksi.",
    ],
    [
      "Pengusaha menerima akta notaris dan kuitansi pembayaran tepat Rp5 juta. Keduanya akan disimpan sebagai arsip biasa. Dokumen mana yang terutang?",
      ["Keduanya", "Hanya kuitansi", "Tidak ada yang terutang", "Hanya akta notaris"],
      3,
      "Akta notaris adalah objek berdasarkan jenis dokumennya. Kuitansi tepat Rp5 juta belum melewati ambang lebih dari Rp5 juta, dan dalam kasus ini tidak dipakai sebagai alat bukti.",
    ],
  ],
  kup: [
    [
      "Wajib pajak menerima keputusan keberatan yang hanya mengabulkan sebagian permohonannya. Ia ingin menguji substansi keputusan tersebut. Tindakan dan tenggat umum mana yang sesuai?",
      [
        "Ajukan banding dalam tiga bulan sejak keputusan diterima",
        "Ajukan gugatan penagihan dalam 14 hari sejak keputusan diterima",
        "Ajukan keberatan kedua dalam tiga bulan sejak keputusan diterima",
        "Ajukan peninjauan kembali langsung ke Mahkamah Agung",
      ],
      0,
      "Banding menguji keputusan keberatan. Tenggat umum dihitung tiga bulan sejak keputusan diterima. Gugatan penagihan menyasar pelaksanaan penagihan, sedangkan peninjauan kembali berkaitan dengan putusan pengadilan.",
    ],
    [
      "Seorang wajib pajak membetulkan sendiri SPT Tahunan sebelum pemeriksaan sehingga pajak kurang bayar bertambah Rp40 juta. Jika tarif bunga pembetulan dalam soal 1,2% per bulan dan periode yang diperhitungkan lima bulan, berapa total tambahan pokok dan bunga?",
      ["Rp40,48 juta", "Rp42,4 juta", "Rp46 juta", "Rp60 juta"],
      1,
      "Bunga = Rp40 juta × 1,2% × 5 = Rp2,4 juta. Tambahkan pokok Rp40 juta sehingga totalnya Rp42,4 juta. Tarif 1,2% merupakan asumsi soal.",
    ],
    [
      "Ada dua dokumen yang hendak disengketakan. Pertama, SKP dengan kesalahan penjumlahan murni. Kedua, keputusan keberatan yang substansinya diperselisihkan. Pasangan tindakan mana yang sesuai?",
      [
        "Keberatan untuk keduanya",
        "Gugatan untuk keduanya",
        "Pembetulan untuk dokumen pertama dan banding untuk dokumen kedua",
        "Banding untuk dokumen pertama dan pembetulan untuk dokumen kedua",
      ],
      2,
      "Pembetulan dapat dipakai untuk salah hitung. Banding menjadi jalur untuk menguji keputusan keberatan yang substansinya masih disengketakan.",
    ],
  ],
  "pph-orang-pribadi": [
    [
      "Seorang tenaga ahli berstatus TK/0 boleh memakai NPPN 40%. Bruto Rp650 juta, kredit PPh nonfinal Rp12 juta, dan tidak ada penghasilan lain. Berapa PPh kurang bayar?",
      ["Rp24,9 juta", "Rp18,9 juta", "Rp15,9 juta", "Rp12,9 juta"],
      3,
      "Neto = 40% × Rp650 juta = Rp260 juta. PKP = Rp260 juta − Rp54 juta = Rp206 juta. PPh terutang = 5% × Rp60 juta + 15% × Rp146 juta = Rp24,9 juta. Setelah kredit Rp12 juta, kurang bayar Rp12,9 juta.",
    ],
    [
      "WP K/1 memiliki penghasilan neto Rp272 juta dari usaha umum dan bunga deposito Rp20 juta yang sudah dikenai PPh final. Tanpa kredit atau penyesuaian lain, berapa PPh tarif umum?",
      ["Rp25,35 juta", "Rp28,35 juta", "Rp31,8 juta", "Rp34,8 juta"],
      0,
      "Pisahkan bunga deposito final. PTKP K/1 Rp63 juta, jadi PKP Rp209 juta. PPh umum = 5% × Rp60 juta + 15% × Rp149 juta = Rp25,35 juta.",
    ],
    [
      "Pasangan berstatus PH memiliki neto Rp360 juta dan Rp240 juta. Status gabungan K/I/0, tanpa kredit. Berapa bagian PPh pihak dengan neto Rp240 juta?",
      ["Rp30,55 juta", "Rp48,75 juta", "Rp36,35 juta", "Rp81,25 juta"],
      2,
      "PTKP gabungan Rp112,5 juta dan PKP Rp487,5 juta. Pajak gabungan Rp3 juta + Rp28,5 juta + Rp59,375 juta = Rp90,875 juta. Bagian neto Rp240 juta adalah 40% × Rp90,875 juta = Rp36,35 juta.",
    ],
  ],
  "pph-potong-pungut": [
    [
      "Pegawai tetap menerima gaji bruto Rp12 juta dan bonus Rp8 juta pada masa sebelum masa pajak terakhir. Soal menetapkan TER untuk bruto Rp20 juta sebesar 8% dan untuk bruto Rp12 juta sebesar 4%. Berapa PPh 21 bulan tersebut?",
      ["Rp800 ribu", "Rp1,6 juta", "Rp1,12 juta", "Rp480 ribu"],
      1,
      "Gabungkan gaji dan bonus sebelum memilih TER. Bruto Rp20 juta dikenai 8%, sehingga PPh 21 adalah Rp1,6 juta. Tarif TER dalam kasus ini sudah diberikan.",
    ],
    [
      "Sebuah badan membayar konsultan orang pribadi Rp40 juta sekali bayar dan badan penyedia jasa manajemen Rp40 juta. Untuk orang pribadi, 50% bruto menjadi DPP dan seluruhnya masuk lapisan 5%. Berapa potongan atas masing-masing pembayaran jika seluruh syarat umum terpenuhi?",
      [
        "PPh 21 Rp2 juta dan PPh 23 Rp800 ribu",
        "PPh 21 Rp1 juta dan PPh 23 Rp6 juta",
        "PPh 21 Rp1 juta dan PPh 23 Rp800 ribu",
        "Keduanya PPh 23 Rp800 ribu",
      ],
      2,
      "Jasa orang pribadi pada kasus ini dipotong PPh 21 sebesar 5% × 50% × Rp40 juta = Rp1 juta. Jasa manajemen kepada badan dipotong PPh 23 sebesar 2% × Rp40 juta = Rp800 ribu.",
    ],
    [
      "Perusahaan menyewa gudang Rp120 juta dan forklift Rp50 juta, dengan dasar potong masing-masing sesuai nilai itu. Penyedia dalam negeri ber-NPWP. Berapa total PPh yang dipotong?",
      ["Rp3,4 juta", "Rp17 juta", "Rp12 juta", "Rp13 juta"],
      3,
      "Sewa gudang masuk PPh final Pasal 4 ayat (2) sebesar Rp12 juta. Sewa forklift masuk PPh 23 sebesar Rp1 juta. Total potongan Rp13 juta.",
    ],
  ],
  ppn: [
    [
      "PKP menerima uang muka Rp50 juta di April untuk penjualan barang nonmewah Rp200 juta, sebelum PPN. Barang diserahkan dan sisanya dibayar di Mei. Bagaimana alokasi PPN pada skema umum nonmewah?",
      [
        "April Rp5,5 juta dan Mei Rp16,5 juta",
        "April nihil dan Mei Rp22 juta",
        "April Rp22 juta dan Mei nihil",
        "April Rp6 juta dan Mei Rp18 juta",
      ],
      0,
      "Faktur uang muka dibuat saat uang muka diterima. PPN efektif 11% × Rp50 juta = Rp5,5 juta di April. Sisa dasar Rp150 juta menghasilkan PPN Rp16,5 juta di Mei.",
    ],
    [
      "Dalam satu masa, PKP menjual barang nonmewah Rp240 juta dan barang mewah dalam cakupan PPnBM Rp100 juta, sebelum pajak. Pajak Masukan yang memenuhi syarat Rp20 juta. Abaikan PPnBM. Berapa PPN kurang bayar?",
      ["Rp17,4 juta", "Rp18,4 juta", "Rp20,8 juta", "Rp38,4 juta"],
      1,
      "Pajak Keluaran nonmewah Rp26,4 juta dan mewah Rp12 juta, total Rp38,4 juta. Kurangi Pajak Masukan Rp20 juta, sehingga kurang bayar Rp18,4 juta.",
    ],
    [
      "Pajak Keluaran sebelum retur Rp33 juta. Pembeli mengembalikan barang nonmewah senilai Rp40 juta sebelum pajak dengan nota retur yang sah dalam masa yang sama. Pajak Masukan yang dapat dikreditkan Rp20 juta. Berapa PPN kurang bayar?",
      ["Rp13 juta", "Rp17,4 juta", "Rp8,6 juta", "Rp28,6 juta"],
      2,
      "Retur mengurangi Pajak Keluaran sebesar 11% × Rp40 juta = Rp4,4 juta. PPN kurang bayar = Rp33 juta − Rp4,4 juta − Rp20 juta = Rp8,6 juta.",
    ],
  ],
  "pbb-p5l": [
    [
      "Perkebunan memiliki areal produktif 25 ha dengan NJOP tanah Rp18.000/m², investasi tanaman Rp1,5 miliar, dan NJOP bangunan Rp1 miliar. Abaikan komponen lain dan NJOPTKP. Dengan NJKP 40% dan tarif 0,5%, berapa PBB?",
      ["Rp14 juta", "Rp35 juta", "Rp12 juta", "Rp2,8 juta"],
      0,
      "25 ha = 250.000 m². NJOP tanah Rp4,5 miliar, ditambah tanaman Rp1,5 miliar dan bangunan Rp1 miliar menjadi Rp7 miliar. PBB = Rp7 miliar × 40% × 0,5% = Rp14 juta.",
    ],
    [
      "Satu WP punya dua objek perkebunan dengan NJOP Rp8,012 miliar dan Rp3 miliar. NJOPTKP Rp12 juta dipakai sekali pada objek terbesar. Jika NJKP keduanya 40% dan tarifnya 0,5%, berapa total PBB?",
      ["Rp22,024 juta", "Rp22 juta", "Rp55 juta", "Rp21,976 juta"],
      1,
      "Dasar gabungan setelah pengurangan sekali adalah Rp8 miliar + Rp3 miliar = Rp11 miliar. PBB = Rp11 miliar × 40% × 0,5% = Rp22 juta.",
    ],
    [
      "SPPT objek pertama memuat kesalahan hitung. Objek kedua terkena bencana sehingga WP ingin meminta keringanan pokok. Pasangan tindakan mana yang sesuai?",
      [
        "Pengurangan untuk keduanya",
        "Keberatan untuk keduanya",
        "Pembetulan untuk objek pertama dan permohonan pengurangan PBB untuk objek kedua",
        "Pembatalan untuk objek pertama dan banding langsung untuk objek kedua",
      ],
      2,
      "Salah hitung sesuai jalur pembetulan. Keringanan karena bencana dibahas melalui pengurangan PBB, dengan syarat permohonan tersendiri.",
    ],
  ],
  "akuntansi-perpajakan": [
    [
      "Laba komersial Rp720 juta mencakup bunga deposito final Rp40 juta. Ada biaya tidak boleh dikurangkan Rp30 juta dan penyusutan fiskal lebih besar Rp20 juta. Kompensasi rugi tersedia Rp50 juta. Berapa PKP?",
      ["Rp690 juta", "Rp680 juta", "Rp660 juta", "Rp640 juta"],
      3,
      "PKP = Rp720 juta − Rp40 juta + Rp30 juta − Rp20 juta − Rp50 juta = Rp640 juta. Penghasilan final dan tambahan penyusutan fiskal mengurangi laba fiskal.",
    ],
    [
      "Satu aset mempunyai nilai tercatat komersial Rp250 juta dan dasar pajak Rp200 juta. Dengan tarif 22% serta tanpa pengecualian pengakuan, berapa pajak tangguhan dari selisih itu?",
      [
        "Liabilitas pajak tangguhan Rp11 juta",
        "Aset pajak tangguhan Rp11 juta",
        "Liabilitas pajak tangguhan Rp55 juta",
        "Tidak ada karena beda tetap",
      ],
      0,
      "Untuk aset, nilai tercatat di atas dasar pajak menimbulkan beda temporer kena pajak Rp50 juta. Liabilitas pajak tangguhan = 22% × Rp50 juta = Rp11 juta.",
    ],
    [
      "Penyedia jasa mengakui pendapatan Rp125 juta dan menerima kas Rp122,5 juta setelah dipotong PPh 23 nonfinal. Abaikan PPN. Jurnal mana yang tepat bagi penyedia?",
      [
        "Debit kas Rp125 juta, kredit pendapatan Rp122,5 juta dan utang pajak Rp2,5 juta",
        "Debit kas Rp122,5 juta dan pajak dibayar di muka Rp2,5 juta, kredit pendapatan Rp125 juta",
        "Debit kas Rp122,5 juta, kredit pendapatan Rp122,5 juta",
        "Debit kas Rp122,5 juta dan beban pajak final Rp2,5 juta, kredit pendapatan Rp125 juta",
      ],
      1,
      "Potongan nonfinal merupakan kredit pajak sehingga dicatat sebagai pajak dibayar di muka. Pendapatan dicatat sebesar nilai bruto.",
    ],
  ],
  "pph-badan": [
    [
      "Badan dengan omzet Rp16 miliar mempunyai PKP Rp2 miliar dan berhak atas Pasal 31E. Kredit pajaknya Rp220 juta. Berapa PPh 29?",
      ["Rp220 juta", "Rp154 juta", "Rp374 juta", "Rp88 juta"],
      1,
      "PKP fasilitas = 4,8/16 × Rp2 miliar = Rp600 juta. PPh terutang = 11% × Rp600 juta + 22% × Rp1,4 miliar = Rp374 juta. Kurangi kredit Rp220 juta, tersisa PPh 29 Rp154 juta.",
    ],
    [
      "Badan membeli mesin kelompok 1 seharga Rp240 juta pada Juli dan langsung menggunakannya. Metode garis lurus 25%, tanpa persetujuan penundaan. Mesin tidak dijual. Berapa penyusutan fiskal Juli–Desember?",
      ["Rp60 juta", "Rp25 juta", "Rp30 juta", "Rp120 juta"],
      2,
      "Penyusutan setahun Rp240 juta × 25% = Rp60 juta. Enam bulan sejak Juli menghasilkan 6/12 × Rp60 juta = Rp30 juta.",
    ],
    [
      "Pada akhir 2025, badan masih memiliki rugi fiskal biasa dari 2020 sebesar Rp80 juta dan dari 2022 sebesar Rp140 juta. Jika laba fiskal sebelum kompensasi tahun 2026 Rp220 juta dan tidak ada fasilitas khusus, berapa PKP?",
      ["Nihil", "Rp220 juta", "Rp140 juta", "Rp80 juta"],
      3,
      "Rugi 2020 hanya bisa digunakan sampai 2025. Rugi 2022 masih tersedia dalam jangka umum, sehingga PKP 2026 = Rp220 juta − Rp140 juta = Rp80 juta.",
    ],
  ],
} satisfies Record<UkpTopic, CaseItem[]>;

export const levelCaseBank: Record<UkpLevel, Partial<Record<UkpTopic, CaseItem[]>>> = {
  a: {
    "bea-meterai": [
      [
        "Pemungut yang ditunjuk memungut Bea Meterai atas 120 dokumen selama September. Seluruh dokumen terutang dengan tarif Rp10.000. Berapa setoran dan kapan batas umum setor serta lapor?",
        [
          "Rp1,2 juta, 15 Oktober",
          "Rp120 ribu, 15 Oktober",
          "Rp1,2 juta, 20 Oktober",
          "Rp1,2 juta, akhir Oktober",
        ],
        0,
        "120 × Rp10.000 = Rp1,2 juta. Ketentuan umum penyetoran dan pelaporan pemungut adalah tanggal 15 bulan berikutnya.",
      ],
    ],
    kup: [
      [
        "Pengusaha dengan tahun buku Januari–Desember melampaui ambang pengusaha kecil Rp4,8 miliar pada Juli. Jika tidak ada keadaan khusus, kapan batas pelaporan usaha untuk pengukuhan PKP menurut acuan latihan?",
        [
          "Akhir Agustus",
          "Akhir Juli",
          "Akhir Desember tahun buku tersebut",
          "Akhir Maret tahun berikutnya",
        ],
        2,
        "PMK 164/2023 menggunakan batas akhir tahun buku ketika ambang dilampaui. Akhir bulan berikutnya merupakan pola aturan lama.",
      ],
    ],
    "pph-orang-pribadi": [
      [
        "Pedagang yang memenuhi skema PPh final 0,5% mempunyai omzet kumulatif Rp480 juta sampai Juli. Omzet Agustus Rp80 juta. Berapa PPh final atas omzet Agustus?",
        ["Rp400 ribu", "Rp300 ribu", "Rp100 ribu", "Nihil"],
        1,
        "Rp20 juta pertama dari omzet Agustus masih mengisi batas Rp500 juta. Sisa Rp60 juta dikenai 0,5%, sehingga pajak Agustus Rp300 ribu.",
      ],
    ],
    "pph-potong-pungut": [
      [
        "PPh 21 tahunan pegawai tetap yang bekerja sampai Desember adalah Rp14,2 juta. Potongan Januari–November berjumlah Rp11,5 juta. Gaji Desember jika dipakai dengan TER akan menghasilkan Rp1,5 juta. Berapa potongan masa terakhir?",
        ["Rp1,5 juta", "Rp4,2 juta", "Rp14,2 juta", "Rp2,7 juta"],
        3,
        "Gunakan rekonsiliasi tahunan di masa terakhir. Rp14,2 juta − Rp11,5 juta = Rp2,7 juta. Angka TER Desember pada soal menjadi pengecoh.",
      ],
    ],
    ppn: [
      [
        "PKP orang pribadi memiliki Pajak Keluaran Rp40 juta, Pajak Masukan yang dapat dikreditkan Rp29 juta, dan kompensasi lebih bayar dari masa sebelumnya Rp3 juta. Berapa yang harus disetor sebelum lapor?",
        ["Rp8 juta", "Rp11 juta", "Rp14 juta", "Rp37 juta"],
        0,
        "Kurangi Pajak Keluaran dengan Pajak Masukan dan kompensasi: Rp40 juta − Rp29 juta − Rp3 juta = Rp8 juta.",
      ],
    ],
  },
  b: {
    kup: [
      [
        "Wajib pajak telah membayar Rp40 juta sebelum keberatan. Setelah banding, pajak menurut putusan Rp130 juta dan ketentuan denda banding 60% berlaku. Berapa dendanya?",
        ["Rp78 juta", "Rp27 juta", "Rp54 juta", "Rp90 juta"],
        2,
        "Dasar denda adalah Rp130 juta − Rp40 juta = Rp90 juta. Denda = 60% × Rp90 juta = Rp54 juta.",
      ],
    ],
    "bea-meterai": [
      [
        "Dua kontrak dibuat di luar Indonesia pada Februari. Kontrak pertama dipakai di Indonesia pada April, sedangkan kontrak kedua belum dipakai di Indonesia. Jika satu dokumen untuk masing-masing kontrak, berapa pokok yang telah terutang pada akhir April?",
        [
          "Rp20.000 sejak Februari",
          "Rp10.000 atas kontrak pertama pada April",
          "Rp10.000 sejak kontrak pertama ditandatangani",
          "Nihil karena kedua kontrak dibuat di luar negeri",
        ],
        1,
        "Saat terutang dokumen yang dibuat di luar negeri adalah ketika dipakai di Indonesia. Pada akhir April baru kontrak pertama memenuhi kondisi itu.",
      ],
    ],
    "pbb-p5l": [
      [
        "Areal produktif kebun 12 ha mempunyai NJOP tanah Rp25.000/m² dan biaya investasi tanaman Rp800 juta. Areal pengaman 2 ha bernilai Rp10.000/m². Jika tidak ada komponen lain, berapa total NJOP?",
        ["Rp3 miliar", "Rp3,8 miliar", "Rp3,2 miliar", "Rp4 miliar"],
        3,
        "NJOP tanah produktif Rp3 miliar, investasi tanaman Rp800 juta, dan areal pengaman Rp200 juta. Total Rp4 miliar.",
      ],
    ],
    "akuntansi-perpajakan": [
      [
        "Dalam laba komersial ada biaya pribadi pemegang saham Rp30 juta, selisih penyusutan komersial di atas fiskal Rp40 juta, dan penghasilan final Rp10 juta. Berapa koreksi bersih dan selisih mana yang dapat menimbulkan pajak tangguhan?",
        [
          "Koreksi positif bersih Rp60 juta, dengan selisih penyusutan sebagai beda waktu",
          "Koreksi positif Rp80 juta, dengan biaya pribadi sebagai beda waktu",
          "Koreksi negatif Rp60 juta, dengan penghasilan final sebagai beda waktu",
          "Koreksi positif Rp20 juta, tanpa beda waktu",
        ],
        0,
        "Koreksi bersih = Rp30 juta + Rp40 juta − Rp10 juta = positif Rp60 juta. Selisih waktu pembebanan penyusutan dapat berbalik dan menimbulkan pajak tangguhan.",
      ],
    ],
    "pph-badan": [
      [
        "Laba komersial Rp1,1 miliar mencakup pendapatan final Rp100 juta. Biaya nondeductible Rp70 juta, kompensasi rugi Rp70 juta, dan kredit pajak Rp155 juta. Dengan tarif umum 22% tanpa fasilitas, berapa PPh 29?",
        ["Rp242 juta", "Rp87 juta", "Rp65 juta", "Rp220 juta"],
        2,
        "PKP = Rp1,1 miliar − Rp100 juta + Rp70 juta − Rp70 juta = Rp1 miliar. PPh terutang Rp220 juta. Setelah kredit Rp155 juta, kurang bayar Rp65 juta.",
      ],
    ],
    "pph-orang-pribadi": [
      [
        "Seorang pengguna NPPN dengan norma 40% beromzet Rp1 miliar dan berstatus TK/0. Ia mengeluarkan biaya riil Rp180 juta. Tanpa penyesuaian lain, berapa PPh sebelum kredit?",
        ["Rp55,5 juta", "Rp28,9 juta", "Rp31,5 juta", "Rp45 juta"],
        0,
        "Neto Rp400 juta dan PKP Rp346 juta. Biaya riil tidak dikurangkan dalam NPPN. PPh = Rp3 juta + Rp28,5 juta + 25% × Rp96 juta = Rp55,5 juta.",
      ],
    ],
    "pph-potong-pungut": [
      [
        "Importir dengan API memasukkan barang kategori umum. CIF Rp400 juta, bea masuk Rp40 juta, dan pungutan kepabeanan lain yang masuk nilai impor Rp10 juta. Dengan tarif 2,5%, berapa PPh 22 impor?",
        ["Rp10 juta", "Rp11 juta", "Rp11,25 juta", "Rp33,75 juta"],
        2,
        "Nilai impor = Rp400 juta + Rp40 juta + Rp10 juta = Rp450 juta. PPh 22 = 2,5% × Rp450 juta = Rp11,25 juta.",
      ],
    ],
    ppn: [
      [
        "PKP memiliki Pajak Masukan khusus penyerahan terutang Rp16 juta, khusus penyerahan dibebaskan Rp8 juta, dan bersama Rp40 juta. Proporsi penyerahan terutang adalah 75%. Dengan pedoman sebanding dalam soal, berapa yang dapat dikreditkan?",
        ["Rp30 juta", "Rp54 juta", "Rp64 juta", "Rp46 juta"],
        3,
        "Kreditkan Rp16 juta yang khusus penyerahan terutang dan 75% × Rp40 juta = Rp30 juta dari yang bersama. Total Rp46 juta. Rp8 juta khusus penyerahan dibebaskan tidak ikut.",
      ],
    ],
  },
};
