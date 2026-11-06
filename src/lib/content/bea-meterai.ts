import type { TopicContent } from "./types";

const content: TopicContent = {
  "summary": [
    {
      "id": "objek-tarif",
      "title": "Objek dan tarif Bea Meterai",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "1",
        "b": "1"
      },
      "points": [
        "Bea Meterai dikenakan atas dokumen kertas maupun elektronik yang dibuat sebagai alat untuk menerangkan kejadian bersifat perdata dan atas dokumen yang digunakan sebagai alat bukti di pengadilan.",
        "Dokumen perdata yang menjadi objek: surat perjanjian, surat keterangan, surat pernyataan, atau surat sejenis beserta rangkapnya; akta notaris beserta grosse, salinan, dan kutipannya; akta PPAT beserta salinan dan kutipannya.",
        "Objek lainnya: surat berharga dengan nama dan dalam bentuk apa pun, dokumen transaksi surat berharga termasuk efek, serta dokumen lelang (kutipan, minuta, salinan, dan grosse risalah lelang).",
        "Dokumen yang menyatakan jumlah uang menjadi objek hanya bila nominalnya lebih dari Rp5.000.000 dan menyebut penerimaan uang atau pengakuan pelunasan utang.",
        "Ambang Rp5 juta tidak berlaku untuk perjanjian, akta, surat berharga, dan dokumen lelang: dokumen itu objek berapa pun nilainya.",
        "Tarif tetap Rp10.000 per dokumen; setiap rangkap, salinan, atau kutipan yang menjadi objek dihitung sebagai dokumen tersendiri.",
        "Besaran batas nominal dan tarif dapat diubah dengan Peraturan Pemerintah sesuai kondisi perekonomian dan kebijakan pemerintah."
      ],
      "table": {
        "head": [
          "Jenis dokumen",
          "Syarat objek",
          "Bea Meterai"
        ],
        "rows": [
          [
            "Perjanjian, surat keterangan/pernyataan + rangkap",
            "Tanpa ambang nilai",
            "Rp10.000 per rangkap"
          ],
          [
            "Akta notaris/PPAT + salinan, kutipan, grosse",
            "Tanpa ambang nilai",
            "Rp10.000 per lembar dokumen"
          ],
          [
            "Surat berharga, dokumen transaksi efek",
            "Tanpa ambang nilai",
            "Rp10.000"
          ],
          [
            "Kuitansi/dokumen jumlah uang",
            "Lebih dari Rp5.000.000",
            "Rp10.000"
          ]
        ]
      },
      "traps": [
        "Kuitansi tepat Rp5.000.000 belum melewati ambang \"lebih dari Rp5 juta\".",
        "Nilai transaksi tidak menentukan jumlah objek: dua rangkap perjanjian = dua objek walaupun transaksinya satu.",
        "Bentuk elektronik tidak mengubah status objek."
      ],
      "legal": "UU 10/2020 Pasal 2, 3, 5, 6; PMK 78/2024."
    },
    {
      "id": "saat-pihak",
      "title": "Saat terutang dan pihak yang terutang",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "1",
        "b": "1"
      },
      "points": [
        "Surat perjanjian beserta rangkapnya, akta notaris, dan akta PPAT terutang saat dokumen dibubuhi tanda tangan.",
        "Surat berharga dan dokumen transaksi surat berharga terutang saat dokumen selesai dibuat.",
        "Surat keterangan, surat pernyataan, surat sejenis, dan dokumen yang menyatakan jumlah uang terutang saat diserahkan kepada pihak untuk siapa dokumen dibuat.",
        "Dokumen yang dibuat di luar negeri terutang saat digunakan di Indonesia; dokumen alat bukti terutang saat diajukan ke pengadilan.",
        "Dokumen sepihak terutang oleh penerima dokumen; dokumen dua pihak atau lebih terutang oleh masing-masing pihak atas dokumen yang diterimanya.",
        "Surat berharga terutang oleh penerbitnya; dokumen alat bukti oleh pihak yang mengajukan; dokumen luar negeri oleh penerima manfaat.",
        "Para pihak boleh menyepakati siapa yang membayar, tetapi kesepakatan itu tidak menghapus Bea Meterai yang terutang."
      ],
      "table": {
        "head": [
          "Dokumen",
          "Saat terutang",
          "Pihak terutang"
        ],
        "rows": [
          [
            "Perjanjian, akta notaris, akta PPAT",
            "Dibubuhi tanda tangan",
            "Masing-masing pihak atas dokumen yang diterima"
          ],
          [
            "Surat berharga (cek, bilyet giro)",
            "Selesai dibuat",
            "Penerbit"
          ],
          [
            "Surat pernyataan/keterangan, kuitansi > Rp5 juta",
            "Diserahkan kepada pihak yang dituju",
            "Penerima dokumen"
          ],
          [
            "Dokumen dari luar negeri",
            "Digunakan di Indonesia",
            "Penerima manfaat"
          ],
          [
            "Alat bukti di pengadilan",
            "Diajukan ke pengadilan",
            "Pihak yang mengajukan"
          ]
        ]
      },
      "traps": [
        "Tanggal transfer uang bukan saat terutang kuitansi; yang menentukan adalah saat kuitansi diserahkan.",
        "Cek terutang saat selesai dibuat, bukan saat dicairkan.",
        "Kontrak luar negeri yang belum dipakai di Indonesia belum terutang."
      ],
      "legal": "UU 10/2020 Pasal 8 dan 9."
    },
    {
      "id": "pengecualian",
      "title": "Dokumen yang dikecualikan dan fasilitas pembebasan",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "1",
        "b": "1"
      },
      "points": [
        "Dokumen lalu lintas orang dan barang (konosemen, surat angkutan penumpang dan barang, surat pengiriman barang) bukan objek Bea Meterai.",
        "Segala bentuk ijazah bukan objek, termasuk ijazah elektronik.",
        "Tanda terima gaji, uang tunggu, pensiun, tunjangan, dan pembayaran lain terkait hubungan kerja bukan objek berapa pun nominalnya.",
        "Tanda bukti penerimaan uang negara dari kas negara/daerah/BI, kuitansi pembayaran pajak, dan tanda penerimaan uang untuk keperluan intern organisasi bukan objek.",
        "Dokumen simpanan uang atau surat berharga di bank/koperasi, surat gadai, tanda pembagian keuntungan atau bunga surat berharga, serta dokumen BI untuk kebijakan moneter bukan objek.",
        "Pasal 22 memberi fasilitas pembebasan atas dokumen yang tetap objek, mis. untuk penanganan bencana alam, kegiatan keagamaan/sosial nonkomersial, program pemerintah atau kebijakan moneter/jasa keuangan, dan pelaksanaan perjanjian internasional.",
        "Dokumen yang dikecualikan dapat menjadi objek bila kemudian digunakan sebagai alat bukti di pengadilan."
      ],
      "traps": [
        "Bukan objek (Pasal 7) berbeda dengan dibebaskan (Pasal 22): dokumen yang dibebaskan tetap objek.",
        "Bukti gaji Rp7 juta tetap bukan objek walaupun di atas Rp5 juta."
      ],
      "legal": "UU 10/2020 Pasal 7 dan 22."
    },
    {
      "id": "pemungut",
      "title": "Pemungut Bea Meterai",
      "levels": [
        "a"
      ],
      "bookletItem": {
        "a": "2"
      },
      "points": [
        "Pemungut Bea Meterai adalah pihak yang ditetapkan untuk memungut Bea Meterai dari pihak terutang, menyetorkannya ke kas negara, dan melaporkannya.",
        "Pihak yang memfasilitasi penerbitan cek dan bilyet giro menjadi pemungut tanpa ambang jumlah dokumen; pemungutannya melalui meterai percetakan oleh pembuat meterai berizin.",
        "Untuk dokumen transaksi surat berharga, surat keterangan/pernyataan sejenis, dan dokumen jumlah uang lebih dari Rp5 juta, pemungut adalah pihak yang menerbitkan atau memfasilitasi lebih dari 1.000 dokumen dalam satu bulan.",
        "Pemungut tetap memungut walaupun meterai elektronik gagal dibubuhkan karena gangguan sistem; daftar dokumen tersebut dilampirkan pada SPT Masa Bea Meterai.",
        "Bea Meterai yang dipungut disetor paling lambat tanggal 15 bulan berikutnya setelah Masa Pajak berakhir.",
        "SPT Masa Bea Meterai dilaporkan secara elektronik (Coretax) paling lambat tanggal 15 bulan berikutnya; aturan lama (PMK 151/2021) memakai setor tanggal 10 dan lapor tanggal 20.",
        "Pemungut yang tidak memungut atau tidak menyetor dikenai sanksi administratif; keterlambatan setor atau lapor mengikuti ketentuan sanksi UU KUP."
      ],
      "table": {
        "head": [
          "Kewajiban",
          "Ketentuan berlaku",
          "Aturan lama (PMK 151/2021)"
        ],
        "rows": [
          [
            "Setor Bea Meterai yang dipungut",
            "Tanggal 15 bulan berikutnya",
            "Tanggal 10 bulan berikutnya"
          ],
          [
            "Lapor SPT Masa Bea Meterai",
            "Tanggal 15 bulan berikutnya",
            "Tanggal 20 bulan berikutnya"
          ]
        ]
      },
      "traps": [
        "Batas lapor SPT Masa Bea Meterai tanggal 15, bukan tanggal 20 seperti SPT Masa PPh.",
        "Pemungut bukan pihak terutang: ia menjalankan pemungutan dari pihak terutang."
      ],
      "legal": "UU 10/2020 Pasal 10, 11; PMK 78/2024 Pasal 63–64; PMK 81/2024."
    },
    {
      "id": "pembayaran",
      "title": "Tata cara pembayaran Bea Meterai",
      "levels": [
        "a"
      ],
      "bookletItem": {
        "a": "3"
      },
      "points": [
        "Bea Meterai dibayar menggunakan meterai atau Surat Setoran Pajak (SSP)/sarana administrasi lain yang dipersamakan.",
        "Meterai terdiri atas meterai tempel, meterai elektronik, dan meterai dalam bentuk lain (teraan mesin meterai digital, sistem komputerisasi, meterai percetakan, atau alat lain berteknologi tertentu).",
        "Meterai tempel dipakai pada dokumen kertas; tanda tangan dibubuhkan sebagian di atas meterai tempel dan sebagian di atas dokumen.",
        "Meterai elektronik memiliki kode unik dan keterangan tertentu, dan digunakan untuk dokumen elektronik.",
        "Meterai tempel dianggap tidak dibayar bila rusak, tidak utuh, atau sudah pernah dipakai.",
        "Ketentuan peralihan: meterai tempel desain lama (Rp3.000 dan Rp6.000) masih dapat dipakai sampai 31 Desember 2021 dengan nilai total paling sedikit Rp9.000 per dokumen."
      ],
      "traps": [
        "Hasil pindai atau foto meterai tempel bukan meterai elektronik.",
        "Meterai tempel bekas pakai yang dipindahkan ke dokumen lain = Bea Meterai tidak dibayar dan dapat masuk ranah pidana."
      ],
      "legal": "UU 10/2020 Pasal 12–15 dan 28; PMK 78/2024."
    },
    {
      "id": "sanksi",
      "title": "Pemeteraian kemudian, sanksi administratif, dan pidana",
      "levels": [
        "a"
      ],
      "bookletItem": {
        "a": "4"
      },
      "points": [
        "Pemeteraian kemudian dilakukan atas dokumen alat bukti di pengadilan dan atas dokumen yang Bea Meterainya tidak atau kurang dibayar.",
        "Dokumen yang sejak awal terutang tetapi tidak atau kurang dibayar dikenai sanksi administratif 100% dari Bea Meterai terutang, dibayar bersama pokok saat pemeteraian kemudian.",
        "Dokumen yang baru menjadi objek karena diajukan sebagai alat bukti hanya membayar pokok, tanpa sanksi.",
        "Pejabat yang menerima, mempertimbangkan, menyimpan, melekatkan, menyalin, atau memberi catatan pada dokumen yang Bea Meterainya belum dibayar dikenai sanksi administratif sesuai ketentuan disiplin.",
        "Meniru/memalsukan meterai (Pasal 24) dan memakai, menjual, atau mengimpor meterai palsu (Pasal 25) diancam pidana penjara paling lama 7 tahun.",
        "Menghilangkan tanda bekas pakai lalu memakai atau menjual kembali meterai (Pasal 26) diancam pidana penjara paling lama 3 tahun.",
        "Besaran pidana denda dalam UU Bea Meterai disesuaikan dengan kategori denda KUHP melalui UU 1/2026."
      ],
      "table": {
        "head": [
          "Pelanggaran",
          "Akibat"
        ],
        "rows": [
          [
            "Dokumen objek sejak awal, tidak/kurang bayar",
            "Pokok + sanksi 100% (pemeteraian kemudian)"
          ],
          [
            "Dokumen baru objek karena alat bukti",
            "Pokok saja"
          ],
          [
            "Memalsukan/meniru meterai; mengedarkan meterai palsu",
            "Penjara maks. 7 tahun + denda"
          ],
          [
            "Memakai kembali meterai bekas",
            "Penjara maks. 3 tahun + denda"
          ]
        ]
      },
      "traps": [
        "Sanksi 100% bukan bunga per bulan dan tidak bergantung lamanya keterlambatan.",
        "Jangan mengenakan sanksi pada dokumen yang baru terutang saat diajukan ke pengadilan."
      ],
      "legal": "UU 10/2020 Pasal 17, 18, 21, 24–26; UU 1/2026; PMK 78/2024."
    }
  ],
  "questions": [
    {
      "id": "bm-001",
      "levels": [
        "a",
        "b"
      ],
      "section": "objek-tarif",
      "kind": "konsep",
      "prompt": "Dokumen mana yang menjadi objek Bea Meterai berdasarkan jenisnya, tanpa perlu menguji nilai nominal?",
      "options": [
        "Salinan akta jual beli yang dibuat PPAT",
        "Kuitansi Rp4 juta yang disimpan sebagai arsip",
        "Konosemen pengiriman barang antarpulau",
        "Tanda terima pembayaran uang pensiun"
      ],
      "answer": 0,
      "explanation": "Akta PPAT beserta salinan dan kutipannya objek berapa pun nilainya. Kuitansi Rp4 juta belum lewat ambang, sedangkan konosemen dan tanda terima pensiun termasuk dokumen yang dikecualikan.",
      "legal": "UU 10/2020 Pasal 3 dan 7"
    },
    {
      "id": "bm-002",
      "levels": [
        "a",
        "b"
      ],
      "section": "objek-tarif",
      "kind": "konsep",
      "prompt": "Ambang nominal \"lebih dari Rp5.000.000\" dalam UU Bea Meterai berlaku untuk dokumen jenis apa?",
      "options": [
        "Surat perjanjian beserta seluruh rangkapnya",
        "Akta notaris beserta grosse dan salinannya",
        "Surat berharga seperti cek dan bilyet giro",
        "Dokumen yang menyebut penerimaan uang atau pengakuan pelunasan utang"
      ],
      "answer": 3,
      "explanation": "Ambang hanya untuk dokumen yang menyatakan jumlah uang. Perjanjian, akta, dan surat berharga objek tanpa melihat nilai.",
      "legal": "UU 10/2020 Pasal 3 ayat (2) huruf g"
    },
    {
      "id": "bm-003",
      "levels": [
        "a",
        "b"
      ],
      "section": "objek-tarif",
      "kind": "konsep",
      "prompt": "Kuitansi pembayaran tepat Rp5.000.000 diserahkan kepada pembeli dan hanya disimpan sebagai arsip. Bagaimana statusnya?",
      "options": [
        "Objek dan terutang Rp10.000 karena mencapai Rp5 juta",
        "Objek bila nominal ditulis dengan angka dan huruf",
        "Bukan objek karena nominalnya belum lebih dari Rp5 juta",
        "Objek bila kuitansi dibuat dalam bentuk elektronik"
      ],
      "answer": 2,
      "explanation": "Syaratnya lebih dari Rp5 juta, sehingga tepat Rp5 juta belum objek. Format penulisan atau bentuk elektronik tidak mengubah ambang; kuitansi baru dapat menjadi objek bila diajukan sebagai alat bukti.",
      "legal": "UU 10/2020 Pasal 3 ayat (2) huruf g"
    },
    {
      "id": "bm-004",
      "levels": [
        "a",
        "b"
      ],
      "section": "objek-tarif",
      "kind": "hitung",
      "prompt": "Satu perjanjian kredit senilai Rp2 miliar dibuat dalam satu lembar asli. Berapa Bea Meterainya?",
      "options": [
        "Rp20.000",
        "Rp10.000",
        "Rp2.000.000",
        "Rp4.000.000"
      ],
      "answer": 1,
      "explanation": "Tarif Bea Meterai tetap Rp10.000 per dokumen, tidak bergantung nilai perjanjian. Rp2 juta dan Rp4 juta muncul bila keliru memakai tarif persentase (0,1% dan 0,2%).",
      "legal": "UU 10/2020 Pasal 5"
    },
    {
      "id": "bm-005",
      "levels": [
        "a",
        "b"
      ],
      "section": "objek-tarif",
      "kind": "kasus",
      "prompt": "Arsip PT Sinar berisi: dua rangkap perjanjian sewa Rp3 juta (satu untuk tiap pihak), satu kuitansi Rp7 juta, satu kuitansi Rp5 juta, satu slip gaji Rp9 juta, dan satu salinan akta notaris. Semua dipakai sesuai fungsi asalnya. Berapa total Bea Meterai?",
      "options": [
        "Rp30.000",
        "Rp40.000",
        "Rp50.000",
        "Rp60.000"
      ],
      "answer": 1,
      "explanation": "Objek: dua rangkap perjanjian, kuitansi Rp7 juta, dan salinan akta = 4 × Rp10.000 = Rp40.000. Kuitansi Rp5 juta belum lewat ambang, dan slip gaji dikecualikan walaupun Rp9 juta.",
      "legal": "UU 10/2020 Pasal 3, 5, 7"
    },
    {
      "id": "bm-006",
      "levels": [
        "a",
        "b"
      ],
      "section": "objek-tarif",
      "kind": "konsep",
      "prompt": "Kontrak jasa ditandatangani para pihak secara elektronik melalui platform tanda tangan digital dan tidak pernah dicetak. Bagaimana kedudukannya?",
      "options": [
        "Objek Bea Meterai, sama seperti kontrak kertas",
        "Bukan objek karena UU hanya mengatur dokumen kertas",
        "Objek hanya bila kontrak kemudian dicetak",
        "Bukan objek kecuali diajukan sebagai alat bukti"
      ],
      "answer": 0,
      "explanation": "UU 10/2020 menyatakan dokumen dapat berbentuk kertas atau elektronik. Kontrak elektronik objek sejak ditandatangani dan dilunasi dengan meterai elektronik.",
      "legal": "UU 10/2020 Pasal 1 dan 3"
    },
    {
      "id": "bm-007",
      "levels": [
        "a",
        "b"
      ],
      "section": "objek-tarif",
      "kind": "konsep",
      "prompt": "Manakah pernyataan yang TIDAK tepat tentang dokumen yang digunakan sebagai alat bukti di pengadilan?",
      "options": [
        "Dokumen yang semula bukan objek dapat menjadi objek saat diajukan",
        "Pihak yang mengajukan dokumen menanggung Bea Meterainya",
        "Pelunasannya dilakukan melalui pemeteraian kemudian",
        "Bea Meterai atas alat bukti terutang sejak dokumen itu dibuat"
      ],
      "answer": 3,
      "explanation": "Saat terutang alat bukti adalah ketika dokumen diajukan ke pengadilan, bukan saat dibuat. Tiga pernyataan lain sesuai Pasal 8, 9, dan 17.",
      "legal": "UU 10/2020 Pasal 3 ayat (1) huruf b, Pasal 8, 9, 17"
    },
    {
      "id": "bm-008",
      "levels": [
        "a",
        "b"
      ],
      "section": "objek-tarif",
      "kind": "konsep",
      "prompt": "Perusahaan menerbitkan bilyet giro senilai Rp3 juta kepada pemasok. Bagaimana status Bea Meterainya?",
      "options": [
        "Bukan objek karena nilainya di bawah Rp5 juta",
        "Objek hanya bila dicairkan di atas Rp5 juta",
        "Objek, karena surat berharga tidak memakai ambang nominal",
        "Bukan objek karena dokumen perbankan dikecualikan"
      ],
      "answer": 2,
      "explanation": "Bilyet giro adalah surat berharga yang objek dengan nama dan dalam bentuk apa pun. Ambang Rp5 juta hanya untuk dokumen yang menyatakan jumlah uang.",
      "legal": "UU 10/2020 Pasal 3 ayat (2) huruf d"
    },
    {
      "id": "bm-009",
      "levels": [
        "b"
      ],
      "section": "objek-tarif",
      "kind": "hitung",
      "prompt": "Pejabat lelang membuat minuta risalah lelang, menyerahkan satu salinan risalah kepada pembeli, dan satu kutipan risalah kepada penjual. Berapa Bea Meterai atas dokumen lelang tersebut?",
      "options": [
        "Rp10.000",
        "Rp20.000",
        "Rp30.000",
        "Rp0"
      ],
      "answer": 2,
      "explanation": "Minuta, salinan, dan kutipan risalah lelang masing-masing objek: 3 × Rp10.000 = Rp30.000. Satu peristiwa lelang tidak berarti satu objek, dan dokumen lelang tidak dikecualikan.",
      "legal": "UU 10/2020 Pasal 3 ayat (2) huruf f"
    },
    {
      "id": "bm-010",
      "levels": [
        "a",
        "b"
      ],
      "section": "saat-pihak",
      "kind": "konsep",
      "prompt": "Kapan Bea Meterai atas surat perjanjian dua pihak menjadi terutang?",
      "options": [
        "Saat pembayaran pertama dilakukan",
        "Saat perjanjian dibubuhi tanda tangan",
        "Saat perjanjian diserahkan ke notaris",
        "Saat tanggal jatuh tempo perjanjian"
      ],
      "answer": 1,
      "explanation": "Perjanjian, akta notaris, dan akta PPAT terutang saat dibubuhi tanda tangan. Tanggal pembayaran dan jatuh tempo tidak relevan.",
      "legal": "UU 10/2020 Pasal 8 ayat (1) huruf a"
    },
    {
      "id": "bm-011",
      "levels": [
        "a",
        "b"
      ],
      "section": "saat-pihak",
      "kind": "konsep",
      "prompt": "Pasangan dokumen dan saat terutang manakah yang TIDAK tepat?",
      "options": [
        "Kuitansi Rp8 juta – saat uang masuk ke rekening penjual",
        "Akta notaris – saat dibubuhi tanda tangan",
        "Surat berharga – saat selesai dibuat",
        "Dokumen dari luar negeri – saat digunakan di Indonesia"
      ],
      "answer": 0,
      "explanation": "Dokumen yang menyatakan jumlah uang terutang saat diserahkan kepada pihak untuk siapa dokumen dibuat, bukan saat dana diterima. Tiga pasangan lain sesuai Pasal 8.",
      "legal": "UU 10/2020 Pasal 8"
    },
    {
      "id": "bm-012",
      "levels": [
        "b"
      ],
      "section": "saat-pihak",
      "kind": "kasus",
      "prompt": "Perusahaan menerbitkan cek dan surat pernyataan pada hari yang sama. Surat pernyataan baru diserahkan kepada pihak yang dituju dua hari kemudian, sedangkan cek dicairkan seminggu kemudian. Bagaimana saat terutangnya?",
      "options": [
        "Keduanya pada hari yang sama saat dibuat",
        "Cek saat dicairkan; surat pernyataan saat diserahkan",
        "Cek saat diserahkan; surat pernyataan saat dibuat",
        "Cek saat selesai dibuat; surat pernyataan saat diserahkan"
      ],
      "answer": 3,
      "explanation": "Surat berharga seperti cek terutang saat selesai dibuat, bukan saat dicairkan. Surat pernyataan terutang saat diserahkan kepada pihak yang dituju.",
      "legal": "UU 10/2020 Pasal 8 ayat (1) huruf b dan c"
    },
    {
      "id": "bm-013",
      "levels": [
        "b"
      ],
      "section": "saat-pihak",
      "kind": "hitung",
      "prompt": "Dua kontrak dibuat dan ditandatangani di luar negeri pada Februari. Kontrak pertama dipakai di Indonesia pada April; kontrak kedua belum pernah dipakai di Indonesia. Masing-masing satu dokumen. Berapa Bea Meterai yang sudah terutang per akhir April?",
      "options": [
        "Rp20.000, terutang sejak Februari",
        "Rp10.000 atas kontrak pertama, terutang sejak Februari",
        "Nihil karena kedua kontrak dibuat di luar negeri",
        "Rp10.000 atas kontrak pertama, terutang pada April"
      ],
      "answer": 3,
      "explanation": "Dokumen luar negeri terutang saat digunakan di Indonesia. Per akhir April baru kontrak pertama memenuhi syarat itu.",
      "legal": "UU 10/2020 Pasal 8 ayat (3)"
    },
    {
      "id": "bm-014",
      "levels": [
        "a",
        "b"
      ],
      "section": "saat-pihak",
      "kind": "kasus",
      "prompt": "Penjual menyerahkan kuitansi Rp9 juta kepada pembeli. Keduanya sepakat penjual yang membayar Bea Meterai. Bagaimana kedudukan hukumnya?",
      "options": [
        "Penjual otomatis terutang karena menerbitkan kuitansi",
        "Penjual dan pembeli sama-sama terutang atas kuitansi itu",
        "Pembeli pada dasarnya terutang, tetapi para pihak boleh menyepakati pembayarnya",
        "Kesepakatan itu menghapus kewajiban Bea Meterai"
      ],
      "answer": 2,
      "explanation": "Dokumen sepihak terutang oleh penerima dokumen, yaitu pembeli. Pasal 9 memberi ruang kesepakatan tentang siapa yang membayar, tanpa menghapus pajaknya.",
      "legal": "UU 10/2020 Pasal 9 ayat (1)"
    },
    {
      "id": "bm-015",
      "levels": [
        "a",
        "b"
      ],
      "section": "saat-pihak",
      "kind": "hitung",
      "prompt": "Perjanjian kerja sama tiga pihak dibuat tiga rangkap; tiap pihak menerima satu rangkap. Tidak ada kesepakatan lain tentang pembayar. Berapa Bea Meterai yang ditanggung pihak kedua?",
      "options": [
        "Rp30.000",
        "Rp10.000",
        "Rp20.000",
        "Rp3.333"
      ],
      "answer": 1,
      "explanation": "Dokumen yang dibuat dua pihak atau lebih terutang oleh masing-masing pihak atas rangkap yang diterimanya: pihak kedua menanggung satu rangkap Rp10.000. Rp30.000 adalah total ketiga rangkap; Bea Meterai tidak dibagi rata.",
      "legal": "UU 10/2020 Pasal 9 ayat (1) huruf b"
    },
    {
      "id": "bm-016",
      "levels": [
        "a",
        "b"
      ],
      "section": "saat-pihak",
      "kind": "konsep",
      "prompt": "PT Mega menerbitkan cek kepada pemasoknya. Siapa pihak yang terutang Bea Meterai atas cek tersebut?",
      "options": [
        "PT Mega selaku penerbit cek",
        "Pemasok selaku penerima cek",
        "Bank tempat rekening PT Mega",
        "Pihak yang mencairkan cek"
      ],
      "answer": 0,
      "explanation": "Untuk surat berharga, Bea Meterai terutang oleh pihak yang menerbitkan. Aturan \"penerima dokumen\" berlaku untuk dokumen sepihak selain surat berharga.",
      "legal": "UU 10/2020 Pasal 9 ayat (2)"
    },
    {
      "id": "bm-017",
      "levels": [
        "b"
      ],
      "section": "saat-pihak",
      "kind": "konsep",
      "prompt": "Perjanjian lisensi ditandatangani di Singapura antara pemberi lisensi asing dan PT Andalas, lalu digunakan PT Andalas di Indonesia. Siapa pihak terutang Bea Meterai?",
      "options": [
        "Penerima manfaat atas dokumen, yaitu PT Andalas",
        "Pihak yang pertama kali menandatangani",
        "Pemberi lisensi asing sebagai pembuat dokumen",
        "Penerjemah tersumpah yang menerjemahkan kontrak"
      ],
      "answer": 0,
      "explanation": "Dokumen yang dibuat di luar negeri terutang oleh penerima manfaat saat dokumen digunakan di Indonesia.",
      "legal": "UU 10/2020 Pasal 9"
    },
    {
      "id": "bm-018",
      "levels": [
        "a",
        "b"
      ],
      "section": "saat-pihak",
      "kind": "kasus",
      "prompt": "Kontrak jual beli ditandatangani 3 Maret. Pembeli mentransfer pembayaran Rp12 juta pada 8 Maret, dan penjual menyerahkan kuitansinya pada 10 Maret. Kapan saat terutang kedua dokumen?",
      "options": [
        "Kontrak 3 Maret, kuitansi 8 Maret",
        "Keduanya 10 Maret saat transaksi selesai",
        "Keduanya 3 Maret saat kontrak ditandatangani",
        "Kontrak 3 Maret, kuitansi 10 Maret"
      ],
      "answer": 3,
      "explanation": "Kontrak terutang saat ditandatangani. Kuitansi terutang saat diserahkan kepada pihak yang dituju, bukan saat dana ditransfer.",
      "legal": "UU 10/2020 Pasal 8"
    },
    {
      "id": "bm-019",
      "levels": [
        "b"
      ],
      "section": "saat-pihak",
      "kind": "konsep",
      "prompt": "Perusahaan efek menerbitkan konfirmasi transaksi jual beli saham untuk nasabah. Kapan Bea Meterai atas dokumen transaksi surat berharga itu terutang?",
      "options": [
        "Saat transaksi diselesaikan di lembaga kliring",
        "Saat nasabah menandatangani dokumen",
        "Saat dokumen selesai dibuat",
        "Saat dokumen diajukan ke pengadilan"
      ],
      "answer": 2,
      "explanation": "Surat berharga dan dokumen transaksi surat berharga termasuk efek terutang saat dokumen selesai dibuat.",
      "legal": "UU 10/2020 Pasal 8 ayat (1) huruf b"
    },
    {
      "id": "bm-020",
      "levels": [
        "a",
        "b"
      ],
      "section": "pengecualian",
      "kind": "konsep",
      "prompt": "Manakah dokumen berikut yang TIDAK termasuk dokumen yang dikecualikan dari Bea Meterai?",
      "options": [
        "Ijazah sarjana yang dipakai melamar kerja",
        "Surat pernyataan pengakuan utang Rp20 juta",
        "Tanda terima pembayaran uang pensiun",
        "Konosemen pengangkutan barang"
      ],
      "answer": 1,
      "explanation": "Surat pernyataan termasuk objek tanpa ambang nilai. Ijazah, tanda terima pensiun, dan dokumen lalu lintas barang dikecualikan oleh Pasal 7.",
      "legal": "UU 10/2020 Pasal 3 dan 7"
    },
    {
      "id": "bm-021",
      "levels": [
        "a",
        "b"
      ],
      "section": "pengecualian",
      "kind": "kasus",
      "prompt": "Sebuah akta notaris tentang hibah peralatan bernilai Rp3 juta dan satu bukti penerimaan gaji Rp7 juta diperiksa sebagai dokumen biasa. Bagaimana klasifikasinya?",
      "options": [
        "Keduanya objek karena memuat nilai uang",
        "Akta objek, bukti penerimaan gaji bukan objek",
        "Hanya bukti gaji yang objek karena di atas Rp5 juta",
        "Keduanya bukan objek karena nilainya kecil"
      ],
      "answer": 1,
      "explanation": "Akta notaris objek berdasarkan jenis dokumen. Tanda terima gaji dikecualikan meskipun nominalnya lebih dari Rp5 juta.",
      "legal": "UU 10/2020 Pasal 3 dan 7"
    },
    {
      "id": "bm-022",
      "levels": [
        "a",
        "b"
      ],
      "section": "pengecualian",
      "kind": "konsep",
      "prompt": "Bagian keuangan membuat bon kas Rp15 juta untuk penyerahan uang antardivisi di dalam perusahaan. Bagaimana statusnya?",
      "options": [
        "Bukan objek karena tanda penerimaan uang untuk keperluan intern organisasi",
        "Objek karena nominalnya lebih dari Rp5 juta",
        "Objek dan terutang oleh divisi penerima uang",
        "Objek tetapi dapat dibebaskan dengan fasilitas Pasal 22"
      ],
      "answer": 0,
      "explanation": "Tanda penerimaan uang yang dibuat untuk keperluan intern organisasi dikecualikan oleh Pasal 7, sehingga ambang nominal tidak diuji.",
      "legal": "UU 10/2020 Pasal 7"
    },
    {
      "id": "bm-023",
      "levels": [
        "a",
        "b"
      ],
      "section": "pengecualian",
      "kind": "hitung",
      "prompt": "Seorang nasabah menerima bukti setoran tabungan Rp50 juta dari bank, surat gadai dari perusahaan pergadaian, dan kuitansi pembelian laptop Rp6 juta dari toko. Berapa total Bea Meterai yang terutang?",
      "options": [
        "Rp0",
        "Rp20.000",
        "Rp30.000",
        "Rp10.000"
      ],
      "answer": 3,
      "explanation": "Dokumen simpanan uang di bank dan surat gadai dikecualikan. Hanya kuitansi Rp6 juta yang objek: 1 × Rp10.000.",
      "legal": "UU 10/2020 Pasal 7"
    },
    {
      "id": "bm-024",
      "levels": [
        "a",
        "b"
      ],
      "section": "pengecualian",
      "kind": "konsep",
      "prompt": "Akta pengalihan hak atas tanah dibuat dalam rangka percepatan pemulihan akibat bencana alam. Klasifikasi yang tepat adalah apa?",
      "options": [
        "Bukan objek karena termasuk pengecualian Pasal 7",
        "Objek dengan tarif setengahnya, yaitu Rp5.000",
        "Tetap objek, tetapi dapat diberi fasilitas pembebasan Pasal 22",
        "Bukan objek bila nilai pengalihannya di bawah Rp5 juta"
      ],
      "answer": 2,
      "explanation": "Pasal 22 memberi pembebasan atas dokumen yang sebenarnya objek. Pasal 7 mengatur dokumen yang sejak awal bukan objek; UU tidak mengenal tarif setengah.",
      "legal": "UU 10/2020 Pasal 7 dan 22"
    },
    {
      "id": "bm-025",
      "levels": [
        "b"
      ],
      "section": "pengecualian",
      "kind": "konsep",
      "prompt": "Manakah yang BUKAN termasuk kelompok dokumen yang dapat diberi fasilitas pembebasan Bea Meterai menurut Pasal 22?",
      "options": [
        "Dokumen untuk kegiatan keagamaan atau sosial yang tidak komersial",
        "Dokumen dalam rangka program pemerintah atau kebijakan moneter",
        "Perjanjian jual beli antarperusahaan untuk menekan biaya transaksi",
        "Dokumen terkait pelaksanaan perjanjian internasional"
      ],
      "answer": 2,
      "explanation": "Pasal 22 membatasi pembebasan pada bencana alam, kegiatan keagamaan/sosial nonkomersial, program pemerintah atau kebijakan moneter/jasa keuangan, dan perjanjian internasional. Transaksi komersial biasa tidak termasuk.",
      "legal": "UU 10/2020 Pasal 22"
    },
    {
      "id": "bm-026",
      "levels": [
        "a",
        "b"
      ],
      "section": "pengecualian",
      "kind": "hitung",
      "prompt": "Sebuah map berisi ijazah, konosemen, kuitansi pembelian mesin Rp6 juta, surat gadai, dan akta jual beli tanah oleh PPAT. Semua dipakai sesuai fungsi asalnya. Berapa Bea Meterainya?",
      "options": [
        "Rp10.000",
        "Rp20.000",
        "Rp30.000",
        "Rp50.000"
      ],
      "answer": 1,
      "explanation": "Objek hanya kuitansi Rp6 juta dan akta PPAT: 2 × Rp10.000 = Rp20.000. Ijazah, konosemen, dan surat gadai dikecualikan.",
      "legal": "UU 10/2020 Pasal 3 dan 7"
    },
    {
      "id": "bm-027",
      "levels": [
        "a",
        "b"
      ],
      "section": "pengecualian",
      "kind": "konsep",
      "prompt": "Emiten membagikan dividen dan menerbitkan tanda pembagian keuntungan kepada pemegang saham senilai Rp25 juta. Bagaimana Bea Meterainya?",
      "options": [
        "Bukan objek karena tanda pembagian keuntungan surat berharga dikecualikan",
        "Objek karena nominalnya lebih dari Rp5 juta",
        "Objek karena merupakan dokumen transaksi surat berharga",
        "Objek dan terutang oleh emiten selaku penerbit"
      ],
      "answer": 0,
      "explanation": "Tanda pembagian keuntungan, bunga, atau imbal hasil dari surat berharga termasuk pengecualian Pasal 7, sehingga ambang nominal tidak relevan.",
      "legal": "UU 10/2020 Pasal 7"
    },
    {
      "id": "bm-028",
      "levels": [
        "a"
      ],
      "section": "pemungut",
      "kind": "konsep",
      "prompt": "Manakah yang BUKAN kewajiban Pemungut Bea Meterai?",
      "options": [
        "Memungut Bea Meterai dari pihak yang terutang",
        "Menyetorkan Bea Meterai yang dipungut ke kas negara",
        "Melaporkan pemungutan dalam SPT Masa Bea Meterai",
        "Menanggung Bea Meterai dari dananya sendiri sebagai pihak terutang"
      ],
      "answer": 3,
      "explanation": "Pemungut menjalankan pungut–setor–lapor atas Bea Meterai yang terutang oleh pihak lain. Ia bukan pihak terutang.",
      "legal": "UU 10/2020 Pasal 10 dan 11"
    },
    {
      "id": "bm-029",
      "levels": [
        "a"
      ],
      "section": "pemungut",
      "kind": "konsep",
      "prompt": "Pemungut memungut Bea Meterai pada Masa Juli. Kapan batas penyetorannya menurut ketentuan yang berlaku?",
      "options": [
        "10 Agustus",
        "20 Agustus",
        "31 Agustus",
        "15 Agustus"
      ],
      "answer": 3,
      "explanation": "PMK 78/2024 (diteruskan PMK 81/2024) menetapkan setor paling lambat tanggal 15 bulan berikutnya. Tanggal 10 adalah aturan lama PMK 151/2021.",
      "legal": "PMK 78/2024 Pasal 63; PMK 81/2024"
    },
    {
      "id": "bm-030",
      "levels": [
        "a"
      ],
      "section": "pemungut",
      "kind": "konsep",
      "prompt": "Kapan batas pelaporan SPT Masa Bea Meterai Masa Juli oleh pemungut?",
      "options": [
        "20 Agustus, seperti SPT Masa PPh",
        "31 Agustus, seperti SPT Masa PPN",
        "15 Agustus, sama dengan batas setor",
        "10 Agustus, lima hari sebelum batas setor"
      ],
      "answer": 2,
      "explanation": "SPT Masa Bea Meterai dilaporkan paling lambat tanggal 15 bulan berikutnya. Tanggal 20 adalah aturan lama PMK 151/2021 dan berlaku untuk SPT Masa PPh, bukan Bea Meterai.",
      "legal": "PMK 78/2024 Pasal 64; PMK 81/2024"
    },
    {
      "id": "bm-031",
      "levels": [
        "a"
      ],
      "section": "pemungut",
      "kind": "kasus",
      "prompt": "Selama September, pemungut memfasilitasi 150 dokumen yang menyatakan penerimaan uang: 120 dokumen bernilai di atas Rp5 juta dan 30 dokumen tepat Rp5 juta. Berapa yang disetor dan kapan batas setornya?",
      "options": [
        "Rp1.500.000, paling lambat 15 Oktober",
        "Rp1.200.000, paling lambat 15 Oktober",
        "Rp1.200.000, paling lambat 20 Oktober",
        "Rp1.200.000, paling lambat 31 Oktober"
      ],
      "answer": 1,
      "explanation": "Hanya dokumen lebih dari Rp5 juta yang objek: 120 × Rp10.000 = Rp1.200.000. Batas setor tanggal 15 bulan berikutnya.",
      "legal": "UU 10/2020 Pasal 3; PMK 78/2024 Pasal 63"
    },
    {
      "id": "bm-032",
      "levels": [
        "a"
      ],
      "section": "pemungut",
      "kind": "konsep",
      "prompt": "Pihak manakah yang memenuhi kriteria Pemungut Bea Meterai?",
      "options": [
        "Bank yang memfasilitasi penerbitan cek dan bilyet giro bagi nasabah",
        "Perorangan yang menandatangani lima perjanjian sewa sebulan",
        "Toko yang menerbitkan 200 kuitansi di atas Rp5 juta sebulan",
        "Pengecer resmi yang menjual meterai tempel"
      ],
      "answer": 0,
      "explanation": "Fasilitator penerbitan cek/bilyet giro menjadi pemungut tanpa ambang jumlah. Untuk kuitansi di atas Rp5 juta, pemungut harus menerbitkan atau memfasilitasi lebih dari 1.000 dokumen sebulan.",
      "legal": "UU 10/2020 Pasal 10; PMK 78/2024"
    },
    {
      "id": "bm-033",
      "levels": [
        "a"
      ],
      "section": "pemungut",
      "kind": "hitung",
      "prompt": "Pemungut memfasilitasi 1.250 dokumen transaksi surat berharga dalam satu bulan. Sebanyak 50 dokumen gagal dibubuhi meterai elektronik karena gangguan sistem. Berapa Bea Meterai yang wajib disetor?",
      "options": [
        "Rp12.500.000",
        "Rp12.000.000",
        "Rp500.000",
        "Rp12.000.000 ditambah sanksi 100% atas 50 dokumen"
      ],
      "answer": 0,
      "explanation": "Gangguan sistem tidak menghapus pemungutan: 1.250 × Rp10.000 = Rp12.500.000. Daftar 50 dokumen tanpa meterai elektronik dilampirkan pada SPT Masa Bea Meterai.",
      "legal": "PMK 78/2024"
    },
    {
      "id": "bm-034",
      "levels": [
        "a"
      ],
      "section": "pemungut",
      "kind": "kasus",
      "prompt": "Pemungut sudah menyetor tepat waktu tetapi terlambat menyampaikan SPT Masa Bea Meterai. Rujukan sanksi yang tepat adalah apa?",
      "options": [
        "Sanksi 100% melalui pemeteraian kemudian",
        "Pidana pemakaian kembali meterai Pasal 26",
        "Tidak ada sanksi karena pihak terutang yang menanggung",
        "Sanksi administratif menurut ketentuan UU KUP"
      ],
      "answer": 3,
      "explanation": "Keterlambatan setor atau lapor oleh pemungut mengikuti sanksi UU KUP. Sanksi 100% pemeteraian kemudian berlaku bagi pihak terutang atas dokumen yang tidak/kurang dibayar.",
      "legal": "UU 10/2020 Pasal 11; UU KUP Pasal 7"
    },
    {
      "id": "bm-035",
      "levels": [
        "a"
      ],
      "section": "pembayaran",
      "kind": "konsep",
      "prompt": "Manakah yang BUKAN sarana pembayaran Bea Meterai menurut UU 10/2020?",
      "options": [
        "Meterai tempel",
        "Meterai elektronik",
        "Pemotongan melalui bukti potong PPh pihak terutang",
        "Surat Setoran Pajak"
      ],
      "answer": 2,
      "explanation": "Bea Meterai dibayar dengan meterai (tempel, elektronik, bentuk lain) atau SSP. Bukti potong PPh bukan sarana pelunasan Bea Meterai.",
      "legal": "UU 10/2020 Pasal 12"
    },
    {
      "id": "bm-036",
      "levels": [
        "a"
      ],
      "section": "pembayaran",
      "kind": "konsep",
      "prompt": "Bank membubuhkan tanda Bea Meterai pada formulir dengan mesin teraan meterai digital. Bentuk meterai itu termasuk kategori apa?",
      "options": [
        "Meterai tempel",
        "Meterai dalam bentuk lain",
        "Meterai elektronik",
        "Surat Setoran Pajak"
      ],
      "answer": 1,
      "explanation": "Meterai dalam bentuk lain mencakup teraan mesin meterai digital, sistem komputerisasi, meterai percetakan, dan alat berteknologi tertentu.",
      "legal": "UU 10/2020 Pasal 13"
    },
    {
      "id": "bm-037",
      "levels": [
        "a",
        "b"
      ],
      "section": "pembayaran",
      "kind": "kasus",
      "prompt": "Perusahaan menyimpan kontrak elektronik yang ditandatangani para pihak dan ijazah elektronik karyawan yang hanya dipakai sebagai arsip. Bagaimana penggunaan meterai elektronik?",
      "options": [
        "Meterai elektronik wajib dibubuhkan pada keduanya",
        "Kontrak objek dan dapat dilunasi dengan meterai elektronik; ijazah bukan objek",
        "Meterai elektronik hanya dapat dipakai pada ijazah",
        "Keduanya harus dicetak lalu diberi meterai tempel"
      ],
      "answer": 1,
      "explanation": "Format elektronik tidak mengubah status objek. Kontrak objek dan memakai meterai elektronik, sedangkan ijazah dikecualikan.",
      "legal": "UU 10/2020 Pasal 3, 7, 13",
      "source": "Try Out UKP Tingkat B"
    },
    {
      "id": "bm-038",
      "levels": [
        "a"
      ],
      "section": "pembayaran",
      "kind": "konsep",
      "prompt": "Dalam kondisi mana Bea Meterai yang dilunasi dengan meterai tempel dianggap tidak dibayar?",
      "options": [
        "Meterai tempel bekas pakai dilepas lalu ditempel pada dokumen lain",
        "Tanda tangan dibubuhkan sebagian di atas meterai tempel",
        "Meterai tempel desain 2021 senilai Rp10.000 ditempel utuh",
        "Meterai tempel ditempel pada dokumen kertas asli"
      ],
      "answer": 0,
      "explanation": "Meterai tempel yang sudah pernah dipakai, rusak, atau tidak utuh dianggap tidak dibayar. Tiga pilihan lain adalah cara pembubuhan yang benar.",
      "legal": "UU 10/2020 Pasal 13; PMK 78/2024"
    },
    {
      "id": "bm-039",
      "levels": [
        "a"
      ],
      "section": "pembayaran",
      "kind": "hitung",
      "prompt": "Pada Juni 2021, sebuah perjanjian hanya dibubuhi satu meterai tempel desain lama Rp6.000. Menurut ketentuan peralihan UU 10/2020, berapa nilai meterai desain lama yang masih harus ditambahkan?",
      "options": [
        "Rp4.000",
        "Rp0",
        "Rp10.000",
        "Rp3.000"
      ],
      "answer": 3,
      "explanation": "Sampai 31 Desember 2021 meterai lama boleh dipakai dengan nilai total paling sedikit Rp9.000 per dokumen: Rp9.000 − Rp6.000 = Rp3.000. Rp4.000 muncul bila keliru memakai tarif baru Rp10.000 sebagai batas.",
      "legal": "UU 10/2020 Pasal 28"
    },
    {
      "id": "bm-040",
      "levels": [
        "a"
      ],
      "section": "pembayaran",
      "kind": "konsep",
      "prompt": "Ciri yang membedakan meterai elektronik dari hasil pindai meterai tempel adalah apa?",
      "options": [
        "Memuat hologram dan serat pengaman pada kertas",
        "Wajib ditandatangani basah di atas cetakannya",
        "Memiliki kode unik dan keterangan tertentu yang diterbitkan sistem resmi",
        "Dibuat sendiri oleh pihak terutang dari meterai tempel"
      ],
      "answer": 2,
      "explanation": "Meterai elektronik memiliki kode unik dan keterangan tertentu. Hasil pindai meterai tempel tidak sah sebagai pelunasan dokumen elektronik.",
      "legal": "UU 10/2020 Pasal 13; PMK 78/2024"
    },
    {
      "id": "bm-041",
      "levels": [
        "a"
      ],
      "section": "sanksi",
      "kind": "kasus",
      "prompt": "Tanda terima gaji yang semula bukan objek diajukan sebagai alat bukti. Dokumen lain berupa perjanjian yang terutang sejak ditandatangani belum dibayar. Bagaimana perlakuan keduanya saat pemeteraian kemudian?",
      "options": [
        "Keduanya membayar pokok dan sanksi 100%",
        "Keduanya bebas karena sudah lewat dari saat dibuat",
        "Tanda terima gaji membayar pokok saja; perjanjian membayar pokok dan sanksi 100%",
        "Perjanjian membayar pokok saja; tanda terima gaji ditambah sanksi"
      ],
      "answer": 2,
      "explanation": "Tanda terima gaji baru terutang saat diajukan ke pengadilan, sehingga tidak ada keterlambatan. Perjanjian sudah terutang sejak ditandatangani, sehingga pemeteraian kemudian mencakup sanksi 100%.",
      "legal": "UU 10/2020 Pasal 17 dan 18"
    },
    {
      "id": "bm-042",
      "levels": [
        "a"
      ],
      "section": "sanksi",
      "kind": "kasus",
      "prompt": "Petugas menghitung sanksi pemeteraian kemudian atas kontrak yang belum dibayar Bea Meterainya sejak ditandatangani tiga tahun lalu sebesar 2% per bulan × 24 bulan. Di mana kesalahannya?",
      "options": [
        "Batas maksimal seharusnya 15 bulan, bukan 24 bulan",
        "Sanksinya 100% dari Bea Meterai terutang, bukan bunga per bulan",
        "Sanksi gugur karena sudah lewat tiga tahun",
        "Sanksi hanya berlaku untuk dokumen alat bukti"
      ],
      "answer": 1,
      "explanation": "Sanksi pemeteraian kemudian berupa 100% dari Bea Meterai terutang (Rp10.000), tidak dihitung per bulan. Dokumen alat bukti yang baru terutang justru tidak dikenai sanksi.",
      "legal": "UU 10/2020 Pasal 18"
    },
    {
      "id": "bm-043",
      "levels": [
        "a"
      ],
      "section": "sanksi",
      "kind": "hitung",
      "prompt": "Untuk sidang perdata diajukan: kuitansi Rp4 juta (baru terutang saat diajukan), kontrak yang meterainya sudah lunas, perjanjian yang belum dibayar sejak ditandatangani, dan slip gaji. Berapa bagian sanksi administratif dari pemeteraian kemudian?",
      "options": [
        "Rp10.000",
        "Rp0",
        "Rp20.000",
        "Rp40.000"
      ],
      "answer": 0,
      "explanation": "Sanksi 100% hanya atas perjanjian yang terutang sejak awal: Rp10.000. Kuitansi dan slip gaji membayar pokok saja, sedangkan kontrak yang lunas tidak dimeteraikan ulang.",
      "legal": "UU 10/2020 Pasal 17 dan 18"
    },
    {
      "id": "bm-044",
      "levels": [
        "a"
      ],
      "section": "sanksi",
      "kind": "hitung",
      "prompt": "Kuitansi Rp7 juta diserahkan kepada pembeli tahun lalu tanpa meterai. Kini kuitansi itu diajukan sebagai alat bukti dalam sengketa perdata. Berapa yang harus dibayar melalui pemeteraian kemudian?",
      "options": [
        "Rp10.000",
        "Rp30.000",
        "Rp0",
        "Rp20.000"
      ],
      "answer": 3,
      "explanation": "Kuitansi di atas Rp5 juta sudah terutang sejak diserahkan, sehingga statusnya kurang bayar, bukan dokumen yang baru terutang karena alat bukti: pokok Rp10.000 + sanksi 100% Rp10.000 = Rp20.000.",
      "legal": "UU 10/2020 Pasal 8, 17, 18"
    },
    {
      "id": "bm-045",
      "levels": [
        "a"
      ],
      "section": "sanksi",
      "kind": "kasus",
      "prompt": "Seseorang menghilangkan bekas tanda tangan pada meterai tempel yang sudah dipakai, lalu menjualnya kembali. Ketentuan pidana mana yang sesuai?",
      "options": [
        "Pasal 24, pemalsuan meterai, penjara paling lama 7 tahun",
        "Sanksi administratif 100% melalui pemeteraian kemudian",
        "Pasal 25, penjualan meterai palsu, penjara paling lama 7 tahun",
        "Pasal 26, pemakaian/penjualan kembali meterai bekas, penjara paling lama 3 tahun"
      ],
      "answer": 3,
      "explanation": "Menghilangkan tanda bekas pakai lalu memakai atau menjual kembali meterai diatur Pasal 26. Pasal 24–25 untuk meterai yang ditiru atau dipalsukan.",
      "legal": "UU 10/2020 Pasal 24–26"
    },
    {
      "id": "bm-046",
      "levels": [
        "a"
      ],
      "section": "sanksi",
      "kind": "konsep",
      "prompt": "Perbuatan manakah yang diancam pidana penjara paling lama 7 tahun dalam UU Bea Meterai?",
      "options": [
        "Memakai kembali meterai tempel bekas",
        "Pejabat menyimpan dokumen tanpa meterai",
        "Meniru atau memalsukan meterai untuk dipakai",
        "Terlambat melaporkan SPT Masa Bea Meterai"
      ],
      "answer": 2,
      "explanation": "Pasal 24 (pemalsuan) dan Pasal 25 (mengedarkan meterai palsu) diancam paling lama 7 tahun. Pemakaian kembali paling lama 3 tahun; dua pilihan lain sanksi administratif.",
      "legal": "UU 10/2020 Pasal 24–26"
    },
    {
      "id": "bm-047",
      "levels": [
        "a"
      ],
      "section": "sanksi",
      "kind": "konsep",
      "prompt": "Pejabat instansi menerima dan melampirkan dokumen perjanjian yang Bea Meterainya belum dibayar ke berkas resmi. Konsekuensinya apa?",
      "options": [
        "Pejabat dipidana penjara paling lama 3 tahun",
        "Pejabat dikenai sanksi administratif sesuai ketentuan disiplin",
        "Pejabat wajib membayar pokok dan sanksi 100%",
        "Tidak ada konsekuensi karena kewajiban ada pada pihak terutang"
      ],
      "answer": 1,
      "explanation": "Pasal 21 melarang pejabat menerima, mempertimbangkan, menyimpan, atau melekatkan dokumen yang Bea Meterainya belum dibayar, dengan sanksi administratif. Pokok dan sanksi tetap tanggungan pihak terutang.",
      "legal": "UU 10/2020 Pasal 21"
    }
  ],
  "flashcards": [
    {
      "front": "Tarif Bea Meterai",
      "back": "Rp10.000 per dokumen (tetap)",
      "levels": [
        "a",
        "b"
      ],
      "section": "objek-tarif"
    },
    {
      "front": "Ambang dokumen yang menyatakan jumlah uang",
      "back": "Lebih dari Rp5.000.000",
      "levels": [
        "a",
        "b"
      ],
      "section": "objek-tarif"
    },
    {
      "front": "Apakah ambang Rp5 juta berlaku untuk perjanjian/akta?",
      "back": "Tidak; objek berapa pun nilainya",
      "levels": [
        "a",
        "b"
      ],
      "section": "objek-tarif"
    },
    {
      "front": "Empat jenis dokumen lelang yang menjadi objek",
      "back": "Kutipan, minuta, salinan, dan grosse risalah lelang",
      "levels": [
        "a",
        "b"
      ],
      "section": "objek-tarif"
    },
    {
      "front": "Dua kelompok besar objek Bea Meterai",
      "back": "Dokumen perdata dan dokumen alat bukti di pengadilan",
      "levels": [
        "a",
        "b"
      ],
      "section": "objek-tarif"
    },
    {
      "front": "Saat terutang perjanjian, akta notaris, akta PPAT",
      "back": "Saat dibubuhi tanda tangan",
      "levels": [
        "a",
        "b"
      ],
      "section": "saat-pihak"
    },
    {
      "front": "Saat terutang surat berharga",
      "back": "Saat selesai dibuat",
      "levels": [
        "a",
        "b"
      ],
      "section": "saat-pihak"
    },
    {
      "front": "Saat terutang kuitansi > Rp5 juta dan surat pernyataan",
      "back": "Saat diserahkan kepada pihak yang dituju",
      "levels": [
        "a",
        "b"
      ],
      "section": "saat-pihak"
    },
    {
      "front": "Saat terutang dokumen luar negeri",
      "back": "Saat digunakan di Indonesia",
      "levels": [
        "a",
        "b"
      ],
      "section": "saat-pihak"
    },
    {
      "front": "Saat terutang dokumen alat bukti",
      "back": "Saat diajukan ke pengadilan",
      "levels": [
        "a",
        "b"
      ],
      "section": "saat-pihak"
    },
    {
      "front": "Pihak terutang dokumen sepihak",
      "back": "Penerima dokumen",
      "levels": [
        "a",
        "b"
      ],
      "section": "saat-pihak"
    },
    {
      "front": "Pihak terutang surat berharga",
      "back": "Penerbit",
      "levels": [
        "a",
        "b"
      ],
      "section": "saat-pihak"
    },
    {
      "front": "Pihak terutang dokumen luar negeri",
      "back": "Penerima manfaat",
      "levels": [
        "a",
        "b"
      ],
      "section": "saat-pihak"
    },
    {
      "front": "Pasal pengecualian vs fasilitas",
      "back": "Pasal 7 = bukan objek; Pasal 22 = objek yang dibebaskan",
      "levels": [
        "a",
        "b"
      ],
      "section": "pengecualian"
    },
    {
      "front": "Contoh dokumen terkait hubungan kerja yang dikecualikan",
      "back": "Tanda terima gaji, uang tunggu, pensiun, tunjangan",
      "levels": [
        "a",
        "b"
      ],
      "section": "pengecualian"
    },
    {
      "front": "Status ijazah",
      "back": "Bukan objek (segala bentuk ijazah)",
      "levels": [
        "a",
        "b"
      ],
      "section": "pengecualian"
    },
    {
      "front": "Empat kelompok fasilitas Pasal 22",
      "back": "Bencana alam; keagamaan/sosial nonkomersial; program pemerintah/kebijakan moneter; perjanjian internasional",
      "levels": [
        "a",
        "b"
      ],
      "section": "pengecualian"
    },
    {
      "front": "Tiga kewajiban pemungut",
      "back": "Memungut, menyetor, melaporkan",
      "levels": [
        "a"
      ],
      "section": "pemungut"
    },
    {
      "front": "Batas setor Bea Meterai oleh pemungut",
      "back": "Tanggal 15 bulan berikutnya (dulu tanggal 10)",
      "levels": [
        "a"
      ],
      "section": "pemungut"
    },
    {
      "front": "Batas lapor SPT Masa Bea Meterai",
      "back": "Tanggal 15 bulan berikutnya (dulu tanggal 20)",
      "levels": [
        "a"
      ],
      "section": "pemungut"
    },
    {
      "front": "Ambang jumlah dokumen pemungut (selain cek/BG)",
      "back": "Lebih dari 1.000 dokumen dalam satu bulan",
      "levels": [
        "a"
      ],
      "section": "pemungut"
    },
    {
      "front": "Tiga bentuk meterai",
      "back": "Meterai tempel, meterai elektronik, meterai dalam bentuk lain",
      "levels": [
        "a"
      ],
      "section": "pembayaran"
    },
    {
      "front": "Sarana pelunasan selain meterai",
      "back": "SSP atau sarana administrasi yang dipersamakan",
      "levels": [
        "a"
      ],
      "section": "pembayaran"
    },
    {
      "front": "Batas pemakaian meterai tempel desain lama",
      "back": "31 Desember 2021, minimal total Rp9.000",
      "levels": [
        "a"
      ],
      "section": "pembayaran"
    },
    {
      "front": "Sanksi dokumen tidak/kurang bayar",
      "back": "100% dari Bea Meterai terutang, saat pemeteraian kemudian",
      "levels": [
        "a"
      ],
      "section": "sanksi"
    },
    {
      "front": "Sanksi atas dokumen yang baru terutang sebagai alat bukti",
      "back": "Tidak ada; bayar pokok saja",
      "levels": [
        "a"
      ],
      "section": "sanksi"
    },
    {
      "front": "Pidana pemalsuan/pengedaran meterai palsu",
      "back": "Penjara paling lama 7 tahun (Pasal 24–25)",
      "levels": [
        "a"
      ],
      "section": "sanksi"
    },
    {
      "front": "Pidana pemakaian kembali meterai bekas",
      "back": "Penjara paling lama 3 tahun (Pasal 26)",
      "levels": [
        "a"
      ],
      "section": "sanksi"
    }
  ]
};

export default content;
