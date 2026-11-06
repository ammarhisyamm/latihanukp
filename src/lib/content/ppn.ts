import type { TopicContent } from "./types";

const AB = ["a", "b"] as const;
const B = ["b"] as const;

const content: TopicContent = {
  summary: [
    {
      id: "mekanisme",
      title: "Pengertian, karakteristik, dan mekanisme PPN",
      levels: AB,
      bookletItem: { a: "1", b: "1" },
      points: [
        "PPN adalah pajak tidak langsung atas konsumsi BKP/JKP di dalam daerah pabean; pemikul beban akhirnya konsumen, sedangkan yang memungut dan menyetor adalah PKP penjual.",
        "PPN bersifat objektif (terutang karena objeknya, bukan keadaan subjek), multi-tahap, dan nonkumulatif karena hanya nilai tambah yang dipajaki melalui mekanisme kredit.",
        "Mekanisme kredit: PPN terutang suatu masa = Pajak Keluaran − Pajak Masukan yang dapat dikreditkan; selisih positif kurang bayar, selisih negatif lebih bayar.",
        "Prinsip tempat tujuan: ekspor BKP/JKP dikenai tarif 0% dan impor BKP dikenai PPN, sehingga yang dipajaki konsumsi di dalam negeri.",
        "Total PPN yang diterima negara dari seluruh mata rantai sama dengan tarif efektif dikalikan harga jual kepada konsumen akhir.",
        "PPN atas impor (dokumen PIB) dan PPN atas pemanfaatan JKP/BKP tidak berwujud dari luar negeri (bukti setor) diperlakukan sebagai Pajak Masukan bagi PKP.",
      ],
      table: {
        head: ["Karakteristik", "Makna"],
        rows: [
          ["Pajak tidak langsung", "Beban dialihkan ke pembeli/konsumen"],
          ["Pajak objektif", "Timbul karena objek, tanpa melihat kondisi subjek"],
          ["Nonkumulatif", "Hanya nilai tambah; ada mekanisme kredit"],
          ["Destination principle", "Ekspor 0%, impor dikenai PPN"],
        ],
      },
      traps: [
        "Menjumlahkan PPN di setiap tahap sebagai beban konsumen: beban konsumen hanya PPN atas harga akhir.",
        "Menganggap ekspor bukan objek PPN: ekspor objek PPN dengan tarif 0%, sehingga Pajak Masukannya tetap dapat dikreditkan.",
      ],
      legal: "UU 8/1983 s.t.d.t.d. UU 6/2023 (UU PPN) Pasal 4, 7, 9; UU HPP.",
    },
    {
      id: "kewajiban-pkp",
      title: "Kewajiban PKP dan pengusaha kecil",
      levels: AB,
      bookletItem: { a: "2", b: "2" },
      points: [
        "Pengusaha yang menyerahkan BKP/JKP wajib dikukuhkan sebagai PKP, kecuali pengusaha kecil dengan peredaran bruto paling banyak Rp4,8 miliar setahun.",
        "Bila peredaran bruto melampaui Rp4,8 miliar, pengusaha wajib melaporkan usaha untuk dikukuhkan paling lambat akhir bulan berikutnya setelah bulan terlampauinya batas.",
        "Pengusaha kecil boleh memilih dikukuhkan sebagai PKP (Pasal 3A ayat (2)); setelah dikukuhkan, seluruh kewajiban PKP berlaku.",
        "Kewajiban PKP: memungut PPN/PPnBM, membuat Faktur Pajak, menyetor PPN kurang bayar, dan melaporkan SPT Masa PPN setiap masa melalui Coretax (PMK 81/2024).",
        "Pasal 9 ayat (9a): Pajak Masukan atas perolehan sebelum pengukuhan (mis. dikukuhkan secara jabatan) dapat dikreditkan dengan pedoman 80% dari Pajak Keluaran yang seharusnya dipungut.",
        "Pengusaha yang wajib PKP tetapi tidak melaporkan usaha tetap dapat dikukuhkan secara jabatan dan ditagih PPN yang seharusnya dipungut.",
      ],
      table: {
        head: ["Hal", "Ketentuan"],
        rows: [
          ["Batas pengusaha kecil", "Peredaran bruto ≤ Rp4,8 miliar setahun"],
          ["Lapor untuk dikukuhkan", "Akhir bulan berikutnya setelah batas terlampaui"],
          ["Kredit PM sebelum pengukuhan", "80% × Pajak Keluaran (Pasal 9 ayat (9a))"],
        ],
      },
      traps: [
        "Batas lapor dihitung dari bulan saat peredaran kumulatif melampaui Rp4,8 miliar, bukan dari akhir tahun buku.",
        "Pedoman 80% dikalikan Pajak Keluaran, bukan dikalikan Pajak Masukan riil.",
      ],
      legal: "Pasal 2 UU KUP; Pasal 3A dan 9 ayat (9a) UU PPN; PMK 164/2023; PMK 81/2024.",
    },
    {
      id: "objek",
      title: "Objek PPN, Pasal 4A, dan PMSE",
      levels: AB,
      bookletItem: { a: "3", b: "3" },
      points: [
        "Pasal 4 ayat (1): penyerahan BKP dan JKP di dalam daerah pabean oleh pengusaha, impor BKP, pemanfaatan BKP tidak berwujud dan JKP dari luar daerah pabean, serta ekspor BKP berwujud, BKP tidak berwujud, dan JKP oleh PKP.",
        "Penyerahan BKP terutang bila barangnya BKP, diserahkan di dalam daerah pabean, dan dilakukan dalam kegiatan usaha atau pekerjaan pengusaha.",
        "Pasal 4A setelah UU HPP hanya mengecualikan objek pajak daerah dan sejenisnya: makanan/minuman di hotel-restoran, jasa kesenian dan hiburan, perhotelan, parkir, boga/katering, uang dan emas batangan cadangan devisa, surat berharga, jasa keagamaan, dan jasa pemerintahan umum.",
        "Barang kebutuhan pokok, jasa kesehatan, pendidikan, angkutan umum, dan keuangan kini menjadi objek PPN dengan fasilitas (dibebaskan), bukan lagi dikecualikan.",
        "Pemanfaatan JKP dari luar negeri tanpa pemungut PMSE: PPN dipungut dan disetor sendiri oleh pemanfaat di Indonesia, lalu bukti setornya menjadi Pajak Masukan bila pemanfaat PKP.",
        "Pemanfaatan produk digital melalui PMSE dipungut oleh Pemungut PPN PMSE yang ditunjuk (kriteria antara lain nilai transaksi dengan pembeli Indonesia melebihi Rp600 juta setahun atau Rp50 juta sebulan).",
        "Pasal 1A ayat (2): tidak termasuk penyerahan antara lain penyerahan kepada makelar, untuk jaminan utang-piutang, pemusatan tempat terutang antarcabang, dan pengalihan dalam rangka penggabungan/peleburan/pemekaran usaha antar-PKP.",
      ],
      traps: [
        "Beras dan jasa pendidikan bukan lagi barang/jasa Pasal 4A; keduanya objek PPN yang dibebaskan.",
        "Penjualan barang pribadi oleh karyawan bukan penyerahan dalam kegiatan usaha, sehingga tidak terutang PPN.",
      ],
      legal: "Pasal 1A, 4, 4A UU PPN; PMK 81/2024 (PMSE dan pemanfaatan dari luar negeri).",
    },
    {
      id: "kms-aktiva",
      title: "Kegiatan membangun sendiri (16C) dan penyerahan aktiva (16D)",
      levels: AB,
      bookletItem: { a: "3", b: "3" },
      points: [
        "KMS terutang bila dilakukan tidak dalam kegiatan usaha oleh orang pribadi atau badan untuk dipakai sendiri atau pihak lain, dengan bangunan seluas minimal 200 m².",
        "Konstruksi utama bangunan KMS berupa kayu, beton, pasangan batu bata atau sejenisnya, dan/atau baja, dan diperuntukkan sebagai tempat tinggal atau tempat usaha.",
        "PPN KMS memakai besaran tertentu 20% × 11/12 × tarif 12% = 2,2% dari biaya membangun tiap masa, tidak termasuk harga perolehan tanah (PMK 11/2025, mengubah Pasal 324 PMK 81/2024).",
        "PPN KMS terutang dan disetor per masa sesuai pengeluaran pada masa tersebut, oleh pihak yang membangun.",
        "Pasal 16D: penyerahan aktiva yang semula tidak untuk diperjualbelikan terutang PPN sepanjang Pajak Masukan saat perolehannya dapat dikreditkan.",
        "Aktiva yang Pajak Masukannya dahulu tidak dapat dikreditkan (mis. sedan direksi) tidak terutang PPN saat dijual.",
      ],
      table: {
        head: ["Unsur KMS", "Ketentuan"],
        rows: [
          ["Luas bangunan", "Minimal 200 m²"],
          ["Dasar", "Biaya membangun tiap masa, tanpa tanah"],
          ["Besaran efektif", "20% × 11/12 × 12% = 2,2%"],
        ],
      },
      traps: [
        "Memakai 2,4% (20% × 12%): rencana awal itu tidak berlaku karena PMK 11/2025 mempertahankan faktor 11/12 sehingga besaran tetap 2,2%.",
        "Memasukkan biaya tanah ke dasar KMS.",
      ],
      legal: "Pasal 16C dan 16D UU PPN; PMK 81/2024 Pasal 324 s.t.d.d. PMK 11/2025 dan PMK 53/2025.",
    },
    {
      id: "dpp-tarif",
      title: "DPP, tarif PPN, dan PPnBM",
      levels: AB,
      bookletItem: { a: "4", b: "4" },
      points: [
        "Tarif PPN 12% sejak 1 Januari 2025; tarif dapat diubah dengan PP menjadi paling rendah 5% dan paling tinggi 15%; ekspor BKP/JKP bertarif 0%.",
        "PMK 131/2024: untuk barang mewah yang dikenai PPnBM, PPN = 12% × harga jual atau nilai impor penuh.",
        "Untuk BKP/JKP selain barang mewah, DPP memakai nilai lain 11/12 × harga jual/penggantian/nilai impor, sehingga beban efektif 11%.",
        "DPP impor adalah nilai impor: nilai pabean (CIF) ditambah bea masuk dan pungutan lain berdasarkan ketentuan kepabeanan dan cukai.",
        "Bila harga yang disepakati sudah termasuk PPN nonmewah, PPN = 11/111 × harga termasuk PPN.",
        "PPnBM bertarif paling rendah 10% dan paling tinggi 200%, dikenakan satu kali saat penyerahan oleh pengusaha yang menghasilkan atau saat impor, tidak dapat dikreditkan, dan ekspor BKP mewah dikenai PPnBM 0%.",
        "DPP PPN dan PPnBM atas satu penyerahan barang mewah sama-sama harga jual; PPnBM tidak ditambahkan ke DPP PPN.",
      ],
      table: {
        head: ["Jenis penyerahan", "DPP", "PPN efektif"],
        rows: [
          ["Barang mewah (kena PPnBM)", "Harga jual/nilai impor", "12%"],
          ["BKP/JKP nonmewah", "11/12 × harga jual/penggantian", "11%"],
          ["Ekspor", "Nilai ekspor", "0%"],
          ["KMS", "Biaya membangun selain tanah", "2,2%"],
        ],
      },
      traps: [
        "Menerapkan 11/12 pada barang mewah atau 12% penuh pada barang nonmewah.",
        "Mengalikan 12% pada harga yang sudah termasuk PPN.",
        "Mengecualikan bea masuk dari nilai impor.",
      ],
      legal: "Pasal 7, 8, 8A UU PPN; PMK 131/2024; PMK 11/2025 s.t.d.d. PMK 53/2025.",
    },
    {
      id: "faktur",
      title: "Faktur Pajak",
      levels: AB,
      bookletItem: { a: "5", b: "5" },
      points: [
        "Faktur dibuat saat penyerahan BKP/JKP, saat penerimaan pembayaran bila mendahului penyerahan, atau saat penerimaan pembayaran termin.",
        "Faktur gabungan memuat seluruh penyerahan kepada pembeli yang sama selama satu bulan kalender dan dibuat paling lambat akhir bulan penyerahan.",
        "Uang muka yang diterima sebelum bulan penyerahan difakturkan pada masa penerimaannya; faktur saat penyerahan hanya atas sisa harga.",
        "Keterangan wajib Pasal 13 ayat (5): identitas dan NPWP penjual, identitas pembeli (NPWP, atau NIK/nomor paspor bila tidak ber-NPWP), jenis barang/jasa, harga, PPN, PPnBM, kode dan nomor seri faktur, serta tanda tangan.",
        "Faktur dibuat elektronik di Coretax; kesalahan isi diperbaiki dengan faktur pengganti, transaksi yang batal ditangani dengan pembatalan faktur.",
        "Pasal 14 ayat (4) UU KUP: PKP yang tidak membuat faktur, membuat tidak tepat waktu, atau tidak mengisi lengkap dikenai denda 1% dari DPP (sebelum UU HPP 2%).",
      ],
      table: {
        head: ["Peristiwa", "Saat faktur"],
        rows: [
          ["Penyerahan BKP/JKP", "Saat penyerahan"],
          ["Uang muka sebelum penyerahan", "Saat pembayaran diterima"],
          ["Pembayaran termin", "Saat termin diterima"],
          ["Faktur gabungan", "Paling lambat akhir bulan penyerahan"],
        ],
      },
      traps: [
        "Batas faktur gabungan adalah akhir bulan penyerahan, bukan tanggal 15 bulan berikutnya.",
        "Denda faktur menurut UU HPP 1% DPP, bukan 2%.",
      ],
      legal: "Pasal 13 UU PPN; Pasal 14 ayat (4) UU KUP; PMK 81/2024.",
    },
    {
      id: "retur-pembatalan",
      title: "Nota retur dan nota pembatalan",
      levels: B,
      bookletItem: { b: "5" },
      points: [
        "Pengembalian BKP didokumentasikan dengan nota retur yang dibuat pembeli; pembatalan seluruh atau sebagian JKP didokumentasikan dengan nota pembatalan yang dibuat penerima JKP.",
        "PPN atas BKP yang dikembalikan mengurangi Pajak Keluaran penjual dan Pajak Masukan pembeli pada masa terjadinya retur (Pasal 5A), bukan dengan membetulkan masa penjualan.",
        "PPnBM atas barang mewah yang dikembalikan juga mengurangi PPnBM terutang penjual.",
        "Pengurangan PPN mengikuti dasar faktur asal: untuk barang nonmewah 11% dari nilai retur (12% × 11/12).",
        "Bila pembeli belum mengkreditkan atau sudah membebankan Pajak Masukannya, retur menyesuaikan biaya/harga perolehan, bukan Pajak Masukan.",
      ],
      traps: [
        "Penjual tidak membuat nota retur; penjual menerima nota retur dari pembeli.",
        "Retur barang dan pembatalan jasa memakai dokumen berbeda.",
      ],
      legal: "Pasal 5A dan 13 UU PPN; PMK 81/2024.",
    },
    {
      id: "pengkreditan",
      title: "Pengkreditan Pajak Masukan",
      levels: AB,
      bookletItem: { a: "6", b: "6" },
      points: [
        "Pajak Masukan dapat dikreditkan pada masa yang sama atau paling lama 3 masa setelah berakhirnya masa saat faktur dibuat, sepanjang belum dibebankan sebagai biaya atau ditambahkan ke harga perolehan.",
        "Jendela 3 masa boleh melintasi tahun takwim; faktur Masa November dapat dikreditkan paling lambat Masa Februari tahun berikutnya.",
        "Pasal 9 ayat (8) antara lain melarang kredit atas perolehan yang tidak berhubungan langsung dengan kegiatan usaha, serta sedan dan station wagon kecuali barang dagangan atau disewakan.",
        "Faktur yang tidak memenuhi keterangan Pasal 13 ayat (5) tidak dapat dikreditkan.",
        "Pajak Masukan khusus penyerahan dibebaskan tidak dapat dikreditkan; Pajak Masukan bersama dikreditkan sebanding penyerahan terutang terhadap total penyerahan.",
        "PIB untuk impor dan bukti setor PPN pemanfaatan jasa luar negeri adalah dokumen yang dipersamakan dengan Faktur Pajak.",
      ],
      table: {
        head: ["Jenis Pajak Masukan", "Perlakuan"],
        rows: [
          ["Khusus penyerahan terutang", "Dikreditkan penuh"],
          ["Khusus penyerahan dibebaskan", "Tidak dapat dikreditkan"],
          ["Bersama (terutang + dibebaskan)", "Proporsional penyerahan terutang"],
          ["Sudah dibebankan sebagai biaya", "Tidak dapat dikreditkan lagi"],
        ],
      },
      traps: [
        "Menghitung masa faktur sebagai masa pertama: tiga masa dihitung mulai masa sesudahnya.",
        "Menyamakan perlakuan penyerahan tidak dipungut dengan dibebaskan.",
      ],
      legal: "Pasal 9 ayat (2), (5), (6), (8), (9) UU PPN; PMK 81/2024.",
    },
    {
      id: "pemungut",
      title: "Pemungut PPN",
      levels: AB,
      bookletItem: { a: "7", b: "7" },
      points: [
        "Pemungut PPN meliputi instansi pemerintah, BUMN tertentu, KKKS, dan pihak lain yang ditunjuk seperti Pemungut PPN PMSE.",
        "Pada transaksi dengan pemungut, PPN dipungut dan disetor oleh pemungut, bukan oleh PKP rekanan.",
        "PKP rekanan tetap membuat Faktur Pajak (kode 02 untuk instansi pemerintah, 03 untuk pemungut lain) dan melaporkannya di SPT Masa PPN.",
        "Pajak Masukan rekanan tetap dikreditkan terhadap Pajak Keluaran yang dipungut sendiri, sehingga rekanan pemungut sering lebih bayar.",
        "PKP yang melakukan penyerahan kepada pemungut, ekspor, atau penyerahan tidak dipungut dapat meminta pengembalian kelebihan setiap masa (Pasal 9 ayat (4b)).",
      ],
      traps: [
        "Menambahkan PPN yang dipungut pemungut ke PPN yang harus disetor rekanan.",
        "Menganggap rekanan tidak perlu membuat faktur karena PPN sudah dipungut.",
      ],
      legal: "Pasal 9 ayat (4b) dan 16A UU PPN; PMK 81/2024.",
    },
    {
      id: "spt-masa",
      title: "SPT Masa PPN (termasuk PKP orang pribadi)",
      levels: AB,
      bookletItem: { a: "8", b: "8 dan 9" },
      points: [
        "Satu SPT Masa PPN untuk setiap masa, tetap wajib disampaikan walaupun nihil, berlaku sama untuk PKP orang pribadi dan badan.",
        "Batas setor dan lapor SPT Masa PPN: akhir bulan berikutnya setelah masa pajak berakhir, dengan kurang bayar disetor sebelum SPT disampaikan (PMK 81/2024).",
        "Bila batas waktu jatuh pada hari libur, termasuk Sabtu dan Minggu, batasnya bergeser ke hari kerja berikutnya.",
        "Lebih bayar dapat dikompensasikan ke masa berikutnya; kompensasi dipakai berantai sampai habis.",
        "Keterlambatan SPT Masa PPN dikenai denda Rp500.000 per SPT (Pasal 7 UU KUP).",
        "PPN kurang bayar = Pajak Keluaran − Pajak Masukan yang dapat dikreditkan − kompensasi dari masa sebelumnya.",
      ],
      table: {
        head: ["Kewajiban", "Batas"],
        rows: [
          ["Setor PPN kurang bayar", "Akhir bulan berikutnya, sebelum lapor"],
          ["Lapor SPT Masa PPN", "Akhir bulan berikutnya"],
          ["Denda telat lapor", "Rp500.000 per SPT"],
        ],
      },
      traps: [
        "Memakai tenggat tanggal 15/20 yang berlaku bagi PPh potong/pungut untuk SPT Masa PPN.",
        "Lupa membawa sisa lebih bayar yang belum habis ke masa berikutnya.",
      ],
      legal: "Pasal 3 dan 7 UU KUP; Pasal 9 UU PPN; PMK 81/2024.",
    },
    {
      id: "fasilitas",
      title: "Fasilitas PPN: tidak dipungut, dibebaskan, dan PPN final",
      levels: AB,
      bookletItem: { a: "9", b: "8 dan 9" },
      points: [
        "Pasal 16B memberi fasilitas PPN tidak dipungut atau dibebaskan untuk tujuan tertentu, misalnya kawasan tertentu dan barang/jasa strategis.",
        "PPN tidak dipungut: Pajak Masukan terkait tetap dapat dikreditkan; PPN dibebaskan: Pajak Masukan terkait tidak dapat dikreditkan.",
        "Kode faktur: 07 untuk PPN tidak dipungut/ditanggung pemerintah dan 08 untuk PPN dibebaskan; 04 untuk DPP nilai lain dan 05 untuk besaran tertentu.",
        "PP 49/2022 membebaskan antara lain barang kebutuhan pokok, air bersih, buku pelajaran umum dan kitab suci, rumah sederhana/rusun, serta listrik kecuali rumah tangga dengan daya di atas 6.600 VA.",
        "Pasal 9A UU HPP: PPN final dengan besaran tertentu untuk pengusaha/barang/jasa tertentu, dan Pajak Masukannya tidak dikreditkan.",
        "Eksportir yang lebih bayar karena Pajak Keluaran ekspor 0% dapat meminta restitusi setiap masa.",
      ],
      table: {
        head: ["Fasilitas", "Kode faktur", "Pajak Masukan"],
        rows: [
          ["Tidak dipungut / DTP", "07", "Dapat dikreditkan"],
          ["Dibebaskan", "08", "Tidak dapat dikreditkan"],
          ["Ekspor (tarif 0%)", "—", "Dapat dikreditkan"],
        ],
      },
      traps: [
        "Tertukar kode 07 dan 08.",
        "Listrik rumah tangga di atas 6.600 VA tidak dibebaskan.",
      ],
      legal: "Pasal 9A dan 16B UU PPN; PP 49/2022; PMK 81/2024.",
    },
  ],
  questions: [
    // mekanisme
    {
      id: "ppn-001",
      levels: AB,
      section: "mekanisme",
      kind: "konsep",
      prompt: "Manakah yang BUKAN karakteristik PPN?",
      options: [
        "Pajak tidak langsung yang bebannya dialihkan kepada pembeli",
        "Pajak objektif yang timbul karena adanya objek",
        "Pajak kumulatif yang dipungut tanpa mekanisme pengkreditan",
        "Pajak atas konsumsi di dalam daerah pabean",
      ],
      answer: 2,
      explanation:
        "PPN bersifat nonkumulatif: pengkreditan Pajak Masukan membuat hanya nilai tambah yang dipajaki. Tiga pilihan lain justru karakteristik PPN.",
      legal: "UU PPN Pasal 9",
    },
    {
      id: "ppn-002",
      levels: AB,
      section: "mekanisme",
      kind: "konsep",
      prompt: "Mengapa ekspor BKP dikenai tarif 0% sedangkan impor BKP dikenai PPN?",
      options: [
        "Karena PPN menganut prinsip tempat tujuan atau tempat konsumsi",
        "Karena PPN menganut prinsip tempat asal barang diproduksi",
        "Karena ekspor berada di luar lingkup UU PPN",
        "Karena impor dikenai PPN sebagai pengganti bea masuk",
      ],
      answer: 0,
      explanation:
        "Dengan prinsip tempat tujuan, konsumsi di Indonesia yang dipajaki. Ekspor tetap objek PPN (tarif 0%), bukan di luar lingkup UU PPN.",
      legal: "UU PPN Pasal 4 dan 7",
    },
    {
      id: "ppn-003",
      levels: AB,
      section: "mekanisme",
      kind: "hitung",
      prompt:
        "Produsen menjual BKP nonmewah kepada pedagang Rp100 juta, lalu pedagang menjual kepada konsumen akhir Rp150 juta (keduanya sebelum PPN, beban efektif 11%). Berapa total PPN yang diterima negara dari kedua tahap?",
      options: ["Rp27,5 juta", "Rp5,5 juta", "Rp18 juta", "Rp16,5 juta"],
      answer: 3,
      explanation:
        "Produsen menyetor 11% × Rp100 juta = Rp11 juta; pedagang menyetor Rp16,5 juta − Rp11 juta = Rp5,5 juta. Total Rp16,5 juta = 11% × harga akhir. Rp27,5 juta salah karena menjumlahkan Pajak Keluaran tanpa kredit.",
      legal: "UU PPN Pasal 9",
    },
    {
      id: "ppn-004",
      levels: AB,
      section: "mekanisme",
      kind: "kasus",
      prompt: "PKP manufaktur mengimpor bahan baku dan membayar PPN impor. Bagaimana perlakuan PPN tersebut?",
      options: [
        "Dikreditkan sebagai Pajak Masukan dengan PIB sebagai dokumen setara faktur",
        "Dibebankan sebagai biaya karena dipungut Bea Cukai, bukan PKP",
        "Dikreditkan hanya setelah barang jadi diekspor",
        "Dikompensasikan ke PPh Badan pada akhir tahun",
      ],
      answer: 0,
      explanation:
        "PPN impor yang dibayar PKP untuk kegiatan usaha adalah Pajak Masukan; PIB dipersamakan dengan Faktur Pajak. Siapa pemungutnya tidak menghilangkan hak kredit.",
      legal: "UU PPN Pasal 9 ayat (2) dan 13 ayat (6)",
    },
    // kewajiban PKP
    {
      id: "ppn-005",
      levels: AB,
      section: "kewajiban-pkp",
      kind: "kasus",
      prompt:
        "Peredaran bruto pengusaha Januari–Juni 2026 Rp4,5 miliar dan Juli 2026 Rp400 juta. Kapan paling lambat ia wajib melaporkan usaha untuk dikukuhkan sebagai PKP?",
      options: ["Akhir Juli 2026", "Akhir Agustus 2026", "Akhir Desember 2026", "Akhir April 2027"],
      answer: 1,
      explanation:
        "Kumulatif Rp4,9 miliar melampaui Rp4,8 miliar pada Juli, sehingga batas lapor akhir bulan berikutnya, yaitu akhir Agustus 2026. Akhir Desember salah karena batas tidak menunggu tahun buku berakhir.",
      legal: "Pasal 3A UU PPN; PMK 164/2023",
    },
    {
      id: "ppn-006",
      levels: AB,
      section: "kewajiban-pkp",
      kind: "konsep",
      prompt: "Pengusaha kecil (peredaran Rp2 miliar) memilih untuk dikukuhkan sebagai PKP. Apa akibatnya?",
      options: [
        "Ia hanya wajib membuat faktur bila pembelinya PKP",
        "Ia boleh berhenti sebagai PKP kapan saja tanpa pemeriksaan",
        "Ia wajib menjalankan seluruh kewajiban PKP",
        "Ia hanya wajib melapor SPT Masa PPN setahun sekali",
      ],
      answer: 2,
      explanation:
        "Pasal 3A ayat (2) membolehkan pengusaha kecil memilih menjadi PKP; setelah dikukuhkan seluruh ketentuan UU PPN berlaku baginya, termasuk faktur dan SPT Masa setiap masa.",
      legal: "Pasal 3A ayat (2) UU PPN",
    },
    {
      id: "ppn-007",
      levels: AB,
      section: "kewajiban-pkp",
      kind: "hitung",
      prompt:
        "Pengusaha seharusnya PKP sejak Maret tetapi baru dikukuhkan secara jabatan pada Juli. Pajak Keluaran yang seharusnya dipungut untuk Maret–Juni Rp50 juta. Dengan pedoman Pasal 9 ayat (9a), berapa pokok PPN kurang bayar?",
      options: ["Rp50 juta", "Rp40 juta", "Rp0", "Rp10 juta"],
      answer: 3,
      explanation:
        "Pajak Masukan dianggap 80% × Rp50 juta = Rp40 juta, sehingga kurang bayar Rp50 juta − Rp40 juta = Rp10 juta. Rp40 juta adalah besar Pajak Masukannya, bukan utang PPN.",
      legal: "Pasal 9 ayat (9a) UU PPN",
    },
    {
      id: "ppn-008",
      levels: AB,
      section: "kewajiban-pkp",
      kind: "konsep",
      prompt: "Manakah yang BUKAN kewajiban PKP menurut UU PPN?",
      options: [
        "Memungut PPN atas penyerahan BKP/JKP yang terutang",
        "Memotong PPh Pasal 23 atas setiap penjualan BKP",
        "Membuat Faktur Pajak atas setiap penyerahan terutang",
        "Melaporkan SPT Masa PPN setiap masa pajak",
      ],
      answer: 1,
      explanation:
        "PPh 23 dipotong pembeli atas jasa tertentu, bukan kewajiban PKP penjual BKP. Memungut, membuat faktur, menyetor, dan melapor adalah kewajiban PKP.",
      legal: "UU PPN Pasal 3A",
    },
    // objek
    {
      id: "ppn-009",
      levels: AB,
      section: "objek",
      kind: "konsep",
      prompt: "Manakah yang BUKAN objek PPN?",
      options: [
        "Impor mesin oleh perusahaan manufaktur",
        "Ekspor jasa desain oleh PKP",
        "Pemanfaatan lisensi perangkat lunak dari luar negeri",
        "Penyerahan jasa parkir oleh pengusaha parkir",
      ],
      answer: 3,
      explanation:
        "Jasa parkir termasuk jasa Pasal 4A yang tidak dikenai PPN karena menjadi objek pajak daerah. Impor, ekspor JKP, dan pemanfaatan BKP tidak berwujud dari luar negeri adalah objek Pasal 4 ayat (1).",
      legal: "UU PPN Pasal 4 ayat (1) dan 4A",
    },
    {
      id: "ppn-010",
      levels: AB,
      section: "objek",
      kind: "konsep",
      prompt: "Setelah UU HPP, mana yang masih termasuk barang yang tidak dikenai PPN berdasarkan Pasal 4A?",
      options: [
        "Makanan dan minuman yang disajikan di restoran",
        "Beras dan gabah",
        "Buku pelajaran umum",
        "Air bersih yang dialirkan melalui pipa",
      ],
      answer: 0,
      explanation:
        "Makanan/minuman di hotel dan restoran dikecualikan karena objek pajak daerah. Beras, buku pelajaran, dan air bersih kini objek PPN dengan fasilitas dibebaskan.",
      legal: "UU PPN Pasal 4A s.t.d.d. UU HPP; PP 49/2022",
    },
    {
      id: "ppn-011",
      levels: AB,
      section: "objek",
      kind: "kasus",
      prompt:
        "PKP memanfaatkan jasa konsultasi dari perusahaan Singapura senilai Rp240 juta. Penyedia bukan Pemungut PPN PMSE. Berapa PPN yang disetor dan bagaimana perlakuannya?",
      options: [
        "Rp28,8 juta, dibebankan sebagai biaya",
        "Rp26,4 juta, disetor sendiri lalu dapat dikreditkan",
        "Rp26,4 juta, dipungut penyedia asing",
        "Tidak ada PPN karena jasa berasal dari luar negeri",
      ],
      answer: 1,
      explanation:
        "PPN = 12% × 11/12 × Rp240 juta = Rp26,4 juta, disetor sendiri oleh pemanfaat; bukti setor menjadi Pajak Masukan. Rp28,8 juta salah karena jasa nonmewah memakai DPP 11/12.",
      legal: "UU PPN Pasal 4 ayat (1) huruf e; PMK 131/2024; PMK 81/2024",
    },
    {
      id: "ppn-012",
      levels: AB,
      section: "objek",
      kind: "kasus",
      prompt:
        "Konsumen orang pribadi di Indonesia berlangganan layanan streaming Rp200.000 dari penyedia luar negeri yang telah ditunjuk sebagai Pemungut PPN PMSE. Siapa memungut PPN dan berapa?",
      options: [
        "Konsumen menyetor sendiri Rp24.000",
        "Bank penerbit kartu memotong Rp22.000",
        "Penyedia memungut Rp22.000",
        "Tidak ada PPN karena konsumen bukan PKP",
      ],
      answer: 2,
      explanation:
        "Pemungut PPN PMSE memungut PPN atas pemanfaatan produk digital: 12% × 11/12 × Rp200.000 = Rp22.000. Rp24.000 salah karena layanan nonmewah memakai DPP 11/12.",
      legal: "UU PPN Pasal 4 ayat (1) huruf e; PMK 81/2024; PMK 131/2024",
    },
    {
      id: "ppn-013",
      levels: AB,
      section: "objek",
      kind: "kasus",
      prompt: "Manakah peristiwa yang termasuk penyerahan BKP terutang PPN?",
      options: [
        "Karyawan menjual laptop pribadinya kepada rekan kerja",
        "PKP menyerahkan barang kepada makelar untuk dijualkan",
        "PKP menjaminkan persediaan kepada bank sebagai agunan",
        "Dealer PKP menjual mobil bekas dagangan kepada konsumen",
      ],
      answer: 3,
      explanation:
        "Dealer menyerahkan BKP di dalam daerah pabean dalam kegiatan usahanya. Penyerahan kepada makelar dan untuk jaminan utang dikecualikan Pasal 1A ayat (2), sedangkan karyawan tidak bertindak sebagai pengusaha.",
      legal: "UU PPN Pasal 1A dan 4 ayat (1)",
    },
    {
      id: "ppn-014",
      levels: AB,
      section: "objek",
      kind: "konsep",
      prompt: "Kriteria apa yang dipakai menunjuk pelaku usaha luar negeri sebagai Pemungut PPN PMSE?",
      options: [
        "Memiliki BUT dan NPWP di Indonesia minimal tiga tahun",
        "Nilai transaksi dengan pembeli Indonesia melebihi Rp600 juta setahun atau Rp50 juta sebulan",
        "Peredaran bruto global melebihi Rp4,8 miliar setahun",
        "Menjual barang fisik yang diimpor melalui kantor pos",
      ],
      answer: 1,
      explanation:
        "Kriteria penunjukan antara lain nilai transaksi melebihi Rp600 juta setahun atau Rp50 juta sebulan (atau jumlah traffic tertentu). Rp4,8 miliar adalah batas pengusaha kecil domestik.",
      legal: "PMK 81/2024 (pemungutan PPN PMSE)",
    },
    // kms dan 16D
    {
      id: "ppn-015",
      levels: AB,
      section: "kms-aktiva",
      kind: "konsep",
      prompt: "Manakah yang memenuhi syarat objek PPN kegiatan membangun sendiri?",
      options: [
        "Orang pribadi membangun rumah tinggal beton 250 m² tanpa kontraktor",
        "Orang pribadi membangun rumah beton 180 m² tanpa kontraktor",
        "Pengembang membangun ruko 300 m² untuk dijual",
        "Badan memakai kontraktor PKP untuk membangun gudang 400 m²",
      ],
      answer: 0,
      explanation:
        "KMS mensyaratkan pembangunan di luar kegiatan usaha dengan luas minimal 200 m². Pengembang menyerahkan dalam kegiatan usaha, dan bila memakai kontraktor PPN dipungut kontraktor.",
      legal: "UU PPN Pasal 16C; PMK 81/2024",
    },
    {
      id: "ppn-016",
      levels: AB,
      section: "kms-aktiva",
      kind: "konsep",
      prompt: "Mengapa besaran PPN kegiatan membangun sendiri pada 2026 adalah 2,2% walaupun tarif PPN 12%?",
      options: [
        "Karena tarif KMS diatur tersendiri sebesar 2,2% dalam UU PPN",
        "Karena tarif yang dipakai masih 11% sesuai ketentuan lama",
        "Karena 20% × 12% = 2,4% lalu dikurangi insentif 0,2%",
        "Karena PMK 11/2025 menetapkan 20% × 11/12 × 12%",
      ],
      answer: 3,
      explanation:
        "PMK 11/2025 mengubah Pasal 324 PMK 81/2024 sehingga besaran tertentu = 20% × 11/12 × tarif 12% = 2,2%. Angka 2,4% (20% × 12%) hanyalah rencana sebelum PMK 11/2025 terbit.",
      legal: "PMK 81/2024 Pasal 324 s.t.d.d. PMK 11/2025",
    },
    {
      id: "ppn-017",
      levels: B,
      section: "kms-aktiva",
      kind: "hitung",
      prompt:
        "Sebuah badan membangun sendiri gudang yang memenuhi syarat KMS. Pengeluaran masa ini Rp880 juta, termasuk Rp280 juta untuk tanah. Dengan besaran 2,2%, berapa PPN KMS masa ini?",
      options: ["Rp19,36 juta", "Rp13,2 juta", "Rp14,4 juta", "Rp72 juta"],
      answer: 1,
      explanation:
        "Dasar = Rp880 juta − Rp280 juta = Rp600 juta; PPN = 2,2% × Rp600 juta = Rp13,2 juta. Rp19,36 juta memasukkan tanah, Rp14,4 juta memakai 2,4%.",
      legal: "UU PPN Pasal 16C; PMK 11/2025",
      source: "Latihan Soal UKP Tingkat B (v1)",
    },
    {
      id: "ppn-018",
      levels: AB,
      section: "kms-aktiva",
      kind: "kasus",
      prompt:
        "Orang pribadi membangun rumah 300 m² tanpa kontraktor. Pengeluaran Januari Rp400 juta (termasuk tanah Rp150 juta) dan Februari Rp300 juta. Berapa PPN KMS tiap masa?",
      options: [
        "Januari Rp8,8 juta; Februari Rp6,6 juta",
        "Januari Rp6 juta; Februari Rp7,2 juta",
        "Januari Rp5,5 juta; Februari Rp6,6 juta",
        "Januari nihil; Februari Rp12,1 juta",
      ],
      answer: 2,
      explanation:
        "KMS terutang per masa atas biaya selain tanah: Januari 2,2% × Rp250 juta = Rp5,5 juta; Februari 2,2% × Rp300 juta = Rp6,6 juta. PPN tidak ditunda sampai bangunan selesai.",
      legal: "UU PPN Pasal 16C; PMK 11/2025",
    },
    {
      id: "ppn-019",
      levels: AB,
      section: "kms-aktiva",
      kind: "kasus",
      prompt:
        "PKP pabrik menjual sedan bekas kendaraan direksi. Saat dibeli, Pajak Masukannya tidak dapat dikreditkan. Bagaimana PPN atas penjualan sedan itu?",
      options: [
        "Terutang 12% × harga jual karena sedan barang mewah",
        "Tidak terutang karena Pajak Masukan perolehannya tidak dapat dikreditkan",
        "Terutang 2,2% sebagai penyerahan aktiva",
        "Terutang dan Pajak Masukan perolehan dapat dikreditkan ulang",
      ],
      answer: 1,
      explanation:
        "Pasal 16D hanya mengenakan PPN atas aktiva yang Pajak Masukan perolehannya dapat dikreditkan. Sedan direksi termasuk Pasal 9 ayat (8), sehingga penjualannya tidak terutang.",
      legal: "UU PPN Pasal 9 ayat (8) dan 16D",
    },
    // dpp-tarif
    {
      id: "ppn-020",
      levels: AB,
      section: "dpp-tarif",
      kind: "konsep",
      prompt: "Menurut Pasal 7 UU PPN setelah UU HPP, tarif PPN dapat diubah dalam rentang berapa?",
      options: [
        "Paling rendah 5% dan paling tinggi 15%, dengan PP",
        "Paling rendah 10% dan paling tinggi 200%, dengan PMK",
        "Paling rendah 0% dan paling tinggi 12%, dengan UU",
        "Paling rendah 5% dan paling tinggi 10%, dengan Perpres",
      ],
      answer: 0,
      explanation:
        "Pasal 7 ayat (3) mengatur perubahan tarif 5%–15% melalui PP. Rentang 10%–200% adalah tarif PPnBM.",
      legal: "UU PPN Pasal 7 dan 8",
    },
    {
      id: "ppn-021",
      levels: AB,
      section: "dpp-tarif",
      kind: "konsep",
      prompt: "Menurut PMK 131/2024, penyerahan mana yang PPN-nya dihitung 12% × harga jual penuh?",
      options: [
        "Jasa konsultansi pajak",
        "Langganan streaming melalui PMSE",
        "Televisi biasa yang tidak dikenai PPnBM",
        "Mobil penumpang yang dikenai PPnBM",
      ],
      answer: 3,
      explanation:
        "Hanya barang mewah yang dikenai PPnBM memakai DPP harga jual penuh. Penyerahan lain memakai DPP nilai lain 11/12.",
      legal: "PMK 131/2024",
    },
    {
      id: "ppn-022",
      levels: AB,
      section: "dpp-tarif",
      kind: "hitung",
      prompt:
        "Pabrikan menjual mobil yang dikenai PPnBM 20% seharga Rp500 juta sebelum pajak. Berapa total PPN dan PPnBM yang dipungut?",
      options: ["Rp155 juta", "Rp172 juta", "Rp160 juta", "Rp100 juta"],
      answer: 2,
      explanation:
        "PPN = 12% × Rp500 juta = Rp60 juta (barang mewah, harga penuh); PPnBM = 20% × Rp500 juta = Rp100 juta; total Rp160 juta. Rp155 juta salah memakai 11/12, Rp172 juta salah menambahkan PPnBM ke DPP PPN.",
      legal: "UU PPN Pasal 5 dan 8; PMK 131/2024",
    },
    {
      id: "ppn-023",
      levels: AB,
      section: "dpp-tarif",
      kind: "konsep",
      prompt: "Manakah pernyataan yang BENAR tentang PPnBM?",
      options: [
        "PPnBM dikenakan di setiap tingkat distribusi barang mewah",
        "PPnBM yang dibayar saat perolehan tidak dapat dikreditkan",
        "Ekspor barang mewah dikenai PPnBM sesuai tarif dalam negeri",
        "PPnBM dapat dikreditkan seperti Pajak Masukan PPN",
      ],
      answer: 1,
      explanation:
        "PPnBM dikenakan satu kali (pabrikan atau impor) dan tidak dapat dikreditkan; ekspor barang mewah dikenai PPnBM 0%.",
      legal: "UU PPN Pasal 5 dan 10",
    },
    {
      id: "ppn-024",
      levels: AB,
      section: "dpp-tarif",
      kind: "hitung",
      prompt:
        "Kuitansi penjualan BKP nonmewah mencantumkan Rp111 juta dan disepakati sudah termasuk PPN. Berapa PPN-nya?",
      options: ["Rp13,32 juta", "Rp12,21 juta", "Rp11,89 juta", "Rp11 juta"],
      answer: 3,
      explanation:
        "Beban efektif 11%, sehingga harga jual = Rp111 juta ÷ 1,11 = Rp100 juta dan PPN = Rp11 juta (11/111 × Rp111 juta). Pilihan lain mengalikan tarif pada harga termasuk PPN atau membagi dengan 1,12.",
      legal: "PMK 131/2024",
    },
    {
      id: "ppn-025",
      levels: AB,
      section: "dpp-tarif",
      kind: "hitung",
      prompt:
        "PKP mengimpor bahan baku nonmewah dengan nilai pabean (CIF) Rp200 juta dan bea masuk Rp20 juta. Berapa PPN impornya?",
      options: ["Rp24,2 juta", "Rp22 juta", "Rp26,4 juta", "Rp24 juta"],
      answer: 0,
      explanation:
        "Nilai impor = CIF + bea masuk = Rp220 juta; PPN = 12% × 11/12 × Rp220 juta = Rp24,2 juta. Rp22 juta lupa bea masuk, Rp26,4 juta memakai 12% penuh.",
      legal: "UU PPN Pasal 1 angka 19; PMK 131/2024",
    },
    {
      id: "ppn-026",
      levels: AB,
      section: "dpp-tarif",
      kind: "konsep",
      prompt: "PKP mengekspor BKP berwujud yang memenuhi syarat. Bagaimana perlakuan PPN-nya?",
      options: [
        "Dibebaskan sehingga Pajak Masukan terkait menjadi biaya",
        "Dikenai 12% karena dokumen ekspor diterbitkan di Indonesia",
        "Bertarif 0% dan Pajak Masukan terkait dapat dikreditkan",
        "Di luar lingkup PPN sehingga tidak dilaporkan di SPT Masa",
      ],
      answer: 2,
      explanation:
        "Ekspor objek PPN bertarif 0%; karena tetap dalam mekanisme PPN, Pajak Masukan terkait dapat dikreditkan dan ekspor dilaporkan di SPT Masa.",
      legal: "UU PPN Pasal 4 ayat (1) huruf f dan 7 ayat (2)",
    },
    // faktur
    {
      id: "ppn-027",
      levels: AB,
      section: "faktur",
      kind: "konsep",
      prompt: "Manakah saat pembuatan Faktur Pajak yang TIDAK tepat?",
      options: [
        "Saat penyerahan BKP",
        "Saat uang muka diterima sebelum penyerahan",
        "Saat pembayaran termin diterima",
        "Saat SPT Masa PPN dilaporkan",
      ],
      answer: 3,
      explanation:
        "Faktur dibuat saat penyerahan, saat pembayaran diterima bila mendahului penyerahan, atau saat termin. Pelaporan SPT bukan saat pembuatan faktur.",
      legal: "UU PPN Pasal 13 ayat (1a)",
    },
    {
      id: "ppn-028",
      levels: AB,
      section: "faktur",
      kind: "kasus",
      prompt:
        "PKP menerima uang muka dari pembeli tetap pada 25 Maret untuk penyerahan 3 April, lalu melakukan penyerahan lain kepada pembeli yang sama pada 15 dan 28 April. PKP memakai faktur gabungan. Mana yang benar?",
      options: [
        "Uang muka difakturkan di Masa Maret; faktur gabungan April memuat sisa harga dan penyerahan April, paling lambat 30 April",
        "Seluruh transaksi digabung dalam satu faktur paling lambat 30 April",
        "Uang muka difakturkan saat penyerahan 3 April; faktur gabungan dibuat paling lambat 15 Mei",
        "Faktur gabungan April dibuat paling lambat 31 Mei bersama pelaporan SPT",
      ],
      answer: 0,
      explanation:
        "Uang muka diterima pada Maret sehingga difakturkan pada Masa Maret. Faktur gabungan hanya mencakup satu bulan kalender dan dibuat paling lambat akhir bulan penyerahan (30 April).",
      legal: "UU PPN Pasal 13 ayat (1a) dan (2)",
    },
    {
      id: "ppn-029",
      levels: AB,
      section: "faktur",
      kind: "hitung",
      prompt:
        "PKP terlambat membuat Faktur Pajak atas penyerahan dengan DPP Rp120 juta. Berapa denda Pasal 14 ayat (4) UU KUP?",
      options: ["Rp120 ribu", "Rp2,4 juta", "Rp1,2 juta", "Rp12 juta"],
      answer: 2,
      explanation:
        "Denda = 1% × Rp120 juta = Rp1,2 juta. Rp2,4 juta memakai tarif 2% sebelum UU HPP.",
      legal: "UU KUP Pasal 14 ayat (4)",
    },
    {
      id: "ppn-030",
      levels: AB,
      section: "faktur",
      kind: "konsep",
      prompt: "Manakah keterangan yang TIDAK wajib dicantumkan dalam Faktur Pajak?",
      options: [
        "Nomor rekening bank penjual",
        "Nama, alamat, dan NPWP penjual",
        "Jenis barang/jasa, jumlah harga, dan potongan harga",
        "PPN dan PPnBM yang dipungut",
      ],
      answer: 0,
      explanation:
        "Pasal 13 ayat (5) tidak mensyaratkan rekening bank. Identitas penjual, rincian barang/jasa, serta PPN/PPnBM adalah keterangan wajib.",
      legal: "UU PPN Pasal 13 ayat (5)",
    },
    {
      id: "ppn-031",
      levels: AB,
      section: "faktur",
      kind: "kasus",
      prompt:
        "PKP menjual BKP kepada orang pribadi WNI yang tidak memiliki NPWP. Identitas pembeli apa yang dicantumkan di Faktur Pajak?",
      options: [
        "NPWP penjual dicantumkan di kolom pembeli",
        "Faktur tidak boleh dibuat sampai pembeli ber-NPWP",
        "NIK pembeli",
        "Cukup nama tanpa identitas apa pun",
      ],
      answer: 2,
      explanation:
        "Setelah UU HPP, faktur memuat NPWP atau NIK/nomor paspor pembeli. Faktur tetap wajib dibuat walaupun pembeli tidak ber-NPWP.",
      legal: "UU PPN Pasal 13 ayat (5) s.t.d.d. UU HPP",
    },
    {
      id: "ppn-032",
      levels: AB,
      section: "faktur",
      kind: "konsep",
      prompt:
        "PKP salah mengisi harga pada faktur yang sudah disetujui sistem, padahal transaksinya tetap terjadi. Dokumen apa yang dibuat?",
      options: [
        "Nota retur oleh pembeli",
        "Faktur Pajak pengganti",
        "Pembatalan faktur tanpa faktur baru",
        "Nota pembatalan oleh penerima jasa",
      ],
      answer: 1,
      explanation:
        "Kesalahan isi atas transaksi yang tetap terjadi diperbaiki dengan faktur pengganti. Pembatalan faktur dipakai bila transaksinya batal; nota retur/pembatalan untuk pengembalian barang atau pembatalan jasa.",
      legal: "UU PPN Pasal 13; PMK 81/2024",
    },
    // retur (B)
    {
      id: "ppn-033",
      levels: B,
      section: "retur-pembatalan",
      kind: "konsep",
      prompt: "Pasangan dokumen dan pembuatnya manakah yang benar?",
      options: [
        "Nota retur dibuat penjual; nota pembatalan dibuat pemberi jasa",
        "Nota retur dibuat pembeli BKP; nota pembatalan dibuat penerima JKP",
        "Nota retur dan nota pembatalan dibuat DJP melalui Coretax",
        "Nota retur dibuat pembeli; pembatalan jasa cukup faktur pengganti",
      ],
      answer: 1,
      explanation:
        "Pengembalian BKP memakai nota retur buatan pembeli; pembatalan sebagian/seluruh JKP memakai nota pembatalan buatan penerima jasa.",
      legal: "UU PPN Pasal 5A; PMK 81/2024",
    },
    {
      id: "ppn-034",
      levels: B,
      section: "retur-pembatalan",
      kind: "hitung",
      prompt:
        "Pembeli PKP pada satu masa memiliki Pajak Keluaran Rp40 juta dan Pajak Masukan Rp35 juta. Pada masa yang sama ia mengembalikan barang nonmewah Rp20 juta (sebelum pajak) yang PPN-nya termasuk dalam Pajak Masukan tersebut. Berapa PPN kurang bayar pembeli?",
      options: ["Rp5 juta", "Rp2,8 juta", "Rp9,4 juta", "Rp7,2 juta"],
      answer: 3,
      explanation:
        "Retur mengurangi Pajak Masukan pembeli sebesar 11% × Rp20 juta = Rp2,2 juta, menjadi Rp32,8 juta; kurang bayar Rp40 juta − Rp32,8 juta = Rp7,2 juta. Rp2,8 juta salah karena mengurangkan retur dari Pajak Keluaran.",
      legal: "UU PPN Pasal 5A",
    },
    {
      id: "ppn-035",
      levels: B,
      section: "retur-pembatalan",
      kind: "kasus",
      prompt:
        "Penjualan BKP terjadi pada Masa Maret dan pembeli mengembalikan sebagian barang dengan nota retur pada Masa Mei. Kapan Pajak Keluaran penjual dikurangi?",
      options: [
        "Masa Mei, saat terjadinya retur",
        "Masa Maret, melalui pembetulan SPT",
        "Masa Juni, satu masa setelah nota diterima",
        "Akhir tahun, saat menyusun SPT Tahunan",
      ],
      answer: 0,
      explanation:
        "Pasal 5A: PPN atas BKP yang dikembalikan mengurangi Pajak Keluaran penjual dan Pajak Masukan pembeli pada masa pengembalian, sehingga SPT Maret tidak dibetulkan.",
      legal: "UU PPN Pasal 5A",
    },
    // pengkreditan
    {
      id: "ppn-036",
      levels: AB,
      section: "pengkreditan",
      kind: "hitung",
      prompt:
        "Faktur Pajak masukan dibuat pada Masa November 2026 dan belum dikreditkan. Masa paling akhir pengkreditannya adalah?",
      options: ["Desember 2026", "Januari 2027", "Februari 2027", "Maret 2027"],
      answer: 2,
      explanation:
        "Tiga masa setelah November: Desember, Januari, Februari. Jendela boleh melintasi tahun; Desember 2026 salah karena menganggap kredit harus selesai dalam tahun yang sama.",
      legal: "UU PPN Pasal 9 ayat (9)",
    },
    {
      id: "ppn-037",
      levels: AB,
      section: "pengkreditan",
      kind: "konsep",
      prompt: "Perusahaan manufaktur PKP memperoleh barang/jasa berikut. Pajak Masukan mana yang TIDAK dapat dikreditkan?",
      options: [
        "Bahan baku produksi",
        "Mesin produksi",
        "Jasa iklan produk",
        "Sedan untuk kendaraan direksi",
      ],
      answer: 3,
      explanation:
        "Pasal 9 ayat (8) melarang kredit atas sedan dan station wagon kecuali barang dagangan atau disewakan. Tiga perolehan lain berhubungan langsung dengan kegiatan usaha.",
      legal: "UU PPN Pasal 9 ayat (8)",
    },
    {
      id: "ppn-038",
      levels: AB,
      section: "pengkreditan",
      kind: "hitung",
      prompt:
        "SPT Masa April: Pajak Keluaran Rp30 juta, Pajak Masukan dari faktur April Rp18 juta. Ada faktur Januari Rp4 juta dan faktur Desember tahun lalu Rp3 juta yang belum dikreditkan dan belum dibebankan. Berapa PPN kurang bayar April?",
      options: ["Rp8 juta", "Rp5 juta", "Rp12 juta", "Rp9 juta"],
      answer: 0,
      explanation:
        "Faktur Januari masih dalam jendela (Februari, Maret, April) sehingga ikut; faktur Desember hanya sampai Maret. Rp30 juta − Rp18 juta − Rp4 juta = Rp8 juta. Rp5 juta salah karena memasukkan faktur Desember.",
      legal: "UU PPN Pasal 9 ayat (9)",
    },
    {
      id: "ppn-039",
      levels: B,
      section: "pengkreditan",
      kind: "kasus",
      prompt:
        "PKP memiliki Pajak Masukan khusus penyerahan terutang Rp16 juta, khusus penyerahan dibebaskan Rp8 juta, dan bersama Rp40 juta. Penyerahan terutang Rp1,2 miliar dan dibebaskan Rp400 juta. Berapa Pajak Masukan yang dapat dikreditkan?",
      options: ["Rp64 juta", "Rp56 juta", "Rp46 juta", "Rp54 juta"],
      answer: 2,
      explanation:
        "Proporsi terutang = 1,2 ÷ 1,6 = 75%; bagian bersama 75% × Rp40 juta = Rp30 juta; ditambah Rp16 juta = Rp46 juta. Rp8 juta khusus penyerahan dibebaskan tidak dapat dikreditkan.",
      legal: "UU PPN Pasal 9 ayat (5) dan (6)",
    },
    {
      id: "ppn-040",
      levels: AB,
      section: "pengkreditan",
      kind: "kasus",
      prompt:
        "Pajak Masukan atas faktur Februari belum dikreditkan, tetapi bagian akuntansi sudah membebankannya sebagai biaya pada Februari. Pada Masa April PKP ingin mengkreditkannya. Bagaimana?",
      options: [
        "Boleh karena masih dalam tiga masa",
        "Boleh asal beban dikoreksi fiskal positif di SPT Tahunan",
        "Boleh setengahnya karena sudah sebagian menjadi biaya",
        "Tidak boleh karena sudah dibebankan sebagai biaya",
      ],
      answer: 3,
      explanation:
        "Pengkreditan di masa lain dalam tiga masa hanya boleh sepanjang Pajak Masukan belum dibebankan sebagai biaya atau ditambahkan ke harga perolehan.",
      legal: "UU PPN Pasal 9 ayat (9)",
    },
    // pemungut
    {
      id: "ppn-041",
      levels: AB,
      section: "pemungut",
      kind: "konsep",
      prompt: "PKP menjual barang kepada pemungut PPN dan transaksi memenuhi syarat pemungutan. Apa yang masih dilakukan PKP rekanan?",
      options: [
        "Menerbitkan faktur dan melaporkan transaksi",
        "Menyetor PPN yang sama sekali lagi",
        "Menghapus transaksi dari SPT Masa",
        "Mengganti faktur dengan kuitansi biasa",
      ],
      answer: 0,
      explanation:
        "Pemungut menyetor PPN, tetapi rekanan tetap membuat Faktur Pajak (kode 02/03) dan melaporkannya di SPT Masa PPN.",
      legal: "UU PPN Pasal 16A; PMK 81/2024",
    },
    {
      id: "ppn-042",
      levels: AB,
      section: "pemungut",
      kind: "hitung",
      prompt:
        "Dalam satu masa, PKP menjual kepada instansi pemerintah dengan PPN Rp11 juta (dipungut instansi) dan kepada pembeli biasa dengan PPN Rp9 juta. Pajak Masukan yang dapat dikreditkan Rp6 juta. Berapa yang disetor PKP?",
      options: ["Rp14 juta", "Rp3 juta", "Rp20 juta", "Nihil"],
      answer: 1,
      explanation:
        "PPN Rp11 juta disetor instansi pemerintah. PKP menyetor Pajak Keluaran yang dipungut sendiri dikurangi Pajak Masukan: Rp9 juta − Rp6 juta = Rp3 juta. Rp14 juta salah karena ikut menghitung PPN yang dipungut pemungut.",
      legal: "UU PPN Pasal 16A",
    },
    {
      id: "ppn-043",
      levels: AB,
      section: "pemungut",
      kind: "konsep",
      prompt:
        "Sebagian besar penjualan PKP ditujukan kepada pemungut PPN sehingga SPT-nya lebih bayar hampir setiap masa. Apa hak PKP?",
      options: [
        "Menunggu restitusi sampai akhir tahun buku",
        "Mengkompensasikan lebih bayar ke PPh Pasal 25",
        "Meminta pengembalian kelebihan pada setiap masa pajak",
        "Meminta pemungut mengembalikan PPN yang sudah dipungut",
      ],
      answer: 2,
      explanation:
        "Pasal 9 ayat (4b) memberi hak restitusi setiap masa bagi PKP yang menyerahkan kepada pemungut, mengekspor, atau melakukan penyerahan tidak dipungut.",
      legal: "UU PPN Pasal 9 ayat (4b)",
    },
    {
      id: "ppn-044",
      levels: AB,
      section: "pemungut",
      kind: "konsep",
      prompt: "Manakah yang BUKAN pemungut PPN?",
      options: [
        "Instansi pemerintah melalui bendahara",
        "Kontraktor kontrak kerja sama migas (KKKS)",
        "Pelaku PMSE luar negeri yang ditunjuk",
        "Setiap PKP yang membeli BKP dari PKP lain",
      ],
      answer: 3,
      explanation:
        "PKP pembeli biasa membayar PPN kepada penjual, bukan memungut. Pemungut hanya pihak yang ditunjuk: instansi pemerintah, BUMN tertentu, KKKS, dan Pemungut PPN PMSE.",
      legal: "UU PPN Pasal 16A; PMK 81/2024",
    },
    // spt masa
    {
      id: "ppn-045",
      levels: AB,
      section: "spt-masa",
      kind: "konsep",
      prompt: "PKP orang pribadi memiliki kurang bayar PPN Masa Juli. Kapan batas lapor dan bagaimana urutan pembayarannya?",
      options: [
        "15 Agustus, laporkan sebelum setor",
        "Akhir Agustus, setorkan kurang bayar sebelum lapor",
        "20 Agustus, setor setelah lapor",
        "Akhir Juli, setorkan sebelum lapor",
      ],
      answer: 1,
      explanation:
        "SPT Masa PPN dilaporkan paling lambat akhir bulan berikutnya dan kurang bayar disetor sebelum SPT disampaikan. Tanggal 15/20 adalah tenggat PPh potong/pungut.",
      legal: "PMK 81/2024",
    },
    {
      id: "ppn-046",
      levels: AB,
      section: "spt-masa",
      kind: "kasus",
      prompt:
        "April: Pajak Keluaran Rp20 juta, Pajak Masukan Rp26 juta. Mei: Pajak Keluaran Rp25 juta, Pajak Masukan Rp22 juta. Juni: Pajak Keluaran Rp30 juta, Pajak Masukan Rp24 juta. Lebih bayar selalu dikompensasikan. Berapa kurang bayar Juni?",
      options: ["Rp6 juta", "Nihil", "Rp9 juta", "Rp3 juta"],
      answer: 3,
      explanation:
        "April lebih bayar Rp6 juta. Mei: Rp3 juta − Rp6 juta = lebih bayar Rp3 juta. Juni: Rp6 juta − Rp3 juta = kurang bayar Rp3 juta. Nihil salah karena memakai seluruh Rp6 juta di Juni.",
      legal: "UU PPN Pasal 9 ayat (4)",
    },
    {
      id: "ppn-047",
      levels: AB,
      section: "spt-masa",
      kind: "kasus",
      prompt:
        "SPT Masa PPN September 2026 jatuh tempo akhir bulan berikutnya. Tanggal 31 Oktober 2026 jatuh pada Sabtu. Kapan batas penyampaiannya?",
      options: [
        "Jumat, 30 Oktober 2026",
        "Sabtu, 31 Oktober 2026",
        "Senin, 2 November 2026",
        "Minggu, 15 November 2026",
      ],
      answer: 2,
      explanation:
        "Bila batas waktu jatuh pada hari libur (termasuk Sabtu/Minggu), batasnya bergeser ke hari kerja berikutnya, yaitu Senin 2 November 2026; batas tidak dimajukan ke Jumat.",
      legal: "PMK 81/2024",
    },
    {
      id: "ppn-048",
      levels: AB,
      section: "spt-masa",
      kind: "konsep",
      prompt: "PKP terlambat menyampaikan SPT Masa PPN. Berapa sanksi denda Pasal 7 UU KUP?",
      options: ["Rp100.000", "Rp1.000.000", "1% dari DPP", "Rp500.000"],
      answer: 3,
      explanation:
        "Denda telat lapor SPT Masa PPN Rp500.000; Rp100.000 untuk SPT Masa lainnya, dan 1% DPP adalah denda faktur.",
      legal: "UU KUP Pasal 7 ayat (1)",
    },
    {
      id: "ppn-049",
      levels: AB,
      section: "spt-masa",
      kind: "hitung",
      prompt:
        "PKP orang pribadi pada satu masa menjual BKP nonmewah Rp300 juta sebelum PPN dan memiliki Pajak Masukan yang dapat dikreditkan Rp25 juta. Berapa PPN yang disetor sebelum lapor?",
      options: ["Rp11 juta", "Rp8 juta", "Rp33 juta", "Rp58 juta"],
      answer: 1,
      explanation:
        "Pajak Keluaran = 12% × 11/12 × Rp300 juta = Rp33 juta; kurang bayar Rp33 juta − Rp25 juta = Rp8 juta. Rp11 juta salah karena memakai 12% × harga penuh.",
      legal: "PMK 131/2024; UU PPN Pasal 9",
    },
    // fasilitas
    {
      id: "ppn-050",
      levels: AB,
      section: "fasilitas",
      kind: "konsep",
      prompt: "Bagaimana perlakuan Pajak Masukan untuk penyerahan yang mendapat fasilitas PPN?",
      options: [
        "Tidak dipungut: tidak dapat dikreditkan; dibebaskan: dapat dikreditkan",
        "Keduanya dapat dikreditkan bila faktur lengkap",
        "Tidak dipungut: dapat dikreditkan; dibebaskan: tidak dapat dikreditkan",
        "Keduanya tidak dapat dikreditkan",
      ],
      answer: 2,
      explanation:
        "Pada PPN tidak dipungut, Pajak Masukan tetap dapat dikreditkan; pada PPN dibebaskan, Pajak Masukan terkait tidak dapat dikreditkan.",
      legal: "UU PPN Pasal 16B ayat (2) dan (3)",
    },
    {
      id: "ppn-051",
      levels: AB,
      section: "fasilitas",
      kind: "konsep",
      prompt: "Kode transaksi Faktur Pajak untuk penyerahan yang mendapat fasilitas PPN tidak dipungut adalah?",
      options: ["07", "08", "04", "01"],
      answer: 0,
      explanation:
        "Kode 07 untuk PPN tidak dipungut/ditanggung pemerintah; 08 untuk dibebaskan; 04 untuk DPP nilai lain; 01 untuk penyerahan umum.",
      legal: "PMK 81/2024",
    },
    {
      id: "ppn-052",
      levels: AB,
      section: "fasilitas",
      kind: "konsep",
      prompt: "Manakah penyerahan yang TIDAK mendapat fasilitas PPN dibebaskan menurut PP 49/2022?",
      options: [
        "Air bersih yang dialirkan melalui pipa",
        "Buku pelajaran umum dan kitab suci",
        "Listrik untuk rumah tangga dengan daya 7.700 VA",
        "Rumah susun sederhana milik",
      ],
      answer: 2,
      explanation:
        "Listrik dibebaskan kecuali untuk rumah tangga dengan daya di atas 6.600 VA, sehingga daya 7.700 VA terutang PPN. Tiga penyerahan lain dibebaskan.",
      legal: "PP 49/2022",
    },
    {
      id: "ppn-053",
      levels: AB,
      section: "fasilitas",
      kind: "hitung",
      prompt:
        "PKP mengekspor BKP Rp500 juta dan menjual di dalam negeri dengan Pajak Keluaran Rp22 juta. Pajak Masukan yang dapat dikreditkan Rp30 juta. Bagaimana posisi SPT Masanya?",
      options: [
        "Kurang bayar Rp52 juta",
        "Lebih bayar Rp8 juta dan dapat diminta restitusi pada masa itu",
        "Kurang bayar Rp30 juta atas ekspor",
        "Nihil karena ekspor bertarif 0%",
      ],
      answer: 1,
      explanation:
        "Pajak Keluaran ekspor 0, sehingga Rp22 juta − Rp30 juta = lebih bayar Rp8 juta. Sebagai eksportir, PKP dapat meminta restitusi setiap masa.",
      legal: "UU PPN Pasal 7 ayat (2) dan 9 ayat (4b)",
    },
    {
      id: "ppn-054",
      levels: AB,
      section: "fasilitas",
      kind: "konsep",
      prompt: "Apa konsekuensi PPN final dengan besaran tertentu menurut Pasal 9A UU PPN?",
      options: [
        "Pajak Masukan atas perolehannya tidak dikreditkan",
        "Pajak Masukan dikreditkan sebesar 80% dari Pajak Keluaran",
        "Penjual tidak wajib membuat Faktur Pajak",
        "Pembeli memungut PPN dan menyetorkannya",
      ],
      answer: 0,
      explanation:
        "PPN final besaran tertentu menyederhanakan pemungutan; Pajak Masukannya tidak dikreditkan. Pedoman 80% adalah Pasal 9 ayat (9a) untuk perolehan sebelum pengukuhan.",
      legal: "UU PPN Pasal 9A",
    },
  ],
  flashcards: [
    { front: "Tarif PPN umum sejak 1 Januari 2025", back: "12% (dapat diubah 5%–15% dengan PP)", levels: AB, section: "dpp-tarif" },
    { front: "DPP barang/jasa nonmewah (PMK 131/2024)", back: "11/12 × harga jual/penggantian/nilai impor; efektif 11%", levels: AB, section: "dpp-tarif" },
    { front: "DPP barang mewah kena PPnBM (PMK 131/2024)", back: "Harga jual/nilai impor penuh × 12%", levels: AB, section: "dpp-tarif" },
    { front: "Rentang tarif PPnBM", back: "10% sampai 200%; ekspor 0%", levels: AB, section: "dpp-tarif" },
    { front: "PPN atas harga sudah termasuk PPN (nonmewah)", back: "11/111 × harga termasuk PPN", levels: AB, section: "dpp-tarif" },
    { front: "Nilai impor sebagai DPP", back: "Nilai pabean (CIF) + bea masuk + pungutan lain", levels: AB, section: "dpp-tarif" },
    { front: "Besaran PPN kegiatan membangun sendiri", back: "20% × 11/12 × 12% = 2,2% dari biaya selain tanah (PMK 11/2025)", levels: AB, section: "kms-aktiva" },
    { front: "Luas minimal bangunan KMS", back: "200 m²", levels: AB, section: "kms-aktiva" },
    { front: "Syarat PPN Pasal 16D atas penjualan aktiva", back: "Pajak Masukan saat perolehan dapat dikreditkan", levels: AB, section: "kms-aktiva" },
    { front: "Batas peredaran pengusaha kecil PPN", back: "Rp4,8 miliar setahun", levels: AB, section: "kewajiban-pkp" },
    { front: "Batas lapor untuk dikukuhkan PKP", back: "Akhir bulan berikutnya setelah peredaran melampaui Rp4,8 miliar", levels: AB, section: "kewajiban-pkp" },
    { front: "Pasal 9 ayat (9a) UU PPN", back: "Kredit PM sebelum pengukuhan = 80% × Pajak Keluaran", levels: AB, section: "kewajiban-pkp" },
    { front: "Saat pembuatan Faktur Pajak", back: "Saat penyerahan, saat pembayaran mendahului penyerahan, atau saat termin", levels: AB, section: "faktur" },
    { front: "Batas faktur gabungan", back: "Akhir bulan penyerahan", levels: AB, section: "faktur" },
    { front: "Denda faktur Pasal 14 ayat (4) KUP", back: "1% dari DPP", levels: AB, section: "faktur" },
    { front: "Identitas pembeli tanpa NPWP di faktur", back: "NIK atau nomor paspor", levels: AB, section: "faktur" },
    { front: "Pembuat nota retur", back: "Pembeli BKP", levels: B, section: "retur-pembatalan" },
    { front: "Pembuat nota pembatalan", back: "Penerima JKP", levels: B, section: "retur-pembatalan" },
    { front: "Masa pengurangan PPN karena retur", back: "Masa terjadinya retur (Pasal 5A)", levels: B, section: "retur-pembatalan" },
    { front: "Batas pengkreditan Pajak Masukan", back: "Paling lama 3 masa setelah masa faktur, belum dibebankan sebagai biaya", levels: AB, section: "pengkreditan" },
    { front: "Rumus PM bersama yang dapat dikreditkan", back: "Penyerahan terutang ÷ total penyerahan × PM bersama", levels: B, section: "pengkreditan" },
    { front: "Kode faktur ke instansi pemerintah / pemungut lain", back: "02 / 03", levels: AB, section: "pemungut" },
    { front: "Pasal 9 ayat (4b) UU PPN", back: "Restitusi setiap masa: eksportir, rekanan pemungut, penyerahan tidak dipungut, belum berproduksi", levels: AB, section: "pemungut" },
    { front: "Batas setor dan lapor SPT Masa PPN", back: "Akhir bulan berikutnya; setor sebelum lapor", levels: AB, section: "spt-masa" },
    { front: "Denda telat lapor SPT Masa PPN", back: "Rp500.000 per SPT", levels: AB, section: "spt-masa" },
    { front: "Kode faktur 07 dan 08", back: "07 tidak dipungut/DTP; 08 dibebaskan", levels: AB, section: "fasilitas" },
    { front: "PM untuk penyerahan dibebaskan", back: "Tidak dapat dikreditkan", levels: AB, section: "fasilitas" },
    { front: "Listrik yang tidak dibebaskan PPN", back: "Rumah tangga dengan daya di atas 6.600 VA", levels: AB, section: "fasilitas" },
    { front: "Kriteria Pemungut PPN PMSE (nilai transaksi)", back: "> Rp600 juta setahun atau > Rp50 juta sebulan", levels: AB, section: "objek" },
    { front: "Siapa menyetor PPN pemanfaatan JKP luar negeri (non-PMSE)", back: "Pemanfaat jasa di Indonesia", levels: AB, section: "objek" },
    { front: "Prinsip yang dianut PPN", back: "Tempat tujuan (destination principle)", levels: AB, section: "mekanisme" },
  ],
};

export default content;
