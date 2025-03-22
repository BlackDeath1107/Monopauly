import React, { useState, useEffect, useRef } from "react";

const Deatailsdos = () => {
  const [mouseTrail, setMouseTrail] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const containerRef = useRef(null);
  const maxTrailPoints = 1000; // More points for smoother path
  const brushSize = 60; // Size of the "eraser" effect

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsDrawing(true);
    };

    const handleMouseLeave = () => {
      setIsDrawing(false);
    };

    const handleMouseMove = (e) => {
      if (!containerRef.current || !isDrawing) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMouseTrail((prevTrail) => {
        const newTrail = [...prevTrail, { x, y }];
        // Keep only the last maxTrailPoints points
        return newTrail.slice(-maxTrailPoints);
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isDrawing]);

  // Create SVG path for continuous mouse trail
  const createSvgPath = () => {
    if (mouseTrail.length === 0) return "";

    let path = `M ${mouseTrail[0].x} ${mouseTrail[0].y}`;

    // Use quadratic curves for smooth path
    for (let i = 1; i < mouseTrail.length; i++) {
      const current = mouseTrail[i];
      const prev = mouseTrail[i - 1];

      // Calculate control point (midpoint between prev and current)
      const cpx = (prev.x + current.x) / 2;
      const cpy = (prev.y + current.y) / 2;

      path += ` Q ${prev.x} ${prev.y}, ${cpx} ${cpy}`;
    }

    return path;
  };

  return (
    <div
      className="w-full h-screen bg-white relative overflow-hidden"
      ref={containerRef}
    >
      {/* Green overlay layer */}
      <div className="absolute inset-0 bg-green-500 z-10">
        {/* This is the solid green background */}
      </div>

      {/* SVG mask layer for continuous reveal effect */}
      <svg className="absolute inset-0 z-20 w-full h-full pointer-events-none">
        <defs>
          <mask id="reveal-mask">
            {/* Black background (opaque part of mask) */}
            <rect x="0" y="0" width="100%" height="100%" fill="black" />

            {/* White path (transparent part of mask) */}
            {mouseTrail.length > 0 && (
              <path
                d={createSvgPath()}
                stroke="white"
                strokeWidth={brushSize * 2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </mask>
        </defs>

        {/* White rectangle with the mask applied */}
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="white"
          mask="url(#reveal-mask)"
        />
      </svg>

      {/* Text overlay (visible all the time) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
        <h1 className="text-xl font-bold text-gray-800">
          We disrupt the norm with
        </h1>
        <h1 className="text-8xl font-bold text-gray-800">Our Atypical Approach</h1>
      </div>
    </div>
  );
};

export default Deatailsdos;
