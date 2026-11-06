import type { UkpLevel, UkpTopic } from "./ukp";

type Item = [
  prompt: string,
  options: [string, string, string, string],
  answer: number,
  explanation: string,
  caseStudy?: true,
];

export const varietyBank: Record<UkpLevel, Partial<Record<UkpTopic, Item[]>>> = {
  a: {
    "bea-meterai": [
      [
        "Petugas arsip menemukan ijazah, surat perjanjian pinjaman, akta notaris, dan risalah lelang. Dokumen mana yang bukan objek Bea Meterai bila hanya dipakai sesuai fungsi asalnya?",
        ["Risalah lelang", "Ijazah", "Akta notaris", "Perjanjian pinjaman"],
        1,
        "Ijazah termasuk dokumen yang dikecualikan. Perjanjian, akta notaris, dan risalah lelang adalah objek berdasarkan jenis dokumennya.",
      ],
      [
        "Penjual menyerahkan kuitansi Rp9 juta kepada pembeli. Mereka sepakat penjual menanggung Bea Meterai. Bagaimana membaca aturan pihak terutang dan kesepakatan tersebut?",
        [
          "Pembeli pada dasarnya pihak terutang, tetapi para pihak boleh menyepakati pihak yang membayar",
          "Penjual otomatis pihak terutang karena menerbitkan kuitansi",
          "Keduanya masing-masing terutang atas kuitansi yang sama",
          "Kesepakatan menghapus kewajiban Bea Meterai",
        ],
        0,
        "Untuk dokumen yang dibuat sepihak, pihak penerima pada dasarnya terutang. Para pihak dapat menyepakati siapa yang membayar tanpa menghapus pokok pajak.",
        true,
      ],
    ],
    kup: [
      [
        "Setelah Surat Paksa diberitahukan, utang tetap tidak dibayar dan tahap penyitaan telah dilaksanakan. Urutan tindakan berikutnya menuju penjualan barang sitaan adalah apa?",
        [
          "Lelang lalu pengumuman lelang",
          "Surat Teguran baru lalu lelang",
          "Pengumuman lelang lalu pelaksanaan lelang",
          "Terbitkan SKPKBT lalu lakukan banding",
        ],
        2,
        "Penyitaan diikuti pengumuman lelang, baru pelaksanaan lelang. Surat Teguran dan Surat Paksa berada pada tahap sebelum penyitaan.",
      ],
      [
        "Badan dengan tahun buku kalender sudah membayar kekurangan pajak, tetapi terlambat menyampaikan SPT Tahunannya. Sanksi mana yang terkait langsung dengan keterlambatan lapor itu?",
        ["Denda Rp100 ribu", "Denda Rp500 ribu", "Bunga karena telat setor", "Denda Rp1 juta"],
        3,
        "Denda keterlambatan SPT Tahunan badan adalah Rp1 juta. Status pembayaran dan ketepatan pelaporan merupakan dua kewajiban yang berbeda.",
        true,
      ],
    ],
    "pph-orang-pribadi": [
      [
        "Pemilik usaha dengan pembukuan memperoleh laba komersial Rp310 juta yang sudah memasukkan bunga deposito final Rp10 juta. Di dalam beban ada biaya pribadi Rp20 juta. Berapa neto fiskal untuk tarif umum sebelum PTKP?",
        ["Rp280 juta", "Rp300 juta", "Rp320 juta", "Rp340 juta"],
        2,
        "Kurangi bunga final Rp10 juta dari laba komersial dan tambahkan kembali biaya pribadi Rp20 juta. Neto fiskal untuk tarif umum Rp320 juta.",
      ],
      [
        "Seorang WP berstatus TK/0 mempunyai neto fiskal Rp174 juta setelah koreksi, rugi fiskal yang masih dapat dikompensasikan Rp30 juta, dan kredit Rp2 juta. Berapa PPh kurang bayar?",
        ["Rp5,5 juta", "Rp7,5 juta", "Rp10 juta", "Rp12 juta"],
        0,
        "PKP = Rp174 juta − Rp30 juta − Rp54 juta = Rp90 juta. PPh = Rp3 juta + 15% × Rp30 juta = Rp7,5 juta. Setelah kredit Rp2 juta, kurang bayar Rp5,5 juta.",
        true,
      ],
    ],
    "pph-potong-pungut": [
      [
        "Seorang pensiunan menerima pensiun bruto Rp6 juta per bulan selama 12 bulan. Jika pengurangan yang sedang dihitung hanya biaya pensiun, berapa jumlahnya setahun?",
        ["Rp3,6 juta", "Rp2,4 juta", "Rp6 juta", "Rp7,2 juta"],
        1,
        "Lima persen dari Rp6 juta adalah Rp300 ribu per bulan. Biaya pensiun dibatasi Rp200 ribu per bulan atau Rp2,4 juta setahun.",
      ],
      [
        "Perusahaan membeli jasa melalui dua kontrak. Kontrak pertama sewa mesin biasa, kontrak kedua sewa guna usaha mesin dengan hak opsi. Keduanya dibayar kepada badan dalam negeri. Mana yang dikecualikan dari PPh 23 atas dasar jenis sewanya?",
        [
          "Kedua kontrak",
          "Hanya sewa mesin biasa",
          "Hanya sewa guna usaha dengan hak opsi",
          "Keduanya tetap dipotong dengan tarif yang sama",
        ],
        2,
        "Sewa guna usaha dengan hak opsi dikecualikan. Sewa mesin biasa pada umumnya termasuk objek PPh 23 apabila syarat pemotongan terpenuhi.",
        true,
      ],
    ],
    ppn: [
      [
        "PKP membeli jasa konsultasi dari luar daerah pabean dan memanfaatkannya di Indonesia. Penyedia bukan pemungut PMSE yang ditunjuk. Siapa menyetor PPN atas pemanfaatan tersebut?",
        [
          "Pemanfaat jasa di Indonesia",
          "Bea Cukai pada saat jasa diunduh",
          "Penyedia asing melalui SPT Masa PPN Indonesia",
          "Tidak ada karena jasa berasal dari luar negeri",
        ],
        0,
        "Pemanfaatan JKP dari luar daerah pabean di Indonesia merupakan objek PPN. Dalam skenario tanpa pemungut yang ditunjuk, pemanfaat menyetorkan PPN.",
      ],
      [
        "PKP mengekspor barang yang memenuhi ketentuan tarif 0%. Bagaimana menggolongkan ekspor dan Pajak Masukannya?",
        [
          "Ekspor merupakan penyerahan bertarif 0% dan Pajak Masukan terkait dapat dikreditkan bila memenuhi syarat",
          "Ekspor dibebaskan sehingga semua Pajak Masukan terkait menjadi biaya",
          "Ekspor dikenai 12% karena pembelinya di luar negeri",
          "Ekspor di luar lingkup PPN sehingga tidak dapat dilaporkan",
        ],
        0,
        "Tarif 0% tetap berada dalam mekanisme PPN. Karena itu, Pajak Masukan yang memenuhi syarat masih dapat dikreditkan.",
        true,
      ],
    ],
  },
  b: {
    kup: [
      [
        "Wajib pajak menerima SKPLB. Ia juga mempunyai utang pajak yang dapat diperhitungkan. Apa yang dilakukan terhadap kelebihan pembayaran sebelum dana dikembalikan?",
        [
          "Bayar penuh kepada WP tanpa melihat utangnya",
          "Kompensasikan dulu dengan utang pajak",
          "Ubah SKPLB menjadi Surat Teguran",
          "Kenakan denda banding atas selisih",
        ],
        1,
        "Kelebihan pembayaran diperhitungkan terlebih dahulu dengan utang pajak. Sisa setelah perhitungan dapat dikembalikan.",
      ],
      [
        "Wajib pajak menerima SPHP dalam pemeriksaan biasa dan ingin menyampaikan tanggapan tertulis tanpa keadaan khusus. Berapa batas waktu yang dicontohkan booklet?",
        [
          "3 hari kerja sejak SPHP diterima",
          "30 hari kerja sejak SPHP diterima",
          "5 hari kerja sejak SPHP diterima",
          "1 bulan sejak dokumen diminta",
        ],
        2,
        "Tanggapan tertulis atas SPHP memakai batas lima hari kerja sejak diterima menurut acuan pemeriksaan dalam booklet. Tenggat permintaan dokumen dan pembahasan akhir berbeda.",
        true,
      ],
    ],
    "bea-meterai": [
      [
        "Perusahaan menerbitkan cek dan surat pernyataan pada hari yang sama. Surat pernyataan baru diserahkan kepada pihak yang dituju dua hari kemudian. Urutan saat terutang yang sesuai adalah apa?",
        [
          "Keduanya pada saat diserahkan",
          "Keduanya saat dicairkan",
          "Surat pernyataan saat selesai dibuat, cek saat dicairkan",
          "Cek saat selesai dibuat, surat pernyataan saat diserahkan",
        ],
        3,
        "Cek termasuk surat berharga yang terutang saat selesai dibuat. Surat pernyataan terutang saat diserahkan kepada pihak yang dituju.",
      ],
      [
        "Sebuah akta notaris bernilai Rp3 juta dan satu bukti penerimaan gaji Rp7 juta diperiksa sebagai dokumen biasa. Apa hasil klasifikasinya?",
        [
          "Akta merupakan objek, bukti gaji bukan objek",
          "Keduanya merupakan objek karena ada nilai uang",
          "Hanya bukti gaji yang merupakan objek",
          "Keduanya bukan objek",
        ],
        0,
        "Akta termasuk objek berdasarkan jenis dokumen. Bukti penerimaan gaji dikecualikan, meskipun nominalnya lebih dari Rp5 juta.",
        true,
      ],
    ],
    "pbb-p5l": [
      [
        "Areal produktif kebun Rp5 miliar, areal pengaman Rp600 juta, dan bangunan Rp400 juta. Jika nilai produktif sudah memasukkan investasi tanaman, apa koreksi atas usulan analis menambah investasi Rp1 miliar lagi?",
        [
          "Tambahkan kembali, jadi NJOP Rp7 miliar",
          "Jangan hitung lagi, NJOP Rp6 miliar",
          "Keluarkan bangunan, NJOP Rp5,6 miliar",
          "Pakai hanya Rp5 miliar karena areal pengaman bukan komponen",
        ],
        1,
        "Jumlahkan nilai setiap komponen satu kali. Rp5 miliar + Rp600 juta + Rp400 juta = Rp6 miliar.",
      ],
      [
        "Satu objek berada di perkebunan komersial, satu lagi adalah rumah tinggal biasa di permukiman. Jika ditanya objek yang dibahas sebagai PBB sektor perkebunan, mana pilihannya?",
        [
          "Keduanya karena sama-sama berupa tanah atau bangunan",
          "Hanya rumah tinggal",
          "Hanya objek perkebunan komersial",
          "Keduanya karena berada dalam kabupaten yang sama",
        ],
        2,
        "Klasifikasi mengikuti sektor dan penggunaan objek. Rumah tinggal biasa masuk ranah PBB perdesaan dan perkotaan, sementara kasus perkebunan komersial berada dalam pembahasan PBB-P5L.",
        true,
      ],
    ],
    "akuntansi-perpajakan": [
      [
        "Perusahaan membayar sewa dua tahun Rp120 juta di muka pada awal tahun, dengan manfaat merata. Berapa beban tahun pertama dan saldo dibayar di muka akhir tahun, sebelum memperhitungkan pajak potong?",
        [
          "Beban Rp120 juta dan saldo nihil",
          "Beban nihil dan saldo Rp120 juta",
          "Beban Rp30 juta dan saldo Rp90 juta",
          "Beban Rp60 juta dan saldo Rp60 juta",
        ],
        3,
        "Beban diakui sejalan dengan periode manfaat. Separuh biaya menjadi beban tahun pertama dan separuh masih dibayar di muka.",
      ],
      [
        "Aset mempunyai nilai tercatat Rp180 juta dan dasar pajak Rp200 juta. Pada tarif 22%, jika syarat pengakuan aset pajak tangguhan terpenuhi, apa dampaknya?",
        [
          "Aset pajak tangguhan Rp4,4 juta",
          "Liabilitas pajak tangguhan Rp4,4 juta",
          "Aset pajak tangguhan Rp20 juta",
          "Selisih tetap Rp20 juta",
        ],
        0,
        "Dasar pajak aset lebih tinggi Rp20 juta dari nilai tercatat sehingga timbul beda temporer yang dapat dikurangkan. Dampaknya 22% × Rp20 juta = Rp4,4 juta.",
        true,
      ],
    ],
    "pph-badan": [
      [
        "Persediaan yang sama dibeli 100 unit @Rp20 ribu lalu 100 unit @Rp24 ribu. Jika 120 unit dijual dengan metode FIFO dan tidak ada saldo awal, berapa harga pokoknya?",
        ["Rp2,64 juta", "Rp2,48 juta", "Rp2,88 juta", "Rp2,92 juta"],
        1,
        "FIFO mengambil 100 unit pertama senilai Rp2 juta dan 20 unit berikutnya senilai Rp480 ribu. Total Rp2,48 juta.",
      ],
      [
        "Mesin kelompok 1 senilai Rp100 juta disusutkan dengan metode saldo menurun 50%. Jika dua tahun pertama masing-masing penuh, berapa penyusutan tahun kedua?",
        ["Rp50 juta", "Rp12,5 juta", "Rp25 juta", "Rp75 juta"],
        2,
        "Nilai buku fiskal setelah tahun pertama Rp50 juta. Tahun kedua memakai tarif 50% atas nilai buku itu, yaitu Rp25 juta.",
        true,
      ],
    ],
    "pph-orang-pribadi": [
      [
        "Istri bekerja hanya pada satu pemberi kerja, gajinya telah dipotong PPh 21, dan pekerjaannya tidak berkaitan dengan usaha suami atau anggota keluarga lain. Bagaimana perlakuan gaji tersebut dalam penghitungan keluarga?",
        [
          "Selalu digabung dengan penghasilan suami",
          "Digabung hanya bila gaji melampaui PTKP",
          "Dikenai PPh 26",
          "Dikecualikan dari penggabungan karena memenuhi syarat satu pemberi kerja",
        ],
        3,
        "Pengecualian penggabungan berlaku ketika penghasilan istri berasal dari satu pemberi kerja, sudah dipotong PPh 21, dan pekerjaannya tidak terkait usaha atau pekerjaan bebas suami atau anggota keluarga lain.",
      ],
      [
        "WP dengan status K/3 memiliki penghasilan neto Rp226 juta dan menggunakan tarif umum. Tanpa penyesuaian lain, berapa PKP?",
        ["Rp154 juta", "Rp158,5 juta", "Rp163 juta", "Rp172 juta"],
        0,
        "PTKP K/3 = Rp54 juta + Rp4,5 juta + Rp13,5 juta = Rp72 juta. PKP = Rp226 juta − Rp72 juta = Rp154 juta.",
        true,
      ],
    ],
    "pph-potong-pungut": [
      [
        "Pemotong mencatat royalti Rp100 juta kepada badan dalam negeri dan royalti Rp100 juta kepada subjek pajak luar negeri selain BUT. Kedua transaksi memenuhi ketentuan umum dan tarif P3B tidak berlaku. Berapa total potongan?",
        ["Rp30 juta", "Rp35 juta", "Rp22 juta", "Rp40 juta"],
        1,
        "Royalti dalam negeri dikenai PPh 23 sebesar 15% dan royalti kepada subjek luar negeri pada kasus ini dikenai PPh 26 sebesar 20%. Total Rp35 juta.",
      ],
      [
        "Penerima jasa yang merupakan pemotong membayar pekerjaan konstruksi Rp200 juta sebelum PPN kepada penyedia jasa bersertifikat badan usaha kualifikasi kecil. Dengan tarif final 1,75% yang diberikan dalam soal, berapa pajaknya?",
        ["Rp4 juta", "Rp5,3 juta", "Rp3,5 juta", "Rp8 juta"],
        2,
        "Gunakan tarif final yang diberikan terhadap jumlah pembayaran sebelum PPN. 1,75% × Rp200 juta = Rp3,5 juta.",
        true,
      ],
    ],
    ppn: [
      [
        "Pada satu masa, PKP memiliki Pajak Keluaran Rp27 juta. Pajak Masukan khusus penyerahan terutang Rp14 juta, khusus penyerahan dibebaskan Rp4 juta, dan kredit bersama yang sudah dihitung Rp6 juta. Berapa kurang bayar?",
        ["Rp3 juta", "Rp13 juta", "Rp11 juta", "Rp7 juta"],
        3,
        "Kredit yang boleh dipakai Rp14 juta + Rp6 juta = Rp20 juta. Pajak Masukan khusus penyerahan dibebaskan tidak ikut. Kurang bayar Rp7 juta.",
      ],
      [
        "Pembeli sudah mengkreditkan Pajak Masukan atas barang dan kemudian mengembalikan sebagian barang dengan nota retur yang sah. Dari sisi pembeli, komponen mana yang berkurang?",
        [
          "Pajak Masukan",
          "Pajak Keluaran",
          "PPh Pasal 25",
          "PPN yang dipungut atas penjualan lain",
        ],
        0,
        "Retur mengurangi Pajak Masukan pembeli yang berkaitan dengan barang yang dikembalikan. Dari sisi penjual, komponen yang dikurangi adalah Pajak Keluaran.",
        true,
      ],
    ],
  },
};
