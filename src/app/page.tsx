import Image from 'next/image';

import { ActionLink } from '@/components/action-link';
import { practiceSteps, questions } from '@/lib/site';

export default function HomePage() {
  return (
    <main id="main-content">
      <section
        className="shell grid items-center gap-8 pt-8 pb-14 md:min-h-[620px] md:grid-cols-2 md:py-16"
        aria-labelledby="hero-title"
      >
        <div>
          <p className="mb-6 eyebrow">Teman latihan bercerita</p>
          <h1
            id="hero-title"
            className="text-[clamp(3.25rem,7vw,5.5rem)] leading-[1.03] font-bold tracking-[-0.055em]"
          >
            Suara kecil.
            <br />
            <span className="text-teal">Cerita besar.</span>
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">
            Ada banyak cerita di kepalamu. Yuk, belajar membagikannya bersama Morii.
          </p>
          <div className="mt-8">
            <ActionLink href="#latihan">Kenali cara berlatih</ActionLink>
          </div>
          <p className="mt-6 text-xs text-muted">Bahasa Indonesia & English</p>
        </div>
        <div className="relative mx-auto grid w-full max-w-[500px] place-items-center pt-9">
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
            Satu cerita dulu. Pelan-pelan juga boleh.
          </p>
        </div>
      </section>

      <div className="bg-peach px-5 py-6 text-center text-base md:text-lg">
        Berani bicara dimulai dari <strong className="font-semibold">ruang untuk mencoba.</strong>
      </div>

      <section
        className="shell grid items-center gap-10 py-16 md:grid-cols-2 md:gap-20 md:py-24"
        id="morii"
        aria-labelledby="meet-title"
      >
        <div className="mx-auto w-full max-w-[360px] rounded-t-full rounded-b-3xl bg-sage px-5 py-8">
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
          <p className="mb-5 eyebrow">Kenali teman barumu</p>
          <h2 id="meet-title" className="section-title">
            Cerita sehari-hari.
            <br />
            Latihan yang berarti.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Hobi, ide untuk tugas sekolah, atau hal menarik hari ini. Latihan dimulai dari hal yang
            dekat dengan dunia anak.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            MoriiTalks mengembangkan latihan bertahap dan percakapan dengan Morii AI, dengan satu
            tujuan dan satu saran yang mudah dicoba.
          </p>
          <p className="mt-6 inline-block rounded-full border border-line px-4 py-2 text-xs text-teal">
            Sedang dikembangkan
          </p>
        </div>
      </section>

      <section className="shell py-16 md:py-24" id="latihan" aria-labelledby="practice-title">
        <div className="border-t border-line pt-12">
          <p className="mb-5 eyebrow">Langkah kecil, cerita demi cerita</p>
          <h2 id="practice-title" className="section-title">
            Mulai dari satu ide.
            <br />
            Tambahkan satu alasan.
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
              “Aku suka menggambar <strong className="text-teal">karena</strong> bisa membuat tokoh
              dari imajinasiku.”
            </p>
            <p className="mt-3 text-xs text-muted">Satu topik. Satu alasan. Ceritamu sendiri.</p>
          </div>
        </div>
      </section>

      <section className="shell" id="orang-tua" aria-labelledby="parent-title">
        <div className="grid gap-8 rounded-3xl bg-forest p-7 text-cream md:grid-cols-2 md:gap-12 md:p-12">
          <div>
            <p className="mb-5 eyebrow text-mint">Untuk orang tua & pendamping</p>
            <h2 id="parent-title" className="section-title">
              Temani prosesnya.
              <br />
              Rayakan usahanya.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-mint">
              Morii adalah teman latihan. Orang tua, guru, dan teman membantu anak memakai
              keterampilannya dalam percakapan sehari-hari.
            </p>
          </div>
          <div className="self-center border-t border-mint/30 pt-7 md:border-t-0 md:border-l md:pt-0 md:pl-10">
            <h3 className="text-2xl font-bold tracking-tight">Ada ruang untuk jeda.</h3>
            <p className="mt-4 text-base leading-relaxed text-mint">
              Latihan yang fokus, panduan sederhana, dan kesempatan untuk berhenti lalu mencoba
              lagi.
            </p>
            <p className="mt-5 text-xs leading-relaxed text-mint">
              Versi awal berisi latihan mandiri dan demo tertulis. Fitur suara AI belum aktif.
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
          <p className="mb-5 eyebrow">Untuk cerita yang belum terucap</p>
          <h2 id="closing-title" className="section-title">
            Sampai jumpa
            <br />
            di cerita pertamamu.
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
