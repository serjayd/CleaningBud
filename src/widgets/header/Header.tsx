import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import HeaderList from "./HeaderList";
import QuoteButton from "@/features/quote/ui/QuoteButton";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return (
    <header className="border-b border-border">
      <Container>
        <div className="flex items-center gap-4 justify-between h-16">
          <Logo />
          <nav className="hidden md:block">
            <HeaderList />
          </nav>
          <div className="hidden md:block">
            <QuoteButton />
          </div>
          <HeaderMobile />
        </div>
      </Container>
    </header>
  );
}
