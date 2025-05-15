import { NavLink, useNavigate } from "react-router-dom";
import ButtonSecondary from "../ui/ButtonSecondary";

function FormShortcut() {
  const navigate = useNavigate();
  return (
    <div className="bg-secondary max-xs:px-4 max-xxs:py-8 w-full space-y-8 px-48 py-12 max-md:px-28 max-sm:px-20">
      <h1 className="text-primary text-center text-6xl font-semibold max-lg:text-3xl">
        What's holding you back? Send me a message
      </h1>
      <div className="flex justify-center align-bottom">
        <ButtonSecondary onClick={() => navigate("/contact")}>
          <NavLink to="/contact">Contact</NavLink>
        </ButtonSecondary>
      </div>
    </div>
  );
}

export default FormShortcut;
