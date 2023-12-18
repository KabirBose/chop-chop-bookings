import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="justify-center items-center gap-5 bg-slate-800 text-white p-4 hidden md:flex">
      <Link href={"/"}>Chop Chop</Link>
      <Link href={"/"}>Bookings</Link>
      <Link href={"/"}>Inventory</Link>
      <Link href={"/"}>Tickets</Link>
      <Link href={"/"}>Finances</Link>
    </nav>
  );
};

export default Navbar;
