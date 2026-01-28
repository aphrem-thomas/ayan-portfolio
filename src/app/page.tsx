'use client';
import { useEffect, useRef, useState } from "react";
import DecoBG from "./components/DecoBG/decoBg";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import NavBar from "./components/NavBar/NavBar";
import ProfileMobile from "./components/ProfileMobile/ProfileMobile";
import contentData from "@/data/content.json";
import MainDsk from "./components/mainDsk/mainDsk";
import MainMob from "./components/mainMob/mainMob";

export default function Home() {
  const sectionIds = contentData.navigation.map(nav => nav.id);
  const navLinks = contentData.navigation;

  const heightOffset = 80;


  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolledPixelDistance, setScrolledPixelDistance] = useState<number>(0);
  const [initialWindowHeight, setInitialWindowHeight] = useState<number>(
    typeof window !== "undefined" ? window.innerHeight : 0
  );
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [scrolledViewHeight, setScrolledViewHeight] = useState<boolean>(false);  
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
    setScrolledPixelDistance(scrollDistance);
    const newHeight = Math.max((initialWindowHeight - scrollDistance) - heightOffset, 60);
    setWindowHeight(newHeight);
    setScrolledViewHeight(scrollDistance > initialWindowHeight);
    if (scrollDistance > 2*initialWindowHeight) {
      setIsScrolledDoubleHeight(true);
    } else {
      setIsScrolledDoubleHeight(false);
    }
  }

  const handleScroll = () => {
    let found = false;
    for (const id of sectionIds) {
      const section = sectionRefs.current[id];
      if (section) {
         const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight &&
          rect.bottom >= (window.innerHeight/2)
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
      className="topContainer flex w-screen flex-col justify-center relative md:flex-row "
      style={{ fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif", scrollBehavior: "smooth" }}
      ref={topContainerRef}
    >
      <DecoBG scrolledPixelDistance={scrolledPixelDistance} />
      <div className="main-container md:grid md:grid-cols-[5fr_9fr_1fr] 2xl:grid-cols-[4fr_9fr_1fr] 2xl:max-w-[80%] w-full">
      {/* Left Profile Section */}
      <div className="hidden md:block">
        <ProfileCard windowHeight={windowHeight}/>
      </div>
      <div className="md:hidden">
        <ProfileMobile windowHeight={windowHeight} isScrolledDoubleHeight={isScrolledDoubleHeight} compact={scrolledViewHeight}/>
      </div>
      {/* Main Content Section */}
      <div className="hidden md:block w-full"><MainDsk containerRef={mainContentRef}/></div>
      <div className="md:hidden w-full"><MainMob containerRef={mainContentRef}/></div>
      {/* Navigation Section (least space) */}
      {/* {isScrolledDoubleHeight && <div className="md:hidden">
        <NavBar activeSection={activeSection} setActiveSection={setActiveSection}/>
      </div>} */}
      <div className="hidden md:flex">
        <NavBar activeSection={activeSection} setActiveSection={setActiveSection}/>
      </div>
      </div>
    </div>
  );
}
