import Banner from "@/components/shared/Banner";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import AreaMap from "@/features/areas/ui/AreaMapClient";
import AreaServices from "@/features/areas/ui/AreaServices";

export default function AreasPage() {
  return (
    <Container>
      <SectionHeader
        title="Areas we cover"
        subtitle="Service coverage"
        description="We provide professional cleaning services across South East London and North Kent."
      />
      <div className="space-y-16">
        <AreaMap />
        <AreaServices />
      </div>
      <Banner
        title="Don't see your area?"
        description="We're expanding regularly. Get in touch and we'll let you know if we can cover your postcode, or add you to our waiting list."
      />
    </Container>
  );
}
