import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="text-4xl font-bold text-fuchsia-400">
        ChopChop Reservations
      </h1>
      <p>Manage your reservations with ease!</p>
      <div className="flex justify-center items-center gap-5">
        <Link href="/register" className="bg-fuchsia-400 p-2 rounded-md">
          Register
        </Link>
        <Link href="/login" className="bg-fuchsia-400 p-2 rounded-md">
          Login
        </Link>
      </div>
    </div>
  );
}
