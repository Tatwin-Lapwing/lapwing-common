"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const hoveringRef = useRef(false);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const glowX = useSpring(cursorX, springConfig);
  const glowY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      if (isInteractive !== hoveringRef.current) {
        hoveringRef.current = isInteractive;
        setHovering(isInteractive);
      }
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Soft spotlight glow — follows cursor with gentle lag */}
      <motion.div
        className="absolute"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: hovering ? 350 : 250,
            height: hovering ? 350 : 250,
          }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          style={{
            background: hovering
              ? "radial-gradient(circle, rgba(203, 191, 165, 0.22) 0%, rgba(203, 191, 165, 0.08) 40%, transparent 70%)"
              : "radial-gradient(circle, rgba(203, 191, 165, 0.15) 0%, rgba(203, 191, 165, 0.05) 40%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      </motion.div>
    </div>
  );
}
