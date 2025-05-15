import Logo from "../ui/Logo";
import NavBar from "../ui/NavBar";

function Header() {
  return (
    <header className="text-font-primary bg-primary max-xxs:grid max-xxs:grid-rows-2 max-xxs:gap-y-4 max-xxs:py-0 flex items-center justify-between border-b-2 border-black/80 px-28 py-3 max-md:px-10 max-sm:px-4">
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;
