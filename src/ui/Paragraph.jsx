function Paragraph({ children }) {
  return (
    <p className="mx-auto w-1/3 text-center text-lg font-light max-lg:w-2/3 max-sm:text-sm">
      {children}
    </p>
  );
}

export default Paragraph;
