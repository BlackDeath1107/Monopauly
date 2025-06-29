"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Base = () => {
  const [position, setPosition] = useState({ top: "0px", left: "0px" });
  const [particles, setParticles] = useState([]);

  // Generate floating particles for background animation
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      }));
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  const handleHover = () => {
    const randomX =
      Math.floor(Math.random() * window.innerWidth * 0.3) *
      (Math.random() > 0.5 ? 1 : -1);
    const randomY =
      Math.floor(Math.random() * window.innerHeight * 0.3) *
      (Math.random() > 0.5 ? 1 : -1);
    setPosition({ top: `${randomY}px`, left: `${randomX}px` });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-green-400 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDelay: `${particle.id * 0.1}s`,
              animationDuration: `${particle.speed + 3}s`,
            }}
          />
        ))}
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-green-500/20 rotate-45 animate-spin-slow" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/10 rotate-12 animate-pulse" />
        <div className="absolute bottom-40 left-20 w-40 h-40 border border-green-400/15 rounded-full animate-ping-slow" />
        <div className="absolute bottom-20 right-40 w-20 h-20 bg-gradient-to-r from-green-500/20 to-transparent rounded-full animate-bounce-slow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-[200px] pb-20">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Animated Title */}
          <div className="text-center space-y-4">
            <h1 className="text-8xl font-bold text-white animate-fade-in-up">
              HEY THERE
            </h1>
            <h1 className="text-8xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-300">
              WELCOME!
            </h1>
          </div>

          {/* Description */}
          <div className="animate-fade-in-up animation-delay-600">
            <p className="text-xl text-gray-300 w-[600px] max-w-[90vw] text-center leading-relaxed">
              To improve your experience we need to ask you a crucial question.
              How do you want to handle your business setup in first-world
              economies?
            </p>
          </div>

          {/* Brand Name */}
          <div className="animate-fade-in-up animation-delay-900">
            <h2 className="text-4xl text-white font-light tracking-wider">
              <span className="font-extrabold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                MONO
              </span>
              PAULY
            </h2>
          </div>

          {/* Buttons Container */}
          <div className="relative w-full max-w-4xl h-32 flex items-center justify-center mt-16 animate-fade-in-up animation-delay-1200">
            <div className="flex flex-row items-center justify-center gap-12">
              {/* Outsource Button */}
              <Link href="/details" className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl" />
                <div className="relative bg-white hover:bg-gray-100 transition-all duration-300 p-6 px-8 rounded-xl text-black font-bold text-lg shadow-2xl transform hover:scale-105 hover:shadow-green-500/25 border-2 border-transparent hover:border-green-400/50">
                  <span className="relative z-10">OUTSOURCE</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                </div>
              </Link>

              {/* In-House Button (Dodging) */}
              <div className="relative">
                <button
                  className="group relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 p-6 px-8 rounded-xl text-white font-bold text-lg shadow-2xl transform hover:scale-105 border-2 border-gray-600 hover:border-gray-500 hover:shadow-gray-500/25"
                  style={{
                    transform: `translate(${position.left}, ${
                      position.top
                    }) scale(${position.left === "0px" ? 1 : 1.05})`,
                    transition:
                      "transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                  }}
                  onMouseEnter={handleHover}
                >
                  <span className="relative z-10">IN-HOUSE</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                </button>
              </div>
            </div>
          </div>

          {/* Subtle hint text */}
          <div className="animate-fade-in-up animation-delay-1500">
            <p className="text-sm text-gray-500 text-center mt-8 italic">
              Choose wisely... one option might be more elusive than the other
              😉
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(120deg);
          }
          66% {
            transform: translateY(5px) rotate(240deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%,
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
};

export default Base;
