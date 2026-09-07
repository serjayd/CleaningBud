import Image from "next/image";
import logoImg from "../../../public/logo.jpg";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src={logoImg}
        alt="CleaningBud"
        width={180}
        height={60}
        className="h-10 w-auto object-contain rounded-lg"
      />
      <p className=" text-lg font-semibold text-foreground">
        Cleaning <span className="text-primary">Bud</span>
      </p>
    </Link>
  );
}
