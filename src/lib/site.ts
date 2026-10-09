export const site = {
  name: 'MoriiTalks',
  title: 'MoriiTalks — Suara kecil, cerita besar',
  description:
    'Kenali Morii, teman latihan bercerita dan public speaking. MoriiTalks sedang dikembangkan untuk Android dan iOS, dalam Bahasa Indonesia dan Inggris.',
} as const;

export const practiceSteps = [
  {
    number: '01',
    title: 'Lihat satu contoh.',
    description:
      'Ide kecil terasa lebih mudah ketika ada contoh. Mulai dari sesuatu yang kamu suka.',
  },
  {
    number: '02',
    title: 'Ceritakan versimu.',
    description: 'Satu topik, satu alasan. Beri ruang untuk mencoba dengan kata-katamu sendiri.',
  },
  {
    number: '03',
    title: 'Coba sekali lagi.',
    description: 'Ambil satu saran yang bisa dilakukan, lalu bawa latihanmu ke cerita berikutnya.',
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
      'Fondasi aplikasi memuat Morii, satu latihan mandiri, demo obrolan tertulis, dan pilihan bahasa. Percakapan suara AI dan feedback otomatis belum aktif.',
  },
  {
    question: 'Apakah Morii menggantikan guru atau pendamping?',
    answer:
      'Morii dirancang sebagai teman latihan. Guru dan orang tua tetap berperan membantu anak memahami latihan dan mencoba keterampilannya di kehidupan sehari-hari.',
  },
  {
    question: 'Bahasa apa saja yang direncanakan?',
    answer:
      'Bahasa Indonesia dan Inggris. Fondasi aplikasi sudah menyediakan tampilan dan latihan contoh dalam kedua bahasa.',
  },
] as const;
