import { Button } from "@/components/ui/button";
import Link from "next/link";

const SERVICE_AREAS = [
  {
    name: "Erith",
    postcode: "DA8",
    clients: 87,
    description:
      "Full cleaning and window services across Erith and Northumberland Heath.",
  },
  {
    name: "Bexley",
    postcode: "DA5",
    clients: 64,
    description:
      "Regular and deep cleaning across Bexley village and surrounding streets.",
  },
  {
    name: "Bexleyheath",
    postcode: "DA6–7",
    clients: 112,
    description:
      "Our most popular service area. Weekly and fortnightly cleans available.",
  },
  {
    name: "Dartford",
    postcode: "DA1–4",
    clients: 53,
    description:
      "Covering central Dartford, Stone and Wilmington residential areas.",
  },
  {
    name: "Sidcup",
    postcode: "DA14–15",
    clients: 79,
    description:
      "End of tenancy and regular cleans across Sidcup and Foots Cray.",
  },
  {
    name: "Welling",
    postcode: "DA16",
    clients: 58,
    description: "Window cleaning and domestic services throughout Welling.",
  },
  {
    name: "Bromley",
    postcode: "BR1–2",
    clients: 41,
    description:
      "Covering Bromley town, Shortlands and Bickley residential areas.",
  },
  {
    name: "Eltham",
    postcode: "SE9",
    clients: 35,
    description:
      "Growing service area. Booking available for all service types.",
  },
  {
    name: "Swanley",
    postcode: "BR8",
    clients: 28,
    description: "Domestic cleaning and end of tenancy available in Swanley.",
  },
];

export default function AreaServices() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICE_AREAS.map((area) => (
        <div
          key={area.name}
          className="bg-white rounded-2xl p-6 border border-[#D1DAEA] shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-semibold text-[#0D3B66] text-lg">
                {area.name}
              </h3>

              <span className="text-sm text-[#8A9BC0]">{area.postcode}</span>
            </div>

            <div className="text-right">
              <p className="text-2xl font-bold text-[#3B82F6]">
                {area.clients}
              </p>

              <p className="text-xs text-[#8A9BC0]">happy clients</p>
            </div>
          </div>

          <p className="text-sm text-[#6B7CA3] leading-relaxed mb-4">
            {area.description}
          </p>

          <Button type="button" variant="link" className="px-0" asChild>
            <Link href="/quote">Book in {area.name} →</Link>
          </Button>
        </div>
      ))}
    </div>
  );
}
