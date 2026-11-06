import type { UkpLevel, UkpTopic } from "./ukp";

type Note = [title: string, summary: string];
type TopicNotes = Partial<Record<UkpTopic, Note[]>>;

const kup: Note[] = [
  [
    "NPWP dan pengukuhan PKP",
    "Bedakan NIK sebagai NPWP bagi orang pribadi penduduk, NPWP 16 digit bagi kategori lainnya, dan NITKU untuk tempat usaha. Pengusaha yang melampaui Rp4,8 miliar melapor paling lambat akhir tahun buku saat batas terlampaui.",
  ],
  [
    "Pembayaran dan pelaporan",
    "PPh Masa umumnya disetor tanggal 15 dan dilaporkan tanggal 20 bulan berikutnya. SPT Tahunan OP jatuh tempo tiga bulan setelah akhir tahun pajak, sedangkan badan empat bulan. Perpanjangan pelaporan dapat mencapai dua bulan dengan pemberitahuan.",
  ],
  [
    "STP dan jenis SKP",
    "STP menagih kekurangan tertentu atau sanksi. SKPKB menetapkan kurang bayar, SKPKBT menambah ketetapan karena data baru, SKPLB menetapkan lebih bayar, dan SKPN menetapkan nihil.",
  ],
  [
    "Penagihan dengan Surat Paksa",
    "Hafalkan urutan setelah jatuh tempo: Teguran (7 hari), Surat Paksa (21 hari dari Teguran), sita (2 × 24 jam sejak pemberitahuan Surat Paksa), pengumuman lelang (14 hari dari sita), lalu lelang (14 hari dari pengumuman).",
  ],
  [
    "Pembetulan, keberatan, dan Pasal 36",
    "Pembetulan menangani kesalahan tulis, hitung, atau penerapan ketentuan. Keberatan atas ketetapan umumnya diajukan dalam tiga bulan dan diputus dalam 12 bulan. Pasal 36 mencakup pengurangan sanksi atau pembatalan ketetapan dalam kondisi tertentu.",
  ],
  [
    "Banding, gugatan, dan peninjauan kembali",
    "Banding menguji keputusan keberatan dan umumnya diajukan dalam tiga bulan sejak diterima. Gugatan penagihan memiliki tenggat 14 hari, sedangkan gugatan keputusan lain 30 hari. Peninjauan kembali diajukan ke Mahkamah Agung.",
  ],
  [
    "Pembukuan dan pencatatan",
    "Badan wajib pembukuan. Orang pribadi yang memenuhi syarat NPPN dapat melakukan pencatatan. Simpan buku, catatan, dan dokumen pendukung selama 10 tahun.",
  ],
  [
    "Penelitian, pemeriksaan, dan penyidikan",
    "Penelitian menguji unsur formal atau hitungan. Pemeriksaan menguji kepatuhan dan dapat menghasilkan SKP. Bukti permulaan dan penyidikan berhubungan dengan dugaan tindak pidana.",
  ],
  [
    "Sanksi administrasi",
    "Tentukan apakah soal membahas denda, bunga, atau kenaikan. Denda keterlambatan SPT Masa PPN Rp500 ribu dan SPT Tahunan badan Rp1 juta. Gunakan tarif bunga yang diberikan dalam soal karena tarif acuan berubah.",
  ],
  [
    "Restitusi",
    "Bandingkan jalur pemeriksaan dengan batas keputusan 12 bulan dan pengembalian pendahuluan untuk kategori yang memenuhi syarat. Bedakan SKPLB dari keputusan pengembalian pendahuluan.",
  ],
  [
    "Pidana perpajakan",
    "Bedakan kealpaan, kesengajaan, dan faktur atau bukti pajak tanpa transaksi yang sebenarnya. Perhatikan tahap perkara saat membandingkan pengungkapan dan penghentian penyidikan.",
  ],
];

const meterai: Note[] = [
  [
    "Objek, tarif, dan saat terutang",
    "Tarifnya Rp10.000 per dokumen. Kuitansi harus menyatakan jumlah lebih dari Rp5 juta agar masuk objek berdasarkan nominal. Perjanjian terutang saat ditandatangani, sedangkan dokumen luar negeri saat digunakan di Indonesia.",
  ],
  [
    "Pemungut Bea Meterai",
    "Pemungut yang ditunjuk memungut, menyetor, dan melapor. Bedakan pihak yang bertanggung jawab atas Bea Meterai dari pihak yang menjalankan pemungutan.",
  ],
  [
    "Cara pembayaran",
    "Gunakan meterai tempel untuk dokumen kertas dan meterai elektronik untuk dokumen elektronik. Pemeteraian kemudian dan pemungutan tertentu dapat dilunasi lewat setoran.",
  ],
  [
    "Sanksi dan pemeteraian kemudian",
    "Kekurangan bayar pada dokumen yang sejak awal terutang dapat memicu sanksi administrasi 100%. Bedakan dari dokumen yang baru terutang saat diajukan sebagai alat bukti. Pemalsuan dan penggunaan ulang masuk ranah pidana.",
  ],
];

const nppn: Note = [
  "Norma Penghitungan Penghasilan Neto",
  "Kalikan bruto dengan persentase norma. Syarat pokoknya antara lain bruto kurang dari Rp4,8 miliar, pemberitahuan dalam tiga bulan pertama tahun pajak, dan pencatatan. Biaya riil tidak dikurangkan lagi.",
];
const keluarga: Note = [
  "Penghasilan keluarga",
  "Untuk status pisah harta atau memilih terpisah, gabungkan neto suami dan istri, hitung pajak, lalu bagi menurut proporsi neto. Penghasilan istri dari satu pemberi kerja dapat diperlakukan tersendiri jika seluruh syarat terpenuhi.",
];
const tarifOp: Note = [
  "PTKP dan tarif progresif",
  "PTKP dasar Rp54 juta. Tambahkan Rp4,5 juta untuk kawin dan tiap tanggungan yang memenuhi syarat, maksimal tiga. Tarif 5%, 15%, 25%, 30%, dan 35% berlaku bertahap dengan batas PKP Rp60 juta, Rp250 juta, Rp500 juta, dan Rp5 miliar.",
];
const op: Note[] = [
  [
    "Subjek pajak orang pribadi dan warisan",
    "Periksa tempat tinggal, keberadaan lebih dari 183 hari dalam 12 bulan, atau niat menetap. Warisan yang belum terbagi menjadi subjek pengganti sampai terbagi.",
  ],
  [
    "Awal dan akhir kewajiban subjektif",
    "Perhatikan kapan seseorang lahir, datang dengan niat menetap, meninggal, atau meninggalkan Indonesia untuk selamanya. Bedakan bagian tahun karena perubahan status dengan berhenti bekerja di tengah tahun.",
  ],
  [
    "Pengecualian sebagai subjek",
    "Pejabat perwakilan negara asing dan organisasi internasional tertentu dapat dikecualikan bila syarat status, sumber penghasilan, dan ketentuan lain terpenuhi.",
  ],
  [
    "Objek PPh orang pribadi",
    "Kelompokkan penghasilan dari pekerjaan, usaha atau pekerjaan bebas, modal, dan sumber lain. Setelah mengenali sumber, tentukan apakah dikenai tarif umum, final, atau dikecualikan.",
  ],
  [
    "PPh final dan omzet tertentu",
    "Untuk orang pribadi yang memenuhi skema 0,5%, bagian omzet sampai Rp500 juta setahun tidak dikenai PPh. Cek batas omzet Rp4,8 miliar dan pengecualian pekerjaan bebas.",
  ],
  [
    "Penghasilan yang dikecualikan",
    "Warisan, hibah tertentu, dan pembayaran klaim asuransi tertentu dapat dikecualikan. Untuk hibah, perhatikan penerima serta hubungan usaha, pekerjaan, kepemilikan, atau penguasaan.",
  ],
  [
    "Biaya fiskal",
    "Biaya usaha pada prinsipnya terkait mendapatkan, menagih, dan memelihara penghasilan. Pisahkan biaya pribadi, PPh, dan biaya terkait penghasilan final dari pengurang penghasilan tarif umum.",
  ],
  nppn,
  keluarga,
  [
    "Kompensasi kerugian",
    "Kerugian fiskal dari pembukuan umumnya dapat digunakan selama lima tahun berikutnya. Pengguna NPPN tidak mengompensasikan rugi fiskal.",
  ],
  tarifOp,
  [
    "PKP dan penyesuaian fiskal",
    "Hitung neto fiskal, kurangi kompensasi rugi bila tersedia dan PTKP, lalu bulatkan PKP ke bawah dalam ribuan rupiah penuh sebelum menerapkan tarif.",
  ],
  [
    "Kredit pajak",
    "Pajak yang dibayar atau dipotong sepanjang tahun dapat mengurangi pajak tahunan bila memenuhi syarat kredit. Pisahkan PPh final dan periksa batas kredit pajak luar negeri.",
  ],
  [
    "PPh akhir tahun dan angsuran PPh 25",
    "Bandingkan PPh terutang dan kredit untuk menentukan kurang atau lebih bayar. Angsuran umum tahun berjalan memakai PPh tahun lalu atas penghasilan teratur setelah kredit yang diperhitungkan, dibagi 12.",
  ],
  [
    "SPT Tahunan orang pribadi",
    "Batas umum lapor adalah tiga bulan setelah tahun pajak berakhir. Cocokkan data terisi otomatis dengan bukti potong dan lengkapi informasi penghasilan, harta, serta kewajiban.",
  ],
];

const pph21: Note[] = [
  [
    "Pemotong dan penerima PPh 21",
    "Identifikasi pemberi kerja atau pembayar yang wajib memotong, lalu klasifikasikan penerima sebagai pegawai tetap, tidak tetap, bukan pegawai, peserta kegiatan, atau kategori lain.",
  ],
  [
    "Objek dan pengecualian PPh 21",
    "Gaji, tunjangan, bonus, honorarium, dan imbalan sejenis umumnya masuk objek. Cek pengecualian untuk pembayaran asuransi tertentu serta natura yang memenuhi ketentuan.",
  ],
  [
    "Natura dan kenikmatan",
    "Identifikasi apakah manfaat berupa barang atau fasilitas. Periksa pengecualian seperti makanan bagi seluruh pegawai atau fasilitas yang diwajibkan untuk pekerjaan.",
  ],
  [
    "Pengurangan bruto",
    "Biaya jabatan pegawai tetap 5% dengan batas Rp500 ribu sebulan atau Rp6 juta setahun. Biaya pensiun berbeda, yakni 5% dengan batas Rp200 ribu sebulan atau Rp2,4 juta setahun.",
  ],
  [
    "TER dan perhitungan masa terakhir",
    "Pakai TER atas bruto pada masa biasa. Pada masa pajak terakhir, hitung pajak dengan tarif Pasal 17 dan kurangi potongan sebelumnya. THR dan bonus menambah bruto di bulan pembayaran.",
  ],
  [
    "Hak dan kewajiban serta SPT Masa",
    "Pemotong menyetor, melapor, dan memberikan bukti potong. Penerima menggunakan bukti untuk kredit atas PPh nonfinal. PPh 21 dan PPh 26 terkait pekerjaan dilaporkan melalui SPT Masa PPh 21/26.",
  ],
  [
    "PPh 21 final",
    "Pesangon sekaligus dan pembayaran sekaligus atas JHT, THT, atau pensiun memiliki lapisan tarif final yang berbeda. Identifikasi jenis pembayaran sebelum memilih tabel tarif.",
  ],
];
const pph23: Note = [
  "PPh 23 dan pengecualiannya",
  "Tarif 15% berlaku antara lain pada royalti. Tarif 2% berlaku pada jasa tertentu dan sewa harta selain tanah atau bangunan. Periksa pengecualian seperti pembayaran kepada bank dan sewa guna usaha dengan hak opsi.",
];
const pphFinal: Note = [
  "PPh final Pasal 4 ayat (2)",
  "Petakan objek dan tarifnya: sewa tanah atau bangunan 10%, pengalihan tanah atau bangunan umumnya 2,5%, dan hadiah undian 25%. Periksa apakah pajak dipotong pembayar atau disetor sendiri.",
];
const pph26: Note = [
  "PPh 26 dan perjanjian pajak",
  "Tarif umum untuk objek yang dikenai atas bruto adalah 20%. Periksa jenis penghasilan, status penerima luar negeri, dan kelayakan P3B, termasuk Formulir DGT sesuai ketentuan PMK 112/2025.",
];
const ppn: Note[] = [
  [
    "Mekanisme PPN",
    "PKP memperhitungkan Pajak Keluaran terhadap Pajak Masukan yang dapat dikreditkan. Selisih menentukan posisi kurang atau lebih bayar masa pajak.",
  ],
  [
    "Kewajiban PKP",
    "PKP memungut PPN atas penyerahan yang terutang, menerbitkan faktur, menyetor jika ada kurang bayar, dan melaporkan SPT Masa.",
  ],
  [
    "Objek PPN",
    "Kenali penyerahan BKP atau JKP, impor BKP, pemanfaatan dari luar negeri, ekspor, serta objek khusus. Bedakan objek PPN dari penyerahan yang mendapat fasilitas.",
  ],
  [
    "DPP dan tarif",
    "Pada skema umum nonmewah, PPN = 12% × 11/12 × harga. Barang mewah yang masuk skema penuh memakai 12% atas dasar penuh. Ekspor yang memenuhi ketentuan bertarif 0%.",
  ],
  [
    "Faktur, retur, dan pembatalan",
    "Faktur dibuat saat penyerahan atau saat pembayaran jika lebih awal. Faktur gabungan dibuat pada akhir bulan penyerahan. Retur barang dan pembatalan jasa menggunakan dokumen berbeda.",
  ],
  [
    "Kredit Pajak Masukan",
    "Periksa hubungan dengan kegiatan usaha dan kelengkapan faktur. Jika syarat terpenuhi, kredit dapat dilakukan paling lambat tiga masa setelah masa faktur.",
  ],
  [
    "Pemungut PPN",
    "Dalam transaksi dengan pemungut yang ditunjuk, pemungut menyetor PPN. PKP rekanan tetap menerbitkan faktur dan melaporkan transaksi.",
  ],
  [
    "SPT Masa PPN",
    "Rekonsiliasi Pajak Keluaran, Pajak Masukan, dan kompensasi dari masa sebelumnya. Setor kurang bayar sebelum pelaporan, dengan batas umum akhir bulan berikutnya.",
  ],
  [
    "Fasilitas PPN",
    "Pada PPN tidak dipungut, Pajak Masukan terkait dapat dikreditkan jika memenuhi syarat. Pada PPN dibebaskan, Pajak Masukan terkait tidak dapat dikreditkan.",
  ],
];

export const ukpNotes: Record<UkpLevel, TopicNotes> = {
  a: {
    "bea-meterai": meterai,
    kup,
    "pph-orang-pribadi": op,
    "pph-potong-pungut": [
      ...pph21,
      [
        "Peta pasal potong dan pungut",
        "PPh 21 berhubungan dengan imbalan pekerjaan atau jasa orang pribadi, PPh 22 dengan perdagangan atau impor tertentu, dan PPh 15 dengan bidang yang memakai norma khusus. Bedakan potongan final dari kredit pajak.",
      ],
      pph23,
      pphFinal,
      pph26,
    ],
    ppn,
  },
  b: {
    kup,
    "bea-meterai": meterai,
    "pbb-p5l": [
      [
        "Subjek, objek, dan pengecualian",
        "Subjek memiliki hak atau memperoleh manfaat atas bumi atau bangunan. Saat menilai pengecualian seperti fasilitas umum, perhatikan tujuan penggunaan dan ada tidaknya kegiatan komersial.",
      ],
      [
        "NJOP, NJKP, dan tarif",
        "Pada contoh perkebunan, kurangi NJOP dengan NJOPTKP yang berlaku, kalikan 40% untuk memperoleh NJKP, lalu kalikan tarif 0,5%. NJOPTKP diterapkan pada satu objek dengan NJOP terbesar.",
      ],
      [
        "Pelunasan dan upaya administratif",
        "SPPT umumnya dilunasi dalam enam bulan sejak diterima. Kesalahan tulis atau hitung ditangani lewat pembetulan. Bedakan pengurangan karena kesulitan atau bencana dari keberatan atas ketetapan.",
      ],
    ],
    "akuntansi-perpajakan": [
      [
        "Jurnal pemotong dan penerima",
        "Pemotong mencatat utang pajak sampai penyetoran. Penerima mencatat potongan nonfinal yang dapat dikreditkan sebagai pajak dibayar di muka. PPh final diperlakukan sebagai beban pada contoh booklet.",
      ],
      [
        "Piutang, persediaan, biaya dibayar di muka, dan aktiva",
        "Periksa kapan piutang tak tertagih boleh dibebankan. Bandingkan dasar penilaian persediaan fiskal, periode pembebanan biaya dibayar di muka, serta nilai buku komersial dan fiskal aktiva.",
      ],
      [
        "Organisasi nirlaba",
        "Pisahkan penerimaan sesuai sifatnya dan periksa status objek PPh. Untuk sisa lebih yang mendapat perlakuan khusus, perhatikan syarat penanaman kembali atau dana abadi.",
      ],
      [
        "Pengakuan pendapatan dan biaya",
        "Tentukan waktu pengakuan dan pisahkan pendapatan usaha, luar usaha, final, serta bukan objek. Telusuri biaya ke kelompok penghasilannya sebelum melakukan koreksi.",
      ],
      [
        "Rekonsiliasi dan pajak tangguhan",
        "Tambahkan koreksi positif dan kurangi koreksi negatif dari laba komersial, lalu kurangi kompensasi rugi. Beda waktu dapat berbalik dan menimbulkan pajak tangguhan, sedangkan beda tetap tidak berbalik.",
      ],
    ],
    "pph-badan": [
      [
        "Subjek dan kewajiban subjektif",
        "Badan yang didirikan atau berkedudukan di Indonesia pada umumnya merupakan subjek dalam negeri. Bedakan badan luar negeri yang menjalankan usaha melalui BUT dan badan luar negeri tanpa BUT.",
      ],
      [
        "Objek PPh badan dan BUT",
        "Petakan penghasilan usaha, penghasilan modal, dan pengalihan harta. Untuk BUT, perhatikan pula penghasilan kantor pusat yang terkait dengan aktivitas atau aset BUT.",
      ],
      [
        "PPh final badan",
        "Pisahkan penghasilan final seperti sewa bangunan dari perhitungan umum. Untuk skema omzet tertentu, periksa jenis badan dan ketentuan transisi yang dicantumkan booklet.",
      ],
      [
        "Penghasilan bukan objek",
        "Setoran modal dan dividen domestik yang diterima badan dalam negeri termasuk contoh bukan objek. Hibah, sumbangan, dan sisa lebih lembaga tertentu memiliki syarat tersendiri.",
      ],
      [
        "Biaya yang dapat dikurangkan",
        "Terapkan prinsip mendapatkan, menagih, dan memelihara penghasilan. Biaya dengan manfaat lebih dari satu tahun dapat perlu dibebankan melalui penyusutan atau amortisasi.",
      ],
      [
        "Perolehan harta dan persediaan",
        "Gunakan nilai sisa buku fiskal saat menghitung laba pengalihan. Untuk persediaan, booklet membedakan metode rata-rata dan FIFO.",
      ],
      [
        "Hubungan istimewa",
        "Tinjau kepemilikan, penguasaan, atau hubungan keluarga. Uji transaksi pihak berelasi dengan prinsip kewajaran dan kelaziman usaha.",
      ],
      [
        "Penyusutan dan amortisasi",
        "Bangunan menggunakan garis lurus. Harta bukan bangunan dapat memakai garis lurus atau saldo menurun sesuai ketentuan dan kelompok masa manfaat.",
      ],
      [
        "Kompensasi kerugian fiskal",
        "Gunakan kerugian tertua terlebih dahulu dalam jangka umum lima tahun. Pisahkan kerugian luar negeri dan kerugian dari kegiatan yang dikenai PPh final.",
      ],
      [
        "Tarif umum dan Pasal 31E",
        "Tarif umum 22%. Untuk badan yang memenuhi syarat Pasal 31E, hitung bagian PKP fasilitas secara proporsional terhadap omzet hingga Rp4,8 miliar dan kenakan 11% pada bagian itu.",
      ],
      [
        "PKP dan koreksi fiskal",
        "Mulai dari laba komersial, tambahkan koreksi positif, kurangi koreksi negatif, lalu perhitungkan rugi fiskal yang dapat dikompensasikan.",
      ],
      [
        "Kredit pajak dan PPh 29",
        "Kurangkan kredit yang memenuhi syarat seperti PPh 22, 23, 24, dan 25 dari PPh terutang. Selisih positif menjadi kurang bayar PPh 29.",
      ],
      [
        "Angsuran PPh 25",
        "Gunakan pajak tahun lalu atas penghasilan teratur setelah kredit yang diperhitungkan. Bagi sesuai jumlah bulan pada dasar perhitungan.",
      ],
      [
        "Fasilitas selain Pasal 31E",
        "Bedakan pengurangan penghasilan neto dalam tax allowance, pengurangan pajak dalam tax holiday, dan pengurang tambahan untuk kegiatan tertentu.",
      ],
      [
        "SPT Tahunan badan",
        "Batas umum empat bulan setelah tahun pajak berakhir, dengan opsi pemberitahuan perpanjangan sampai dua bulan. Sertakan laporan keuangan dan penuhi pembayaran sebelum melapor.",
      ],
    ],
    "pph-orang-pribadi": [nppn, keluarga, tarifOp],
    "pph-potong-pungut": [
      ...pph21,
      [
        "PPh 22 impor dan pembelian barang",
        "Cari siapa pemungut dan jenis barangnya. Untuk barang impor kategori umum dalam contoh booklet, tarif dengan API 2,5% dan tanpa API 7,5% dari nilai impor. Jenis barang khusus dapat memiliki tarif berbeda.",
      ],
      pph23,
      pphFinal,
      pph26,
    ],
    ppn,
  },
};
