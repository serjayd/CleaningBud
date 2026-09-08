import Banner from "@/components/shared/Banner";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Check, Heart, Star } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Container>
      <SectionHeader
        title="About us"
        subtitle="A cleaner you can trust"
        description="A small, independent cleaning service built around reliability, attention to detail, and treating every home like it matters."
      />

      <div className="flex flex-col gap-16">
        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <section>
            <span className="mb-3 block text-sm font-semibold uppercase tracking-wide text-[#3B82F6]">
              Our story
            </span>

            <h2 className="mb-5 text-2xl font-bold text-[#0D3B66] md:text-3xl">
              A local cleaning service with a personal touch
            </h2>

            <div className="space-y-4 text-[#6B7CA3] leading-relaxed">
              <p>
                I started this cleaning service with a simple goal: to provide
                reliable, high-quality cleaning without the impersonal
                experience you can sometimes get from larger cleaning companies.
              </p>

              <p>
                Right now, it&apos;s just me. I personally handle the cleaning,
                communication, and every booking. That means you know exactly
                who is coming to your home and you can expect the same level of
                care every time.
              </p>

              <p>
                As a local independent cleaner, I&apos;m focused on building
                long-term relationships with customers and growing through
                recommendations and great results.
              </p>
            </div>
          </section>

          <section className="relative">
            <Image
              src="/hero-bg.jpg"
              alt="Professional home cleaning"
              width={1200}
              height={900}
              priority
              className="h-100 w-full rounded-3xl object-cover shadow-xl lg:h-130"
            />
          </section>
        </div>

        {/* Why choose us */}
        <section className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-[#D1DAEA] bg-white p-7 shadow-sm">
            <Check className="mb-4 size-5" />

            <h3 className="mb-2 text-lg font-semibold text-[#0D3B66]">
              One trusted cleaner
            </h3>

            <p className="text-sm leading-relaxed text-[#6B7CA3]">
              No rotating teams or unfamiliar faces. Your home is cleaned by the
              same person who takes your booking.
            </p>
          </div>

          <div className="rounded-2xl border border-[#D1DAEA] bg-white p-7 shadow-sm">
            <Star className="mb-4 size-5" />

            <h3 className="mb-2 text-lg font-semibold text-[#0D3B66]">
              Attention to detail
            </h3>

            <p className="text-sm leading-relaxed text-[#6B7CA3]">
              I take the time to do the job properly, focusing on the details
              that make a home feel genuinely clean and fresh.
            </p>
          </div>

          <div className="rounded-2xl border border-[#D1DAEA] bg-white p-7 shadow-sm">
            <Heart className="mb-4 size-5" />

            <h3 className="mb-2 text-lg font-semibold text-[#0D3B66]">
              Personal service
            </h3>

            <p className="text-sm leading-relaxed text-[#6B7CA3]">
              From your first message to the final clean, you&apos;re dealing
              directly with me. Simple, friendly, and straightforward.
            </p>
          </div>
        </section>

        {/* What matters */}
        <section className="rounded-3xl bg-[#0D3B66] p-8 md:p-12">
          <div className="max-w-3xl">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-wide text-[#93C5FD]">
              What matters to me
            </span>

            <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
              More than just cleaning
            </h2>

            <p className="text-base leading-relaxed text-white/75">
              When you invite someone into your home, trust matters. I aim to
              make the whole experience easy — from clear pricing and flexible
              scheduling to leaving your home looking and feeling its best.
              Every booking is an opportunity to earn your trust and hopefully
              become your regular cleaner.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Clear and honest pricing",
                "Flexible appointments",
                "Professional products",
                "Careful attention to your home",
                "Friendly, personal service",
                "Satisfaction-focused cleaning",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/85"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#93C5FD]">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Growing business */}
        <section className="rounded-3xl border border-[#D1DAEA] bg-[#F8FAFD] p-8 md:p-12">
          <div className="max-w-3xl">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-wide text-[#3B82F6]">
              Just getting started
            </span>

            <h2 className="mb-5 text-2xl font-bold text-[#0D3B66] md:text-3xl">
              Small business. Big standards.
            </h2>

            <p className="text-[#6B7CA3] leading-relaxed">
              I&apos;m at the beginning of building this business, which means
              every customer genuinely matters. I&apos;m not trying to be the
              biggest cleaning company — I&apos;m focused on becoming the
              cleaner people are happy to recommend to their friends, family,
              and neighbours.
            </p>
          </div>
        </section>
      </div>

      <Banner
        title="Ready to experience the CleaningBud difference?"
        description="Tell me what you need and get a personalised quote for your home."
      />
    </Container>
  );
}
