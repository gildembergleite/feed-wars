import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg"

export default function Header() {
  return (
    <header className="w-full bg-zinc-800">
      <div className="flex w-full justify-center items-center py-5">
        <Link className="flex items-center gap-3 text-zinc-50" href="/">
          <Image width={56} height={56} src={logo} alt="" />
          <h1 className="font-bold text-2xl">Feed Wars</h1>
        </Link>
      </div>
    </header>
  );
}