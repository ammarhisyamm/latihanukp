import type { TopicContent } from "./types";

const B = ["b"] as const;

const content: TopicContent = {
  summary: [
    {
      id: "jurnal-potput",
      title: "Jurnal hak dan kewajiban PPh 21, 22, 23, 24, dan 4 ayat (2)",
      levels: B,
      bookletItem: { b: "1" },
      points: [
        "Pemotong mencatat PPh yang ditahan dari lawan transaksi sebagai utang pajak (kredit Utang PPh 21/23/4(2)) sampai disetor, lalu mendebit utang itu saat penyetoran.",
        "Penerima penghasilan mencatat potongan PPh nonfinal (PPh 22, 23, 24) sebagai aset pajak dibayar di muka karena dapat dikreditkan di SPT Tahunan.",
        "Potongan PPh final Pasal 4 ayat (2) di sisi penerima tidak dapat dikreditkan, sehingga pada contoh booklet dicatat sebagai beban pajak final.",
        "Beban atau pendapatan dicatat sebesar nilai bruto; kas yang berpindah = bruto − PPh yang dipotong (abaikan PPN bila soal menyuruh).",
        "PPh 22 impor yang dibayar importir didebit sebagai PPh 22 dibayar di muka, bukan menambah harga perolehan persediaan.",
        "PPh 24 yang dibayar di luar negeri dicatat dibayar di muka, tetapi yang dapat dikreditkan dibatasi: penghasilan luar negeri ÷ PKP × PPh terutang (per negara).",
        "Tunjangan PPh 21 yang diberikan kepada pegawai adalah bagian beban gaji yang dapat dikurangkan; PPh 21 yang sekadar ditanggung pemberi kerja (tanpa tunjangan) tidak dapat dikurangkan.",
        "Utang PPh potong/pungut Masa disetor paling lambat tanggal 15 dan SPT Masa dilapor paling lambat tanggal 20 bulan berikutnya (PMK 81/2024).",
      ],
      table: {
        head: ["Pihak", "PPh nonfinal (22/23/24)", "PPh final 4(2)"],
        rows: [
          ["Pemotong/pemungut", "Kredit Utang PPh", "Kredit Utang PPh 4(2)"],
          ["Penerima", "Debit Pajak dibayar di muka", "Debit Beban PPh final"],
          ["Saat setor (pemotong)", "Debit Utang PPh, kredit Kas", "Debit Utang PPh, kredit Kas"],
        ],
      },
      traps: [
        "Penerima tidak mengurangi pendapatan bruto dengan potongan nonfinal; selisihnya masuk pajak dibayar di muka.",
        "Pajak dibayar di muka (aset) hanya milik penerima; pemotong selalu mencatat utang.",
        "PPh 24 yang dibayar di luar negeri tidak otomatis seluruhnya menjadi kredit pajak.",
      ],
      legal: "PSAK 212; Pasal 4 ayat (2), 21–24, 28 UU PPh; PMK 81/2024.",
    },
    {
      id: "aset-lancar",
      title: "Aspek pajak piutang, persediaan, dan biaya dibayar di muka",
      levels: B,
      bookletItem: { b: "2" },
      points: [
        "Cadangan/penyisihan kerugian piutang (CKPN) tidak dapat dikurangkan bagi badan umum (Pasal 9 ayat (1) huruf c); hanya bank, asuransi, penjaminan, dan sektor tertentu yang dikecualikan.",
        "Penghapusan piutang tak tertagih dapat dikurangkan bila: dibebankan di laporan laba rugi komersial, daftar piutang diserahkan ke DJP, dan ada penyerahan perkara ke pengadilan/PUPN, perjanjian penghapusan, publikasi, atau pengakuan debitur.",
        "Piutang kepada pihak yang mempunyai hubungan istimewa tidak dapat dihapus sebagai biaya fiskal.",
        "Persediaan dinilai menurut harga perolehan dengan metode rata-rata atau FIFO; penurunan nilai ke nilai realisasi neto (NRV) secara komersial dikoreksi positif.",
        "Biaya dengan manfaat lebih dari satu tahun (sewa, asuransi dibayar di muka) dibebankan sesuai masa manfaat, baik komersial maupun fiskal, sehingga umumnya tidak menimbulkan koreksi.",
        "CKPN yang dikoreksi positif adalah beda waktu: berbalik (koreksi negatif) saat piutang dihapus memenuhi syarat fiskal.",
      ],
      traps: [
        "Koreksi fiskal = seluruh beban yang tidak dapat dikurangkan, bukan beban × tarif pajak.",
        "Lewat jatuh tempo bertahun-tahun bukan syarat penghapusan piutang fiskal.",
      ],
      legal: "PSAK 212; Pasal 6 ayat (1) huruf h, Pasal 9 ayat (1) huruf c, Pasal 10 ayat (6) UU PPh.",
    },
    {
      id: "aset-tetap-liabilitas",
      title: "Aspek pajak aktiva tetap, aktiva tidak berwujud, kewajiban, dan ekuitas",
      levels: B,
      bookletItem: { b: "2" },
      points: [
        "Penyusutan fiskal mengikuti kelompok harta PMK 72/2023; selisih dengan penyusutan komersial menjadi koreksi positif (komersial lebih besar) atau negatif (fiskal lebih besar).",
        "Laba/rugi pengalihan aset fiskal dihitung dari nilai sisa buku fiskal, sehingga bisa berbeda dari laba komersial dan menimbulkan koreksi.",
        "Revaluasi aset menurut SAK tidak diakui fiskal (kecuali revaluasi untuk tujuan perpajakan yang disetujui DJP); tambahan penyusutan dari selisih revaluasi dikoreksi positif.",
        "Beban imbalan kerja yang masih berupa pencadangan liabilitas baru dapat dikurangkan saat dibayar; selisih pencadangan dikoreksi positif sebagai beda waktu.",
        "Setoran modal dan agio saham bukan objek PPh; dividen yang dibagikan bukan biaya (Pasal 9 ayat (1) huruf a).",
        "Bunga atas utang yang melebihi DER 4:1 tidak dapat dikurangkan (PMK 169/2015).",
      ],
      traps: [
        "Selisih penyusutan adalah beda waktu, bukan beda tetap.",
        "Surplus revaluasi komersial bukan penghasilan fiskal, tetapi juga tidak menambah dasar penyusutan fiskal.",
      ],
      legal: "PSAK 212; Pasal 6, 9, 10, 11, 11A, 18 UU PPh; PMK 72/2023; PMK 169/2015.",
    },
    {
      id: "nirlaba",
      title: "Akuntansi organisasi nirlaba",
      levels: B,
      bookletItem: { b: "3" },
      points: [
        "ISAK 335 mengatur penyajian laporan keuangan entitas berorientasi nonlaba (pengganti ISAK 35).",
        "Aset neto disajikan dalam dua kelompok: tanpa pembatasan dan dengan pembatasan dari pemberi sumber daya.",
        "Komponen laporan: posisi keuangan, penghasilan komprehensif, perubahan aset neto, arus kas, dan catatan atas laporan keuangan.",
        "Hibah/sumbangan yang diterima tanpa hubungan usaha, pekerjaan, kepemilikan, atau penguasaan dengan pemberi dikecualikan dari objek PPh.",
        "Sisa lebih badan nirlaba bidang pendidikan/litbang dikecualikan dari objek bila ditanamkan kembali dalam sarana dan prasarana paling lama 4 tahun sejak diperoleh (PMK 68/2020).",
        "Penghasilan yang dikenai PPh final, seperti bunga deposito, tetap dikenai PPh final walaupun diterima yayasan.",
      ],
      table: {
        head: ["Unsur", "Perlakuan"],
        rows: [
          ["Aset neto", "Tanpa pembatasan / dengan pembatasan"],
          ["Sisa lebih pendidikan/litbang", "Dikecualikan bila ditanam kembali ≤ 4 tahun"],
          ["Hibah tanpa hubungan usaha", "Bukan objek PPh"],
        ],
      },
      traps: [
        "ISAK 335 tidak mengenal laporan perubahan ekuitas.",
        "Status nirlaba tidak membebaskan penghasilan final dan penghasilan usaha lainnya.",
      ],
      legal: "ISAK 335; Pasal 4 ayat (3) UU PPh; PMK 68/2020.",
    },
    {
      id: "pendapatan-biaya",
      title: "Pengakuan pendapatan dan biaya usaha dan di luar usaha",
      levels: B,
      bookletItem: { b: "4" },
      points: [
        "PSAK 115 memakai lima langkah: identifikasi kontrak, identifikasi kewajiban pelaksanaan, tentukan harga transaksi, alokasikan harga, akui pendapatan saat/selama kewajiban dipenuhi.",
        "Pembayaran di muka untuk jasa yang belum diserahkan dicatat liabilitas kontrak dan diakui pendapatan sesuai periode jasa.",
        "PPh final jasa konstruksi (PP 9/2022) terutang atas pembayaran yang diterima, termasuk uang muka, bukan atas pendapatan progres yang diakui.",
        "Tarif PP 9/2022 pekerjaan konstruksi: 1,75% (kualifikasi kecil/perseorangan), 2,65% (selain kecil), 4% (tanpa sertifikat); konsultansi 3,5% atau 6% tanpa sertifikat.",
        "Pisahkan pendapatan usaha, luar usaha, final, dan bukan objek; biaya untuk penghasilan final atau bukan objek tidak dapat dikurangkan dari penghasilan tarif umum.",
        "Biaya bersama dialokasikan ke penghasilan final/bukan objek dan penghasilan tarif umum; dasar alokasi yang lazim dipakai soal adalah proporsi peredaran bruto.",
      ],
      table: {
        head: ["Jasa konstruksi (PP 9/2022)", "Tarif"],
        rows: [
          ["Pekerjaan, kualifikasi kecil/perseorangan", "1,75%"],
          ["Pekerjaan, kualifikasi menengah/besar", "2,65%"],
          ["Pekerjaan, tanpa sertifikat", "4%"],
          ["Konsultansi bersertifikat / tanpa sertifikat", "3,5% / 6%"],
        ],
      },
      traps: [
        "Dasar PPh final konstruksi adalah pembayaran, sehingga bisa berbeda dari pendapatan PSAK 115.",
        "Beban pemeliharaan gedung yang disewakan (penghasilan final) harus dikoreksi positif.",
      ],
      legal: "PSAK 115; Pasal 4 dan 6 UU PPh; PP 9/2022.",
    },
    {
      id: "rekonsiliasi",
      title: "Rekonsiliasi fiskal: beda tetap dan beda waktu",
      levels: B,
      bookletItem: { b: "5" },
      points: [
        "Laba fiskal = laba komersial sebelum pajak + koreksi positif − koreksi negatif; PKP = laba fiskal − kompensasi rugi yang masih berlaku.",
        "Koreksi positif: biaya yang tidak dapat dikurangkan (sanksi, PPh badan, sumbangan tak memenuhi syarat, biaya terkait penghasilan final) atau pendapatan fiskal yang belum dicatat komersial.",
        "Koreksi negatif: penghasilan final atau bukan objek yang sudah masuk laba komersial, atau biaya fiskal yang lebih besar dari komersial.",
        "Beda tetap tidak berbalik pada periode lain (sanksi, sumbangan, penghasilan final) dan tidak menimbulkan pajak tangguhan.",
        "Beda waktu berbalik pada periode lain (penyusutan, CKPN, pencadangan imbalan kerja) dan menjadi dasar pajak tangguhan.",
        "Urutan: laba komersial → koreksi → laba fiskal → kompensasi rugi → PKP → tarif → PPh terutang → kredit pajak → PPh 29/28A.",
      ],
      table: {
        head: ["Pos", "Arah koreksi", "Jenis beda"],
        rows: [
          ["Sanksi bunga/denda pajak", "Positif", "Tetap"],
          ["Pendapatan bunga deposito/sewa final", "Negatif", "Tetap"],
          ["Penyusutan komersial > fiskal", "Positif", "Waktu"],
          ["Cadangan piutang/imbalan kerja", "Positif", "Waktu"],
        ],
      },
      traps: [
        "Kompensasi rugi dikurangkan setelah semua koreksi, bukan dari laba komersial.",
        "Kredit pajak mengurangi PPh terutang, bukan laba fiskal.",
      ],
      legal: "PSAK 212; Pasal 4, 6, 9, 17 UU PPh.",
    },
    {
      id: "pajak-kini-tangguhan",
      title: "Jurnal pajak kini, pajak tangguhan, dan PPh badan",
      levels: B,
      bookletItem: { b: "5" },
      points: [
        "PSAK 212 (penomoran baru PSAK 46 sejak 1 Januari 2024) mengatur pajak kini dan pajak tangguhan.",
        "Pajak kini: debit Beban pajak kini, kredit Utang PPh badan; lalu utang dikompensasi dengan pajak dibayar di muka (PPh 22, 23, 24, 25), sisanya utang PPh 29.",
        "Untuk aset, nilai tercatat > dasar pajak menimbulkan liabilitas pajak tangguhan; nilai tercatat < dasar pajak menimbulkan aset pajak tangguhan (bila keterpulihan terpenuhi).",
        "Pajak tangguhan diukur dengan tarif yang diperkirakan berlaku saat pembalikan berdasarkan peraturan yang telah atau secara substantif berlaku.",
        "Beban pajak penghasilan di laba rugi = beban pajak kini + beban (manfaat) pajak tangguhan dari perubahan saldo pajak tangguhan.",
        "ISAK 123 mengatur ketidakpastian perlakuan PPh: ukur dengan jumlah paling mungkin atau nilai ekspektasian.",
        "Hitung PPh terutang dengan memperhatikan Pasal 31E bila omzet ≤ Rp50 miliar; tanpa fasilitas tarif 22%.",
      ],
      traps: [
        "Beda tetap (misal sanksi pajak) tidak pernah dikalikan tarif untuk pajak tangguhan.",
        "Beban pajak kini ≠ PPh 29; PPh 29 adalah sisa setelah kredit.",
      ],
      legal: "PSAK 212; ISAK 123; Pasal 17, 28, 29, 31E UU PPh.",
    },
  ],
  questions: [
    // jurnal-potput
    {
      id: "akt-001",
      levels: B,
      section: "jurnal-potput",
      kind: "kasus",
      prompt:
        "PT A membayar jasa manajemen bruto Rp125 juta kepada PT B dan memotong PPh 23 2%. Abaikan PPN. Pasangan pencatatan potongan Rp2,5 juta mana yang benar?",
      options: [
        "PT A: debit pajak dibayar di muka; PT B: kredit utang PPh 23",
        "PT A: kredit utang PPh 23; PT B: debit beban PPh final",
        "PT A: kredit utang PPh 23; PT B: debit pajak dibayar di muka",
        "PT A: debit beban pajak; PT B: kredit pendapatan Rp122,5 juta",
      ],
      answer: 2,
      explanation:
        "Pemotong (PT A) mencatat utang sampai disetor. Penerima (PT B) mencatat potongan nonfinal sebagai pajak dibayar di muka dan pendapatan bruto Rp125 juta. PPh 23 bukan PPh final, jadi tidak dibebankan.",
      legal: "PSAK 212; Pasal 23 dan 28 UU PPh",
    },
    {
      id: "akt-002",
      levels: B,
      section: "jurnal-potput",
      kind: "hitung",
      prompt:
        "Dalam satu masa, badan membayar gaji bruto Rp280 juta dan memotong PPh 21 Rp16 juta. Abaikan potongan lain. Jurnal saat pembayaran gaji adalah…",
      options: [
        "Debit beban gaji Rp264 juta, kredit kas Rp264 juta",
        "Debit beban gaji Rp280 juta, kredit kas Rp264 juta dan utang PPh 21 Rp16 juta",
        "Debit beban gaji Rp296 juta, kredit kas Rp280 juta dan utang PPh 21 Rp16 juta",
        "Debit beban gaji Rp280 juta, kredit kas Rp264 juta dan pajak dibayar di muka Rp16 juta",
      ],
      answer: 1,
      explanation:
        "Beban gaji sebesar bruto Rp280 juta; kas ke pegawai Rp280 juta − Rp16 juta = Rp264 juta; Rp16 juta menjadi utang PPh 21. Pemotong tidak mencatat pajak dibayar di muka.",
      source: "Latihan Soal UKP Tingkat B (v1)",
    },
    {
      id: "akt-003",
      levels: B,
      section: "jurnal-potput",
      kind: "kasus",
      prompt:
        "Badan penyewa membayar sewa gudang satu tahun di muka Rp180 juta (sebelum PPN) dan memotong PPh final 10%. Abaikan PPN dan gunakan pencatatan sewa dibayar di muka. Jurnal penyewa saat membayar adalah…",
      options: [
        "Debit beban sewa Rp162 juta, kredit kas Rp162 juta",
        "Debit sewa dibayar di muka Rp180 juta, kredit kas Rp180 juta",
        "Debit sewa dibayar di muka Rp162 juta dan pajak dibayar di muka Rp18 juta, kredit kas Rp180 juta",
        "Debit sewa dibayar di muka Rp180 juta, kredit kas Rp162 juta dan utang PPh 4(2) Rp18 juta",
      ],
      answer: 3,
      explanation:
        "Sewa dibayar di muka dicatat bruto Rp180 juta. Potongan final 10% = Rp18 juta menjadi utang pemotong, sehingga kas keluar Rp162 juta. Penyewa tidak mencatat pajak dibayar di muka karena potongan itu milik pemilik gudang.",
      source: "Latihan Soal UKP Tingkat B (v2)",
    },
    {
      id: "akt-004",
      levels: B,
      section: "jurnal-potput",
      kind: "konsep",
      prompt:
        "Pemilik gedung menerima kas Rp90 juta dari sewa bruto Rp100 juta setelah dipotong PPh final Rp10 juta. Akun yang didebit atas potongan itu di sisi pemilik gedung adalah…",
      options: ["Beban PPh final", "Pajak dibayar di muka", "Utang PPh 4(2)", "Pajak Masukan"],
      answer: 0,
      explanation:
        "PPh final tidak dapat dikreditkan terhadap PPh terutang akhir tahun, sehingga dalam contoh booklet dicatat sebagai beban. Pajak dibayar di muka hanya untuk potongan nonfinal.",
    },
    {
      id: "akt-005",
      levels: B,
      section: "jurnal-potput",
      kind: "hitung",
      prompt:
        "Importir ber-API mengimpor barang dagangan senilai impor Rp400 juta dan membayar PPh 22 impor 2,5%. Abaikan bea masuk dan PPN impor. Jurnal yang tepat adalah…",
      options: [
        "Debit persediaan Rp410 juta, kredit kas Rp410 juta",
        "Debit persediaan Rp400 juta dan beban PPh final Rp10 juta, kredit kas Rp410 juta",
        "Debit persediaan Rp400 juta, kredit kas Rp390 juta dan utang PPh 22 Rp10 juta",
        "Debit persediaan Rp400 juta dan PPh 22 dibayar di muka Rp10 juta, kredit kas Rp410 juta",
      ],
      answer: 3,
      explanation:
        "PPh 22 impor = 2,5% × Rp400 juta = Rp10 juta dan dapat dikreditkan, sehingga dicatat sebagai dibayar di muka, bukan menambah harga perolehan persediaan. Importir membayar, bukan memotong, jadi tidak ada utang PPh 22.",
      legal: "Pasal 22 dan 28 UU PPh",
    },
    {
      id: "akt-006",
      levels: B,
      section: "jurnal-potput",
      kind: "kasus",
      prompt:
        "Badan (omzet Rp90 miliar, Pasal 31E tidak berlaku) memiliki PKP Rp2 miliar yang termasuk penghasilan dari negara X Rp400 juta. Pajak yang dipotong di negara X Rp100 juta dan dicatat dibayar di muka. Tarif 22%. Berapa PPh 24 yang dapat dikreditkan?",
      options: ["Rp100 juta", "Rp88 juta", "Rp110 juta", "Rp44 juta"],
      answer: 1,
      explanation:
        "PPh terutang = 22% × Rp2 miliar = Rp440 juta. Batas kredit = Rp400 juta ÷ Rp2 miliar × Rp440 juta = Rp88 juta, lebih kecil dari pajak LN Rp100 juta. Sisa Rp12 juta tidak dapat dikreditkan.",
      legal: "Pasal 24 UU PPh",
    },
    {
      id: "akt-007",
      levels: B,
      section: "jurnal-potput",
      kind: "konsep",
      prompt: "Badan menerima bunga deposito yang dipotong PPh final 20%. Perlakuan mana yang TIDAK tepat?",
      options: [
        "Pendapatan bunga dicatat sebesar bruto",
        "Potongan dicatat sebagai beban PPh final",
        "Potongan dikreditkan di SPT Tahunan PPh badan",
        "Pendapatan bunga dikoreksi negatif dalam rekonsiliasi",
      ],
      answer: 2,
      explanation:
        "PPh final tidak dapat dikreditkan di SPT Tahunan. Tiga perlakuan lainnya benar: pendapatan bruto, potongan sebagai beban final, dan koreksi negatif agar tidak terkena tarif umum lagi.",
    },
    {
      id: "akt-008",
      levels: B,
      section: "jurnal-potput",
      kind: "konsep",
      prompt:
        "PT C memotong PPh 23 pada 28 Maret 2026. Menurut PMK 81/2024, kapan batas setor dan jurnal apa yang dibuat saat menyetor?",
      options: [
        "15 April 2026; debit utang PPh 23, kredit kas",
        "20 April 2026; debit beban pajak, kredit kas",
        "15 April 2026; debit pajak dibayar di muka, kredit kas",
        "31 Maret 2026; debit utang PPh 23, kredit beban jasa",
      ],
      answer: 0,
      explanation:
        "PPh potong Masa disetor paling lambat tanggal 15 bulan berikutnya (lapor tanggal 20). Penyetoran menghapus utang PPh 23 terhadap kas. Tanggal 20 adalah batas lapor, bukan setor.",
      legal: "PMK 81/2024",
    },
    {
      id: "akt-009",
      levels: B,
      section: "jurnal-potput",
      kind: "konsep",
      prompt:
        "Badan X memberikan tunjangan PPh 21 kepada pegawai, sedangkan badan Y menanggung PPh 21 pegawai tanpa tunjangan dan mencatatnya sebagai beban pajak. Perlakuan fiskalnya adalah…",
      options: [
        "Keduanya dapat dikurangkan sebagai biaya gaji",
        "X dapat dikurangkan; Y dikoreksi positif",
        "X dikoreksi positif; Y dapat dikurangkan",
        "Keduanya dikoreksi positif karena PPh tidak boleh dibiayakan",
      ],
      answer: 1,
      explanation:
        "Tunjangan PPh adalah bagian penghasilan pegawai sehingga menjadi biaya gaji. PPh yang ditanggung tanpa tunjangan adalah pembayaran PPh yang dilarang dibiayakan (Pasal 9 ayat (1) huruf h).",
      legal: "Pasal 6 dan 9 ayat (1) huruf h UU PPh",
    },
    // aset-lancar
    {
      id: "akt-010",
      levels: B,
      section: "aset-lancar",
      kind: "kasus",
      prompt:
        "Badan dagang menghapus piutang Rp64 juta sebagai beban komersial. Piutang bukan piutang kecil dan syarat fiskal penghapusan belum terpenuhi. Koreksi fiskalnya adalah…",
      options: [
        "Koreksi negatif Rp64 juta",
        "Koreksi positif Rp14,08 juta",
        "Tanpa koreksi karena sudah dijurnal",
        "Koreksi positif Rp64 juta",
      ],
      answer: 3,
      explanation:
        "Seluruh beban Rp64 juta ditambahkan kembali. Rp14,08 juta (22% × Rp64 juta) adalah dampak pajak, bukan nilai koreksi.",
      source: "Latihan Soal UKP Tingkat B (v2)",
    },
    {
      id: "akt-011",
      levels: B,
      section: "aset-lancar",
      kind: "konsep",
      prompt:
        "Perusahaan manufaktur membentuk cadangan kerugian penurunan nilai piutang Rp40 juta. Bagaimana perlakuan fiskal dan jenis bedanya?",
      options: [
        "Koreksi positif; beda waktu yang berbalik saat piutang dihapus memenuhi syarat",
        "Koreksi positif; beda tetap yang tidak pernah berbalik",
        "Tanpa koreksi karena diwajibkan standar akuntansi",
        "Koreksi negatif; beda waktu",
      ],
      answer: 0,
      explanation:
        "Pembentukan cadangan dilarang bagi badan umum (Pasal 9 ayat (1) huruf c), sehingga dikoreksi positif. Karena kelak dapat dibebankan saat penghapusan memenuhi syarat, selisihnya beda waktu.",
      legal: "Pasal 9 ayat (1) huruf c UU PPh",
    },
    {
      id: "akt-012",
      levels: B,
      section: "aset-lancar",
      kind: "konsep",
      prompt: "Manakah yang BUKAN syarat penghapusan piutang tak tertagih sebagai biaya fiskal?",
      options: [
        "Telah dibebankan dalam laporan laba rugi komersial",
        "Daftar piutang yang dihapus diserahkan ke DJP",
        "Piutang telah lewat jatuh tempo paling sedikit dua tahun",
        "Ada penyerahan perkara ke pengadilan/PUPN, perjanjian penghapusan, publikasi, atau pengakuan debitur",
      ],
      answer: 2,
      explanation:
        "Pasal 6 ayat (1) huruf h mensyaratkan pembebanan komersial, daftar ke DJP, dan salah satu bukti penagihan/penghapusan. Lama jatuh tempo tidak menjadi syarat.",
      legal: "Pasal 6 ayat (1) huruf h UU PPh",
    },
    {
      id: "akt-013",
      levels: B,
      section: "aset-lancar",
      kind: "hitung",
      prompt:
        "Persediaan berharga perolehan Rp500 juta diturunkan ke nilai realisasi neto Rp460 juta dan selisihnya dibebankan. Metode FIFO dipakai konsisten. Koreksi fiskalnya adalah…",
      options: [
        "Koreksi negatif Rp40 juta",
        "Koreksi positif Rp40 juta",
        "Koreksi positif Rp8,8 juta",
        "Tanpa koreksi karena metode FIFO diperbolehkan",
      ],
      answer: 1,
      explanation:
        "Fiskal menilai persediaan dengan harga perolehan; beban penurunan nilai Rp500 juta − Rp460 juta = Rp40 juta adalah pencadangan yang dikoreksi positif. FIFO memang boleh, tetapi itu tidak membenarkan beban NRV.",
      legal: "Pasal 9 ayat (1) huruf c dan Pasal 10 ayat (6) UU PPh",
    },
    {
      id: "akt-014",
      levels: B,
      section: "aset-lancar",
      kind: "kasus",
      prompt:
        "Pada 1 April 2026 badan membayar sewa kantor 3 tahun Rp216 juta (dipotong PPh final 10%). Manfaat merata. Berapa beban sewa komersial 2026 dan koreksinya?",
      options: [
        "Rp216 juta; tanpa koreksi",
        "Rp54 juta; koreksi negatif Rp162 juta",
        "Rp48,6 juta; tanpa koreksi",
        "Rp54 juta; tanpa koreksi",
      ],
      answer: 3,
      explanation:
        "Beban per bulan Rp216 juta ÷ 36 = Rp6 juta; April–Desember 9 bulan = Rp54 juta. Fiskal juga membebankan biaya bermanfaat lebih dari setahun sesuai masa manfaat, jadi tidak ada koreksi. Potongan PPh tidak mengurangi beban bruto.",
    },
    // aset-tetap-liabilitas
    {
      id: "akt-015",
      levels: B,
      section: "aset-tetap-liabilitas",
      kind: "hitung",
      prompt:
        "Aset A: penyusutan komersial Rp45 juta, fiskal Rp30 juta. Aset B: komersial Rp50 juta, fiskal Rp70 juta. Berapa koreksi bersih penyusutan?",
      options: ["Positif Rp5 juta", "Negatif Rp5 juta", "Positif Rp35 juta", "Negatif Rp35 juta"],
      answer: 1,
      explanation:
        "Aset A koreksi positif Rp15 juta (komersial lebih besar); aset B koreksi negatif Rp20 juta (fiskal lebih besar). Bersih = Rp15 juta − Rp20 juta = negatif Rp5 juta.",
    },
    {
      id: "akt-016",
      levels: B,
      section: "aset-tetap-liabilitas",
      kind: "kasus",
      prompt:
        "Mesin dijual Rp180 juta. Nilai buku komersial Rp110 juta, nilai sisa buku fiskal Rp90 juta. Laba penjualan komersial sudah masuk laba. Koreksi fiskalnya adalah…",
      options: ["Positif Rp20 juta", "Negatif Rp20 juta", "Positif Rp90 juta", "Tanpa koreksi"],
      answer: 0,
      explanation:
        "Laba komersial = Rp180 juta − Rp110 juta = Rp70 juta; laba fiskal = Rp180 juta − Rp90 juta = Rp90 juta. Selisih Rp20 juta ditambahkan (koreksi positif).",
      legal: "Pasal 11 ayat (8) UU PPh",
    },
    {
      id: "akt-017",
      levels: B,
      section: "aset-tetap-liabilitas",
      kind: "konsep",
      prompt:
        "Badan merevaluasi gedung menurut SAK tanpa revaluasi untuk tujuan perpajakan. Penyusutan komersial bertambah akibat selisih revaluasi. Perlakuannya adalah…",
      options: [
        "Tambahan penyusutan boleh dikurangkan karena mencerminkan nilai wajar",
        "Surplus revaluasi dikenai tarif umum sebagai penghasilan",
        "Tambahan penyusutan dikoreksi negatif",
        "Tambahan penyusutan dikoreksi positif karena fiskal memakai harga perolehan",
      ],
      answer: 3,
      explanation:
        "Dasar penyusutan fiskal tetap harga perolehan selama tidak ada revaluasi pajak yang disetujui. Surplus revaluasi komersial bukan penghasilan fiskal, tetapi tambahan penyusutannya ditambahkan kembali.",
    },
    {
      id: "akt-018",
      levels: B,
      section: "aset-tetap-liabilitas",
      kind: "hitung",
      prompt:
        "Badan mengakui beban imbalan pascakerja Rp90 juta melalui pencadangan liabilitas (tanpa dana pensiun). Pembayaran pesangon tahun itu dari liabilitas Rp20 juta. Koreksi fiskalnya adalah…",
      options: ["Positif Rp90 juta", "Negatif Rp20 juta", "Positif Rp70 juta", "Positif Rp110 juta"],
      answer: 2,
      explanation:
        "Fiskal mengakui biaya saat dibayar, yaitu Rp20 juta, sedangkan komersial membebankan Rp90 juta. Koreksi positif = Rp90 juta − Rp20 juta = Rp70 juta (beda waktu).",
      legal: "Pasal 6 dan 9 ayat (1) huruf c UU PPh",
    },
    {
      id: "akt-019",
      levels: B,
      section: "aset-tetap-liabilitas",
      kind: "konsep",
      prompt: "Pernyataan mana yang benar tentang pos ekuitas dan kewajiban?",
      options: [
        "Setoran modal, termasuk agio saham, bukan objek PPh",
        "Agio saham yang diterima merupakan objek PPh badan",
        "Dividen yang dibagikan dapat dikurangkan sebagai biaya",
        "Bunga utang melebihi DER 4:1 tetap dapat dikurangkan seluruhnya",
      ],
      answer: 0,
      explanation:
        "Setoran modal dikecualikan dari objek (Pasal 4 ayat (3)). Dividen adalah pembagian laba yang dilarang dibiayakan, dan bunga di atas DER 4:1 tidak dapat dikurangkan.",
      legal: "Pasal 4 ayat (3), 9 ayat (1) huruf a, 18 ayat (1) UU PPh; PMK 169/2015",
    },
    // nirlaba
    {
      id: "akt-020",
      levels: B,
      section: "nirlaba",
      kind: "konsep",
      prompt: "Menurut ISAK 335, aset neto entitas berorientasi nonlaba disajikan dalam kelompok…",
      options: [
        "Terikat permanen, terikat temporer, dan tidak terikat",
        "Modal disetor dan saldo laba",
        "Tanpa pembatasan dan dengan pembatasan dari pemberi sumber daya",
        "Dana operasional dan dana investasi",
      ],
      answer: 2,
      explanation:
        "ISAK 335 memakai dua kelompok aset neto: tanpa dan dengan pembatasan. Tiga kelompok terikat permanen/temporer adalah format PSAK 45 lama.",
      legal: "ISAK 335",
    },
    {
      id: "akt-021",
      levels: B,
      section: "nirlaba",
      kind: "konsep",
      prompt: "Manakah yang BUKAN komponen laporan keuangan entitas nonlaba menurut ISAK 335?",
      options: [
        "Laporan perubahan aset neto",
        "Laporan penghasilan komprehensif",
        "Laporan arus kas",
        "Laporan perubahan ekuitas",
      ],
      answer: 3,
      explanation:
        "Entitas nonlaba tidak memiliki ekuitas pemilik, sehingga laporan perubahan ekuitas diganti laporan perubahan aset neto.",
      legal: "ISAK 335",
    },
    {
      id: "akt-022",
      levels: B,
      section: "nirlaba",
      kind: "konsep",
      prompt:
        "Yayasan pendidikan memperoleh sisa lebih. Agar dikecualikan dari objek PPh menurut PMK 68/2020, sisa lebih harus ditanamkan kembali dalam sarana dan prasarana pendidikan paling lama…",
      options: ["1 tahun", "4 tahun", "2 tahun", "5 tahun"],
      answer: 1,
      explanation:
        "Jangka penanaman kembali paling lama 4 tahun sejak sisa lebih diterima atau diperoleh. Bila lewat, sisa lebih menjadi objek pada tahun berakhirnya jangka waktu.",
      legal: "Pasal 4 ayat (3) huruf m UU PPh; PMK 68/2020",
    },
    {
      id: "akt-023",
      levels: B,
      section: "nirlaba",
      kind: "kasus",
      prompt:
        "Yayasan pendidikan menerima SPP, hibah Rp300 juta dari donatur tanpa hubungan usaha/kepemilikan, dan bunga deposito Rp50 juta. Sisa lebih kegiatan pendidikan ditanamkan kembali dalam 2 tahun. Perlakuan yang benar adalah…",
      options: [
        "Hibah bukan objek, bunga tetap PPh final, sisa lebih yang ditanam kembali dikecualikan",
        "Seluruh penerimaan bebas pajak karena yayasan nirlaba",
        "Hibah objek tarif umum, bunga dan sisa lebih dikecualikan",
        "Hibah dan sisa lebih bukan objek, bunga deposito ikut dikecualikan sebagai sisa lebih",
      ],
      answer: 0,
      explanation:
        "Hibah tanpa hubungan usaha/kepemilikan dikecualikan, sisa lebih yang ditanam ≤ 4 tahun dikecualikan, tetapi bunga deposito tetap dipotong PPh final. Status nirlaba tidak membebaskan semua penghasilan.",
      legal: "Pasal 4 ayat (2) dan (3) UU PPh; PMK 68/2020",
    },
    // pendapatan-biaya
    {
      id: "akt-024",
      levels: B,
      section: "pendapatan-biaya",
      kind: "konsep",
      prompt: "Urutan lima langkah pengakuan pendapatan menurut PSAK 115 adalah…",
      options: [
        "Kontrak → harga transaksi → kewajiban pelaksanaan → alokasi → pengakuan",
        "Kontrak → kewajiban pelaksanaan → harga transaksi → alokasi → pengakuan",
        "Kewajiban pelaksanaan → kontrak → alokasi → harga transaksi → pengakuan",
        "Kontrak → kewajiban pelaksanaan → alokasi → harga transaksi → pengakuan",
      ],
      answer: 1,
      explanation:
        "Identifikasi kontrak, identifikasi kewajiban pelaksanaan, tentukan harga transaksi, alokasikan ke kewajiban pelaksanaan, lalu akui pendapatan. Harga harus ditentukan sebelum dialokasikan.",
      legal: "PSAK 115",
    },
    {
      id: "akt-025",
      levels: B,
      section: "pendapatan-biaya",
      kind: "hitung",
      prompt:
        "Kontraktor kualifikasi kecil bersertifikat punya kontrak Rp1 miliar (tanpa PPN). Akhir tahun progres 60% (pendapatan PSAK 115 Rp600 juta) dan pembayaran diterima Rp500 juta. Berapa PPh final PP 9/2022 tahun itu?",
      options: ["Rp10,5 juta", "Rp17,5 juta", "Rp13,25 juta", "Rp8,75 juta"],
      answer: 3,
      explanation:
        "PPh final konstruksi terutang atas pembayaran: 1,75% × Rp500 juta = Rp8,75 juta. Rp10,5 juta keliru memakai pendapatan progres; Rp13,25 juta memakai tarif 2,65% untuk kualifikasi selain kecil.",
      legal: "PP 9/2022",
    },
    {
      id: "akt-026",
      levels: B,
      section: "pendapatan-biaya",
      kind: "hitung",
      prompt:
        "Pada 1 Oktober 2026 penyedia jasa menerima Rp240 juta untuk kontrak pemeliharaan 12 bulan yang merata. Berapa pendapatan 2026 dan liabilitas kontrak 31 Desember 2026?",
      options: [
        "Pendapatan Rp240 juta; liabilitas nihil",
        "Pendapatan Rp80 juta; liabilitas Rp160 juta",
        "Pendapatan Rp60 juta; liabilitas Rp180 juta",
        "Pendapatan nihil; liabilitas Rp240 juta",
      ],
      answer: 2,
      explanation:
        "Jasa per bulan Rp20 juta; Oktober–Desember 3 bulan = Rp60 juta. Sisa Rp180 juta masih kewajiban pelaksanaan yang belum dipenuhi. Rp80 juta salah menghitung 4 bulan.",
      legal: "PSAK 115",
    },
    {
      id: "akt-027",
      levels: B,
      section: "pendapatan-biaya",
      kind: "konsep",
      prompt: "Badan memiliki usaha dagang dan menyewakan gedung (PPh final). Beban mana yang dikoreksi positif?",
      options: [
        "Gaji karyawan toko",
        "Pemeliharaan gedung yang disewakan",
        "Listrik kantor toko",
        "PBB atas gudang toko",
      ],
      answer: 1,
      explanation:
        "Biaya untuk memperoleh penghasilan final tidak dapat dikurangkan dari penghasilan tarif umum. Beban lain terkait usaha dagang tetap dapat dikurangkan, termasuk PBB.",
      legal: "Pasal 6 ayat (1) dan Pasal 9 UU PPh",
    },
    {
      id: "akt-028",
      levels: B,
      section: "pendapatan-biaya",
      kind: "hitung",
      prompt:
        "Biaya umum bersama Rp90 juta tidak dapat dipisahkan. Peredaran usaha tarif umum Rp1,6 miliar dan sewa gedung final Rp400 juta. Dengan asumsi alokasi proporsional peredaran bruto, berapa koreksi positifnya?",
      options: ["Rp18 juta", "Rp22,5 juta", "Rp72 juta", "Rp9 juta"],
      answer: 0,
      explanation:
        "Porsi final = Rp400 juta ÷ Rp2 miliar = 20%; 20% × Rp90 juta = Rp18 juta dikoreksi positif. Rp22,5 juta keliru membagi dengan Rp1,6 miliar; Rp72 juta adalah porsi tarif umum.",
    },
    // rekonsiliasi
    {
      id: "akt-029",
      levels: B,
      section: "rekonsiliasi",
      kind: "konsep",
      prompt: "Manakah yang merupakan beda waktu?",
      options: [
        "Bunga STP yang dibebankan",
        "Sumbangan yang tidak memenuhi syarat",
        "Bunga deposito yang dikenai PPh final",
        "Selisih penyusutan komersial dan fiskal",
      ],
      answer: 3,
      explanation:
        "Selisih penyusutan akan berbalik selama umur aset sehingga merupakan beda waktu. Sanksi, sumbangan, dan penghasilan final adalah beda tetap.",
    },
    {
      id: "akt-030",
      levels: B,
      section: "rekonsiliasi",
      kind: "konsep",
      prompt: "Pos mana yang menghasilkan koreksi negatif?",
      options: [
        "Pendapatan sewa bangunan yang dikenai PPh final dan sudah masuk laba",
        "Beban sanksi bunga pajak",
        "Biaya pribadi pemegang saham",
        "Penyusutan komersial lebih besar dari fiskal",
      ],
      answer: 0,
      explanation:
        "Penghasilan final dikeluarkan dari laba yang dikenai tarif umum melalui koreksi negatif. Tiga lainnya menambah laba fiskal (koreksi positif).",
    },
    {
      id: "akt-031",
      levels: B,
      section: "rekonsiliasi",
      kind: "kasus",
      prompt:
        "Laba komersial memuat biaya pribadi pemegang saham Rp30 juta, penyusutan komersial di atas fiskal Rp40 juta, dan penghasilan final Rp10 juta. Berapa koreksi bersih dan pos mana yang menimbulkan pajak tangguhan?",
      options: [
        "Positif Rp80 juta; biaya pribadi",
        "Negatif Rp60 juta; penghasilan final",
        "Positif Rp60 juta; selisih penyusutan",
        "Positif Rp20 juta; tidak ada",
      ],
      answer: 2,
      explanation:
        "Koreksi bersih = +Rp30 juta + Rp40 juta − Rp10 juta = positif Rp60 juta. Hanya selisih penyusutan yang berbalik (beda waktu); biaya pribadi dan penghasilan final adalah beda tetap.",
    },
    {
      id: "akt-032",
      levels: B,
      section: "rekonsiliasi",
      kind: "kasus",
      prompt:
        "Laba komersial Rp720 juta mencakup bunga deposito final Rp40 juta. Ada biaya tidak boleh dikurangkan Rp30 juta, penyusutan fiskal lebih besar Rp20 juta, dan kompensasi rugi tersedia Rp50 juta. Berapa PKP?",
      options: ["Rp690 juta", "Rp640 juta", "Rp660 juta", "Rp680 juta"],
      answer: 1,
      explanation:
        "PKP = Rp720 juta − Rp40 juta + Rp30 juta − Rp20 juta − Rp50 juta = Rp640 juta. Penghasilan final dan tambahan penyusutan fiskal mengurangi laba fiskal.",
    },
    {
      id: "akt-033",
      levels: B,
      section: "rekonsiliasi",
      kind: "konsep",
      prompt: "Urutan penghitungan yang benar dari laba komersial sampai PPh 29 adalah…",
      options: [
        "Laba komersial → kompensasi rugi → koreksi fiskal → PKP → tarif → kredit",
        "Laba komersial → koreksi fiskal → kredit pajak → kompensasi rugi → tarif",
        "Laba komersial → koreksi fiskal → tarif → kompensasi rugi → kredit",
        "Laba komersial → koreksi fiskal → kompensasi rugi → PKP → tarif → kredit",
      ],
      answer: 3,
      explanation:
        "Koreksi fiskal menghasilkan laba fiskal, baru dikurangi kompensasi rugi menjadi PKP. Tarif diterapkan pada PKP, lalu kredit pajak mengurangi PPh terutang.",
    },
    // pajak-kini-tangguhan
    {
      id: "akt-034",
      levels: B,
      section: "pajak-kini-tangguhan",
      kind: "hitung",
      prompt:
        "Nilai tercatat aset Rp180 juta dan dasar pajaknya Rp200 juta. Tarif saat pembalikan 22% dan syarat pengakuan terpenuhi. Dampaknya adalah…",
      options: [
        "Liabilitas pajak tangguhan Rp4,4 juta",
        "Aset pajak tangguhan Rp20 juta",
        "Aset pajak tangguhan Rp4,4 juta",
        "Tidak ada karena beda tetap",
      ],
      answer: 2,
      explanation:
        "Dasar pajak aset lebih tinggi Rp20 juta sehingga timbul beda temporer dapat dikurangkan. Aset pajak tangguhan = 22% × Rp20 juta = Rp4,4 juta.",
      legal: "PSAK 212",
    },
    {
      id: "akt-035",
      levels: B,
      section: "pajak-kini-tangguhan",
      kind: "kasus",
      prompt:
        "Badan beromzet Rp80 miliar (Pasal 31E tidak berlaku) memiliki PPh terutang Rp440 juta. Pajak dibayar di muka: PPh 22 Rp30 juta, PPh 23 Rp40 juta, PPh 25 Rp300 juta. Berapa beban pajak kini dan utang PPh 29 di neraca?",
      options: [
        "Beban Rp440 juta; utang Rp70 juta",
        "Beban Rp70 juta; utang Rp70 juta",
        "Beban Rp440 juta; utang Rp440 juta",
        "Beban Rp370 juta; utang Rp70 juta",
      ],
      answer: 0,
      explanation:
        "Jurnal: debit beban pajak kini Rp440 juta, kredit utang PPh badan; lalu debit utang Rp370 juta, kredit pajak dibayar di muka. Sisa utang PPh 29 = Rp440 juta − Rp370 juta = Rp70 juta. Beban pajak kini tetap Rp440 juta.",
    },
    {
      id: "akt-036",
      levels: B,
      section: "pajak-kini-tangguhan",
      kind: "hitung",
      prompt:
        "Beban pajak kini Rp440 juta. Liabilitas pajak tangguhan naik dari Rp20 juta menjadi Rp31 juta dan tidak ada pos ekuitas. Berapa beban pajak penghasilan di laba rugi?",
      options: ["Rp429 juta", "Rp471 juta", "Rp440 juta", "Rp451 juta"],
      answer: 3,
      explanation:
        "Kenaikan LPT Rp11 juta = beban pajak tangguhan (debit beban pajak tangguhan, kredit LPT). Total = Rp440 juta + Rp11 juta = Rp451 juta. Rp471 juta keliru memakai saldo akhir LPT.",
      legal: "PSAK 212",
    },
    {
      id: "akt-037",
      levels: B,
      section: "pajak-kini-tangguhan",
      kind: "hitung",
      prompt:
        "Koreksi positif pencadangan imbalan kerja Rp70 juta adalah beda temporer dapat dikurangkan; tarif 22% dan keterpulihan terpenuhi. Jurnal pajak tangguhannya adalah…",
      options: [
        "Debit beban pajak tangguhan, kredit LPT Rp15,4 juta",
        "Debit aset pajak tangguhan, kredit manfaat pajak tangguhan Rp15,4 juta",
        "Debit aset pajak tangguhan, kredit utang PPh Rp70 juta",
        "Debit beban pajak kini, kredit aset pajak tangguhan Rp15,4 juta",
      ],
      answer: 1,
      explanation:
        "Biaya baru dapat dikurangkan saat dibayar sehingga kelak mengurangi pajak: aset pajak tangguhan 22% × Rp70 juta = Rp15,4 juta dengan lawan manfaat pajak tangguhan.",
      legal: "PSAK 212",
    },
    {
      id: "akt-038",
      levels: B,
      section: "pajak-kini-tangguhan",
      kind: "konsep",
      prompt: "Tarif yang dipakai mengukur aset dan liabilitas pajak tangguhan adalah…",
      options: [
        "Tarif saat aset diperoleh",
        "Tarif rata-rata lima tahun terakhir",
        "Tarif yang diperkirakan berlaku saat pembalikan, berdasarkan peraturan yang telah atau secara substantif berlaku",
        "Tarif PPh final yang berlaku atas aset itu",
      ],
      answer: 2,
      explanation:
        "PSAK 212 memakai tarif periode realisasi aset atau penyelesaian liabilitas, menurut peraturan yang telah berlaku atau secara substantif berlaku pada akhir periode pelaporan.",
      legal: "PSAK 212",
    },
    {
      id: "akt-039",
      levels: B,
      section: "pajak-kini-tangguhan",
      kind: "kasus",
      prompt:
        "Staf akuntansi mencatat aset pajak tangguhan 22% × Rp50 juta = Rp11 juta atas beban sanksi bunga pajak Rp50 juta. Apa kesalahannya?",
      options: [
        "Tarif seharusnya 11% karena Pasal 31E",
        "Seharusnya liabilitas pajak tangguhan, bukan aset",
        "Sanksi seharusnya dikoreksi negatif",
        "Sanksi adalah beda tetap sehingga tidak menimbulkan pajak tangguhan",
      ],
      answer: 3,
      explanation:
        "Sanksi pajak tidak pernah dapat dikurangkan sehingga tidak berbalik. Ia hanya dikoreksi positif dalam pajak kini, tanpa pajak tangguhan.",
    },
    {
      id: "akt-040",
      levels: B,
      section: "pajak-kini-tangguhan",
      kind: "konsep",
      prompt: "ISAK 123 mengatur…",
      options: [
        "Penyajian PPN Masukan yang belum dikreditkan",
        "Pengukuran pajak saat ada ketidakpastian perlakuan PPh, memakai jumlah paling mungkin atau nilai ekspektasian",
        "Pajak tangguhan atas goodwill dalam kombinasi bisnis",
        "Pengakuan pendapatan kontrak konstruksi",
      ],
      answer: 1,
      explanation:
        "ISAK 123 (dahulu ISAK 34) membahas ketidakpastian perlakuan PPh, misalnya saat sengketa. Entitas memilih metode yang lebih baik memprediksi penyelesaian.",
      legal: "ISAK 123",
    },
    {
      id: "akt-041",
      levels: B,
      section: "pajak-kini-tangguhan",
      kind: "hitung",
      prompt:
        "Badan dalam negeri memenuhi syarat Pasal 31E dengan peredaran bruto Rp9,6 miliar dan PKP Rp800 juta. Berapa beban pajak kini yang dijurnal?",
      options: ["Rp176 juta", "Rp88 juta", "Rp132 juta", "Rp110 juta"],
      answer: 2,
      explanation:
        "Bagian fasilitas = Rp4,8 miliar ÷ Rp9,6 miliar × Rp800 juta = Rp400 juta. PPh = 11% × Rp400 juta + 22% × Rp400 juta = Rp44 juta + Rp88 juta = Rp132 juta. Rp176 juta mengabaikan Pasal 31E.",
      legal: "Pasal 17 dan 31E UU PPh",
    },
    {
      id: "akt-042",
      levels: B,
      section: "pajak-kini-tangguhan",
      kind: "konsep",
      prompt: "Sejak 1 Januari 2024, standar akuntansi pajak penghasilan (dahulu PSAK 46) bernomor…",
      options: ["PSAK 212", "PSAK 115", "PSAK 216", "ISAK 335"],
      answer: 0,
      explanation:
        "DSAK IAI menomori ulang SAK mulai 1 Januari 2024: PSAK 46 menjadi PSAK 212. PSAK 115 untuk pendapatan, PSAK 216 untuk aset tetap.",
      legal: "PSAK 212",
    },
    {
      id: "akt-043",
      levels: B,
      section: "aset-tetap-liabilitas",
      kind: "hitung",
      prompt:
        "Asumsikan saldo rata-rata modal Rp5 miliar, utang berbunga Rp30 miliar, dan beban bunga Rp3 miliar. Dengan DER 4:1, berapa koreksi positif bunga?",
      options: ["Rp2 miliar", "Rp1 miliar", "Rp0,5 miliar", "Nihil"],
      answer: 1,
      explanation:
        "Utang yang diperkenankan = 4 × Rp5 miliar = Rp20 miliar. Bunga yang boleh = Rp20 miliar ÷ Rp30 miliar × Rp3 miliar = Rp2 miliar; koreksi positif Rp1 miliar.",
      legal: "PMK 169/2015",
    },
    {
      id: "akt-044",
      levels: B,
      section: "nirlaba",
      kind: "konsep",
      prompt: "Hibah yang diterima yayasan TIDAK dikecualikan dari objek PPh bila…",
      options: [
        "Pemberi hibah adalah orang pribadi",
        "Hibah berupa uang tunai",
        "Ada hubungan usaha, pekerjaan, kepemilikan, atau penguasaan antara pemberi dan penerima",
        "Hibah dicatat sebagai aset neto dengan pembatasan",
      ],
      answer: 2,
      explanation:
        "Pengecualian hibah gugur bila ada hubungan usaha, pekerjaan, kepemilikan, atau penguasaan. Bentuk hibah dan klasifikasi aset neto tidak menentukan status objek.",
      legal: "Pasal 4 ayat (3) huruf a UU PPh",
    },
    {
      id: "akt-045",
      levels: B,
      section: "pendapatan-biaya",
      kind: "konsep",
      prompt:
        "Dividen dari PT dalam negeri diterima badan dalam negeri dan sudah masuk laba komersial. Perlakuannya dalam rekonsiliasi adalah…",
      options: [
        "Tanpa koreksi; PPh 23 15% dikreditkan",
        "Koreksi positif karena belum dipotong",
        "Tanpa koreksi; dikenai PPh final 10%",
        "Koreksi negatif karena dikecualikan dari objek",
      ],
      answer: 3,
      explanation:
        "Dividen dalam negeri yang diterima badan dalam negeri dikecualikan dari objek PPh (tanpa syarat kepemilikan sejak UU Cipta Kerja), sehingga dikeluarkan dengan koreksi negatif.",
      legal: "Pasal 4 ayat (3) huruf f UU PPh",
    },
  ],
  flashcards: [
    { front: "Akun pemotong atas PPh 23 yang belum disetor", back: "Utang PPh 23 (kredit)", levels: B, section: "jurnal-potput" },
    { front: "Akun penerima atas PPh 23 yang dipotong", back: "Pajak dibayar di muka (debit), pendapatan tetap bruto", levels: B, section: "jurnal-potput" },
    { front: "Akun penerima atas PPh final 4(2)", back: "Beban PPh final (tidak dapat dikreditkan)", levels: B, section: "jurnal-potput" },
    { front: "PPh 22 impor di pembukuan importir", back: "PPh 22 dibayar di muka, bukan harga perolehan persediaan", levels: B, section: "jurnal-potput" },
    { front: "Batas kredit PPh 24", back: "Penghasilan LN ÷ PKP × PPh terutang, per negara; maksimal pajak LN yang dibayar", levels: B, section: "jurnal-potput" },
    { front: "Batas setor dan lapor PPh potong Masa (PMK 81/2024)", back: "Setor tanggal 15, lapor tanggal 20 bulan berikutnya", levels: B, section: "jurnal-potput" },
    { front: "Tunjangan PPh 21 vs PPh 21 ditanggung", back: "Tunjangan: biaya gaji; ditanggung tanpa tunjangan: koreksi positif", levels: B, section: "jurnal-potput" },
    { front: "Cadangan kerugian piutang badan dagang", back: "Koreksi positif, beda waktu", levels: B, section: "aset-lancar" },
    { front: "Tiga syarat penghapusan piutang fiskal", back: "Dibebankan komersial; daftar ke DJP; perkara ke PN/PUPN, perjanjian, publikasi, atau pengakuan debitur", levels: B, section: "aset-lancar" },
    { front: "Metode persediaan yang diperbolehkan fiskal", back: "Rata-rata atau FIFO (LIFO tidak boleh)", levels: B, section: "aset-lancar" },
    { front: "Beban penurunan nilai persediaan ke NRV", back: "Koreksi positif", levels: B, section: "aset-lancar" },
    { front: "Laba pengalihan aset fiskal", back: "Harga jual − nilai sisa buku fiskal", levels: B, section: "aset-tetap-liabilitas" },
    { front: "Penyusutan tambahan dari revaluasi SAK", back: "Koreksi positif", levels: B, section: "aset-tetap-liabilitas" },
    { front: "Pencadangan imbalan kerja", back: "Boleh dibiayakan saat dibayar; selisih dikoreksi positif (beda waktu)", levels: B, section: "aset-tetap-liabilitas" },
    { front: "DER yang diperkenankan PMK 169/2015", back: "4 : 1", levels: B, section: "aset-tetap-liabilitas" },
    { front: "Standar penyajian LK nonlaba", back: "ISAK 335", levels: B, section: "nirlaba" },
    { front: "Kelompok aset neto ISAK 335", back: "Tanpa pembatasan dan dengan pembatasan dari pemberi sumber daya", levels: B, section: "nirlaba" },
    { front: "Jangka tanam kembali sisa lebih pendidikan/litbang", back: "Paling lama 4 tahun (PMK 68/2020)", levels: B, section: "nirlaba" },
    { front: "Lima langkah PSAK 115", back: "Kontrak → kewajiban pelaksanaan → harga → alokasi → pengakuan", levels: B, section: "pendapatan-biaya" },
    { front: "Dasar PPh final jasa konstruksi", back: "Pembayaran yang diterima/dibayarkan, termasuk uang muka", levels: B, section: "pendapatan-biaya" },
    { front: "Tarif konstruksi kualifikasi kecil bersertifikat", back: "1,75%", levels: B, section: "pendapatan-biaya" },
    { front: "Tarif konstruksi tanpa sertifikat / konsultansi tanpa sertifikat", back: "4% / 6%", levels: B, section: "pendapatan-biaya" },
    { front: "Rumus laba fiskal", back: "Laba komersial + koreksi positif − koreksi negatif", levels: B, section: "rekonsiliasi" },
    { front: "Ciri beda tetap", back: "Tidak berbalik; tanpa pajak tangguhan (sanksi, sumbangan, penghasilan final)", levels: B, section: "rekonsiliasi" },
    { front: "Ciri beda waktu", back: "Berbalik di periode lain; dasar pajak tangguhan (penyusutan, cadangan)", levels: B, section: "rekonsiliasi" },
    { front: "Kapan kompensasi rugi dikurangkan", back: "Setelah koreksi fiskal, sebelum tarif", levels: B, section: "rekonsiliasi" },
    { front: "Nomor baru PSAK 46", back: "PSAK 212 (berlaku 1 Januari 2024)", levels: B, section: "pajak-kini-tangguhan" },
    { front: "Aset: nilai tercatat > dasar pajak", back: "Liabilitas pajak tangguhan", levels: B, section: "pajak-kini-tangguhan" },
    { front: "Aset: nilai tercatat < dasar pajak", back: "Aset pajak tangguhan (bila dapat dipulihkan)", levels: B, section: "pajak-kini-tangguhan" },
    { front: "Beban pajak penghasilan total", back: "Pajak kini + beban (manfaat) pajak tangguhan", levels: B, section: "pajak-kini-tangguhan" },
    { front: "ISAK 123", back: "Ketidakpastian perlakuan PPh (dahulu ISAK 34)", levels: B, section: "pajak-kini-tangguhan" },
  ],
};

export default content;
