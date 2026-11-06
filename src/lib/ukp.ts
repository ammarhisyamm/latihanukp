import { getTryoutQuestions } from "./ukp-tryout-bank";
import { getCalculationQuestions } from "./ukp-calculations";
import { varietyBank } from "./ukp-variety-bank";
import { levelCaseBank, sharedCaseBank } from "./ukp-case-bank";
import { levelQuestionBank, sharedQuestionBank } from "./ukp-question-bank";

export type UkpLevel = "a" | "b";

export type Question = {
  prompt: string;
  options: [string, string, string, string];
  answer: number;
  explanation: string;
  caseStudy?: true;
  id?: string;
  family?: string;
  bookletItem?: string;
  bookletPage?: number;
  tryoutSource?: { title: string; page: number };
  legalSource?: { label: string; href: string };
};

type Topic = {
  title: string;
  description: string;
  pages: Partial<Record<UkpLevel, string>>;
  questions: Question[];
};

function question(
  prompt: string,
  options: Question["options"],
  answer: number,
  explanation: string,
): Question {
  return { prompt, options, answer, explanation };
}

export const ukpTopics = {
  "bea-meterai": {
    title: "Bea Meterai",
    description: "Objek dokumen, saat terutang, dan cara pelunasan.",
    pages: { a: "1–5", b: "13–15" },
    questions: [
      question(
        "Kuitansi tepat Rp5 juta dinilai hanya berdasarkan nominalnya. Apakah kuitansi itu terutang Bea Meterai?",
        [
          "Ya, sebesar Rp10.000",
          "Tidak, ambangnya lebih dari Rp5 juta",
          "Ya, bila dibuat dalam bentuk digital",
          "Ya, sebesar 0,5% dari nilai kuitansi",
        ],
        1,
        "Ambang untuk dokumen yang menyatakan jumlah uang adalah lebih dari Rp5 juta. Nominal tepat Rp5 juta belum melewati ambang.",
      ),
      question(
        "Kapan Bea Meterai terutang atas surat perjanjian dua pihak?",
        [
          "Saat pembayaran terakhir",
          "Saat diserahkan ke DJP",
          "Saat tanggal jatuh tempo",
          "Saat surat ditandatangani",
        ],
        3,
        "Surat perjanjian terutang saat ditandatangani. Masing-masing pihak menanggung Bea Meterai atas rangkap yang diterimanya.",
      ),
      question(
        "Berapa Bea Meterai untuk satu dokumen perjanjian bernilai Rp100 juta?",
        ["Rp10.000", "Rp50.000", "Rp100.000", "Rp500.000"],
        0,
        "Tarifnya tetap Rp10.000 untuk satu dokumen, berapa pun nilai perjanjiannya.",
      ),
    ],
  },
  kup: {
    title: "KUP, PPSP, dan Pengadilan Pajak",
    description: "Administrasi, penagihan, pemeriksaan, dan sengketa pajak.",
    pages: { a: "5–17", b: "1–13" },
    questions: [
      question(
        "Untuk PPh Masa yang mengikuti jadwal umum, kapan batas setor dan lapornya?",
        [
          "Tanggal 10 dan 15 bulan berikutnya",
          "Keduanya akhir bulan berikutnya",
          "Tanggal 15 dan 20 bulan berikutnya",
          "Keduanya tanggal 20 bulan berikutnya",
        ],
        2,
        "Dalam jadwal umum pada booklet, setor paling lambat tanggal 15 dan lapor paling lambat tanggal 20 bulan berikutnya.",
      ),
      question(
        "Ketetapan sudah terbit. Data baru kemudian menunjukkan tambahan pajak terutang. Produk ketetapan apa yang sesuai?",
        ["SKPKBT", "SKPN", "SKPLB", "Surat Teguran"],
        0,
        "SKPKBT adalah Surat Ketetapan Pajak Kurang Bayar Tambahan. Kata kuncinya adalah data baru setelah ketetapan sebelumnya.",
      ),
      question(
        "Wajib pajak ingin menguji keputusan keberatan di Pengadilan Pajak. Jalur apa yang digunakan?",
        ["Pembetulan", "Gugatan penagihan", "Peninjauan kembali", "Banding"],
        3,
        "Banding digunakan untuk keputusan keberatan. Gugatan antara lain digunakan untuk menguji tindakan penagihan.",
      ),
    ],
  },
  "pph-orang-pribadi": {
    title: "PPh Orang Pribadi",
    description: "Penghasilan neto, PTKP, tarif progresif, dan penghasilan keluarga.",
    pages: { a: "17–27", b: "30–32" },
    questions: [
      question(
        "Berapa PTKP setahun untuk status K/2 jika penghasilan istri tidak digabung?",
        ["Rp58,5 juta", "Rp67,5 juta", "Rp63 juta", "Rp72 juta"],
        1,
        "PTKP = Rp54 juta + Rp4,5 juta karena kawin + Rp9 juta untuk dua tanggungan = Rp67,5 juta.",
      ),
      question(
        "Berapa PPh Pasal 17 atas PKP orang pribadi Rp80 juta sebelum kredit pajak?",
        ["Rp4 juta", "Rp12 juta", "Rp9 juta", "Rp6 juta"],
        3,
        "Rp60 juta pertama dikenai 5% (Rp3 juta) dan Rp20 juta berikutnya dikenai 15% (Rp3 juta). Total Rp6 juta.",
      ),
      question(
        "Orang pribadi yang memenuhi syarat NPPN memiliki bruto Rp800 juta dan norma 40%. Berapa penghasilan netonya sebelum PTKP?",
        ["Rp320 juta", "Rp480 juta", "Rp800 juta", "Rp266 juta"],
        0,
        "Penghasilan neto menurut norma adalah 40% × Rp800 juta = Rp320 juta. PTKP diperhitungkan pada langkah setelah neto.",
      ),
    ],
  },
  "pph-potong-pungut": {
    title: "PPh Potong/Pungut",
    description: "PPh 21, tarif efektif, serta pemotongan final dan nonfinal.",
    pages: { a: "27–38", b: "32–41" },
    questions: [
      question(
        "Bagaimana cara menghitung PPh 21 pegawai tetap pada masa pajak terakhir?",
        [
          "Pakai TER harian",
          "Kalikan bruto masa terakhir dengan TER bulanan",
          "Hitung dengan tarif Pasal 17 lalu kurangi pemotongan masa sebelumnya",
          "Kalikan penghasilan setahun dengan tarif tetap 2%",
        ],
        2,
        "TER bulanan digunakan sebelum masa pajak terakhir. Pada masa terakhir, pajak dihitung ulang dengan tarif Pasal 17, kemudian dikurangi pemotongan sebelumnya.",
      ),
      question(
        "Berapa PPh 23 untuk jasa manajemen Rp80 juta, dengan dasar pemotongan Rp80 juta dan penerima ber-NPWP?",
        ["Rp800.000", "Rp1.600.000", "Rp8.000.000", "Rp12.000.000"],
        1,
        "Jasa manajemen termasuk objek PPh 23 dengan tarif 2% dari dasar pemotongan. Hasilnya Rp1.600.000.",
      ),
      question(
        "Sewa tanah dan bangunan pada umumnya masuk pemotongan yang mana?",
        ["PPh 21 nonfinal", "PPh 22", "PPh 23 sebesar 2%", "PPh Pasal 4 ayat (2) final"],
        3,
        "Sewa tanah dan bangunan masuk PPh final Pasal 4 ayat (2). Sewa harta selain tanah dan bangunan yang memenuhi ketentuan masuk PPh 23.",
      ),
    ],
  },
  ppn: {
    title: "PPN dan SPT PPN",
    description: "Dasar pengenaan, Faktur Pajak, dan pengkreditan Pajak Masukan.",
    pages: { a: "38–44", b: "41–46" },
    questions: [
      question(
        "Harga jual barang nonmewah Rp60 juta sebelum PPN. Jika berlaku DPP 11/12, berapa PPN-nya?",
        ["Rp6,6 juta", "Rp7,2 juta", "Rp5,5 juta", "Rp6 juta"],
        0,
        "DPP = 11/12 × Rp60 juta = Rp55 juta. PPN = 12% × Rp55 juta = Rp6,6 juta.",
      ),
      question(
        "Faktur Pajak diterbitkan pada Masa Februari. Jika syarat lain terpenuhi, pada masa apa Pajak Masukan paling lambat dikreditkan?",
        ["April", "Juni", "Mei", "Maret"],
        2,
        "Tiga masa setelah Februari adalah Maret, April, dan Mei. Jadi batasnya Masa Mei.",
      ),
      question(
        "Kapan Faktur Pajak dibuat jika penjual menerima uang muka sebelum penyerahan?",
        [
          "Saat barang diserahkan",
          "Saat uang muka diterima",
          "Akhir bulan setelah penyerahan",
          "Saat SPT Tahunan dilaporkan",
        ],
        1,
        "Jika pembayaran mendahului penyerahan, Faktur Pajak atas uang muka dibuat saat pembayaran diterima.",
      ),
    ],
  },
  "pbb-p5l": {
    title: "PBB-P5L",
    description: "Subjek dan objek, NJOP, NJKP, serta jalur pembetulan.",
    pages: { b: "15–18" },
    questions: [
      question(
        "NJOP perkebunan Rp20 miliar, NJOPTKP nihil, dan persentase NJKP 40%. Berapa PBB dengan tarif 0,5%?",
        ["Rp100 juta", "Rp40 juta", "Rp80 juta", "Rp4 juta"],
        1,
        "NJKP = 40% × Rp20 miliar = Rp8 miliar. PBB = 0,5% × Rp8 miliar = Rp40 juta.",
      ),
      question(
        "Bila wajib pajak mempunyai beberapa objek, di objek mana NJOPTKP diterapkan menurut booklet?",
        [
          "Semua objek",
          "Objek dengan NJOP terkecil",
          "Objek yang paling baru dibeli",
          "Satu objek dengan NJOP terbesar",
        ],
        3,
        "NJOPTKP dikurangkan sekali dalam satu tahun pada objek dengan NJOP terbesar.",
      ),
      question(
        "Ada kesalahan hitung pada SPPT PBB. Jalur administratif apa yang langsung sesuai dengan jenis kesalahan ini?",
        ["Pembetulan", "Banding", "Pengurangan karena bencana", "Peninjauan kembali"],
        0,
        "Pembetulan menangani antara lain salah tulis dan salah hitung pada SPPT, SKP PBB, atau STP PBB.",
      ),
    ],
  },
  "akuntansi-perpajakan": {
    title: "Akuntansi Perpajakan",
    description: "Jurnal pajak, koreksi fiskal, serta beda tetap dan beda waktu.",
    pages: { b: "18–22" },
    questions: [
      question(
        "Perusahaan menerima pembayaran jasa setelah dipotong PPh 23 yang bisa dikreditkan. Di sisi penerima, potongan itu dicatat sebagai apa?",
        ["Utang PPh 23", "Pengurang pendapatan", "Pajak dibayar di muka", "Beban PPh final"],
        2,
        "PPh 23 yang dapat dikreditkan adalah aset berupa pajak dibayar di muka bagi penerima. Pemotong mencatat utang sampai menyetor pajak.",
      ),
      question(
        "Biaya komersial Rp30 juta seluruhnya tidak boleh dikurangkan secara fiskal. Apa koreksinya?",
        [
          "Koreksi negatif Rp30 juta",
          "Koreksi positif Rp30 juta",
          "Tanpa koreksi",
          "Koreksi positif sebesar 22% dari biaya",
        ],
        1,
        "Biaya tersebut telah menurunkan laba komersial. Tambahkan kembali seluruh Rp30 juta melalui koreksi positif.",
      ),
      question(
        "Apa ciri selisih yang dapat menimbulkan pajak tangguhan?",
        [
          "Selisih hanya muncul dalam SPT Masa",
          "Selisih berasal dari penghasilan final",
          "Selisih selalu menjadi denda",
          "Selisih akan berbalik pada periode berikutnya",
        ],
        3,
        "Beda waktu berbalik pada periode berikutnya dan dapat menimbulkan pajak tangguhan. Beda tetap tidak berbalik.",
      ),
    ],
  },
  "pph-badan": {
    title: "PPh Badan",
    description: "Penghasilan kena pajak, penyusutan, tarif, dan kredit pajak.",
    pages: { b: "22–30" },
    questions: [
      question(
        "PKP badan Rp500 juta dan berlaku tarif umum 22% tanpa fasilitas. Berapa PPh terutang sebelum kredit pajak?",
        ["Rp55 juta", "Rp95 juta", "Rp100 juta", "Rp110 juta"],
        3,
        "PPh terutang = 22% × Rp500 juta = Rp110 juta.",
      ),
      question(
        "Badan yang memenuhi Pasal 31E memiliki omzet Rp24 miliar dan PKP Rp1 miliar. Berapa bagian PKP yang mendapat tarif fasilitas?",
        ["Rp200 juta", "Rp480 juta", "Rp1 miliar", "Rp4,8 miliar"],
        0,
        "Bagian PKP fasilitas = Rp4,8 miliar ÷ Rp24 miliar × Rp1 miliar = Rp200 juta.",
      ),
      question(
        "Metode penyusutan fiskal apa yang digunakan untuk bangunan dalam booklet?",
        ["Saldo menurun", "Garis lurus", "Unit produksi", "Bebas memilih setiap tahun"],
        1,
        "Booklet memakai garis lurus untuk bangunan. Saldo menurun tersedia untuk kelompok harta bukan bangunan sesuai ketentuan.",
      ),
    ],
  },
} satisfies Record<string, Topic>;

const extraQuestions = {
  "bea-meterai": [
    question(
      "Perjanjian dibuat di luar negeri. Kapan Bea Meterai terutang menurut booklet?",
      [
        "Saat dokumen digunakan di Indonesia",
        "Saat diterjemahkan",
        "Saat ditandatangani di luar negeri",
        "Saat dikirim melalui surel",
      ],
      0,
      "Dokumen yang dibuat di luar negeri terutang ketika dipakai di Indonesia.",
    ),
    question(
      "Dua pihak masing-masing menerima satu rangkap perjanjian. Siapa menanggung Bea Meterai?",
      [
        "Pihak pertama untuk semua rangkap",
        "Pihak yang menyusun draf",
        "Masing-masing pihak atas rangkap yang diterimanya",
        "Pihak yang menerima pembayaran",
      ],
      2,
      "Dalam dokumen dua pihak, setiap pihak menanggung Bea Meterai untuk rangkap yang diterimanya.",
    ),
    question(
      "Sebuah dokumen elektronik perlu dilunasi dengan pembubuhan meterai. Bentuk apa yang sesuai?",
      [
        "Hasil pindai meterai tempel",
        "Meterai elektronik",
        "Foto kuitansi",
        "Meterai tempel pada salinan arsip",
      ],
      1,
      "Meterai elektronik dengan nomor seri unik digunakan untuk dokumen elektronik.",
    ),
  ],
  kup: [
    question(
      "Utang belum dibayar setelah Surat Paksa diberitahukan. Berapa lama sebelum penyitaan dapat dilakukan menurut urutan booklet?",
      ["7 hari", "21 hari", "14 hari", "2 × 24 jam"],
      3,
      "Jeda 2 × 24 jam dihitung sejak Surat Paksa diberitahukan. Tenggat 21 hari terkait tahap Teguran ke Surat Paksa.",
    ),
    question(
      "Berapa lama dokumen yang mendasari pembukuan wajib disimpan?",
      ["10 tahun", "5 tahun", "3 tahun", "12 bulan"],
      0,
      "Dokumen dasar pembukuan atau pencatatan disimpan 10 tahun.",
    ),
    question(
      "Berapa batas umum keputusan restitusi yang diproses lewat pemeriksaan?",
      ["6 bulan", "12 bulan", "3 bulan", "24 bulan"],
      1,
      "Jalur pemeriksaan memakai batas keputusan 12 bulan. Pengembalian pendahuluan memiliki jalur dan tenggat tersendiri.",
    ),
  ],
  "pph-orang-pribadi": [
    question(
      "Apakah orang pribadi dengan bruto tepat Rp4,8 miliar memenuhi batas bruto untuk menggunakan NPPN?",
      [
        "Ya, batasnya sampai Rp4,8 miliar",
        "Ya, asalkan punya lebih dari satu usaha",
        "Tidak, harus kurang dari Rp4,8 miliar",
        "Tidak, batasnya Rp500 juta",
      ],
      2,
      "Batas NPPN adalah kurang dari Rp4,8 miliar. Rp500 juta terkait bagian omzet bebas PPh pada skema final tertentu.",
    ),
    question(
      "Suami-istri berstatus pisah harta. Bagaimana menghitung PPh masing-masing?",
      [
        "Gabungkan neto, hitung PPh, lalu bagi menurut proporsi neto",
        "Hitung pajak masing-masing tanpa penggabungan",
        "Gabungkan bruto lalu bagi pajak sama rata",
        "Kenakan seluruh pajak kepada suami",
      ],
      0,
      "Pada status pisah harta, pajak dihitung dari gabungan penghasilan neto, kemudian dibagi proporsional.",
    ),
    question(
      "Berapa tarif marginal untuk bagian PKP orang pribadi di atas Rp500 juta sampai Rp5 miliar?",
      ["15%", "25%", "35%", "30%"],
      3,
      "Bagian PKP di atas Rp500 juta hingga Rp5 miliar dikenai 30%. Bagian di atas Rp5 miliar dikenai 35%.",
    ),
  ],
  "pph-potong-pungut": [
    question(
      "Seorang pegawai tetap berstatus K/3. Kategori TER bulanan mana yang digunakan?",
      ["A", "B", "C", "TER harian"],
      2,
      "K/3 masuk kategori C. K/1 dan K/2 masuk kategori B.",
    ),
    question(
      "Berapa tarif PPh 23 atas royalti bruto bila tidak ada pengecualian dan penerima memiliki NPWP?",
      ["2%", "15%", "10%", "20%"],
      1,
      "Royalti termasuk kelompok objek dengan tarif 15%. Tarif 2% berlaku antara lain untuk jasa tertentu.",
    ),
    question(
      "Berapa tarif umum PPh 26 atas royalti kepada wajib pajak luar negeri selain BUT bila tarif P3B tidak berlaku?",
      ["20% dari bruto", "15% dari bruto", "2% dari bruto", "10% dari bruto"],
      0,
      "Tarif umum PPh 26 untuk royalti adalah 20% dari bruto. P3B dapat menetapkan tarif lain jika syaratnya terpenuhi.",
    ),
  ],
  ppn: [
    question(
      "Pajak Keluaran Rp22 juta dan seluruh Pajak Masukan Rp15 juta memenuhi syarat kredit. Tidak ada kompensasi. Bagaimana posisi SPT Masa?",
      ["Lebih bayar Rp7 juta", "Kurang bayar Rp37 juta", "Nihil", "Kurang bayar Rp7 juta"],
      3,
      "Kurangi Pajak Keluaran dengan Pajak Masukan yang dapat dikreditkan: Rp22 juta − Rp15 juta = kurang bayar Rp7 juta.",
    ),
    question(
      "Pajak Masukan berhubungan langsung dengan penyerahan yang mendapat fasilitas PPN dibebaskan. Apakah dapat dikreditkan?",
      [
        "Ya, seluruhnya",
        "Ya, sebesar 50%",
        "Tidak dapat dikreditkan",
        "Ya, jika penjualan dilakukan tunai",
      ],
      2,
      "Pajak Masukan atas penyerahan yang dibebaskan tidak dapat dikreditkan. Fasilitas tidak dipungut memiliki perlakuan berbeda.",
    ),
    question(
      "Kapan batas pembuatan Faktur Pajak gabungan untuk penyerahan selama bulan April?",
      ["Akhir April", "Tanggal 15 Mei", "Tanggal 20 Mei", "Akhir Mei"],
      0,
      "Faktur gabungan dibuat paling lambat pada akhir bulan penyerahan, dalam soal ini akhir April.",
    ),
  ],
  "pbb-p5l": [
    question(
      "Berapa batas pelunasan SPPT PBB sejak diterima menurut booklet?",
      ["1 bulan", "3 bulan", "6 bulan", "12 bulan"],
      2,
      "SPPT dilunasi paling lama enam bulan sejak diterima. Tenggat SKP PBB berbeda.",
    ),
    question(
      "NJOP perkebunan Rp12 miliar dan NJOPTKP Rp12 juta. Berapa dasar yang dikalikan persentase NJKP?",
      ["Rp12 miliar", "Rp11,988 miliar", "Rp11,88 miliar", "Rp4,8 miliar"],
      1,
      "Kurangkan NJOPTKP dari NJOP sebelum menerapkan persentase NJKP. Rp12 miliar − Rp12 juta = Rp11,988 miliar.",
    ),
    question(
      "Siapa yang dapat menjadi subjek PBB atas suatu objek?",
      [
        "Pihak yang memiliki hak atau memperoleh manfaat atas objek",
        "Hanya nama yang tertulis pada sertifikat",
        "Hanya pihak yang pertama kali membeli tanah",
        "Selalu penyewa dan pemilik secara bersamaan",
      ],
      0,
      "Subjek ditentukan dari hak atau manfaat nyata atas bumi atau bangunan.",
    ),
  ],
  "akuntansi-perpajakan": [
    question(
      "Laba komersial Rp400 juta, koreksi positif Rp50 juta, koreksi negatif Rp30 juta, dan rugi fiskal yang dapat digunakan Rp20 juta. Berapa PKP?",
      ["Rp380 juta", "Rp420 juta", "Rp440 juta", "Rp400 juta"],
      3,
      "PKP = Rp400 juta + Rp50 juta − Rp30 juta − Rp20 juta = Rp400 juta.",
    ),
    question(
      "Perusahaan memotong PPh 23 dari pembayaran jasa. Apa akun pemotong untuk jumlah yang belum disetor?",
      ["Beban PPh final", "Pajak dibayar di muka", "Utang PPh 23", "Piutang usaha"],
      2,
      "Pajak yang dipotong dari pihak lain menjadi utang pemotong sampai disetor.",
    ),
    question(
      "Pendapatan bunga deposito telah masuk laba komersial dan dikenai PPh final. Apa koreksinya atas pendapatan tersebut?",
      ["Koreksi negatif", "Koreksi positif", "Tidak dikoreksi", "Menambah kredit PPh 23"],
      0,
      "Koreksi negatif mengeluarkan pendapatan final dari laba yang dihitung dengan skema PPh umum.",
    ),
  ],
  "pph-badan": [
    question(
      "Berapa lama jangka umum kompensasi rugi fiskal badan setelah tahun terjadinya rugi?",
      ["3 tahun", "5 tahun", "10 tahun", "12 tahun"],
      1,
      "Jangka umumnya lima tahun berikutnya. Fasilitas tertentu dapat memperpanjang jangka tersebut.",
    ),
    question(
      "PPh badan terutang Rp220 juta. Kredit PPh 22 Rp20 juta, PPh 23 Rp10 juta, dan PPh 25 Rp150 juta. Berapa PPh 29?",
      ["Rp20 juta", "Rp30 juta", "Rp40 juta", "Rp70 juta"],
      2,
      "Kurangkan seluruh kredit yang disebutkan. Rp220 juta − Rp20 juta − Rp10 juta − Rp150 juta = Rp40 juta.",
    ),
    question(
      "Badan menggunakan tahun buku kalender. Kapan batas umum penyampaian SPT Tahunan tanpa perpanjangan?",
      ["31 Maret", "31 Januari", "31 Mei", "30 April"],
      3,
      "Batasnya empat bulan setelah akhir tahun pajak. Untuk tahun kalender, jatuh pada 30 April.",
    ),
  ],
} satisfies Record<keyof typeof ukpTopics, Question[]>;

const levelQuestions: Partial<
  Record<UkpLevel, Partial<Record<keyof typeof ukpTopics, Question[]>>>
> = {
  a: {
    "pph-orang-pribadi": [
      question(
        "Pedagang orang pribadi memenuhi skema PPh final 0,5% dan memiliki omzet setahun Rp750 juta. Berapa total PPh finalnya?",
        ["Rp1,25 juta", "Rp3,75 juta", "Rp2,5 juta", "Rp750 ribu"],
        0,
        "Bagian omzet Rp500 juta pertama tidak dikenai PPh. Hitung 0,5% × Rp250 juta = Rp1,25 juta.",
      ),
    ],
  },
  b: {
    "pph-potong-pungut": [
      question(
        "Barang impor kategori umum memiliki nilai impor Rp100 juta dan importir memiliki API. Dengan tarif yang dicontohkan booklet, berapa PPh 22?",
        ["Rp750 ribu", "Rp1,5 juta", "Rp2,5 juta", "Rp7,5 juta"],
        2,
        "Untuk kategori umum dengan API pada contoh booklet, tarifnya 2,5% × Rp100 juta = Rp2,5 juta.",
      ),
    ],
    ppn: [
      question(
        "Pembeli mengembalikan Barang Kena Pajak kepada penjual. Siapa membuat nota retur?",
        ["Penjual", "Pembeli", "Pengangkut", "Kantor pajak"],
        1,
        "Nota retur dibuat pembeli pada saat pengembalian barang. Pembatalan jasa menggunakan nota pembatalan.",
      ),
    ],
  },
};

export type UkpTopic = keyof typeof ukpTopics;

export const ukpLevels = {
  a: ["bea-meterai", "kup", "pph-orang-pribadi", "pph-potong-pungut", "ppn"],
  b: [
    "kup",
    "bea-meterai",
    "pbb-p5l",
    "akuntansi-perpajakan",
    "pph-badan",
    "pph-orang-pribadi",
    "pph-potong-pungut",
    "ppn",
  ],
} satisfies Record<UkpLevel, UkpTopic[]>;

export function isUkpLevel(value: string): value is UkpLevel {
  return value === "a" || value === "b";
}

export function getUkpTopic(level: UkpLevel, slug: string) {
  const key = ukpLevels[level].find((topic) => topic === slug);
  if (!key) return undefined;
  const topic: Topic = ukpTopics[key];
  return {
    ...topic,
    pages: topic.pages[level]!,
    questions: [
      ...topic.questions,
      ...(level === "b" ? getTryoutQuestions(key) : []),
      ...getCalculationQuestions(level, key),
      ...(varietyBank[level][key] ?? []).map(
        ([prompt, options, answer, explanation, caseStudy]): Question => ({
          ...question(prompt, options, answer, explanation),
          ...(caseStudy ? { caseStudy } : {}),
        }),
      ),
      ...extraQuestions[key],
      ...(levelQuestions[level]?.[key] ?? []),
      ...sharedQuestionBank[key].map((item) => question(...item)),
      ...(levelQuestionBank[level][key] ?? []).map((item) => question(...item)),
      ...[...sharedCaseBank[key], ...(levelCaseBank[level][key] ?? [])].map((item): Question => ({
        ...question(...item),
        caseStudy: true,
      })),
    ],
  };
}

export function ukpHead(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  };
}
