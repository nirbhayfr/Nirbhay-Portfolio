function Tool({ title, children }) {
  return (
    <div className="space-y-4">
      <div className="mx-auto size-20">{children}</div>
      <h3 className="text-center">{title}</h3>
    </div>
  );
}

export default Tool;
