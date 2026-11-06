import type { TopicContent } from "./types";

const B = ["b"] as const;

const content: TopicContent = {
  summary: [
    {
      id: "subjek",
      title: "Subjek pajak badan, saat mulai dan berakhir, dan pihak yang dikecualikan",
      levels: B,
      bookletItem: { b: "1–3" },
      points: [
        "Badan dalam negeri adalah badan yang didirikan atau bertempat kedudukan di Indonesia, termasuk BUMN/BUMD dan koperasi.",
        "Unit tertentu badan pemerintah bukan subjek pajak bila: dibentuk berdasarkan peraturan perundang-undangan, dibiayai APBN/APBD, penerimaannya masuk anggaran, dan pembukuannya diperiksa aparat pengawasan fungsional negara.",
        "Kewajiban subjektif badan dalam negeri dimulai saat didirikan atau bertempat kedudukan di Indonesia dan berakhir saat dibubarkan atau tidak lagi bertempat kedudukan di Indonesia.",
        "Kewajiban subjektif BUT dimulai saat badan luar negeri menjalankan usaha atau kegiatan melalui BUT dan berakhir saat tidak lagi menjalankannya.",
        "Dikecualikan dari subjek (Pasal 3): kantor perwakilan negara asing (asas timbal balik) dan organisasi internasional yang ditetapkan Menteri Keuangan sepanjang tidak menjalankan usaha di Indonesia.",
      ],
      traps: [
        "BUMN/BUMD tetap subjek pajak badan; yang dikecualikan hanya unit pemerintah yang memenuhi semua kriteria.",
        "Kewajiban subjektif BUT tidak dimulai saat akta perusahaan induk dibuat.",
      ],
      legal: "Pasal 2, 2A, 3 UU PPh.",
    },
    {
      id: "objek",
      title: "Objek pajak badan dan objek BUT",
      levels: B,
      bookletItem: { b: "4" },
      points: [
        "Objek adalah setiap tambahan kemampuan ekonomis, antara lain laba usaha, keuntungan pengalihan harta, bunga, royalti, sewa, selisih kurs, dan keuntungan pembebasan utang.",
        "Objek BUT meliputi penghasilan dari usaha BUT dan harta yang dimiliki/dikuasainya.",
        "Force of attraction: penghasilan kantor pusat dari penjualan barang/jasa sejenis dengan yang dilakukan BUT di Indonesia juga dianggap penghasilan BUT.",
        "Penghasilan kantor pusat dari dividen, bunga, royalti, dan sewa yang ada hubungan efektif dengan harta atau kegiatan BUT juga objek BUT.",
        "BUT tidak dapat membebankan royalti, imbalan jasa manajemen, atau bunga kepada kantor pusat (kecuali usaha perbankan).",
      ],
      traps: [
        "Biaya administrasi kantor pusat yang terkait usaha BUT tetap dapat dibebankan secara wajar; yang dilarang adalah royalti/imbalan kepada kantor pusat.",
      ],
      legal: "Pasal 4 ayat (1) dan Pasal 5 UU PPh.",
    },
    {
      id: "final",
      title: "PPh final badan, termasuk peredaran bruto tertentu",
      levels: B,
      bookletItem: { b: "5" },
      points: [
        "Penghasilan final badan antara lain: sewa tanah/bangunan 10%, pengalihan hak atas tanah/bangunan 2,5%, bunga deposito 20%, dan jasa konstruksi PP 9/2022.",
        "PPh final 0,5% atas peredaran bruto tertentu (≤ Rp4,8 miliar setahun) diatur PP 55/2022 s.t.d.d. PP 20/2026 yang diundangkan 22 April 2026.",
        "Sejak PP 20/2026, subjek badan yang boleh memakai PPh final 0,5% hanya perseroan perorangan yang didirikan satu orang dan koperasi; PT biasa, CV, firma, dan BUMDes tidak lagi termasuk.",
        "Koperasi hanya dapat memakai PPh final paling lama 4 tahun pajak sejak terdaftar; untuk perseroan perorangan PP 20/2026 menghapus batas jangka waktu (Pasal 59 dihapus).",
        "Peralihan: PT, CV, firma, dan BUMDes yang sudah memakai skema PP 55/2022 tetap dapat memakainya sampai jangka waktunya berakhir (PT 3 tahun pajak; CV, firma, BUMDes 4 tahun pajak sejak terdaftar).",
        "Batas omzet tidak dikenai pajak Rp500 juta hanya untuk orang pribadi; badan membayar 0,5% sejak rupiah pertama.",
        "Bila omzet melewati Rp4,8 miliar di tengah tahun, tarif 0,5% tetap dipakai sampai akhir tahun itu dan tarif umum berlaku mulai tahun berikutnya.",
        "Penghasilan final dikeluarkan dari PKP (koreksi negatif) beserta biaya yang terkait dengannya (koreksi positif).",
      ],
      table: {
        head: ["Bentuk badan", "PPh final 0,5% (PP 20/2026)", "Jangka waktu"],
        rows: [
          ["Perseroan perorangan (1 orang)", "Boleh", "Tidak dibatasi"],
          ["Koperasi", "Boleh", "4 tahun pajak sejak terdaftar"],
          ["PT biasa", "Tidak, kecuali peralihan", "Sisa jangka 3 tahun PP 55/2022"],
          ["CV, firma, BUMDes", "Tidak, kecuali peralihan", "Sisa jangka 4 tahun PP 55/2022"],
        ],
      },
      traps: [
        "Jangan memakai jangka waktu lama PP 55/2022 (PT 3 tahun, CV 4 tahun) untuk badan baru setelah PP 20/2026.",
        "Pembebasan omzet Rp500 juta tidak berlaku untuk badan.",
      ],
      legal: "Pasal 4 ayat (2) UU PPh; PP 9/2022; PP 55/2022 s.t.d.d. PP 20/2026.",
    },
    {
      id: "bukan-objek",
      title: "Penghasilan yang dikecualikan dari objek",
      levels: B,
      bookletItem: { b: "6" },
      points: [
        "Setoran modal dan agio saham yang diterima badan bukan objek PPh.",
        "Dividen dari badan dalam negeri yang diterima badan dalam negeri dikecualikan tanpa syarat kepemilikan.",
        "Dividen luar negeri dikecualikan bila diinvestasikan di Indonesia dalam jangka waktu dan jumlah tertentu (untuk perusahaan nonbursa paling sedikit 30% laba setelah pajak).",
        "Hibah dikecualikan bila dari keluarga sedarah satu derajat, badan keagamaan/pendidikan/sosial, koperasi, atau orang pribadi UMKM, sepanjang tidak ada hubungan usaha, pekerjaan, kepemilikan, atau penguasaan.",
        "Zakat dan sumbangan keagamaan yang diterima badan/lembaga amil resmi dikecualikan.",
        "Sisa lebih lembaga pendidikan/litbang dan badan sosial-keagamaan yang ditanamkan kembali (≤ 4 tahun) dikecualikan.",
      ],
      traps: [
        "Hibah dari pemegang saham kepada perusahaannya adalah objek karena ada hubungan kepemilikan.",
        "Bunga obligasi dan bunga pinjaman tetap objek PPh.",
      ],
      legal: "Pasal 4 ayat (3) UU PPh.",
    },
    {
      id: "biaya",
      title: "Biaya yang boleh dan tidak boleh dikurangkan, termasuk natura",
      levels: B,
      bookletItem: { b: "7" },
      points: [
        "Pasal 6: biaya untuk mendapatkan, menagih, dan memelihara penghasilan (3M) dapat dikurangkan, termasuk penyusutan, kerugian kurs, piutang tak tertagih yang memenuhi syarat, dan sumbangan tertentu.",
        "Pasal 9 melarang: pembagian laba, biaya pribadi, cadangan (kecuali sektor tertentu), PPh, sanksi administrasi/pidana, gaji sekutu persekutuan yang modalnya tidak atas saham, dan sumbangan/hibah selain yang diatur.",
        "Sejak UU HPP dan PMK 66/2023, biaya natura dan/atau kenikmatan bagi pegawai dapat dikurangkan oleh pemberi kerja sepanjang memenuhi 3M, termasuk natura yang dikecualikan dari objek bagi penerima.",
        "Natura yang dikecualikan dari objek penerima (PMK 66/2023) antara lain makanan/minuman bagi seluruh pegawai, natura keharusan pekerjaan (seragam, APD), dan bingkisan hari raya keagamaan sampai Rp3 juta per tahun.",
        "Sumbangan bencana nasional, litbang, infrastruktur sosial, fasilitas pendidikan, dan pembinaan olahraga dapat dikurangkan maksimal 5% penghasilan neto fiskal tahun sebelumnya dan tidak boleh menimbulkan rugi (PP 93/2010).",
        "Biaya entertainment/promosi dapat dikurangkan bila didukung daftar nominatif; bagian tanpa daftar dikoreksi positif.",
        "Premi asuransi kesehatan/jiwa pegawai dapat dikurangkan bila dihitung sebagai penghasilan pegawai.",
      ],
      table: {
        head: ["Pos", "Boleh?"],
        rows: [
          ["Natura untuk pegawai (3M)", "Boleh (sejak HPP)"],
          ["PPh badan, sanksi bunga/denda", "Tidak"],
          ["PBB, bea meterai", "Boleh"],
          ["Sumbangan PP 93/2010", "Boleh, maks 5% neto fiskal tahun lalu"],
          ["Entertainment tanpa daftar nominatif", "Tidak"],
        ],
      },
      traps: [
        "Aturan lama (natura dikoreksi positif) tidak berlaku lagi bagi pemberi kerja.",
        "Batas 5% sumbangan dihitung dari neto fiskal tahun sebelumnya, bukan tahun berjalan.",
      ],
      legal: "Pasal 6 dan 9 UU PPh; PMK 66/2023; PP 93/2010.",
    },
    {
      id: "harta-persediaan",
      title: "Harga perolehan dan pengalihan harta, penilaian persediaan",
      levels: B,
      bookletItem: { b: "8" },
      points: [
        "Harga perolehan/pengalihan antarpihak yang mempunyai hubungan istimewa adalah jumlah yang seharusnya dikeluarkan atau diterima (harga wajar).",
        "Harga perolehan dari transaksi independen adalah jumlah yang sesungguhnya dikeluarkan atau diterima.",
        "Harta hibahan/bantuan/sumbangan/warisan yang dikecualikan dari objek: harga perolehan penerima = nilai sisa buku pemberi.",
        "Keuntungan pengalihan harta = harga jual − nilai sisa buku fiskal; kerugian pengalihan harta yang dipakai usaha dapat dikurangkan.",
        "Persediaan dinilai harga perolehan dengan rata-rata atau FIFO; LIFO tidak diperbolehkan dan metode harus diterapkan konsisten.",
      ],
      traps: [
        "Harga jual di bawah pasar kepada pihak afiliasi tidak dipakai; gunakan harga wajar.",
      ],
      legal: "Pasal 4 ayat (1) huruf d, 10, 19 UU PPh.",
    },
    {
      id: "hubungan-istimewa",
      title: "Hubungan istimewa",
      levels: B,
      bookletItem: { b: "9" },
      points: [
        "Hubungan istimewa ada bila kepemilikan langsung/tidak langsung paling rendah 25%, atau dua badan dimiliki pihak yang sama paling rendah 25%.",
        "Hubungan istimewa juga timbul karena penguasaan melalui manajemen atau teknologi, dan hubungan keluarga sedarah/semenda lurus atau ke samping satu derajat.",
        "Transaksi afiliasi wajib memenuhi prinsip kewajaran dan kelaziman usaha; DJP berwenang menentukan kembali harga.",
        "PMK 172/2023 mewajibkan dokumen induk dan lokal bila peredaran bruto tahun sebelumnya > Rp50 miliar, transaksi barang berwujud > Rp20 miliar, transaksi lain > Rp5 miliar, atau ada afiliasi di negara bertarif lebih rendah.",
        "DER maksimal 4:1 (PMK 169/2015); bunga atas kelebihan utang tidak dapat dikurangkan.",
      ],
      table: {
        head: ["Ambang dokumen TP (PMK 172/2023)", "Nilai"],
        rows: [
          ["Peredaran bruto tahun sebelumnya", "> Rp50 miliar"],
          ["Transaksi afiliasi barang berwujud", "> Rp20 miliar"],
          ["Transaksi afiliasi jasa, bunga, royalti, lainnya", "> Rp5 miliar"],
        ],
      },
      traps: [
        "Kepemilikan 25% tepat sudah memenuhi; yang tidak memenuhi adalah di bawah 25%.",
      ],
      legal: "Pasal 18 UU PPh; PMK 172/2023; PMK 169/2015.",
    },
    {
      id: "penyusutan",
      title: "Penyusutan dan amortisasi fiskal",
      levels: B,
      bookletItem: { b: "10" },
      points: [
        "Penyusutan dimulai pada bulan dilakukannya pengeluaran; harta dalam pengerjaan mulai bulan selesainya pengerjaan.",
        "Dengan persetujuan DJP, penyusutan dapat dimulai pada bulan harta digunakan untuk 3M atau bulan harta mulai menghasilkan.",
        "Harta bukan bangunan boleh garis lurus atau saldo menurun (dipilih dan diterapkan konsisten); bangunan hanya garis lurus.",
        "Pada saldo menurun, sisa nilai buku pada akhir masa manfaat disusutkan sekaligus.",
        "Bangunan permanen 20 tahun (5%) atau, sesuai UU HPP, masa manfaat sebenarnya bila lebih dari 20 tahun; bangunan tidak permanen 10 tahun (10%).",
        "Tanah tidak disusutkan; harta tak berwujud diamortisasi dengan kelompok masa manfaat yang sama.",
      ],
      table: {
        head: ["Kelompok", "Masa manfaat", "Garis lurus", "Saldo menurun"],
        rows: [
          ["Kelompok 1", "4 tahun", "25%", "50%"],
          ["Kelompok 2", "8 tahun", "12,5%", "25%"],
          ["Kelompok 3", "16 tahun", "6,25%", "12,5%"],
          ["Kelompok 4", "20 tahun", "5%", "10%"],
          ["Bangunan permanen", "20 tahun*", "5%", "—"],
          ["Bangunan tidak permanen", "10 tahun", "10%", "—"],
        ],
      },
      traps: [
        "Tahun pertama dihitung pro rata sejak bulan perolehan (bulan perolehan dihitung penuh).",
        "Tarif saldo menurun dikalikan nilai sisa buku, bukan harga perolehan.",
      ],
      legal: "Pasal 11 dan 11A UU PPh; PMK 72/2023.",
    },
    {
      id: "kompensasi",
      title: "Kompensasi kerugian",
      levels: B,
      bookletItem: { b: "11" },
      points: [
        "Rugi fiskal dapat dikompensasikan dengan penghasilan neto berturut-turut sampai 5 tahun sesudah tahun rugi.",
        "Rugi dipakai berurutan dari tahun terlama (FIFO); sisa yang lewat 5 tahun hangus.",
        "Rugi fiskal dihitung dari laba komersial setelah koreksi, sehingga rugi komersial bisa menjadi laba fiskal dan sebaliknya.",
        "Rugi dari luar negeri dan rugi dari usaha yang dikenai PPh final tidak dapat dikompensasikan dengan penghasilan tarif umum dalam negeri.",
        "Fasilitas tertentu (tax allowance) dapat memperpanjang kompensasi sampai paling lama 10 tahun.",
      ],
      traps: [
        "Rugi 2021 masih dapat dipakai pada 2026; rugi 2020 berakhir pada 2025.",
      ],
      legal: "Pasal 6 ayat (2) UU PPh.",
    },
    {
      id: "tarif-31e",
      title: "Tarif dan PPh terutang badan, Pasal 31E",
      levels: B,
      bookletItem: { b: "12" },
      points: [
        "Tarif umum badan 22% sejak tahun pajak 2022 (UU HPP).",
        "Perseroan terbuka dengan paling sedikit 40% saham disetor diperdagangkan di BEI dan memenuhi syarat tertentu mendapat tarif 3% lebih rendah, yaitu 19%.",
        "Pasal 31E: badan dalam negeri dengan peredaran bruto sampai Rp50 miliar mendapat pengurangan tarif 50% atas PKP dari bagian peredaran bruto sampai Rp4,8 miliar.",
        "PKP fasilitas = Rp4,8 miliar ÷ peredaran bruto × PKP; bila omzet ≤ Rp4,8 miliar, seluruh PKP mendapat tarif 11%.",
        "Omzet di atas Rp50 miliar tidak mendapat Pasal 31E sama sekali.",
        "Penghasilan yang dikenai PPh final tidak masuk PKP sehingga tidak ikut dihitung dalam Pasal 31E.",
      ],
      table: {
        head: ["Kondisi", "Tarif efektif"],
        rows: [
          ["Omzet ≤ Rp4,8 miliar (31E)", "11% atas seluruh PKP"],
          ["Rp4,8 miliar < omzet ≤ Rp50 miliar", "11% bagian fasilitas, 22% sisanya"],
          ["Omzet > Rp50 miliar", "22%"],
          ["Tbk memenuhi syarat", "19%"],
        ],
      },
      traps: [
        "Rasio Rp4,8 miliar ÷ omzet dikalikan PKP, bukan omzet.",
        "Pasal 31E bukan pilihan bagi omzet Rp50,1 miliar; tidak ada fasilitas proporsional.",
      ],
      legal: "Pasal 17 ayat (1) huruf b, (2b), dan Pasal 31E UU PPh.",
    },
    {
      id: "pkp",
      title: "Penghasilan Kena Pajak dan penyesuaian fiskal",
      levels: B,
      bookletItem: { b: "13" },
      points: [
        "PKP = laba komersial + koreksi positif − koreksi negatif − kompensasi rugi.",
        "PKP dibulatkan ke bawah dalam ribuan rupiah penuh sebelum dikalikan tarif.",
        "Koreksi negatif untuk penghasilan final dan bukan objek; koreksi positif untuk biaya Pasal 9 dan biaya terkait penghasilan final.",
        "Biaya natura pegawai yang memenuhi 3M tidak lagi dikoreksi (PMK 66/2023).",
        "Kredit pajak tidak mengurangi PKP; kredit mengurangi PPh terutang.",
      ],
      traps: [
        "Peredaran bruto untuk Pasal 31E adalah omzet usaha, bukan PKP atau laba.",
      ],
      legal: "Pasal 4, 6, 9, 17 ayat (4), 31E UU PPh.",
    },
    {
      id: "kredit",
      title: "Pelunasan pajak tahun berjalan dan kredit pajak",
      levels: B,
      bookletItem: { b: "14" },
      points: [
        "Kredit pajak badan: PPh 22, PPh 23, PPh 24 (dengan batas), dan PPh 25; PPh final tidak dapat dikreditkan.",
        "PPh 29 (kurang bayar) = PPh terutang − kredit; bila kredit lebih besar, terjadi lebih bayar (PPh 28A) yang dapat diminta kembali.",
        "PPh 24 dikreditkan maksimal sebesar pajak luar negeri yang dibayar dan tidak melebihi proporsi penghasilan luar negeri terhadap PKP (per negara).",
        "Kredit pajak harus didukung bukti potong/pungut atau bukti pembayaran yang sah.",
      ],
      traps: [
        "Potongan PPh final 4(2) atas sewa tidak boleh ikut dikreditkan.",
      ],
      legal: "Pasal 20, 24, 28, 28A, 29 UU PPh.",
    },
    {
      id: "pph25",
      title: "Penghitungan akhir tahun dan angsuran PPh 25",
      levels: B,
      bookletItem: { b: "15" },
      points: [
        "PPh 25 = (PPh terutang tahun lalu atas penghasilan teratur − PPh 21, 22, 23, 24 tahun lalu) ÷ 12 (atau jumlah bulan tahun pajak).",
        "Penghasilan tidak teratur (misal keuntungan penjualan aset) dikeluarkan sebelum menghitung dasar angsuran.",
        "Angsuran bulan-bulan sebelum batas waktu penyampaian SPT Tahunan sama dengan angsuran bulan terakhir tahun pajak lalu.",
        "Menurut PMK 81/2024, PPh 25 disetor paling lambat tanggal 15 bulan berikutnya dan bukti pembayaran yang tervalidasi diperlakukan sebagai SPT Masa PPh 25.",
        "Angsuran yang dibayar menjadi kredit (PPh 25) di SPT Tahunan tahun berjalan.",
      ],
      traps: [
        "Jangan memakai PPh terutang yang memuat penghasilan tidak teratur sebagai dasar angsuran.",
      ],
      legal: "Pasal 25 UU PPh; PMK 81/2024.",
    },
    {
      id: "fasilitas",
      title: "Fasilitas selain Pasal 31E",
      levels: B,
      bookletItem: { b: "16" },
      points: [
        "Tax allowance (Pasal 31A, PP 78/2019): pengurangan penghasilan neto 30% dari penanaman modal, dibebankan 5% per tahun selama 6 tahun.",
        "Tax allowance juga memberi penyusutan/amortisasi dipercepat, PPh dividen ke luar negeri 10% (atau lebih rendah menurut P3B), dan kompensasi rugi lebih lama sampai 10 tahun.",
        "Tax holiday (PMK 130/2020 s.t.d.d. PMK 69/2024) memberi pengurangan PPh badan (bukan penghasilan neto) bagi industri pionir.",
        "Super deduction vokasi (PP 45/2019, PMK 128/2019): pengurangan tambahan maksimal 100% dari biaya, total sampai 200%.",
        "Super deduction litbang: pengurangan tambahan maksimal 200%, total sampai 300%; ketentuan pelaksana kini PMK 81/2024 (menggantikan PMK 153/2020).",
        "Investasi padat karya: pengurangan penghasilan neto 60% dari penanaman modal (PP 45/2019).",
      ],
      table: {
        head: ["Fasilitas", "Bentuk", "Besaran"],
        rows: [
          ["Tax allowance", "Pengurang penghasilan neto", "30% investasi, 5%/tahun × 6 tahun"],
          ["Tax holiday", "Pengurang PPh badan", "Persentase PPh terutang"],
          ["Vokasi", "Tambahan biaya", "Maks 100% (total 200%)"],
          ["Litbang", "Tambahan biaya", "Maks 200% (total 300%)"],
        ],
      },
      traps: [
        "Tax allowance mengurangi penghasilan neto; tax holiday mengurangi pajak terutang.",
      ],
      legal: "Pasal 31A UU PPh; PP 78/2019; PMK 130/2020 s.t.d.d. PMK 69/2024; PP 45/2019; PMK 128/2019; PMK 81/2024.",
    },
    {
      id: "spt",
      title: "SPT Tahunan PPh badan",
      levels: B,
      bookletItem: { b: "17" },
      points: [
        "SPT Tahunan badan disampaikan paling lambat akhir bulan keempat setelah akhir tahun pajak (30 April untuk tahun kalender).",
        "Perpanjangan paling lama 2 bulan dengan pemberitahuan tertulis/elektronik disertai penghitungan sementara; PPh kurang bayar menurut penghitungan sementara harus dilunasi.",
        "PPh 29 wajib dilunasi sebelum SPT Tahunan disampaikan.",
        "Keterlambatan SPT Tahunan badan dikenai denda Rp1 juta; keterlambatan bayar PPh 29 dikenai bunga per bulan (Pasal 9 ayat (2b) KUP).",
        "SPT dilampiri laporan keuangan; sejak PMK 81/2024 penyampaian melalui Coretax.",
      ],
      table: {
        head: ["Tahun buku", "Batas SPT Tahunan"],
        rows: [
          ["Januari–Desember", "30 April"],
          ["Juli–Juni", "31 Oktober"],
          ["April–Maret", "31 Juli"],
        ],
      },
      traps: [
        "Batas orang pribadi 3 bulan; badan 4 bulan.",
      ],
      legal: "Pasal 3, 7, 9 UU KUP; PMK 81/2024.",
    },
  ],
  questions: [
    // subjek
    {
      id: "bdn-001",
      levels: B,
      section: "subjek",
      kind: "konsep",
      prompt: "Kapan kewajiban pajak subjektif BUT dimulai?",
      options: [
        "Saat akta pendirian kantor pusat dibuat",
        "Saat badan luar negeri menjalankan usaha atau kegiatan melalui BUT di Indonesia",
        "Saat BUT memperoleh NPWP",
        "Saat BUT pertama kali menyampaikan SPT",
      ],
      answer: 1,
      explanation:
        "Pasal 2A UU PPh: kewajiban subjektif BUT dimulai saat menjalankan usaha atau kegiatan melalui BUT. NPWP dan SPT adalah kewajiban objektif yang menyusul.",
      legal: "Pasal 2A UU PPh",
    },
    {
      id: "bdn-002",
      levels: B,
      section: "subjek",
      kind: "konsep",
      prompt: "Manakah yang BUKAN subjek pajak badan?",
      options: [
        "BUMD yang bergerak di bidang air minum",
        "Koperasi simpan pinjam",
        "Unit pemerintah yang dibentuk undang-undang, dibiayai APBN, penerimaannya masuk anggaran, dan diaudit APIP",
        "BUMN persero",
      ],
      answer: 2,
      explanation:
        "Unit tertentu badan pemerintah yang memenuhi seluruh kriteria Pasal 2 ayat (3) huruf b bukan subjek pajak. BUMN, BUMD, dan koperasi tetap subjek badan.",
      legal: "Pasal 2 ayat (3) huruf b UU PPh",
    },
    {
      id: "bdn-003",
      levels: B,
      section: "subjek",
      kind: "konsep",
      prompt: "Organisasi internasional dikecualikan dari subjek pajak bila…",
      options: [
        "Ditetapkan Menteri Keuangan dan tidak menjalankan usaha atau memperoleh penghasilan dari Indonesia selain dari pelaksanaan tugasnya",
        "Indonesia menjadi anggota, walaupun organisasi itu menjalankan usaha",
        "Kantornya berada di luar negeri",
        "Pegawainya warga negara asing",
      ],
      answer: 0,
      explanation:
        "Pasal 3 mensyaratkan penetapan Menteri Keuangan dan tidak menjalankan usaha di Indonesia. Keanggotaan Indonesia saja tidak cukup bila ada kegiatan usaha.",
      legal: "Pasal 3 ayat (1) huruf c UU PPh",
    },
    // objek
    {
      id: "bdn-004",
      levels: B,
      section: "objek",
      kind: "konsep",
      prompt:
        "Kantor pusat di Jepang menjual langsung ke pembeli di Indonesia barang sejenis dengan yang dijual BUT-nya di Indonesia. Penghasilan itu menurut UU PPh adalah…",
      options: [
        "Hanya objek PPh Jepang",
        "Objek PPh 26 atas dividen",
        "Bukan objek karena tidak melalui BUT",
        "Penghasilan BUT berdasarkan force of attraction",
      ],
      answer: 3,
      explanation:
        "Pasal 5 ayat (1) huruf b menarik penghasilan kantor pusat dari penjualan barang sejenis dengan yang dilakukan BUT menjadi penghasilan BUT.",
      legal: "Pasal 5 ayat (1) huruf b UU PPh",
    },
    {
      id: "bdn-005",
      levels: B,
      section: "objek",
      kind: "konsep",
      prompt: "BUT nonbank membebankan pos berikut. Mana yang TIDAK dapat dikurangkan?",
      options: [
        "Biaya administrasi kantor pusat yang wajar dan terkait usaha BUT",
        "Gaji pegawai lokal BUT",
        "Royalti kepada kantor pusat atas penggunaan merek",
        "Sewa kantor BUT di Jakarta",
      ],
      answer: 2,
      explanation:
        "Pasal 5 ayat (3) melarang BUT membebankan royalti, imbalan manajemen, dan bunga (kecuali bank) kepada kantor pusat. Biaya administrasi kantor pusat yang terkait tetap boleh.",
      legal: "Pasal 5 ayat (3) UU PPh",
    },
    {
      id: "bdn-006",
      levels: B,
      section: "objek",
      kind: "konsep",
      prompt: "Manakah yang termasuk objek PPh badan?",
      options: [
        "Keuntungan karena pembebasan utang oleh kreditur",
        "Agio saham dari penerbitan saham baru",
        "Dividen dari PT dalam negeri",
        "Hibah dari yayasan sosial tanpa hubungan usaha",
      ],
      answer: 0,
      explanation:
        "Pembebasan utang menambah kemampuan ekonomis (Pasal 4 ayat (1) huruf k). Tiga lainnya dikecualikan dari objek menurut Pasal 4 ayat (3).",
      legal: "Pasal 4 ayat (1) UU PPh",
    },
    // final
    {
      id: "bdn-007",
      levels: B,
      section: "final",
      kind: "konsep",
      prompt:
        "Setelah PP 20/2026 (diundangkan 22 April 2026), badan baru berbentuk apa yang dapat memakai PPh final 0,5% atas peredaran bruto tertentu?",
      options: [
        "PT, CV, firma, dan koperasi",
        "Perseroan perorangan yang didirikan satu orang dan koperasi",
        "Seluruh badan dengan omzet sampai Rp4,8 miliar",
        "CV dan BUMDes",
      ],
      answer: 1,
      explanation:
        "PP 20/2026 mempersempit subjek badan menjadi perseroan perorangan dan koperasi. PT biasa, CV, firma, dan BUMDes hanya dapat melanjutkan bila sudah memanfaatkan sebelumnya (peralihan).",
      legal: "PP 55/2022 s.t.d.d. PP 20/2026",
    },
    {
      id: "bdn-008",
      levels: B,
      section: "final",
      kind: "konsep",
      prompt: "Menurut PP 20/2026, berapa lama koperasi dapat memakai PPh final 0,5%?",
      options: [
        "3 tahun pajak sejak terdaftar",
        "7 tahun pajak sejak terdaftar",
        "Tidak dibatasi",
        "4 tahun pajak sejak terdaftar",
      ],
      answer: 3,
      explanation:
        "Koperasi dibatasi 4 tahun pajak sejak terdaftar. Batas waktu umum Pasal 59 PP 55/2022 dihapus sehingga orang pribadi dan perseroan perorangan tidak lagi dibatasi.",
      legal: "PP 20/2026",
    },
    {
      id: "bdn-009",
      levels: B,
      section: "final",
      kind: "kasus",
      prompt:
        "CV terdaftar dan mulai memakai PPh final 0,5% PP 55/2022 pada 2024, omzet selalu di bawah Rp4,8 miliar. Setelah PP 20/2026, tahun pajak terakhir CV boleh memakai PPh final adalah…",
      options: ["2027", "2026", "2025", "2029"],
      answer: 0,
      explanation:
        "Ketentuan peralihan membolehkan CV melanjutkan sampai jangka waktu PP 55/2022 berakhir, yaitu 4 tahun pajak: 2024–2027. CV yang baru terdaftar setelah PP 20/2026 tidak dapat memakainya.",
      legal: "PP 55/2022 Pasal 59 (lama); PP 20/2026 Pasal II",
    },
    {
      id: "bdn-010",
      levels: B,
      section: "final",
      kind: "hitung",
      prompt:
        "Koperasi yang masih dalam jangka PPh final memperoleh peredaran bruto Januari Rp300 juta. Berapa PPh final 0,5% bulan itu?",
      options: ["Nihil karena omzet belum melewati Rp500 juta", "Rp0,75 juta", "Rp1,5 juta", "Rp6,6 juta"],
      answer: 2,
      explanation:
        "0,5% × Rp300 juta = Rp1,5 juta. Batas tidak kena pajak Rp500 juta hanya untuk orang pribadi, bukan koperasi.",
      legal: "PP 55/2022 s.t.d.d. PP 20/2026",
    },
    {
      id: "bdn-011",
      levels: B,
      section: "final",
      kind: "hitung",
      prompt:
        "PT (tarif umum) menerima sewa gedung Rp500 juta dan menjual tanah-bangunan Rp2 miliar (bukan pengalihan khusus). Berapa total PPh final atas kedua transaksi?",
      options: ["Rp60 juta", "Rp100 juta", "Rp250 juta", "Rp75 juta"],
      answer: 1,
      explanation:
        "Sewa bangunan 10% × Rp500 juta = Rp50 juta; pengalihan tanah/bangunan 2,5% × Rp2 miliar = Rp50 juta; total Rp100 juta. Rp250 juta keliru memakai 10% untuk penjualan.",
      legal: "Pasal 4 ayat (2) UU PPh; PP 34/2016",
    },
    {
      id: "bdn-012",
      levels: B,
      section: "final",
      kind: "konsep",
      prompt:
        "Perseroan perorangan PPh final 0,5% mencapai omzet kumulatif Rp4,8 miliar pada Oktober 2026. Perlakuannya adalah…",
      options: [
        "Tarif umum berlaku sejak Januari 2026",
        "Tarif umum berlaku sejak November 2026",
        "Tetap 0,5% sampai Desember 2026; tarif umum mulai tahun pajak 2027",
        "Kelebihan di atas Rp4,8 miliar dikenai 22% bulan itu",
      ],
      answer: 2,
      explanation:
        "Bila omzet melewati Rp4,8 miliar dalam tahun berjalan, tarif 0,5% tetap dipakai sampai akhir tahun pajak itu; tahun berikutnya memakai tarif umum.",
      legal: "PP 55/2022",
    },
    {
      id: "bdn-013",
      levels: B,
      section: "final",
      kind: "kasus",
      prompt:
        "Laba komersial Rp2,4 miliar termasuk pendapatan sewa bangunan (sudah PPh final) Rp320 juta. Beban terkait sewa Rp48 juta dan beban sanksi pajak Rp12 juta sudah mengurangi laba. Tidak ada koreksi lain. Berapa laba fiskal tarif umum?",
      options: ["Rp2,02 miliar", "Rp2,08 miliar", "Rp2,4 miliar", "Rp2,14 miliar"],
      answer: 3,
      explanation:
        "Rp2,4 miliar − Rp320 juta + Rp48 juta + Rp12 juta = Rp2,14 miliar. Rp2,08 miliar lupa menambahkan beban terkait penghasilan final.",
      source: "Latihan Soal UKP Tingkat B (v1)",
    },
    // bukan-objek
    {
      id: "bdn-014",
      levels: B,
      section: "bukan-objek",
      kind: "konsep",
      prompt: "PT dalam negeri memiliki 5% saham PT dalam negeri lain dan menerima dividen. Perlakuannya adalah…",
      options: [
        "Objek PPh 23 15% karena kepemilikan di bawah 25%",
        "Objek PPh final 10%",
        "Objek tarif umum 22%",
        "Dikecualikan dari objek tanpa syarat kepemilikan",
      ],
      answer: 3,
      explanation:
        "Sejak UU Cipta Kerja, dividen dalam negeri yang diterima badan dalam negeri dikecualikan tanpa batas kepemilikan. Syarat 25% adalah aturan lama.",
      legal: "Pasal 4 ayat (3) huruf f UU PPh",
    },
    {
      id: "bdn-015",
      levels: B,
      section: "bukan-objek",
      kind: "kasus",
      prompt:
        "PT M menerima hibah gedung dari pemegang saham pengendalinya. Perlakuan PPh bagi PT M adalah…",
      options: [
        "Objek PPh karena ada hubungan kepemilikan dengan pemberi",
        "Bukan objek karena hibah selalu dikecualikan",
        "Bukan objek karena merupakan tambahan setoran modal",
        "Objek PPh final 2,5% saja",
      ],
      answer: 0,
      explanation:
        "Pengecualian hibah gugur bila ada hubungan usaha, pekerjaan, kepemilikan, atau penguasaan. Hibah bukan setoran modal kecuali dicatat dan diberikan sebagai penyertaan.",
      legal: "Pasal 4 ayat (3) huruf a UU PPh",
    },
    {
      id: "bdn-016",
      levels: B,
      section: "bukan-objek",
      kind: "konsep",
      prompt: "Dividen dari badan luar negeri yang diterima badan dalam negeri dikecualikan dari objek bila…",
      options: [
        "Sudah dipotong pajak di negara sumber",
        "Diinvestasikan di Indonesia dalam jangka waktu dan jumlah tertentu",
        "Kepemilikan paling sedikit 25%",
        "Diterima melalui rekening bank dalam negeri",
      ],
      answer: 1,
      explanation:
        "Pasal 4 ayat (3) huruf f angka 2 mensyaratkan investasi di Indonesia (untuk perusahaan nonbursa paling sedikit 30% laba setelah pajak). Pemotongan pajak di luar negeri hanya terkait kredit PPh 24.",
      legal: "Pasal 4 ayat (3) huruf f UU PPh",
    },
    {
      id: "bdn-017",
      levels: B,
      section: "bukan-objek",
      kind: "konsep",
      prompt: "Manakah yang TIDAK dikecualikan dari objek PPh?",
      options: [
        "Zakat yang diterima lembaga amil zakat resmi",
        "Setoran modal dari pemegang saham",
        "Bunga obligasi yang diterima badan",
        "Dividen dari PT dalam negeri",
      ],
      answer: 2,
      explanation: "Bunga obligasi adalah objek PPh. Zakat yang diterima lembaga resmi, setoran modal, dan dividen dalam negeri dikecualikan.",
      legal: "Pasal 4 ayat (1) dan (3) UU PPh",
    },
    // biaya
    {
      id: "bdn-018",
      levels: B,
      section: "biaya",
      kind: "konsep",
      prompt:
        "Tahun 2026 badan memberikan makan siang bersama untuk seluruh pegawai Rp60 juta. Perlakuan bagi pemberi kerja dan pegawai adalah…",
      options: [
        "Dikoreksi positif; bukan objek bagi pegawai",
        "Dapat dikurangkan; objek PPh 21 bagi pegawai",
        "Dikoreksi positif; objek PPh 21 bagi pegawai",
        "Dapat dikurangkan; dikecualikan dari objek bagi pegawai",
      ],
      answer: 3,
      explanation:
        "Sejak UU HPP dan PMK 66/2023 biaya natura dapat dikurangkan pemberi kerja (3M). Makanan/minuman bagi seluruh pegawai dikecualikan dari objek penerima. Koreksi positif adalah aturan lama.",
      legal: "Pasal 4 ayat (3) huruf d dan Pasal 6 UU PPh; PMK 66/2023",
    },
    {
      id: "bdn-019",
      levels: B,
      section: "biaya",
      kind: "hitung",
      prompt:
        "Beban tahun 2026 memuat: PBB Rp15 juta, bunga STP Rp8 juta, PPh badan tahun lalu Rp20 juta, sumbangan ke panti asuhan (tidak memenuhi PP 93/2010) Rp12 juta, dan promosi dengan daftar nominatif Rp30 juta. Berapa koreksi positifnya?",
      options: ["Rp55 juta", "Rp28 juta", "Rp70 juta", "Rp40 juta"],
      answer: 3,
      explanation:
        "Koreksi = bunga STP Rp8 juta + PPh Rp20 juta + sumbangan Rp12 juta = Rp40 juta. PBB dan promosi dengan daftar nominatif dapat dikurangkan.",
      legal: "Pasal 6 dan 9 UU PPh",
    },
    {
      id: "bdn-020",
      levels: B,
      section: "biaya",
      kind: "hitung",
      prompt:
        "Penghasilan neto fiskal 2025 Rp2 miliar. Pada 2026 badan memberi sumbangan bencana nasional Rp130 juta yang memenuhi PP 93/2010; laba fiskal 2026 sebelum sumbangan Rp3 miliar. Berapa koreksi positif sumbangan?",
      options: ["Rp30 juta", "Nihil", "Rp130 juta", "Rp6,5 juta"],
      answer: 0,
      explanation:
        "Batas = 5% × neto fiskal tahun sebelumnya Rp2 miliar = Rp100 juta. Kelebihan Rp130 juta − Rp100 juta = Rp30 juta dikoreksi positif. Dasar batas bukan laba tahun berjalan.",
      legal: "Pasal 6 ayat (1) huruf i UU PPh; PP 93/2010",
    },
    {
      id: "bdn-021",
      levels: B,
      section: "biaya",
      kind: "konsep",
      prompt: "Manakah yang dapat dikurangkan dari penghasilan bruto badan?",
      options: [
        "Gaji yang dibayarkan kepada sekutu CV",
        "Premi asuransi kesehatan pegawai yang diperhitungkan sebagai penghasilan pegawai",
        "Cadangan kerugian piutang perusahaan dagang",
        "Sanksi denda keterlambatan SPT",
      ],
      answer: 1,
      explanation:
        "Premi asuransi pegawai dapat dibiayakan bila dihitung sebagai penghasilan pegawai. Gaji sekutu persekutuan tanpa modal saham, cadangan, dan sanksi dilarang Pasal 9.",
      legal: "Pasal 6 dan 9 UU PPh",
    },
    {
      id: "bdn-022",
      levels: B,
      section: "biaya",
      kind: "hitung",
      prompt:
        "Biaya entertainment Rp50 juta, Rp30 juta di antaranya didukung daftar nominatif lengkap. Berapa koreksi positifnya?",
      options: ["Rp50 juta", "Rp30 juta", "Rp20 juta", "Nihil"],
      answer: 2,
      explanation: "Hanya bagian dengan daftar nominatif yang dapat dikurangkan; Rp50 juta − Rp30 juta = Rp20 juta dikoreksi positif.",
    },
    // harta-persediaan
    {
      id: "bdn-023",
      levels: B,
      section: "harta-persediaan",
      kind: "hitung",
      prompt:
        "Persediaan dibeli 100 unit @Rp20 ribu lalu 100 unit @Rp24 ribu, tanpa saldo awal. Bila 120 unit dijual dengan FIFO, berapa harga pokok penjualan?",
      options: ["Rp2,64 juta", "Rp2,88 juta", "Rp2,48 juta", "Rp2,92 juta"],
      answer: 2,
      explanation:
        "FIFO: 100 × Rp20 ribu = Rp2 juta ditambah 20 × Rp24 ribu = Rp480 ribu; total Rp2,48 juta. Rp2,64 juta adalah hasil rata-rata (Rp22 ribu × 120).",
    },
    {
      id: "bdn-024",
      levels: B,
      section: "harta-persediaan",
      kind: "konsep",
      prompt: "Metode penilaian persediaan mana yang TIDAK diperbolehkan secara fiskal?",
      options: ["LIFO", "FIFO", "Rata-rata tertimbang", "Rata-rata bergerak"],
      answer: 0,
      explanation: "Pasal 10 ayat (6) hanya mengizinkan rata-rata atau FIFO, diterapkan konsisten. LIFO tidak diperbolehkan.",
      legal: "Pasal 10 ayat (6) UU PPh",
    },
    {
      id: "bdn-025",
      levels: B,
      section: "harta-persediaan",
      kind: "kasus",
      prompt:
        "PT P menjual mesin ke anak perusahaannya (kepemilikan 60%) Rp150 juta, padahal harga pasar Rp200 juta. Nilai sisa buku fiskal Rp120 juta. Berapa keuntungan pengalihan fiskal PT P?",
      options: ["Rp30 juta", "Rp50 juta", "Rp200 juta", "Rp80 juta"],
      answer: 3,
      explanation:
        "Antarpihak berhubungan istimewa dipakai harga yang seharusnya, yaitu Rp200 juta. Keuntungan = Rp200 juta − Rp120 juta = Rp80 juta. Rp30 juta memakai harga transaksi.",
      legal: "Pasal 10 ayat (1) UU PPh",
    },
    {
      id: "bdn-026",
      levels: B,
      section: "harta-persediaan",
      kind: "konsep",
      prompt:
        "Yayasan sosial menerima hibah kendaraan dari badan yang tidak punya hubungan usaha dengannya; hibah dikecualikan dari objek. Harga perolehan kendaraan bagi yayasan adalah…",
      options: [
        "Harga pasar pada saat hibah",
        "Nilai sisa buku pemberi hibah",
        "Nol karena diterima cuma-cuma",
        "Harga perolehan awal pemberi",
      ],
      answer: 1,
      explanation:
        "Pasal 10 ayat (4): harta yang dialihkan dalam rangka hibah yang dikecualikan dari objek dinilai sebesar nilai sisa buku pemberi (atau nilai yang ditetapkan DJP).",
      legal: "Pasal 10 ayat (4) UU PPh",
    },
    // hubungan-istimewa
    {
      id: "bdn-027",
      levels: B,
      section: "hubungan-istimewa",
      kind: "konsep",
      prompt: "Batas kepemilikan modal yang menimbulkan hubungan istimewa menurut Pasal 18 UU PPh adalah…",
      options: ["Lebih dari 50%", "Paling rendah 20%", "Paling rendah 25%", "Paling rendah 10%"],
      answer: 2,
      explanation: "Hubungan istimewa karena kepemilikan timbul bila penyertaan langsung atau tidak langsung paling rendah 25%.",
      legal: "Pasal 18 ayat (4) UU PPh",
    },
    {
      id: "bdn-028",
      levels: B,
      section: "hubungan-istimewa",
      kind: "kasus",
      prompt:
        "PT A memiliki 30% saham PT B dan 20% saham PT C. PT B memiliki 40% saham PT D. Pasangan mana yang memiliki hubungan istimewa karena kepemilikan?",
      options: [
        "A–B dan B–D saja",
        "A–B, B–D, dan A–D",
        "A–B, A–C, dan B–C",
        "Hanya A–B",
      ],
      answer: 0,
      explanation:
        "A–B (30%) dan B–D (40%) memenuhi batas 25%. Kepemilikan tidak langsung A di D = 30% × 40% = 12% sehingga tidak memenuhi; A–C (20%) juga di bawah 25%, dan B–C tidak dimiliki pihak yang sama minimal 25% di keduanya.",
      legal: "Pasal 18 ayat (4) UU PPh",
    },
    {
      id: "bdn-029",
      levels: B,
      section: "hubungan-istimewa",
      kind: "konsep",
      prompt:
        "Menurut PMK 172/2023, badan wajib menyelenggarakan dokumen induk dan dokumen lokal bila peredaran bruto tahun pajak sebelumnya melebihi…",
      options: ["Rp4,8 miliar", "Rp20 miliar", "Rp11 triliun", "Rp50 miliar"],
      answer: 3,
      explanation:
        "Ambang peredaran bruto Rp50 miliar. Rp20 miliar adalah ambang transaksi barang berwujud; Rp11 triliun adalah ambang laporan per negara (CbCR).",
      legal: "PMK 172/2023",
    },
    // penyusutan
    {
      id: "bdn-030",
      levels: B,
      section: "penyusutan",
      kind: "hitung",
      prompt:
        "Kendaraan kelompok 2 seharga Rp240 juta diperoleh April 2026 dan disusutkan garis lurus tanpa persetujuan penundaan. Berapa penyusutan fiskal 2026?",
      options: ["Rp30 juta", "Rp22,5 juta", "Rp20 juta", "Rp45 juta"],
      answer: 1,
      explanation:
        "Setahun = 12,5% × Rp240 juta = Rp30 juta. April–Desember 9 bulan: Rp30 juta × 9/12 = Rp22,5 juta. Rp20 juta keliru menghitung 8 bulan.",
      legal: "PMK 72/2023",
    },
    {
      id: "bdn-031",
      levels: B,
      section: "penyusutan",
      kind: "kasus",
      prompt:
        "Mesin kelompok 2 Rp400 juta diperoleh Oktober tahun 1 dan disusutkan saldo menurun 25%. Berapa penyusutan fiskal tahun 2?",
      options: ["Rp100 juta", "Rp87,5 juta", "Rp75 juta", "Rp93,75 juta"],
      answer: 3,
      explanation:
        "Tahun 1: 25% × Rp400 juta × 3/12 = Rp25 juta; nilai sisa buku Rp375 juta. Tahun 2: 25% × Rp375 juta = Rp93,75 juta. Rp87,5 juta keliru memakai penyusutan tahun 1 penuh.",
      legal: "PMK 72/2023",
    },
    {
      id: "bdn-032",
      levels: B,
      section: "penyusutan",
      kind: "hitung",
      prompt:
        "Harta kelompok 1 Rp80 juta disusutkan saldo menurun 50% dengan tahun-tahun penuh. Nilai sisa buku akhir tahun 3 Rp10 juta. Berapa penyusutan tahun 4?",
      options: ["Rp5 juta", "Rp10 juta", "Rp20 juta", "Nihil"],
      answer: 1,
      explanation:
        "Penyusutan: Rp40 juta, Rp20 juta, Rp10 juta. Pada tahun terakhir masa manfaat (tahun 4), sisa nilai buku Rp10 juta disusutkan sekaligus. Rp5 juta keliru menerapkan 50% lagi.",
      legal: "PMK 72/2023",
    },
    {
      id: "bdn-033",
      levels: B,
      section: "penyusutan",
      kind: "konsep",
      prompt: "Pernyataan mana yang benar tentang penyusutan bangunan?",
      options: [
        "Bangunan permanen boleh memakai saldo menurun 10%",
        "Bangunan tidak permanen bermasa manfaat 20 tahun",
        "Bangunan permanen disusutkan garis lurus 20 tahun, atau masa manfaat sebenarnya bila lebih dari 20 tahun",
        "Bangunan dapat disusutkan bersama tanahnya",
      ],
      answer: 2,
      explanation:
        "Bangunan hanya garis lurus. UU HPP dan PMK 72/2023 membolehkan masa manfaat sebenarnya di atas 20 tahun bagi bangunan permanen. Bangunan tidak permanen 10 tahun; tanah tidak disusutkan.",
      legal: "Pasal 11 ayat (6) UU PPh; PMK 72/2023",
    },
    {
      id: "bdn-034",
      levels: B,
      section: "penyusutan",
      kind: "konsep",
      prompt:
        "Pabrik dibangun sejak Maret dan selesai September, lalu mulai berproduksi November. Tanpa persetujuan DJP, penyusutan dimulai pada bulan…",
      options: ["Maret", "Januari tahun berikutnya", "November", "September"],
      answer: 3,
      explanation:
        "Harta dalam pengerjaan mulai disusutkan pada bulan selesainya pengerjaan. Bulan mulai menghasilkan (November) hanya dapat dipakai dengan persetujuan DJP.",
      legal: "Pasal 11 ayat (3) dan (4) UU PPh; PMK 72/2023",
    },
    // kompensasi
    {
      id: "bdn-035",
      levels: B,
      section: "kompensasi",
      kind: "kasus",
      prompt:
        "Awal 2026 badan memiliki sisa rugi fiskal 2021 Rp150 juta dan 2023 Rp200 juta (tanpa fasilitas). Laba fiskal 2026 sebelum kompensasi Rp250 juta. Berapa sisa rugi yang dibawa ke 2027?",
      options: [
        "Rp100 juta dari rugi 2023",
        "Rp100 juta dari rugi 2021",
        "Rp350 juta",
        "Nihil karena rugi 2021 hangus",
      ],
      answer: 0,
      explanation:
        "Rugi terlama dipakai dahulu: rugi 2021 (batas 2026) habis Rp150 juta, lalu rugi 2023 Rp100 juta. Sisa rugi 2023 Rp100 juta dapat dipakai sampai 2028.",
      legal: "Pasal 6 ayat (2) UU PPh",
    },
    {
      id: "bdn-036",
      levels: B,
      section: "kompensasi",
      kind: "konsep",
      prompt: "Rugi mana yang dapat dikompensasikan dengan penghasilan neto dalam negeri tahun berikutnya?",
      options: [
        "Rugi usaha cabang di luar negeri",
        "Rugi fiskal usaha dagang dalam negeri bertarif umum",
        "Rugi penjualan tanah yang dikenai PPh final",
        "Rugi sewa gedung yang dikenai PPh final",
      ],
      answer: 1,
      explanation:
        "Kompensasi Pasal 6 ayat (2) hanya untuk rugi fiskal dari penghasilan tarif umum dalam negeri. Rugi luar negeri dan rugi dari penghasilan final tidak dapat dikompensasikan.",
      legal: "Pasal 6 ayat (2) UU PPh",
    },
    {
      id: "bdn-037",
      levels: B,
      section: "kompensasi",
      kind: "hitung",
      prompt:
        "Laporan komersial menunjukkan rugi Rp100 juta. Koreksi positif Rp150 juta dan tidak ada koreksi negatif. Bagaimana hasil fiskalnya?",
      options: [
        "Rugi fiskal Rp100 juta yang dapat dikompensasikan",
        "Rugi fiskal Rp250 juta",
        "Laba fiskal Rp50 juta",
        "Laba fiskal Rp150 juta",
      ],
      answer: 2,
      explanation:
        "Laba fiskal = −Rp100 juta + Rp150 juta = Rp50 juta. Yang dikompensasikan adalah rugi fiskal, bukan rugi komersial.",
    },
    // tarif-31e
    {
      id: "bdn-038",
      levels: B,
      section: "tarif-31e",
      kind: "hitung",
      prompt:
        "PT Tbk dengan omzet Rp900 miliar (Pasal 31E tidak berlaku) memenuhi seluruh syarat penurunan tarif perseroan terbuka. PKP Rp10 miliar. Berapa PPh terutang?",
      options: ["Rp2,2 miliar", "Rp1,9 miliar", "Rp1,1 miliar", "Rp2,0 miliar"],
      answer: 1,
      explanation:
        "Tarif 22% − 3% = 19%; 19% × Rp10 miliar = Rp1,9 miliar. Pasal 31E tidak berlaku karena omzet di atas Rp50 miliar.",
      legal: "Pasal 17 ayat (2b) UU PPh; PP 30/2020",
    },
    {
      id: "bdn-039",
      levels: B,
      section: "tarif-31e",
      kind: "hitung",
      prompt:
        "Badan memenuhi Pasal 31E dengan omzet Rp24 miliar dan PKP Rp1 miliar. Berapa PKP yang mendapat tarif fasilitas?",
      options: ["Rp200 juta", "Rp480 juta", "Rp1 miliar", "Rp4,8 miliar"],
      answer: 0,
      explanation: "PKP fasilitas = Rp4,8 miliar ÷ Rp24 miliar × Rp1 miliar = Rp200 juta. Rp4,8 miliar adalah batas omzet, bukan PKP.",
      legal: "Pasal 31E UU PPh",
    },
    {
      id: "bdn-040",
      levels: B,
      section: "tarif-31e",
      kind: "hitung",
      prompt:
        "PT (tarif umum, tidak memakai PPh final) memenuhi Pasal 31E dengan omzet Rp4 miliar dan PKP Rp600 juta. Berapa PPh terutang?",
      options: ["Rp66 juta", "Rp44 juta", "Rp132 juta", "Rp120 juta"],
      answer: 0,
      explanation: "Omzet di bawah Rp4,8 miliar sehingga seluruh PKP mendapat tarif 11%: 11% × Rp600 juta = Rp66 juta.",
      legal: "Pasal 31E UU PPh",
    },
    {
      id: "bdn-041",
      levels: B,
      section: "tarif-31e",
      kind: "kasus",
      prompt:
        "Badan berhak atas Pasal 31E dengan omzet Rp16 miliar, PKP Rp2 miliar, dan kredit pajak Rp220 juta. Berapa PPh 29?",
      options: ["Rp220 juta", "Rp88 juta", "Rp374 juta", "Rp154 juta"],
      answer: 3,
      explanation:
        "PKP fasilitas = 4,8/16 × Rp2 miliar = Rp600 juta. PPh = 11% × Rp600 juta + 22% × Rp1,4 miliar = Rp66 juta + Rp308 juta = Rp374 juta. PPh 29 = Rp374 juta − Rp220 juta = Rp154 juta.",
      legal: "Pasal 31E dan 29 UU PPh",
    },
    {
      id: "bdn-042",
      levels: B,
      section: "tarif-31e",
      kind: "konsep",
      prompt: "Pernyataan mana yang benar tentang Pasal 31E?",
      options: [
        "Badan beromzet Rp52 miliar mendapat fasilitas atas bagian Rp4,8 miliar",
        "Fasilitas dihitung dengan mengalikan 11% dengan omzet Rp4,8 miliar",
        "Badan beromzet Rp52 miliar dikenai 22% atas seluruh PKP",
        "Penghasilan final ikut dihitung dalam PKP fasilitas",
      ],
      answer: 2,
      explanation:
        "Pasal 31E hanya untuk omzet sampai Rp50 miliar; di atasnya seluruh PKP 22%. Tarif dikalikan PKP, dan penghasilan final tidak termasuk PKP.",
      legal: "Pasal 31E UU PPh",
    },
    // pkp
    {
      id: "bdn-043",
      levels: B,
      section: "pkp",
      kind: "kasus",
      prompt:
        "Badan berhak Pasal 31E dengan peredaran bruto usaha Rp19,2 miliar. Laba komersial Rp1,3 miliar memuat bunga deposito Rp50 juta, sanksi pajak Rp30 juta, makan bersama seluruh pegawai Rp20 juta, dan penyusutan fiskal lebih besar Rp80 juta. Berapa PPh terutang?",
      options: ["Rp231 juta", "Rp264 juta", "Rp234,85 juta", "Rp132 juta"],
      answer: 0,
      explanation:
        "PKP = Rp1,3 miliar − Rp50 juta + Rp30 juta − Rp80 juta = Rp1,2 miliar (natura tidak dikoreksi). Fasilitas = 4,8/19,2 × Rp1,2 miliar = Rp300 juta. PPh = 11% × Rp300 juta + 22% × Rp900 juta = Rp33 juta + Rp198 juta = Rp231 juta. Rp234,85 juta keliru mengoreksi natura.",
      legal: "Pasal 6, 9, 17, 31E UU PPh; PMK 66/2023",
    },
    {
      id: "bdn-044",
      levels: B,
      section: "pkp",
      kind: "hitung",
      prompt: "Penghasilan neto fiskal setelah kompensasi Rp1.234.567.890. Berapa PKP yang dipakai menghitung pajak?",
      options: ["Rp1.234.568.000", "Rp1.234.567.890", "Rp1.234.500.000", "Rp1.234.567.000"],
      answer: 3,
      explanation: "PKP dibulatkan ke bawah dalam ribuan rupiah penuh: Rp1.234.567.000. Pembulatan ke atas atau ke ratusan ribu keliru.",
      legal: "Pasal 17 ayat (4) UU PPh",
    },
    {
      id: "bdn-045",
      levels: B,
      section: "pkp",
      kind: "kasus",
      prompt:
        "Staf pajak menghitung: laba fiskal Rp1 miliar − kredit PPh 23 Rp20 juta = PKP Rp980 juta, lalu × 22%. Badan beromzet Rp60 miliar (tanpa 31E). Apa kesalahannya?",
      options: [
        "Seharusnya memakai tarif 11% atas sebagian PKP",
        "Kredit PPh 23 seharusnya ditambahkan ke laba fiskal",
        "Kredit PPh 23 mengurangi PPh terutang, bukan PKP",
        "PPh 23 seharusnya dikoreksi negatif sebagai penghasilan final",
      ],
      answer: 2,
      explanation:
        "PKP = Rp1 miliar; PPh terutang Rp220 juta; dikurangi kredit Rp20 juta menjadi PPh 29 Rp200 juta. Pasal 31E tidak berlaku karena omzet di atas Rp50 miliar.",
    },
    // kredit
    {
      id: "bdn-046",
      levels: B,
      section: "kredit",
      kind: "kasus",
      prompt:
        "Badan beromzet Rp70 miliar (tanpa 31E) memiliki laba fiskal sebelum kompensasi Rp3,6 miliar, rugi fiskal yang masih berlaku Rp600 juta, dan total kredit nonfinal Rp525 juta. Berapa PPh 29?",
      options: ["Rp267 juta", "Rp660 juta", "Rp135 juta", "Rp792 juta"],
      answer: 2,
      explanation:
        "PKP = Rp3,6 miliar − Rp600 juta = Rp3 miliar; PPh terutang 22% = Rp660 juta; PPh 29 = Rp660 juta − Rp525 juta = Rp135 juta. Rp267 juta lupa mengurangkan kompensasi rugi.",
      source: "Latihan Soal UKP Tingkat B (v1)",
    },
    {
      id: "bdn-047",
      levels: B,
      section: "kredit",
      kind: "kasus",
      prompt:
        "PPh terutang Rp300 juta (tanpa 31E). Bukti yang dimiliki: PPh 22 Rp40 juta, PPh 23 Rp25 juta, PPh final 4(2) atas sewa Rp15 juta, dan PPh 25 Rp240 juta. Hasil SPT adalah…",
      options: ["Lebih bayar Rp20 juta", "Lebih bayar Rp5 juta", "Kurang bayar Rp20 juta", "Nihil"],
      answer: 1,
      explanation:
        "Kredit sah = Rp40 juta + Rp25 juta + Rp240 juta = Rp305 juta; lebih bayar Rp5 juta (PPh 28A). PPh final Rp15 juta tidak dapat dikreditkan; memasukkannya menghasilkan LB Rp20 juta yang keliru.",
      legal: "Pasal 28 dan 28A UU PPh",
    },
    {
      id: "bdn-048",
      levels: B,
      section: "kredit",
      kind: "konsep",
      prompt: "Batas kredit PPh 24 ditentukan dengan cara…",
      options: [
        "Seluruh pajak yang dibayar di luar negeri tanpa batas",
        "Rata-rata tarif seluruh negara sumber",
        "Tarif 22% atas penghasilan bruto luar negeri",
        "Per negara: terendah antara pajak luar negeri dan proporsi penghasilan luar negeri terhadap PKP × PPh terutang",
      ],
      answer: 3,
      explanation:
        "Pasal 24 memakai per country limitation: kredit tidak boleh melebihi pajak yang dibayar di luar negeri maupun bagian PPh Indonesia atas penghasilan dari negara itu.",
      legal: "Pasal 24 UU PPh",
    },
    // pph25
    {
      id: "bdn-049",
      levels: B,
      section: "pph25",
      kind: "kasus",
      prompt:
        "PKP tahun lalu Rp2,5 miliar termasuk keuntungan penjualan aset (tidak teratur) Rp500 juta; tanpa 31E (omzet Rp75 miliar). PPh 22 dan 23 tahun lalu Rp80 juta. Berapa angsuran PPh 25 per bulan?",
      options: ["Rp39,17 juta", "Rp36,67 juta", "Rp30 juta", "Rp45,83 juta"],
      answer: 2,
      explanation:
        "PPh atas penghasilan teratur = 22% × Rp2 miliar = Rp440 juta; dikurangi Rp80 juta = Rp360 juta; ÷ 12 = Rp30 juta. Rp39,17 juta keliru memakai PPh total Rp550 juta.",
      legal: "Pasal 25 UU PPh",
    },
    {
      id: "bdn-050",
      levels: B,
      section: "pph25",
      kind: "konsep",
      prompt: "Besarnya PPh 25 untuk bulan-bulan sebelum batas waktu penyampaian SPT Tahunan adalah…",
      options: [
        "Nihil sampai SPT disampaikan",
        "Sama dengan angsuran bulan terakhir tahun pajak lalu",
        "1/12 dari PPh terutang tahun berjalan yang diperkirakan",
        "0,5% dari omzet bulanan",
      ],
      answer: 1,
      explanation:
        "Pasal 25 ayat (2): angsuran sebelum batas SPT sama dengan angsuran bulan terakhir tahun lalu; setelah SPT disampaikan dihitung ulang dari SPT tersebut.",
      legal: "Pasal 25 ayat (2) UU PPh",
    },
    {
      id: "bdn-051",
      levels: B,
      section: "pph25",
      kind: "konsep",
      prompt: "Menurut PMK 81/2024, PPh 25 Masa Maret 2026 harus disetor paling lambat…",
      options: [
        "15 April 2026, dan bukti setor yang tervalidasi dianggap sebagai SPT Masa",
        "10 April 2026, dengan SPT Masa terpisah",
        "20 April 2026, bersamaan dengan SPT Masa PPh Unifikasi",
        "Akhir April 2026",
      ],
      answer: 0,
      explanation:
        "PMK 81/2024 menyeragamkan batas setor tanggal 15 bulan berikutnya. Untuk PPh 25, bukti penerimaan negara diperlakukan sebagai SPT Masa sehingga tidak perlu lapor terpisah.",
      legal: "PMK 81/2024",
    },
    // fasilitas
    {
      id: "bdn-052",
      levels: B,
      section: "fasilitas",
      kind: "konsep",
      prompt: "Perbedaan pokok tax allowance dan tax holiday adalah…",
      options: [
        "Keduanya membebaskan PPh badan sepenuhnya",
        "Tax allowance mengurangi PPh terutang; tax holiday mengurangi penghasilan neto",
        "Tax allowance mengurangi penghasilan neto; tax holiday mengurangi PPh badan terutang",
        "Tax holiday hanya untuk UMKM",
      ],
      answer: 2,
      explanation:
        "Tax allowance (PP 78/2019) memberi pengurangan penghasilan neto 30% investasi; tax holiday (PMK 130/2020 s.t.d.d. PMK 69/2024) mengurangi PPh badan terutang untuk industri pionir.",
      legal: "Pasal 31A UU PPh; PP 78/2019; PMK 130/2020 s.t.d.d. PMK 69/2024",
    },
    {
      id: "bdn-053",
      levels: B,
      section: "fasilitas",
      kind: "hitung",
      prompt: "Badan penerima tax allowance menanamkan modal Rp100 miliar. Berapa pengurangan penghasilan neto per tahun dan berapa lama?",
      options: [
        "Rp30 miliar sekaligus pada tahun pertama",
        "Rp6 miliar selama 5 tahun",
        "Rp10 miliar selama 3 tahun",
        "Rp5 miliar selama 6 tahun",
      ],
      answer: 3,
      explanation: "Total 30% × Rp100 miliar = Rp30 miliar, dibebankan 5% per tahun (Rp5 miliar) selama 6 tahun.",
      legal: "PP 78/2019",
    },
    {
      id: "bdn-054",
      levels: B,
      section: "fasilitas",
      kind: "hitung",
      prompt:
        "Badan mengeluarkan biaya program pemagangan vokasi yang memenuhi syarat Rp200 juta. Berapa pengurangan penghasilan bruto tambahan maksimal?",
      options: ["Rp400 juta", "Rp200 juta", "Rp100 juta", "Rp600 juta"],
      answer: 1,
      explanation:
        "Vokasi: tambahan maksimal 100% dari biaya, yaitu Rp200 juta, sehingga total pengurangan sampai Rp400 juta. Rp400 juta adalah total, bukan tambahan.",
      legal: "PP 45/2019; PMK 128/2019",
    },
    {
      id: "bdn-055",
      levels: B,
      section: "fasilitas",
      kind: "konsep",
      prompt: "Pengurangan penghasilan bruto tambahan maksimal untuk kegiatan litbang tertentu di Indonesia adalah…",
      options: ["200% (total 300%)", "60% dari investasi", "30% dari investasi", "100% (total 200%)"],
      answer: 0,
      explanation:
        "Litbang mendapat tambahan maksimal 200% sehingga total sampai 300%. 100% untuk vokasi; 60% untuk padat karya; 30% untuk tax allowance.",
      legal: "PP 45/2019; PMK 81/2024",
    },
    // spt
    {
      id: "bdn-056",
      levels: B,
      section: "spt",
      kind: "konsep",
      prompt: "Badan dengan tahun buku Juli 2025–Juni 2026 wajib menyampaikan SPT Tahunan paling lambat…",
      options: ["30 September 2026", "31 Oktober 2026", "30 April 2027", "31 Desember 2026"],
      answer: 1,
      explanation:
        "Batas SPT Tahunan badan adalah akhir bulan keempat setelah akhir tahun buku: Juni + 4 bulan = 31 Oktober 2026. 30 September memakai aturan 3 bulan orang pribadi.",
      legal: "Pasal 3 ayat (3) UU KUP",
    },
    {
      id: "bdn-057",
      levels: B,
      section: "spt",
      kind: "konsep",
      prompt: "Pernyataan mana yang benar tentang perpanjangan SPT Tahunan badan?",
      options: [
        "Perpanjangan paling lama 2 bulan dengan pemberitahuan dan penghitungan sementara; kurang bayar sementara dilunasi",
        "Perpanjangan paling lama 6 bulan dengan izin Kepala KPP",
        "Perpanjangan juga menunda pelunasan PPh 29",
        "Perpanjangan hanya untuk badan yang diaudit akuntan publik",
      ],
      answer: 0,
      explanation:
        "Pasal 3 ayat (4) dan (5) KUP: perpanjangan paling lama 2 bulan melalui pemberitahuan, disertai penghitungan sementara dan bukti pelunasan kekurangannya.",
      legal: "Pasal 3 ayat (4) dan (5) UU KUP",
    },
    {
      id: "bdn-058",
      levels: B,
      section: "spt",
      kind: "kasus",
      prompt:
        "PT (tahun buku kalender 2025) tanpa perpanjangan melunasi PPh 29 dan menyampaikan SPT pada 15 Mei 2026. Sanksi yang tepat adalah…",
      options: [
        "Denda Rp100 ribu saja",
        "Bunga saja karena SPT masih dalam bulan Mei",
        "Kenaikan 50% dari PPh 29",
        "Denda Rp1 juta atas keterlambatan SPT dan bunga 1 bulan atas keterlambatan pelunasan PPh 29",
      ],
      answer: 3,
      explanation:
        "Batas 30 April 2026 terlewati: denda Pasal 7 KUP untuk SPT Tahunan badan Rp1 juta, ditambah bunga Pasal 9 ayat (2b) untuk 1 bulan (bagian bulan dihitung penuh). Rp100 ribu adalah denda SPT Masa.",
      legal: "Pasal 7 dan 9 ayat (2b) UU KUP",
    },
  ],
  flashcards: [
    { front: "Mulai kewajiban subjektif BUT", back: "Saat menjalankan usaha/kegiatan melalui BUT", levels: B, section: "subjek" },
    { front: "4 kriteria unit pemerintah bukan subjek", back: "Dibentuk peraturan, dibiayai APBN/APBD, penerimaan masuk anggaran, diaudit APIP", levels: B, section: "subjek" },
    { front: "Force of attraction BUT", back: "Penghasilan kantor pusat dari barang/jasa sejenis dengan BUT dianggap penghasilan BUT", levels: B, section: "objek" },
    { front: "Biaya BUT ke kantor pusat yang dilarang", back: "Royalti, imbalan manajemen, bunga (kecuali bank)", levels: B, section: "objek" },
    { front: "Badan yang boleh PPh final 0,5% (PP 20/2026)", back: "Perseroan perorangan 1 orang dan koperasi", levels: B, section: "final" },
    { front: "Jangka PPh final koperasi (PP 20/2026)", back: "4 tahun pajak sejak terdaftar", levels: B, section: "final" },
    { front: "Jangka lama PP 55/2022 untuk PT / CV", back: "PT 3 tahun; CV, firma, BUMDes 4 tahun (berlaku untuk peralihan)", levels: B, section: "final" },
    { front: "Tarif final sewa bangunan / pengalihan tanah-bangunan", back: "10% / 2,5%", levels: B, section: "final" },
    { front: "Dividen DN diterima badan DN", back: "Bukan objek, tanpa syarat kepemilikan", levels: B, section: "bukan-objek" },
    { front: "Hibah dari pemegang saham", back: "Objek PPh (ada hubungan kepemilikan)", levels: B, section: "bukan-objek" },
    { front: "Natura pegawai bagi pemberi kerja (sejak HPP)", back: "Dapat dikurangkan sepanjang 3M (PMK 66/2023)", levels: B, section: "biaya" },
    { front: "Batas bingkisan hari raya dikecualikan", back: "Rp3 juta per pegawai per tahun", levels: B, section: "biaya" },
    { front: "Batas sumbangan PP 93/2010", back: "5% neto fiskal tahun sebelumnya; tidak boleh menimbulkan rugi", levels: B, section: "biaya" },
    { front: "Harga pengalihan antarpihak istimewa", back: "Harga yang seharusnya (wajar)", levels: B, section: "harta-persediaan" },
    { front: "Harga perolehan harta hibah yang dikecualikan", back: "Nilai sisa buku pemberi", levels: B, section: "harta-persediaan" },
    { front: "Ambang kepemilikan hubungan istimewa", back: "Paling rendah 25%", levels: B, section: "hubungan-istimewa" },
    { front: "Ambang dokumen induk/lokal", back: "Peredaran bruto tahun lalu > Rp50 miliar", levels: B, section: "hubungan-istimewa" },
    { front: "Tarif kelompok 1–4 garis lurus", back: "25%, 12,5%, 6,25%, 5%", levels: B, section: "penyusutan" },
    { front: "Tarif kelompok 1–4 saldo menurun", back: "50%, 25%, 12,5%, 10%", levels: B, section: "penyusutan" },
    { front: "Mulai penyusutan (umum)", back: "Bulan pengeluaran; harta dalam pengerjaan: bulan selesai", levels: B, section: "penyusutan" },
    { front: "Bangunan permanen / tidak permanen", back: "20 tahun 5% (atau masa sebenarnya > 20 tahun) / 10 tahun 10%", levels: B, section: "penyusutan" },
    { front: "Jangka kompensasi rugi umum", back: "5 tahun berikutnya, FIFO", levels: B, section: "kompensasi" },
    { front: "Rugi yang tidak dapat dikompensasikan", back: "Rugi luar negeri dan rugi penghasilan final", levels: B, section: "kompensasi" },
    { front: "Tarif umum badan / Tbk memenuhi syarat", back: "22% / 19%", levels: B, section: "tarif-31e" },
    { front: "Rumus PKP fasilitas Pasal 31E", back: "Rp4,8 miliar ÷ omzet × PKP, tarif 11%", levels: B, section: "tarif-31e" },
    { front: "Batas omzet Pasal 31E", back: "Sampai Rp50 miliar", levels: B, section: "tarif-31e" },
    { front: "Pembulatan PKP", back: "Ke bawah dalam ribuan rupiah penuh", levels: B, section: "pkp" },
    { front: "Kredit pajak PPh badan", back: "PPh 22, 23, 24 (dibatasi), 25; bukan PPh final", levels: B, section: "kredit" },
    { front: "Rumus PPh 25", back: "(PPh tahun lalu atas penghasilan teratur − PPh 21/22/23/24) ÷ 12", levels: B, section: "pph25" },
    { front: "Batas setor PPh 25 (PMK 81/2024)", back: "Tanggal 15 bulan berikutnya; bukti setor = SPT Masa", levels: B, section: "pph25" },
    { front: "Tax allowance", back: "30% investasi, 5% per tahun × 6 tahun; kompensasi rugi s.d. 10 tahun", levels: B, section: "fasilitas" },
    { front: "Super deduction vokasi / litbang", back: "Tambahan maks 100% / 200%", levels: B, section: "fasilitas" },
    { front: "Batas SPT Tahunan badan", back: "Akhir bulan ke-4 setelah tahun buku; perpanjangan 2 bulan", levels: B, section: "spt" },
    { front: "Denda telat SPT Tahunan badan", back: "Rp1 juta", levels: B, section: "spt" },
  ],
};

export default content;
