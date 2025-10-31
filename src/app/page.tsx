"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useEffect, useRef, useState } from "react";
import Main from "./components/main/main";

export default function Home() {
  const sectionIds = [
    "home",
    "about",
    "projects",
    "achievements",
    "experience",
  ];
  const navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About Me" },
    { id: "projects", title: "Projects" },
    { id: "achievements", title: "Achievements" },
    { id: "experience", title: "Experience" },
  ];

  const [activeSection, setActiveSection] = useState<string>("home");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const handleScroll = () => {
    let found = false;
    for (const id of sectionIds) {
      const section = sectionRefs.current[id];
      if (section) {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight &&
          rect.bottom >= window.innerHeight
        ) {
          if (activeSection !== id) {
            setActiveSection(id);
          }
          found = true;
          break;
        }
      }
    }
    if (!found) setActiveSection(sectionIds[0]);
  };

  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sectionIds.forEach((id) => {
      sectionRefs.current[id] = document.getElementById(id);
    });
    const mainContent = mainContentRef.current;
    if (mainContent) {
      mainContent.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (mainContent) {
        mainContent.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  // Add a standard designer font (e.g., Inter) via a global style
  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap";
    document.head.appendChild(fontLink);
    return () => {
      document.head.removeChild(fontLink);
    };
  }, []);

  return (
    <div
      className="h-screen w-screen flex justify-center relative"
      style={{ fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif" }}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Top Left Gradient Blob */}
      <div
        style={{
        position: "absolute",
        top: "-120px",
        left: "-120px",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle at 30% 30%, #60cc87 0%, transparent 70%)",
        opacity: 0.35,
        filter: "blur(40px)",
        zIndex: 0,
        }}
      />
      {/* Bottom Right Gradient Blob */}
      <div
        style={{
        position: "absolute",
        bottom: "-120px",
        right: "-120px",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle at 70% 70%, #60cc87 0%, transparent 70%)",
        opacity: 0.25,
        filter: "blur(40px)",
        zIndex: 0,
        }}
      />
      {/* Center Faint Grid */}
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0"
        style={{ opacity: 0.13, zIndex: 0 }}
      >
        <defs>
            <pattern
          id="modernGrid"
          width="64"
          height="64"
          patternUnits="userSpaceOnUse"
            >
          {/* Thin grid lines */}
          <path
            d="M 64 0 L 0 0 0 64"
            fill="none"
            stroke="#2d2d2d"
            strokeWidth="1"
          />
          {/* Dots at intersections */}
          <circle cx="0" cy="0" r="8" fill="#60cc87" opacity="0.5" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#modernGrid)" />
      </svg>
      </div>
      <div className="main-container grid grid-cols-[5fr_9fr_1fr] 2xl:grid-cols-[4fr_9fr_1fr] h-screen 2xl:max-w-[80%] w-full">
      {/* Left Profile Section */}
      <div className="text-[#d1d1d1] p-8 h-screen flex flex-col items-center">
        <div
          className="profileContainer h-full w-full flex flex-col items-center justify-center p-16 gap-8"
          style={{
            borderRadius: "32px",
            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 60%, rgba(220,255,240,0.08) 100%)",
            border: "1.5px solid rgba(255,255,255,0.32)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            borderWidth: "1.5px",
            transition: "box-shadow 0.3s",
          }}
        >
          <div className="name_heading flex justify-between w-full items-center">
            <div
              className="nameSection text-6xl font-extrabold tracking-tight"
              style={{ fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif" }}
            >
              Ayaan
            </div>
            <div
              className="titleSection ml-4 px-4 py-2 mt-4 rounded-full text-sm font-semibold bg-white/40 shadow-sm border border-white/30"
              style={{
                letterSpacing: "0.05em",
                fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              Aerospace <br /> enthusiast
            </div>
          </div>
          <div className="profileImage w-full relative 2xl:mb-24 flex justify-center">
            <img
              src="/ayaan_port.JPG"
              className="w-[180px] h-[180px] 2xl:w-[320px] 2xl:h-[320px] object-cover rounded-full border-4 border-white/60 shadow-lg"
              style={{
                boxShadow: "0 4px 24px 0 rgba(60, 220, 135, 0.10)",
                background: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(4px)",
              }}
            />
          </div>
          <div className="infoSection flex flex-col items-center gap-1 mb-4">
            <p
              className="text-xl mb-3 text-black/80"
              style={{ letterSpacing: "0.05em", textShadow: "0 1px 8px rgba(60,220,135,0.08)" }}
            >
              ayaan.asish@gmail.com
            </p>
            <p style={{ letterSpacing: "0.05em" }} className="text-2xl text-black/80">Student at WCSS, Ottawa</p>
            <div className="mt-4 flex items-center gap-4 text-white/50">
              <a
                href="https://github.com/ayaan"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/30 p-2 border border-white/30 shadow-sm hover:bg-white/50 transition"
                style={{
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                }}
              >
                <Image
                  src="/github.svg"
                  alt="GitHub"
                  width={28}
                  height={28}
                  style={{ filter: "invert(100%) opacity(0.7)" }}
                />
              </a>
              <a
                href="https://linkedin.com/in/ayaan"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/30 p-2 border border-white/30 shadow-sm hover:bg-white/50 transition"
                style={{
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                }}
              >
                <Image
                  style={{ filter: "invert(100%) opacity(0.7)" }}
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={36}
                  height={36}
                />
              </a>
            </div>
          </div>
          <div className="hireMeButton w-full">
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #60cc87 60%, #b6ffe2 100%)",
                color: "#1c1c1c",
                border: "1.5px solid #60cc87",
                "&:hover": {
                  background: "rgba(255,255,255,0.18)",
                  color: "#60cc87",
                  border: "1.5px solid #60cc87",
                },
                width: "100%",
                fontWeight: "bold",
                fontSize: "1.2rem",
                borderRadius: "30px",
                fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif",
                boxShadow: "0 2px 12px 0 rgba(60,220,135,0.12)",
                transition: "background 0.3s, color 0.3s",
              }}
              disableElevation
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
      <Main containerRef={mainContentRef}/>
      {/* Navigation Section (least space) */}
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col gap-6  w-[60px] py-8 px-2 z-20 rounded-4xl border border-white/50 items-center justify-center" style={{ borderWidth: "0.5px" }}>
        {navLinks.map((link) => (
          <a
          key={link.id}
          href={`#${link.id}`}
          title={link.title}
          onClick={(e) => {
            setActiveSection(link.id);
          }}
          className={`flex items-center justify-center transition-colors duration-200 ${
            activeSection === link.id
            ? "text-[#60cc87]"
            : "text-white bg-transparent"
          }`}
          style={{ fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif" }}
          >
          {link.id === "home" && (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path
              d="M3 10.5L12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-5h-6v5H4a1 1 0 0 1-1-1V10.5z"
              stroke={activeSection === link.id ? "#60cc87" : "#fff"}
              strokeWidth="1"
              strokeLinejoin="round"
            />
            </svg>
          )}
          {link.id === "about" && (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="8"
              r="4"
              stroke={activeSection === link.id ? "#60cc87" : "#fff"}
              strokeWidth="1"
            />
            <path
              d="M4 20c0-4 4-7 8-7s8 3 8 7"
              stroke={activeSection === link.id ? "#60cc87" : "#fff"}
              strokeWidth="1"
            />
            </svg>
          )}
          {link.id === "projects" && (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect
              x="3"
              y="7"
              width="18"
              height="13"
              rx="2"
              stroke={activeSection === link.id ? "#60cc87" : "#fff"}
              strokeWidth="1"
            />
            <path
              d="M16 3v4M8 3v4"
              stroke={activeSection === link.id ? "#60cc87" : "#fff"}
              strokeWidth="1"
            />
            </svg>
          )}
          {link.id === "achievements" && (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="8"
              r="5"
              stroke={activeSection === link.id ? "#60cc87" : "#fff"}
              strokeWidth="1"
            />
            <path
              d="M12 13v7M9 20h6"
              stroke={activeSection === link.id ? "#60cc87" : "#fff"}
              strokeWidth="1"
            />
            </svg>
          )}
          {link.id === "experience" && (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect
              x="3"
              y="7"
              width="18"
              height="13"
              rx="2"
              stroke={activeSection === link.id ? "#60cc87" : "#fff"}
              strokeWidth="1"
            />
            <path
              d="M16 3v4M8 3v4M9 13h6"
              stroke={activeSection === link.id ? "#60cc87" : "#fff"}
              strokeWidth="1"
            />
            </svg>
          )}
          </a>
        ))}
        </div>
      </div>
      </div>
    </div>
  );
}
