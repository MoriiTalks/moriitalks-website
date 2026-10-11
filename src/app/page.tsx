import Image from 'next/image';

import { ActionLink } from '@/components/action-link';
import { practiceSteps, questions } from '@/lib/site';

export default function HomePage() {
  return (
    <main id="main-content">
      <section
        className="shell grid items-center gap-8 pt-8 pb-14 md:min-h-155 md:grid-cols-2 md:py-16"
        aria-labelledby="hero-title"
      >
        <div>
          <p className="mb-6 eyebrow">Teman latihan berbicara</p>
          <h1
            id="hero-title"
            className="text-[clamp(3.25rem,7vw,5.5rem)] leading-[1.03] font-bold tracking-[-0.055em]"
          >
            Latihan
            <br />
            <span className="text-teal">presentasi.</span>
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">
            Belajar menyampaikan ide, memberi alasan, dan menjawab pertanyaan lewat praktik
            berbicara.
          </p>
          <div className="mt-8">
            <ActionLink href="#latihan">Kenali cara berlatih</ActionLink>
          </div>
          <p className="mt-6 text-xs text-muted">Bahasa Indonesia dan Inggris</p>
        </div>
        <div className="relative mx-auto grid w-full max-w-125 place-items-center pt-9">
          <div
            className="absolute inset-x-3 top-10 bottom-8 -rotate-6 rounded-[45%] bg-mint"
            aria-hidden="true"
          />
          <p className="absolute top-0 left-0 z-10 -rotate-6 rounded-2xl rounded-br-sm border border-line bg-white px-5 py-3 text-sm font-semibold">
            Hai, aku Morii!
          </p>
          <Image
            className="relative w-full"
            src="/images/morii-wave.png"
            alt="Morii, berang-berang toska yang melambaikan tangan"
            width={1280}
            height={1280}
            sizes="(max-width: 768px) 90vw, 500px"
            preload
          />
          <p className="relative mt-2 text-center text-xs text-muted">
            Mulai dari satu kalimat. Ulangi jika perlu.
          </p>
        </div>
      </section>

      <div className="bg-peach px-5 py-6 text-center text-base md:text-lg">
        Pelajari contoh, lalu <strong className="font-semibold">praktikkan dengan suara.</strong>
      </div>

      <section
        className="shell grid items-center gap-10 py-16 md:grid-cols-2 md:gap-20 md:py-24"
        id="morii"
        aria-labelledby="meet-title"
      >
        <div className="mx-auto w-full max-w-90 rounded-t-full rounded-b-3xl bg-sage px-5 py-8">
          <Image
            className="w-full"
            src="/images/morii-listen.png"
            alt="Morii duduk dengan ekspresi hangat, siap mendengarkan"
            width={1280}
            height={1280}
            sizes="(max-width: 768px) 80vw, 360px"
          />
        </div>
        <div>
          <p className="mb-5 eyebrow">Kenali Morii</p>
          <h2 id="meet-title" className="section-title">
            Belajar menjelaskan.
            <br />
            Berlatih presentasi.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Menjelaskan aturan permainan, menyampaikan pendapat, atau memperkenalkan topik tugas
            sekolah. Latihan menggunakan situasi yang dikenal anak.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Mulai dari menjelaskan ide, menyusun penjelasan, menyesuaikan penjelasan untuk
            pendengar, hingga presentasi singkat.
          </p>
          <p className="mt-6 inline-block rounded-full border border-line px-4 py-2 text-xs text-teal">
            Sedang dikembangkan
          </p>
        </div>
      </section>

      <section className="shell py-16 md:py-24" id="latihan" aria-labelledby="practice-title">
        <div className="border-t border-line pt-12">
          <p className="mb-5 eyebrow">Latihan bertahap</p>
          <h2 id="practice-title" className="section-title">
            4 tahap.
            <br />
            16 pelajaran.
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            {practiceSteps.map((step) => (
              <li key={step.number} className="border-t border-line pt-6">
                <span
                  className="mb-5 inline-grid size-14 place-items-center rounded-2xl bg-mint text-lg font-bold text-teal"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <h3 className="text-xl font-bold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 rounded-3xl bg-mint p-6 md:p-9">
            <p className="eyebrow">Contoh latihan pertama</p>
            <p className="mt-3 text-xl leading-relaxed tracking-tight md:text-2xl">
              “Saya akan menjelaskan <strong className="text-teal">cara merawat tanaman</strong> di
              kelas.”
            </p>
            <p className="mt-3 text-xs text-muted">
              Sebutkan topiknya agar pendengar tahu apa yang akan dijelaskan.
            </p>
          </div>
        </div>
      </section>

      <section className="shell" id="orang-tua" aria-labelledby="parent-title">
        <div className="grid gap-8 rounded-3xl bg-forest p-7 text-cream md:grid-cols-2 md:gap-12 md:p-12">
          <div>
            <p className="mb-5 eyebrow text-mint">Untuk orang tua dan pendamping</p>
            <h2 id="parent-title" className="section-title">
              Dampingi latihan.
              <br />
              Coba bersama.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-mint">
              Morii adalah teman latihan. Orang tua dan guru tetap membantu anak menggunakan
              keterampilannya saat presentasi dan percakapan sehari-hari.
            </p>
          </div>
          <div className="self-center border-t border-mint/30 pt-7 md:border-t-0 md:border-l md:pt-0 md:pl-10">
            <h3 className="text-2xl font-bold tracking-tight">Catatan latihan, bukan nilai.</h3>
            <p className="mt-4 text-base leading-relaxed text-mint">
              Catatan mingguan menunjukkan hari latihan. Untuk melihat kemampuan anak, dengarkan
              penjelasannya dan ajak mencoba topik lain.
            </p>
            <p className="mt-5 text-xs leading-relaxed text-mint">
              Latihan mandiri tersedia secara offline dalam versi pengembangan. Percakapan suara AI
              belum tersedia untuk umum.
            </p>
          </div>
        </div>
      </section>

      <section
        className="shell grid gap-8 py-16 md:grid-cols-[1fr_1.6fr] md:gap-16 md:py-24"
        id="pertanyaan"
        aria-labelledby="faq-title"
      >
        <div>
          <p className="mb-5 eyebrow">Sebelum mulai</p>
          <h2 id="faq-title" className="section-title">
            Masih penasaran?
          </h2>
        </div>
        <div>
          {questions.map((item) => (
            <details key={item.question} className="group border-b border-line">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold">
                {item.question}
                <span
                  className="text-2xl font-normal text-teal group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 text-sm leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="shell" aria-labelledby="closing-title">
        <div className="rounded-3xl bg-mint px-6 py-14 text-center">
          <p className="mb-5 eyebrow">MoriiTalks untuk Android dan iOS</p>
          <h2 id="closing-title" className="section-title">
            Kenali latihan
            <br />
            bersama Morii.
          </h2>
          <div className="mt-8">
            <ActionLink href="/download">Lihat status aplikasi</ActionLink>
          </div>
          <p className="mt-5 text-xs text-muted">Direncanakan untuk Android dan iOS.</p>
        </div>
      </section>
    </main>
  );
}
