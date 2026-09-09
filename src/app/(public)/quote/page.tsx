import Container from "@/components/shared/Container";
import QuoteForm from "@/features/quote/ui/QuoteForm";

export default function QuotePage() {
  return (
    <Container className="max-w-5xl mx-auto">
      <QuoteForm />
    </Container>
  );
}
