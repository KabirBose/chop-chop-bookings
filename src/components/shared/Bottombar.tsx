import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { barItems } from "@/lib/barItems";

const Bottombar = () => {
  return (
    <nav className="justify-center items-center gap-5 bg-slate-800 text-white p-4 flex md:hidden">
      {barItems.map((item) => (
        <FontAwesomeIcon
          icon={item.icon}
          transform="shrink-10"
          key={Math.random()}
        />
      ))}
    </nav>
  );
};

export default Bottombar;
