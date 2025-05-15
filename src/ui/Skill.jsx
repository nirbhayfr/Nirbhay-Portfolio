function Skill({ children, heading, text }) {
  return (
    <div className="space-y-6 p-4">
      <div className="bg-secondary mx-auto flex h-18 w-18 items-center justify-center rounded-full">
        {children}
      </div>
      <h3 className="text-center text-3xl">{heading}</h3>
      <p className="text-justify text-sm font-light">{text}</p>
    </div>
  );
}

export default Skill;
