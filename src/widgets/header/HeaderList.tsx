import { HEADER_LINKS } from "@/constants/header.data";
import HeaderItem from "./HeaderItem";

export default function HeaderList() {
  return (
    <ul className="flex items-center gap-1">
      {HEADER_LINKS.map((item) => (
        <li key={item.href}>
          <HeaderItem item={item} />
        </li>
      ))}
    </ul>
  );
}
