import IntroText from "../ui/IntroText";
import Picture from "../ui/Picture";

function Introduction() {
  return (
    <div className="mx-auto grid w-4/5 grid-cols-[3fr_2fr] max-xl:grid-cols-none max-xl:grid-rows-2 max-xl:gap-20">
      <IntroText />
      <Picture />
    </div>
  );
}

export default Introduction;
