function ParagraphWide({ children }) {
  return (
    <p className="max-xxs:text-base mx-auto w-2/3 text-justify text-lg font-light max-md:w-full">
      {children}
    </p>
  );
}

export default ParagraphWide;
