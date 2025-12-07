'use client';
import { useEffect, useRef, useState } from "react";
import Main from "./components/main/main";
import DecoBG from "./components/DecoBG/decoBg";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import NavBar from "./components/NavBar/NavBar";

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
  const [isScrolledDoubleHeight, setIsScrolledDoubleHeight] = useState(false);

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

  const topContainerHandleScroll = () => {
    handleScroll();
    const scrollDistance = Math.max(window.scrollY, 0);
    console.log("scrollDistance::::", window.scrollY);
    const newHeight = Math.max((initialWindowHeight - scrollDistance) - heightOffset, 60);
    setWindowHeight(newHeight);
    if (scrollDistance > 2*initialWindowHeight) {
      setIsScrolledDoubleHeight(true);
    } else {
      setIsScrolledDoubleHeight(false);
    }
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
  useEffect(() => {
    
    window.addEventListener("scroll", topContainerHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", topContainerHandleScroll);
    };
    }, []);

  return (
    <div
      className="topContainer w-screen flex-col justify-center relative"
      style={{ fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif", scrollBehavior: "smooth" }}
      ref={topContainerRef}
    >
      <DecoBG />
      <div className="main-container md:grid md:grid-cols-[5fr_9fr_1fr] 2xl:grid-cols-[4fr_9fr_1fr] 2xl:max-w-[80%] w-full">
      {/* Left Profile Section */}
      <ProfileCard windowHeight={windowHeight} isScrolledDoubleHeight={isScrolledDoubleHeight}/>
      <Main containerRef={mainContentRef}/>
      {/* <Main/> */}
      {/* Navigation Section (least space) */}
      {/* {isScrolledDoubleHeight && <div className="md:hidden">
        <NavBar activeSection={activeSection} setActiveSection={setActiveSection}/>
      </div>}
      <div className="hidden md:flex">
        <NavBar activeSection={activeSection} setActiveSection={setActiveSection}/>
      </div> */}
      </div>
    </div>
  );
}
