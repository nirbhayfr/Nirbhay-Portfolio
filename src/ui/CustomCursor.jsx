import { useRef } from "react";

function CustomCursor() {
  //   const dot = useRef();
  const dotOutline = useRef();
  console.log(dotOutline);
  window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    dotOutline.current.style.left = `${posX}px`;
    dotOutline.current.style.top = `${posY}px`;

    dotOutline.current.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 2000, fill: "forwards" },
    );
  });

  return (
    <div
      className="border-secondary pointer-events-none fixed top-0 left-0 z-100 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
      ref={dotOutline}
    ></div>
  );
}

export default CustomCursor;
