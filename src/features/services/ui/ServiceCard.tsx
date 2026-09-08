import { Button } from "@/components/ui/button";
import { CircleCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  service: {
    image: string;
    label: string;
    description: string;
    price: string;
    features: string[];
  };
  index: number;
}

export default function ServiceCard({ service, index }: Props) {
  const imageLeft = index % 2 === 0;

  return (
    <section className="group grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      {/* Image */}
      <div className={`relative ${imageLeft ? "lg:order-1" : "lg:order-2"}`}>
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={service.image}
            alt={service.label}
            width={1600}
            height={1200}
            priority={index === 0}
            className="h-90 w-full object-cover sm:h-105 lg:h-125"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

          {/* Service number */}
          <div className="absolute left-5 top-5 flex size-11 items-center justify-center rounded-full bg-white/95 text-sm font-semibold shadow-lg backdrop-blur">
            0{index + 1}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${imageLeft ? "lg:order-2" : "lg:order-1"}`}>
        <div>
          <span className="mb-3 block text-sm font-medium uppercase tracking-widest text-primary">
            Home Cleaning
          </span>

          <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {service.label}
          </h2>

          <p className="mb-8 text-base leading-7 text-muted-foreground sm:text-lg">
            {service.description}
          </p>

          {/* Features */}
          <ul className="mb-9 grid gap-3 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm text-foreground/90"
              >
                <CircleCheck className="size-5 shrink-0 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Bottom */}
          <div className="flex flex-wrap items-center justify-between gap-5 border-t pt-6">
            <div>
              <span className="text-sm text-muted-foreground">
                Starting from
              </span>

              <p className="text-2xl font-bold tracking-tight">
                {service.price}
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="group/button bg-secondary-foreground px-6"
            >
              <Link href="/quote">
                Book This Service
                <ArrowRight className="ml-2 size-4 transition-transform group-hover/button:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
