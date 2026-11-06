import { createFileRoute, Link } from "@tanstack/react-router";
import { ukpHead, ukpLevels, ukpTopics } from "@/lib/ukp";
import { getBookletItems } from "@/lib/ukp-curriculum";

export const Route = createFileRoute("/ukp/rujukan")({
  head: () =>
    ukpHead("Rujukan latihan UKP", "Sumber kisi-kisi, pola latihan, dan aturan yang dipakai."),
  component: UkpReferences,
});

const research = [
  [
    "Info Peserta UKP 2026 · BPPK",
    "https://klc.kemenkeu.go.id/sertifikasi/t/bppk-ukp/info",
    "Pintu masuk resmi ke cakupan materi dan panduan peserta 2026.",
  ],
  [
    "Pengumuman USKP Periode II 2025 · BPPK",
    "https://bppk.kemenkeu.go.id/res/filestream/files/portal-bppk-media/content/announcement/document/Penetapan_Peserta_USKP_Periode_II_Tahun_2025_Tingkat_A_dan_wKPtOy2.pdf",
    "Pembanding cakupan A dan B ketika ujian masih dipisah per mata ujian.",
  ],
  [
    "Arsip latihan USKP A · Januari 2011",
    "https://pdfcoffee.com/latihan-soal-uskp-a-januari-pdf-free.html",
    "Contoh pola kronologi pembayaran, saat faktur, dan pembatalan transaksi PPN.",
  ],
  [
    "Arsip latihan USKP B · Januari 2011",
    "https://pdfcoffee.com/soal-uskp-b-januari-2011-pdf-free.html",
    "Contoh pola kasus penghitungan dan klasifikasi beberapa transaksi.",
  ],
  [
    "Arsip akuntansi USKP B · Juni 2013",
    "https://id.scribd.com/doc/243165311/1-SOAL-USKP-B-JUN-13-AKT-PJK-docx",
    "Contoh pola memilih jurnal, rekonsiliasi fiskal, dan perlakuan pajak atas transaksi.",
  ],
  [
    "Tryout UKP 2026 · Ortax",
    "https://www.ortax.org/ortax-gelar-tryout-ukp-gratis-4304-peserta-ikut-simulasi-ukp",
    "Rujukan bentuk latihan pilihan ganda dari penyelenggara tryout.",
  ],
  [
    "Contoh UKP 2026 · AlatPajak",
    "https://ukp.alatpajak.id/soal-ukp",
    "Pembanding pola pilihan prosedur dan hitungan bertahap per tingkat.",
  ],
] as const;

const additionalPractice = [
  [
    "Dummy UKP 2026 · BPPK",
    "https://klc.kemenkeu.go.id/sertifikasi/kegiatan-publik/37828769-5add-4520-9d91-704833aabeda",
    "Informasi simulasi CAT resmi untuk kesiapan perangkat, jaringan, dan lingkungan ujian.",
  ],
  [
    "Program Persiapan UKP · Ortax",
    "https://ortax.org/program-persiapan-ukp",
    "Informasi tryout dan sesi pembahasan untuk Tingkat A, B, dan C.",
  ],
  [
    "Buku panduan Coretax · DJP",
    "https://pajak.go.id/coretaxpedia/buku-panduan-coretax-djp",
    "Rujukan alur registrasi PKP, objek PBB-P5L, penetapan pemungut Bea Meterai, bukti potong, dan SPT.",
  ],
  [
    "Praktik Faktur Pajak dan SPT Masa PPN · DJP",
    "https://pajak.go.id/reformdjp/coretax-spt/",
    "Contoh alur administrasi faktur dan pelaporan masa melalui Coretax.",
  ],
  [
    "Pelaporan SPT Tahunan PPh Orang Pribadi · DJP",
    "https://www.pajak.go.id/coretaxpedia/lapor-spt-tahunan-orang-pribadi",
    "Panduan mengisi SPT, memeriksa status kurang bayar, dan menyampaikan SPT.",
  ],
  [
    "Pelaporan SPT Tahunan PPh Badan · DJP",
    "https://www.pajak.go.id/coretaxpedia/lapor-spt-tahunan-badan",
    "Panduan alur pengisian formulir induk dan lampiran SPT Badan.",
  ],
  [
    "Kalkulator PPh 21 · DJP",
    "https://kalkulator.pajak.go.id/",
    "Alat pembanding hitungan pemotongan untuk berlatih memilih jenis penghasilan dan status PTKP.",
  ],
  [
    "Buku Cermat Pemotongan PPh 21/26 · DJP",
    "https://pajak.go.id/sinopsis-ringkas-dan-unduh-buku-cermat-pemotongan-pph-pasal-2126",
    "Bacaan untuk membandingkan metode penghitungan PPh 21/26 dan contoh penerapannya.",
  ],
] as const;

const rules = [
  [
    "PMK 55/2026",
    "https://jdih.kemenkeu.go.id/dok/pmk-55-tahun-2026/files",
    "Kerangka Uji Kompetensi Perpajakan dan ketentuan profesi kuasa wajib pajak.",
  ],
  [
    "PMK 81/2024 dan riwayat perubahan",
    "https://jdih.kemenkeu.go.id/dok/pmk-81-tahun-2024/summary",
    "Titik awal untuk menelusuri ketentuan administrasi Coretax dan perubahan peraturan menurut masa pajak.",
  ],
  [
    "UU HPP",
    "https://peraturan.bpk.go.id/Details/185162/uu-no-7-tahun-2021-",
    "Lapisan PPh orang pribadi, tarif badan, dan sanksi KUP.",
  ],
  [
    "UU 10/2020 dan PMK 78/2024",
    "https://jdih.kemenkeu.go.id/dok/pmk-78-tahun-2024/summary",
    "Bea Meterai per dokumen dan kewajiban pemungut.",
  ],
  [
    "PMK 71/2026",
    "https://jdih.kemenkeu.go.id/dok/pmk-71-tahun-2026/files",
    "Perubahan atas PMK 118/2024 tentang pembetulan dan sengketa administratif.",
  ],
  [
    "PMK 164/2023",
    "https://jdih.kemenkeu.go.id/dok/pmk-164-tahun-2023",
    "Pelaporan usaha untuk pengukuhan PKP.",
  ],
  [
    "PP 20/2026",
    "https://jdih.kemenkeu.go.id/dok/pp-20-tahun-2026/summary",
    "Skema PPh final peredaran bruto tertentu.",
  ],
  [
    "PMK 168/2023",
    "https://jdih.kemenkeu.go.id/dok/pmk-168-tahun-2023/summary",
    "PPh 21 pada masa biasa dan masa pajak terakhir.",
  ],
  [
    "PMK 51/2025",
    "https://jdih.kemenkeu.go.id/dok/pmk-51-tahun-2025/overview",
    "Pemungutan PPh 22, termasuk impor dalam latihan Tingkat B.",
  ],
  [
    "PMK 112/2025",
    "https://jdih.kemenkeu.go.id/dok/pmk-112-tahun-2025/summary",
    "Penerapan P3B dan Formulir DGT.",
  ],
  [
    "PMK 131/2024",
    "https://jdih.kemenkeu.go.id/dok/pmk-131-tahun-2024/summary",
    "PPN dan DPP nilai lain untuk skema yang dicontohkan.",
  ],
  [
    "PP 25/2002",
    "https://www.pajak.go.id/en/node/57613",
    "Persentase NJKP yang digunakan dalam contoh PBB perkebunan.",
  ],
  [
    "PMK 72/2023",
    "https://jdih.kemenkeu.go.id/dok/pmk-72-tahun-2023/summary",
    "Penyusutan harta berwujud dan amortisasi.",
  ],
  [
    "PSAK 212 · IAI",
    "https://web.iaiglobal.or.id/SAK-IAI/PSAK%20Umum",
    "Penomoran standar pajak penghasilan untuk materi akuntansi.",
  ],
] as const;

function UkpReferences() {
  return (
    <div className="flex max-w-3xl flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Rujukan latihan UKP</h1>
        <p className="mt-3 max-w-[66ch] leading-relaxed text-muted-foreground">
          Soal kasus ditulis ulang dengan data baru. Arsip USKP dan tryout publik dipakai untuk
          melihat pola soal, sementara cakupan dan pembahasan mengikuti booklet Tingkat A dan B
          serta rujukan aturan yang relevan. BPPK menyatakan soal asli UKP bersifat rahasia dan
          tidak dibagikan kepada peserta.
        </p>
        <a
          className="mt-2 inline-block text-sm text-primary underline underline-offset-4"
          href="https://bppk.kemenkeu.go.id/faq/"
        >
          FAQ resmi BPPK
        </a>
      </header>
      <section className="rounded-xl border bg-card p-5 leading-relaxed">
        <h2 className="font-semibold">Yang berubah dari latihan lama</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>
            Untuk PPh 21 pegawai tetap, bedakan TER pada masa biasa dan hitungan tahunan pada masa
            terakhir.
          </li>
          <li>
            Untuk PPN, kasus faktur dan uang muka memakai tarif serta dasar pengenaan yang sesuai
            dengan jenis barang.
          </li>
          <li>
            Untuk KUP, pembetulan, keberatan, gugatan, dan banding dipisahkan berdasarkan dokumen
            dan tujuan tindakan.
          </li>
          <li>
            Untuk Tingkat B, latihan PBB-P5L mengikuti booklet sebagai materi tambahan. Ringkasan
            kisi-kisi publik mencatat bahwa baris PBB-P5L pada dokumen Oktober memuat rincian PPh
            Badan.
          </li>
        </ul>
        <a
          className="mt-3 inline-block text-sm text-primary underline underline-offset-4"
          href="https://ukp.alatpajak.id/kisi-kisi-ukp"
        >
          Ringkasan cakupan dan catatan Tingkat B
        </a>
      </section>
      <section id="peta-booklet" className="rounded-xl border bg-card p-5">
        <h2 className="text-lg font-semibold">Peta butir booklet</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Nomor mengikuti booklet 17 Oktober 2026, termasuk butir yang ditulis dalam satu judul
          gabungan. Halaman menunjukkan awal bahasan. Dasar hukum di sini dicatat sebagaimana
          dirujuk booklet. Latihan yang tersedia dikelompokkan per topik dan cakupan soal per butir
          masih perlu dipetakan.
        </p>
        {(["a", "b"] as const).map((level) => (
          <section key={level} className="mt-5">
            <h3 className="mb-2 font-semibold">Tingkat {level.toUpperCase()}</h3>
            <div className="divide-y rounded-lg border px-3">
              {ukpLevels[level].map((topic) => (
                <details key={topic} className="py-3">
                  <summary className="cursor-pointer text-sm font-medium">
                    {ukpTopics[topic].title}
                  </summary>
                  <ul className="mt-3 space-y-3 text-sm leading-relaxed">
                    {getBookletItems(level, topic).map(([number, title, page, law]) => (
                      <li key={number}>
                        <p className="font-medium">
                          Butir {number} · {title}
                        </p>
                        <p className="mt-1 text-muted-foreground">
                          Hlm. {page} · {law}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/ukp/$level/$topic/materi"
                    params={{ level, topic }}
                    className="mt-3 inline-block text-sm text-primary underline underline-offset-4"
                  >
                    Buka rangkuman {ukpTopics[topic].title}
                  </Link>
                </details>
              ))}
            </div>
          </section>
        ))}
      </section>
      {(
        [
          ["Cakupan dan pola soal", research],
          ["Panduan dan praktik tambahan", additionalPractice],
          ["Rujukan aturan dan standar", rules],
        ] as const
      ).map(([title, items]) => (
        <section key={title} className="rounded-xl border bg-card p-5">
          <h2 className="text-lg font-semibold">{title}</h2>
          <ul className="mt-2 divide-y">
            {items.map(([label, href, detail]) => (
              <li key={label} className="py-3 text-sm leading-relaxed">
                <a href={href} className="font-medium text-primary underline underline-offset-4">
                  {label}
                </a>
                <p className="mt-1 text-muted-foreground">{detail}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
