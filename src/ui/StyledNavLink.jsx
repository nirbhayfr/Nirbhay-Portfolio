import { NavLink } from "react-router-dom";

function StyledNavLink({ to, children }) {
  return (
    <NavLink
      className="hover:border-b-secondary border-b-2 border-transparent p-2 uppercase hover:border-b-2"
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default StyledNavLink;
