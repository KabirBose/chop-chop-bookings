import Link from "next/link";
import { barItems } from "@/lib/barItems";

const Navbar = () => {
  return (
    <nav className="justify-center items-center gap-5 bg-black text-white p-4 hidden md:flex">
      {barItems.map((item) => (
        <Link href={item.address} key={Math.random()}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
