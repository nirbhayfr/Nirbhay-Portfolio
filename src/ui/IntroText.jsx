import { NavLink } from "react-router-dom";
import Button from "./Button";

function IntroText() {
  return (
    <div className="max-xxs:pr-0 space-y-10 pr-24">
      <h1 className="max-xs:text-5xl text-7xl font-semibold max-sm:text-6xl">
        The place where your business expands
      </h1>
      <p className="max-xs:text-base text-justify text-lg font-light text-white/80">
        Hey there! Call me Nirbhay Chauhan. I enjoy creating kickass websites
        and web apps, ones that suit your desires and needs using latest
        technologies and cleanest design patterns.
      </p>
      <div className="space-x-8">
        <Button type="modern">
          <NavLink to="/projects">View Projects</NavLink>
        </Button>
        <Button>
          <NavLink to="/contact">Contact for resume</NavLink>
        </Button>
      </div>
    </div>
  );
}

export default IntroText;
