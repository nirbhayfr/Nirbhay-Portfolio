import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import StyledNavLink from "./StyledNavLink";
import { useEffect, useState } from "react";

function NavBar() {
  const theme = localStorage.getItem("theme");
  const isDark = theme === "light" ? false : true;
  const [dark, setDark] = useState(isDark);
  useEffect(
    function () {
      if (dark) {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    },
    [dark],
  );
  return (
    <div className="flex items-center gap-4 p-2">
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/contact">Contact</StyledNavLink>
      <StyledNavLink to="/projects">Projects</StyledNavLink>
      <button
        onClick={() => setDark((dark) => !dark)}
        className="cursor-pointer"
      >
        {dark ? (
          <HiOutlineMoon className="size-5" />
        ) : (
          <HiOutlineSun className="size-5" />
        )}
      </button>
    </div>
  );
}

export default NavBar;
