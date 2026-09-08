import Banner from "@/components/shared/Banner";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { SERVICES_DATA } from "@/constants/services.data";
import ServiceCard from "@/features/services/ui/ServiceCard";

export default function ServicesPage() {
  return (
    <Container>
      <SectionHeader
        title="Our cleaning services"
        subtitle="What we offer"
        description="Professional cleaning tailored to your home and schedule. Every service is fully insured and backed by our satisfaction guarantee."
      />
      <div className="flex flex-col gap-8">
        {SERVICES_DATA.map((service, index) => (
          <ServiceCard key={service.label} service={service} index={index} />
        ))}
      </div>
      <Banner
        title="Not sure which service you need?"
        description="Get a personalised quote in 2 minutes — we'll recommend the right option for your home."
      />
    </Container>
  );
}
