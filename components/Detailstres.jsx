import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Escalator from "../assets/Escalator.jpg";
import Hands from "../assets/Hands.jpg";
import City from "../assets/City.jpg";

const Detailstres = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [arrowPosition, setArrowPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isNavigating, setIsNavigating] = useState(false);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });
  const arrowRef = useRef(null);
  const containerRef = useRef(null);
  const navigationTimer = useRef(null);

  // Generate random initial position and set up container dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerDimensions({ width: rect.width, height: rect.height });

        // Set random position only once
        if (arrowPosition.x === 100 && arrowPosition.y === 100) {
          const randomX = Math.random() * (rect.width - 100);
          const randomY = Math.random() * (rect.height - 100);
          setArrowPosition({ x: randomX, y: randomY });
        }
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const slides = [
    // Slide 1 - Dedicated Team
    {
      id: "dedicated",
      content: (
        <div className="h-screen w-screen flex flex-col items-start justify-start min-w-full">
          <div className="pb-16 pl-10">
            <h1 className="text-8xl font-extrabold text-black">DEDICATED</h1>
            <h1 className="text-9xl font-bold text-green-400">TEAM</h1>
          </div>
          <div className="flex flex-row items-center justify-center w-full gap-10 p-4 rounded-md">
            <div className="">
              <Image src={Escalator} className="rounded-md" />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-start justify-center text-black">
                <div>
                  <h1
                    className="text-9xl text-white"
                    style={{ WebkitTextStroke: "2px black" }}
                  >
                    20+
                  </h1>
                </div>
                <div>
                  <h1 className="font-bold">Experts</h1>
                </div>
              </div>
              <div>
                <h1 className="text-black text-4xl font-bold">ONE STOP HUB</h1>
                <h1 className="text-black text-2xl font-semibold">
                  Your full-stack incorporation partner
                </h1>
                <h1 className="w-[420px] text-black text-justify">
                  From legal contract drafting to post-incorporation compliance,
                  our 20+ specialists handle the complexity so you can stay
                  focused on building
                </h1>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 2 - Dedicated Team (updated)
    {
      id: "committed",
      content: (
        <div className="h-screen w-screen flex flex-col items-start justify-start min-w-full">
          <div className="pb-16 pl-10">
            <h1 className="text-8xl font-extrabold text-black">DEDICATED</h1>
            <h1 className="text-9xl font-bold text-green-400">TEAM</h1>
          </div>
          <div className="flex flex-row items-center justify-center w-full gap-16 p-4 rounded-md">
            <div className="">
              <Image
                src={Hands}
                height={400}
                width={400}
                className="rounded-md"
              />
            </div>
            <div className="w-[500px] text-justify">
              <h1 className="text-black font-semibold text-4xl">
                You can connect with our team anytime-{" "}
                <span className="text-green-500 font-bold">directly</span>. We
                prioritize swift responses to keep your momentum going
              </h1>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 3 - Dedicated Team (updated)
    {
      id: "jurisdictions",
      content: (
        <div className="h-screen w-screen flex flex-col items-start justify-start min-w-full">
          <div className="pb-16 pl-10">
            <h1 className="text-8xl font-extrabold text-black">DEDICATED</h1>
            <h1 className="text-9xl font-bold text-green-400">TEAM</h1>
          </div>
          <div className="flex flex-row items-center justify-center w-full gap-10 p-4 rounded-md">
            <div className="">
              <Image src={City} className="rounded-md" />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-start justify-center text-black">
                <div>
                  <h1
                    className="text-9xl text-white"
                    style={{ WebkitTextStroke: "2px black" }}
                  >
                    50+
                  </h1>
                </div>
              </div>
              <div>
                <h1 className="text-black text-5xl text-center font-bold">
                  JURISDICTIONS
                </h1>
                <h1 className="w-[420px] text-black text-justify text-2xl pt-8">
                  U.S. Reach, Global Support. We can assist clients across all
                  50 states and internationally.
                </h1>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = arrowRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const arrowSize = 80; // Arrow size for boundary calculation

    let newX = e.clientX - containerRect.left - dragOffset.x;
    let newY = e.clientY - containerRect.top - dragOffset.y;

    // Keep arrow within page boundaries
    newX = Math.max(0, Math.min(newX, containerRect.width - arrowSize));
    newY = Math.max(0, Math.min(newY, containerRect.height - arrowSize));

    setArrowPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Clear navigation timer when dragging stops
    if (navigationTimer.current) {
      clearTimeout(navigationTimer.current);
    }
  };

  // Check for navigation based on arrow position
  useEffect(() => {
    if (!containerDimensions.width || isNavigating) return;

    const pageWidth = containerDimensions.width;
    const threshold = pageWidth * 0.12; // 12% from edges for more precise control

    // Clear existing timer
    if (navigationTimer.current) {
      clearTimeout(navigationTimer.current);
    }

    // Set navigation timer for smoother experience
    if (arrowPosition.x < threshold && currentSlide > 0) {
      setIsNavigating(true);
      navigationTimer.current = setTimeout(() => {
        setCurrentSlide((prev) => prev - 1);
        setTimeout(() => setIsNavigating(false), 800); // Cooldown period
      }, 500); // Delay before navigation
    } else if (
      arrowPosition.x > pageWidth - threshold &&
      currentSlide < slides.length - 1
    ) {
      setIsNavigating(true);
      navigationTimer.current = setTimeout(() => {
        setCurrentSlide((prev) => prev + 1);
        setTimeout(() => setIsNavigating(false), 800); // Cooldown period
      }, 500); // Delay before navigation
    }
  }, [arrowPosition.x, currentSlide, containerDimensions.width, isNavigating]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (navigationTimer.current) {
        clearTimeout(navigationTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset, currentSlide, isNavigating, containerDimensions]);

  // Determine arrow direction and rotation
  const getArrowDirection = () => {
    if (!containerDimensions.width) return "neutral";

    const pageWidth = containerDimensions.width;
    const threshold = pageWidth * 0.12;

    if (arrowPosition.x < threshold) {
      return "left"; // Point left
    } else if (arrowPosition.x > pageWidth - threshold) {
      return "right"; // Point right
    }
    return "neutral"; // Point right by default
  };

  const getArrowRotation = () => {
    const direction = getArrowDirection();
    switch (direction) {
      case "left":
        return "rotate-180"; // Point left
      case "right":
        return "rotate-0"; // Point right
      default:
        return "rotate-0"; // Default right
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden"
      style={{ cursor: isDragging ? "grabbing" : "default" }}
    >
      {/* Main Slider Container */}
      <div
        className="flex transition-transform duration-1000 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="flex-shrink-0 w-full h-full">
            {slide.content}
          </div>
        ))}
      </div>

      {/* Draggable Green Arrow */}
      <div
        ref={arrowRef}
        className="absolute z-20 cursor-grab active:cursor-grabbing"
        style={{
          left: `${arrowPosition.x}px`,
          top: `${arrowPosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
        onMouseDown={handleMouseDown}
      >
        <div
          className={`bg-green-400 rounded-full p-4 shadow-2xl hover:bg-green-500 transition-all duration-300 hover:scale-110 ${
            isNavigating ? "animate-pulse" : ""
          }`}
        >
          <svg
            className={`w-12 h-12 text-white transition-transform duration-500 ease-in-out ${getArrowRotation()}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </div>
        {/* Direction indicator */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-green-400 font-bold text-sm whitespace-nowrap">
          {getArrowDirection() === "left"
            ? "← Previous"
            : getArrowDirection() === "right"
            ? "Next →"
            : "Drag to navigate"}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-green-400 scale-125"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Detailstres;
