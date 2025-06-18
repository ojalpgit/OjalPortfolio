import { useEffect, useRef } from "react";

export default function CursorRipple() {
  const rippleRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ripplePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animateRipple = () => {
      if (!rippleRef.current) return;

      const dx = mousePos.current.x - ripplePos.current.x;
      const dy = mousePos.current.y - ripplePos.current.y;

      ripplePos.current.x += dx * 0.1;
      ripplePos.current.y += dy * 0.1;

      rippleRef.current.style.left = `${ripplePos.current.x}px`;
      rippleRef.current.style.top = `${ripplePos.current.y}px`;
      rippleRef.current.style.width = "200px";
      rippleRef.current.style.height = "200px";

      requestAnimationFrame(animateRipple);
    };

    document.addEventListener("mousemove", handleMouseMove);
    const animationId = requestAnimationFrame(animateRipple);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <div ref={rippleRef} className="ripple w-0 h-0" />;
}
