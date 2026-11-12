import type { Question, UkpTopic } from "./ukp";

const questions: (Question & { topic: UkpTopic })[] = [
  {
    topic: "pph-orang-pribadi",
    id: "ortax-original-neto-dokter",
    section: "nppn",
    kind: "hitung",
    prompt:
      "Ibu Sari, dokter yang berpraktik mandiri dengan NPPN (peredaran bruto 2026 Rp600.000.000, norma 50% diasumsikan), juga pegawai tetap sebuah rumah sakit swasta dengan penghasilan bruto Rp120.000.000 setahun dan iuran JHT yang menjadi beban pegawai dan dibayar melalui pemberi kerja Rp2.400.000. Ia juga menerima sewa rumah Rp60.000.000 yang telah dikenai PPh final. Berapa jumlah penghasilan neto yang digabung untuk menghitung PKP 2026?",
    options: [
      "Rp411.600.000,00",
      "Rp471.600.000,00",
      "Rp417.600.000,00",
      "Rp360.000.000,00",
    ],
    answer: 0,
    explanation: "Kunci mengikuti dokumen sumber.",
    originalSource: {
      title: "Pembahasan Tryout Ortax UKP B",
      page: 1,
      number: 1,
    },
  },
  {
    topic: "pph-potong-pungut",
    id: "ortax-original-bukti-potong-nonresiden",
    section: "tata-cara-21",
    kind: "kasus",
    prompt:
      "PT Ortax Services membayar honorarium kepada Tuan Hasan, warga negara dan penduduk Malaysia yang berada di Indonesia tidak lebih dari 183 hari dalam jangka waktu 12 bulan, atas jasanya sebagai pembicara pelatihan internal, dan memotong PPh Pasal 26 atas honorarium tersebut.\nBukti potong yang dibuat di Coretax adalah ....",
    options: [
      "BPNR (Bukti Pemotongan Non Residen)",
      "BP21 - Bukti Pemotongan Selain Pegawai Tetap",
      "BPPU (Bukti Pemotongan/Pemungutan Unifikasi)",
      "BP26 - Bukti Pemotongan PPh Pasal 26",
    ],
    answer: 3,
    explanation: "Kunci mengikuti dokumen sumber.",
    originalSource: {
      title: "Tryout Ortax UKP B · 6 November 2026, paket 1",
      page: 1,
      number: 1,
    },
  },
  {
    topic: "kup",
    id: "ortax-original-restitusi-banding",
    section: "restitusi",
    kind: "kasus",
    prompt:
      "Pengadilan Pajak mengabulkan seluruh permohonan banding CV Ortax Distributor atas Surat Keputusan Keberatan PPN yang jumlah pajaknya telah dilunasi, sehingga timbul kelebihan pembayaran pajak. Salinan Putusan Banding dikirim oleh Pengadilan Pajak pada 3 Juni 2026 dan diterima oleh KPP tempat CV Ortax Distributor terdaftar (kantor DJP yang berwenang melaksanakan putusan) pada 9 Juni 2026. Batas waktu bagi KPP untuk menerbitkan Surat Keputusan Pengembalian Kelebihan Pembayaran Pajak (SKPKPP) adalah ....",
    options: ["3 Juli 2026", "9 Juli 2026", "31 Juli 2026", "9 September 2026"],
    answer: 1,
    explanation: "Kunci mengikuti dokumen sumber.",
    originalSource: {
      title: "Tryout Ortax UKP B · 6 November 2026, paket 1",
      page: 2,
      number: 2,
    },
  },
  {
    topic: "pph-potong-pungut",
    id: "ortax-original-dua-bukti-potong",
    section: "hak-kewajiban",
    kind: "hitung",
    prompt:
      "Ibu Sari (TK/0 sejak 1 Januari 2026) bekerja di PT Ortax Distributor pada Januari–Juni 2026 dan di PT Ortax Manufaktur pada Juli–Desember 2026. Bukti potong BPA1 pertama mencantumkan penghasilan neto Rp57.000.000 dan PPh 21 dipotong Rp150.000; BPA1 kedua mencantumkan penghasilan neto Rp69.000.000 dan PPh 21 dipotong Rp750.000. Tidak ada penghasilan lain. PPh kurang bayar dalam SPT Tahunan 2026 Ibu Sari adalah...",
    options: ["Rp3.900.000,00", "Rp4.800.000,00", "Rp4.050.000,00", "Rp0,00"],
    answer: 0,
    explanation: "Kunci mengikuti dokumen sumber.",
    originalSource: {
      title: "Tryout Ortax UKP B · TO 1",
      page: 1,
      number: 1,
    },
  },
  {
    topic: "ppn",
    id: "ortax-original-ppn-dibebaskan",
    section: "fasilitas",
    kind: "konsep",
    prompt:
      "Ciri fasilitas PPN dibebaskan yang membedakannya dari fasilitas PPN tidak dipungut adalah ...",
    options: [
      "Faktur memakai kode transaksi 08 dan pajak masukan atas perolehan yang berkaitan tidak dapat dikreditkan",
      "Faktur memakai kode transaksi 08 dan pajak masukan dapat dikreditkan sepanjang SPT Masa PPN menunjukkan lebih bayar",
      "Faktur tidak perlu dibuat dan pajak masukan dapat dimintakan restitusi setiap Masa Pajak",
      "Faktur memakai kode transaksi 07 dan pajak masukan atas perolehan yang berkaitan tetap dapat dikreditkan",
    ],
    answer: 0,
    explanation: "Kunci mengikuti dokumen sumber.",
    originalSource: {
      title: "Tryout Ortax UKP B · TO 1",
      page: 2,
      number: 2,
    },
  },
  {
    topic: "pph-badan",
    id: "ortax-original-biaya-pemagangan",
    section: "fasilitas",
    kind: "hitung",
    prompt:
      "PT Ortax Manufaktur (WP badan dalam negeri) pada 2026 menyelenggarakan pemagangan bagi siswa SMK berbasis kompetensi tertentu. Sebelum kegiatan dimulai, perusahaan telah menyampaikan pemberitahuan melalui sistem OSS dengan melampirkan perjanjian kerja sama dan surat keterangan fiskal yang masih berlaku, dan penghasilan neto fiskal 2026 tetap positif setelah memperhitungkan tambahan pengurangan. Biaya yang dikeluarkan: honorarium siswa magang Rp60.000.000; instruktur pembimbing pemagangan Rp25.000.000; sertifikasi kompetensi siswa oleh lembaga berwenang Rp15.000.000; jamuan peresmian program Rp20.000.000; serta honorarium Rp10.000.000 bagi seorang siswa magang yang merupakan anak kandung direktur utama. Besarnya tambahan pengurangan penghasilan bruto (di luar pembebanan 100% biaya) yang paling tinggi dapat dimanfaatkan adalah ...",
    options: [
      "Rp130.000.000,00",
      "Rp100.000.000,00",
      "Rp110.000.000,00",
      "Rp200.000.000,00",
    ],
    answer: 1,
    explanation: "Kunci mengikuti dokumen sumber.",
    originalSource: {
      title: "Tryout Ortax UKP B · TO 2",
      page: 1,
      number: 1,
    },
  },
  {
    topic: "pph-badan",
    id: "ortax-original-kredit-pph-24",
    section: "kredit",
    kind: "hitung",
    prompt:
      "PT Ortax Services, Wajib Pajak badan dalam negeri, memperoleh penghasilan neto jasa konsultasi dari Negara Y sebesar Rp750.000.000 pada Tahun Pajak 2025. Pajak yang telah dibayar di Negara Y sebesar Rp200.000.000. Berdasarkan penghitungan sesuai ketentuan Pasal 24 UU PPh, batas maksimum kredit pajak luar negeri adalah Rp165.000.000.\nBesarnya PPh Pasal 24 yang dapat dikreditkan dalam penghitungan PPh Badan adalah ....",
    options: [
      "Rp165.000.000,00",
      "Rp200.000.000,00",
      "Rp35.000.000,00",
      "Rp182.500.000,00",
    ],
    answer: 0,
    explanation: "Kunci mengikuti dokumen sumber.",
    originalSource: {
      title: "Tryout Ortax UKP B · 6 November 2026, paket 2",
      page: 2,
      number: 5,
    },
  },
];

export function getOrtaxOriginalQuestions(topic: UkpTopic): Question[] {
  return questions.filter((item) => item.topic === topic);
}
