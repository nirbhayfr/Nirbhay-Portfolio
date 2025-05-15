import {
  HiAdjustmentsVertical,
  HiHandThumbUp,
  HiMiniComputerDesktop,
} from "react-icons/hi2";
import Skill from "../ui/Skill";
import HeadingSecondary from "../ui/HeadingSecondary";
import Paragraph from "../ui/Paragraph";

function Skills() {
  return (
    <div className="max-xxs:w-full mx-auto w-4/5 space-y-12">
      <HeadingSecondary>You're safe and in good hands.</HeadingSecondary>
      <Paragraph>
        Customer satisfaction comes first, and in order to do that I decided to
        pickup skills and principles to provide quality service.
      </Paragraph>

      <div className="grid w-full grid-cols-3 max-md:grid-cols-none max-md:grid-rows-3">
        <Skill
          heading="Continuous Support"
          text="I will advance your web-based software to keep it efficient, competitive on the market. Using a well-established DevOps processes, It helps me roll out urgent updates within few hours and release new, planned functional modules every other week."
        >
          <HiAdjustmentsVertical className="text-primary size-10" />
        </Skill>
        <Skill
          heading="Frontend Design/Dev"
          text="As a web expert I tend to closely analyze the user audience to understand their needs and reflect these findings in UI design. Having agreed on the look and feel of a web app with project stakeholders, I push to bring it to life with smart front-end technologies."
        >
          <HiMiniComputerDesktop className="text-primary size-10" />
        </Skill>
        <Skill
          heading="Built with confidence"
          text="Expert in building responsive, high-performance web applications using React. Proficient with functional components, React Hooks, and modern ES6+ features. Clean code, scalability, and performance optimization."
        >
          <HiHandThumbUp className="text-primary size-10" />
        </Skill>
      </div>
    </div>
  );
}

export default Skills;
