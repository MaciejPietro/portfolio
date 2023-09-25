import { useEffect, useRef } from "react";

export default function CursorAnimation() {
  const cursor = useRef(null);
  useEffect(() => {
    let mouse = { x: 300, y: 300 };
    let pos = { x: 0, y: 0 };
    const speed = 0.1;

    const updatePosition = () => {
      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;
      cursor.current.style.transform =
        "translate3d(" + pos.x + "px ," + pos.y + "px, 0)";
    };

    const updateCoordinates = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", updateCoordinates);

    function loop() {
      updatePosition();
      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", updateCoordinates);
    };
  }, []);

  return (
    <div
      ref={cursor}
      id="cursor"
      className="z-90 fixed top-0 left-0 will-change-transform pointer-events-none"
    >
      <div className=" w-[5vw] h-[5vw] rounded-full transform -translate-x-1/2 -translate-y-1/2 border dark:border-white border-black opacity-25"></div>
    </div>
  );
}
