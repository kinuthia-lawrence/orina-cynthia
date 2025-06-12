import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const requestRef = useRef<number>(0);

  const [targetX, setTargetX] = useState(0);
  const [targetY, setTargetY] = useState(0);

  const currentX = useRef(0);
  const currentY = useRef(0);

  // Store previous positions for trail
  const positions = useRef<{ x: number; y: number }[]>(
    Array(5).fill({ x: 0, y: 0 })
  );

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetX(e.clientX);
      setTargetY(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Fixed selector to catch all interactive elements
      if (
        target.closest(
          "a, button, p, h1, h2, h3, h4, h5, h6, img, input, textarea, .hoverable"
        )
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const animate = () => {
      currentX.current += (targetX - currentX.current) * 0.1;
      currentY.current += (targetY - currentY.current) * 0.1;

      // Update cursor position
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.transform = `translate3d(${
          currentX.current - cursor.offsetWidth / 2
        }px, ${currentY.current - cursor.offsetHeight / 2}px, 0)`;
      }

      // Update positions history for trail
      positions.current.pop();
      positions.current.unshift({ x: currentX.current, y: currentY.current });

      // Update trail dots
      trailRefs.current.forEach((dot, i) => {
        if (dot) {
          const pos = positions.current[i];
          dot.style.transform = `translate3d(${
            pos.x - dot.offsetWidth / 2
          }px, ${pos.y - dot.offsetHeight / 2}px, 0)`;
          dot.style.opacity = `${1 - i * 0.2}`;
        }
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [targetX, targetY]);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 z-[9999] rounded-full pointer-events-none transition-all duration-150 ease-out
          ${
            isHovering
              ? "h-16 w-16 border-2 border-white bg-blue-800 bg-opacity-30 mix-blend-overlay"
              : "h-6 w-6 border-2 border-white mix-blend-difference opacity-70"
          }
        `}
      />

      {/* Trail elements */}
      {[1, 2, 3, 4, 5].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            trailRefs.current[i] = el;
          }}
          className={`fixed top-0 left-0 z-[9998] rounded-full bg-white pointer-events-none 
            ${
              isHovering
                ? "h-2 w-2 bg-opacity-20 mix-blend-overlay"
                : "h-3 w-3 bg-opacity-30 mix-blend-difference"
            }
          `}
        />
      ))}
    </>
  );
};

export default CustomCursor;