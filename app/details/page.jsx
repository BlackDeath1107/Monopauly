"use client";
import Detailsuno from "@/components/Detailsuno";
import Detailsdos from "@/components/Detailsdos";
import Detailstres from "@/components/Detailstres";

import React, { useEffect, useRef, useState } from "react";

const Page = () => {
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollTopRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Initial position - start at the bottom
    scrollContainer.scrollTop =
      scrollContainer.scrollHeight - scrollContainer.clientHeight;

    const handleWheel = (e) => {
      e.preventDefault();

      // Reverse the direction of scrolling
      const delta = -e.deltaY;

      // Apply the reversed scroll
      scrollContainer.scrollTop += delta;
    };

    // For touch devices
    const handleTouchStart = (e) => {
      lastScrollTopRef.current = scrollContainer.scrollTop;
      setIsScrolling(true);
    };

    const handleTouchMove = (e) => {
      if (!isScrolling) return;

      const touch = e.touches[0];
      const touchDelta = lastScrollTopRef.current - scrollContainer.scrollTop;

      // Apply reverse scrolling for touch
      scrollContainer.scrollTop = lastScrollTopRef.current + touchDelta;

      // Update last position
      lastScrollTopRef.current = scrollContainer.scrollTop;
    };

    const handleTouchEnd = () => {
      setIsScrolling(false);
    };

    // Add event listeners
    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
    scrollContainer.addEventListener("touchstart", handleTouchStart);
    scrollContainer.addEventListener("touchmove", handleTouchMove);
    scrollContainer.addEventListener("touchend", handleTouchEnd);

    // Cleanup
    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
      scrollContainer.removeEventListener("touchstart", handleTouchStart);
      scrollContainer.removeEventListener("touchmove", handleTouchMove);
      scrollContainer.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isScrolling]);

  return (
    <div ref={scrollContainerRef} className="w-screen h-screen overflow-auto">
      <div className="w-screen h-screen bg-white">
        <Detailstres />
      </div>
      <div className="w-screen h-screen bg-blue-500">
        <Detailsdos />
      </div>
      <div className="w-screen h-screen">
        <Detailsuno />
      </div>
    </div>
  );
};

export default Page;
