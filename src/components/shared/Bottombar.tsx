import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { barItems } from "@/lib/barItems";

const Bottombar = () => {
  return (
    <nav className="justify-center items-center gap-5 bg-black text-white flex md:hidden">
      {barItems.map((item) => (
        <div className="w-20" key={Math.random()}>
          <Link href={item.address}>
            <FontAwesomeIcon icon={item.icon} transform="shrink-12" />
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Bottombar;
