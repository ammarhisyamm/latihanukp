import type { UkpLevel, UkpTopic } from "./ukp";

type StudyGuide = {
  title: string;
  concept: string;
  formula?: string[];
  scenario: string;
  steps: string[];
  trap: string;
  level?: UkpLevel;
  source?: [label: string, href: string];
};

const hpp = "https://www.pajak.go.id/en/node/74838";
const meterai = "https://jdih.kemenkeu.go.id/dok/uu-10-tahun-2020";
const ter = "https://jdih.kemenkeu.go.id/dok/pmk-168-tahun-2023/summary";
const ppn = "https://jdih.kemenkeu.go.id/dok/pmk-131-tahun-2024/summary";

const guides: Record<UkpTopic, StudyGuide[]> = {
  "bea-meterai": [
    {
      title: "Hitung dokumen yang menjadi objek",
      concept:
        "Mulai dari jenis dokumen. Surat perjanjian beserta rangkapnya dan akta merupakan objek berdasarkan jenisnya. Ambang nominal lebih dari Rp5 juta berlaku untuk dokumen yang menyatakan penerimaan uang atau pelunasan utang. Dokumen yang dipakai sebagai alat bukti di pengadilan juga dapat menjadi objek.",
      formula: ["Bea Meterai = jumlah dokumen yang menjadi objek × Rp10.000"],
      scenario:
        "Dua pihak membuat dua rangkap kontrak senilai Rp4 juta. Mereka juga memiliki kuitansi Rp5 juta dan kuitansi Rp7 juta sebagai arsip biasa.",
      steps: [
        "Dua rangkap kontrak merupakan dua objek walaupun nilai kontraknya Rp4 juta.",
        "Kuitansi Rp5 juta belum melewati ambang. Kuitansi Rp7 juta menambah satu objek.",
        "Tiga dokumen × Rp10.000 = Rp30.000.",
      ],
      trap: "Jangan menjumlahkan nilai kuitansi sebelum menguji ambang. Uji tiap dokumen sesuai jenisnya.",
      source: ["UU 10/2020, Pasal 3 dan 5", meterai],
    },
    {
      title: "Tentukan kapan dan siapa yang menanggung",
      concept:
        "Untuk perjanjian, perhatikan saat tanda tangan dan siapa yang menerima rangkap. Untuk kuitansi yang menjadi objek, perhatikan saat dokumen diserahkan dan siapa penerimanya. Dokumen yang dibuat di luar negeri menjadi terutang saat digunakan di Indonesia.",
      scenario:
        "Penjual dan pembeli menandatangani kontrak pada 4 Maret. Masing-masing menerima satu rangkap. Penjual menyerahkan kuitansi Rp9 juta pada 10 Maret.",
      steps: [
        "Kontrak terutang saat ditandatangani pada 4 Maret. Tiap pihak menanggung rangkap yang diterimanya.",
        "Kuitansi terutang saat diserahkan pada 10 Maret. Pembeli sebagai penerima pada dasarnya merupakan pihak terutang.",
        "Para pihak dapat menentukan siapa yang membayar. Kesepakatan itu tidak menghilangkan Bea Meterai.",
      ],
      trap: "Tanggal pembayaran, tanggal penyerahan kuitansi, dan tanggal tanda tangan kontrak bisa berbeda.",
      source: ["UU 10/2020, Pasal 8–9", meterai],
    },
    {
      title: "Pemeteraian kemudian dan sanksi",
      concept:
        "Pisahkan dokumen yang sudah terutang sejak awal tetapi belum dilunasi dari dokumen yang baru menjadi objek saat digunakan sebagai alat bukti di pengadilan.",
      formula: [
        "Kurang bayar sejak awal = pokok yang belum dilunasi + sanksi 100% dari Bea Meterai yang terutang",
        "Dokumen yang baru terutang sebagai alat bukti = pokok Bea Meterai",
      ],
      scenario:
        "Tiga kontrak belum dilunasi sejak ditandatangani. Dua dokumen lain baru terutang saat diajukan sebagai alat bukti.",
      steps: [
        "Untuk tiga kontrak, pokok Rp30.000 dan sanksi Rp30.000.",
        "Untuk dua alat bukti yang baru terutang, pokok Rp20.000.",
        "Total yang harus dilunasi Rp80.000.",
      ],
      trap: "Jangan mengenakan sanksi 100% pada dokumen yang sebelumnya memang belum terutang.",
      source: ["UU 10/2020, Pasal 17–18", meterai],
    },
  ],
  kup: [
    {
      title: "Pisahkan batas setor dan batas lapor",
      concept:
        "Untuk menentukan tenggat, identifikasi jenis pajak, Masa atau Tahun Pajak, serta apakah soal menanyakan pembayaran atau pelaporan. Untuk PPh 21 Masa pada skenario umum, batas setor tanggal 15 dan lapor tanggal 20 bulan berikutnya. SPT Tahunan orang pribadi dan badan dihitung dari akhir tahun pajak.",
      formula: [
        "PPh 21 Masa pada skenario umum: setor tanggal 15 dan lapor tanggal 20 bulan berikutnya",
        "SPT Tahunan: orang pribadi 3 bulan, badan 4 bulan setelah akhir tahun pajak",
      ],
      scenario:
        "Pemberi kerja memotong PPh 21 Masa September. WP orang pribadi dan badan juga memakai tahun buku kalender. Abaikan hari libur, perpanjangan, dan ketentuan khusus.",
      steps: [
        "PPh 21 Masa September disetor paling lambat 15 Oktober dan dilaporkan paling lambat 20 Oktober.",
        "SPT Tahunan orang pribadi disampaikan paling lambat 31 Maret tahun berikutnya.",
        "SPT Tahunan badan disampaikan paling lambat 30 April tahun berikutnya.",
      ],
      trap: "Tanggal 15 dan 20 dalam contoh PPh 21 tidak otomatis berlaku untuk semua jenis pajak.",
      source: [
        "Coretaxpedia, batas waktu pelaporan dan pembayaran",
        "https://www.pajak.go.id/coretaxpedia/batas-waktu-pelaporan-pembayaran",
      ],
    },
    {
      title: "Pilih jalur berdasarkan dokumen",
      concept:
        "Pembetulan cocok untuk salah tulis, salah hitung, atau kekeliruan penerapan ketentuan. Keberatan menguji substansi ketetapan yang dapat diajukan keberatan. Banding menguji keputusan keberatan, sedangkan gugatan antara lain dapat digunakan terhadap pelaksanaan penagihan.",
      scenario:
        "Satu WP menemukan salah penjumlahan pada SKP. WP lain menolak substansi keputusan keberatannya. WP ketiga mempersoalkan pelaksanaan sita.",
      steps: [
        "Untuk salah penjumlahan pada SKP, identifikasi jalur pembetulan.",
        "Untuk substansi keputusan keberatan, pertimbangkan banding dengan tenggat umum tiga bulan sejak keputusan diterima.",
        "Untuk pelaksanaan penagihan, identifikasi gugatan dan tenggat khusus penagihan, yakni 14 hari sejak pelaksanaan penagihan.",
      ],
      trap: "Tenggat banding dihitung dari penerimaan keputusan keberatan. Tenggat gugatan keputusan lain dapat berbeda dari gugatan atas pelaksanaan penagihan.",
      source: [
        "PMK 118/2024 dan riwayat perubahan",
        "https://jdih.kemenkeu.go.id/dok/d21a3d36-4882-4856-af8b-08dd288afb50",
      ],
    },
    {
      title: "Urutkan tindakan penagihan",
      concept:
        "Untuk skenario penagihan biasa, catat satu per satu tanggal jatuh tempo pembayaran, penerbitan Surat Teguran, pemberitahuan Surat Paksa, pelaksanaan sita, dan pengumuman lelang. Setiap tenggat berangkat dari tindakan yang relevan.",
      formula: [
        "Jatuh tempo → 7 hari → Surat Teguran disampaikan → 21 hari → Surat Paksa",
        "Sejak Surat Paksa diberitahukan → 2 × 24 jam → sita",
        "Sejak sita → 14 hari → pengumuman lelang → 14 hari → lelang",
      ],
      scenario:
        "Surat Paksa baru diberitahukan Senin pukul 09.00 dan utang tetap belum lunas. Soal menanyakan tahapan berikutnya dalam urutan biasa.",
      steps: [
        "Mulai hitungan dari pemberitahuan Surat Paksa, bukan tanggal penerbitannya.",
        "Jeda 2 × 24 jam berakhir Rabu pukul 09.00.",
        "Tahap berikutnya adalah sita bila syaratnya terpenuhi. Lelang mengikuti tahapan pengumuman tersendiri.",
      ],
      trap: "Jangan menerapkan 21 hari dari Surat Teguran untuk menghitung kapan sita dapat dilakukan setelah pemberitahuan Surat Paksa.",
      source: [
        "UU 19/2000 tentang perubahan UU PPSP",
        "https://jdih.kemenkeu.go.id/api/download/fullText/2000/19TAHUN2000UU.htm",
      ],
    },
    {
      title: "Hitung bunga dan denda sengketa",
      concept:
        "Bunga dihitung dari pokok, tarif bunga per bulan yang berlaku untuk jenis sanksi dan periodenya, serta jumlah bulan sesuai ketentuan. Denda keberatan dan banding memakai dasar tersendiri. Pakai tarif bunga yang diberikan untuk latihan.",
      formula: [
        "Bunga = pokok kurang bayar × tarif bulanan × jumlah bulan yang diperhitungkan",
        "Denda keberatan = 30% × (pajak menurut keputusan − pembayaran sebelum keberatan), jika ketentuan dendanya berlaku",
        "Denda banding = 60% × (pajak menurut putusan − pembayaran sebelum keberatan), jika ketentuan dendanya berlaku",
      ],
      scenario:
        "Soal keterlambatan setor memberi pokok Rp80 juta, bunga 1,1% per bulan, dan keterlambatan dua bulan lebih satu hari. Soal lain memberi pajak menurut keputusan keberatan Rp200 juta dan pembayaran sebelum keberatan Rp50 juta, dengan denda 30% berlaku.",
      steps: [
        "Bagian bulan dihitung penuh dalam kasus bunga ini. Gunakan tiga bulan.",
        "Bunga = Rp80 juta × 1,1% × 3 = Rp2,64 juta. Jika yang ditanya pokok dan bunga, hasilnya Rp82,64 juta.",
        "Pada kasus keberatan, dasar denda = Rp200 juta − Rp50 juta = Rp150 juta. Denda = Rp45 juta.",
      ],
      trap: "Tarif bunga dalam contoh adalah asumsi soal. Tarif dan batas jumlah bulan perlu dibaca dari jenis sanksinya.",
      source: ["UU HPP, perubahan ketentuan sanksi UU KUP", hpp],
    },
  ],
  "pph-orang-pribadi": [
    {
      title: "Dari penghasilan neto ke PPh terutang",
      concept:
        "Pisahkan penghasilan tarif umum, penghasilan final, dan penghasilan bukan objek. Dari neto tarif umum, kurangi kompensasi rugi yang dapat dipakai dan PTKP. Terapkan tarif progresif pada PKP yang dibulatkan ke bawah ke ribuan rupiah penuh.",
      formula: [
        "PKP = neto fiskal tarif umum − kompensasi rugi yang dapat dipakai − PTKP",
        "Lapisan PKP: 5% sampai Rp60 juta; 15% sampai Rp250 juta; 25% sampai Rp500 juta; 30% sampai Rp5 miliar; 35% atas sisanya",
        "PPh kurang bayar = PPh terutang − kredit pajak yang memenuhi syarat",
      ],
      scenario:
        "WP berstatus K/1 memiliki neto fiskal tarif umum Rp343 juta dan kredit nonfinal Rp12 juta. Tidak ada kompensasi rugi atau penyesuaian lain.",
      steps: [
        "PTKP K/1 = Rp54 juta + Rp4,5 juta status kawin + Rp4,5 juta satu tanggungan = Rp63 juta.",
        "PKP = Rp343 juta − Rp63 juta = Rp280 juta.",
        "PPh = 5% × Rp60 juta + 15% × Rp190 juta + 25% × Rp30 juta = Rp39 juta.",
        "Kurangi kredit Rp12 juta. PPh kurang bayar Rp27 juta.",
      ],
      trap: "Tarif 25% hanya mengenai bagian PKP di atas Rp250 juta pada contoh ini.",
      source: ["UU HPP, lapisan tarif Pasal 17 UU PPh", hpp],
    },
    {
      title: "NPPN dan alokasi PPh keluarga",
      concept:
        "NPPN menghasilkan penghasilan neto dari peredaran bruto yang dikalikan norma sesuai kegiatan dan wilayah. Untuk suami-istri berstatus PH atau MT, hitung pajak gabungan terlebih dahulu, lalu alokasikan menurut perbandingan neto masing-masing.",
      formula: [
        "Neto NPPN = peredaran bruto × persentase norma",
        "PPh masing-masing = PPh gabungan × (neto masing-masing ÷ neto gabungan)",
      ],
      scenario:
        "Pengguna NPPN memperoleh bruto Rp750 juta dengan norma 40%. Dalam contoh keluarga yang terpisah, pajak gabungan sudah dihitung Rp48 juta dengan neto suami Rp450 juta dan istri Rp150 juta.",
      steps: [
        "Neto NPPN = Rp750 juta × 40% = Rp300 juta. Lanjutkan ke PTKP bila diminta mencari PKP.",
        "Neto gabungan keluarga = Rp600 juta. Proporsi suami 75%, istri 25%.",
        "Alokasi PPh suami Rp36 juta dan istri Rp12 juta.",
      ],
      trap: "Biaya riil tidak dikurangkan lagi dari neto menurut norma. Pada PH atau MT, pembagian dilakukan setelah pajak gabungan dihitung.",
    },
    {
      title: "Omzet kumulatif dan PPh final 0,5%",
      level: "a",
      concept:
        "Pada skema yang memenuhi syarat, bagian omzet usaha orang pribadi sampai Rp500 juta per tahun tidak dikenai PPh final. Hitung omzet kumulatif dalam tahun pajak yang sama. Pastikan kegiatan dan WP memenuhi syarat skema.",
      formula: [
        "Dasar PPh final bulan ini = omzet bulan ini − bagian omzet bulan ini yang masih mengisi batas Rp500 juta",
        "PPh final = 0,5% × dasar yang dikenai pajak",
      ],
      scenario:
        "Pedagang orang pribadi yang memenuhi skema mencatat omzet Rp465 juta hingga Agustus dan Rp95 juta pada September.",
      steps: [
        "Sisa bagian omzet bebas sebelum September = Rp500 juta − Rp465 juta = Rp35 juta.",
        "Dasar bulan September = Rp95 juta − Rp35 juta = Rp60 juta.",
        "PPh final September = 0,5% × Rp60 juta = Rp300.000.",
      ],
      trap: "Batas Rp500 juta berlaku kumulatif setahun. Penghasilan pekerjaan bebas yang dikecualikan dari skema harus dianalisis tersendiri.",
      source: [
        "PP 20/2026, perubahan PP 55/2022",
        "https://jdih.kemenkeu.go.id/dok/pp-20-tahun-2026/summary",
      ],
    },
  ],
  "pph-potong-pungut": [
    {
      title: "Dari bruto pegawai ke neto setahun",
      concept:
        "Pada perhitungan tahunan pegawai tetap, hitung biaya jabatan sebesar 5% dari bruto dengan batas sesuai masa kerja. Iuran pensiun yang memenuhi ketentuan dapat menjadi pengurang tersendiri. Setelah neto, kurangi PTKP dan gunakan lapisan tarif progresif.",
      formula: [
        "Biaya jabatan untuk 12 bulan = nilai terkecil dari 5% × bruto setahun atau Rp6 juta",
        "Neto pegawai = bruto − biaya jabatan − iuran pensiun yang dapat dikurangkan",
      ],
      scenario:
        "Pegawai TK/0 bekerja 12 bulan dengan bruto Rp200 juta dan iuran pensiun yang dapat dikurangkan Rp6 juta. Abaikan pengurang lain.",
      steps: [
        "Lima persen × Rp200 juta = Rp10 juta. Karena ada batas tahunan, gunakan biaya jabatan Rp6 juta.",
        "Neto = Rp200 juta − Rp6 juta − Rp6 juta = Rp188 juta. Kurangi PTKP Rp54 juta sehingga PKP Rp134 juta.",
        "PPh setahun = 5% × Rp60 juta + 15% × Rp74 juta = Rp14,1 juta.",
      ],
      trap: "Gunakan batas yang sesuai masa kerja. Dalam contoh 12 bulan ini, pengurangan biaya jabatan tidak sebesar hasil 5% tanpa batas.",
      source: ["PMK 168/2023, biaya jabatan dan penghitungan PPh 21", ter],
    },
    {
      title: "PPh 21 pegawai tetap dan masa pajak terakhir",
      concept:
        "Dalam masa biasa gunakan bruto bulan itu dan TER yang sesuai dengan kategori PTKP dan lapisan bruto. Pada masa terakhir, hitung kembali PPh dengan tarif progresif dan kurangi seluruh potongan sebelumnya. Masa terakhir biasanya Desember atau masa saat pegawai berhenti bekerja.",
      formula: [
        "Masa biasa: PPh 21 = bruto bulan berjalan × TER yang sesuai",
        "Masa terakhir: PPh 21 = PPh setahun atau bagian tahun − total potongan masa sebelumnya",
      ],
      scenario:
        "Gaji bruto Rp12 juta dan bonus Rp3 juta diterima pada bulan yang sama. Asumsikan soal memberi TER 6% untuk bruto Rp15 juta. Pada masa terakhir, PPh tahunan Rp10,2 juta dan potongan sebelumnya Rp8,7 juta.",
      steps: [
        "Jumlahkan gaji dan bonus pada masa pembayaran. Bruto bulan itu Rp15 juta.",
        "Potongan masa biasa = 6% × Rp15 juta = Rp900.000.",
        "Potongan masa terakhir = Rp10,2 juta − Rp8,7 juta = Rp1,5 juta.",
      ],
      trap: "TER masa biasa diterapkan pada bruto bulanan. Pengurangan seperti biaya jabatan masuk penghitungan tahunan pada masa terakhir.",
      source: ["PMK 168/2023", ter],
    },
    {
      title: "Pilih pasal dari penerima dan jenis pembayaran",
      concept:
        "Identifikasi penerima sebagai orang pribadi atau badan, dalam negeri atau luar negeri. Setelah itu periksa objeknya. Jasa orang pribadi dapat masuk PPh 21, sewa mesin kepada badan dalam negeri dapat masuk PPh 23, sedangkan sewa tanah atau bangunan umumnya masuk PPh final Pasal 4 ayat (2).",
      formula: [
        "PPh 23 jasa atau sewa harta yang memenuhi syarat = 2% × jumlah bruto yang menjadi dasar",
        "PPh 23 royalti = 15% × jumlah bruto yang menjadi dasar",
        "Sewa tanah atau bangunan = 10% × jumlah bruto nilai persewaan",
      ],
      scenario:
        "Badan membayar sewa gudang Rp90 juta, sewa mesin Rp25 juta, dan royalti Rp40 juta kepada penyedia badan dalam negeri. Seluruh nilai adalah dasar pemotongan sebelum PPN dan syaratnya terpenuhi.",
      steps: [
        "Gudang dikenai PPh final Rp9 juta.",
        "Sewa mesin dikenai PPh 23 Rp500.000. Royalti dikenai PPh 23 Rp6 juta.",
        "Total potongan Rp15,5 juta. Pisahkan Rp9 juta final dari Rp6,5 juta PPh 23.",
      ],
      trap: "Kata “sewa” belum cukup untuk menentukan tarif. Jenis harta menentukan pasal yang dipakai.",
    },
    {
      title: "PPh 22 impor",
      level: "b",
      concept:
        "Tentukan jenis barang dan status importir sebelum memilih tarif. Untuk soal yang memakai nilai impor, mulai dari CIF, kemudian tambahkan bea masuk dan pungutan kepabeanan lain yang termasuk dasar.",
      formula: [
        "Nilai impor = CIF + bea masuk + pungutan kepabeanan lain yang termasuk dasar",
        "PPh 22 impor = tarif yang berlaku untuk kategori transaksi × nilai impor",
      ],
      scenario:
        "CIF Rp320 juta, bea masuk Rp32 juta, dan pungutan lain yang masuk dasar Rp8 juta. Soal memberi tarif 2,5% untuk barang umum dengan API.",
      steps: [
        "Nilai impor = Rp320 juta + Rp32 juta + Rp8 juta = Rp360 juta.",
        "PPh 22 = 2,5% × Rp360 juta = Rp9 juta.",
        "Tarif 2,5% dipakai karena kategori dan statusnya sudah diberikan.",
      ],
      trap: "CIF saja belum tentu merupakan nilai impor. Tarif untuk barang khusus atau status API berbeda dapat berubah.",
      source: ["PMK 51/2025", "https://jdih.kemenkeu.go.id/dok/pmk-51-tahun-2025/overview"],
    },
  ],
  ppn: [
    {
      title: "Hitung tiga masa berikutnya untuk Pajak Masukan",
      concept:
        "Pajak Masukan yang memenuhi syarat dapat dikreditkan pada masa yang sama atau, sesuai ketentuan, paling lama tiga masa pajak berikutnya. Periksa syarat faktur, penggunaan, dan ketentuan lain seperti apakah Pajak Masukan sudah dibebankan sebagai biaya.",
      formula: ["Batas dalam skenario umum = masa pajak faktur + 3 masa pajak"],
      scenario:
        "Faktur tertanggal pada Masa Februari. PKP belum mengkreditkan Pajak Masukan dan syarat pengkreditan lain terpenuhi.",
      steps: [
        "Masa setelah Februari adalah Maret, April, dan Mei.",
        "Masa Mei merupakan masa ketiga setelah Februari.",
        "Masa Juni sudah melewati jendela tiga masa pada skenario ini.",
      ],
      trap: "Februari adalah masa faktur. Hitung tiga masa berikutnya mulai dari Maret.",
      source: [
        "DJP, pengkreditan Pajak Masukan setelah implementasi Coretax",
        "https://pajak.go.id/index.php/en/node/114133",
      ],
    },
    {
      title: "Bedakan tarif, DPP, dan beban efektif",
      concept:
        "Pada skema umum nonmewah dalam contoh, tarif 12% diterapkan pada DPP nilai lain 11/12 dari harga sebelum pajak. Untuk barang mewah yang masuk skema penuh dan memenuhi kondisi dalam soal, tarif diterapkan pada harga penuh.",
      formula: [
        "Nonmewah pada skema umum: PPN = 12% × (11/12 × harga sebelum PPN)",
        "Barang mewah pada skema penuh: PPN = 12% × harga sebelum PPN",
      ],
      scenario:
        "PKP menjual barang nonmewah Rp240 juta dan barang mewah dalam skema penuh Rp100 juta. Abaikan PPnBM dan fasilitas khusus.",
      steps: [
        "DPP nonmewah = 11/12 × Rp240 juta = Rp220 juta.",
        "PPN nonmewah = 12% × Rp220 juta = Rp26,4 juta.",
        "PPN barang mewah = 12% × Rp100 juta = Rp12 juta. Total PPN Rp38,4 juta.",
      ],
      trap: "Beban efektif 11% pada skema nonmewah berasal dari kombinasi tarif dan DPP. Rumus itu tidak otomatis berlaku pada transaksi dengan DPP atau besaran tertentu lain.",
      source: ["PMK 131/2024", ppn],
    },
    {
      title: "Uang muka, faktur, dan retur",
      concept:
        "Jika uang muka dibayar sebelum penyerahan, faktur atas uang muka dibuat pada saat penerimaan. Saat penyerahan, hitung atas sisa harga yang belum difakturkan. Untuk retur barang dengan nota yang sah, sesuaikan Pajak Keluaran penjual dan Pajak Masukan pembeli.",
      formula: [
        "DPP pelunasan pada skema umum nonmewah = 11/12 × (harga jual − uang muka yang sudah difakturkan)",
      ],
      scenario:
        "PKP menjual barang nonmewah Rp180 juta sebelum PPN. Uang muka Rp60 juta diterima dan difakturkan pada April. Barang diserahkan pada Mei.",
      steps: [
        "PPN April = 11% × Rp60 juta = Rp6,6 juta.",
        "Sisa harga yang belum difakturkan Rp120 juta. PPN Mei = Rp13,2 juta.",
        "Total dua masa Rp19,8 juta, sama dengan 11% × Rp180 juta.",
      ],
      trap: "Jangan memasukkan kembali uang muka saat menghitung faktur atas sisa penyerahan.",
    },
    {
      title: "Pajak Masukan, fasilitas, dan SPT Masa",
      concept:
        "Kelompokkan Pajak Masukan yang boleh dikreditkan, yang terkait penyerahan dibebaskan, dan yang dipakai bersama. Untuk biaya bersama gunakan pedoman yang berlaku. Setelah menghitung kredit yang sah, perhitungkan kompensasi bila tersedia.",
      formula: [
        "PPN kurang bayar = Pajak Keluaran − Pajak Masukan yang dapat dikreditkan − kompensasi yang dapat digunakan",
      ],
      scenario:
        "Pajak Keluaran Rp38 juta. Pajak Masukan khusus penyerahan terutang Rp18 juta, khusus penyerahan dibebaskan Rp4 juta, dan bagian kredit bersama yang sudah dihitung Rp8 juta. Kompensasi sebelumnya Rp2 juta.",
      steps: [
        "Kreditkan Rp18 juta + Rp8 juta = Rp26 juta. Rp4 juta terkait penyerahan dibebaskan tidak ikut.",
        "Hitung Rp38 juta − Rp26 juta − Rp2 juta = Rp10 juta kurang bayar.",
        "Dalam skenario umum, lakukan pembayaran sebelum menyampaikan SPT Masa PPN.",
      ],
      trap: "PPN tidak dipungut berbeda dari PPN dibebaskan. Pajak Masukan terkait penyerahan tidak dipungut dapat dikreditkan jika syaratnya terpenuhi.",
      source: ["Panduan faktur dan SPT Masa PPN DJP", "https://pajak.go.id/reformdjp/coretax-spt/"],
    },
    {
      title: "PPN kegiatan membangun sendiri",
      concept:
        "Periksa dulu apakah pembangunan memenuhi syarat kegiatan membangun sendiri yang menjadi objek. Jika ya, gunakan biaya membangun pada masing-masing masa dan keluarkan harga perolehan tanah.",
      formula: [
        "PPN KMS = 20% × 11/12 × 12% × biaya membangun selain tanah",
        "Dengan tarif PPN 12%, hasil perkalian faktor = 2,2%",
      ],
      scenario:
        "Pada satu masa, pembangunan gudang yang memenuhi syarat menghabiskan Rp920 juta, termasuk biaya tanah Rp220 juta.",
      steps: [
        "Keluarkan biaya tanah. Dasar biaya = Rp700 juta.",
        "PPN = 2,2% × Rp700 juta = Rp15,4 juta.",
        "Jika pembangunan berlangsung beberapa masa, pisahkan biaya tiap masa sebelum menghitung.",
      ],
      trap: "Gunakan biaya membangun selain tanah, bukan harga jual bangunan atau nilai proyek yang masih mencakup tanah.",
      source: ["PMK 53/2025", "https://jdih.kemenkeu.go.id/dok/pmk-53-tahun-2025/files"],
    },
  ],
  "pbb-p5l": [
    {
      title: "Susun NJOP dari komponen objek",
      concept:
        "Untuk kasus perkebunan, identifikasi areal produktif, areal lainnya, nilai investasi tanaman yang relevan, dan bangunan. Konversi semua luas ke satuan yang sama sebelum mengalikan nilai per meter persegi.",
      formula: [
        "1 hektare = 10.000 m²",
        "NJOP contoh = nilai tanah produktif + investasi tanaman + nilai areal lainnya + NJOP bangunan",
      ],
      scenario:
        "Kebun produktif 15 ha dengan nilai tanah Rp20.000/m², investasi tanaman Rp800 juta, areal pengaman Rp300 juta, dan bangunan Rp400 juta.",
      steps: [
        "15 ha = 150.000 m². Nilai tanah produktif Rp3 miliar.",
        "Tambahkan Rp800 juta + Rp300 juta + Rp400 juta.",
        "NJOP contoh = Rp4,5 miliar.",
      ],
      trap: "Jika NJOP areal produktif sudah mencakup tanaman, jangan menambahkannya sekali lagi.",
      source: [
        "Klasifikasi dan penetapan NJOP sektor perkebunan · DJP",
        "https://www.pajak.go.id/id/peraturan/klasifikasi-objek-pajak-dan-tata-cara-penetapan-nilai-jual-objek-pajak-pajak-bumi-dan",
      ],
    },
    {
      title: "Dari NJOP ke NJKP dan PBB",
      concept:
        "NJOP adalah nilai objek. NJKP adalah dasar pengenaan setelah NJOP dikurangi NJOPTKP yang berlaku lalu dikalikan persentase NJKP. Gunakan persentase yang sesuai dengan sektor dan kondisi soal.",
      formula: ["NJKP = (NJOP − NJOPTKP) × persentase NJKP", "PBB terutang = 0,5% × NJKP"],
      scenario: "NJOP perkebunan Rp5,012 miliar. NJOPTKP Rp12 juta dan persentase NJKP 40%.",
      steps: [
        "NJOP setelah NJOPTKP = Rp5 miliar.",
        "NJKP = Rp5 miliar × 40% = Rp2 miliar.",
        "PBB = Rp2 miliar × 0,5% = Rp10 juta.",
      ],
      trap: "Jangan langsung mengenakan 0,5% pada NJOP. Bila WP mempunyai beberapa objek, periksa aturan pemakaian NJOPTKP agar tidak dikurangkan berulang.",
      source: [
        "PP 25/2002, besarnya NJKP · DJP",
        "https://www.pajak.go.id/index.php/id/penetapan-besarnya-nilai-jual-kena-pajak-untuk-penghitungan-pajak-bumi-dan-bangunan-0",
      ],
    },
    {
      title: "Pembetulan atau permohonan pengurangan",
      concept:
        "Pisahkan kesalahan formal seperti salah hitung dari permohonan keringanan karena kondisi objek. Keberatan menjadi jalur tersendiri ketika substansi ketetapan diperselisihkan.",
      scenario:
        "SPPT kebun pertama memuat salah penjumlahan. Kebun lain terdampak bencana, dan pemilik meminta pengurangan PBB.",
      steps: [
        "Kesalahan penjumlahan mengarah ke pembetulan.",
        "Keringanan pokok akibat bencana mengarah ke permohonan pengurangan PBB dengan syarat tersendiri.",
        "Jika keputusan memberi pengurangan 30% dari pokok Rp15 juta, pokok tersisa Rp10,5 juta.",
      ],
      trap: "Persentase pengurangan pada contoh berasal dari keputusan. Kondisi bencana tidak otomatis menentukan persentase yang sama pada semua kasus.",
    },
  ],
  "akuntansi-perpajakan": [
    {
      title: "Beban dibayar di muka",
      concept:
        "Pembayaran yang memberi manfaat lebih dari satu periode dapat dicatat sebagai aset dibayar di muka dalam contoh pencatatan sederhana. Akui beban selama manfaatnya dikonsumsi. Pajak potong, jika ada, dianalisis terpisah dari alokasi manfaat.",
      formula: [
        "Beban periode = pembayaran di muka × (masa manfaat yang telah digunakan ÷ seluruh masa manfaat)",
        "Saldo aset = pembayaran di muka − beban yang telah diakui",
      ],
      scenario:
        "Perusahaan membayar premi asuransi 12 bulan Rp36 juta pada awal Oktober. Manfaatnya merata dan pajak lain diabaikan.",
      steps: [
        "Beban per bulan Rp36 juta ÷ 12 = Rp3 juta.",
        "Oktober sampai Desember memuat tiga bulan manfaat, sehingga beban tahun itu Rp9 juta.",
        "Saldo asuransi dibayar di muka pada akhir Desember Rp27 juta.",
      ],
      trap: "Kas keluar saat pembayaran, tetapi pengakuan beban mengikuti periode manfaat.",
    },
    {
      title: "Jurnal dari sisi pemotong dan penerima",
      concept:
        "Bagi pemotong, pajak yang ditahan dari lawan transaksi menjadi utang sampai disetor. Bagi penerima, potongan nonfinal yang dapat dikreditkan menjadi pajak dibayar di muka. Mulai jurnal dari nilai bruto transaksi.",
      formula: [
        "Kas yang dibayar atau diterima = nilai bruto sebelum PPN − PPh yang dipotong (untuk contoh yang mengabaikan PPN)",
      ],
      scenario:
        "Badan membayar jasa manajemen bruto Rp80 juta. PPh 23 sebesar 2% dipotong dan PPN diabaikan.",
      steps: [
        "PPh 23 = 2% × Rp80 juta = Rp1,6 juta. Kas yang berpindah Rp78,4 juta.",
        "Pemotong mencatat debit beban jasa Rp80 juta, kredit kas Rp78,4 juta, dan kredit utang PPh 23 Rp1,6 juta.",
        "Penerima mencatat debit kas Rp78,4 juta, debit pajak dibayar di muka Rp1,6 juta, dan kredit pendapatan Rp80 juta.",
      ],
      trap: "Pada penerima, jangan mengurangi pendapatan bruto dengan potongan nonfinal.",
    },
    {
      title: "Rekonsiliasi fiskal dan arah koreksi",
      concept:
        "Koreksi positif menambah laba fiskal, misalnya biaya komersial yang tidak dapat dikurangkan. Koreksi negatif menurunkannya, misalnya saat mengeluarkan penghasilan final yang sudah masuk laba komersial. Pisahkan kompensasi rugi sebagai langkah lanjutan.",
      formula: ["Laba fiskal = laba komersial sebelum pajak + koreksi positif − koreksi negatif"],
      scenario:
        "Laba komersial Rp950 juta mencakup pendapatan sewa final Rp120 juta. Beban terkait sewa Rp20 juta sudah mengurangi laba. Penyusutan fiskal Rp15 juta lebih besar daripada penyusutan komersial.",
      steps: [
        "Keluarkan pendapatan final Rp120 juta dengan koreksi negatif.",
        "Tambahkan kembali beban terkait penghasilan final Rp20 juta.",
        "Kurangi selisih penyusutan fiskal Rp15 juta. Laba fiskal = Rp950 juta − Rp120 juta + Rp20 juta − Rp15 juta = Rp835 juta.",
      ],
      trap: "Saat mengeluarkan pendapatan final dari tarif umum, cek pula beban yang terkait dengan pendapatan tersebut.",
    },
    {
      title: "Beda temporer dan pajak tangguhan",
      concept:
        "Beda temporer berpotensi berbalik pada periode lain. Untuk aset, bandingkan nilai tercatat dan dasar pajaknya. Pengakuan aset pajak tangguhan tunduk pada syarat keterpulihan, dan pajak tangguhan dihitung memakai tarif yang relevan saat pembalikan.",
      formula: [
        "Untuk aset dengan beda temporer kena pajak: liabilitas pajak tangguhan = (nilai tercatat − dasar pajak) × tarif saat pembalikan",
      ],
      scenario:
        "Nilai tercatat mesin Rp270 juta dan dasar pajak Rp220 juta. Tarif saat pembalikan 22%. Asumsikan tidak ada pengecualian pengakuan.",
      steps: [
        "Beda temporer kena pajak = Rp50 juta.",
        "Liabilitas pajak tangguhan = 22% × Rp50 juta = Rp11 juta.",
        "Jika kasus memberi dasar pajak yang lebih besar dari nilai tercatat, analisis kemungkinan aset pajak tangguhan dan syarat pengakuannya.",
      ],
      trap: "Beda tetap seperti sanksi pajak yang tidak dapat dikurangkan tidak berbalik dan tidak menimbulkan pajak tangguhan.",
      source: [
        "Daftar SAK Indonesia, PSAK 212 Pajak Penghasilan",
        "https://web.iaiglobal.or.id/SAK-IAI/PSAK%20Umum",
      ],
    },
  ],
  "pph-badan": [
    {
      title: "Gunakan rugi fiskal menurut tahun asalnya",
      concept:
        "Dalam skenario umum tanpa fasilitas perpanjangan, rugi fiskal dapat dibawa ke lima tahun berikutnya. Pisahkan tiap tahun asal dan sisa rugi. Rugi yang masa penggunaannya sudah berakhir tidak mengurangi PKP.",
      formula: ["PKP = laba fiskal tahun berjalan − sisa rugi fiskal yang masih dapat dipakai"],
      scenario:
        "Pada 2026, laba fiskal sebelum kompensasi Rp850 juta. Sisa rugi fiskal 2020 Rp100 juta dan sisa rugi 2023 Rp250 juta. Tidak ada fasilitas perpanjangan atau batasan lain.",
      steps: [
        "Lima tahun berikutnya untuk rugi 2020 adalah 2021–2025. Sisa Rp100 juta tidak dapat dipakai pada 2026.",
        "Rugi 2023 masih dalam rentang waktu. Gunakan Rp250 juta yang tersedia.",
        "PKP = Rp850 juta − Rp250 juta = Rp600 juta.",
      ],
      trap: "Jangan menjumlahkan semua rugi historis sebelum memeriksa apakah masing-masing masih berlaku.",
      source: [
        "Mekanisme PPh Badan · DJP",
        "https://pajak.go.id/id/mekanisme-penghitungan-pajak-penghasilan-badan",
      ],
    },
    {
      title: "Dari laba fiskal ke PPh Pasal 29",
      concept:
        "Hitung neto fiskal melalui koreksi, kurangi kompensasi rugi yang masih berlaku, lalu terapkan tarif. Setelah PPh terutang ditemukan, kurangi kredit yang memenuhi syarat untuk mendapatkan kurang atau lebih bayar.",
      formula: [
        "PKP = laba komersial + koreksi positif − koreksi negatif − kompensasi rugi yang dapat digunakan",
        "PPh Pasal 29 = PPh terutang − kredit pajak dan angsuran yang dapat diperhitungkan, jika selisih positif",
      ],
      scenario:
        "Laba komersial Rp2 miliar, koreksi positif Rp180 juta, koreksi negatif Rp80 juta, kompensasi rugi Rp100 juta, dan kredit Rp310 juta. Asumsikan tarif umum 22% tanpa fasilitas.",
      steps: [
        "Laba fiskal Rp2,1 miliar. Kurangi rugi Rp100 juta, sehingga PKP Rp2 miliar.",
        "PPh terutang = 22% × Rp2 miliar = Rp440 juta.",
        "Kurangi kredit Rp310 juta. PPh Pasal 29 = Rp130 juta.",
      ],
      trap: "Kredit pajak mengurangi PPh terutang setelah tarif diterapkan. Kredit bukan pengurang laba fiskal.",
      source: [
        "Mekanisme penghitungan PPh Badan · DJP",
        "https://pajak.go.id/id/mekanisme-penghitungan-pajak-penghasilan-badan",
      ],
    },
    {
      title: "Pisahkan PKP yang mendapat fasilitas Pasal 31E",
      concept:
        "Untuk badan dalam negeri yang memenuhi syarat dan omzetnya sampai Rp50 miliar, pengurangan tarif berlaku atas bagian PKP yang terkait dengan peredaran bruto sampai Rp4,8 miliar. Dalam contoh dengan tarif umum 22%, tarif fasilitasnya 11%.",
      formula: [
        "PKP fasilitas = PKP total × (bagian omzet sampai Rp4,8 miliar ÷ omzet total)",
        "PPh = (PKP fasilitas × 11%) + ((PKP total − PKP fasilitas) × 22%)",
      ],
      scenario: "Badan yang memenuhi syarat punya omzet Rp12 miliar dan PKP Rp1,5 miliar.",
      steps: [
        "Bagian omzet fasilitas = Rp4,8 miliar ÷ Rp12 miliar = 40%.",
        "PKP fasilitas = 40% × Rp1,5 miliar = Rp600 juta. PKP sisanya Rp900 juta.",
        "PPh = Rp66 juta + Rp198 juta = Rp264 juta sebelum kredit.",
      ],
      trap: "Rasio Rp4,8 miliar terhadap omzet digunakan untuk membagi PKP. Tarif pajak dikalikan dengan PKP, bukan omzet.",
      source: [
        "Mekanisme dan contoh Pasal 31E · DJP",
        "https://pajak.go.id/id/mekanisme-penghitungan-pajak-penghasilan-badan",
      ],
    },
    {
      title: "Penyusutan fiskal dan angsuran PPh 25",
      concept:
        "Untuk penyusutan, identifikasi kelompok, harga perolehan, metode, serta bulan mulai. Untuk angsuran PPh 25, gunakan PPh tahun sebelumnya atas penghasilan teratur setelah kredit yang diperhitungkan, sesuai kondisi soal.",
      formula: [
        "Garis lurus tahun pertama = harga perolehan × tarif setahun × (bulan yang disusutkan ÷ 12)",
        "PPh 25 bulanan dalam contoh tahun buku penuh = (PPh tahun lalu atas penghasilan teratur − kredit yang diperhitungkan) ÷ 12",
      ],
      scenario:
        "Mesin Rp240 juta mulai disusutkan pada September dengan tarif garis lurus 25%. Dalam contoh angsuran terpisah, PPh tahun lalu Rp252 juta dan kredit yang diperhitungkan Rp72 juta.",
      steps: [
        "Penyusutan setahun Rp60 juta. September sampai Desember adalah empat bulan.",
        "Penyusutan tahun pertama = Rp60 juta × 4/12 = Rp20 juta.",
        "Dasar angsuran = Rp252 juta − Rp72 juta = Rp180 juta. Angsuran per bulan Rp15 juta.",
      ],
      trap: "Pada metode saldo menurun, tarif diterapkan pada nilai buku fiskal yang relevan. Rumus harga perolehan di atas untuk garis lurus.",
      source: [
        "PMK 72/2023, penyusutan dan amortisasi",
        "https://jdih.kemenkeu.go.id/dok/pmk-72-tahun-2023/summary",
      ],
    },
  ],
};

export function getUkpStudy(level: UkpLevel, topic: UkpTopic) {
  return guides[topic].filter((guide) => !guide.level || guide.level === level);
}
