import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import QuoteButton from "@/features/quote/ui/QuoteButton";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-linear-to-br from-[#E5EAF2] via-white to-[#EBF3FF]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <section>
            <h1 className="font-bold text-5xl xl:text-6xl leading-[1.1] text-[#0D3B66] mb-4">
              A cleaner home <br />
              <span className="text-primary">for a brighter you.</span>
            </h1>
            <p className="text-muted-foreground md:text-lg mb-8">
              Reliable, professional and affordable cleaning services for your
              home. We also offer expert window cleaning for a crystal clear
              finish.
            </p>
            <div className="flex items-center gap-2">
              <QuoteButton />
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <CircleCheck className="text-accent size-5" />
                Professional & Reliable
              </span>
              <span className="flex items-center gap-2">
                <CircleCheck className="text-accent size-5" />
                Eco-Friendly Products
              </span>
              <span className="flex items-center gap-2">
                <CircleCheck className="text-accent size-5" />
                Flexible Scheduling
              </span>
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
      </Container>
    </div>
  );
}
