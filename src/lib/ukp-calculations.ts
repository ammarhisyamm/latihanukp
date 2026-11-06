import { getBookletItems } from "./ukp-curriculum";
import type { Question, UkpLevel, UkpTopic } from "./ukp";

const rupiah = new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 });
const rp = (amount: number) => `Rp${rupiah.format(amount)}`;
const m = (amount: number) => amount * 1_000_000;
const tax = (base: number, rate: number) => Math.round((base * rate) / 100);

type Calculation = [prompt: string, result: number, distractors: number[], working: string];
type Pattern = {
  id: string;
  levels: readonly UkpLevel[];
  items: Partial<Record<UkpLevel, string>>;
  rule: string;
  href: string;
  solve: (i: number) => Calculation;
};
const both = ["a", "b"] as const;
const b = ["b"] as const;
const hpp = "https://www.pajak.go.id/en/node/74838";
const pph = "https://www.pajak.go.id/id/susunan-dalam-satu-naskah-undang-undang-pajak-penghasilan";
const meterai = "https://jdih.kemenkeu.go.id/dok/uu-10-tahun-2020";
const ppn = "https://jdih.kemenkeu.go.id/dok/pmk-131-tahun-2024/summary";
const pbb =
  "https://www.pajak.go.id/index.php/id/penetapan-besarnya-nilai-jual-kena-pajak-untuk-penghitungan-pajak-bumi-dan-bangunan-0";
const ia = "https://web.iaiglobal.or.id/SAK-IAI/PSAK%20Umum";
const pmk168 = "https://jdih.kemenkeu.go.id/dok/pmk-168-tahun-2023/summary";

function pattern(
  id: string,
  levels: readonly UkpLevel[],
  aItem: string,
  bItem: string,
  rule: string,
  href: string,
  solve: Pattern["solve"],
): Pattern {
  return { id, levels, items: { a: aItem, b: bItem }, rule, href, solve };
}

const patterns = {
  "bea-meterai": [
    pattern("rangkap", both, "1", "1", "UU 10/2020, Pasal 3 dan 5", meterai, (i) => {
      const copies = 2 + (i % 3);
      return [
        `Dalam satu batch ada ${i} perjanjian, masing-masing dibuat ${copies} rangkap yang diterima para pihak. Berapa pokok Bea Meterai seluruh rangkap?`,
        i * copies * 10_000,
        [i * 10_000, (i + copies) * 10_000, (i * copies - 1) * 10_000],
        `Jumlah objek = ${i} × ${copies} rangkap. Kalikan Rp10.000 per rangkap.`,
      ];
    }),
    pattern("ambang", both, "1", "1", "UU 10/2020, Pasal 3 dan 5", meterai, (i) => {
      const above = i + 2;
      return [
        `Arsip memuat ${above} kuitansi Rp6 juta dan ${i} kuitansi tepat Rp5 juta. Semua menyatakan penerimaan uang dan dipakai sebagai arsip biasa. Berapa pokok Bea Meterai?`,
        above * 10_000,
        [(above + i) * 10_000, i * 10_000, 0],
        `Hanya ${above} kuitansi yang melewati ambang lebih dari Rp5 juta. Kalikan jumlah itu dengan Rp10.000.`,
      ];
    }),
    pattern("kurang-bayar", both, "4", "1", "UU 10/2020, Pasal 17–18", meterai, (i) => {
      return [
        `Ada ${i} dokumen yang sudah terutang Bea Meterai Rp10.000 sejak awal dan belum dibayar. Dalam pemeteraian kemudian atas kekurangan itu, berapa pokok ditambah sanksi 100%?`,
        i * 20_000,
        [i * 10_000, i * 30_000, i * 15_000],
        `Pokok = ${rp(i * 10_000)}. Sanksi 100% sama dengan pokok. Jumlahkan keduanya.`,
      ];
    }),
    pattern("alat-bukti", both, "4", "1", "UU 10/2020, Pasal 17–18", meterai, (i) => {
      return [
        `Untuk persidangan diajukan ${i} dokumen yang baru terutang karena menjadi alat bukti dan 3 dokumen yang sudah terutang sejak awal tetapi belum dibayar. Berapa total pokok dan sanksi pemeteraian kemudian?`,
        (i + 6) * 10_000,
        [(i + 3) * 10_000, (2 * i + 6) * 10_000, (i + 9) * 10_000],
        `Dokumen yang baru terutang saat diajukan dikenai pokok. Tiga dokumen yang kurang bayar sejak awal masing-masing dikenai Rp10.000 pokok dan Rp10.000 sanksi.`,
      ];
    }),
  ],
  kup: [
    pattern("bunga-pembetulan", both, "5", "5", "UU KUP, Pasal 8", hpp, (i) => {
      const base = m(i * 2);
      return [
        `Pembetulan sukarela menambah kurang bayar ${rp(base)}. Asumsi soal menetapkan bunga 1,2% per bulan untuk 4 bulan. Berapa bunga saja?`,
        tax(base, 4.8),
        [tax(base, 1.2), tax(base, 4), base + tax(base, 4.8)],
        `Bunga = ${rp(base)} × 1,2% × 4. Pokok tidak dimasukkan karena yang ditanya hanya bunga.`,
      ];
    }),
    pattern("bagian-bulan", both, "9", "9", "UU KUP, Pasal 9", hpp, (i) => {
      const base = m(i + 9);
      return [
        `Pajak ${rp(base)} terlambat disetor selama 2 bulan lebih 1 hari. Tarif yang diberikan 1% per bulan. Berapa bunga menurut aturan bagian bulan dihitung penuh?`,
        tax(base, 3),
        [tax(base, 2), tax(base, 1), tax(base, 4)],
        `Hitung 3 bulan, lalu kalikan 1% per bulan dengan pokok ${rp(base)}.`,
      ];
    }),
    pattern("sisa-restitusi", both, "10", "10", "UU KUP, Pasal 11", hpp, (i) => {
      const excess = m(i * 4 + 30);
      const debt = m(i + 5);
      return [
        `SKPLB menetapkan lebih bayar ${rp(excess)}. Terdapat utang pajak ${rp(debt)} yang harus diperhitungkan. Berapa sisa yang dapat dikembalikan?`,
        excess - debt,
        [excess, debt, excess + debt],
        `Perhitungkan utang pajak dahulu: ${rp(excess)} − ${rp(debt)}.`,
      ];
    }),
    pattern("denda-keberatan", both, "5", "5", "UU KUP, Pasal 25 ayat (9)", hpp, (i) => {
      const result = m(i * 3 + 50);
      const paid = m(i + 8);
      return [
        `Keberatan ditolak. Pajak menurut keputusan ${rp(result)}, pembayaran sebelum keberatan ${rp(paid)}, dan WP tidak banding. Jika denda 30% berlaku, berapa dendanya?`,
        tax(result - paid, 30),
        [tax(result, 30), tax(paid, 30), tax(result - paid, 60)],
        `Kurangi pembayaran sebelum keberatan dari pajak menurut keputusan. Kalikan selisihnya dengan 30%.`,
      ];
    }),
  ],
  "pph-orang-pribadi": [
    pattern("lapisan-op", both, "11", "3", "UU PPh, Pasal 17", hpp, (i) => {
      const pkp = m(i * 5 + 75);
      return [
        `PKP tahunan orang pribadi ${rp(pkp)}. Berapa PPh terutang sebelum kredit bila berlaku lapisan 5% sampai Rp60 juta dan 15% atas sisanya?`,
        m(3) + tax(pkp - m(60), 15),
        [tax(pkp, 15), tax(pkp, 5), tax(pkp - m(60), 15)],
        `Rp60 juta pertama menghasilkan Rp3 juta. Tambahkan 15% atas ${rp(pkp - m(60))}.`,
      ];
    }),
    pattern("nppn", both, "8", "1", "UU PPh, Pasal 14", pph, (i) => {
      const gross = m(350 + i * 17);
      const norm = 30 + (i % 4) * 5;
      return [
        `Pengusaha yang memenuhi syarat NPPN memiliki bruto ${rp(gross)} dan norma ${norm}%. Ia mencatat biaya riil Rp100 juta. Berapa penghasilan neto menurut norma?`,
        tax(gross, norm),
        [tax(gross - m(100), norm), tax(gross, norm) - m(100), gross - tax(gross, norm)],
        `Neto menurut norma = ${rp(gross)} × ${norm}%. Biaya riil tidak dikurangkan lagi.`,
      ];
    }),
    pattern("alokasi-ph", both, "9", "2", "UU PPh, Pasal 8", pph, (i) => {
      const total = m(i + 20);
      return [
        `Pasangan berstatus PH memiliki neto suami Rp300 juta dan istri Rp200 juta. PPh gabungan sudah dihitung ${rp(total)}. Berapa alokasi PPh untuk istri?`,
        tax(total, 40),
        [tax(total, 60), tax(total, 50), total],
        `Proporsi neto istri = 200/(300 + 200) = 40%. Terapkan pada PPh gabungan.`,
      ];
    }),
    pattern("kredit-op", ["a"], "13", "", "UU PPh, Pasal 28–29", pph, (i) => {
      const due = m(i * 2 + 24);
      return [
        `PPh tarif umum orang pribadi ${rp(due)}. Kredit PPh 21 Rp8 juta dan PPh 23 Rp3 juta. Ada PPh final Rp2 juta. Berapa PPh 29?`,
        due - m(11),
        [due - m(13), due - m(8), due - m(3)],
        `Kurangi kredit nonfinal Rp11 juta. PPh final tidak menjadi kredit PPh tarif umum.`,
      ];
    }),
  ],
  "pph-potong-pungut": [
    pattern("ter-bonus", both, "7", "7", "PMK 168/2023", pmk168, (i) => {
      const gross = m(i + 8);
      const bonus = m(4);
      return [
        `Pada masa biasa, bruto gaji ${rp(gross)} dan bonus Rp4 juta. Gunakan TER 6% yang diberikan untuk bruto gabungan. Berapa potongan PPh 21 masa itu?`,
        tax(gross + bonus, 6),
        [tax(gross, 6), tax(bonus, 6), tax(gross + bonus, 5)],
        `Gabungkan gaji dan bonus menjadi ${rp(gross + bonus)}, lalu kalikan 6% sesuai asumsi soal.`,
      ];
    }),
    pattern("masa-terakhir", both, "7", "7", "PMK 168/2023", pmk168, (i) => {
      const annual = m(i + 16);
      const prior = m(i / 2 + 8);
      return [
        `PPh 21 setahun ${rp(annual)} dan telah dipotong ${rp(prior)} sebelum masa pajak terakhir. Berapa potongan masa terakhir?`,
        annual - prior,
        [annual, prior + annual, Math.round(annual / 12)],
        `Kurangi PPh 21 tahunan dengan jumlah yang telah dipotong pada masa sebelumnya.`,
      ];
    }),
    pattern(
      "sewa-campur",
      both,
      "15",
      "17 dan 18",
      "UU PPh Pasal 23 dan PP 34/2017",
      "https://jdih.kemenkeu.go.id/dok/pp-34-tahun-2017",
      (i) => {
        const building = m(i * 2 + 20);
        const equipment = m(i + 8);
        return [
          `WP badan memotong pajak atas sewa gudang ${rp(building)} dan sewa mesin terpisah ${rp(equipment)}. Gunakan 10% final untuk gudang dan 2% PPh 23 untuk mesin. Berapa total potongan?`,
          tax(building, 10) + tax(equipment, 2),
          [tax(building + equipment, 2), tax(building + equipment, 10), tax(building, 10)],
          `Hitung masing-masing dasar sesuai tarifnya. Jangan terapkan satu tarif pada kedua kontrak.`,
        ];
      },
    ),
    pattern(
      "impor",
      b,
      "",
      "12–14",
      "PMK 51/2025",
      "https://jdih.kemenkeu.go.id/dok/pmk-51-tahun-2025/overview",
      (i) => {
        const cif = m(i * 10 + 100);
        return [
          `Importir dengan API memasukkan barang kategori umum. CIF ${rp(cif)}, bea masuk Rp20 juta, dan pungutan kepabeanan lain yang masuk nilai impor Rp4 juta. Gunakan tarif PPh 22 sebesar 2,5%. Berapa pungutannya?`,
          tax(cif + m(24), 2.5),
          [tax(cif, 2.5), tax(cif + m(20), 2.5), tax(cif + m(24), 7.5)],
          `Nilai impor = CIF + Rp20 juta + Rp4 juta. Terapkan tarif 2,5% pada nilai impor.`,
        ];
      },
    ),
  ],
  ppn: [
    pattern("nonmewah", both, "4", "4", "PMK 131/2024", ppn, (i) => {
      const price = m(i * 12);
      return [
        `BKP nonmewah pada skema umum dijual ${rp(price)} sebelum pajak. DPP nilai lain 11/12 harga jual dan tarif 12%. Berapa PPN?`,
        tax((price * 11) / 12, 12),
        [tax(price, 12), tax(price, 10), tax((price * 11) / 12, 11)],
        `DPP = ${rp((price * 11) / 12)}. Terapkan tarif 12% pada DPP, setara 11% dari harga jual.`,
      ];
    }),
    pattern("uang-muka", both, "5", "5", "UU PPN, Pasal 13 dan PMK 131/2024", ppn, (i) => {
      const price = m(i * 4 + 80);
      return [
        `Harga barang nonmewah ${rp(price)} sebelum pajak. Uang muka Rp30 juta sudah difakturkan bulan lalu. Berapa PPN atas sisa harga saat barang diserahkan, dengan beban efektif 11%?`,
        tax(price - m(30), 11),
        [tax(price, 11), tax(m(30), 11), tax(price - m(30), 12)],
        `Faktur atas uang muka sudah terbit. Terapkan 11% hanya pada sisa harga ${rp(price - m(30))}.`,
      ];
    }),
    pattern("kompensasi-ppn", both, "8", "8 dan 9", "UU PPN, Pasal 9", hpp, (i) => {
      const output = m(i + 21);
      return [
        `Pajak Keluaran ${rp(output)}, Pajak Masukan yang memenuhi syarat Rp14 juta, dan kompensasi dari masa lalu Rp3 juta. Berapa PPN kurang bayar?`,
        output - m(17),
        [output - m(14), output - m(11), output - m(3)],
        `Kurangi Pajak Keluaran dengan Pajak Masukan yang dapat dikreditkan dan kompensasi yang tersedia.`,
      ];
    }),
    pattern("retur-ppn", b, "", "5", "UU PPN, Pasal 5A dan PMK 131/2024", ppn, (i) => {
      const returns = m(i + 13);
      return [
        `Pajak Keluaran sebelum retur Rp30 juta. Barang nonmewah ${rp(returns)} sebelum pajak dikembalikan dengan nota retur sah pada masa yang sama. Efektif 11%. Berapa Pajak Keluaran setelah retur?`,
        m(30) - tax(returns, 11),
        [m(30), m(30) + tax(returns, 11), m(30) - tax(returns, 12)],
        `Kurangi Pajak Keluaran dengan PPN barang yang dikembalikan, yakni 11% dari nilai retur.`,
      ];
    }),
  ],
  "pbb-p5l": [
    pattern("areal-produktif", b, "", "2", "PP 25/2002 dan asumsi penilaian soal", pbb, (i) => {
      const land = i * 10_000 * 20_000;
      return [
        `Areal kebun produktif ${i} ha mempunyai NJOP tanah Rp20.000/m², investasi tanaman Rp800 juta, dan NJOP bangunan Rp500 juta. Berapa total NJOP kasus ini?`,
        land + m(1300),
        [land + m(800), land + m(500), land],
        `Konversi hektare ke meter persegi, kalikan harga tanah, lalu tambahkan nilai tanaman dan bangunan.`,
      ];
    }),
    pattern("njkp", b, "", "2", "UU PBB dan PP 25/2002", pbb, (i) => {
      const njop = m(i * 300 + 12);
      return [
        `NJOP perkebunan ${rp(njop)} dan NJOPTKP Rp12 juta. Jika persentase NJKP 40%, berapa nilai NJKP?`,
        tax(njop - m(12), 40),
        [tax(njop, 40), tax(njop - m(12), 20), njop - m(12)],
        `Kurangi NJOP dengan NJOPTKP dahulu. Kalikan hasil pengurangan dengan 40%.`,
      ];
    }),
    pattern("pbb-dua-objek", b, "", "2", "UU PBB dan PP 25/2002", pbb, (i) => {
      const total = m(i * 500 + 1500 + 12);
      return [
        `Total NJOP dua objek perkebunan WP ${rp(total)}. NJOPTKP Rp12 juta diterapkan hanya sekali. Dengan NJKP 40% dan tarif PBB 0,5%, berapa pokok PBB keduanya?`,
        tax(total - m(12), 0.2),
        [tax(total, 0.2), tax(total - m(24), 0.2), tax(total - m(12), 0.5)],
        `Gunakan tarif efektif 40% × 0,5% atas NJOP gabungan setelah satu kali pengurangan Rp12 juta.`,
      ];
    }),
    pattern("sisa-pbb", b, "", "2", "UU PBB dan PP 25/2002", pbb, (i) => {
      const njkp = m(i * 200 + 800);
      return [
        `NJKP objek PBB sudah dihitung ${rp(njkp)}. Tarif 0,5% dan pembayaran yang sudah diperhitungkan Rp1 juta. Berapa pokok yang masih harus dilunasi? Abaikan sanksi.`,
        tax(njkp, 0.5) - m(1),
        [tax(njkp, 0.5), tax(njkp, 0.5) + m(1), tax(njkp, 0.2)],
        `Kalikan tarif 0,5% dengan NJKP yang sudah diberikan. Kurangi pembayaran Rp1 juta.`,
      ];
    }),
  ],
  "akuntansi-perpajakan": [
    pattern("kas-jasa", b, "", "1", "PSAK 212 dan UU PPh Pasal 23", ia, (i) => {
      const gross = m(i * 4 + 25);
      return [
        `Jasa manajemen ditagih ${rp(gross)} sebelum PPN dan dipotong PPh 23 sebesar 2%. Abaikan PPN. Berapa debit kas saat penyedia menerima pembayaran?`,
        gross - tax(gross, 2),
        [gross, tax(gross, 2), gross - tax(gross, 15)],
        `Debit kas sebesar bruto dikurangi potongan. Potongan nonfinal dicatat sebagai pajak dibayar di muka.`,
      ];
    }),
    pattern("sewa-dimuka", b, "", "2", "SAK Indonesia, alokasi manfaat kasus", ia, (i) => {
      const amount = m(i * 8 + 40);
      return [
        `Pada awal tahun dibayar sewa dua tahun ${rp(amount)} dengan manfaat merata. Berapa saldo aset sewa dibayar di muka setelah 6 bulan?`,
        tax(amount, 75),
        [tax(amount, 25), tax(amount, 50), amount],
        `Dari 24 bulan manfaat, 6 sudah menjadi beban dan 18 masih tersisa. Saldo aset adalah 18/24 dari pembayaran.`,
      ];
    }),
    pattern("tangguhan", b, "", "5", "PSAK 212", ia, (i) => {
      const carrying = m(i * 7 + 100);
      return [
        `Nilai tercatat aset ${rp(carrying)} dan dasar pajak Rp85 juta. Jika tarif saat pembalikan 22% dan tidak ada pengecualian pengakuan, berapa liabilitas pajak tangguhan?`,
        tax(carrying - m(85), 22),
        [tax(carrying, 22), carrying - m(85), tax(m(85), 22)],
        `Nilai tercatat aset melebihi dasar pajak. Kalikan beda temporer kena pajak dengan 22%.`,
      ];
    }),
    pattern("rekonsiliasi", b, "", "5", "PSAK 212 dan UU PPh", ia, (i) => {
      const profit = m(i * 7 + 100);
      return [
        `Laba komersial ${rp(profit)} memuat bunga deposito final Rp12 juta dan biaya pribadi Rp8 juta. Penyusutan fiskal melebihi komersial Rp5 juta. Berapa laba fiskal sebelum kompensasi rugi?`,
        profit - m(9),
        [profit + m(9), profit - m(4), profit + m(1)],
        `Keluarkan penghasilan final, tambahkan biaya pribadi, lalu kurangi selisih penyusutan fiskal. Koreksi bersih minus Rp9 juta.`,
      ];
    }),
  ],
  "pph-badan": [
    pattern("fasilitas-31e", b, "", "12", "UU PPh, Pasal 31E dan Pasal 17", pph, (i) => {
      const pkp = m(i * 20 + 200);
      return [
        `Badan memenuhi Pasal 31E, omzet Rp12 miliar, PKP ${rp(pkp)}. Bagian fasilitas 11%, sisanya 22%. Berapa PPh terutang sebelum kredit?`,
        tax(tax(pkp, 40), 11) + tax(tax(pkp, 60), 22),
        [tax(pkp, 22), tax(pkp, 11), tax(tax(pkp, 40), 11)],
        `Rasio fasilitas = 4,8/12 = 40%. Kenakan 11% pada 40% PKP dan 22% pada 60% sisanya.`,
      ];
    }),
    pattern(
      "penyusutan-awal",
      b,
      "",
      "10",
      "PMK 72/2023",
      "https://jdih.kemenkeu.go.id/dok/pmk-72-tahun-2023/summary",
      (i) => {
        const cost = m(i * 8 + 120);
        return [
          `Mesin kelompok 1 ${rp(cost)} diperoleh dan langsung digunakan bulan Juli. Dengan garis lurus 25% setahun dan tanpa penundaan, berapa penyusutan fiskal Juli–Desember?`,
          tax(cost, 12.5),
          [tax(cost, 25), tax(cost, 6.25), tax(cost, 50)],
          `Penyusutan setahun = 25% harga perolehan. Tahun pertama memakai 6/12 dari angka itu.`,
        ];
      },
    ),
    pattern("angsuran-25", b, "", "15", "UU PPh, Pasal 25", pph, (i) => {
      const due = m(i * 12 + 120);
      return [
        `PPh tahun lalu atas penghasilan teratur ${rp(due)}. Kredit yang boleh dikurangkan untuk dasar angsuran Rp48 juta. Dengan 12 bulan, berapa angsuran PPh 25 per bulan?`,
        (due - m(48)) / 12,
        [due / 12, (due + m(48)) / 12, (due - m(48)) / 6],
        `Kurangi kredit yang diperhitungkan, lalu bagi dasar angsuran dengan 12.`,
      ];
    }),
    pattern("sisa-29-badan", b, "", "14", "UU PPh, Pasal 28–29", pph, (i) => {
      const pkp = m(i * 10 + 400);
      const due = tax(pkp, 22);
      return [
        `Badan bertarif umum 22% tanpa fasilitas mempunyai PKP ${rp(pkp)}, kredit PPh 22 dan 23 Rp20 juta, serta angsuran PPh 25 Rp30 juta. Berapa PPh 29?`,
        due - m(50),
        [due, due - m(20), due - m(30)],
        `PPh terutang = 22% × PKP. Kurangi kredit dan angsuran yang dapat diperhitungkan sebesar Rp50 juta.`,
      ];
    }),
  ],
} satisfies Record<UkpTopic, Pattern[]>;

export function getCalculationQuestions(level: UkpLevel, topic: UkpTopic): Question[] {
  return patterns[topic]
    .filter((item) => item.levels.includes(level))
    .flatMap((item) =>
      Array.from({ length: 32 }, (_, index): Question => {
        const [prompt, amount, wrong, working] = item.solve(index + 1);
        const options = [...new Set([amount, ...wrong].map((value) => rp(Math.round(value))))];
        for (let offset = 1; options.length < 4; offset++) {
          const value = rp(amount + offset * Math.max(1000, Math.round(amount * 0.04)));
          if (!options.includes(value)) options.push(value);
        }
        return {
          id: `calc-${item.id}-${index + 1}`,
          family: item.id,
          prompt,
          options: [options[0]!, options[1]!, options[2]!, options[3]!],
          answer: 0,
          explanation: `${working} Hasilnya ${rp(amount)}.`,
          bookletItem: item.items[level]!,
          bookletPage: getBookletItems(level, topic).find(
            ([number]) => number === item.items[level],
          )![2],
          legalSource: { label: item.rule, href: item.href },
        };
      }),
    );
}
