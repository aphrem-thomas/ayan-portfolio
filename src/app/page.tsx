'use client';

import Image from "next/image";
import Button from "@mui/material/Button";
import { useEffect, useRef, useState } from "react";
import Main from "./components/main/main";
import DecoBG from "./components/DecoBG/decoBg";
import ProfileCard from "./components/ProfileCard/ProfileCard";

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

  const heightOffset = 80;


  const [activeSection, setActiveSection] = useState<string>("home");
  const [initialWindowHeight, setInitialWindowHeight] = useState<number>(
    typeof window !== "undefined" ? window.innerHeight : 0
  );
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setInitialWindowHeight(window.innerHeight);
      setWindowHeight(window.innerHeight - heightOffset);
    };
    // initialize
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const topContainerHandleScroll = (e: Event) => {
    const container = topContainerRef.current;
    let scrollDistance = container ? container.scrollTop : window.scrollY;
    scrollDistance = Math.max(scrollDistance, 0);
    console.log("scrollDistance::::", scrollDistance);
    const newHeight = Math.max(initialWindowHeight - scrollDistance - heightOffset, 60);
    setWindowHeight(newHeight);
  }

  const handleScroll = () => {
    let found = false;
    const container = sectionRefs.current;
    const scrollDistance = container ? container.scrollTop : window.scrollY;
    console.log("scroll in handleScroll", scrollDistance);
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
  const topContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sectionIds.forEach((id) => {
      sectionRefs.current[id] = document.getElementById(id);
    });
    const mainContent = mainContentRef.current;
    if (mainContent) {
      mainContent.addEventListener("scroll", handleScroll, { passive: true });
    }

    const topContainer = topContainerRef.current;
    if (topContainer) {
      topContainer.addEventListener("scroll", topContainerHandleScroll, { passive: true });
    }

    return () => {
      if (mainContent) {
        mainContent.removeEventListener("scroll", handleScroll);
      }
      if (topContainer) {
        topContainer.removeEventListener("scroll", topContainerHandleScroll);
      }
    };
  }, []);
  
  return (
    <div
      className="h-screen w-screen flex justify-center relative overflow-y-auto"
      style={{ fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif" }}
       ref={topContainerRef}
    >
      <DecoBG />
      <div className="main-container md:grid md:grid-cols-[5fr_9fr_1fr] 2xl:grid-cols-[4fr_9fr_1fr] md:h-screen 2xl:max-w-[80%] w-full">
      {/* Left Profile Section */}
      <ProfileCard windowHeight={windowHeight} />
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
