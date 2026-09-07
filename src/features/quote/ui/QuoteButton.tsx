import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  widthFull?: boolean;
}

export default function QuoteButton({ widthFull }: Props) {
  return (
    <Button size="lg" className={cn(widthFull && "w-full")} asChild>
      <Link href="/quote">Get a Quote</Link>
    </Button>
  );
}
