import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";
import { auth } from "@/app/_lib/auth";
import { redirect } from "next/navigation";

let hasRunStartupAuthCheck = false;

export default async function Page() {
  const session = await auth();

  if (!hasRunStartupAuthCheck) {
    hasRunStartupAuthCheck = true;
    if (session) redirect("/logout");
  }

  return (
    <main className="mt-16 max-[375px]:mt-12 min-[430px]:mt-20 sm:mt-24">
      <Image
        src={bg}
        alt="Mountains and forests with two cabins"
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
      />

      <div className="relative z-10 text-center px-4 max-[375px]:px-3">
        <h1 className="text-4xl max-[375px]:text-3xl min-[430px]:text-5xl sm:text-6xl lg:text-8xl text-primary-50 mb-8 sm:mb-10 tracking-tight font-normal leading-tight">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="inline-block max-[375px]:w-full max-[375px]:max-w-xs bg-accent-500 px-6 py-4 min-[430px]:px-8 min-[430px]:py-5 sm:px-8 sm:py-6 text-primary-800 text-base sm:text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
