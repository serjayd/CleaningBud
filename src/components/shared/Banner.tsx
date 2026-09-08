import QuoteButton from "@/features/quote/ui/QuoteButton";

interface Props {
  title: string;
  description: string;
}

export default function Banner({ title, description }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-linear-to-r from-[#0D3B66] to-[#1e5fa0] rounded-3xl p-12 text-center relative overflow-hidden">
        <h2 className="font-bold text-4xl text-white mb-4">{title}</h2>
        <p className="text-blue-200 mb-8 text-lg">{description}</p>
        <QuoteButton />
      </div>
    </section>
  );
}
