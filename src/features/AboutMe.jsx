import { useState } from "react";
import HeadingSecondary from "../ui/HeadingSecondary";
import ParagraphWide from "../ui/ParagraphWide";
import Button from "../ui/Button";

function AboutMe() {
  const [show, setShow] = useState(false);
  return (
    <div className="max-xxs:w-full mx-auto w-4/5 space-y-12 px-4">
      <HeadingSecondary>About me, I'm Nirbhay.</HeadingSecondary>
      <div className="space-y-4">
        <ParagraphWide>
          A 20 year old India-based software developer. I first started learning
          coding using C++, but soon realized I preferred web development, and
          I've been building and working on that for the past 1.5 years.
        </ParagraphWide>
        {show && (
          <>
            <ParagraphWide>
              Being self taught made me appreciate education; thus, I'm studying
              about Frontend technologies and will be moving towards backend as
              well.
            </ParagraphWide>
            <ParagraphWide>
              Aside from working hard, I tend to enjoy simple things like
              reading, hitting the gym, long walks and other things we humans
              do. If any of what I said seems interesting, then please do not
              hesitate to send me a message.
            </ParagraphWide>
          </>
        )}
        <ParagraphWide>
          <Button onClick={() => setShow((show) => !show)} type="small">
            {show ? "Show Less" : "Show More"}
          </Button>
        </ParagraphWide>
      </div>
    </div>
  );
}

export default AboutMe;
