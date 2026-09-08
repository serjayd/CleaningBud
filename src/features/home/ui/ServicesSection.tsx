import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { SERVICES_DATA } from "@/constants/services.data";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="py-16">
      <Container>
        <div>
          <SectionHeader
            title="We keep your home and windows spotless"
            subtitle="Our Services"
            description="Professional cleaning tailored to your home and schedule."
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {SERVICES_DATA.slice(0, 4).map((service) => (
            <div
              key={service.label}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.label}
                  width={400}
                  height={280}
                  className="h-64 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {service.label}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                <div className="mt-2 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-xs text-muted-foreground">From</span>
                    <p className="text-xl font-bold text-primary">
                      {service.price}
                    </p>
                  </div>

                  <Button className="bg-secondary-foreground" asChild>
                    <Link href="/quote">Book</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button
            variant="outline"
            size="lg"
            className="border border-primary text-primary hover:text-primary"
            asChild
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
