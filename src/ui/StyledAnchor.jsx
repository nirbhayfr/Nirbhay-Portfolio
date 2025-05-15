function StyledAnchor({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="hover:text-secondary cursor-pointer hover:underline"
    >
      {children}
    </a>
  );
}

export default StyledAnchor;
