import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="border-b border-primary-900 px-4 max-[375px]:px-3 py-4 sm:px-6 sm:py-5 lg:px-8">
      <div className="flex flex-col gap-4 min-[430px]:flex-row min-[430px]:justify-between min-[430px]:items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
