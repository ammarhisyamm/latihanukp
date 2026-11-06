import type { TopicContent } from "./types";

const content: TopicContent = {
  "summary": [
    {
      "id": "pemotong-21",
      "title": "Pemotong PPh 21 dan pengecualiannya",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "1",
        "b": "1 dan 2"
      },
      "points": [
        "Pemotong PPh 21: pemberi kerja (orang pribadi atau badan, termasuk BUT), instansi pemerintah, dana pensiun dan BPJS, pembayar honorarium/imbalan jasa kepada orang pribadi, serta penyelenggara kegiatan.",
        "Pada penggunaan tenaga alih daya, pemotong PPh 21 pegawai adalah perusahaan penyedia tenaga kerja yang membayar gajinya; pengguna jasa memotong PPh 23 atas imbalan jasa kepada penyedia.",
        "Tidak wajib memotong: kantor perwakilan negara asing dan organisasi internasional yang dikecualikan.",
        "Orang pribadi yang tidak menjalankan usaha atau pekerjaan bebas dan mempekerjakan orang semata-mata untuk pekerjaan rumah tangga tidak wajib memotong PPh 21.",
        "Pegawai lokal pada kedutaan asing tetap terutang PPh, tetapi menyetor sendiri melalui PPh 25 dan SPT Tahunan karena kedutaan bukan pemotong."
      ],
      "traps": [
        "Pengguna jasa outsourcing bukan pemotong PPh 21 pegawai penyedia.",
        "Rumah tangga tanpa usaha yang mempekerjakan asisten rumah tangga tidak wajib memotong."
      ],
      "legal": "Pasal 21 ayat (1) UU PPh; PMK 168/2023."
    },
    {
      "id": "penerima-21",
      "title": "Penerima penghasilan yang dipotong PPh 21 dan pengecualiannya",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "2",
        "b": "1 dan 2"
      },
      "points": [
        "Penerima PPh 21 adalah orang pribadi SPDN: pegawai tetap, pegawai tidak tetap/tenaga kerja lepas, penerima pensiun, bukan pegawai, anggota dewan komisaris/pengawas, mantan pegawai, peserta kegiatan, dan peserta program pensiun.",
        "Bukan pegawai antara lain tenaga ahli (dokter, pengacara, konsultan), pemain musik, olahragawan, agen, dan petugas penjaja yang dibayar per jasa.",
        "Dikecualikan: pejabat perwakilan diplomatik/konsulat asing yang bukan WNI dengan asas timbal balik, serta pejabat organisasi internasional yang bukan WNI dan tidak berusaha di Indonesia.",
        "Penerima SPLN, termasuk pegawai asing yang tidak memenuhi kriteria SPDN, dipotong PPh 26, bukan PPh 21."
      ],
      "traps": [
        "Pegawai WNA yang menjadi SPDN dipotong PPh 21, bukan PPh 26.",
        "Dokter yang menerima bagi hasil dari rumah sakit tanpa hubungan kerja adalah bukan pegawai."
      ],
      "legal": "Pasal 21 dan Pasal 26 UU PPh; PMK 168/2023."
    },
    {
      "id": "objek-21",
      "title": "Objek pemotongan PPh 21 dan pengecualiannya",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "3",
        "b": "3"
      },
      "points": [
        "Objek PPh 21: gaji, upah, tunjangan, lembur, honorarium, bonus, THR, tantiem, jasa produksi, uang pensiun, pesangon, dan imbalan sejenis, termasuk natura yang bukan pengecualian.",
        "Premi asuransi kecelakaan kerja, kematian, dan kesehatan (termasuk BPJS Kesehatan) yang dibayar pemberi kerja menambah penghasilan bruto pegawai.",
        "Iuran pensiun dan JHT yang dibayar pemberi kerja kepada dana pensiun atau BPJS Ketenagakerjaan bukan penghasilan bruto pegawai.",
        "Pembayaran klaim dari perusahaan asuransi, zakat yang diterima penerima yang berhak, dan beasiswa yang memenuhi syarat dikecualikan dari objek PPh 21.",
        "Tunjangan PPh (gross-up) yang dibayar pemberi kerja termasuk penghasilan bruto."
      ],
      "table": {
        "head": [
          "Komponen dibayar pemberi kerja",
          "Masuk bruto?"
        ],
        "rows": [
          [
            "Premi JKK dan JKM",
            "Ya"
          ],
          [
            "BPJS Kesehatan bagian pemberi kerja",
            "Ya"
          ],
          [
            "Iuran JHT dan JP bagian pemberi kerja",
            "Tidak"
          ],
          [
            "Tunjangan PPh",
            "Ya"
          ]
        ]
      },
      "traps": [
        "Iuran JHT bagian pemberi kerja tidak ditambahkan ke bruto, berbeda dengan JKK/JKM.",
        "Premi asuransi dibayar pemberi kerja adalah objek, tetapi klaim asuransi yang diterima bukan objek."
      ],
      "legal": "Pasal 4 ayat (1) huruf a dan ayat (3), Pasal 21 UU PPh; PMK 168/2023."
    },
    {
      "id": "natura",
      "title": "Natura dan kenikmatan (PMK 66/2023)",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "4",
        "b": "4"
      },
      "points": [
        "Natura dan kenikmatan yang diterima pegawai adalah objek PPh 21 kecuali dikecualikan; nilainya nilai pasar untuk natura dan biaya yang dikeluarkan pemberi untuk kenikmatan.",
        "Dikecualikan tanpa batas nilai: makanan, bahan makanan, dan minuman bagi seluruh pegawai; natura di daerah tertentu; natura yang wajib untuk keamanan dan kesehatan kerja; natura dari APBN/APBD.",
        "Bingkisan hari raya keagamaan yang diterima seluruh pegawai dikecualikan tanpa batas nilai; bingkisan lain dibatasi Rp3 juta per pegawai per tahun.",
        "Fasilitas olahraga dikecualikan sampai Rp1,5 juta per pegawai per tahun, kecuali golf, pacuan kuda, perahu motor, terbang layang, dan olahraga otomotif.",
        "Tempat tinggal komunal (mes, asrama) dikecualikan; tempat tinggal individual dibatasi Rp2 juta per pegawai per bulan.",
        "Peralatan dan fasilitas kerja seperti laptop, ponsel, pulsa, dan internet yang menunjang pekerjaan dikecualikan.",
        "Bila nilai melewati batas, hanya selisih di atas batas yang menjadi objek."
      ],
      "table": {
        "head": [
          "Jenis",
          "Batas pengecualian"
        ],
        "rows": [
          [
            "Bingkisan hari raya keagamaan (seluruh pegawai)",
            "Tanpa batas"
          ],
          [
            "Bingkisan lain",
            "Rp3 juta/pegawai/tahun"
          ],
          [
            "Fasilitas olahraga (bukan golf dsb.)",
            "Rp1,5 juta/pegawai/tahun"
          ],
          [
            "Tempat tinggal individual",
            "Rp2 juta/pegawai/bulan"
          ]
        ]
      },
      "traps": [
        "Keanggotaan golf tidak termasuk fasilitas olahraga yang dikecualikan.",
        "Kelebihan dari batas, bukan seluruh nilai, yang menjadi objek."
      ],
      "legal": "Pasal 4 ayat (1) huruf a dan ayat (3) huruf d UU PPh; PMK 66/2023."
    },
    {
      "id": "pengurang",
      "title": "Pengurangan penghasilan bruto",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "5",
        "b": "5 dan 6"
      },
      "points": [
        "Biaya jabatan pegawai tetap 5% dari bruto, maksimal Rp500 ribu per bulan atau Rp6 juta per tahun; untuk masa kerja kurang dari setahun batasnya Rp500 ribu × jumlah bulan.",
        "Biaya pensiun bagi penerima pensiun 5% dari bruto, maksimal Rp200 ribu per bulan atau Rp2,4 juta per tahun.",
        "Iuran pensiun, THT, atau JHT yang dibayar pegawai kepada dana pensiun yang disahkan OJK atau BPJS Ketenagakerjaan boleh dikurangkan.",
        "Zakat atau sumbangan keagamaan wajib yang dibayar melalui pemberi kerja kepada badan resmi boleh dikurangkan.",
        "Pada TER masa biasa, pengurang tidak dipakai; pengurang dihitung pada penghitungan setahun di masa pajak terakhir.",
        "Iuran BPJS Kesehatan yang dibayar pegawai bukan pengurang penghasilan bruto."
      ],
      "table": {
        "head": [
          "Pengurang",
          "Tarif",
          "Batas"
        ],
        "rows": [
          [
            "Biaya jabatan",
            "5%",
            "Rp500 rb/bln; Rp6 jt/th"
          ],
          [
            "Biaya pensiun",
            "5%",
            "Rp200 rb/bln; Rp2,4 jt/th"
          ],
          [
            "Iuran pensiun/JHT pegawai",
            "Sesuai iuran",
            "—"
          ]
        ]
      },
      "traps": [
        "Biaya jabatan dan biaya pensiun memiliki batas berbeda.",
        "Pegawai yang bekerja 10 bulan dibatasi Rp5 juta, bukan Rp6 juta."
      ],
      "legal": "Pasal 21 UU PPh; PMK 168/2023."
    },
    {
      "id": "tarif-ter",
      "title": "Tarif, dasar pengenaan, dan penerapan TER",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "6",
        "b": "5 dan 6"
      },
      "points": [
        "TER bulanan dipakai untuk masa Januari sampai sebelum masa pajak terakhir: PPh 21 = TER × penghasilan bruto bulan itu.",
        "Kategori TER: A untuk TK/0, TK/1, K/0; B untuk TK/2, TK/3, K/1, K/2; C untuk K/3.",
        "TER harian bagi pegawai tidak tetap: penghasilan sehari sampai Rp450 ribu 0%; di atas Rp450 ribu sampai Rp2,5 juta 0,5%; di atas Rp2,5 juta memakai tarif Pasal 17.",
        "Bonus, THR, dan penghasilan tidak teratur digabung dengan gaji pada masa pembayaran, lalu TER dipilih dari bruto gabungan.",
        "Penerima yang tidak memiliki NPWP dipotong 20% lebih tinggi daripada tarif normal.",
        "Masa pajak terakhir memakai tarif Pasal 17 atas PKP setahun atau bagian tahun."
      ],
      "table": {
        "head": [
          "Kategori",
          "Status PTKP"
        ],
        "rows": [
          [
            "A",
            "TK/0, TK/1, K/0"
          ],
          [
            "B",
            "TK/2, TK/3, K/1, K/2"
          ],
          [
            "C",
            "K/3"
          ]
        ]
      },
      "traps": [
        "K/1 masuk kategori B, bukan A.",
        "THR tidak dikenai TER terpisah; bruto bulan itu yang dipakai."
      ],
      "legal": "Pasal 17 dan 21 UU PPh; PP 58/2023; PMK 168/2023."
    },
    {
      "id": "hitung-21",
      "title": "Penghitungan PPh 21 dalam tahun berjalan (huruf a sampai g)",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "7",
        "b": "7"
      },
      "points": [
        "Pegawai tetap dan pensiunan berkala: TER bulanan pada masa biasa; masa terakhir = PPh setahun (tarif Pasal 17 atas PKP) − PPh yang sudah dipotong.",
        "Masa pajak terakhir adalah Desember atau masa saat pegawai berhenti bekerja.",
        "Pegawai tidak tetap: TER bulanan bila dibayar bulanan, TER harian bila dibayar harian, mingguan, satuan, atau borongan.",
        "Anggota dewan komisaris/pengawas yang tidak merangkap pegawai tetap: TER bulanan × bruto.",
        "Bukan pegawai: tarif Pasal 17 × 50% penghasilan bruto.",
        "Peserta kegiatan, peserta program pensiun yang menarik dananya, dan mantan pegawai yang menerima jasa produksi, tantiem, atau bonus: tarif Pasal 17 × 100% bruto."
      ],
      "table": {
        "head": [
          "Penerima",
          "Dasar",
          "Tarif"
        ],
        "rows": [
          [
            "Pegawai tetap (masa biasa)",
            "Bruto bulanan",
            "TER bulanan"
          ],
          [
            "Dewan komisaris tidak merangkap",
            "Bruto",
            "TER bulanan"
          ],
          [
            "Bukan pegawai",
            "50% bruto",
            "Pasal 17"
          ],
          [
            "Peserta kegiatan / mantan pegawai",
            "100% bruto",
            "Pasal 17"
          ]
        ]
      },
      "traps": [
        "Aturan 50% bruto hanya untuk bukan pegawai, tidak untuk peserta kegiatan atau mantan pegawai.",
        "Masa terakhir memakai rekonsiliasi tahunan, bukan TER Desember."
      ],
      "legal": "Pasal 21 UU PPh; PP 58/2023; PMK 168/2023."
    },
    {
      "id": "hak-kewajiban",
      "title": "Hak dan kewajiban pemotong serta penerima penghasilan",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "8",
        "b": "8"
      },
      "points": [
        "Pemotong wajib menghitung, memotong, menyetor, dan melaporkan PPh 21/26 serta memberikan bukti potong kepada penerima.",
        "Bukti potong tahunan (A1) bagi pegawai tetap diberikan paling lambat 1 bulan setelah masa pajak terakhir.",
        "Penerima wajib memberikan NPWP/NIK dan menyampaikan status PTKP awal tahun kepada pemotong.",
        "Penerima berhak meminta bukti potong dan mengkreditkan PPh 21 nonfinal dalam SPT Tahunan; PPh 21 final tidak dikreditkan (butir A 9).",
        "Penerima tanpa NPWP dipotong 20% lebih tinggi (Pasal 21 ayat (5a)).",
        "Pemotong tidak menyampaikan SPT Tahunan pegawainya; itu kewajiban pegawai sendiri."
      ],
      "traps": [
        "PPh 21 final atas pesangon tidak dapat dikreditkan.",
        "Kewajiban menyampaikan SPT Tahunan tetap pada pegawai."
      ],
      "legal": "Pasal 21 ayat (5a) UU PPh; Pasal 9 UU KUP; PMK 81/2024; PMK 168/2023."
    },
    {
      "id": "final-21",
      "title": "PPh 21 final atas pesangon dan JHT/THT/pensiun sekaligus",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "10",
        "b": "9"
      },
      "points": [
        "Uang pesangon: 0% sampai Rp50 juta; 5% di atas Rp50 juta–Rp100 juta; 15% di atas Rp100 juta–Rp500 juta; 25% di atas Rp500 juta.",
        "Uang manfaat pensiun, THT, atau JHT yang dibayar sekaligus: 0% sampai Rp50 juta; 5% di atas Rp50 juta.",
        "PPh 21 final dihitung atas jumlah bruto tanpa pengurang dan tanpa PTKP.",
        "Uang pensiun bulanan bukan PPh 21 final; ia memakai TER dan rekonsiliasi akhir tahun.",
        "Penghasilan yang dikenai PPh 21 final tidak digabung dalam PKP tahunan dan pajaknya tidak dikreditkan."
      ],
      "table": {
        "head": [
          "Lapisan",
          "Pesangon",
          "JHT/THT/pensiun sekaligus"
        ],
        "rows": [
          [
            "s.d. Rp50 juta",
            "0%",
            "0%"
          ],
          [
            "> Rp50–100 juta",
            "5%",
            "5%"
          ],
          [
            "> Rp100–500 juta",
            "15%",
            "5%"
          ],
          [
            "> Rp500 juta",
            "25%",
            "5%"
          ]
        ]
      },
      "traps": [
        "Jangan memakai tarif Pasal 17 untuk pesangon sekaligus.",
        "JHT sekaligus hanya memiliki dua lapisan (0% dan 5%)."
      ],
      "legal": "Pasal 21 ayat (1) dan Pasal 4 ayat (2) UU PPh; PP 68/2009; PMK 16/2010."
    },
    {
      "id": "tata-cara-21",
      "title": "Tata cara pemotongan, penyetoran, dan pelaporan PPh 21/26",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "11",
        "b": "10 dan 11"
      },
      "points": [
        "PPh 21/26 yang dipotong disetor paling lambat tanggal 15 bulan berikutnya setelah masa pajak berakhir.",
        "SPT Masa PPh 21/26 disampaikan paling lambat 20 hari setelah masa pajak berakhir melalui Coretax.",
        "Bila batas setor atau lapor jatuh pada hari libur, batasnya bergeser ke hari kerja berikutnya.",
        "Bukti potong di Coretax antara lain BPMP (bulanan pegawai tetap), BP21 (selain pegawai tetap), BP26, dan BPA1 (tahunan).",
        "PPh 21 dan PPh 26 atas penghasilan pekerjaan dan jasa orang pribadi dilaporkan dalam SPT Masa PPh 21/26, terpisah dari SPT Masa PPh Unifikasi."
      ],
      "table": {
        "head": [
          "Kewajiban",
          "Batas"
        ],
        "rows": [
          [
            "Setor PPh 21/26",
            "Tanggal 15 bulan berikutnya"
          ],
          [
            "Lapor SPT Masa PPh 21/26",
            "20 hari setelah masa berakhir"
          ],
          [
            "Bukti potong A1",
            "1 bulan setelah masa pajak terakhir"
          ]
        ]
      },
      "traps": [
        "Batas lapor bukan tanggal 15; tanggal 15 untuk setor.",
        "PPh 21 tidak dilaporkan dalam SPT Masa PPh Unifikasi."
      ],
      "legal": "PMK 81/2024; PER-11/PJ/2025."
    },
    {
      "id": "peta-pasal",
      "title": "Pengertian pemotongan dan pemungutan secara umum (termasuk PPh 15)",
      "levels": [
        "a"
      ],
      "bookletItem": {
        "a": "12"
      },
      "points": [
        "Pemotongan dilakukan oleh pihak yang membayar penghasilan (PPh 21, 23, 26, Pasal 4 ayat (2)); pemungutan dilakukan pihak tertentu atas transaksi penyerahan barang atau impor (PPh 22).",
        "PPh 21 untuk imbalan pekerjaan/jasa orang pribadi SPDN, PPh 23 untuk modal dan jasa tertentu kepada WPDN/BUT, PPh 26 untuk penghasilan WPLN.",
        "PPh 15 memakai norma penghitungan khusus: pelayaran dalam negeri 1,2%, pelayaran/penerbangan luar negeri 2,64%, carter penerbangan dalam negeri 1,8% dari bruto, bersifat final.",
        "PPh Pasal 4 ayat (2) dan PPh 15 bersifat final; PPh 21 nonfinal, 22, dan 23 dapat dikreditkan oleh penerima dalam negeri.",
        "PPh 26 pada umumnya final bagi WPLN, kecuali penghasilan yang terkait BUT."
      ],
      "table": {
        "head": [
          "PPh 15",
          "Tarif dari bruto"
        ],
        "rows": [
          [
            "Pelayaran dalam negeri",
            "1,2%"
          ],
          [
            "Pelayaran/penerbangan luar negeri",
            "2,64%"
          ],
          [
            "Carter penerbangan dalam negeri",
            "1,8%"
          ]
        ]
      },
      "traps": [
        "PPh 22 adalah pungutan, bukan potongan.",
        "PPh 15 pelayaran dalam negeri 1,2%, jangan tertukar dengan 2,64% untuk luar negeri."
      ],
      "legal": "Pasal 4 ayat (2), 15, 21, 22, 23, 26 UU PPh."
    },
    {
      "id": "pph22",
      "title": "PPh 22: pemungut, objek, tarif, pengecualian, dan PPh 22 final",
      "levels": [
        "b"
      ],
      "bookletItem": {
        "b": "12–14"
      },
      "points": [
        "PMK 51/2025 (berlaku 1 Agustus 2025) mengatur PPh 22 impor: barang Lampiran A 10%, Lampiran B 7,5%, Lampiran C 0,5%, emas batangan 0,25%, dengan atau tanpa API.",
        "Barang impor lainnya: 2,5% bila memakai API dan 7,5% tanpa API dari nilai impor; barang tidak dikuasai 7,5% dari harga lelang.",
        "Nilai impor = CIF + bea masuk + pungutan kepabeanan lain yang menjadi dasar; pemungutnya DJBC.",
        "Instansi pemerintah dan BUMN tertentu memungut 1,5% dari harga pembelian tidak termasuk PPN.",
        "Industri kepada distributor: semen 0,25%, kertas 0,1%, baja 0,3%, kendaraan bermotor 0,45%, obat 0,3%; BBM ke SPBU Pertamina 0,25% (final).",
        "Barang sangat mewah dipungut 5% dari harga jual, misalnya mobil penumpang di atas Rp2 miliar atau di atas 3.000 cc.",
        "Dikecualikan antara lain pembayaran listrik, air minum, telepon, dan BBM oleh instansi pemerintah, serta impor dengan SKB; sejak PMK 51/2025 impor emas batangan untuk perhiasan ekspor tidak lagi dikecualikan.",
        "Pemungutan atas penjualan BBM, BBG, dan pelumas kepada penyalur/agen bersifat final; pemungutan lain umumnya kredit pajak."
      ],
      "table": {
        "head": [
          "Objek impor (PMK 51/2025)",
          "Tarif"
        ],
        "rows": [
          [
            "Lampiran A",
            "10%"
          ],
          [
            "Lampiran B",
            "7,5%"
          ],
          [
            "Lampiran C",
            "0,5%"
          ],
          [
            "Emas batangan",
            "0,25%"
          ],
          [
            "Barang lain dengan API / tanpa API",
            "2,5% / 7,5%"
          ]
        ]
      },
      "traps": [
        "Tarif Lampiran A, B, C, dan emas batangan tidak membedakan API.",
        "CIF saja belum merupakan nilai impor.",
        "Pemungut instansi pemerintah memakai harga tidak termasuk PPN."
      ],
      "legal": "Pasal 22 UU PPh; PMK 51/2025; PMK 48/2023 s.t.d.t.d. PMK 52/2025; PMK 253/2008 s.t.d.t.d. PMK 92/2019."
    },
    {
      "id": "pph23",
      "title": "Objek, pemotong, dasar pemotongan, dan tarif PPh 23",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "13",
        "b": "15 dan 16"
      },
      "points": [
        "Tarif 15% dari bruto atas dividen, bunga (termasuk premium, diskonto, imbalan jaminan pengembalian utang), royalti, serta hadiah dan penghargaan selain yang dipotong PPh 21.",
        "Tarif 2% dari bruto atas sewa dan penghasilan lain sehubungan penggunaan harta selain tanah/bangunan, serta jasa teknik, manajemen, konsultan, dan jasa lain dalam PMK 141/2015.",
        "Dasar pemotongan adalah jumlah bruto tidak termasuk PPN.",
        "Pemotong: badan pemerintah, SPDN badan, penyelenggara kegiatan, BUT, perwakilan perusahaan luar negeri, dan orang pribadi tertentu yang ditunjuk DJP.",
        "Penerima tanpa NPWP dipotong 100% lebih tinggi (2% menjadi 4%, 15% menjadi 30%)."
      ],
      "table": {
        "head": [
          "Objek",
          "Tarif"
        ],
        "rows": [
          [
            "Dividen, bunga, royalti, hadiah",
            "15%"
          ],
          [
            "Sewa harta selain tanah/bangunan",
            "2%"
          ],
          [
            "Jasa teknik, manajemen, konsultan, jasa lain",
            "2%"
          ],
          [
            "Tanpa NPWP",
            "Tarif × 200%"
          ]
        ]
      },
      "traps": [
        "Bunga pinjaman dari perusahaan non-bank dipotong 15%, bukan 2%.",
        "PPN tidak ikut menjadi dasar pemotongan."
      ],
      "legal": "Pasal 23 UU PPh; PMK 141/2015."
    },
    {
      "id": "pph23-kecuali",
      "title": "Pengecualian dari pemotongan PPh 23",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "14",
        "b": "15 dan 16"
      },
      "points": [
        "Tidak dipotong PPh 23: penghasilan yang dibayar kepada bank, sewa guna usaha dengan hak opsi, dan dividen yang dikecualikan Pasal 4 ayat (3).",
        "Bagian laba anggota persekutuan/firma/CV dan SHU koperasi kepada anggotanya dikecualikan dari PPh 23 (SHU anggota orang pribadi dikenai PPh final tersendiri).",
        "Bunga atau imbalan kepada badan usaha jasa keuangan yang berfungsi sebagai penyalur pinjaman atau pembiayaan dikecualikan (PMK 251/2008).",
        "Penerima yang memiliki surat keterangan PP 55/2022 tidak dipotong PPh 23; pemotong memotong PPh final 0,5% atas imbalan tersebut.",
        "Sewa tanah dan/atau bangunan tidak dipotong PPh 23 karena masuk PPh Pasal 4 ayat (2)."
      ],
      "traps": [
        "Sewa mesin biasa tetap PPh 23; yang dikecualikan sewa guna usaha dengan hak opsi.",
        "Surat keterangan PP 55 mengganti PPh 23 dengan PPh final 0,5%, bukan membebaskan seluruhnya."
      ],
      "legal": "Pasal 23 ayat (4) UU PPh; PMK 251/PMK.03/2008; PP 55/2022 s.t.d.d. PP 20/2026; PMK 164/2023."
    },
    {
      "id": "pph42",
      "title": "Objek, pemotong, dasar pemotongan, dan tarif PPh Pasal 4 ayat (2)",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "15",
        "b": "17 dan 18"
      },
      "points": [
        "Sewa tanah dan/atau bangunan: 10% dari jumlah bruto nilai persewaan, termasuk service charge yang menjadi satu kesatuan.",
        "Pengalihan hak atas tanah/bangunan: 2,5% dari bruto nilai pengalihan; 1% untuk rumah sederhana/rusun sederhana oleh pengembang; 0% kepada pemerintah atau BUMN penugasan.",
        "Jasa konstruksi (PP 9/2022): pelaksana kualifikasi kecil/perseorangan bersertifikat 1,75%; tanpa sertifikat 4%; kualifikasi menengah/besar 2,65%; konsultansi bersertifikat 3,5%, tanpa sertifikat 6%.",
        "Bunga deposito/tabungan 20%, hadiah undian 25%, dividen orang pribadi yang tidak diinvestasikan 10%, transaksi saham di bursa 0,1%.",
        "Pemotong PPh 4 ayat (2) adalah penyewa/pengguna jasa/pembayar yang menjadi pemotong; bila tidak, penerima menyetor sendiri."
      ],
      "table": {
        "head": [
          "Objek",
          "Tarif"
        ],
        "rows": [
          [
            "Sewa tanah/bangunan",
            "10%"
          ],
          [
            "Pengalihan tanah/bangunan",
            "2,5% (1% / 0% tertentu)"
          ],
          [
            "Konstruksi kecil bersertifikat / tanpa sertifikat",
            "1,75% / 4%"
          ],
          [
            "Bunga deposito",
            "20%"
          ],
          [
            "Hadiah undian",
            "25%"
          ]
        ]
      },
      "traps": [
        "Kata sewa belum menentukan pasal: gudang/lahan PPh 4 ayat (2), mesin/forklift PPh 23.",
        "Penyedia konstruksi tanpa sertifikat 4%, bukan 1,75%."
      ],
      "legal": "Pasal 4 ayat (2) UU PPh; PP 34/2017; PP 34/2016; PP 9/2022; PP 131/2000 s.t.d.d. PP 123/2015."
    },
    {
      "id": "pph42-kecuali",
      "title": "Pengecualian dari pemotongan PPh Pasal 4 ayat (2)",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "16",
        "b": "17 dan 18"
      },
      "points": [
        "Bunga deposito dan tabungan yang jumlahnya tidak melebihi Rp7,5 juta dan bukan hasil pemecahan dikecualikan; bunga yang diterima bank dan dana pensiun yang disahkan juga dikecualikan.",
        "Pengalihan tanah/bangunan dikecualikan bagi orang pribadi berpenghasilan di bawah PTKP yang mengalihkan dengan nilai kurang dari Rp60 juta dan bukan pemecahan, dengan SKB.",
        "Pengalihan kepada pemerintah untuk kepentingan umum yang memerlukan persyaratan khusus dikecualikan.",
        "Hibah kepada keluarga sedarah garis lurus satu derajat, badan keagamaan, pendidikan, sosial, koperasi, atau pengusaha kecil tanpa hubungan usaha, serta pengalihan karena warisan, dikecualikan dengan SKB.",
        "Jual beli dengan saudara kandung tidak termasuk pengecualian."
      ],
      "traps": [
        "Ambang Rp7,5 juta untuk bunga deposito/tabungan; di atasnya seluruh bunga dipotong 20%.",
        "Pengecualian pengalihan tanah memerlukan SKB, tidak otomatis."
      ],
      "legal": "Pasal 4 ayat (2) UU PPh; PP 34/2016; PP 131/2000 s.t.d.d. PP 123/2015."
    },
    {
      "id": "pph42-tata-cara",
      "title": "Tata cara pemotongan, penyetoran, dan pelaporan PPh Pasal 4 ayat (2)",
      "levels": [
        "a"
      ],
      "bookletItem": {
        "a": "17"
      },
      "points": [
        "PPh 4 ayat (2) yang dipotong disetor paling lambat tanggal 15 bulan berikutnya dan dilaporkan dalam SPT Masa PPh Unifikasi paling lambat 20 hari setelah masa berakhir.",
        "Bila penyewa bukan pemotong (misalnya orang pribadi biasa), pemilik tanah/bangunan menyetor sendiri PPh final paling lambat tanggal 15 bulan berikutnya setelah sewa diterima.",
        "PPh atas pengalihan tanah/bangunan dibayar sendiri sebelum akta, keputusan, atau perjanjian ditandatangani pejabat berwenang (PPAT/notaris).",
        "Pemotong menerbitkan bukti potong unifikasi (BPPU) kepada penerima."
      ],
      "traps": [
        "PPh pengalihan tanah tidak dibayar setelah akta, tetapi sebelum akta ditandatangani.",
        "PPh 4 ayat (2) dilaporkan di SPT Masa PPh Unifikasi, bukan SPT Masa PPh 21/26."
      ],
      "legal": "PMK 81/2024; PP 34/2016."
    },
    {
      "id": "pph26",
      "title": "Objek, pemotong, dasar pemotongan, dan tarif PPh 26",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "18",
        "b": "19 dan 20"
      },
      "points": [
        "Tarif 20% dari bruto atas dividen, bunga, royalti, sewa, imbalan jasa dan pekerjaan, hadiah, pensiun, premi swap yang dibayar kepada WPLN selain BUT.",
        "Premi asuransi ke luar negeri: 20% × perkiraan neto, yaitu 50% premi bila dibayar tertanggung, 10% bila oleh perusahaan asuransi, 5% bila oleh perusahaan reasuransi.",
        "PKP BUT setelah dikurangi PPh dikenai PPh 26 sebesar 20% (branch profit tax).",
        "Tarif P3B dapat dipakai bila WPLN bukan penyalahguna P3B dan menyerahkan Formulir DGT yang sah; sejak PMK 112/2025 formatnya menggantikan PER-25/PJ/2018, berlaku paling lama 12 bulan.",
        "Pemotong PPh 26: badan pemerintah, SPDN, penyelenggara kegiatan, BUT, atau perwakilan perusahaan luar negeri lainnya."
      ],
      "table": {
        "head": [
          "Objek",
          "Dasar",
          "Tarif"
        ],
        "rows": [
          [
            "Dividen, bunga, royalti, jasa",
            "Bruto",
            "20%"
          ],
          [
            "Premi asuransi oleh perusahaan asuransi DN",
            "10% premi",
            "20%"
          ],
          [
            "Branch profit tax",
            "PKP − PPh",
            "20%"
          ]
        ]
      },
      "traps": [
        "Royalti ke WPDN 15% (PPh 23), ke WPLN 20% (PPh 26).",
        "Branch profit tax dihitung dari laba setelah PPh, bukan dari PKP."
      ],
      "legal": "Pasal 26 UU PPh; PER-25/PJ/2018; PMK 112/2025."
    },
    {
      "id": "pph26-kecuali",
      "title": "Pengecualian dari pemotongan PPh 26",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "19",
        "b": "19 dan 20"
      },
      "points": [
        "Branch profit tax tidak dikenakan bila laba BUT ditanamkan kembali di Indonesia (PMK 14/2011).",
        "Bentuk penanaman kembali: penyertaan modal pada perusahaan baru atau yang sudah berdiri di Indonesia sebagai pendiri/peserta, pembelian aktiva tetap, atau investasi aktiva tidak berwujud oleh BUT.",
        "Penanaman dilakukan dalam tahun pajak berjalan atau paling lambat tahun pajak berikutnya.",
        "Investasi tidak dialihkan paling sedikit 2 tahun setelah perusahaan tempat investasi atau aktiva mulai berproduksi komersial.",
        "Pembayaran kepada BUT di Indonesia bukan objek PPh 26; atas jasa dan modal, BUT dipotong PPh 23."
      ],
      "traps": [
        "Laba 2026 yang baru ditanam kembali pada 2028 sudah melewati batas.",
        "BUT diperlakukan seperti WPDN untuk pemotongan, sehingga dipotong PPh 23 bukan PPh 26."
      ],
      "legal": "Pasal 26 ayat (4) UU PPh; PMK 14/2011; PER-25/PJ/2018."
    }
  ],
  "questions": [
    {
      "id": "pp-001",
      "levels": [
        "a",
        "b"
      ],
      "section": "pemotong-21",
      "kind": "konsep",
      "prompt": "Manakah pihak yang TIDAK wajib memotong PPh 21?",
      "options": [
        "Bendahara instansi pemerintah yang membayar honorarium",
        "Orang pribadi tanpa usaha yang mempekerjakan asisten rumah tangga",
        "Penyelenggara seminar yang membayar narasumber",
        "Dana pensiun yang membayar pensiun bulanan"
      ],
      "answer": 1,
      "explanation": "PMK 168/2023 mengecualikan orang pribadi yang tidak menjalankan usaha/pekerjaan bebas dan mempekerjakan orang semata-mata untuk pekerjaan rumah tangga. Tiga pihak lain adalah pemotong.",
      "legal": "PMK 168/2023"
    },
    {
      "id": "pp-002",
      "levels": [
        "a",
        "b"
      ],
      "section": "pemotong-21",
      "kind": "kasus",
      "prompt": "Staf lokal WNI bekerja di kedutaan besar negara asing. Bagaimana PPh atas gajinya dilunasi?",
      "options": [
        "Staf menyetor sendiri melalui PPh 25 dan SPT Tahunan",
        "Kedutaan wajib memotong PPh 21 setiap bulan",
        "Gajinya dikecualikan karena berasal dari negara asing",
        "Kedutaan memotong PPh 26 sebesar 20%"
      ],
      "answer": 0,
      "explanation": "Kantor perwakilan negara asing bukan pemotong PPh 21, tetapi staf WNI tetap SPDN dan wajib melunasi sendiri pajaknya.",
      "legal": "Pasal 21 ayat (1) UU PPh; PMK 168/2023"
    },
    {
      "id": "pp-003",
      "levels": [
        "a",
        "b"
      ],
      "section": "pemotong-21",
      "kind": "kasus",
      "prompt": "PT A memakai jasa alih daya PT B; pegawai PT B ditempatkan di PT A dan digaji oleh PT B. Siapa memotong PPh 21 pegawai dan PPh apa yang dipotong PT A?",
      "options": [
        "PT A memotong PPh 21; PT B tidak memotong apa pun",
        "PT A memotong PPh 21 dan PPh 23 sekaligus",
        "PT B memotong PPh 21; PT A memotong PPh 4 ayat (2)",
        "PT B memotong PPh 21; PT A memotong PPh 23 atas imbalan jasa ke PT B"
      ],
      "answer": 3,
      "explanation": "Pemotong PPh 21 adalah pemberi kerja yang membayar gaji (PT B). Atas jasa penyediaan tenaga kerja, PT A memotong PPh 23 kepada PT B.",
      "legal": "Pasal 21 dan 23 UU PPh"
    },
    {
      "id": "pp-004",
      "levels": [
        "a",
        "b"
      ],
      "section": "penerima-21",
      "kind": "konsep",
      "prompt": "Dokter berpraktik di rumah sakit dengan bagi hasil per pasien dan tidak terikat hubungan kerja. Termasuk kelompok penerima apa?",
      "options": [
        "Pegawai tetap",
        "Pegawai tidak tetap",
        "Bukan pegawai",
        "Peserta kegiatan"
      ],
      "answer": 2,
      "explanation": "Tenaga ahli yang menerima imbalan atas jasa tanpa hubungan kerja termasuk bukan pegawai dan dipotong dengan dasar 50% bruto.",
      "legal": "PMK 168/2023"
    },
    {
      "id": "pp-005",
      "levels": [
        "a",
        "b"
      ],
      "section": "penerima-21",
      "kind": "konsep",
      "prompt": "Penerima manakah yang dikecualikan dari pemotongan PPh 21?",
      "options": [
        "Pegawai harian lepas di pabrik",
        "Pejabat diplomatik asing bukan WNI dengan asas timbal balik",
        "Mahasiswa magang yang menerima uang saku",
        "Pensiunan yang menerima pensiun bulanan"
      ],
      "answer": 1,
      "explanation": "Pejabat perwakilan diplomatik yang memenuhi syarat Pasal 3 dikecualikan. Pegawai harian, peserta magang, dan pensiunan tetap penerima PPh 21.",
      "legal": "Pasal 3 dan 21 UU PPh; PMK 168/2023"
    },
    {
      "id": "pp-006",
      "levels": [
        "a",
        "b"
      ],
      "section": "penerima-21",
      "kind": "kasus",
      "prompt": "PT di Jakarta membayar gaji kepada tenaga ahli WNA yang bekerja di Indonesia hanya 4 bulan dan berstatus SPLN. Pemotongan apa yang dilakukan?",
      "options": [
        "PPh 26 sebesar 20% dari bruto",
        "PPh 21 dengan TER bulanan",
        "PPh 21 dengan tarif Pasal 17 × 50% bruto",
        "Tidak dipotong karena kurang dari 183 hari"
      ],
      "answer": 0,
      "explanation": "Penerima SPLN tidak dipotong PPh 21, melainkan PPh 26 sebesar 20% dari bruto, kecuali P3B mengatur lain.",
      "legal": "Pasal 26 UU PPh"
    },
    {
      "id": "pp-007",
      "levels": [
        "a",
        "b"
      ],
      "section": "objek-21",
      "kind": "konsep",
      "prompt": "Manakah yang BUKAN objek PPh 21 bagi pegawai?",
      "options": [
        "Premi asuransi jiwa yang dibayar pemberi kerja",
        "Tunjangan PPh yang dibayar pemberi kerja",
        "Uang lembur",
        "Klaim asuransi kesehatan dari perusahaan asuransi"
      ],
      "answer": 3,
      "explanation": "Pembayaran klaim asuransi dikecualikan. Premi yang dibayar pemberi kerja, tunjangan PPh, dan lembur merupakan penghasilan bruto pegawai.",
      "legal": "Pasal 4 ayat (3) UU PPh; PMK 168/2023"
    },
    {
      "id": "pp-008",
      "levels": [
        "a",
        "b"
      ],
      "section": "objek-21",
      "kind": "konsep",
      "prompt": "Komponen mana yang dibayar pemberi kerja dan ditambahkan ke penghasilan bruto pegawai?",
      "options": [
        "Iuran JHT bagian pemberi kerja",
        "Iuran Jaminan Pensiun bagian pemberi kerja",
        "Premi JKK dan JKM",
        "Iuran JHT yang dipotong dari gaji pegawai"
      ],
      "answer": 2,
      "explanation": "Premi JKK dan JKM yang dibayar pemberi kerja menambah bruto. Iuran JHT/JP bagian pemberi kerja bukan bruto, sedangkan JHT bagian pegawai adalah pengurang.",
      "legal": "PMK 168/2023"
    },
    {
      "id": "pp-009",
      "levels": [
        "a",
        "b"
      ],
      "section": "objek-21",
      "kind": "hitung",
      "prompt": "Dalam sebulan pegawai menerima gaji Rp9.000.000 dan tunjangan transpor Rp1.000.000. Pemberi kerja menanggung JKK+JKM Rp50.000, BPJS Kesehatan Rp400.000, dan JHT Rp333.000. Berapa penghasilan bruto untuk TER?",
      "options": [
        "Rp10.783.000",
        "Rp10.450.000",
        "Rp10.000.000",
        "Rp10.050.000"
      ],
      "answer": 1,
      "explanation": "Bruto = Rp9.000.000 + Rp1.000.000 + Rp50.000 + Rp400.000 = Rp10.450.000. JHT bagian pemberi kerja tidak ditambahkan, sehingga Rp10.783.000 keliru.",
      "legal": "PMK 168/2023"
    },
    {
      "id": "pp-010",
      "levels": [
        "a",
        "b"
      ],
      "section": "natura",
      "kind": "konsep",
      "prompt": "Pegawai menerima makan siang yang disediakan untuk seluruh pegawai. Bagaimana perlakuannya?",
      "options": [
        "Dikecualikan dari objek PPh bagi penerima",
        "Objek PPh 21 sebesar nilai pasar",
        "Dikenai PPh 21 final",
        "Objek PPh 21 di atas Rp3 juta setahun"
      ],
      "answer": 0,
      "explanation": "Makanan, bahan makanan, dan minuman bagi seluruh pegawai dikecualikan tanpa batas nilai oleh PMK 66/2023. Batas Rp3 juta untuk bingkisan selain hari raya.",
      "legal": "PMK 66/2023"
    },
    {
      "id": "pp-011",
      "levels": [
        "a",
        "b"
      ],
      "section": "natura",
      "kind": "hitung",
      "prompt": "Pegawai telah menerima bingkisan selain hari raya Rp2,4 juta dari pemberi kerja tahun ini. Ia lalu menerima bingkisan sejenis Rp2,1 juta. Dengan batas pengecualian Rp3 juta setahun, berapa bagian bingkisan terakhir yang menjadi objek?",
      "options": [
        "Rp600 ribu",
        "Rp2,1 juta",
        "Rp4,5 juta",
        "Rp1,5 juta"
      ],
      "answer": 3,
      "explanation": "Sisa batas = Rp3 juta − Rp2,4 juta = Rp600 ribu. Objek dari bingkisan terakhir = Rp2,1 juta − Rp600 ribu = Rp1,5 juta.",
      "legal": "PMK 66/2023",
      "source": "Latihan Soal UKP Tingkat B (v2)"
    },
    {
      "id": "pp-012",
      "levels": [
        "a",
        "b"
      ],
      "section": "natura",
      "kind": "hitung",
      "prompt": "Pemberi kerja menyediakan apartemen individual bagi pegawai dengan nilai Rp3 juta per bulan selama 12 bulan. Dengan batas pengecualian Rp2 juta per bulan, berapa nilai natura yang menjadi objek setahun?",
      "options": [
        "Rp36 juta",
        "Rp24 juta",
        "Rp12 juta",
        "Rp1 juta"
      ],
      "answer": 2,
      "explanation": "Objek per bulan = Rp3 juta − Rp2 juta = Rp1 juta; setahun Rp12 juta. Hanya selisih di atas batas yang menjadi objek.",
      "legal": "PMK 66/2023"
    },
    {
      "id": "pp-013",
      "levels": [
        "a",
        "b"
      ],
      "section": "pengurang",
      "kind": "hitung",
      "prompt": "Pegawai tetap mulai bekerja 1 Maret dan bekerja sampai Desember (10 bulan) dengan bruto Rp150 juta. Berapa biaya jabatan pada penghitungan tahunan?",
      "options": [
        "Rp6 juta",
        "Rp5 juta",
        "Rp7,5 juta",
        "Rp500 ribu"
      ],
      "answer": 1,
      "explanation": "5% × Rp150 juta = Rp7,5 juta melebihi batas Rp500 ribu × 10 bulan = Rp5 juta. Rp6 juta adalah batas untuk 12 bulan.",
      "legal": "PMK 168/2023"
    },
    {
      "id": "pp-014",
      "levels": [
        "a",
        "b"
      ],
      "section": "pengurang",
      "kind": "hitung",
      "prompt": "Pensiunan menerima pensiun bruto Rp6 juta per bulan selama 12 bulan. Berapa biaya pensiun setahun?",
      "options": [
        "Rp2,4 juta",
        "Rp3,6 juta",
        "Rp6 juta",
        "Rp7,2 juta"
      ],
      "answer": 0,
      "explanation": "5% × Rp6 juta = Rp300 ribu per bulan melebihi batas Rp200 ribu, sehingga setahun Rp2,4 juta. Rp6 juta adalah batas biaya jabatan.",
      "legal": "PMK 168/2023"
    },
    {
      "id": "pp-015",
      "levels": [
        "a",
        "b"
      ],
      "section": "pengurang",
      "kind": "konsep",
      "prompt": "Manakah yang TIDAK menjadi pengurang penghasilan bruto pegawai tetap?",
      "options": [
        "Iuran JHT yang dibayar pegawai",
        "Iuran pensiun pegawai kepada dana pensiun yang disahkan OJK",
        "Zakat yang dibayar melalui pemberi kerja kepada BAZNAS",
        "Iuran BPJS Kesehatan yang dibayar pegawai"
      ],
      "answer": 3,
      "explanation": "Pengurang meliputi biaya jabatan, iuran pensiun/THT/JHT pegawai, dan zakat melalui pemberi kerja. Iuran BPJS Kesehatan pegawai tidak termasuk.",
      "legal": "PMK 168/2023"
    },
    {
      "id": "pp-016",
      "levels": [
        "a",
        "b"
      ],
      "section": "tarif-ter",
      "kind": "konsep",
      "prompt": "Manakah pasangan status PTKP dan kategori TER yang SALAH?",
      "options": [
        "TK/0 – kategori A",
        "TK/2 – kategori B",
        "K/1 – kategori A",
        "K/3 – kategori C"
      ],
      "answer": 2,
      "explanation": "Kategori A: TK/0, TK/1, K/0; B: TK/2, TK/3, K/1, K/2; C: K/3. K/1 masuk kategori B.",
      "legal": "PP 58/2023"
    },
    {
      "id": "pp-017",
      "levels": [
        "a",
        "b"
      ],
      "section": "tarif-ter",
      "kind": "hitung",
      "prompt": "Pegawai tidak tetap dibayar harian Rp600.000 per hari. Dengan TER harian, berapa PPh 21 untuk satu hari?",
      "options": [
        "Nihil",
        "Rp3.000",
        "Rp30.000",
        "Rp1.500"
      ],
      "answer": 1,
      "explanation": "Penghasilan di atas Rp450 ribu sampai Rp2,5 juta per hari dikenai TER harian 0,5%: 0,5% × Rp600.000 = Rp3.000.",
      "legal": "PP 58/2023; PMK 168/2023"
    },
    {
      "id": "pp-018",
      "levels": [
        "a",
        "b"
      ],
      "section": "tarif-ter",
      "kind": "konsep",
      "prompt": "Pegawai tetap menerima THR bersama gaji Maret (bukan masa pajak terakhir). Bagaimana penerapan TER pada masa Maret?",
      "options": [
        "TER dipilih dari jumlah gaji dan THR Maret, lalu dikalikan jumlah itu",
        "THR dikenai TER tersendiri terpisah dari gaji",
        "THR ditunda dan dihitung hanya pada Desember",
        "THR dikenai PPh 21 final 5%"
      ],
      "answer": 0,
      "explanation": "Penghasilan tidak teratur digabung dengan gaji pada masa pembayaran. Bruto gabungan menentukan lapisan TER dan menjadi dasar pengali.",
      "legal": "PMK 168/2023"
    },
    {
      "id": "pp-019",
      "levels": [
        "a",
        "b"
      ],
      "section": "hitung-21",
      "kind": "kasus",
      "prompt": "Pegawai tetap TK/0 bekerja Januari–Desember dengan bruto setahun Rp180 juta, iuran JHT yang dibayar pegawai Rp2,4 juta, dan PPh 21 Januari–November Rp9 juta. Berapa PPh 21 Desember?",
      "options": [
        "Rp2,19 juta",
        "Rp3 juta",
        "Rp11,64 juta",
        "Rp2,64 juta"
      ],
      "answer": 3,
      "explanation": "Biaya jabatan Rp6 juta (batas); neto Rp171,6 juta; PKP Rp117,6 juta; PPh setahun Rp3 juta + 15% × Rp57,6 juta = Rp11,64 juta. Desember = Rp11,64 juta − Rp9 juta = Rp2,64 juta. Rp2,19 juta memakai biaya jabatan 5% tanpa batas.",
      "legal": "PMK 168/2023"
    },
    {
      "id": "pp-020",
      "levels": [
        "a",
        "b"
      ],
      "section": "hitung-21",
      "kind": "hitung",
      "prompt": "Konsultan orang pribadi (bukan pegawai) menerima satu kali imbalan Rp30 juta. Berapa PPh 21?",
      "options": [
        "Rp1,5 juta",
        "Rp600 ribu",
        "Rp750 ribu",
        "Rp375 ribu"
      ],
      "answer": 2,
      "explanation": "DPP = 50% × Rp30 juta = Rp15 juta; tarif Pasal 17 lapisan pertama 5%, sehingga PPh 21 Rp750 ribu. Rp1,5 juta keliru karena memakai 100% bruto.",
      "legal": "PMK 168/2023"
    },
    {
      "id": "pp-021",
      "levels": [
        "a",
        "b"
      ],
      "section": "hitung-21",
      "kind": "hitung",
      "prompt": "Peserta lomba (orang pribadi) menerima hadiah Rp20 juta dari penyelenggara. Berapa PPh 21?",
      "options": [
        "Rp500 ribu",
        "Rp1 juta",
        "Rp400 ribu",
        "Rp5 juta"
      ],
      "answer": 1,
      "explanation": "Peserta kegiatan dipotong tarif Pasal 17 × 100% bruto: 5% × Rp20 juta = Rp1 juta. Rp500 ribu keliru memakai 50% bruto yang hanya untuk bukan pegawai.",
      "legal": "PMK 168/2023"
    },
    {
      "id": "pp-022",
      "levels": [
        "a",
        "b"
      ],
      "section": "hitung-21",
      "kind": "hitung",
      "prompt": "Anggota dewan komisaris yang tidak merangkap pegawai tetap menerima honor Rp30 juta pada suatu bulan. Soal memberikan TER bulanan yang sesuai 9%. Berapa PPh 21?",
      "options": [
        "Rp2,7 juta",
        "Rp750 ribu",
        "Rp1,5 juta",
        "Rp4,5 juta"
      ],
      "answer": 0,
      "explanation": "Komisaris tidak merangkap dipotong TER bulanan × bruto: 9% × Rp30 juta = Rp2,7 juta. Rp750 ribu memakai skema bukan pegawai.",
      "legal": "PMK 168/2023"
    },
    {
      "id": "pp-023",
      "levels": [
        "a",
        "b"
      ],
      "section": "hitung-21",
      "kind": "kasus",
      "prompt": "Mantan pegawai menerima bonus Rp80 juta pada tahun setelah ia berhenti bekerja. Berapa PPh 21?",
      "options": [
        "Rp2 juta",
        "Rp4 juta",
        "Rp12 juta",
        "Rp6 juta"
      ],
      "answer": 3,
      "explanation": "Mantan pegawai dipotong tarif Pasal 17 × 100% bruto: 5% × Rp60 juta + 15% × Rp20 juta = Rp6 juta. Rp2 juta memakai 50% bruto.",
      "legal": "PMK 168/2023"
    },
    {
      "id": "pp-024",
      "levels": [
        "a",
        "b"
      ],
      "section": "hak-kewajiban",
      "kind": "konsep",
      "prompt": "Kapan paling lambat pemotong memberikan bukti potong tahunan (A1) kepada pegawai tetap yang bekerja sampai Desember 2026?",
      "options": [
        "15 Januari 2027",
        "31 Maret 2027",
        "Akhir Januari 2027",
        "31 Desember 2026"
      ],
      "answer": 2,
      "explanation": "Bukti potong tahunan diberikan paling lambat 1 bulan setelah masa pajak terakhir, yaitu akhir Januari 2027, agar pegawai dapat menyusun SPT Tahunan.",
      "legal": "PMK 168/2023; PMK 81/2024"
    },
    {
      "id": "pp-025",
      "levels": [
        "a",
        "b"
      ],
      "section": "hak-kewajiban",
      "kind": "konsep",
      "prompt": "Pada SPT Tahunan pegawai, PPh 21 mana yang dapat dikreditkan?",
      "options": [
        "PPh 21 final atas pesangon sekaligus",
        "PPh 21 pegawai tetap hasil rekonsiliasi tahunan",
        "PPh 21 final atas JHT yang dibayar sekaligus",
        "PPh 21 final atas manfaat pensiun sekaligus"
      ],
      "answer": 1,
      "explanation": "Penerima hanya dapat mengkreditkan PPh 21 yang tidak final. Pemotongan atas pesangon, JHT, dan manfaat pensiun sekaligus bersifat final.",
      "legal": "Pasal 21 dan 28 UU PPh"
    },
    {
      "id": "pp-026",
      "levels": [
        "a",
        "b"
      ],
      "section": "hak-kewajiban",
      "kind": "konsep",
      "prompt": "Manakah yang BUKAN kewajiban pemotong PPh 21?",
      "options": [
        "Menyampaikan SPT Tahunan PPh orang pribadi pegawainya",
        "Menyetor PPh 21 yang telah dipotong",
        "Memberikan bukti potong kepada penerima",
        "Melaporkan SPT Masa PPh 21/26"
      ],
      "answer": 0,
      "explanation": "Pemotong wajib memotong, menyetor, melapor, dan memberikan bukti potong. SPT Tahunan pegawai tetap menjadi kewajiban pegawai sendiri.",
      "legal": "Pasal 21 UU PPh; PMK 168/2023"
    },
    {
      "id": "pp-027",
      "levels": [
        "a",
        "b"
      ],
      "section": "final-21",
      "kind": "hitung",
      "prompt": "Pegawai menerima uang pesangon sekaligus Rp300 juta. Berapa PPh 21 final?",
      "options": [
        "Rp40 juta",
        "Rp45 juta",
        "Rp75 juta",
        "Rp32,5 juta"
      ],
      "answer": 3,
      "explanation": "0% × Rp50 juta + 5% × Rp50 juta + 15% × Rp200 juta = Rp2,5 juta + Rp30 juta = Rp32,5 juta. Rp45 juta keliru karena menerapkan 15% pada seluruh jumlah.",
      "legal": "PP 68/2009; PMK 16/2010"
    },
    {
      "id": "pp-028",
      "levels": [
        "a",
        "b"
      ],
      "section": "final-21",
      "kind": "hitung",
      "prompt": "Peserta BPJS Ketenagakerjaan menerima JHT sekaligus Rp120 juta. Berapa PPh 21 final?",
      "options": [
        "Rp6 juta",
        "Nihil",
        "Rp3,5 juta",
        "Rp10,5 juta"
      ],
      "answer": 2,
      "explanation": "JHT sekaligus: 0% sampai Rp50 juta dan 5% di atasnya. 5% × Rp70 juta = Rp3,5 juta.",
      "legal": "PP 68/2009; PMK 16/2010"
    },
    {
      "id": "pp-029",
      "levels": [
        "a",
        "b"
      ],
      "section": "final-21",
      "kind": "konsep",
      "prompt": "Pembayaran manakah yang dikenai PPh 21 bersifat final?",
      "options": [
        "Uang pensiun bulanan",
        "Uang pesangon yang dibayar sekaligus",
        "Bonus kepada mantan pegawai",
        "THR pegawai tetap"
      ],
      "answer": 1,
      "explanation": "PP 68/2009 menetapkan PPh 21 final atas pesangon dan manfaat pensiun/JHT/THT sekaligus. Pensiun bulanan, bonus mantan pegawai, dan THR tidak final.",
      "legal": "PP 68/2009"
    },
    {
      "id": "pp-030",
      "levels": [
        "a",
        "b"
      ],
      "section": "tata-cara-21",
      "kind": "konsep",
      "prompt": "Kapan batas setor PPh 21 masa Mei 2026 dan batas lapor SPT Masa PPh 21/26-nya (anggap bukan hari libur)?",
      "options": [
        "Setor 15 Juni 2026, lapor 20 Juni 2026",
        "Setor 10 Juni 2026, lapor 20 Juni 2026",
        "Setor 15 Juni 2026, lapor 30 Juni 2026",
        "Setor 20 Juni 2026, lapor 15 Juni 2026"
      ],
      "answer": 0,
      "explanation": "PMK 81/2024: setor paling lambat tanggal 15 bulan berikutnya, lapor paling lambat 20 hari setelah masa pajak berakhir.",
      "legal": "PMK 81/2024"
    },
    {
      "id": "pp-031",
      "levels": [
        "a",
        "b"
      ],
      "section": "tata-cara-21",
      "kind": "konsep",
      "prompt": "Dalam SPT Masa apa PPh 21 pegawai tetap dan PPh 26 atas gaji pegawai asing dilaporkan?",
      "options": [
        "SPT Masa PPh Unifikasi",
        "SPT Masa PPN",
        "SPT Tahunan PPh Badan",
        "SPT Masa PPh 21/26"
      ],
      "answer": 3,
      "explanation": "PPh 21 dan PPh 26 atas penghasilan pekerjaan dan jasa orang pribadi dilaporkan dalam SPT Masa PPh 21/26; PPh 22, 23, 4 ayat (2), dan 15 dilaporkan dalam SPT Masa PPh Unifikasi.",
      "legal": "PMK 81/2024; PER-11/PJ/2025"
    },
    {
      "id": "pp-032",
      "levels": [
        "a",
        "b"
      ],
      "section": "tata-cara-21",
      "kind": "kasus",
      "prompt": "Batas setor PPh 21 suatu masa jatuh pada tanggal 15 yang merupakan hari Minggu. Kapan penyetoran paling lambat?",
      "options": [
        "Hari kerja sebelumnya",
        "Tetap tanggal 15 melalui kanal elektronik",
        "Hari kerja berikutnya",
        "Tanggal 20 bersama batas lapor"
      ],
      "answer": 2,
      "explanation": "PMK 81/2024 menggeser batas yang jatuh pada hari libur ke hari kerja berikutnya.",
      "legal": "PMK 81/2024"
    },
    {
      "id": "pp-033",
      "levels": [
        "a"
      ],
      "section": "peta-pasal",
      "kind": "konsep",
      "prompt": "Manakah yang merupakan pemungutan, bukan pemotongan?",
      "options": [
        "PPh 23 atas jasa manajemen",
        "PPh 22 atas impor oleh DJBC",
        "PPh 21 atas gaji pegawai",
        "PPh 26 atas royalti ke luar negeri"
      ],
      "answer": 1,
      "explanation": "PPh 22 dipungut pihak tertentu atas transaksi barang dan impor. PPh 21, 23, dan 26 dipotong oleh pembayar penghasilan.",
      "legal": "Pasal 22 UU PPh"
    },
    {
      "id": "pp-034",
      "levels": [
        "a"
      ],
      "section": "peta-pasal",
      "kind": "konsep",
      "prompt": "Berapa tarif PPh 15 final bagi perusahaan pelayaran dalam negeri atas peredaran bruto?",
      "options": [
        "1,2%",
        "2,64%",
        "1,8%",
        "2%"
      ],
      "answer": 0,
      "explanation": "Pelayaran dalam negeri 1,2% dari bruto. 2,64% untuk pelayaran/penerbangan luar negeri dan 1,8% untuk carter penerbangan dalam negeri.",
      "legal": "Pasal 15 UU PPh"
    },
    {
      "id": "pp-035",
      "levels": [
        "a"
      ],
      "section": "peta-pasal",
      "kind": "hitung",
      "prompt": "Perusahaan pelayaran luar negeri menerima imbalan angkutan dari Indonesia Rp500 juta. Berapa PPh 15?",
      "options": [
        "Rp6 juta",
        "Rp9 juta",
        "Rp100 juta",
        "Rp13,2 juta"
      ],
      "answer": 3,
      "explanation": "Tarif PPh 15 pelayaran/penerbangan luar negeri 2,64% × Rp500 juta = Rp13,2 juta. Rp100 juta keliru memakai 20% PPh 26.",
      "legal": "Pasal 15 UU PPh"
    },
    {
      "id": "pp-036",
      "levels": [
        "b"
      ],
      "section": "pph22",
      "kind": "hitung",
      "prompt": "Importir dengan API mengimpor barang yang tercantum dalam Lampiran A PMK 51/2025 dengan nilai impor Rp300 juta. Berapa PPh 22 impor?",
      "options": [
        "Rp7,5 juta",
        "Rp22,5 juta",
        "Rp30 juta",
        "Rp1,5 juta"
      ],
      "answer": 2,
      "explanation": "Barang Lampiran A dikenai 10% dengan atau tanpa API: 10% × Rp300 juta = Rp30 juta. Rp7,5 juta keliru memakai tarif 2,5% barang lain.",
      "legal": "PMK 51/2025"
    },
    {
      "id": "pp-037",
      "levels": [
        "b"
      ],
      "section": "pph22",
      "kind": "hitung",
      "prompt": "Sejak berlakunya PMK 51/2025, importir mengimpor emas batangan dengan nilai impor Rp2 miliar. Berapa PPh 22 impor?",
      "options": [
        "Rp50 juta",
        "Rp5 juta",
        "Rp150 juta",
        "Rp10 juta"
      ],
      "answer": 1,
      "explanation": "Impor emas batangan dikenai 0,25% dengan atau tanpa API: 0,25% × Rp2 miliar = Rp5 juta. Rp50 juta dan Rp150 juta adalah tarif lama 2,5%/7,5%.",
      "legal": "PMK 51/2025"
    },
    {
      "id": "pp-038",
      "levels": [
        "b"
      ],
      "section": "pph22",
      "kind": "hitung",
      "prompt": "Instansi pemerintah membeli barang dengan harga sebelum PPN Rp80 juta dan transaksi termasuk objek PPh 22. Berapa pungutannya?",
      "options": [
        "Rp1,2 juta",
        "Rp800 ribu",
        "Rp2 juta",
        "Rp1,332 juta"
      ],
      "answer": 0,
      "explanation": "Pungutan = 1,5% × Rp80 juta = Rp1,2 juta. Rp1,332 juta keliru karena memasukkan PPN dalam dasar.",
      "legal": "PMK 51/2025"
    },
    {
      "id": "pp-039",
      "levels": [
        "b"
      ],
      "section": "pph22",
      "kind": "konsep",
      "prompt": "Pembayaran manakah oleh instansi pemerintah yang dikecualikan dari pemungutan PPh 22?",
      "options": [
        "Pembelian laptop dari distributor",
        "Pembelian mobil dinas dari dealer",
        "Pembelian alat tulis senilai Rp15 juta",
        "Tagihan listrik dan air minum kantor"
      ],
      "answer": 3,
      "explanation": "Pembayaran atas listrik, air minum, telepon, dan BBM oleh pemerintah dikecualikan. Pembelian barang lain di atas ambang tetap dipungut 1,5%.",
      "legal": "Pasal 22 UU PPh; PMK 51/2025"
    },
    {
      "id": "pp-040",
      "levels": [
        "b"
      ],
      "section": "pph22",
      "kind": "konsep",
      "prompt": "Manakah pemungutan PPh 22 yang bersifat final bagi penerimanya?",
      "options": [
        "Impor barang umum dengan API",
        "Pembelian barang oleh instansi pemerintah",
        "Penjualan BBM oleh Pertamina kepada SPBU Pertamina",
        "Penjualan semen oleh industri kepada distributor"
      ],
      "answer": 2,
      "explanation": "Pemungutan atas penjualan BBM, BBG, dan pelumas kepada penyalur/agen bersifat final. Pungutan lain merupakan kredit pajak.",
      "legal": "Pasal 22 UU PPh; PMK 51/2025"
    },
    {
      "id": "pp-041",
      "levels": [
        "b"
      ],
      "section": "pph22",
      "kind": "kasus",
      "prompt": "Mulai 1 Agustus 2025 importir mengimpor emas batangan yang akan diolah menjadi perhiasan untuk ekspor. Bagaimana perlakuan PPh 22-nya?",
      "options": [
        "Dikecualikan karena untuk tujuan ekspor",
        "Dipungut 0,25% karena pengecualiannya telah dihapus",
        "Dipungut 2,5% karena memakai API",
        "Dipungut 7,5% karena barang tertentu"
      ],
      "answer": 1,
      "explanation": "PMK 51/2025 mengenakan 0,25% atas impor emas batangan dan menghapus pengecualian untuk emas batangan yang diolah menjadi perhiasan ekspor.",
      "legal": "PMK 51/2025"
    },
    {
      "id": "pp-042",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph23",
      "kind": "konsep",
      "prompt": "Pembayaran manakah kepada badan dalam negeri yang dipotong PPh 23 dengan tarif 15%?",
      "options": [
        "Bunga pinjaman kepada perusahaan non-bank",
        "Jasa manajemen",
        "Sewa kendaraan",
        "Jasa katering"
      ],
      "answer": 0,
      "explanation": "Bunga, dividen, royalti, dan hadiah dikenai 15%. Jasa manajemen, sewa kendaraan, dan katering termasuk objek 2%.",
      "legal": "Pasal 23 ayat (1) huruf a UU PPh"
    },
    {
      "id": "pp-043",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph23",
      "kind": "hitung",
      "prompt": "Perusahaan membayar jasa teknik Rp50 juta kepada badan dalam negeri yang tidak dapat menunjukkan NPWP. Berapa PPh 23?",
      "options": [
        "Rp1 juta",
        "Rp1,2 juta",
        "Rp7,5 juta",
        "Rp2 juta"
      ],
      "answer": 3,
      "explanation": "Tarif 2% dinaikkan 100% menjadi 4%: 4% × Rp50 juta = Rp2 juta. Rp1,2 juta memakai kenaikan 20% yang berlaku untuk PPh 21.",
      "legal": "Pasal 23 ayat (1a) UU PPh"
    },
    {
      "id": "pp-044",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph23",
      "kind": "hitung",
      "prompt": "Konsultan badan dalam negeri menagih jasa Rp50 juta ditambah PPN Rp5,5 juta, total Rp55,5 juta. Berapa PPh 23?",
      "options": [
        "Rp1,11 juta",
        "Rp890 ribu",
        "Rp1 juta",
        "Rp7,5 juta"
      ],
      "answer": 2,
      "explanation": "Dasar pemotongan adalah bruto tidak termasuk PPN: 2% × Rp50 juta = Rp1 juta. Rp1,11 juta keliru karena memasukkan PPN.",
      "legal": "Pasal 23 UU PPh; PMK 141/2015"
    },
    {
      "id": "pp-045",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph23-kecuali",
      "kind": "kasus",
      "prompt": "Perusahaan membayar kepada badan dalam negeri atas dua kontrak: sewa mesin biasa dan sewa guna usaha mesin dengan hak opsi. Mana yang dikecualikan dari PPh 23 karena jenis sewanya?",
      "options": [
        "Kedua kontrak",
        "Hanya sewa guna usaha dengan hak opsi",
        "Hanya sewa mesin biasa",
        "Tidak ada; keduanya dipotong 2%"
      ],
      "answer": 1,
      "explanation": "Pasal 23 ayat (4) mengecualikan sewa guna usaha dengan hak opsi. Sewa mesin biasa tetap objek PPh 23 sebesar 2%.",
      "legal": "Pasal 23 ayat (4) UU PPh"
    },
    {
      "id": "pp-046",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph23-kecuali",
      "kind": "konsep",
      "prompt": "Manakah pembayaran yang dikecualikan dari pemotongan PPh 23?",
      "options": [
        "Bunga pinjaman kepada bank dalam negeri",
        "Royalti kepada badan dalam negeri",
        "Jasa konsultan kepada CV",
        "Bunga pinjaman kepada pemegang saham badan"
      ],
      "answer": 0,
      "explanation": "Penghasilan yang dibayar kepada bank dikecualikan. Royalti, jasa konsultan, dan bunga kepada pemegang saham badan tetap dipotong PPh 23.",
      "legal": "Pasal 23 ayat (4) UU PPh"
    },
    {
      "id": "pp-047",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph23-kecuali",
      "kind": "kasus",
      "prompt": "PT perorangan penyedia jasa kebersihan memiliki surat keterangan PP 55/2022 yang masih berlaku dan menagih Rp20 juta kepada PT yang menjadi pemotong. Apa yang dilakukan pemotong?",
      "options": [
        "Memotong PPh 23 2% sebesar Rp400 ribu",
        "Tidak memotong pajak apa pun",
        "Memotong PPh 23 4% sebesar Rp800 ribu",
        "Memotong PPh final 0,5% sebesar Rp100 ribu"
      ],
      "answer": 3,
      "explanation": "Dengan surat keterangan PP 55/2022, PPh 23 tidak dipotong dan pemotong memotong PPh final 0,5% × Rp20 juta = Rp100 ribu.",
      "legal": "PP 55/2022 s.t.d.d. PP 20/2026; PMK 164/2023"
    },
    {
      "id": "pp-048",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph42",
      "kind": "konsep",
      "prompt": "Perusahaan menyewa gudang, lahan parkir kosong, dan forklift dari badan dalam negeri. Bagaimana pemetaan pemotongannya?",
      "options": [
        "Ketiganya PPh 23 2%",
        "Ketiganya PPh 4 ayat (2) 10%",
        "Gudang dan lahan PPh 4 ayat (2) 10%; forklift PPh 23 2%",
        "Gudang PPh 4 ayat (2); lahan dan forklift PPh 23"
      ],
      "answer": 2,
      "explanation": "Sewa tanah dan/atau bangunan, termasuk lahan kosong, dikenai PPh final 10%. Sewa harta selain tanah/bangunan seperti forklift dikenai PPh 23 2%.",
      "legal": "PP 34/2017; Pasal 23 UU PPh"
    },
    {
      "id": "pp-049",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph42",
      "kind": "hitung",
      "prompt": "Penerima jasa yang menjadi pemotong membayar pekerjaan konstruksi Rp200 juta sebelum PPN kepada penyedia orang pribadi yang tidak memiliki sertifikat kompetensi. Berapa PPh final?",
      "options": [
        "Rp3,5 juta",
        "Rp8 juta",
        "Rp5,3 juta",
        "Rp4 juta"
      ],
      "answer": 1,
      "explanation": "PP 9/2022: pelaksana konstruksi tanpa sertifikat 4% × Rp200 juta = Rp8 juta. Rp3,5 juta (1,75%) hanya untuk yang bersertifikat kualifikasi kecil/perseorangan.",
      "legal": "PP 9/2022"
    },
    {
      "id": "pp-050",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph42",
      "kind": "hitung",
      "prompt": "Orang pribadi menjual rumah (bukan rumah sederhana) kepada pembeli orang pribadi dengan nilai pengalihan Rp1,2 miliar. Berapa PPh final pengalihannya?",
      "options": [
        "Rp30 juta",
        "Rp12 juta",
        "Rp60 juta",
        "Rp120 juta"
      ],
      "answer": 0,
      "explanation": "Tarif umum pengalihan hak atas tanah/bangunan 2,5% × Rp1,2 miliar = Rp30 juta. Tarif 1% hanya untuk rumah sederhana oleh pengembang.",
      "legal": "PP 34/2016"
    },
    {
      "id": "pp-051",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph42",
      "kind": "kasus",
      "prompt": "Orang pribadi memperoleh bunga deposito Rp12 juta (bukan hasil pemecahan) dan hadiah undian Rp20 juta dalam setahun. Berapa total PPh final yang dipotong?",
      "options": [
        "Rp5,9 juta",
        "Rp6,4 juta",
        "Rp8 juta",
        "Rp7,4 juta"
      ],
      "answer": 3,
      "explanation": "Bunga Rp12 juta melebihi Rp7,5 juta sehingga seluruhnya dipotong 20% = Rp2,4 juta; hadiah undian 25% × Rp20 juta = Rp5 juta; total Rp7,4 juta. Rp5,9 juta keliru karena hanya memajaki kelebihan di atas Rp7,5 juta.",
      "legal": "PP 131/2000 s.t.d.d. PP 123/2015; Pasal 4 ayat (2) UU PPh"
    },
    {
      "id": "pp-052",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph42-kecuali",
      "kind": "konsep",
      "prompt": "Deposito dan tabungan seorang nasabah di satu bank berjumlah Rp6 juta dan bukan hasil pemecahan. Bagaimana PPh atas bunganya?",
      "options": [
        "Dipotong 20% final",
        "Dipotong 10% final",
        "Dikecualikan karena tidak melebihi Rp7,5 juta",
        "Dipotong PPh 23 15%"
      ],
      "answer": 2,
      "explanation": "PP 131/2000 s.t.d.d. PP 123/2015 mengecualikan bunga deposito/tabungan bila jumlahnya tidak melebihi Rp7,5 juta dan bukan pemecahan.",
      "legal": "PP 131/2000 s.t.d.d. PP 123/2015"
    },
    {
      "id": "pp-053",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph42-kecuali",
      "kind": "konsep",
      "prompt": "Manakah pengalihan hak atas tanah/bangunan yang TIDAK termasuk pengecualian PPh Pasal 4 ayat (2)?",
      "options": [
        "Hibah tanah dari ayah kepada anak kandung",
        "Jual beli rumah kepada saudara kandung",
        "Pengalihan karena warisan",
        "Hibah tanah kepada badan keagamaan tanpa hubungan usaha"
      ],
      "answer": 1,
      "explanation": "Hibah kepada keluarga sedarah garis lurus satu derajat, warisan, dan hibah kepada badan keagamaan dikecualikan. Jual beli antarsaudara tetap terutang 2,5%.",
      "legal": "PP 34/2016"
    },
    {
      "id": "pp-054",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph42-kecuali",
      "kind": "kasus",
      "prompt": "Orang pribadi berpenghasilan di bawah PTKP menjual sebidang tanah Rp55 juta (bukan pemecahan). Agar tidak terutang PPh final, apa yang diperlukan?",
      "options": [
        "Surat Keterangan Bebas dari DJP",
        "Cukup pernyataan di akta jual beli",
        "Surat keterangan PP 55/2022",
        "Tidak perlu dokumen apa pun"
      ],
      "answer": 0,
      "explanation": "Pengecualian bagi orang pribadi berpenghasilan di bawah PTKP dengan nilai pengalihan kurang dari Rp60 juta diberikan melalui SKB.",
      "legal": "PP 34/2016; PMK 81/2024"
    },
    {
      "id": "pp-055",
      "levels": [
        "a"
      ],
      "section": "pph42-tata-cara",
      "kind": "konsep",
      "prompt": "Pemilik ruko menerima sewa dari penyewa orang pribadi yang bukan pemotong pajak pada Maret. Bagaimana PPh finalnya dilunasi?",
      "options": [
        "Penyewa wajib memotong dan menyetor",
        "Dibayar bersama SPT Tahunan pemilik",
        "Tidak terutang karena penyewa orang pribadi",
        "Pemilik menyetor sendiri paling lambat 15 April"
      ],
      "answer": 3,
      "explanation": "Bila penyewa bukan pemotong, pemilik menyetor sendiri PPh 4 ayat (2) paling lambat tanggal 15 bulan berikutnya setelah sewa diterima.",
      "legal": "PMK 81/2024; PP 34/2017"
    },
    {
      "id": "pp-056",
      "levels": [
        "a"
      ],
      "section": "pph42-tata-cara",
      "kind": "konsep",
      "prompt": "Kapan PPh final atas penjualan tanah dan bangunan oleh orang pribadi harus dibayar?",
      "options": [
        "Paling lambat tanggal 15 bulan setelah akta",
        "Bersamaan dengan pendaftaran balik nama",
        "Sebelum akta jual beli ditandatangani PPAT",
        "Saat menyampaikan SPT Tahunan"
      ],
      "answer": 2,
      "explanation": "PP 34/2016 mewajibkan penjual membayar PPh sebelum akta, keputusan, atau perjanjian ditandatangani pejabat berwenang.",
      "legal": "PP 34/2016"
    },
    {
      "id": "pp-057",
      "levels": [
        "a"
      ],
      "section": "pph42-tata-cara",
      "kind": "konsep",
      "prompt": "Perusahaan memotong PPh 4 ayat (2) atas sewa gedung kantor. Dalam SPT Masa apa pemotongan itu dilaporkan?",
      "options": [
        "SPT Masa PPh 21/26",
        "SPT Masa PPh Unifikasi",
        "SPT Masa PPN",
        "SPT Tahunan PPh Badan saja"
      ],
      "answer": 1,
      "explanation": "PPh 4 ayat (2), 15, 22, 23, dan 26 selain atas pekerjaan orang pribadi dilaporkan dalam SPT Masa PPh Unifikasi dengan bukti potong BPPU.",
      "legal": "PMK 81/2024"
    },
    {
      "id": "pp-058",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph26",
      "kind": "hitung",
      "prompt": "Pemotong membayar royalti Rp100 juta kepada badan dalam negeri dan Rp100 juta kepada WPLN selain BUT; P3B tidak diterapkan. Berapa total pemotongan?",
      "options": [
        "Rp35 juta",
        "Rp30 juta",
        "Rp22 juta",
        "Rp40 juta"
      ],
      "answer": 0,
      "explanation": "Royalti dalam negeri PPh 23 15% = Rp15 juta; royalti ke WPLN PPh 26 20% = Rp20 juta; total Rp35 juta.",
      "legal": "Pasal 23 dan 26 UU PPh"
    },
    {
      "id": "pp-059",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph26",
      "kind": "hitung",
      "prompt": "PKP sebuah BUT Rp1 miliar dan PPh badannya 22% (Rp220 juta). Tanpa penanaman kembali dan tanpa P3B, berapa PPh 26 atas laba setelah pajak?",
      "options": [
        "Rp200 juta",
        "Rp220 juta",
        "Rp171,6 juta",
        "Rp156 juta"
      ],
      "answer": 3,
      "explanation": "Branch profit tax = 20% × (Rp1 miliar − Rp220 juta) = 20% × Rp780 juta = Rp156 juta. Rp200 juta keliru karena dihitung dari PKP.",
      "legal": "Pasal 26 ayat (4) UU PPh"
    },
    {
      "id": "pp-060",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph26",
      "kind": "hitung",
      "prompt": "Perusahaan asuransi dalam negeri membayar premi reasuransi Rp1 miliar kepada perusahaan di luar negeri. Berapa PPh 26?",
      "options": [
        "Rp100 juta",
        "Rp10 juta",
        "Rp20 juta",
        "Rp200 juta"
      ],
      "answer": 2,
      "explanation": "Perkiraan neto premi yang dibayar perusahaan asuransi 10%: 20% × 10% × Rp1 miliar = Rp20 juta. Rp100 juta memakai 50% yang berlaku bila tertanggung membayar langsung.",
      "legal": "Pasal 26 UU PPh"
    },
    {
      "id": "pp-061",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph26",
      "kind": "konsep",
      "prompt": "Agar tarif P3B dapat diterapkan atas bunga kepada WPLN, apa yang harus dipenuhi?",
      "options": [
        "WPLN cukup memiliki kontrak tertulis dengan pemotong",
        "WPLN tidak menyalahgunakan P3B dan menyerahkan Formulir DGT yang sah",
        "WPLN memiliki NPWP Indonesia",
        "Pemotong memperoleh SKB dari KPP"
      ],
      "answer": 1,
      "explanation": "Penerapan P3B mensyaratkan WPLN memenuhi ketentuan P3B, bukan penyalahguna, dan menyerahkan Formulir DGT (format PMK 112/2025, menggantikan PER-25/PJ/2018).",
      "legal": "Pasal 26 UU PPh; PMK 112/2025"
    },
    {
      "id": "pp-062",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph26-kecuali",
      "kind": "konsep",
      "prompt": "Manakah yang BUKAN syarat agar laba BUT yang ditanamkan kembali tidak dikenai branch profit tax?",
      "options": [
        "Investasi harus berada di kawasan ekonomi khusus",
        "Ditanamkan dalam bentuk penyertaan modal, aktiva tetap, atau aktiva tidak berwujud",
        "Dilakukan pada tahun berjalan atau paling lambat tahun berikutnya",
        "Tidak dialihkan paling sedikit 2 tahun setelah produksi komersial"
      ],
      "answer": 0,
      "explanation": "PMK 14/2011 mengatur bentuk, waktu, dan larangan pengalihan 2 tahun. Tidak ada syarat lokasi kawasan ekonomi khusus.",
      "legal": "PMK 14/2011"
    },
    {
      "id": "pp-063",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph26-kecuali",
      "kind": "kasus",
      "prompt": "BUT memperoleh laba setelah pajak tahun 2026 dan baru menanamkannya kembali sebagai penyertaan modal pada PT dalam negeri pada 2028. Bagaimana perlakuannya?",
      "options": [
        "Bebas branch profit tax karena tetap ditanam di Indonesia",
        "Bebas asalkan investasi ditahan 5 tahun",
        "Terutang PPh 23 15% atas penyertaan modal",
        "Tetap terutang branch profit tax karena melewati batas waktu"
      ],
      "answer": 3,
      "explanation": "Penanaman kembali harus dilakukan pada tahun pajak berjalan (2026) atau paling lambat tahun berikutnya (2027). Penanaman pada 2028 terlambat.",
      "legal": "PMK 14/2011"
    },
    {
      "id": "pp-064",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph26-kecuali",
      "kind": "konsep",
      "prompt": "Perusahaan membayar jasa teknik kepada BUT perusahaan Jepang yang berada di Indonesia. Pemotongan apa yang berlaku?",
      "options": [
        "PPh 26 sebesar 20%",
        "PPh 26 dengan tarif P3B",
        "PPh 23 sebesar 2%",
        "Tidak dipotong karena BUT menyetor sendiri"
      ],
      "answer": 2,
      "explanation": "BUT diperlakukan seperti WPDN dalam pemotongan, sehingga dipotong PPh 23, bukan PPh 26.",
      "legal": "Pasal 23 dan 26 UU PPh"
    }
  ],
  "flashcards": [
    {
      "front": "Kategori TER A",
      "back": "TK/0, TK/1, K/0",
      "levels": [
        "a",
        "b"
      ],
      "section": "tarif-ter"
    },
    {
      "front": "Kategori TER B",
      "back": "TK/2, TK/3, K/1, K/2",
      "levels": [
        "a",
        "b"
      ],
      "section": "tarif-ter"
    },
    {
      "front": "Kategori TER C",
      "back": "K/3",
      "levels": [
        "a",
        "b"
      ],
      "section": "tarif-ter"
    },
    {
      "front": "TER harian",
      "back": "≤ Rp450 rb 0%; > Rp450 rb–Rp2,5 jt 0,5%; > Rp2,5 jt tarif Pasal 17",
      "levels": [
        "a",
        "b"
      ],
      "section": "tarif-ter"
    },
    {
      "front": "PPh 21 tanpa NPWP",
      "back": "20% lebih tinggi",
      "levels": [
        "a",
        "b"
      ],
      "section": "tarif-ter"
    },
    {
      "front": "Biaya jabatan",
      "back": "5%, maks Rp500 rb/bulan atau Rp6 jt/tahun",
      "levels": [
        "a",
        "b"
      ],
      "section": "pengurang"
    },
    {
      "front": "Biaya pensiun",
      "back": "5%, maks Rp200 rb/bulan atau Rp2,4 jt/tahun",
      "levels": [
        "a",
        "b"
      ],
      "section": "pengurang"
    },
    {
      "front": "Dasar PPh 21 bukan pegawai",
      "back": "Tarif Pasal 17 × 50% bruto",
      "levels": [
        "a",
        "b"
      ],
      "section": "hitung-21"
    },
    {
      "front": "Dasar PPh 21 peserta kegiatan dan mantan pegawai",
      "back": "Tarif Pasal 17 × 100% bruto",
      "levels": [
        "a",
        "b"
      ],
      "section": "hitung-21"
    },
    {
      "front": "Komisaris tidak merangkap pegawai tetap",
      "back": "TER bulanan × bruto",
      "levels": [
        "a",
        "b"
      ],
      "section": "hitung-21"
    },
    {
      "front": "Masa pajak terakhir pegawai tetap",
      "back": "Desember atau bulan berhenti bekerja",
      "levels": [
        "a",
        "b"
      ],
      "section": "hitung-21"
    },
    {
      "front": "Bingkisan selain hari raya (natura)",
      "back": "Dikecualikan sampai Rp3 juta/pegawai/tahun",
      "levels": [
        "a",
        "b"
      ],
      "section": "natura"
    },
    {
      "front": "Tempat tinggal individual (natura)",
      "back": "Dikecualikan sampai Rp2 juta/pegawai/bulan",
      "levels": [
        "a",
        "b"
      ],
      "section": "natura"
    },
    {
      "front": "Fasilitas olahraga (natura)",
      "back": "Sampai Rp1,5 juta/tahun; golf dkk tidak dikecualikan",
      "levels": [
        "a",
        "b"
      ],
      "section": "natura"
    },
    {
      "front": "Lapisan PPh 21 final pesangon",
      "back": "0% s.d. 50 jt; 5% s.d. 100 jt; 15% s.d. 500 jt; 25% di atasnya",
      "levels": [
        "a",
        "b"
      ],
      "section": "final-21"
    },
    {
      "front": "PPh 21 final JHT sekaligus",
      "back": "0% s.d. Rp50 jt; 5% di atasnya",
      "levels": [
        "a",
        "b"
      ],
      "section": "final-21"
    },
    {
      "front": "Batas setor dan lapor PPh potput",
      "back": "Setor tgl 15 bulan berikutnya; lapor 20 hari setelah masa",
      "levels": [
        "a",
        "b"
      ],
      "section": "tata-cara-21"
    },
    {
      "front": "PPh 15 pelayaran DN / LN / carter pesawat DN",
      "back": "1,2% / 2,64% / 1,8%",
      "levels": [
        "a"
      ],
      "section": "peta-pasal"
    },
    {
      "front": "PPh 22 impor PMK 51/2025 Lampiran A/B/C",
      "back": "10% / 7,5% / 0,5%",
      "levels": [
        "b"
      ],
      "section": "pph22"
    },
    {
      "front": "PPh 22 impor emas batangan",
      "back": "0,25% dengan atau tanpa API",
      "levels": [
        "b"
      ],
      "section": "pph22"
    },
    {
      "front": "PPh 22 impor barang lain",
      "back": "API 2,5%; tanpa API 7,5%",
      "levels": [
        "b"
      ],
      "section": "pph22"
    },
    {
      "front": "PPh 22 instansi pemerintah dan BUMN",
      "back": "1,5% dari harga tidak termasuk PPN",
      "levels": [
        "b"
      ],
      "section": "pph22"
    },
    {
      "front": "PPh 22 barang sangat mewah",
      "back": "5% dari harga jual",
      "levels": [
        "b"
      ],
      "section": "pph22"
    },
    {
      "front": "PPh 23 tarif 15%",
      "back": "Dividen, bunga, royalti, hadiah",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph23"
    },
    {
      "front": "PPh 23 tanpa NPWP",
      "back": "100% lebih tinggi",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph23"
    },
    {
      "front": "Sewa yang dikecualikan dari PPh 23",
      "back": "Sewa guna usaha dengan hak opsi",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph23-kecuali"
    },
    {
      "front": "Sewa tanah/bangunan",
      "back": "PPh 4 ayat (2) final 10%",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph42"
    },
    {
      "front": "Konstruksi kecil bersertifikat / tanpa sertifikat",
      "back": "1,75% / 4%",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph42"
    },
    {
      "front": "Ambang bunga deposito/tabungan bebas PPh",
      "back": "Tidak melebihi Rp7,5 juta, bukan pemecahan",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph42-kecuali"
    },
    {
      "front": "Saat bayar PPh pengalihan tanah",
      "back": "Sebelum akta ditandatangani PPAT/notaris",
      "levels": [
        "a"
      ],
      "section": "pph42-tata-cara"
    },
    {
      "front": "Tarif umum PPh 26",
      "back": "20% dari bruto",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph26"
    },
    {
      "front": "Branch profit tax",
      "back": "20% × (PKP − PPh badan) BUT",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph26"
    },
    {
      "front": "Batas penanaman kembali laba BUT",
      "back": "Tahun berjalan atau paling lambat tahun berikutnya; tahan 2 tahun",
      "levels": [
        "a",
        "b"
      ],
      "section": "pph26-kecuali"
    }
  ]
};

export default content;
