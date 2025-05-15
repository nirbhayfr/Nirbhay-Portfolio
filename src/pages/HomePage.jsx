import AboutMe from "../features/AboutMe";
import FormShortcut from "../features/FormShortcut";
import Introduction from "../features/Introduction";
import Skills from "../features/Skills";
import Tools from "../features/Tools";

function HomePage() {
  return (
    <div className="max-xxs:space-y-36 max-w-full space-y-56 pb-10">
      <Introduction />
      <Skills />
      <Tools />
      <AboutMe />
      <FormShortcut />
    </div>
  );
}

export default HomePage;
