import { getBookletItems } from "./ukp-curriculum";
import type { Question, UkpTopic } from "./ukp";

type AdvancedCase = [
  id: string,
  item: string,
  source: [title: string, page: number],
  prompt: string,
  options: Question["options"],
  answer: number,
  explanation: string,
];

const b = "Pembahasan Tryout Ortax UKP B";
const bella = "TO Ortax Kak Bella · 6 November 2026";
const first = "TO 1";
const second = "TO 2";
const anita = "TO Kak Anita · 6 November 2026";

const cases: Partial<Record<UkpTopic, AdvancedCase[]>> = {
  "pph-orang-pribadi": [
    [
      "gabungan-neto-kredit",
      "3",
      [first, 1],
      "Pada 2026, pegawai TK/0 mempunyai dua BPA1. Neto masing-masing Rp78 juta dan Rp96 juta. Potongan PPh 21 masing-masing Rp1,2 juta dan Rp2,4 juta. Ia juga memperoleh sewa bangunan Rp40 juta yang sudah dipotong PPh final. Berapa PPh kurang bayar dalam SPT Tahunan?",
      ["Rp8,4 juta", "Rp12 juta", "Rp14,4 juta", "Rp4,8 juta"],
      0,
      "Gabungkan neto dua pemberi kerja Rp174 juta dan keluarkan sewa final. Kurangi PTKP sekali, Rp54 juta, sehingga PKP Rp120 juta. PPh = 5% × Rp60 juta + 15% × Rp60 juta = Rp12 juta. Kurangi kredit Rp3,6 juta, tersisa Rp8,4 juta.",
    ],
    [
      "norma-dua-sumber",
      "1",
      [b, 1],
      "Tenaga ahli yang berhak menggunakan NPPN menerima bruto praktik Rp520 juta dengan norma 50%. Ia juga memperoleh gaji bruto Rp144 juta dari pekerjaan tetap selama 12 bulan, iuran pegawai yang dapat dikurangkan Rp3 juta, dan bunga deposito final Rp12 juta. Jika biaya jabatan 5% dibatasi Rp6 juta setahun, berapa neto untuk penghitungan PKP?",
      ["Rp401 juta", "Rp395 juta", "Rp407 juta", "Rp393,8 juta"],
      1,
      "Neto praktik Rp260 juta. Biaya jabatan 5% × Rp144 juta = Rp7,2 juta, dibatasi Rp6 juta. Neto gaji Rp144 juta − Rp6 juta − Rp3 juta = Rp135 juta. Gabungkan Rp395 juta. Bunga deposito final dipisahkan.",
    ],
    [
      "norma-lalu-progresif",
      "3",
      [b, 1],
      "WP TK/0 memiliki bruto praktik Rp400 juta, norma 35%, dan neto gaji yang sudah dihitung Rp164 juta. Penghasilan final Rp18 juta dicatat terpisah. Bila kredit nonfinal Rp14 juta, berapa PPh kurang bayar?",
      ["Rp31,5 juta", "Rp17,5 juta", "Rp22 juta", "Rp48,5 juta"],
      1,
      "Neto praktik Rp140 juta. Gabungkan dengan neto gaji Rp164 juta dan kurangi PTKP Rp54 juta. PKP Rp250 juta, sehingga PPh = Rp3 juta + Rp28,5 juta. Kurangi kredit Rp14 juta, tersisa Rp17,5 juta.",
    ],
  ],
  kup: [
    [
      "dua-pemicu-skpkpp",
      "10",
      [bella, 2],
      "Kelebihan pembayaran pertama berasal dari keputusan keberatan DJP yang diterbitkan 6 Agustus dan diterima WP 10 Agustus. Kelebihan kedua berasal dari putusan banding yang dikirim 8 Agustus dan diterima kantor DJP pelaksana 12 Agustus. Jika masing-masing tenggat satu bulan dan abaikan hari libur, kapan batas penerbitan SKPKPP?",
      [
        "6 September dan 8 September",
        "10 September dan 12 September",
        "6 September dan 12 September",
        "31 Agustus dan 30 September",
      ],
      2,
      "Untuk keputusan keberatan, mulai dari tanggal keputusan diterbitkan. Untuk putusan banding, mulai dari tanggal diterima kantor DJP pelaksana. Tenggat masing-masing 6 September dan 12 September.",
    ],
    [
      "jenis-sanksi-berpasangan",
      "9",
      [anita, 1],
      "Dalam satu masa, pemberi kerja terlambat menyetor PPh 21. Pada kasus berbeda, PKP terlambat membuat faktur. Manakah klasifikasi sanksi yang sesuai?",
      [
        "Keduanya denda pelaporan SPT",
        "Bunga keterlambatan pembayaran dan denda faktur berdasarkan DPP",
        "Denda faktur dan bunga atas keterlambatan setor",
        "Keduanya kenaikan dalam SKPKB",
      ],
      1,
      "Keterlambatan pembayaran memakai bunga dengan tarif menurut masa yang relevan. Keterlambatan membuat Faktur Pajak menggunakan denda atas DPP. Ini berbeda dari denda terlambat menyampaikan SPT.",
    ],
    [
      "beda-denda-dan-bunga",
      "9",
      [anita, 1],
      "Kasus A terlambat menyampaikan SPT Masa PPh 21 meski setoran tepat waktu. Kasus B terlambat menyetor angsuran PPh 25 Rp90 juta selama satu bulan lebih dua hari. Soal memberi bunga 1% per bulan, bagian bulan dihitung penuh. Pasangan sanksi yang tepat adalah apa?",
      [
        "Rp500.000 dan Rp900.000",
        "Rp100.000 dan Rp900.000",
        "Rp100.000 dan Rp1.800.000",
        "Rp500.000 dan Rp1.800.000",
      ],
      2,
      "Denda SPT Masa PPh 21 Rp100.000. Untuk angsuran PPh 25, satu bulan lebih dua hari dihitung dua bulan. Bunga = Rp90 juta × 1% × 2 = Rp1,8 juta.",
    ],
  ],
  "pph-badan": [
    [
      "vokasi-basis-tambahan",
      "16",
      [second, 2],
      "Badan memenuhi syarat administrasi fasilitas vokasi dan neto fiskal tetap positif. Ia membayar bahan praktik Rp54 juta, instruktur Rp31 juta, dan sertifikasi oleh lembaga berwenang Rp15 juta. Ada biaya jamuan Rp14 juta dan honor peserta yang merupakan anak kandung direktur Rp9 juta. Jika tambahan maksimal 100% dari biaya yang memenuhi syarat, berapa tambahan pengurang?",
      ["Rp123 juta", "Rp100 juta", "Rp200 juta", "Rp109 juta"],
      1,
      "Masukkan bahan praktik, instruktur, dan sertifikasi, total Rp100 juta. Jamuan bukan biaya pelaksanaan yang memenuhi syarat pada kasus ini dan honor peserta dengan hubungan keluarga tersebut dikecualikan. Tambahan 100% = Rp100 juta. Angka 200% memasukkan pengurangan dasar.",
    ],
    [
      "kredit-dua-negara",
      "14",
      [anita, 3],
      "Untuk kredit Pasal 24, batas Negara X sudah dihitung Rp110 juta dan Negara Y Rp75 juta. Pajak luar negeri yang memenuhi syarat sebelum batas masing-masing Rp145 juta dan Rp48 juta. Jika batas total pajak Indonesia tidak menjadi pembatas tambahan, berapa kreditnya?",
      ["Rp193 juta", "Rp185 juta", "Rp158 juta", "Rp145 juta"],
      2,
      "Negara X dibatasi Rp110 juta. Negara Y hanya membayar Rp48 juta sehingga kreditnya Rp48 juta. Jumlah Rp158 juta. Sisa batas Negara Y tidak dipakai untuk menutup kelebihan Negara X.",
    ],
    [
      "kredit-hingga-pph29",
      "14",
      [anita, 3],
      "PPh badan terutang Rp510 juta. Pajak luar negeri yang memenuhi syarat dibayar Rp124 juta dengan batas kredit Pasal 24 Rp96 juta. Kredit PPh 22 Rp35 juta, PPh 23 Rp22 juta, dan angsuran PPh 25 Rp180 juta. Berapa PPh Pasal 29?",
      ["Rp149 juta", "Rp177 juta", "Rp273 juta", "Rp414 juta"],
      1,
      "Kredit luar negeri dibatasi Rp96 juta. Total kredit = Rp96 juta + Rp35 juta + Rp22 juta + Rp180 juta = Rp333 juta. PPh Pasal 29 = Rp510 juta − Rp333 juta = Rp177 juta.",
    ],
  ],
  "pph-potong-pungut": [
    [
      "dua-dokumen-pasal26",
      "10 dan 11",
      [bella, 1],
      "Perusahaan membayar honor seminar kepada pembicara orang pribadi luar negeri dan royalti lisensi kepada badan luar negeri. Keduanya diasumsikan telah dipotong PPh 26. Pasangan bukti potong Coretax mana yang sesuai?",
      [
        "BPNR untuk kedua pembayaran",
        "BP21 untuk honor dan BP26 untuk royalti",
        "BP26 untuk honor dan BPNR untuk royalti",
        "BPPU untuk honor dan BPNR untuk royalti",
      ],
      2,
      "Honor jasa orang pribadi luar negeri dicatat pada rezim PPh 21/26 melalui BP26. Royalti badan luar negeri masuk unifikasi dengan BPNR. Pasal pajaknya sama, tetapi formulir mengikuti jenis penghasilan dan penerimanya.",
    ],
    [
      "tiga-kategori-jasa",
      "7",
      [first, 3],
      "Panitia membayar hadiah partisipasi Rp18 juta kepada peserta kegiatan dan honor Rp40 juta kepada konsultan orang pribadi bukan pegawai. Keduanya penduduk Indonesia. Dasar konsultan 50% dari bruto dan seluruh dasar kedua pembayaran masuk lapisan 5%. Berapa total PPh 21?",
      ["Rp1,45 juta", "Rp1,9 juta", "Rp2,9 juta", "Rp1 juta"],
      1,
      "Peserta kegiatan memakai bruto Rp18 juta × 5% = Rp900 ribu. Konsultan memakai 50% × Rp40 juta × 5% = Rp1 juta. Total Rp1,9 juta.",
    ],
    [
      "pungutan-dan-pengecualian",
      "12–14",
      [b, 2],
      "Pemungut PPh 22 melakukan dua pembelian dengan dasar harga sebelum PPN Rp96 juta dan Rp24 juta. Soal menetapkan transaksi pertama dipungut 1,5%, sementara transaksi kedua memenuhi pengecualian. Total pembayaran sebelum potongan adalah Rp120 juta, abaikan PPN. Berapa pungutan dan kas yang dibayarkan?",
      [
        "Rp1,8 juta dan Rp118,2 juta",
        "Rp360 ribu dan Rp119,64 juta",
        "Rp1,44 juta dan Rp118,56 juta",
        "Rp1,44 juta dan Rp94,56 juta",
      ],
      2,
      "Pungut Rp96 juta × 1,5% = Rp1,44 juta. Nilai transaksi kedua tetap masuk arus kas meski dikecualikan dari pungutan. Kas bersih Rp120 juta − Rp1,44 juta = Rp118,56 juta.",
    ],
  ],
  ppn: [
    [
      "aset-bersama-dan-kredit-khusus",
      "6",
      [bella, 3],
      "PKP properti memakai satu alat untuk rumah yang dibebaskan, gudang komersial, dan ruko. Dalam contoh pedoman, bagian pemakaian untuk penyerahan terutang 65%. Pajak Masukan alat Rp80 juta, khusus gudang Rp12 juta, dan khusus rumah dibebaskan Rp9 juta. Berapa total Pajak Masukan yang dapat dikreditkan menurut asumsi soal?",
      ["Rp52 juta", "Rp73 juta", "Rp64 juta", "Rp92 juta"],
      2,
      "Kredit bersama = 65% × Rp80 juta = Rp52 juta. Tambahkan Rp12 juta yang khusus penyerahan terutang. Jangan kreditkan Rp9 juta untuk rumah dibebaskan. Total Rp64 juta.",
    ],
    [
      "fasilitas-kode-kredit",
      "8 dan 9",
      [first, 2],
      "PKP menerbitkan faktur atas transaksi X yang memperoleh fasilitas PPN dibebaskan dan transaksi Y yang memperoleh fasilitas PPN tidak dipungut. Dalam skenario umum, pasangan kode transaksi dan hak kredit Pajak Masukan terkait yang sesuai adalah apa?",
      [
        "X 07, dapat dikreditkan; Y 08, tidak dapat dikreditkan",
        "X 08, tidak dapat dikreditkan; Y 07, dapat dikreditkan jika syarat terpenuhi",
        "Keduanya 08 dan dapat dikreditkan",
        "Keduanya 07 dan tidak dapat dikreditkan",
      ],
      1,
      "Fasilitas dibebaskan menggunakan kode 08 dan Pajak Masukan terkait tidak dapat dikreditkan. Fasilitas tidak dipungut memakai kode 07, dan Pajak Masukannya tetap dapat dikreditkan sepanjang syaratnya terpenuhi.",
    ],
    [
      "kurs-faktur-dan-kas",
      "5",
      [second, 3],
      "PKP menyerahkan jasa desain di dalam negeri dengan penggantian USD8.000. Faktur wajib dibuat saat penyerahan. Kurs KMK pada tanggal itu Rp16.200/USD, kurs KMK tanggal pelunasan Rp16.450/USD, dan kurs bank pelunasan Rp16.500/USD. Jika beban efektif PPN 11%, berapa PPN pada faktur?",
      ["Rp14.520.000", "Rp14.256.000", "Rp14.476.000", "Rp15.552.000"],
      1,
      "Pakai kurs KMK saat faktur wajib dibuat: USD8.000 × Rp16.200 = Rp129,6 juta. PPN = 11% × Rp129,6 juta = Rp14.256.000. Kurs pada hari pelunasan tidak mengganti dasar pada faktur awal.",
    ],
  ],
  "akuntansi-perpajakan": [
    [
      "jurnal-foreign-tax-cap",
      "1",
      [anita, 3],
      "Perusahaan membayar pajak luar negeri Rp82 juta. Batas kredit yang sudah dihitung Rp59 juta. Dalam rekonsiliasi akun kredit PPh 24, berapa nilai yang dapat dipakai dan berapa yang tidak menjadi kredit?",
      [
        "Rp82 juta dan nihil",
        "Rp59 juta dan Rp23 juta",
        "Rp23 juta dan Rp59 juta",
        "Rp59 juta dan Rp82 juta",
      ],
      1,
      "Jumlah yang dapat menjadi kredit adalah nilai terendah antara pembayaran yang memenuhi syarat dan batas, yaitu Rp59 juta. Selisih Rp23 juta tidak dapat menjadi kredit PPh 24.",
    ],
  ],
};

const legalReferences: Partial<Record<string, Question["legalSource"]>> = {
  "dua-pemicu-skpkpp": {
    label: "PMK 81/2024, Pasal 157",
    href: "https://jdih.kemenkeu.go.id/dok/pmk-81-tahun-2024/summary",
  },
  "dua-dokumen-pasal26": {
    label: "PER-11/PJ/2025 dan PER-12/PJ/2026 · DJP",
    href: "https://pajak.go.id/pelaporan-spt-dalam-rangka-pelaksanaan-sistem-inti-administrasi-perpajakan-12pj2026-tentang",
  },
  "vokasi-basis-tambahan": {
    label: "PMK 128/PMK.010/2019",
    href: "https://jdih.kemenkeu.go.id/dok/128-pmk-010-2019/files",
  },
};

export function getOrtaxAdvancedQuestions(topic: UkpTopic): Question[] {
  const items = getBookletItems("b", topic);
  return (cases[topic] ?? []).map(
    ([id, bookletItem, [title, page], prompt, options, answer, explanation]) => {
      const legalSource = legalReferences[id];
      return {
        id: `ortax-pattern-${id}`,
        prompt,
        options,
        answer,
        explanation,
        bookletItem,
        bookletPage: items.find(([number]) => number === bookletItem)![2],
        kind: "kasus",
        source: `${title}, hlm. ${page}`,
        ...(legalSource ? { legalSource } : {}),
      };
    },
  );
}
