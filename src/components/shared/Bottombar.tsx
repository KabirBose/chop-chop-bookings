import Link from "next/link";

const Bottombar = () => {
  return (
    <nav className="justify-center items-center gap-5 bg-slate-800 text-white p-4 flex md:hidden">
      <Link href={"/"}>Chop Chop</Link>
      <Link href={"/"}>Bookings</Link>
      <Link href={"/"}>Inventory</Link>
      <Link href={"/"}>Tickets</Link>
      <Link href={"/"}>Finances</Link>
    </nav>
  );
};

export default Bottombar;
