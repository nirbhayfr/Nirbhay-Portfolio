function Button({ children, type = "default", onClick }) {
  const basic = "text-secondary p-3 cursor-pointer rounded-sm";
  const modern =
    " border-3 [border-image:linear-gradient(to_top_right,var(--color-secondary)_0%,var(--color-primary)_50%,var(--color-primary)_100%)_0_0_1_1] hover:bg-secondary hover:[border-image:none] transition-all duration-300 hover:text-black hover:[border-image:linear-gradient(to_top_right,#fbbf24_100%)_1] hover:border-secondary";

  const small = " text-xs";
  let styles;
  if (type === "modern") {
    styles = basic + modern;
  } else if (type === "small") {
    styles = basic + small + modern;
  } else {
    styles = basic + " hover:bg-secondary/15";
  }
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
