import Container from "@/components/shared/Container";
import { CalendarDays, ShieldHalf, Sprout, Star } from "lucide-react";

const FEATURES_DATA = [
  {
    icon: ShieldHalf,
    label: "Trusted & Insured",
    description: "Fully insured, DBS checked team",
  },
  {
    icon: Sprout,
    label: "Eco-Friendly Products",
    description: "Safe for kids & pets",
  },
  {
    icon: CalendarDays,
    label: "Flexible Scheduling",
    description: "Weekly, fortnightly or one-off",
  },
  {
    icon: Star,
    label: "Professional & Reliable",
    description: "Reviews in progress",
  },
] as const;

export default function FeaturesSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 cursor-default">
          {FEATURES_DATA.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className="mb-2 text-primary" />
                <h3 className="font-semibold mb-1">{item.label}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
