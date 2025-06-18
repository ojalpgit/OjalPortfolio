import { useEffect, useRef, useState } from "react";

export default function CursorRipple() {
  const rippleContainerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ripplePos = useRef({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const rippleIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        id: rippleIdRef.current++,
        x: e.clientX,
        y: e.clientY
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 2000);
    };

    const animateRipple = () => {
      if (!rippleContainerRef.current) return;

      const dx = mousePos.current.x - ripplePos.current.x;
      const dy = mousePos.current.y - ripplePos.current.y;

      ripplePos.current.x += dx * 0.08;
      ripplePos.current.y += dy * 0.08;

      rippleContainerRef.current.style.left = `${ripplePos.current.x}px`;
      rippleContainerRef.current.style.top = `${ripplePos.current.y}px`;

      requestAnimationFrame(animateRipple);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);
    const animationId = requestAnimationFrame(animateRipple);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Smooth cursor follower */}
      <div 
        ref={rippleContainerRef} 
        className="ripple"
        style={{ width: '120px', height: '120px' }}
      >
        <div className="w-full h-full border border-blue-400/20 dark:border-blue-300/25 rounded-full bg-gradient-radial from-blue-400/5 via-blue-400/2 to-transparent" />
      </div>
      
      {/* Click ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="ripple-wave"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: '20px',
            height: '20px',
            transform: 'translate(-50%, -50%)',
            position: 'fixed',
            zIndex: -1,
            pointerEvents: 'none'
          }}
        />
      ))}
    </>
  );
}
