import Banner from "@/components/shared/Banner";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { PRICING_DATA } from "@/constants/pricing.data";
import { CalendarDays, CreditCard, Lock } from "lucide-react";

const PRICING_FEATURES_DATA = [
  {
    icon: Lock,
    label: "No contracts",
    description:
      "Book whenever you need us. No minimum commitment for one-off cleans.",
  },
  {
    icon: CreditCard,
    label: "Pay after cleaning",
    description:
      "We invoice after the job is done and you're happy with the result.",
  },
  {
    icon: CalendarDays,
    label: "Flexible scheduling",
    description:
      "Choose a cleaning time that works for you, with weekly, fortnightly, monthly, or one-off bookings.",
  },
];

export default function PricingPage() {
  return (
    <Container>
      <SectionHeader
        title="Simple, honest prices"
        subtitle="Transparent pricing"
        description="No hidden fees. No surprises. The price you see is the price you pay — unless you add extras."
      />

      <div className="space-y-16 mb-16">
        {/* Cleaning by property size */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold">
            Cleaning by property size
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-175 text-left">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-4 font-semibold">Property</th>
                  <th className="px-6 py-4 font-semibold text-primary">
                    Regular Clean
                  </th>
                  <th className="px-6 py-4 font-semibold">Deep Clean</th>
                  <th className="px-6 py-4 font-semibold">End of Tenancy</th>
                </tr>
              </thead>

              <tbody>
                {PRICING_DATA.propertySize.map((item) => (
                  <tr
                    key={item.property}
                    className="border-t border-border transition-colors hover:bg-muted/30"
                  >
                    <td className="px-6 py-5 font-medium">{item.property}</td>

                    <td className="px-6 py-5 text-primary font-semibold">
                      {item.regularClean}
                    </td>

                    <td className="px-6 py-5">{item.deepClean}</td>

                    <td className="px-6 py-5">{item.endOfTenancy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            * Final price depends on property condition and selected extras.
            Regular cleaning billed hourly; minimum 3 hours.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Window cleaning */}
          <section>
            <h2 className="mb-6 text-2xl font-semibold">Window cleaning</h2>

            <div className="overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Service</th>
                    <th className="px-6 py-4 text-right font-semibold">
                      Price
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {PRICING_DATA.windowCleaning.map((item) => (
                    <tr
                      key={item.service}
                      className="border-t border-border transition-colors hover:bg-muted/30"
                    >
                      <td className="px-6 py-5 font-medium">{item.service}</td>

                      <td className="px-6 py-5 text-right text-primary font-semibold">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Optional extras */}
          <section>
            <h2 className="mb-6 text-2xl font-semibold">Optional extras</h2>

            <div className="overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Extra</th>
                    <th className="px-6 py-4 text-right font-semibold">
                      Price
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {PRICING_DATA.optionalExtras.map((item) => (
                    <tr
                      key={item.service}
                      className="border-t border-border transition-colors hover:bg-muted/30"
                    >
                      <td className="px-6 py-5 font-medium">{item.service}</td>

                      <td className="px-6 py-5 text-right font-semibold">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
      <section className="grid md:grid-cols-3 gap-4 cursor-default">
        {PRICING_FEATURES_DATA.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon className="mb-2 text-primary" />
              <h2 className="font-semibold mb-2">{item.label}</h2>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          );
        })}
      </section>
      <Banner
        title="Get an exact quote for your home"
        description="Our 2-minute quote tool gives you a precise price for your property and chosen services."
      />
    </Container>
  );
}
