"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useEffect, useRef, useState } from "react";

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
      className="h-screen w-screen flex justify-center"
      style={{ fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif" }}
    >
      <div className="main-container grid grid-cols-[5fr_9fr_1fr] 2xl:grid-cols-[4fr_9fr_1fr] h-screen 2xl:max-w-[80%] w-full">
        {/* Left Profile Section */}
        <div className="text-white p-8 h-screen flex flex-col items-center">
          <div className="profileContainer h-full w-full flex flex-col items-center justify-between p-16 rounded-2xl border border-white/50 gap-8" style={{ borderWidth: "0.5px" }}>
            <div className="name_heading flex justify-between w-full items-center mb-6">
              <div
                className="nameSection text-6xl font-extrabold tracking-tight"
                style={{ fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif" }}
              >
                Ayan
              </div>
              <div
                className="titleSection ml-4 px-3 mt-4 rounded-full text-sm font-semibold "
                style={{
                  letterSpacing: "0.05em",
                  fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif",
                }}
              >
                Aerospace <br/> enthusiast
              </div>
            </div>
            <div className="profileImage w-full relative mb-6">
              <img
                src="/ayan_port.JPG"
                className="w-full h-[250px] 2xl:h-[450px] object-cover rounded-lg grayscale-[60%]"
              />
            </div>
            <div className="infoSection flex flex-col items-center gap-1 mb-4">
              <p>ayan@email.com</p>
              <p>Location: City, Country</p>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://github.com/ayan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/ayan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="hireMeButton w-full">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#60cc87",
                  color: "#1c1c1c",
                  border: "1px solid #60cc87",
                  "&:hover": {
                    backgroundColor: "#4bbd74",
                    color: "#4bbd74",
                    border: "1px solid #4bbd74",
                  },
                  width: "100%",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  borderRadius: "30px",
                  fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif",
                }}
                disableElevation
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>

        {/* Scrollable Main Content */}
        <div
          ref={mainContentRef}
          className="p-8 w-full overflow-y-auto mr-[100px] scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
            msOverflowStyle: "none", // IE and Edge
            scrollbarWidth: "none", // Firefox
            fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif",
          }}
        >
          {/* Home Section */}
          <section id="home" className="mb-8 h-screen">
            <h1>Hi, I'm Ayan</h1>
            <p>
              Welcome to my portfolio website. I'm a passionate developer with
              experience in building web applications using modern technologies.
            </p>
          </section>

          {/* About Me Section */}
          <section id="about" className="mb-8 h-screen">
            <h2>About Me</h2>
            <p>
              I am an aviation enthusiast and software developer with a keen
              interest in building scalable and efficient web applications. My
              journey in tech started with curiosity and has grown into a
              passion for solving real-world problems through code.
            </p>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-8 h-screen">
            <h2>Projects</h2>
            <ul>
              <li>
                <strong>Portfolio Website:</strong> This website, built with
                Next.js and React.
              </li>
              <li>
                <strong>Todo App:</strong> A simple todo application with
                authentication and cloud sync.
              </li>
              <li>
                <strong>Blog Platform:</strong> A markdown-based blogging
                platform.
              </li>
            </ul>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="mb-8 h-screen">
            <h2>Achievements</h2>
            <ul>
              <li>Winner, XYZ Hackathon 2023</li>
              <li>Dean's List, XYZ University (2021-2024)</li>
              <li>Published research paper on Web Performance Optimization</li>
            </ul>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-8 h-screen">
            <h2>Experience</h2>
            <ul>
              <li>
                <strong>Frontend Developer</strong> at ABC Corp (2023-Present)
                <br />
                Worked on building responsive web interfaces and optimizing user
                experience.
              </li>
              <li>
                <strong>Intern</strong> at DEF Solutions (Summer 2022)
                <br />
                Assisted in developing internal tools and automation scripts.
              </li>
            </ul>
          </section>
        </div>

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
