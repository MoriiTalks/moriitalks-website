export const site = {
  name: 'MoriiTalks',
  title: 'MoriiTalks — Latihan presentasi bersama Morii',
  description:
    'Latihan berbicara dan presentasi bersama Morii. MoriiTalks sedang dikembangkan untuk Android dan iOS, dalam bahasa Indonesia dan Inggris.',
} as const;

export const practiceSteps = [
  {
    number: '01',
    title: 'Pelajari contohnya.',
    description: 'Kenali tujuan latihan, lalu lihat contoh kalimat yang bisa digunakan.',
  },
  {
    number: '02',
    title: 'Praktikkan dengan suara.',
    description: 'Berlatih dalam dua situasi berbeda dengan kata-katamu sendiri.',
  },
  {
    number: '03',
    title: 'Periksa dan ulangi.',
    description: 'Periksa apakah tujuan latihan sudah tercapai. Gunakan petunjuk jika perlu.',
  },
] as const;

export const questions = [
  {
    question: 'Apakah aplikasinya sudah bisa diunduh?',
    answer:
      'Belum. MoriiTalks sedang dalam pengembangan awal. Tautan resmi App Store dan Google Play akan ditambahkan setelah tersedia.',
  },
  {
    question: 'Apa yang sudah ada di versi awal?',
    answer:
      'Versi pengembangan menyediakan 4 tahap dengan 16 pelajaran. Setiap pelajaran memiliki dua konteks praktik berbicara. Jalur latihan, catatan mingguan, dan jumlah hari latihan berturut-turut tersimpan di perangkat.',
  },
  {
    question: 'Apakah sudah bisa berbicara langsung dengan Morii?',
    answer:
      'Percakapan suara AI masih diuji secara privat dan belum tersedia untuk umum. Dalam latihan mandiri saat ini, suara belum direkam atau dinilai AI. Catatan penyelesaian menunjukkan latihan yang sudah dilakukan, bukan nilai kemampuan.',
  },
  {
    question: 'Bahasa apa saja yang tersedia?',
    answer:
      'Bahasa Indonesia dan Inggris tersedia dalam versi pengembangan. Penyelesaian pelajaran dicatat terpisah untuk setiap bahasa, sedangkan hari latihan dihitung bersama.',
  },
] as const;
