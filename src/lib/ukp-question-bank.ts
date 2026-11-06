import type { UkpLevel, UkpTopic } from "./ukp";

type Item = [
  prompt: string,
  options: [string, string, string, string],
  answer: number,
  explanation: string,
];

export const sharedQuestionBank = {
  "bea-meterai": [
    [
      "Perusahaan membuat empat perjanjian yang masing-masing disimpan dalam dua rangkap, satu untuk tiap pihak. Berapa total Bea Meterai untuk semua rangkap?",
      ["Rp40.000", "Rp80.000", "Rp20.000", "Rp160.000"],
      1,
      "Empat perjanjian × dua rangkap × Rp10.000 = Rp80.000.",
    ],
    [
      "Dokumen yang semula bukan objek akan diajukan sebagai alat bukti. Kapan Bea Meterai terutang dan siapa yang menanggungnya?",
      [
        "Saat dokumen dibuat, oleh pembuat",
        "Saat dokumen ditandatangani, oleh penerima",
        "Saat putusan dibacakan, oleh pengadilan",
        "Saat dokumen diajukan, oleh pihak yang mengajukan",
      ],
      3,
      "Pengajuan sebagai alat bukti memicu saat terutang. Pihak yang mengajukan menanggung Bea Meterai.",
    ],
    [
      "Dokumen perjanjian yang sejak awal terutang Rp10.000 belum dilunasi. Berapa total jika diproses melalui pemeteraian kemudian dengan sanksi 100%?",
      ["Rp20.000", "Rp10.000", "Rp15.000", "Rp100.000"],
      0,
      "Pokok Rp10.000 ditambah sanksi 100% dari pokok, sehingga totalnya Rp20.000.",
    ],
    [
      "Sebuah surat pernyataan menjadi objek Bea Meterai. Kapan saat terutangnya menurut tabel booklet?",
      [
        "Saat dicetak",
        "Saat dilaporkan ke DJP",
        "Saat diserahkan kepada pihak yang dituju",
        "Saat tanggal pada surat berakhir",
      ],
      2,
      "Untuk surat pernyataan, saat terutang adalah ketika dokumen diserahkan kepada pihak yang dituju.",
    ],
    [
      "Manakah dokumen yang dikelompokkan sebagai bukan objek Bea Meterai dalam booklet?",
      ["Akta notaris", "Tanda terima gaji", "Surat perjanjian", "Dokumen lelang"],
      1,
      "Tanda terima gaji termasuk dokumen yang bukan objek. Akta, perjanjian, dan dokumen lelang termasuk kategori objek.",
    ],
  ],
  kup: [
    [
      "DJP menemukan pajak kurang dibayar dalam pemeriksaan pertama. Dokumen apa yang menetapkan kekurangan itu?",
      ["SKPLB", "SKPN", "SKPKB", "Surat Teguran"],
      2,
      "SKPKB menetapkan kurang bayar hasil pemeriksaan. SKPKBT digunakan ketika ada dasar tambahan seperti data baru setelah ketetapan.",
    ],
    [
      "Wajib pajak ingin menggugat pelaksanaan penagihan. Tenggat mana yang dipakai pada kasus ini?",
      ["14 hari", "30 hari", "3 bulan", "6 bulan"],
      0,
      "Gugatan atas pelaksanaan penagihan memakai 14 hari. Gugatan atas keputusan lain pada umumnya memakai 30 hari.",
    ],
    [
      "SPT Masa PPN dan SPT Tahunan badan sama-sama terlambat dilaporkan. Berapa jumlah denda lapor kedua SPT menurut booklet?",
      ["Rp600.000", "Rp1.100.000", "Rp500.000", "Rp1.500.000"],
      3,
      "Denda SPT Masa PPN Rp500.000 ditambah denda SPT Tahunan badan Rp1.000.000.",
    ],
    [
      "Telat bayar atas pokok Rp20 juta selama dua bulan lebih satu hari. Jika soal memberi bunga 1% per bulan dan tidak ada pengecualian, berapa bunganya?",
      ["Rp200.000", "Rp600.000", "Rp400.000", "Rp2.000.000"],
      1,
      "Bagian bulan dihitung sebagai satu bulan penuh. Bunga = 3 × 1% × Rp20 juta = Rp600.000.",
    ],
    [
      "Kredit pajak dalam pemeriksaan sama persis dengan pajak terutang. Apa jenis ketetapannya?",
      ["SKPLB", "SKPKBT", "SKPN", "SKPKB"],
      2,
      "SKPN menetapkan pajak nihil ketika kredit dan pajak terutang sama.",
    ],
  ],
  "pph-orang-pribadi": [
    [
      "Wajib pajak berstatus TK/0 memiliki penghasilan neto setahun Rp124 juta tanpa penyesuaian lain. Berapa PPh sebelum kredit?",
      ["Rp3,5 juta", "Rp4,5 juta", "Rp10,5 juta", "Rp6,2 juta"],
      1,
      "PKP = Rp124 juta − Rp54 juta = Rp70 juta. Pajak = 5% × Rp60 juta + 15% × Rp10 juta = Rp4,5 juta.",
    ],
    [
      "Pengusaha orang pribadi yang menggunakan NPPN membayar biaya operasional Rp80 juta. Bagaimana perlakuannya saat menghitung neto dengan norma?",
      [
        "Dikurangkan dari hasil norma",
        "Dikurangkan hanya separuh",
        "Ditambahkan pada bruto",
        "Biaya riil tidak dikurangkan lagi",
      ],
      3,
      "Neto dihitung dengan persentase norma dikalikan bruto. Biaya riil tidak diperhitungkan lagi dalam langkah ini.",
    ],
    [
      "Dalam skema pisah harta, neto suami Rp300 juta dan neto istri Rp200 juta. Pajak gabungan Rp60 juta. Berapa bagian pajak istri?",
      ["Rp24 juta", "Rp36 juta", "Rp30 juta", "Rp12 juta"],
      0,
      "Bagian istri = Rp200 juta ÷ Rp500 juta × Rp60 juta = Rp24 juta.",
    ],
    [
      "Wajib pajak mengaku empat tanggungan yang semuanya memenuhi hubungan keluarga yang disyaratkan. Berapa tanggungan paling banyak yang diperhitungkan untuk PTKP?",
      ["1", "2", "3", "4"],
      2,
      "Tambahan PTKP diberikan untuk paling banyak tiga tanggungan.",
    ],
    [
      "Penghasilan neto fiskal Rp155.432.900 dengan PTKP Rp54 juta dan tanpa kompensasi rugi. Berapa PKP setelah pembulatan?",
      ["Rp101.433.000", "Rp101.432.000", "Rp101.000.000", "Rp155.432.000"],
      1,
      "Selisihnya Rp101.432.900. PKP dibulatkan ke bawah dalam ribuan rupiah penuh.",
    ],
  ],
  "pph-potong-pungut": [
    [
      "Pegawai tetap berpenghasilan bruto Rp10 juta dan mendapat THR Rp5 juta pada bulan biasa. Berapa bruto yang digunakan untuk memilih dan menerapkan TER bulan itu?",
      ["Rp5 juta", "Rp10 juta", "Rp12,5 juta", "Rp15 juta"],
      3,
      "Gabungkan gaji dan THR pada bulan pembayaran, sehingga bruto masa tersebut Rp15 juta.",
    ],
    [
      "Satu pembayaran jasa kepada bukan pegawai sebesar Rp12 juta. Berapa dasar pengenaan PPh 21 menurut skema 50% bruto pada booklet?",
      ["Rp6 juta", "Rp12 juta", "Rp3 juta", "Rp600 ribu"],
      0,
      "Dasar pengenaan untuk bukan pegawai pada skema ini 50% × Rp12 juta = Rp6 juta.",
    ],
    [
      "Gedung disewa Rp150 juta termasuk seluruh komponen yang menjadi dasar pajak. Berapa PPh final sewanya?",
      ["Rp3 juta", "Rp22,5 juta", "Rp15 juta", "Rp30 juta"],
      2,
      "Sewa tanah atau bangunan dikenai PPh final 10%. Sepuluh persen dari Rp150 juta adalah Rp15 juta.",
    ],
    [
      "Pegawai mendapat makanan yang disediakan untuk seluruh pegawai dan memenuhi ketentuan pengecualian natura. Bagaimana perlakuannya?",
      [
        "Wajib dikenai PPh 26",
        "Dikecualikan sebagai objek PPh bagi penerima",
        "Selalu dikenai PPh 21 final",
        "Dipungut sebagai PPh 22",
      ],
      1,
      "Makanan bagi seluruh pegawai merupakan contoh pengecualian natura bila persyaratannya terpenuhi.",
    ],
    [
      "Masa pajak terakhir menunjukkan PPh 21 setahun Rp8 juta. Potongan masa sebelumnya Rp6,7 juta. Berapa potongan masa terakhir?",
      ["Rp8 juta", "Rp6,7 juta", "Rp14,7 juta", "Rp1,3 juta"],
      3,
      "Pada masa terakhir, kurangi PPh setahun dengan jumlah yang sudah dipotong: Rp8 juta − Rp6,7 juta = Rp1,3 juta.",
    ],
  ],
  ppn: [
    [
      "Harga jual barang mewah yang masuk cakupan PPnBM adalah Rp300 juta. Berapa PPN jika DPP memakai harga penuh? Abaikan PPnBM.",
      ["Rp33 juta", "Rp36 juta", "Rp30 juta", "Rp39,6 juta"],
      1,
      "PPN = 12% × Rp300 juta = Rp36 juta. Rumus DPP 11/12 pada contoh nonmewah tidak diterapkan.",
    ],
    [
      "Pajak Keluaran Rp18 juta, Pajak Masukan yang dapat dikreditkan Rp20 juta, dan tidak ada kompensasi. Bagaimana posisi masa itu?",
      ["Kurang bayar Rp2 juta", "Nihil", "Kurang bayar Rp38 juta", "Lebih bayar Rp2 juta"],
      3,
      "Pajak Masukan yang dapat dikreditkan melebihi Pajak Keluaran sebesar Rp2 juta.",
    ],
    [
      "PKP menjual barang kepada pemungut PPN dan transaksi memenuhi syarat pemungutan. Apa yang masih dilakukan PKP rekanan?",
      [
        "Menerbitkan faktur dan melaporkan transaksi",
        "Menyetor PPN yang sama sekali lagi",
        "Menghapus transaksi dari SPT Masa",
        "Mengganti faktur dengan kuitansi biasa",
      ],
      0,
      "Pemungut menyetor PPN. Rekanan tetap menerbitkan faktur dan melaporkan transaksi.",
    ],
    [
      "Faktur Pajak wajib dibuat tetapi terlambat. Jika DPP Rp120 juta, berapa denda 1% yang dicontohkan booklet?",
      ["Rp120 ribu", "Rp2,4 juta", "Rp1,2 juta", "Rp12 juta"],
      2,
      "Denda = 1% × Rp120 juta = Rp1,2 juta.",
    ],
    [
      "Penyerahan mendapat fasilitas PPN tidak dipungut. Apa perlakuan Pajak Masukannya jika syarat kredit terpenuhi?",
      [
        "Selalu menjadi biaya",
        "Dapat dikreditkan",
        "Hanya 10% dapat dikreditkan",
        "Harus ditangguhkan tiga tahun",
      ],
      1,
      "Dalam fasilitas PPN tidak dipungut, Pajak Masukan dapat dikreditkan bila syaratnya terpenuhi.",
    ],
  ],
  "pbb-p5l": [
    [
      "Areal perkebunan produktif seluas 18 hektare. Berapa luas dalam meter persegi untuk penghitungan NJOP?",
      ["18.000 m²", "1.800.000 m²", "180.000 m²", "1.800 m²"],
      2,
      "Satu hektare setara 10.000 m², sehingga 18 hektare = 180.000 m².",
    ],
    [
      "NJOP perkebunan Rp10,012 miliar dan NJOPTKP Rp12 juta. Dengan NJKP 40% dan tarif 0,5%, berapa PBB?",
      ["Rp20 juta", "Rp50 juta", "Rp40 juta", "Rp2 juta"],
      0,
      "Dasar setelah NJOPTKP = Rp10 miliar. NJKP = Rp4 miliar. PBB = 0,5% × Rp4 miliar = Rp20 juta.",
    ],
    [
      "Bencana menimbulkan kerusakan berat atas objek PBB-P5L. Jalur mana yang dibahas booklet untuk meminta keringanan pokok pajak karena bencana?",
      [
        "Pembetulan karena salah tulis",
        "Surat Paksa",
        "Banding atas STP",
        "Permohonan pengurangan PBB",
      ],
      3,
      "Pengurangan PBB menyediakan jalur keringanan dalam kondisi tertentu, termasuk bencana.",
    ],
    [
      "Berapa batas pelunasan SKP PBB menurut perbandingan tenggat pada booklet?",
      ["6 bulan", "1 bulan", "3 bulan", "4 bulan"],
      1,
      "SKP PBB memiliki tenggat satu bulan. Enam bulan adalah tenggat SPPT.",
    ],
    [
      "Untuk perkebunan, biaya investasi tanaman dimasukkan ke penghitungan NJOP bagian apa?",
      ["Areal pengaman", "Areal emplasemen", "Areal produktif", "Areal tidak produktif"],
      2,
      "Contoh booklet menambahkan investasi tanaman pada areal produktif.",
    ],
  ],
  "akuntansi-perpajakan": [
    [
      "Pendapatan jasa Rp50 juta dipotong PPh 23 sebesar 2% dan langsung dibayar. Berapa kas dan pajak dibayar di muka yang dicatat penerima?",
      [
        "Kas Rp49 juta dan pajak dibayar di muka Rp1 juta",
        "Kas Rp50 juta dan pajak dibayar di muka Rp1 juta",
        "Kas Rp49 juta dan utang pajak Rp1 juta",
        "Kas Rp50 juta tanpa pajak dibayar di muka",
      ],
      0,
      "PPh 23 = Rp1 juta. Penerima mencatat kas bersih Rp49 juta, pajak dibayar di muka Rp1 juta, dan pendapatan Rp50 juta.",
    ],
    [
      "Penyusutan komersial Rp45 juta, sedangkan penyusutan fiskal Rp30 juta. Apa koreksinya?",
      ["Negatif Rp15 juta", "Positif Rp45 juta", "Negatif Rp30 juta", "Positif Rp15 juta"],
      3,
      "Komersial membebankan Rp15 juta lebih banyak. Tambahkan selisih melalui koreksi positif.",
    ],
    [
      "Penyusutan fiskal Rp70 juta, sedangkan penyusutan komersial Rp50 juta. Apa koreksinya?",
      ["Positif Rp20 juta", "Negatif Rp20 juta", "Positif Rp70 juta", "Nihil"],
      1,
      "Penyusutan fiskal lebih besar, sehingga laba fiskal turun Rp20 juta melalui koreksi negatif.",
    ],
    [
      "Biaya dikenai koreksi karena secara permanen tidak boleh dikurangkan. Apa jenis bedanya?",
      ["Beda waktu", "Beda kurs", "Beda tetap", "Pajak dibayar di muka"],
      2,
      "Beda tetap tidak berbalik pada periode lain dan tidak menimbulkan pajak tangguhan.",
    ],
    [
      "Kas Rp90 juta diterima dari sewa gedung bruto Rp100 juta setelah dipotong PPh final Rp10 juta. Akun apa yang dicatat atas potongan di sisi penerima?",
      ["Pajak dibayar di muka", "Utang PPh 23", "Pajak Masukan", "Beban PPh final"],
      3,
      "PPh final tidak menjadi kredit terhadap PPh umum, sehingga dalam jurnal contoh dicatat sebagai beban.",
    ],
  ],
  "pph-badan": [
    [
      "Omzet Rp12 miliar dan PKP Rp1 miliar. Badan memenuhi Pasal 31E. Berapa PPh terutang sebelum kredit?",
      ["Rp110 juta", "Rp220 juta", "Rp176 juta", "Rp132 juta"],
      2,
      "PKP fasilitas = 4,8/12 × Rp1 miliar = Rp400 juta. PPh = 11% × Rp400 juta + 22% × Rp600 juta = Rp176 juta.",
    ],
    [
      "Harta dijual Rp180 juta dengan nilai buku komersial Rp110 juta dan nilai buku fiskal Rp90 juta. Berapa laba pengalihan fiskal jika transaksi wajar?",
      ["Rp90 juta", "Rp70 juta", "Rp110 juta", "Rp180 juta"],
      0,
      "Gunakan nilai buku fiskal: Rp180 juta − Rp90 juta = Rp90 juta.",
    ],
    [
      "Badan memiliki rugi fiskal biasa tahun 2020. Tanpa fasilitas perpanjangan, apakah sisa rugi dapat dipakai pada tahun pajak 2026?",
      [
        "Ya, bila ada laba",
        "Ya, bila rugi belum pernah dipakai",
        "Ya, jika omzet di bawah Rp50 miliar",
        "Tidak, lima tahun berikutnya berakhir pada 2025",
      ],
      3,
      "Rugi tahun 2020 dapat dikompensasikan selama 2021–2025 dalam jangka umum.",
    ],
    [
      "PPh tahun lalu atas penghasilan teratur Rp240 juta. Kredit yang boleh dikurangkan untuk dasar PPh 25 Rp60 juta. Berapa angsuran bulanan untuk tahun buku 12 bulan?",
      ["Rp20 juta", "Rp15 juta", "Rp5 juta", "Rp25 juta"],
      1,
      "Dasar angsuran = Rp240 juta − Rp60 juta = Rp180 juta. Bagikan 12, hasilnya Rp15 juta.",
    ],
    [
      "Badan dalam negeri menerima dividen dari badan dalam negeri. Bagaimana booklet mengelompokkan penghasilan ini bagi penerima badan?",
      [
        "Selalu objek PPh 23 bila saham di bawah 25%",
        "Objek PPh final 10%",
        "Dikecualikan dari objek PPh",
        "Objek PPh 26",
      ],
      2,
      "Dividen domestik yang diterima badan dalam negeri dikecualikan dari objek menurut booklet.",
    ],
  ],
} satisfies Record<UkpTopic, Item[]>;

export const levelQuestionBank: Record<UkpLevel, Partial<Record<UkpTopic, Item[]>>> = {
  a: {
    "bea-meterai": [
      [
        "Pemungut Bea Meterai sudah memungut pada bulan Juli. Kapan batas umum setor dan lapor menurut booklet?",
        ["15 Agustus", "20 Agustus", "31 Agustus", "15 Juli"],
        0,
        "Booklet mencantumkan tanggal 15 bulan berikutnya untuk setor dan lapor pemungut Bea Meterai.",
      ],
      [
        "Ada dua kuitansi pembayaran terpisah, masing-masing Rp5 juta dan Rp5,1 juta. Jika dilihat hanya dari nominal, berapa total Bea Meterai?",
        ["Rp0", "Rp20.000", "Rp10.000", "Rp5.000"],
        2,
        "Hanya kuitansi Rp5,1 juta melewati ambang lebih dari Rp5 juta.",
      ],
    ],
    kup: [
      [
        "Seorang wajib pajak hanya ingin memperbaiki kekeliruan hitung dalam SKP. Permohonan apa yang secara langsung sesuai?",
        [
          "Gugatan penagihan",
          "Pembetulan Pasal 16",
          "Peninjauan kembali",
          "Pengembalian pendahuluan",
        ],
        1,
        "Pasal 16 mencakup kesalahan tulis, kesalahan hitung, atau kekeliruan penerapan ketentuan.",
      ],
      [
        "SPT Tahunan orang pribadi memakai tahun kalender tanpa perpanjangan. Kapan batas lapor umumnya?",
        ["30 April", "28 Februari", "31 Mei", "31 Maret"],
        3,
        "Tenggat orang pribadi adalah tiga bulan setelah akhir tahun pajak.",
      ],
    ],
    "pph-orang-pribadi": [
      [
        "Dokter menerima penghasilan dari praktik sebagai pekerjaan bebas. Apakah penghasilan praktik itu dapat memakai skema PPh final 0,5% omzet tertentu?",
        [
          "Tidak, jasa terkait pekerjaan bebas dikecualikan dari skema",
          "Ya, asal omzet di bawah Rp4,8 miliar",
          "Ya, asal memilih NPPN",
          "Ya, untuk Rp500 juta pertama saja",
        ],
        0,
        "Booklet membedakan praktik dokter sebagai pekerjaan bebas dari kegiatan usaha yang memenuhi skema 0,5%.",
      ],
      [
        "Seseorang menerima warisan dan gaji dalam tahun yang sama. Bagaimana pengelompokan awalnya?",
        [
          "Keduanya penghasilan final",
          "Keduanya bukan objek",
          "Warisan bukan objek, gaji masuk penghasilan pekerjaan",
          "Warisan masuk penghasilan umum, gaji bukan objek",
        ],
        2,
        "Warisan dikecualikan dari objek, sedangkan gaji pada umumnya merupakan penghasilan pekerjaan yang dikenai PPh.",
      ],
    ],
    "pph-potong-pungut": [
      [
        "Penghasilan bruto bulanan pegawai Rp15 juta. Berapa biaya jabatan untuk bulan tersebut jika memakai 5% dengan batas bulanan?",
        ["Rp750 ribu", "Rp500 ribu", "Rp200 ribu", "Rp1,5 juta"],
        1,
        "Lima persen dari Rp15 juta adalah Rp750 ribu, tetapi biaya jabatan dibatasi Rp500 ribu sebulan.",
      ],
      [
        "Sebuah mobil disewa dari penyedia dalam negeri dengan dasar potong Rp40 juta. Jika masuk objek PPh 23 dan penyedia ber-NPWP, berapa potongannya?",
        ["Rp4 juta", "Rp6 juta", "Rp400 ribu", "Rp800 ribu"],
        3,
        "Sewa harta selain tanah dan bangunan dikenai PPh 23 sebesar 2% × Rp40 juta = Rp800 ribu.",
      ],
    ],
    ppn: [
      [
        "PKP orang pribadi memiliki kurang bayar PPN Masa Juli. Kapan batas umum lapor dan apa urutan pembayarannya?",
        [
          "Akhir Agustus, setorkan kurang bayar sebelum lapor",
          "15 Agustus, laporkan sebelum setor",
          "20 Agustus, setor setelah lapor",
          "Akhir Juli, setorkan sebelum lapor",
        ],
        0,
        "SPT Masa PPN umumnya dilaporkan pada akhir bulan berikutnya dan kurang bayar disetor sebelum SPT dilaporkan.",
      ],
      [
        "Dari Pajak Masukan Rp12 juta, Rp4 juta khusus untuk penyerahan yang dibebaskan dan Rp8 juta khusus penyerahan terutang. Berapa yang bisa dikreditkan jika syarat lain terpenuhi?",
        ["Rp4 juta", "Rp12 juta", "Rp8 juta", "Rp0"],
        2,
        "Hanya Rp8 juta yang berkaitan dengan penyerahan terutang. Bagian khusus penyerahan dibebaskan tidak bisa dikreditkan.",
      ],
    ],
  },
  b: {
    kup: [
      [
        "Keberatan ditolak, pajak menurut keputusan Rp100 juta, dan pembayaran sebelum keberatan Rp20 juta. Jika tidak banding, berapa denda keberatan 30%?",
        ["Rp30 juta", "Rp24 juta", "Rp6 juta", "Rp48 juta"],
        1,
        "Dasar denda Rp100 juta − Rp20 juta = Rp80 juta. Denda = 30% × Rp80 juta = Rp24 juta.",
      ],
      [
        "Badan tahun buku kalender memerlukan waktu tambahan untuk menyampaikan SPT. Berapa perpanjangan paling lama melalui pemberitahuan?",
        ["Satu bulan", "Tiga bulan", "Empat bulan", "Dua bulan"],
        3,
        "Perpanjangan penyampaian SPT Tahunan paling lama dua bulan melalui pemberitahuan sesuai syarat.",
      ],
    ],
    "bea-meterai": [
      [
        "Sebuah surat berharga termasuk objek Bea Meterai. Kapan saat terutangnya menurut tabel booklet?",
        [
          "Saat selesai dibuat",
          "Saat dicairkan",
          "Saat didaftarkan ke pengadilan",
          "Saat masa berlakunya habis",
        ],
        0,
        "Surat berharga seperti cek atau bilyet giro terutang saat selesai dibuat.",
      ],
      [
        "Tiga dokumen perjanjian yang sejak awal terutang belum dilunasi. Dengan sanksi 100%, berapa total pokok dan sanksinya?",
        ["Rp30.000", "Rp90.000", "Rp60.000", "Rp40.000"],
        2,
        "Pokok Rp30.000 dan sanksi 100% dari pokok Rp30.000, sehingga total Rp60.000.",
      ],
    ],
    "pbb-p5l": [
      [
        "SPPT yang memuat angka NJOP yang dinilai tidak benar disengketakan melalui keberatan. Berapa batas umum DJP memutus keberatan PBB?",
        ["3 bulan", "12 bulan", "6 bulan", "4 bulan"],
        1,
        "Booklet membedakan pengajuan keberatan PBB dalam tiga bulan dan keputusan dalam 12 bulan.",
      ],
      [
        "Untuk kasus NJOP migas, kombinasi komponen mana yang ditunjukkan booklet?",
        [
          "Tubuh bumi saja",
          "Bangunan dan persediaan",
          "Permukaan onshore saja",
          "Permukaan onshore dan offshore, tubuh bumi, serta bangunan",
        ],
        3,
        "Rangkuman NJOP migas memasukkan komponen permukaan, tubuh bumi, dan bangunan.",
      ],
    ],
    "akuntansi-perpajakan": [
      [
        "Laba komersial mencakup Rp40 juta penghasilan bukan objek. Ada pula biaya tidak dapat dikurangkan Rp25 juta. Berapa dampak bersih koreksi terhadap laba fiskal?",
        ["Turun Rp15 juta", "Naik Rp15 juta", "Turun Rp65 juta", "Naik Rp65 juta"],
        0,
        "Koreksi positif Rp25 juta dikurangi koreksi negatif Rp40 juta menghasilkan penurunan Rp15 juta.",
      ],
      [
        "Pada rekonsiliasi, kapan kompensasi rugi fiskal diperhitungkan?",
        [
          "Sebelum laba komersial ditentukan",
          "Sebelum koreksi positif",
          "Setelah koreksi positif dan negatif",
          "Setelah pajak terutang dikurangi kredit",
        ],
        2,
        "Laba komersial disesuaikan dengan koreksi fiskal dahulu, kemudian dikurangi rugi fiskal yang dapat digunakan.",
      ],
    ],
    "pph-badan": [
      [
        "Badan memenuhi syarat Pasal 31E, omzet Rp4 miliar dan PKP Rp600 juta. Berapa PPh terutang sebelum kredit?",
        ["Rp132 juta", "Rp66 juta", "Rp44 juta", "Rp120 juta"],
        1,
        "Seluruh PKP memperoleh tarif 11% karena omzet berada di bawah Rp4,8 miliar. PPh = Rp66 juta.",
      ],
      [
        "Berapa penyusutan fiskal setahun penuh untuk harta bukan bangunan kelompok 2 dengan harga Rp160 juta dan metode garis lurus?",
        ["Rp40 juta", "Rp16 juta", "Rp10 juta", "Rp20 juta"],
        3,
        "Kelompok 2 memiliki masa manfaat delapan tahun dan tarif garis lurus 12,5%. Hasilnya Rp20 juta.",
      ],
    ],
    "pph-orang-pribadi": [
      [
        "WP berstatus K/I/1 dengan penghasilan istri digabung. Berapa PTKP gabungan?",
        ["Rp117 juta", "Rp108 juta", "Rp112,5 juta", "Rp63 juta"],
        0,
        "Jumlahkan Rp54 juta untuk WP, Rp54 juta untuk istri yang digabung, Rp4,5 juta status kawin, dan Rp4,5 juta satu tanggungan.",
      ],
      [
        "Omzet Rp1,5 miliar, norma 30%, dan status TK/0. Tanpa penyesuaian lain, berapa PKP?",
        ["Rp450 juta", "Rp504 juta", "Rp396 juta", "Rp1,446 miliar"],
        2,
        "Neto = 30% × Rp1,5 miliar = Rp450 juta. Kurangi PTKP Rp54 juta untuk mendapatkan Rp396 juta.",
      ],
    ],
    "pph-potong-pungut": [
      [
        "Importir tanpa API mengimpor barang kategori umum dengan nilai impor Rp200 juta. Berdasarkan tarif contoh booklet, berapa PPh 22?",
        ["Rp5 juta", "Rp15 juta", "Rp1 juta", "Rp3 juta"],
        1,
        "Contoh kategori umum tanpa API menggunakan 7,5% × Rp200 juta = Rp15 juta.",
      ],
      [
        "Instansi pemerintah membeli barang dengan harga sebelum PPN Rp80 juta dan transaksi termasuk objek PPh 22 sebesar 1,5%. Berapa pungutannya?",
        ["Rp800 ribu", "Rp2 juta", "Rp6 juta", "Rp1,2 juta"],
        3,
        "Pungutan = 1,5% × Rp80 juta = Rp1,2 juta.",
      ],
    ],
    ppn: [
      [
        "Pajak Masukan bersama Rp60 juta dipakai untuk penyerahan terutang Rp900 juta dan dibebaskan Rp300 juta. Dengan pedoman sebanding pada contoh booklet, berapa bagian bersama yang dapat dikreditkan?",
        ["Rp45 juta", "Rp15 juta", "Rp60 juta", "Rp30 juta"],
        0,
        "Proporsi penyerahan terutang = 900/1.200 atau 75%. Tujuh puluh lima persen dari Rp60 juta adalah Rp45 juta.",
      ],
      [
        "Pembeli membatalkan sebagian Jasa Kena Pajak. Dokumen apa yang dibuat menurut booklet?",
        [
          "Nota retur oleh penjual",
          "Surat Teguran oleh DJP",
          "Nota pembatalan oleh penerima jasa",
          "Bukti potong PPh 23 oleh penyedia",
        ],
        2,
        "Pembatalan jasa menggunakan nota pembatalan yang dibuat oleh penerima jasa. Nota retur dipakai untuk pengembalian barang.",
      ],
    ],
  },
};
