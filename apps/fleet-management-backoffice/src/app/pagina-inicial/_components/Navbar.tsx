import Link from "next/link";
import Image from "next/image";

export default function navbarLandingPage() {
  return (
    <div className="py-5 px-8 flex justify-between w-full">
      <Image
        src="/landingPage/logoNavbar.svg"
        width={227}
        height={50}
        alt="Picture of the author"
      />
      <div className="flex items-center space-x-6">
        <Link className="text-main underline" href={"/entrar"}>
          Entrar em contato conosco
        </Link>
        <Link className="bg-main rounded-2xl px-12 py-3" href={"/entrar"}>
          Entrar
        </Link>
      </div>
    </div>
  );
}
