import { getBookletItems } from "./ukp-curriculum";
import type { Question, UkpTopic } from "./ukp";

type Adaptation = [
  id: string,
  bookletItem: string,
  source: string,
  sourcePage: number,
  prompt: string,
  options: Question["options"],
  answer: number,
  explanation: string,
];

const combined = "Try Out UKP Tingkat B";
const v1 = "Latihan Soal UKP Tingkat B (v1)";
const v2 = "Latihan Soal UKP Tingkat B (v2)";

const adaptations: Partial<Record<UkpTopic, Adaptation[]>> = {
  kup: [
    [
      "lelang-sisa",
      "4",
      combined,
      6,
      "Dalam satu lelang pajak, hasil penjualan Rp365 juta. Biaya penagihan Rp9 juta dan utang pajak yang harus dilunasi Rp248 juta. Tidak ada kewajiban lain dari hasil lelang. Berapa yang dikembalikan kepada Penanggung Pajak?",
      ["Rp117 juta", "Rp108 juta", "Rp126 juta", "Rp356 juta"],
      1,
      "Gunakan hasil lelang untuk biaya penagihan dan pelunasan utang pajak. Sisa = Rp365 juta − Rp9 juta − Rp248 juta = Rp108 juta.",
    ],
    [
      "lelang-bukti",
      "4",
      combined,
      6,
      "Pembeli memenangkan lelang peralatan produksi hasil penagihan pajak. Dokumen mana yang menunjukkan peralihan hak karena lelang?",
      [
        "Salinan Surat Paksa",
        "Berita acara pelaksanaan sita",
        "Pengumuman lelang",
        "Risalah lelang",
      ],
      3,
      "Risalah lelang merupakan bukti peralihan hak atas barang yang dilelang. Berita acara sita mencatat penyitaan pada tahap sebelumnya.",
    ],
    [
      "pengurangan-sanksi",
      "5",
      v2,
      19,
      "WP menerima tagihan yang memuat sanksi administrasi. Ia menerima jumlah pokoknya dan punya bukti bahwa sanksi timbul karena keadaan yang bukan kesalahannya. Jalur apa yang sesuai dengan tujuan menghapus sanksi?",
      [
        "Permohonan pengurangan atau penghapusan sanksi Pasal 36 ayat (1) huruf a",
        "Banding langsung atas pokok",
        "Permohonan angsuran Pasal 25",
        "Pembetulan SPT untuk menghapus seluruh pokok",
      ],
      0,
      "Pasal 36 ayat (1) huruf a membahas pengurangan atau penghapusan sanksi administrasi karena kekhilafan WP atau bukan karena kesalahannya. Soal membatasi permohonan pada sanksi.",
    ],
  ],
  "pbb-p5l": [
    [
      "keringanan",
      "3",
      combined,
      12,
      "PBB-P5L sebelum pengurangan adalah Rp18 juta. Keputusan pengurangan yang sudah berlaku memberi pengurangan 35% atas pokok. Berapa pokok yang masih perlu dibayar?",
      ["Rp6,3 juta", "Rp18 juta", "Rp11,7 juta", "Rp12,6 juta"],
      2,
      "Pengurangan = 35% × Rp18 juta = Rp6,3 juta. Pokok yang tersisa = Rp11,7 juta. Persentase berasal dari keputusan yang diberikan dalam soal.",
    ],
  ],
  "bea-meterai": [
    [
      "elektronik-dan-arsip",
      "1",
      combined,
      14,
      "Perusahaan menyimpan satu kontrak elektronik yang ditandatangani para pihak dan satu ijazah elektronik yang hanya dipakai sebagai arsip. Bagaimana penggunaan meterai elektronik?",
      [
        "Meterai elektronik wajib untuk keduanya",
        "Meterai elektronik hanya dapat dipakai pada ijazah",
        "Keduanya harus dicetak dan diberi meterai tempel",
        "Kontrak merupakan objek yang dapat dibayar dengan meterai elektronik, ijazah bukan objek",
      ],
      3,
      "Format elektronik tidak mengubah jenis objek. Kontrak merupakan objek dan dapat memakai meterai elektronik. Ijazah untuk fungsi asalnya dikecualikan.",
    ],
  ],
  "akuntansi-perpajakan": [
    [
      "jurnal-uang-muka-sewa",
      "1",
      v2,
      1,
      "Badan penyewa membayar sewa gudang satu tahun di muka Rp180 juta sebelum PPN. Penyewa memotong PPh final 10%. Abaikan PPN dan gunakan pencatatan sederhana sewa dibayar di muka. Apa jurnal penyewa saat membayar?",
      [
        "Debit beban sewa Rp162 juta, kredit kas Rp162 juta",
        "Debit sewa dibayar di muka Rp180 juta, kredit kas Rp162 juta dan utang PPh final Rp18 juta",
        "Debit kas Rp162 juta, kredit sewa dibayar di muka Rp180 juta dan utang pajak Rp18 juta",
        "Debit sewa dibayar di muka Rp180 juta, kredit kas Rp180 juta",
      ],
      1,
      "Sewa dibayar di muka dicatat sebesar bruto. Potongan final Rp18 juta merupakan utang pemotong. Kas yang keluar Rp180 juta − Rp18 juta = Rp162 juta.",
    ],
    [
      "piutang-belum-syarat",
      "2",
      v2,
      5,
      "Badan dagang umum menghapus piutang Rp64 juta sebagai beban komersial. Piutang ini tidak termasuk pengecualian piutang kecil dan persyaratan fiskal penghapusan belum terpenuhi. Apa koreksi fiskalnya?",
      [
        "Koreksi negatif Rp64 juta",
        "Tanpa koreksi karena telah dijurnal",
        "Koreksi positif Rp64 juta",
        "Koreksi positif Rp14,08 juta",
      ],
      2,
      "Tambahkan kembali seluruh beban Rp64 juta yang belum dapat dikurangkan. Mengalikan beban dengan tarif pajak akan menghasilkan dampak pajak, bukan nilai koreksi fiskal.",
    ],
    [
      "jurnal-gaji",
      "1",
      v1,
      1,
      "Dalam satu masa, badan membayar gaji bruto Rp280 juta dan memotong PPh 21 Rp16 juta. Abaikan potongan lain. Jurnal yang tepat pada saat pembayaran adalah apa?",
      [
        "Debit beban gaji Rp280 juta, kredit kas Rp264 juta dan utang PPh 21 Rp16 juta",
        "Debit beban gaji Rp264 juta, kredit kas Rp264 juta",
        "Debit beban gaji Rp296 juta, kredit kas Rp280 juta dan utang PPh 21 Rp16 juta",
        "Debit pajak dibayar di muka Rp16 juta, kredit kas Rp16 juta",
      ],
      0,
      "Beban gaji sebesar bruto Rp280 juta. Kas yang dibayar ke pegawai Rp264 juta. Sisa Rp16 juta menjadi utang PPh 21 hingga disetor.",
    ],
  ],
  "pph-badan": [
    [
      "koreksi-sewa-final",
      "13",
      v1,
      88,
      "Badan mencatat laba komersial Rp2,4 miliar termasuk pendapatan sewa bangunan yang telah dikenai PPh final Rp320 juta. Beban terkait sewa Rp48 juta sudah mengurangi laba dan terdapat beban sanksi pajak Rp12 juta. Tidak ada koreksi lain. Berapa laba fiskal tarif umum?",
      ["Rp2,02 miliar", "Rp2,4 miliar", "Rp2,08 miliar", "Rp2,14 miliar"],
      3,
      "Kurangi pendapatan final Rp320 juta. Tambahkan kembali beban yang terkait penghasilan final Rp48 juta dan sanksi pajak Rp12 juta. Laba fiskal Rp2,14 miliar.",
    ],
    [
      "kompensasi-dan-kredit",
      "14",
      v1,
      44,
      "Badan beromzet Rp70 miliar memiliki laba fiskal sebelum kompensasi Rp3,6 miliar, rugi fiskal yang dapat dipakai Rp600 juta, serta total kredit nonfinal Rp525 juta. Tarif 22% tanpa fasilitas. Berapa PPh 29?",
      ["Rp267 juta", "Rp135 juta", "Rp660 juta", "Rp792 juta"],
      1,
      "PKP = Rp3,6 miliar − Rp600 juta = Rp3 miliar. PPh terutang Rp660 juta. Kurangi kredit Rp525 juta sehingga PPh 29 Rp135 juta.",
    ],
  ],
  "pph-potong-pungut": [
    [
      "natura-kumulatif",
      "4",
      v2,
      50,
      "Seorang pegawai sudah menerima bingkisan nonhari raya Rp2,4 juta dari pemberi kerja pada tahun yang sama. Ia lalu menerima bingkisan jenis yang sama Rp2,1 juta. Jika pengecualian kumulatif Rp3 juta, berapa bagian bingkisan terakhir yang menjadi objek?",
      ["Rp600 ribu", "Rp2,1 juta", "Rp1,5 juta", "Rp4,5 juta"],
      2,
      "Sisa batas pengecualian Rp3 juta − Rp2,4 juta = Rp600 ribu. Dari bingkisan terakhir Rp2,1 juta, bagian yang menjadi objek Rp1,5 juta.",
    ],
  ],
  ppn: [
    [
      "kms-biaya",
      "4",
      v1,
      77,
      "Sebuah badan membangun sendiri gudang yang memenuhi syarat objek PPN kegiatan membangun sendiri. Pengeluaran masa ini Rp880 juta, termasuk Rp280 juta untuk tanah. Dengan beban efektif 2,2% atas biaya selain tanah, berapa PPN masa ini?",
      ["Rp19,36 juta", "Rp13,2 juta", "Rp6,16 juta", "Rp72 juta"],
      1,
      "Keluarkan biaya tanah. Dasar biaya = Rp880 juta − Rp280 juta = Rp600 juta. Kalikan 2,2% sesuai asumsi soal, hasilnya Rp13,2 juta.",
    ],
  ],
};

const verifiedLinks: Record<string, NonNullable<Question["legalSource"]>> = {
  "lelang-sisa": {
    label: "UU 19/2000, perubahan Pasal 28 UU PPSP",
    href: "https://jdih.kemenkeu.go.id/api/download/fullText/2000/19TAHUN2000UU.htm",
  },
  "lelang-bukti": {
    label: "UU 19/2000 tentang Penagihan Pajak dengan Surat Paksa",
    href: "https://jdih.kemenkeu.go.id/api/download/fullText/2000/19TAHUN2000UU.htm",
  },
  "pengurangan-sanksi": {
    label: "PMK 118/2024 dan riwayat perubahan",
    href: "https://jdih.kemenkeu.go.id/dok/d21a3d36-4882-4856-af8b-08dd288afb50",
  },
  "elektronik-dan-arsip": {
    label: "UU 10/2020 tentang Bea Meterai",
    href: "https://jdih.kemenkeu.go.id/dok/uu-10-tahun-2020",
  },
  "natura-kumulatif": {
    label: "PMK 66/2023 dan lampiran",
    href: "https://jdih.kemenkeu.go.id/api/download/dce5daf1-d4e5-4bd1-bc4e-2c086ae33c04/2023pmkeuangan066.pdf",
  },
  "kms-biaya": {
    label: "PMK 53/2025 tentang DPP dan besaran tertentu PPN",
    href: "https://jdih.kemenkeu.go.id/dok/pmk-53-tahun-2025/files",
  },
  "piutang-belum-syarat": {
    label: "PMK 105/2009 tentang piutang tidak tertagih",
    href: "https://pajak.go.id/id/peraturan/piutang-yang-nyata-nyata-tidak-dapat-ditagih-yang-dapat-dikurangkan-dari-penghasilan",
  },
};

export function getTryoutQuestions(topic: UkpTopic): Question[] {
  const booklet = getBookletItems("b", topic);
  return (adaptations[topic] ?? []).map(
    ([id, bookletItem, source, sourcePage, prompt, options, answer, explanation]) => ({
      id: `tryout-${id}`,
      prompt,
      options,
      answer,
      explanation,
      caseStudy: true,
      bookletItem,
      bookletPage: booklet.find(([number]) => number === bookletItem)![2],
      tryoutSource: { title: source, page: sourcePage },
      ...(verifiedLinks[id] ? { legalSource: verifiedLinks[id] } : {}),
    }),
  );
}
