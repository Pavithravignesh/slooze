import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between">
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link className="text-primary font-semibold text-2xl" href={"/"}>
            Slooze
          </Link>
          <Link href={"/home"}>Home</Link>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
        <nav className="flex items-center gap-3 text-gray-500">
          <Link
            href={"/login"}
            // className="bg-primary rounded-full text-white px-4 py-2"
          >
            Login
          </Link>
          <Link
            href={"/register"}
            className="bg-primary rounded-full text-white px-4 py-2"
          >
            Register
          </Link>
        </nav>
      </header>
    </>
  );
}
