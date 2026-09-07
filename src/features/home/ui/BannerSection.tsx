import QuoteButton from "@/features/quote/ui/QuoteButton";

export default function BannerSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-linear-to-r from-[#0D3B66] to-[#1e5fa0] rounded-3xl p-12 text-center relative overflow-hidden">
        <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm mb-3">
          Ready to get started?
        </span>
        <h2 className="font-bold text-4xl text-white mb-4">
          Cleaner homes. Brighter days.
        </h2>
        <p className="text-blue-200 mb-8 text-lg">
          Get an instant quote in under 2 minutes. No obligation.
        </p>
        <QuoteButton />
        <p className="text-blue-300 text-xs mt-4">Your cleaning buddy.</p>
      </div>
    </section>
  );
}
