import { NavLink } from "react-router-dom";
import StyledAnchor from "../ui/StyledAnchor";

function Footer() {
  return (
    <footer className="border-primary-light space-y-12 border-t-2 p-12">
      <div className="border-primary-light max-xxs:grid-cols-1 max-xxs:grid-rows-3 grid grid-cols-[2fr_1fr_2fr] gap-x-12 border-b-2 py-4 max-sm:grid-cols-2 max-sm:grid-rows-2 max-sm:gap-y-16">
        <div className="space-y-4">
          <h3 className="text-secondary">About the Website</h3>
          <p className="text-justify text-sm">
            This website has been created using React js, tailwind, react
            router, react query. Other external libraries are react hot toast
            and react hook form. Supabase has been used as a backend provider.
            Feel free to use the template but make sure to give credits
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-secondary">Links</h3>
          <span className="grid grid-rows-3 gap-y-3 text-sm">
            <NavLink
              to="/home"
              className="hover:text-secondary hover:underline"
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-secondary hover:underline"
            >
              Contact
            </NavLink>
            <NavLink
              to="/projects"
              className="hover:text-secondary hover:underline"
            >
              Projects
            </NavLink>
          </span>
        </div>

        <div className="space-y-4">
          <h3 className="text-secondary">Contact Info</h3>
          <div className="max-xxs:gap-y-4 grid grid-rows-3 gap-y-4 text-sm max-sm:gap-y-0">
            <StyledAnchor href="https://github.com/nirbhayfr">
              Github
            </StyledAnchor>
            <StyledAnchor href="https://www.linkedin.com/in/nirbhay-chauhan-499743285/">
              LinkedIn
            </StyledAnchor>
            <p>Mail: nirbhaychauhan0306@gmail.com</p>
          </div>
        </div>
      </div>

      <p className="text-center text-sm">
        Copyright &copy;{" "}
        <span className="text-secondary">github/nirbhayfr</span> 2025
      </p>
    </footer>
  );
}

export default Footer;
