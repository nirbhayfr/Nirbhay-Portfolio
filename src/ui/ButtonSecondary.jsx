function ButtonSecondary({
  children,
  theme = "primary",
  onClick,
  type,
  disabled,
}) {
  let styles =
    theme === "primary"
      ? "border-primary text-primary border-2 px-6 py-1 text-lg"
      : "border-secondary text-secondary border-2 px-16 py-2 text-lg";
  const notDisabled = " cursor-pointer";
  const disabledStyles = " opacity-25 cursor-not-allowed";
  disabled
    ? (styles = styles + disabledStyles)
    : (styles = styles + notDisabled);
  return (
    <button
      className={styles}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default ButtonSecondary;
