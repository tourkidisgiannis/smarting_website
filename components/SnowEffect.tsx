"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Snowflake } from "lucide-react";
import { createRoot } from "react-dom/client";

const SnowEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const createSnowflake = () => {
      const wrapper = document.createElement("div");

      const size = Math.random() * 12 + 12;
      const left = Math.random() * 100;
      const opacity = Math.random() * 0.5 + 0.4;
      const duration = Math.random() * 10 + 10;
      const drift = (Math.random() - 0.5) * 120;

      Object.assign(wrapper.style, {
        position: "absolute",
        top: "-40px",
        left: `${left}vw`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity.toString(),
        pointerEvents: "none",
        zIndex: "9999",
      });

      containerRef.current!.appendChild(wrapper);

      // Render Lucide Snowflake into the wrapper
      const root = createRoot(wrapper);
      root.render(<Snowflake color="white" size={size} strokeWidth={1.5} />);

      // Main fall
      gsap.to(wrapper, {
        y: window.innerHeight + 60,
        x: `+=${drift}`,
        rotation: Math.random() > 0.5 ? 360 : -360,
        duration,
        ease: "none",
        onComplete: () => {
          root.unmount();
          wrapper.remove();
        },
      });

      // Gentle sway
      gsap.to(wrapper, {
        x: `+=${Math.random() * 40 - 20}`,
        yoyo: true,
        repeat: -1,
        duration: 2 + Math.random() * 3,
        ease: "sine.inOut",
      });
    };

    for (let i = 0; i < 15; i++) {
      setTimeout(createSnowflake, i * 250);
    }

    const interval = setInterval(createSnowflake, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 9998,
      }}
    />
  );
};

export default SnowEffect;
