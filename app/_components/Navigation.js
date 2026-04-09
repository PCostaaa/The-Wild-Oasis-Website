import Link from "next/link";
import { auth } from "@/app/_lib/auth";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 w-full sm:w-auto text-base max-[375px]:text-sm min-[430px]:text-[17px] sm:text-lg lg:text-xl">
      <ul className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-end gap-x-6 max-[375px]:gap-x-4 gap-y-2 min-[430px]:gap-x-7 sm:gap-8 lg:gap-12 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-2 sm:gap-4 whitespace-nowrap"
            >
              <img
                className="h-6 max-[375px]:h-5 min-[430px]:h-7 sm:h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
