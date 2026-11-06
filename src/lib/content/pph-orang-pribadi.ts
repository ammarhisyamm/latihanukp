import type { TopicContent } from "./types";

const content: TopicContent = {
  "summary": [
    {
      "id": "subjek",
      "title": "Subjek pajak orang pribadi, warisan belum terbagi, SPDN dan SPLN",
      "levels": [
        "a"
      ],
      "bookletItem": {
        "a": "1"
      },
      "points": [
        "Orang pribadi menjadi subjek pajak dalam negeri (SPDN) bila bertempat tinggal di Indonesia, berada di Indonesia lebih dari 183 hari dalam jangka 12 bulan, atau dalam suatu tahun pajak berada di Indonesia dan berniat bertempat tinggal.",
        "Warisan yang belum terbagi menjadi subjek pajak pengganti yang menggantikan ahli waris sebagai satu kesatuan; ia SPDN bila pewarisnya SPDN.",
        "Orang pribadi yang tidak memenuhi kriteria SPDN tetapi menerima penghasilan dari Indonesia adalah subjek pajak luar negeri (SPLN), dengan atau tanpa BUT.",
        "WNI yang berada di luar Indonesia lebih dari 183 hari dalam 12 bulan dapat menjadi SPLN bila memenuhi syarat tempat tinggal, pusat kegiatan utama, kebiasaan, status subjek pajak, dan/atau syarat lain (PMK 18/2021).",
        "WNA yang menjadi SPDN dan memiliki keahlian tertentu dikenai PPh hanya atas penghasilan dari Indonesia selama 4 tahun pajak sejak menjadi SPDN (Pasal 4 ayat (1a) UU PPh).",
        "SPDN dikenai pajak atas penghasilan dari seluruh dunia; SPLN hanya atas penghasilan yang bersumber dari Indonesia."
      ],
      "table": {
        "head": [
          "Kriteria",
          "Status"
        ],
        "rows": [
          [
            "Tinggal di Indonesia",
            "SPDN"
          ],
          [
            "Berada > 183 hari dalam 12 bulan",
            "SPDN"
          ],
          [
            "Berada dalam tahun pajak dan berniat tinggal",
            "SPDN"
          ],
          [
            "Tidak memenuhi kriteria, menerima penghasilan dari Indonesia",
            "SPLN"
          ]
        ]
      },
      "traps": [
        "Hitungan 183 hari memakai jangka 12 bulan, bukan tahun kalender.",
        "Fasilitas 4 tahun bagi WNA berkeahlian tertentu membatasi objek (hanya penghasilan dari Indonesia), bukan membebaskan pajak."
      ],
      "legal": "Pasal 2 dan Pasal 4 ayat (1a) UU PPh s.t.d.t.d. UU HPP; PMK 18/2021."
    },
    {
      "id": "kewajiban-subjektif",
      "title": "Saat dimulai dan berakhirnya kewajiban pajak subjektif",
      "levels": [
        "a"
      ],
      "bookletItem": {
        "a": "2"
      },
      "points": [
        "Kewajiban subjektif SPDN orang pribadi dimulai saat dilahirkan, saat berada di Indonesia, atau saat berniat bertempat tinggal di Indonesia.",
        "Kewajiban subjektif SPDN orang pribadi berakhir saat meninggal dunia atau meninggalkan Indonesia untuk selamanya.",
        "Kewajiban subjektif warisan belum terbagi dimulai saat timbulnya warisan dan berakhir saat warisan selesai dibagi.",
        "SPLN mulai saat menjalankan usaha atau menerima penghasilan dari Indonesia dan berakhir saat tidak lagi menerimanya.",
        "Bila kewajiban subjektif dimulai atau berakhir dalam tahun berjalan, penghasilan bagian tahun disetahunkan dan pajaknya dihitung jumlah hari bagian tahun ÷ 360 × pajak setahun (bulan penuh = 30 hari).",
        "Berhenti bekerja di tengah tahun tanpa meninggalkan Indonesia tidak mengakhiri kewajiban subjektif, sehingga penghasilannya tidak disetahunkan."
      ],
      "traps": [
        "Penyetahunan hanya untuk bagian tahun karena kewajiban subjektif mulai/berakhir, bukan karena ganti pekerjaan.",
        "Pajak bagian tahun dihitung proporsi hari/360, bukan langsung dari penghasilan beberapa bulan."
      ],
      "legal": "Pasal 2A, Pasal 16 ayat (4), dan Pasal 17 UU PPh."
    },
    {
      "id": "pengecualian-subjek",
      "title": "Pihak yang dikecualikan dari subjek pajak orang pribadi",
      "levels": [
        "a"
      ],
      "bookletItem": {
        "a": "3"
      },
      "points": [
        "Pejabat perwakilan diplomatik dan konsulat atau pejabat negara asing lain beserta orang yang diperbantukan dan serumah dikecualikan bila bukan WNI, tidak memperoleh penghasilan lain di Indonesia di luar jabatannya, dan negaranya memberi perlakuan timbal balik.",
        "Pejabat perwakilan organisasi internasional yang ditetapkan PMK dikecualikan bila bukan WNI dan tidak menjalankan usaha, kegiatan, atau pekerjaan lain untuk memperoleh penghasilan dari Indonesia.",
        "Syarat timbal balik hanya berlaku untuk pejabat perwakilan negara asing, tidak untuk pejabat organisasi internasional.",
        "Pejabat yang memperoleh penghasilan lain di Indonesia (misalnya sewa properti) kehilangan pengecualian dan menjadi subjek pajak.",
        "Staf lokal WNI di kedutaan tetap subjek pajak dalam negeri."
      ],
      "traps": [
        "WNI yang bekerja di kedutaan asing bukan pihak yang dikecualikan.",
        "Asas timbal balik bukan syarat bagi pejabat organisasi internasional."
      ],
      "legal": "Pasal 3 ayat (1) huruf b dan d UU PPh."
    },
    {
      "id": "objek",
      "title": "Objek pajak orang pribadi",
      "levels": [
        "a"
      ],
      "bookletItem": {
        "a": "4"
      },
      "points": [
        "Objek PPh adalah setiap tambahan kemampuan ekonomis yang dapat dipakai untuk konsumsi atau menambah kekayaan, dengan nama dan bentuk apa pun.",
        "Kelompok utama: imbalan pekerjaan (termasuk natura sejak UU HPP), hadiah, laba usaha, keuntungan pengalihan harta, bunga, dividen, royalti, sewa, penerimaan berkala, pembebasan utang, dan selisih kurs.",
        "Setelah sumber dikenali, tentukan rezimnya: tarif umum Pasal 17, PPh final, atau bukan objek.",
        "Keuntungan penjualan saham di luar bursa oleh orang pribadi adalah objek tarif umum.",
        "Hadiah undian tetap objek walaupun pajaknya final 25%."
      ],
      "traps": [
        "Penghasilan yang dikenai PPh final tetap objek pajak; yang berbeda hanya cara pelunasannya.",
        "Natura dari pemberi kerja bukan lagi otomatis bebas: sejak UU HPP natura menjadi objek bagi penerima kecuali yang dikecualikan."
      ],
      "legal": "Pasal 4 ayat (1) UU PPh s.t.d.t.d. UU HPP."
    },
    {
      "id": "final-umkm",
      "title": "PPh final, termasuk peredaran bruto tertentu (PP 55/2022 s.t.d.d. PP 20/2026)",
      "levels": [
        "a"
      ],
      "bookletItem": {
        "a": "5"
      },
      "points": [
        "Tarif PPh final peredaran bruto tertentu 0,5% dari omzet; batas peredaran bruto tidak melebihi Rp4,8 miliar dalam satu tahun pajak.",
        "PP 20/2026 (berlaku 22 April 2026) menghapus Pasal 59 PP 55/2022 sehingga orang pribadi dan perseroan perorangan dapat memakai tarif 0,5% selama kriteria terpenuhi (sebelumnya 7 tahun bagi orang pribadi dan 4 tahun bagi perseroan perorangan); koperasi tetap dibatasi jangka waktu tertentu.",
        "Untuk menguji batas Rp4,8 miliar, peredaran bruto suami, istri, dan perseroan perorangan yang didirikan salah satunya digabungkan, termasuk penghasilan jasa pekerjaan bebas.",
        "Sejak PP 20/2026 subjek yang dapat memakai skema ini orang pribadi, perseroan perorangan yang didirikan satu orang, dan koperasi; CV, firma, PT biasa, dan BUMDes yang baru terdaftar memakai tarif umum, sedangkan yang terdaftar sebelumnya memakai sisa jangka waktunya.",
        "Bagian peredaran bruto orang pribadi sampai Rp500 juta setahun tidak dikenai PPh, dihitung kumulatif sejak awal tahun pajak.",
        "Penghasilan dari jasa sehubungan dengan pekerjaan bebas (dokter, notaris, konsultan, dan sejenisnya) tidak dapat memakai tarif 0,5%.",
        "Kelayakan memakai skema ditentukan dari peredaran bruto tahun sebelumnya; bila omzet tahun berjalan melewati Rp4,8 miliar, tarif 0,5% tetap dipakai sampai akhir tahun itu dan tahun berikutnya memakai tarif umum.",
        "PPh final lain bagi orang pribadi: sewa tanah/bangunan 10%, pengalihan hak atas tanah/bangunan 2,5%, bunga deposito/tabungan 20%, hadiah undian 25%, dan dividen dalam negeri yang tidak diinvestasikan 10%."
      ],
      "table": {
        "head": [
          "Unsur",
          "PP 55/2022 (lama)",
          "PP 20/2026"
        ],
        "rows": [
          [
            "Jangka waktu orang pribadi",
            "7 tahun",
            "Tidak dibatasi selama memenuhi kriteria"
          ],
          [
            "Jangka waktu perseroan perorangan",
            "4 tahun",
            "Tidak dibatasi selama memenuhi kriteria"
          ],
          [
            "Koperasi",
            "4 tahun",
            "Tetap dibatasi jangka waktu"
          ],
          [
            "CV, firma, PT biasa baru",
            "Boleh (CV/firma 4 tahun, PT 3 tahun)",
            "Tidak boleh, tarif umum"
          ],
          [
            "Omzet bebas Rp500 juta",
            "Orang pribadi",
            "Orang pribadi (tetap)"
          ]
        ]
      },
      "traps": [
        "Soal lama yang menyebut batas 7 tahun bagi orang pribadi sudah tidak berlaku sejak PP 20/2026.",
        "Bagian omzet Rp500 juta tidak kena pajak hanya untuk orang pribadi, bukan perseroan perorangan atau koperasi.",
        "Omzet melewati Rp4,8 miliar di tengah tahun tidak langsung mengubah tarif pada bulan berikutnya."
      ],
      "legal": "Pasal 4 ayat (2) UU PPh; PP 55/2022 s.t.d.d. PP 20/2026; PP 34/2016; PP 131/2000 s.t.d.d. PP 123/2015."
    },
    {
      "id": "dikecualikan",
      "title": "Penghasilan orang pribadi yang dikecualikan dari objek",
      "levels": [
        "a"
      ],
      "bookletItem": {
        "a": "6"
      },
      "points": [
        "Bantuan atau sumbangan, termasuk zakat yang diterima badan amil resmi atau penerima zakat yang berhak, dikecualikan dari objek.",
        "Harta hibahan dikecualikan bila diterima keluarga sedarah garis keturunan lurus satu derajat, badan keagamaan, badan pendidikan, badan sosial, koperasi, atau orang pribadi pengusaha mikro dan kecil, sepanjang tidak ada hubungan usaha, pekerjaan, kepemilikan, atau penguasaan.",
        "Warisan, klaim asuransi kesehatan, kecelakaan, jiwa, dwiguna, dan beasiswa yang diterima orang pribadi dikecualikan.",
        "Dividen dalam negeri yang diterima orang pribadi dalam negeri dikecualikan bila diinvestasikan di Indonesia dalam jangka waktu tertentu; bila tidak, dikenai PPh final 10%.",
        "Natura dan kenikmatan tertentu sesuai PMK 66/2023 dikecualikan dari objek bagi penerima."
      ],
      "traps": [
        "Hibah dari kakek ke cucu (dua derajat) atau dari paman ke keponakan tetap objek.",
        "Dividen tidak otomatis bebas; syaratnya diinvestasikan di Indonesia."
      ],
      "legal": "Pasal 4 ayat (3) UU PPh s.t.d.t.d. UU HPP; PMK 18/2021; PMK 66/2023."
    },
    {
      "id": "biaya",
      "title": "Biaya yang boleh dan tidak boleh dikurangkan",
      "levels": [
        "a"
      ],
      "bookletItem": {
        "a": "7"
      },
      "points": [
        "Biaya yang boleh dikurangkan adalah biaya untuk mendapatkan, menagih, dan memelihara penghasilan yang dikenai tarif umum (Pasal 6).",
        "Zakat atau sumbangan keagamaan wajib yang dibayarkan melalui badan amil resmi boleh dikurangkan dari penghasilan bruto (PP 60/2010).",
        "Tidak boleh dikurangkan: biaya untuk kepentingan pribadi, PPh, sanksi administrasi dan pidana, premi asuransi jiwa/kesehatan yang dibayar sendiri, serta pemberian bantuan atau sumbangan selain yang diatur.",
        "Biaya untuk mendapatkan penghasilan yang dikenai PPh final atau bukan objek tidak boleh dikurangkan dari penghasilan tarif umum.",
        "Pengusaha yang memakai NPPN tidak mengurangkan biaya riil karena neto sudah ditentukan dengan norma."
      ],
      "traps": [
        "Biaya pemeliharaan ruko yang disewakan (penghasilan final) tidak boleh dibebankan pada usaha dagang tarif umum.",
        "Sanksi bunga STP termasuk biaya yang tidak boleh dikurangkan."
      ],
      "legal": "Pasal 6 dan Pasal 9 UU PPh; PP 60/2010."
    },
    {
      "id": "nppn",
      "title": "Norma Penghitungan Penghasilan Neto (NPPN)",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "8",
        "b": "1"
      },
      "points": [
        "NPPN boleh dipakai orang pribadi yang melakukan usaha atau pekerjaan bebas dengan peredaran bruto kurang dari Rp4,8 miliar setahun.",
        "WP wajib memberitahukan penggunaan NPPN kepada Dirjen Pajak paling lama dalam 3 bulan pertama tahun pajak; tanpa pemberitahuan WP dianggap memilih pembukuan.",
        "Pengguna NPPN wajib menyelenggarakan pencatatan peredaran bruto.",
        "Neto = peredaran bruto × persentase norma; biaya riil tidak dikurangkan lagi.",
        "Persentase norma berbeda menurut jenis kegiatan dan wilayah: 10 ibu kota provinsi, ibu kota provinsi lainnya, dan daerah lainnya.",
        "Bila WP memiliki beberapa jenis usaha, norma diterapkan pada bruto masing-masing kegiatan lalu netonya dijumlahkan."
      ],
      "table": {
        "head": [
          "Langkah",
          "Rumus"
        ],
        "rows": [
          [
            "Neto per kegiatan",
            "Bruto kegiatan × norma kegiatan dan wilayah"
          ],
          [
            "Neto total",
            "Jumlah neto seluruh kegiatan"
          ],
          [
            "PKP",
            "Neto total − PTKP (tanpa kompensasi rugi)"
          ]
        ]
      },
      "traps": [
        "Bruto tepat Rp4,8 miliar sudah tidak memenuhi syarat karena batasnya kurang dari Rp4,8 miliar.",
        "Biaya riil yang dicantumkan di soal adalah pengecoh pada penghitungan NPPN."
      ],
      "legal": "Pasal 14 UU PPh; PMK 81/2024; PER-17/PJ/2015."
    },
    {
      "id": "keluarga",
      "title": "Pemajakan atas penghasilan keluarga",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "9",
        "b": "2"
      },
      "points": [
        "Penghasilan atau kerugian istri pada prinsipnya digabung dengan suami sebagai satu kesatuan.",
        "Pengecualian: penghasilan istri semata-mata dari satu pemberi kerja yang telah dipotong PPh 21 dan pekerjaannya tidak berhubungan dengan usaha atau pekerjaan bebas suami atau anggota keluarga lain.",
        "Status HB (hidup berpisah berdasarkan putusan hakim): suami dan istri dikenai pajak sendiri-sendiri tanpa penggabungan.",
        "Status PH (pisah harta dengan perjanjian tertulis) dan MT (istri memilih menjalankan hak dan kewajiban perpajakan sendiri): neto digabung, PPh dihitung atas gabungan, lalu dibagi sebanding neto masing-masing.",
        "Penghasilan anak yang belum dewasa digabung dengan penghasilan orang tuanya.",
        "PTKP gabungan PH/MT memperhitungkan PTKP suami, tambahan kawin, tanggungan, dan PTKP istri Rp54 juta."
      ],
      "table": {
        "head": [
          "Status",
          "Cara penghitungan"
        ],
        "rows": [
          [
            "KK (digabung)",
            "Satu SPT atas nama suami"
          ],
          [
            "HB",
            "Sendiri-sendiri, tanpa penggabungan"
          ],
          [
            "PH",
            "Gabung neto, hitung PPh, bagi proporsional"
          ],
          [
            "MT",
            "Gabung neto, hitung PPh, bagi proporsional"
          ]
        ]
      },
      "traps": [
        "PH dan MT tidak sama dengan HB: pada PH/MT pajak tetap dihitung dari neto gabungan.",
        "Proporsi dibuat dari penghasilan neto, bukan bruto."
      ],
      "legal": "Pasal 8 UU PPh."
    },
    {
      "id": "kompensasi",
      "title": "Kompensasi kerugian",
      "levels": [
        "a"
      ],
      "bookletItem": {
        "a": "10"
      },
      "points": [
        "Kerugian fiskal dari penghitungan dengan pembukuan dapat dikompensasikan dengan penghasilan mulai tahun berikutnya berturut-turut sampai 5 tahun.",
        "Kompensasi memakai urutan kerugian paling lama lebih dahulu; sisa yang melewati 5 tahun hangus.",
        "Pengguna NPPN tidak mengompensasikan kerugian; pada tahun NPPN rugi masa lalu tidak dapat dipakai dan jangka 5 tahunnya tetap berjalan.",
        "Kerugian dari usaha di luar negeri tidak dapat dikompensasikan dengan penghasilan dalam negeri.",
        "Kompensasi mengurangi neto fiskal sebelum PTKP."
      ],
      "traps": [
        "Rugi tahun 2020 hanya dapat dipakai sampai tahun pajak 2025.",
        "Kompensasi dikurangkan sebelum PTKP, bukan dari PPh terutang."
      ],
      "legal": "Pasal 6 ayat (2) UU PPh."
    },
    {
      "id": "ptkp-tarif",
      "title": "PTKP, tarif Pasal 17, dan penghitungan PPh terutang",
      "levels": [
        "a",
        "b"
      ],
      "bookletItem": {
        "a": "11",
        "b": "3"
      },
      "points": [
        "PTKP WP sendiri Rp54 juta; tambahan Rp4,5 juta untuk kawin dan Rp4,5 juta per tanggungan, paling banyak 3 tanggungan.",
        "Tambahan Rp54 juta diberikan bagi istri yang penghasilannya digabung dengan suami (status K/I).",
        "Tanggungan adalah keluarga sedarah dan semenda dalam garis keturunan lurus serta anak angkat yang menjadi tanggungan sepenuhnya; saudara kandung tidak termasuk.",
        "Status PTKP ditentukan menurut keadaan pada awal tahun pajak.",
        "Tarif progresif: 5% sampai Rp60 juta, 15% di atas Rp60 juta–Rp250 juta, 25% di atas Rp250 juta–Rp500 juta, 30% di atas Rp500 juta–Rp5 miliar, 35% di atas Rp5 miliar.",
        "PKP dibulatkan ke bawah dalam ribuan rupiah penuh sebelum tarif diterapkan."
      ],
      "table": {
        "head": [
          "Lapisan PKP",
          "Tarif",
          "Pajak kumulatif di batas atas"
        ],
        "rows": [
          [
            "s.d. Rp60 juta",
            "5%",
            "Rp3 juta"
          ],
          [
            "> Rp60 juta–Rp250 juta",
            "15%",
            "Rp31,5 juta"
          ],
          [
            "> Rp250 juta–Rp500 juta",
            "25%",
            "Rp94 juta"
          ],
          [
            "> Rp500 juta–Rp5 miliar",
            "30%",
            "Rp1,444 miliar"
          ],
          [
            "> Rp5 miliar",
            "35%",
            "—"
          ]
        ]
      },
      "traps": [
        "Tarif lapisan berlaku hanya pada bagian PKP di lapisan itu, bukan pada seluruh PKP.",
        "Anak yang lahir pada pertengahan tahun belum menambah PTKP tahun itu."
      ],
      "legal": "Pasal 7, Pasal 16 ayat (4), dan Pasal 17 UU PPh s.t.d.t.d. UU HPP; PMK 101/2016."
    },
    {
      "id": "pkp-fiskal",
      "title": "Penghasilan kena pajak dan penyesuaian fiskal orang pribadi",
      "levels": [
        "a"
      ],
      "bookletItem": {
        "a": "12"
      },
      "points": [
        "Mulai dari laba komersial, keluarkan penghasilan final dan bukan objek (koreksi negatif).",
        "Tambahkan kembali biaya yang tidak boleh dikurangkan: biaya pribadi, PPh, sanksi, sumbangan yang tidak diatur (koreksi positif).",
        "Jumlahkan seluruh neto tarif umum dari pekerjaan, usaha, dan sumber lain sebelum mengurangkan PTKP.",
        "PKP = neto fiskal − kompensasi rugi − PTKP, dibulatkan ke bawah ke ribuan penuh.",
        "Penghasilan final tidak masuk PKP tetapi tetap dilaporkan dalam SPT Tahunan."
      ],
      "traps": [
        "Gaji yang telah dipotong PPh 21 tetap masuk PKP tahunan; PPh 21-nya menjadi kredit.",
        "PKP dibulatkan ke bawah, bukan ke atas atau ke juta terdekat."
      ],
      "legal": "Pasal 4, 6, 9, 16, dan 17 UU PPh."
    },
    {
      "id": "kredit",
      "title": "Pelunasan pajak tahun berjalan dan kredit pajak",
      "levels": [
        "a"
      ],
      "bookletItem": {
        "a": "13"
      },
      "points": [
        "Kredit pajak orang pribadi: PPh 21, PPh 22, PPh 23 yang tidak final, PPh 24 atas penghasilan luar negeri, dan PPh 25 yang dibayar sendiri.",
        "PPh final (Pasal 4 ayat (2), PPh final 0,5%) tidak dapat dikreditkan.",
        "Kredit PPh 24 dibatasi nilai terendah antara pajak yang dibayar di luar negeri dan (penghasilan luar negeri ÷ PKP) × PPh terutang, serta tidak melebihi PPh terutang.",
        "PPh kurang bayar (PPh 29) dilunasi sebelum SPT disampaikan; lebih bayar dapat dimintakan pengembalian.",
        "Orang pribadi yang menjalankan usaha atau pekerjaan bebas dengan lebih bayar sampai Rp100 juta dapat memperoleh pengembalian pendahuluan sebagai WP persyaratan tertentu (Pasal 17D UU KUP)."
      ],
      "traps": [
        "Pajak luar negeri yang dibayar tidak otomatis dikreditkan seluruhnya.",
        "PPh 23 bersifat kredit, tetapi PPh Pasal 4 ayat (2) atas sewa tidak."
      ],
      "legal": "Pasal 20, 24, 28, dan 29 UU PPh; Pasal 17D UU KUP."
    },
    {
      "id": "pph25",
      "title": "PPh akhir tahun dan angsuran PPh Pasal 25 orang pribadi",
      "levels": [
        "a"
      ],
      "bookletItem": {
        "a": "14"
      },
      "points": [
        "Angsuran PPh 25 = (PPh terutang tahun lalu − PPh 21, 22, 23, dan 24 yang dikreditkan) ÷ 12.",
        "PPh final tidak ikut dalam penghitungan PPh terutang maupun kredit untuk angsuran.",
        "Angsuran untuk bulan-bulan sebelum batas waktu penyampaian SPT Tahunan sama dengan angsuran bulan terakhir tahun pajak lalu.",
        "PPh 25 disetor paling lambat tanggal 15 bulan berikutnya setelah masa pajak berakhir.",
        "PPh kurang bayar akhir tahun dihitung dari PPh terutang dikurangi seluruh kredit, termasuk angsuran PPh 25."
      ],
      "traps": [
        "PPh final yang pernah dibayar tidak mengurangi dasar angsuran.",
        "Angsuran Januari–Februari belum memakai SPT tahun lalu bila batas waktu SPT belum lewat."
      ],
      "legal": "Pasal 25 UU PPh; PMK 81/2024."
    },
    {
      "id": "spt",
      "title": "SPT Tahunan PPh orang pribadi",
      "levels": [
        "a"
      ],
      "bookletItem": {
        "a": "15"
      },
      "points": [
        "Batas penyampaian SPT Tahunan orang pribadi paling lama 3 bulan setelah akhir tahun pajak (31 Maret untuk tahun kalender).",
        "Penyampaian dapat diperpanjang paling lama 2 bulan dengan pemberitahuan sebelum batas waktu.",
        "Keterlambatan SPT Tahunan orang pribadi dikenai denda Rp100.000.",
        "Di Coretax, SPT Tahunan orang pribadi diisi dengan data prapopulasi dari bukti potong; WP wajib memeriksa kesesuaiannya dan melengkapi harta, utang, serta penghasilan final dan bukan objek.",
        "Orang pribadi dengan penghasilan neto di bawah PTKP dikecualikan dari kewajiban menyampaikan SPT."
      ],
      "table": {
        "head": [
          "Hal",
          "Ketentuan"
        ],
        "rows": [
          [
            "Batas waktu",
            "3 bulan setelah akhir tahun pajak"
          ],
          [
            "Perpanjangan",
            "Paling lama 2 bulan"
          ],
          [
            "Denda terlambat",
            "Rp100.000"
          ]
        ]
      },
      "traps": [
        "Denda Rp100.000 untuk orang pribadi; Rp1 juta untuk badan.",
        "Perpanjangan waktu SPT tidak menunda kewajiban membayar kurang bayar."
      ],
      "legal": "Pasal 3 dan Pasal 7 UU KUP; PMK 81/2024; PER-3/PJ/2026."
    }
  ],
  "questions": [
    {
      "id": "op-001",
      "levels": [
        "a"
      ],
      "section": "subjek",
      "kind": "kasus",
      "prompt": "Seorang WNA tiba di Indonesia 1 Maret dan bekerja di Jakarta hingga 15 Agustus tahun yang sama (sekitar 168 hari), tanpa niat menetap, lalu tidak kembali dalam 12 bulan berikutnya. Apa statusnya?",
      "options": [
        "Subjek pajak dalam negeri karena bekerja di Indonesia",
        "Subjek pajak luar negeri atas penghasilan dari Indonesia",
        "Subjek pajak dalam negeri karena berada lebih dari 3 bulan",
        "Bukan subjek pajak karena berstatus WNA"
      ],
      "answer": 1,
      "explanation": "Ia tidak tinggal di Indonesia, tidak lebih dari 183 hari dalam 12 bulan, dan tidak berniat menetap, sehingga menjadi SPLN atas penghasilan dari Indonesia. Bekerja atau berada lebih dari 3 bulan bukan kriteria SPDN.",
      "legal": "Pasal 2 ayat (3) dan (4) UU PPh"
    },
    {
      "id": "op-002",
      "levels": [
        "a"
      ],
      "section": "subjek",
      "kind": "konsep",
      "prompt": "Manakah pernyataan yang TIDAK tepat tentang warisan yang belum terbagi?",
      "options": [
        "Penghasilannya langsung dikenai pajak pada masing-masing ahli waris",
        "Ia menggantikan yang berhak sebagai satu kesatuan",
        "Ia menjadi SPDN bila pewarisnya SPDN",
        "Kewajiban subjektifnya berakhir saat warisan selesai dibagi"
      ],
      "answer": 0,
      "explanation": "Selama belum terbagi, warisan sendiri yang menjadi subjek pajak pengganti, bukan para ahli waris. Tiga pernyataan lain sesuai Pasal 2 dan 2A UU PPh.",
      "legal": "Pasal 2 ayat (1) huruf a dan Pasal 2A UU PPh"
    },
    {
      "id": "op-003",
      "levels": [
        "a"
      ],
      "section": "subjek",
      "kind": "konsep",
      "prompt": "WNA dengan keahlian tertentu menjadi SPDN. Menurut UU PPh s.t.d.t.d. UU HPP, berapa lama ia dikenai PPh hanya atas penghasilan dari Indonesia?",
      "options": [
        "5 tahun pajak sejak tiba",
        "3 tahun pajak sejak memiliki NPWP",
        "Selama ia tetap bekerja di Indonesia",
        "4 tahun pajak sejak menjadi SPDN"
      ],
      "answer": 3,
      "explanation": "Pasal 4 ayat (1a) membatasi objek WNA berkeahlian tertentu pada penghasilan dari Indonesia selama 4 tahun pajak sejak menjadi SPDN. Setelah itu berlaku pemajakan atas penghasilan seluruh dunia.",
      "legal": "Pasal 4 ayat (1a) UU PPh"
    },
    {
      "id": "op-004",
      "levels": [
        "a"
      ],
      "section": "subjek",
      "kind": "konsep",
      "prompt": "WNI bekerja di luar negeri lebih dari 183 hari dalam 12 bulan. Apa yang menentukan apakah ia dapat diperlakukan sebagai SPLN?",
      "options": [
        "Cukup lamanya berada di luar negeri lebih dari 183 hari",
        "Kepemilikan paspor negara tempat ia bekerja",
        "Pemenuhan syarat tempat tinggal, pusat kegiatan utama, kebiasaan, dan status subjek pajak sesuai PMK 18/2021",
        "Pencabutan NPWP oleh WP sendiri melalui SPT"
      ],
      "answer": 2,
      "explanation": "UU HPP memungkinkan WNI menjadi SPLN bila berada di luar Indonesia lebih dari 183 hari dan memenuhi syarat tambahan dalam PMK 18/2021. Lama tinggal saja tidak cukup.",
      "legal": "Pasal 2 UU PPh s.t.d.t.d. UU HPP; PMK 18/2021"
    },
    {
      "id": "op-005",
      "levels": [
        "a"
      ],
      "section": "kewajiban-subjektif",
      "kind": "konsep",
      "prompt": "Kapan kewajiban pajak subjektif SPDN orang pribadi berakhir?",
      "options": [
        "Saat berhenti bekerja dari pemberi kerja terakhir",
        "Saat meninggal dunia atau meninggalkan Indonesia untuk selamanya",
        "Saat NPWP dinonaktifkan atas permohonan",
        "Pada akhir tahun pajak setelah pensiun"
      ],
      "answer": 1,
      "explanation": "Pasal 2A mengakhiri kewajiban subjektif SPDN orang pribadi saat meninggal dunia atau meninggalkan Indonesia selamanya. Berhenti bekerja atau status NPWP tidak mengakhirinya.",
      "legal": "Pasal 2A ayat (3) UU PPh"
    },
    {
      "id": "op-006",
      "levels": [
        "a"
      ],
      "section": "kewajiban-subjektif",
      "kind": "hitung",
      "prompt": "WNA tiba 1 Oktober dengan niat menetap. Penghasilan Oktober–Desember disetahunkan dan PPh atas penghasilan setahun itu Rp48 juta. Berapa PPh terutang tahun pajak tersebut?",
      "options": [
        "Rp12 juta",
        "Rp48 juta",
        "Rp16 juta",
        "Rp36 juta"
      ],
      "answer": 0,
      "explanation": "Bagian tahun 3 bulan = 90 hari. PPh = 90/360 × Rp48 juta = Rp12 juta. Rp16 juta keliru karena memakai 4 bulan.",
      "legal": "Pasal 16 ayat (4) dan Pasal 17 UU PPh"
    },
    {
      "id": "op-007",
      "levels": [
        "a"
      ],
      "section": "kewajiban-subjektif",
      "kind": "kasus",
      "prompt": "WP orang pribadi meninggal 10 Mei; warisannya baru selesai dibagi 20 November. Siapa subjek pajak atas penghasilan harta warisan Juni–Oktober?",
      "options": [
        "Ahli waris tertua atas namanya sendiri",
        "Almarhum melalui SPT tahun berjalan",
        "Tidak ada subjek sampai warisan dibagi",
        "Warisan belum terbagi sebagai subjek pengganti"
      ],
      "answer": 3,
      "explanation": "Kewajiban almarhum berakhir 10 Mei, dan sejak itu warisan belum terbagi menjadi subjek pengganti sampai dibagi 20 November. Setelah dibagi, penghasilan menjadi milik ahli waris masing-masing.",
      "legal": "Pasal 2 ayat (1) huruf a dan Pasal 2A UU PPh"
    },
    {
      "id": "op-008",
      "levels": [
        "a"
      ],
      "section": "kewajiban-subjektif",
      "kind": "konsep",
      "prompt": "Pegawai SPDN berhenti bekerja 30 Juni dan tetap tinggal di Indonesia tanpa pekerjaan lain. Bagaimana penghasilan Januari–Juni diperlakukan dalam SPT Tahunan?",
      "options": [
        "Disetahunkan karena hanya 6 bulan bekerja",
        "Dihitung 180/360 dari pajak setahun",
        "Dihitung apa adanya tanpa disetahunkan",
        "Tidak dilaporkan karena pemotongan sudah final"
      ],
      "answer": 2,
      "explanation": "Kewajiban subjektifnya tidak berakhir karena ia tetap SPDN, sehingga Pasal 16 ayat (4) tidak berlaku. Penyetahunan dan rumus hari/360 hanya untuk awal/akhir kewajiban subjektif.",
      "legal": "Pasal 16 ayat (4) UU PPh"
    },
    {
      "id": "op-009",
      "levels": [
        "a"
      ],
      "section": "pengecualian-subjek",
      "kind": "konsep",
      "prompt": "Manakah yang dikecualikan dari subjek pajak?",
      "options": [
        "Staf lokal WNI yang bekerja di kedutaan besar asing",
        "Konsul negara asing yang bukan WNI, tidak berpenghasilan lain di Indonesia, dengan asas timbal balik",
        "Pejabat diplomatik WNI yang ditugaskan negara asing",
        "Pejabat organisasi internasional yang membuka usaha di Indonesia"
      ],
      "answer": 1,
      "explanation": "Pengecualian berlaku bagi pejabat perwakilan asing yang bukan WNI, tanpa penghasilan lain, dan ada timbal balik. Staf WNI dan pejabat yang berusaha di Indonesia tetap subjek pajak.",
      "legal": "Pasal 3 ayat (1) huruf b UU PPh"
    },
    {
      "id": "op-010",
      "levels": [
        "a"
      ],
      "section": "pengecualian-subjek",
      "kind": "konsep",
      "prompt": "Syarat mana yang TIDAK diperlukan agar pejabat perwakilan organisasi internasional dikecualikan dari subjek pajak?",
      "options": [
        "Negaranya memberi perlakuan timbal balik",
        "Ia bukan warga negara Indonesia",
        "Organisasinya ditetapkan dengan PMK",
        "Ia tidak menjalankan usaha atau pekerjaan lain di Indonesia"
      ],
      "answer": 0,
      "explanation": "Asas timbal balik adalah syarat bagi pejabat perwakilan negara asing (huruf b), bukan bagi pejabat organisasi internasional (huruf d).",
      "legal": "Pasal 3 ayat (1) huruf d UU PPh"
    },
    {
      "id": "op-011",
      "levels": [
        "a"
      ],
      "section": "pengecualian-subjek",
      "kind": "kasus",
      "prompt": "Diplomat asing yang memenuhi syarat timbal balik juga menyewakan apartemen miliknya di Jakarta kepada pihak lain. Bagaimana statusnya?",
      "options": [
        "Tetap dikecualikan karena status diplomatiknya",
        "Dikecualikan, tetapi sewanya dipungut PPh 22",
        "Hanya sewanya yang dikecualikan berdasarkan timbal balik",
        "Menjadi subjek pajak karena memperoleh penghasilan lain di Indonesia"
      ],
      "answer": 3,
      "explanation": "Pengecualian Pasal 3 mensyaratkan tidak ada penghasilan lain di Indonesia di luar jabatannya. Dengan menerima sewa, syarat itu gugur.",
      "legal": "Pasal 3 ayat (1) huruf b UU PPh"
    },
    {
      "id": "op-012",
      "levels": [
        "a"
      ],
      "section": "objek",
      "kind": "konsep",
      "prompt": "Manakah yang termasuk objek PPh bagi orang pribadi?",
      "options": [
        "Warisan dari orang tua",
        "Klaim asuransi jiwa yang diterima ahli waris",
        "Keuntungan penjualan saham di luar bursa",
        "Hibah uang dari ayah kandung tanpa hubungan usaha"
      ],
      "answer": 2,
      "explanation": "Keuntungan pengalihan harta adalah objek Pasal 4 ayat (1). Warisan, klaim asuransi jiwa, dan hibah dari orang tua kandung dikecualikan oleh Pasal 4 ayat (3).",
      "legal": "Pasal 4 ayat (1) huruf d UU PPh"
    },
    {
      "id": "op-013",
      "levels": [
        "a"
      ],
      "section": "objek",
      "kind": "konsep",
      "prompt": "Sejak UU HPP, bagaimana kedudukan natura dan kenikmatan dari pemberi kerja bagi pegawai penerima?",
      "options": [
        "Selalu bukan objek karena tidak berbentuk uang",
        "Objek PPh kecuali jenis dan batasan yang dikecualikan",
        "Objek hanya bila pemberi kerja memilih membebankannya",
        "Dikenai PPh final 10% terpisah dari gaji"
      ],
      "answer": 1,
      "explanation": "UU HPP menegaskan imbalan dalam bentuk natura/kenikmatan sebagai objek bagi penerima (Pasal 4 ayat (1) huruf a), kecuali yang dikecualikan PMK 66/2023.",
      "legal": "Pasal 4 ayat (1) huruf a dan ayat (3) huruf d UU PPh"
    },
    {
      "id": "op-014",
      "levels": [
        "a"
      ],
      "section": "objek",
      "kind": "hitung",
      "prompt": "Dalam setahun orang pribadi menerima: warisan Rp300 juta, klaim asuransi kesehatan Rp20 juta, hadiah undian Rp10 juta, keuntungan penjualan saham nonbursa Rp50 juta, dan hibah dari kakeknya Rp40 juta. Berapa jumlah penerimaan yang merupakan objek PPh?",
      "options": [
        "Rp100 juta",
        "Rp90 juta",
        "Rp60 juta",
        "Rp420 juta"
      ],
      "answer": 0,
      "explanation": "Objek = hadiah undian Rp10 juta (objek meski final) + saham Rp50 juta + hibah kakek Rp40 juta (dua derajat, tidak dikecualikan) = Rp100 juta. Rp90 juta keliru karena mengeluarkan hadiah undian yang final.",
      "legal": "Pasal 4 ayat (1) dan ayat (3) UU PPh"
    },
    {
      "id": "op-015",
      "levels": [
        "a"
      ],
      "section": "final-umkm",
      "kind": "konsep",
      "prompt": "Menurut PP 55/2022 s.t.d.d. PP 20/2026, berapa lama orang pribadi dapat memakai PPh final 0,5%?",
      "options": [
        "Paling lama 7 tahun pajak sejak terdaftar",
        "Paling lama 4 tahun pajak sejak terdaftar",
        "Paling lama 3 tahun pajak sejak terdaftar",
        "Tidak dibatasi waktu selama kriteria terpenuhi"
      ],
      "answer": 3,
      "explanation": "PP 20/2026 menghapus ketentuan jangka waktu (Pasal 59 PP 55/2022) bagi orang pribadi dan perseroan perorangan. Batas 7 tahun adalah ketentuan lama.",
      "legal": "PP 55/2022 s.t.d.d. PP 20/2026"
    },
    {
      "id": "op-016",
      "levels": [
        "a"
      ],
      "section": "final-umkm",
      "kind": "hitung",
      "prompt": "Pedagang orang pribadi yang memenuhi skema 0,5% memiliki omzet setahun Rp750 juta. Berapa total PPh final setahun?",
      "options": [
        "Rp3,75 juta",
        "Rp2,5 juta",
        "Rp1,25 juta",
        "Rp750 ribu"
      ],
      "answer": 2,
      "explanation": "Bagian omzet Rp500 juta pertama tidak dikenai PPh. PPh = 0,5% × (Rp750 juta − Rp500 juta) = Rp1,25 juta. Rp3,75 juta lupa mengurangkan Rp500 juta.",
      "legal": "PP 55/2022 Pasal 60 ayat (2)"
    },
    {
      "id": "op-017",
      "levels": [
        "a"
      ],
      "section": "final-umkm",
      "kind": "kasus",
      "prompt": "Pedagang orang pribadi yang memenuhi skema 0,5% beromzet tetap Rp70 juta setiap bulan sejak Januari. Pada bulan apa PPh final pertama kali terutang dan berapa jumlahnya?",
      "options": [
        "Juli, Rp350 ribu",
        "Agustus, Rp300 ribu",
        "Agustus, Rp350 ribu",
        "Januari, Rp350 ribu"
      ],
      "answer": 1,
      "explanation": "Kumulatif Juli Rp490 juta (masih di bawah Rp500 juta). Kumulatif Agustus Rp560 juta, sehingga yang dikenai pajak Rp60 juta × 0,5% = Rp300 ribu.",
      "legal": "PP 55/2022 Pasal 60"
    },
    {
      "id": "op-018",
      "levels": [
        "a"
      ],
      "section": "final-umkm",
      "kind": "konsep",
      "prompt": "Dokter memperoleh penghasilan dari praktik mandiri dengan bruto Rp1 miliar setahun. Bolehkah penghasilan praktik itu memakai PPh final 0,5%?",
      "options": [
        "Tidak, jasa sehubungan dengan pekerjaan bebas dikecualikan dari skema",
        "Ya, karena omzetnya di bawah Rp4,8 miliar",
        "Ya, asalkan memberitahukan penggunaan NPPN",
        "Ya, khusus untuk Rp500 juta pertama"
      ],
      "answer": 0,
      "explanation": "Penghasilan jasa sehubungan dengan pekerjaan bebas tidak termasuk penghasilan yang dapat dikenai tarif 0,5%. Dokter memakai tarif umum, misalnya dengan NPPN.",
      "legal": "PP 55/2022 s.t.d.d. PP 20/2026"
    },
    {
      "id": "op-019",
      "levels": [
        "a"
      ],
      "section": "final-umkm",
      "kind": "konsep",
      "prompt": "Setelah PP 20/2026 berlaku, Wajib Pajak manakah yang baru terdaftar dan TIDAK dapat memakai tarif PPh final 0,5%?",
      "options": [
        "Orang pribadi pedagang eceran",
        "Perseroan perorangan yang didirikan satu orang",
        "Koperasi dalam negeri",
        "Persekutuan komanditer (CV)"
      ],
      "answer": 3,
      "explanation": "PP 20/2026 membatasi subjek pada orang pribadi, perseroan perorangan, dan koperasi. CV, firma, dan PT biasa yang baru terdaftar memakai tarif umum.",
      "legal": "PP 20/2026 Pasal 57 ayat (1)"
    },
    {
      "id": "op-020",
      "levels": [
        "a"
      ],
      "section": "final-umkm",
      "kind": "kasus",
      "prompt": "Omzet 2025 seorang pedagang orang pribadi Rp3 miliar. Pada Januari–Oktober 2026 omzetnya sudah Rp4,9 miliar. Bagaimana perlakuan omzet November–Desember 2026?",
      "options": [
        "Langsung tarif Pasal 17 mulai November 2026",
        "Seluruh omzet 2026 dihitung ulang dengan tarif umum",
        "Tetap PPh final 0,5% sampai akhir 2026; mulai 2027 memakai tarif umum",
        "PPh final 0,5% berlaku terus pada 2027"
      ],
      "answer": 2,
      "explanation": "Kelayakan diuji dari omzet tahun sebelumnya. Bila omzet tahun berjalan melewati Rp4,8 miliar, tarif 0,5% tetap dipakai sampai akhir tahun itu dan tahun berikutnya memakai tarif umum.",
      "legal": "PP 55/2022 Pasal 58"
    },
    {
      "id": "op-021",
      "levels": [
        "a"
      ],
      "section": "dikecualikan",
      "kind": "konsep",
      "prompt": "Hibah manakah yang tetap menjadi objek PPh bagi penerima?",
      "options": [
        "Uang dari ayah kepada anak kandung",
        "Uang dari kakek kepada cucu",
        "Tanah dari orang pribadi kepada yayasan keagamaan tanpa hubungan usaha",
        "Uang kepada koperasi tanpa hubungan usaha"
      ],
      "answer": 1,
      "explanation": "Pengecualian hibah keluarga hanya untuk sedarah garis lurus satu derajat. Kakek ke cucu adalah dua derajat, sehingga tetap objek.",
      "legal": "Pasal 4 ayat (3) huruf a angka 2 UU PPh"
    },
    {
      "id": "op-022",
      "levels": [
        "a"
      ],
      "section": "dikecualikan",
      "kind": "hitung",
      "prompt": "Orang pribadi dalam negeri menerima dividen dari PT dalam negeri Rp100 juta dan tidak menginvestasikannya di Indonesia. Berapa PPh atas dividen tersebut?",
      "options": [
        "Rp10 juta sebagai PPh final",
        "Nihil karena dividen dalam negeri selalu dikecualikan",
        "Rp15 juta sebagai PPh 23",
        "Dihitung tarif Pasal 17 bersama penghasilan lain"
      ],
      "answer": 0,
      "explanation": "Dividen dikecualikan hanya bila diinvestasikan di Indonesia dalam jangka waktu tertentu. Bila tidak, dikenai PPh final 10% × Rp100 juta = Rp10 juta.",
      "legal": "Pasal 4 ayat (3) huruf f UU PPh; PMK 18/2021"
    },
    {
      "id": "op-023",
      "levels": [
        "a"
      ],
      "section": "dikecualikan",
      "kind": "konsep",
      "prompt": "Manakah penerimaan orang pribadi yang dikecualikan dari objek PPh?",
      "options": [
        "Hadiah undian berhadiah dari bank",
        "Bunga tabungan di atas Rp7,5 juta",
        "Sewa rumah yang diterima pemilik",
        "Zakat yang diterima mustahik dari badan amil resmi"
      ],
      "answer": 3,
      "explanation": "Zakat yang diterima penerima yang berhak dikecualikan. Hadiah undian, bunga tabungan di atas ambang, dan sewa rumah adalah objek (dikenai PPh final).",
      "legal": "Pasal 4 ayat (3) huruf a angka 1 UU PPh"
    },
    {
      "id": "op-024",
      "levels": [
        "a"
      ],
      "section": "biaya",
      "kind": "konsep",
      "prompt": "Pengusaha orang pribadi dengan pembukuan membayar beberapa pengeluaran. Manakah yang boleh dikurangkan dari penghasilan bruto?",
      "options": [
        "PPh Pasal 25 yang disetor sendiri",
        "Premi asuransi jiwa untuk dirinya",
        "Zakat penghasilan yang dibayar melalui BAZNAS",
        "Biaya listrik rumah tinggal keluarga"
      ],
      "answer": 2,
      "explanation": "Zakat melalui badan amil resmi boleh dikurangkan berdasarkan Pasal 9 ayat (1) huruf g dan PP 60/2010. PPh, premi asuransi pribadi, dan biaya rumah tangga tidak boleh.",
      "legal": "Pasal 9 ayat (1) huruf g UU PPh; PP 60/2010"
    },
    {
      "id": "op-025",
      "levels": [
        "a"
      ],
      "section": "biaya",
      "kind": "konsep",
      "prompt": "Manakah biaya yang TIDAK boleh dikurangkan oleh pengusaha orang pribadi?",
      "options": [
        "Gaji pegawai toko",
        "Sanksi bunga dalam STP",
        "Penyusutan mobil boks usaha",
        "Bunga pinjaman modal kerja"
      ],
      "answer": 1,
      "explanation": "Sanksi administrasi termasuk biaya yang tidak boleh dikurangkan (Pasal 9 ayat (1) huruf k). Tiga biaya lain berkaitan dengan mendapatkan dan memelihara penghasilan usaha.",
      "legal": "Pasal 9 ayat (1) huruf k UU PPh"
    },
    {
      "id": "op-026",
      "levels": [
        "a"
      ],
      "section": "biaya",
      "kind": "kasus",
      "prompt": "Pengusaha orang pribadi berdagang (tarif umum) dan menyewakan ruko (PPh final). Biaya pemeliharaan ruko Rp15 juta ikut dibebankan dalam laporan laba rugi usaha dagang. Bagaimana perlakuan fiskalnya?",
      "options": [
        "Dikoreksi positif karena terkait penghasilan final",
        "Boleh dikurangkan karena masih biaya usaha",
        "Dikurangkan separuh karena campuran",
        "Dikreditkan terhadap PPh final sewa"
      ],
      "answer": 0,
      "explanation": "Biaya untuk penghasilan yang dikenai PPh final tidak boleh dikurangkan dari penghasilan tarif umum, sehingga Rp15 juta dikoreksi positif.",
      "legal": "Pasal 9 UU PPh"
    },
    {
      "id": "op-027",
      "levels": [
        "a",
        "b"
      ],
      "section": "nppn",
      "kind": "konsep",
      "prompt": "Orang pribadi ingin memakai NPPN untuk tahun pajak 2026. Kapan paling lambat ia menyampaikan pemberitahuan?",
      "options": [
        "31 Januari 2026",
        "30 April 2026",
        "31 Maret 2027 bersama SPT Tahunan",
        "31 Maret 2026"
      ],
      "answer": 3,
      "explanation": "Pemberitahuan NPPN disampaikan paling lama dalam 3 bulan pertama tahun pajak yang bersangkutan, yaitu 31 Maret 2026. Batas SPT Tahunan 2026 bukan batas pemberitahuan.",
      "legal": "Pasal 14 ayat (2) UU PPh; PMK 81/2024"
    },
    {
      "id": "op-028",
      "levels": [
        "a",
        "b"
      ],
      "section": "nppn",
      "kind": "konsep",
      "prompt": "Orang pribadi dengan bruto Rp2 miliar tidak menyampaikan pemberitahuan penggunaan NPPN dalam jangka waktunya. Apa akibatnya?",
      "options": [
        "Otomatis memakai NPPN karena bruto di bawah Rp4,8 miliar",
        "Wajib memakai PPh final 0,5%",
        "Dianggap memilih menyelenggarakan pembukuan",
        "Neto ditetapkan 100% dari bruto"
      ],
      "answer": 2,
      "explanation": "Pasal 14 ayat (5) mengatur WP yang tidak memberitahukan penggunaan norma dianggap memilih pembukuan.",
      "legal": "Pasal 14 ayat (5) UU PPh"
    },
    {
      "id": "op-029",
      "levels": [
        "a",
        "b"
      ],
      "section": "nppn",
      "kind": "konsep",
      "prompt": "Pengusaha orang pribadi pengguna NPPN membayar biaya operasional Rp80 juta. Bagaimana perlakuannya saat menghitung neto?",
      "options": [
        "Dikurangkan dari hasil perkalian norma",
        "Biaya riil tidak dikurangkan lagi",
        "Dikurangkan dari bruto sebelum norma",
        "Dikurangkan separuh dari neto norma"
      ],
      "answer": 1,
      "explanation": "Neto NPPN = bruto × norma. Persentase norma sudah memperhitungkan biaya, sehingga biaya riil tidak dikurangkan.",
      "legal": "Pasal 14 UU PPh"
    },
    {
      "id": "op-030",
      "levels": [
        "a",
        "b"
      ],
      "section": "nppn",
      "kind": "konsep",
      "prompt": "Apakah orang pribadi dengan peredaran bruto tepat Rp4,8 miliar setahun memenuhi syarat NPPN?",
      "options": [
        "Tidak, batasnya kurang dari Rp4,8 miliar",
        "Ya, batasnya sampai dengan Rp4,8 miliar",
        "Ya, asalkan memiliki lebih dari satu usaha",
        "Tidak, batasnya Rp500 juta"
      ],
      "answer": 0,
      "explanation": "Pasal 14 ayat (2) mensyaratkan peredaran bruto kurang dari Rp4,8 miliar. Rp500 juta adalah bagian omzet bebas PPh final, bukan batas NPPN.",
      "legal": "Pasal 14 ayat (2) UU PPh"
    },
    {
      "id": "op-031",
      "levels": [
        "a",
        "b"
      ],
      "section": "nppn",
      "kind": "kasus",
      "prompt": "Tenaga ahli berstatus TK/0 memenuhi syarat NPPN dengan norma 40%. Bruto Rp650 juta, kredit PPh nonfinal Rp12 juta, tanpa penghasilan lain. Berapa PPh kurang bayar?",
      "options": [
        "Rp24,9 juta",
        "Rp18,9 juta",
        "Rp15,9 juta",
        "Rp12,9 juta"
      ],
      "answer": 3,
      "explanation": "Neto = 40% × Rp650 juta = Rp260 juta; PKP = Rp206 juta. PPh = Rp3 juta + 15% × Rp146 juta = Rp24,9 juta; dikurangi kredit Rp12 juta = Rp12,9 juta.",
      "legal": "Pasal 14 dan Pasal 17 UU PPh"
    },
    {
      "id": "op-032",
      "levels": [
        "a",
        "b"
      ],
      "section": "nppn",
      "kind": "kasus",
      "prompt": "WP TK/1 pengguna NPPN memiliki dua kegiatan: perdagangan eceran bruto Rp600 juta (norma 30%) dan jasa bruto Rp400 juta (norma 50%). Tanpa penyesuaian lain, berapa PPh terutang?",
      "options": [
        "Rp50,5 juta",
        "Rp30,225 juta",
        "Rp49,375 juta",
        "Rp79,375 juta"
      ],
      "answer": 2,
      "explanation": "Neto = Rp180 juta + Rp200 juta = Rp380 juta; PTKP TK/1 Rp58,5 juta; PKP Rp321,5 juta. PPh = Rp3 juta + Rp28,5 juta + 25% × Rp71,5 juta = Rp49,375 juta. Rp50,5 juta memakai PTKP TK/0.",
      "legal": "Pasal 14 dan Pasal 17 UU PPh"
    },
    {
      "id": "op-033",
      "levels": [
        "a",
        "b"
      ],
      "section": "nppn",
      "kind": "konsep",
      "prompt": "Dua pengusaha dengan jenis usaha sama, satu di Medan dan satu di kabupaten kecil, sama-sama memakai NPPN. Bagaimana persentase normanya?",
      "options": [
        "Selalu sama karena jenis usahanya sama",
        "Dapat berbeda karena tabel norma membedakan wilayah",
        "Ditentukan sendiri oleh WP setiap tahun",
        "Ditentukan dari laba tahun sebelumnya"
      ],
      "answer": 1,
      "explanation": "Tabel norma membedakan 10 ibu kota provinsi (termasuk Medan), ibu kota provinsi lainnya, dan daerah lainnya.",
      "legal": "PER-17/PJ/2015"
    },
    {
      "id": "op-034",
      "levels": [
        "a",
        "b"
      ],
      "section": "keluarga",
      "kind": "konsep",
      "prompt": "Pada status mana PPh suami dan istri dihitung sendiri-sendiri tanpa menggabungkan neto?",
      "options": [
        "HB, hidup berpisah berdasarkan putusan hakim",
        "PH, pisah harta dengan perjanjian tertulis",
        "MT, istri memilih menjalankan kewajiban sendiri",
        "KK, istri bekerja pada beberapa pemberi kerja"
      ],
      "answer": 0,
      "explanation": "Pada HB masing-masing dikenai pajak sendiri. Pada PH dan MT neto digabung dulu lalu PPh dibagi proporsional.",
      "legal": "Pasal 8 ayat (2) dan (3) UU PPh"
    },
    {
      "id": "op-035",
      "levels": [
        "a",
        "b"
      ],
      "section": "keluarga",
      "kind": "konsep",
      "prompt": "Istri bekerja hanya pada satu pemberi kerja, gajinya telah dipotong PPh 21, dan pekerjaannya tidak terkait usaha suami atau anggota keluarga lain. Bagaimana perlakuan gaji itu?",
      "options": [
        "Selalu digabung dengan penghasilan suami",
        "Digabung hanya bila melebihi PTKP",
        "Dikenai PPh 26 karena dipotong pemberi kerja",
        "Tidak digabung dengan penghasilan suami"
      ],
      "answer": 3,
      "explanation": "Pasal 8 ayat (1) mengecualikan dari penggabungan penghasilan istri dari satu pemberi kerja yang telah dipotong PPh 21 dan tidak terkait usaha keluarga.",
      "legal": "Pasal 8 ayat (1) UU PPh"
    },
    {
      "id": "op-036",
      "levels": [
        "a",
        "b"
      ],
      "section": "keluarga",
      "kind": "kasus",
      "prompt": "Pasangan berstatus PH memiliki neto Rp360 juta (suami) dan Rp240 juta (istri), status gabungan K/I/0, tanpa kredit. Berapa bagian PPh istri?",
      "options": [
        "Rp30,55 juta",
        "Rp48,75 juta",
        "Rp36,35 juta",
        "Rp81,25 juta"
      ],
      "answer": 2,
      "explanation": "PTKP gabungan Rp112,5 juta; PKP Rp487,5 juta. PPh gabungan = Rp3 juta + Rp28,5 juta + 25% × Rp237,5 juta = Rp90,875 juta. Bagian istri 240/600 × Rp90,875 juta = Rp36,35 juta.",
      "legal": "Pasal 8 ayat (3) UU PPh"
    },
    {
      "id": "op-037",
      "levels": [
        "a",
        "b"
      ],
      "section": "keluarga",
      "kind": "konsep",
      "prompt": "Anak berusia 15 tahun yang belum kawin memperoleh honor sebagai bintang iklan. Bagaimana pemajakannya?",
      "options": [
        "Dikenai pajak sendiri atas NIK anak",
        "Digabung dengan penghasilan orang tuanya",
        "Dikecualikan karena anak belum dewasa",
        "Dikenai PPh final terpisah"
      ],
      "answer": 1,
      "explanation": "Pasal 8 ayat (4) menggabungkan penghasilan anak belum dewasa dengan penghasilan orang tuanya.",
      "legal": "Pasal 8 ayat (4) UU PPh"
    },
    {
      "id": "op-038",
      "levels": [
        "a",
        "b"
      ],
      "section": "keluarga",
      "kind": "kasus",
      "prompt": "Istri memilih MT. Neto suami Rp270 juta dan neto istri Rp90 juta; status gabungan K/I/1; tanpa penyesuaian lain. Berapa PPh yang ditanggung istri?",
      "options": [
        "Rp7,6125 juta",
        "Rp1,8 juta",
        "Rp10,15 juta",
        "Rp15,225 juta"
      ],
      "answer": 0,
      "explanation": "PTKP gabungan Rp117 juta; PKP Rp243 juta; PPh gabungan Rp3 juta + 15% × Rp183 juta = Rp30,45 juta. Bagian istri 90/360 × Rp30,45 juta = Rp7,6125 juta. Rp1,8 juta keliru karena menghitung istri sendiri seperti HB.",
      "legal": "Pasal 8 ayat (3) UU PPh"
    },
    {
      "id": "op-039",
      "levels": [
        "a",
        "b"
      ],
      "section": "ptkp-tarif",
      "kind": "hitung",
      "prompt": "Berapa PTKP setahun untuk WP berstatus K/2 yang penghasilan istrinya tidak digabung?",
      "options": [
        "Rp58,5 juta",
        "Rp63 juta",
        "Rp72 juta",
        "Rp67,5 juta"
      ],
      "answer": 3,
      "explanation": "PTKP = Rp54 juta + Rp4,5 juta (kawin) + 2 × Rp4,5 juta = Rp67,5 juta.",
      "legal": "Pasal 7 UU PPh; PMK 101/2016"
    },
    {
      "id": "op-040",
      "levels": [
        "a",
        "b"
      ],
      "section": "ptkp-tarif",
      "kind": "konsep",
      "prompt": "Siapa yang dapat diperhitungkan sebagai tanggungan PTKP bila ditanggung sepenuhnya?",
      "options": [
        "Adik kandung yang masih sekolah",
        "Keponakan yang tinggal serumah",
        "Mertua yang tinggal serumah",
        "Kakak ipar yang belum bekerja"
      ],
      "answer": 2,
      "explanation": "Tanggungan terbatas pada sedarah dan semenda garis lurus serta anak angkat. Mertua adalah semenda garis lurus; adik, keponakan, dan ipar adalah garis menyamping.",
      "legal": "Pasal 7 ayat (1) UU PPh"
    },
    {
      "id": "op-041",
      "levels": [
        "a",
        "b"
      ],
      "section": "ptkp-tarif",
      "kind": "kasus",
      "prompt": "Pada 1 Januari 2026 WP belum kawin. Ia menikah pada Juli 2026 dan anaknya lahir November 2026. Status PTKP mana yang dipakai untuk tahun pajak 2026?",
      "options": [
        "K/0",
        "TK/0",
        "K/1",
        "TK/1"
      ],
      "answer": 1,
      "explanation": "Status PTKP ditentukan menurut keadaan awal tahun pajak, sehingga untuk 2026 tetap TK/0. Perubahan status berlaku mulai tahun pajak 2027.",
      "legal": "Pasal 7 ayat (2) UU PPh"
    },
    {
      "id": "op-042",
      "levels": [
        "a",
        "b"
      ],
      "section": "ptkp-tarif",
      "kind": "konsep",
      "prompt": "Berapa tarif untuk bagian PKP orang pribadi di atas Rp500 juta sampai Rp5 miliar?",
      "options": [
        "30%",
        "25%",
        "35%",
        "22%"
      ],
      "answer": 0,
      "explanation": "Lapisan di atas Rp500 juta–Rp5 miliar dikenai 30%; di atas Rp5 miliar 35%. Tarif 22% adalah tarif badan.",
      "legal": "Pasal 17 ayat (1) huruf a UU PPh s.t.d.t.d. UU HPP"
    },
    {
      "id": "op-043",
      "levels": [
        "a",
        "b"
      ],
      "section": "ptkp-tarif",
      "kind": "hitung",
      "prompt": "PKP orang pribadi Rp6 miliar. Berapa PPh terutang?",
      "options": [
        "Rp2,1 miliar",
        "Rp1,8 miliar",
        "Rp1,444 miliar",
        "Rp1,794 miliar"
      ],
      "answer": 3,
      "explanation": "Rp3 juta + Rp28,5 juta + Rp62,5 juta + 30% × Rp4,5 miliar (Rp1,35 miliar) + 35% × Rp1 miliar (Rp350 juta) = Rp1,794 miliar. Rp2,1 miliar keliru karena menerapkan 35% pada seluruh PKP.",
      "legal": "Pasal 17 ayat (1) huruf a UU PPh"
    },
    {
      "id": "op-044",
      "levels": [
        "a",
        "b"
      ],
      "section": "ptkp-tarif",
      "kind": "hitung",
      "prompt": "WP berstatus K/3 memiliki penghasilan neto Rp226 juta dan memakai tarif umum. Tanpa penyesuaian lain, berapa PKP?",
      "options": [
        "Rp158,5 juta",
        "Rp163 juta",
        "Rp154 juta",
        "Rp172 juta"
      ],
      "answer": 2,
      "explanation": "PTKP K/3 = Rp54 juta + Rp4,5 juta + 3 × Rp4,5 juta = Rp72 juta. PKP = Rp226 juta − Rp72 juta = Rp154 juta.",
      "legal": "Pasal 7 UU PPh"
    },
    {
      "id": "op-045",
      "levels": [
        "a",
        "b"
      ],
      "section": "ptkp-tarif",
      "kind": "hitung",
      "prompt": "WP berstatus K/I/1, penghasilan istri digabung dengan suami. Berapa PTKP gabungan?",
      "options": [
        "Rp108 juta",
        "Rp117 juta",
        "Rp112,5 juta",
        "Rp63 juta"
      ],
      "answer": 1,
      "explanation": "PTKP = Rp54 juta (WP) + Rp54 juta (istri) + Rp4,5 juta (kawin) + Rp4,5 juta (1 tanggungan) = Rp117 juta.",
      "legal": "Pasal 7 UU PPh; PMK 101/2016"
    },
    {
      "id": "op-046",
      "levels": [
        "a"
      ],
      "section": "kompensasi",
      "kind": "konsep",
      "prompt": "Kerugian fiskal tahun pajak 2021 dapat dikompensasikan paling lambat dengan penghasilan tahun pajak berapa?",
      "options": [
        "2026",
        "2025",
        "2027",
        "Tanpa batas waktu"
      ],
      "answer": 0,
      "explanation": "Kompensasi dimulai tahun berikutnya berturut-turut sampai 5 tahun: 2022–2026.",
      "legal": "Pasal 6 ayat (2) UU PPh"
    },
    {
      "id": "op-047",
      "levels": [
        "a"
      ],
      "section": "kompensasi",
      "kind": "konsep",
      "prompt": "WP orang pribadi rugi fiskal pada 2024 dengan pembukuan, lalu memakai NPPN pada 2025. Bagaimana kerugian 2024 pada tahun 2025?",
      "options": [
        "Dikurangkan dari neto norma 2025",
        "Ditunda dan jangka 5 tahun berhenti selama NPPN",
        "Dikreditkan terhadap PPh terutang 2025",
        "Tidak dapat dikompensasikan pada 2025 dan jangka 5 tahunnya tetap berjalan"
      ],
      "answer": 3,
      "explanation": "Kompensasi hanya untuk WP yang menghitung neto dengan pembukuan. Jangka 5 tahun dihitung berturut-turut sehingga tahun NPPN tetap terhitung.",
      "legal": "Pasal 6 ayat (2) dan Pasal 14 UU PPh"
    },
    {
      "id": "op-048",
      "levels": [
        "a"
      ],
      "section": "kompensasi",
      "kind": "hitung",
      "prompt": "Pada 2026 neto fiskal WP Rp100 juta. Sisa rugi fiskal yang belum terpakai: rugi 2020 Rp40 juta dan rugi 2023 Rp25 juta. Berapa kompensasi yang dapat dipakai pada 2026?",
      "options": [
        "Rp65 juta",
        "Rp40 juta",
        "Rp25 juta",
        "Nihil"
      ],
      "answer": 2,
      "explanation": "Rugi 2020 hanya dapat dipakai sampai 2025 sehingga hangus. Yang tersisa rugi 2023 Rp25 juta.",
      "legal": "Pasal 6 ayat (2) UU PPh"
    },
    {
      "id": "op-049",
      "levels": [
        "a"
      ],
      "section": "kompensasi",
      "kind": "kasus",
      "prompt": "WP TK/0 memiliki neto fiskal Rp174 juta setelah koreksi, sisa rugi fiskal yang masih dapat dikompensasikan Rp30 juta, dan kredit pajak Rp2 juta. Berapa PPh kurang bayar?",
      "options": [
        "Rp7,5 juta",
        "Rp5,5 juta",
        "Rp10 juta",
        "Rp12 juta"
      ],
      "answer": 1,
      "explanation": "PKP = Rp174 juta − Rp30 juta − Rp54 juta = Rp90 juta. PPh = Rp3 juta + 15% × Rp30 juta = Rp7,5 juta; dikurangi kredit Rp2 juta = Rp5,5 juta.",
      "legal": "Pasal 6 ayat (2) dan Pasal 17 UU PPh"
    },
    {
      "id": "op-050",
      "levels": [
        "a"
      ],
      "section": "pkp-fiskal",
      "kind": "hitung",
      "prompt": "Neto fiskal Rp155.432.900, PTKP Rp54 juta, tanpa kompensasi rugi. Berapa PKP?",
      "options": [
        "Rp101.432.000",
        "Rp101.433.000",
        "Rp101.000.000",
        "Rp155.432.000"
      ],
      "answer": 0,
      "explanation": "Rp155.432.900 − Rp54.000.000 = Rp101.432.900, dibulatkan ke bawah ke ribuan penuh menjadi Rp101.432.000.",
      "legal": "Pasal 16 UU PPh"
    },
    {
      "id": "op-051",
      "levels": [
        "a"
      ],
      "section": "pkp-fiskal",
      "kind": "hitung",
      "prompt": "Laba komersial pengusaha orang pribadi Rp400 juta sudah memasukkan pendapatan sewa ruko Rp60 juta (PPh final). Bebannya mencakup PPh 25 Rp12 juta, sumbangan ke tetangga Rp5 juta, dan listrik rumah pribadi Rp8 juta. Berapa neto fiskal tarif umum?",
      "options": [
        "Rp425 juta",
        "Rp340 juta",
        "Rp400 juta",
        "Rp365 juta"
      ],
      "answer": 3,
      "explanation": "Neto = Rp400 juta − Rp60 juta + Rp12 juta + Rp5 juta + Rp8 juta = Rp365 juta. Rp425 juta lupa mengeluarkan sewa final.",
      "legal": "Pasal 4 ayat (2) dan Pasal 9 UU PPh"
    },
    {
      "id": "op-052",
      "levels": [
        "a"
      ],
      "section": "pkp-fiskal",
      "kind": "kasus",
      "prompt": "WP K/0 memiliki neto usaha Rp200 juta dan neto gaji Rp80 juta yang PPh 21-nya Rp4,5 juta. Tanpa penyesuaian lain, berapa PPh kurang bayar?",
      "options": [
        "Rp23,4 juta",
        "Rp27,225 juta",
        "Rp22,725 juta",
        "Rp15,225 juta"
      ],
      "answer": 2,
      "explanation": "PKP = Rp280 juta − Rp58,5 juta = Rp221,5 juta. PPh = Rp3 juta + 15% × Rp161,5 juta = Rp27,225 juta; dikurangi PPh 21 Rp4,5 juta = Rp22,725 juta. Rp15,225 juta keliru karena mengeluarkan gaji dari PKP.",
      "legal": "Pasal 16, 17, dan 28 UU PPh"
    },
    {
      "id": "op-053",
      "levels": [
        "a"
      ],
      "section": "kredit",
      "kind": "konsep",
      "prompt": "Manakah yang TIDAK dapat dikreditkan dalam SPT Tahunan orang pribadi?",
      "options": [
        "PPh 21 yang dipotong pemberi kerja",
        "PPh Pasal 4 ayat (2) atas sewa bangunan",
        "PPh 22 impor",
        "PPh 23 atas jasa"
      ],
      "answer": 1,
      "explanation": "PPh Pasal 4 ayat (2) bersifat final sehingga tidak dikreditkan. PPh 21, 22, dan 23 nonfinal adalah kredit pajak.",
      "legal": "Pasal 28 UU PPh"
    },
    {
      "id": "op-054",
      "levels": [
        "a"
      ],
      "section": "kredit",
      "kind": "hitung",
      "prompt": "PKP WP Rp500 juta, termasuk neto luar negeri Rp100 juta; PPh terutang Rp94 juta. Pajak yang dibayar di luar negeri Rp25 juta. Berapa kredit PPh 24 maksimum?",
      "options": [
        "Rp18,8 juta",
        "Rp25 juta",
        "Rp20 juta",
        "Rp94 juta"
      ],
      "answer": 0,
      "explanation": "Batas = Rp100 juta ÷ Rp500 juta × Rp94 juta = Rp18,8 juta, lebih kecil dari Rp25 juta, sehingga kredit Rp18,8 juta.",
      "legal": "Pasal 24 UU PPh"
    },
    {
      "id": "op-055",
      "levels": [
        "a"
      ],
      "section": "kredit",
      "kind": "kasus",
      "prompt": "Orang pribadi pengusaha memenuhi syarat dan SPT Tahunannya lebih bayar Rp80 juta. Jalur pengembalian apa yang tersedia tanpa pemeriksaan lebih dulu?",
      "options": [
        "Hanya restitusi melalui pemeriksaan Pasal 17B",
        "Hanya bila berstatus WP kriteria tertentu",
        "Tidak dapat dikembalikan, hanya dikompensasikan",
        "Pengembalian pendahuluan sebagai WP persyaratan tertentu"
      ],
      "answer": 3,
      "explanation": "Pasal 17D UU KUP memberi pengembalian pendahuluan bagi orang pribadi pengusaha dengan lebih bayar sampai Rp100 juta. Rp80 juta masih dalam batas.",
      "legal": "Pasal 17D UU KUP"
    },
    {
      "id": "op-056",
      "levels": [
        "a"
      ],
      "section": "pph25",
      "kind": "hitung",
      "prompt": "PPh terutang tahun lalu Rp60 juta; kredit PPh 21 Rp18 juta dan PPh 23 Rp6 juta; PPh final yang dibayar Rp4 juta. Berapa angsuran PPh 25 per bulan?",
      "options": [
        "Rp2,667 juta",
        "Rp5 juta",
        "Rp3 juta",
        "Rp3,5 juta"
      ],
      "answer": 2,
      "explanation": "Angsuran = (Rp60 juta − Rp18 juta − Rp6 juta) ÷ 12 = Rp3 juta. PPh final tidak ikut dikurangkan.",
      "legal": "Pasal 25 ayat (1) UU PPh"
    },
    {
      "id": "op-057",
      "levels": [
        "a"
      ],
      "section": "pph25",
      "kind": "konsep",
      "prompt": "Kapan batas setor angsuran PPh 25 masa Juli?",
      "options": [
        "31 Juli",
        "15 Agustus",
        "20 Agustus",
        "10 Agustus"
      ],
      "answer": 1,
      "explanation": "PPh 25 disetor paling lambat tanggal 15 bulan berikutnya setelah masa pajak berakhir.",
      "legal": "PMK 81/2024"
    },
    {
      "id": "op-058",
      "levels": [
        "a"
      ],
      "section": "pph25",
      "kind": "konsep",
      "prompt": "Berapa angsuran PPh 25 Januari dan Februari 2026 bagi orang pribadi yang belum melewati batas waktu SPT Tahunan 2025?",
      "options": [
        "Sama dengan angsuran Desember 2025",
        "Nihil sampai SPT 2025 disampaikan",
        "Dihitung dari SPT Tahunan 2024",
        "Seperdua belas PPh terutang 2025 tanpa kredit"
      ],
      "answer": 0,
      "explanation": "Untuk bulan-bulan sebelum batas waktu penyampaian SPT Tahunan, angsuran sama dengan angsuran bulan terakhir tahun pajak lalu.",
      "legal": "Pasal 25 ayat (2) UU PPh"
    },
    {
      "id": "op-059",
      "levels": [
        "a"
      ],
      "section": "spt",
      "kind": "konsep",
      "prompt": "Kapan batas penyampaian SPT Tahunan PPh orang pribadi tahun pajak 2026?",
      "options": [
        "30 April 2027",
        "31 Januari 2027",
        "31 Desember 2027",
        "31 Maret 2027"
      ],
      "answer": 3,
      "explanation": "Batas SPT Tahunan orang pribadi paling lama 3 bulan setelah akhir tahun pajak. Empat bulan (30 April) berlaku bagi badan.",
      "legal": "Pasal 3 ayat (3) UU KUP"
    },
    {
      "id": "op-060",
      "levels": [
        "a"
      ],
      "section": "spt",
      "kind": "konsep",
      "prompt": "Orang pribadi terlambat menyampaikan SPT Tahunan PPh. Berapa denda administrasinya?",
      "options": [
        "Rp1.000.000",
        "Rp500.000",
        "Rp100.000",
        "2% per bulan dari PPh terutang"
      ],
      "answer": 2,
      "explanation": "Pasal 7 UU KUP: denda keterlambatan SPT Tahunan orang pribadi Rp100.000; badan Rp1.000.000.",
      "legal": "Pasal 7 ayat (1) UU KUP"
    },
    {
      "id": "op-061",
      "levels": [
        "a"
      ],
      "section": "spt",
      "kind": "konsep",
      "prompt": "WP orang pribadi belum siap melaporkan SPT Tahunan. Berapa lama penyampaian dapat diperpanjang?",
      "options": [
        "Paling lama 3 bulan tanpa pemberitahuan",
        "Paling lama 2 bulan dengan pemberitahuan",
        "Paling lama 6 bulan dengan izin KPP",
        "Tidak dapat diperpanjang bagi orang pribadi"
      ],
      "answer": 1,
      "explanation": "Pasal 3 ayat (4) UU KUP memungkinkan perpanjangan paling lama 2 bulan dengan menyampaikan pemberitahuan.",
      "legal": "Pasal 3 ayat (4) UU KUP"
    }
  ],
  "flashcards": [
    {
      "front": "Kriteria hari SPDN orang pribadi",
      "back": "Lebih dari 183 hari dalam jangka 12 bulan",
      "levels": [
        "a"
      ],
      "section": "subjek"
    },
    {
      "front": "WNA keahlian tertentu: objek terbatas berapa lama?",
      "back": "4 tahun pajak sejak menjadi SPDN (hanya penghasilan dari Indonesia)",
      "levels": [
        "a"
      ],
      "section": "subjek"
    },
    {
      "front": "Akhir kewajiban subjektif SPDN orang pribadi",
      "back": "Meninggal dunia atau meninggalkan Indonesia selamanya",
      "levels": [
        "a"
      ],
      "section": "kewajiban-subjektif"
    },
    {
      "front": "Rumus PPh bagian tahun pajak",
      "back": "Jumlah hari ÷ 360 × PPh setahun (bulan penuh = 30 hari)",
      "levels": [
        "a"
      ],
      "section": "kewajiban-subjektif"
    },
    {
      "front": "Syarat yang hanya berlaku bagi pejabat perwakilan negara asing",
      "back": "Asas timbal balik",
      "levels": [
        "a"
      ],
      "section": "pengecualian-subjek"
    },
    {
      "front": "Tarif PPh final UMKM",
      "back": "0,5% dari peredaran bruto",
      "levels": [
        "a"
      ],
      "section": "final-umkm"
    },
    {
      "front": "Jangka waktu 0,5% orang pribadi setelah PP 20/2026",
      "back": "Tidak dibatasi selama memenuhi kriteria (dulu 7 tahun)",
      "levels": [
        "a"
      ],
      "section": "final-umkm"
    },
    {
      "front": "Omzet orang pribadi yang tidak dikenai PPh final",
      "back": "Rp500 juta pertama setahun, kumulatif",
      "levels": [
        "a"
      ],
      "section": "final-umkm"
    },
    {
      "front": "Subjek PPh final 0,5% menurut PP 20/2026",
      "back": "Orang pribadi, perseroan perorangan satu orang, koperasi",
      "levels": [
        "a"
      ],
      "section": "final-umkm"
    },
    {
      "front": "Dividen dalam negeri orang pribadi yang tidak diinvestasikan",
      "back": "PPh final 10%",
      "levels": [
        "a"
      ],
      "section": "dikecualikan"
    },
    {
      "front": "Hibah keluarga yang dikecualikan",
      "back": "Sedarah garis lurus satu derajat, tanpa hubungan usaha",
      "levels": [
        "a"
      ],
      "section": "dikecualikan"
    },
    {
      "front": "Zakat yang boleh dikurangkan",
      "back": "Dibayar melalui badan amil zakat resmi (PP 60/2010)",
      "levels": [
        "a"
      ],
      "section": "biaya"
    },
    {
      "front": "Batas bruto NPPN",
      "back": "Kurang dari Rp4,8 miliar setahun",
      "levels": [
        "a",
        "b"
      ],
      "section": "nppn"
    },
    {
      "front": "Batas pemberitahuan NPPN",
      "back": "3 bulan pertama tahun pajak",
      "levels": [
        "a",
        "b"
      ],
      "section": "nppn"
    },
    {
      "front": "Tidak memberitahu penggunaan NPPN",
      "back": "Dianggap memilih pembukuan",
      "levels": [
        "a",
        "b"
      ],
      "section": "nppn"
    },
    {
      "front": "Tiga kelompok wilayah tabel norma",
      "back": "10 ibu kota provinsi, ibu kota provinsi lain, daerah lain",
      "levels": [
        "a",
        "b"
      ],
      "section": "nppn"
    },
    {
      "front": "Status HB",
      "back": "Dikenai pajak sendiri-sendiri, tanpa penggabungan",
      "levels": [
        "a",
        "b"
      ],
      "section": "keluarga"
    },
    {
      "front": "Status PH dan MT",
      "back": "Gabung neto, hitung PPh, bagi sebanding neto",
      "levels": [
        "a",
        "b"
      ],
      "section": "keluarga"
    },
    {
      "front": "Penghasilan anak belum dewasa",
      "back": "Digabung dengan penghasilan orang tua",
      "levels": [
        "a",
        "b"
      ],
      "section": "keluarga"
    },
    {
      "front": "Jangka kompensasi kerugian",
      "back": "5 tahun berturut-turut, rugi terlama dipakai dulu",
      "levels": [
        "a"
      ],
      "section": "kompensasi"
    },
    {
      "front": "PTKP WP sendiri",
      "back": "Rp54 juta",
      "levels": [
        "a",
        "b"
      ],
      "section": "ptkp-tarif"
    },
    {
      "front": "Tambahan PTKP kawin / tanggungan",
      "back": "Rp4,5 juta; tanggungan maks. 3 orang",
      "levels": [
        "a",
        "b"
      ],
      "section": "ptkp-tarif"
    },
    {
      "front": "PTKP istri yang digabung",
      "back": "Tambahan Rp54 juta",
      "levels": [
        "a",
        "b"
      ],
      "section": "ptkp-tarif"
    },
    {
      "front": "Lapisan tarif Pasal 17 orang pribadi",
      "back": "5% s.d. 60 jt; 15% s.d. 250 jt; 25% s.d. 500 jt; 30% s.d. 5 M; 35% di atasnya",
      "levels": [
        "a",
        "b"
      ],
      "section": "ptkp-tarif"
    },
    {
      "front": "Saat penentuan status PTKP",
      "back": "Keadaan awal tahun pajak",
      "levels": [
        "a",
        "b"
      ],
      "section": "ptkp-tarif"
    },
    {
      "front": "Pembulatan PKP",
      "back": "Ke bawah ke ribuan rupiah penuh",
      "levels": [
        "a"
      ],
      "section": "pkp-fiskal"
    },
    {
      "front": "Batas kredit PPh 24",
      "back": "Terendah dari pajak LN dan (penghasilan LN ÷ PKP) × PPh terutang",
      "levels": [
        "a"
      ],
      "section": "kredit"
    },
    {
      "front": "Restitusi pendahuluan orang pribadi pengusaha",
      "back": "Lebih bayar sampai Rp100 juta (Pasal 17D KUP)",
      "levels": [
        "a"
      ],
      "section": "kredit"
    },
    {
      "front": "Rumus angsuran PPh 25",
      "back": "(PPh terutang lalu − PPh 21, 22, 23, 24) ÷ 12",
      "levels": [
        "a"
      ],
      "section": "pph25"
    },
    {
      "front": "Batas setor PPh 25",
      "back": "Tanggal 15 bulan berikutnya",
      "levels": [
        "a"
      ],
      "section": "pph25"
    },
    {
      "front": "Batas SPT Tahunan orang pribadi",
      "back": "3 bulan setelah akhir tahun pajak",
      "levels": [
        "a"
      ],
      "section": "spt"
    },
    {
      "front": "Denda telat SPT Tahunan orang pribadi",
      "back": "Rp100.000",
      "levels": [
        "a"
      ],
      "section": "spt"
    }
  ]
};

export default content;
