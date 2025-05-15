import HeadingSecondary from "../ui/HeadingSecondary";
import Paragraph from "../ui/Paragraph";
import Form from "./Form";

function FormContainer() {
  return (
    <div className="mx-auto w-4/5 space-y-12 max-sm:w-full">
      <HeadingSecondary>Let's achieve the impossible together</HeadingSecondary>
      <Paragraph>
        If you need help or have some questions, I'll be there ready and happy
        to help.
      </Paragraph>
      <Form />
    </div>
  );
}

export default FormContainer;
