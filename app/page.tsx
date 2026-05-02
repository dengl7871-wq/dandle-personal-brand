import {
  site,
  type BentoCard,
  type ContentBlock,
  type ProofPoint
} from "@/data/site";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5"
      fill="none"
    >
      <path
        d="M4 12L12 4M6 4h6v6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BrandMark() {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-white/18 bg-white/[0.08] shadow-soft backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.42),transparent_34%),linear-gradient(135deg,rgba(114,153,255,0.45),rgba(255,255,255,0.04)_52%,rgba(95,242,195,0.24))]" />
      <span className="relative text-sm font-semibold tracking-[0.02em] text-white">
        D
      </span>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/34">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

function ProofPointView({ item }: { item: ProofPoint }) {
  return (
    <div className="rounded-[22px] border border-white/[0.1] bg-white/[0.045] px-5 py-4 backdrop-blur-xl">
      <p className="text-lg font-semibold tracking-[-0.02em] text-white">
        {item.value}
      </p>
      <p className="mt-1 text-xs leading-5 text-white/46">{item.label}</p>
    </div>
  );
}

function BentoCardView({ card }: { card: BentoCard }) {
  const spanClass =
    card.variant === "wide"
      ? "md:col-span-2"
      : card.variant === "tall"
        ? "md:row-span-2"
        : "";

  return (
    <article
      className={`${spanClass} group relative min-h-[220px] overflow-hidden rounded-[28px] border border-white/[0.12] bg-white/[0.055] p-6 shadow-soft backdrop-blur-2xl transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.075]`}
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-70" />
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl transition duration-300 group-hover:bg-cyan-200/16" />
      <div className="relative flex h-full flex-col justify-between gap-10">
        <div>
          {card.meta ? (
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/38">
              {card.meta}
            </p>
          ) : null}
          <h2 className="text-[1.55rem] font-semibold leading-tight tracking-[-0.025em] text-white">
            {card.title}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-white/58 md:text-[15px]">
          {card.description}
        </p>
      </div>
    </article>
  );
}

function ContentCard({ item }: { item: ContentBlock }) {
  return (
    <article className="relative min-h-[220px] overflow-hidden rounded-[28px] border border-white/[0.12] bg-white/[0.055] p-6 shadow-soft backdrop-blur-2xl">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-white">
        {item.title}
      </h3>
      <p className="mt-6 text-sm leading-7 text-white/58">{item.description}</p>
      {item.tags ? (
        <div className="mt-7 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] font-medium text-white/48"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}

function ValueCard({ item }: { item: ContentBlock }) {
  return (
    <article className="rounded-[26px] border border-white/[0.1] bg-white/[0.045] p-6 backdrop-blur-2xl">
      <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white">
        {item.title}
      </h3>
      <p className="mt-5 text-sm leading-7 text-white/56">{item.description}</p>
    </article>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060a] text-white">
      <div className="pointer-events-none absolute left-1/2 top-[-24rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-16rem] top-[18rem] h-[34rem] w-[34rem] rounded-full bg-emerald-300/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-18rem] left-[-12rem] h-[32rem] w-[32rem] rounded-full bg-violet-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.07]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(5,6,10,0.22)_58%,rgba(5,6,10,0.88)_100%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3" aria-label={site.name}>
            <BrandMark />
            <div className="leading-tight">
              <p className="text-sm font-medium text-white">{site.name}</p>
              <p className="text-xs text-white/42">{site.legalName}</p>
            </div>
          </a>
          <a
            href={site.secondaryAction.href}
            className="rounded-full border border-white/14 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white/82 backdrop-blur-xl transition hover:border-white/28 hover:bg-white/[0.09] hover:text-white"
          >
            {site.secondaryAction.label}
          </a>
        </header>

        <section className="grid flex-1 items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:py-10">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-white/38">
              {site.role}
            </p>
            <div className="mb-7 flex flex-wrap gap-2.5">
              {site.signal.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-white/62 backdrop-blur-xl"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mb-4 text-base font-medium text-white/68">
              {site.legalName} / {site.location}
            </p>
            <h1 className="max-w-5xl text-[clamp(3rem,12vw,5rem)] font-semibold leading-[1.14] tracking-[-0.025em] text-white sm:text-[clamp(4.6rem,8.7vw,6.5rem)] sm:leading-[1.08] lg:text-[clamp(4.9rem,6vw,6.7rem)] lg:leading-[1.04]">
              {site.headline.split("\n").map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-7 max-w-3xl text-[17px] leading-8 text-white/62 sm:mt-8 sm:text-xl sm:leading-9">
              {site.intro}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.primaryAction.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/88"
              >
                {site.primaryAction.label}
                <ArrowIcon />
              </a>
              <a
                href={site.secondaryAction.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.045] px-5 py-3 text-sm font-semibold text-white/82 backdrop-blur-xl transition hover:border-white/28 hover:bg-white/[0.08] hover:text-white"
              >
                {site.secondaryAction.label}
                <ArrowIcon />
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {site.proof.map((item) => (
                <ProofPointView key={item.value} item={item} />
              ))}
            </div>
          </div>

          <aside className="relative mx-auto w-full max-w-[520px] lg:mr-0">
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-white/14 via-blue-400/10 to-emerald-300/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[34px] border border-white/[0.14] bg-white/[0.065] p-3 shadow-soft backdrop-blur-2xl sm:p-5">
              <div className="aspect-[4/5] overflow-hidden rounded-[26px] border border-white/[0.1] bg-[#080a10] p-5 sm:p-6">
                <div className="pointer-events-none absolute inset-5 rounded-[26px] bg-[radial-gradient(circle_at_42%_28%,rgba(95,242,195,0.18),transparent_30%),radial-gradient(circle_at_70%_65%,rgba(114,153,255,0.18),transparent_34%)]" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between text-xs text-white/42">
                    <span>PERSONAL SIGNAL</span>
                    <span>2026</span>
                  </div>
                  <div className="space-y-6">
                    <div className="relative mx-auto aspect-[3/4] w-[72%] max-w-[280px] overflow-hidden rounded-[28px] border border-white/[0.12] bg-white/[0.05] shadow-[0_28px_90px_rgba(0,0,0,0.38)]">
                      <img
                        src={site.portrait}
                        alt={`${site.legalName} portrait`}
                        className="h-full w-full object-cover contrast-[1.04] saturate-[1.08]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_0%,transparent_48%,rgba(5,6,10,0.52)_100%)]" />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                    </div>
                    <div>
                      <p className="text-2xl font-semibold tracking-[-0.03em]">
                        {site.name}
                      </p>
                      <p className="mt-2 max-w-xs text-sm leading-6 text-white/52">
                        {site.role}
                      </p>
                      <p className="mt-1 max-w-xs text-sm leading-6 text-white/46">
                        {site.secondaryRole}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-white/48">
                    {site.signal.map((item) => (
                      <span
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.045] px-2 py-3"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="pb-8 pt-2">
          <SectionTitle eyebrow="About" title="一句话背景" />
          <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
            <article className="relative overflow-hidden rounded-[30px] border border-white/[0.12] bg-white/[0.055] p-6 shadow-soft backdrop-blur-2xl sm:p-8">
              <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-blue-300/10 blur-3xl" />
              <p className="relative max-w-3xl text-xl font-medium leading-9 tracking-[-0.025em] text-white/84 sm:text-2xl sm:leading-10">
                {site.about}
              </p>
              <div className="relative mt-8 flex flex-wrap gap-2.5">
                {site.aboutTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/12 bg-black/20 px-3.5 py-2 text-xs font-medium text-white/58"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
            <article className="rounded-[30px] border border-white/[0.12] bg-white/[0.055] p-6 shadow-soft backdrop-blur-2xl sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/34">
                For
              </p>
              <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
                {site.audience}
              </p>
              <p className="mt-5 text-sm leading-7 text-white/54">
                面向双语理科教师、AI+教育专项人才与 STEM 课程研发岗位，突出可讲、可研、可沟通、可落地的综合能力。
              </p>
            </article>
          </div>
        </section>

        <section className="pb-10 pt-2">
          <SectionTitle eyebrow="Teaching Philosophy" title="教学理念" />
          <div className="grid gap-4 md:grid-cols-3">
            {site.teachingPhilosophy.map((item) => (
              <ContentCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section className="pb-10 pt-2">
          <SectionTitle eyebrow="Signature Lessons" title="代表性课堂主题" />
          <div className="grid gap-4 md:grid-cols-3">
            {site.signatureLessons.map((item) => (
              <ContentCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section className="pb-10 pt-2">
          <SectionTitle eyebrow="Why Schools" title="学校为什么需要我" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.schoolValue.map((item) => (
              <ValueCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section className="pb-10 pt-2">
          <SectionTitle eyebrow="Focus" title="内容方向" />
          <div className="grid auto-rows-fr gap-4 md:grid-cols-3">
            {site.bento.map((card) => (
              <BentoCardView key={card.title} card={card} />
            ))}
          </div>
        </section>

        <section
          id="follow"
          className="mb-5 mt-2 grid gap-4 lg:grid-cols-[1fr_0.86fr]"
        >
          <div className="rounded-[30px] border border-white/[0.12] bg-white/[0.055] p-3 backdrop-blur-2xl sm:p-4">
            <SectionTitle eyebrow="Follow" title="关注入口" />
            <div className="grid gap-3 md:grid-cols-3">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group flex min-h-24 items-center justify-between rounded-[22px] border border-white/[0.08] bg-black/20 px-5 py-4 transition hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <span>
                    <span className="block text-sm font-medium text-white">
                      {social.label}
                    </span>
                    <span className="mt-1 block text-sm text-white/42">
                      {social.handle}
                    </span>
                  </span>
                  <span className="text-white/42 transition group-hover:text-white">
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-[30px] border border-white/[0.12] bg-white/[0.055] p-6 backdrop-blur-2xl sm:p-8">
            <SectionTitle eyebrow="Contact" title="合作 / 招聘联系" />
            <p className="max-w-md text-sm leading-7 text-white/58">
              面向学校招聘、双语理科教学、AI+课程共创与 STEM 课程研发合作。希望把 AI 编程带进中学理科课堂，欢迎联系。
            </p>
            <a
              href={site.secondaryAction.href}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/88 sm:w-auto"
            >
              {site.socials.find((item) => item.label === "Email")?.handle}
              <ArrowIcon />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
