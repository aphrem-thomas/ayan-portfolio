"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useEffect, useRef, useState } from "react";


export default function Home() {

  const sectionIds = ["home", "about", "projects", "achievements", "experience"];
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
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            if(activeSection !== id){
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
  return (
    <div style={{ 
      height: "100vh",
      display: "grid",
      gridTemplateColumns: "2fr 5fr",
      width: "100vw"
      }}>
      <div
        style={{
          color: "#fff",
          padding: "2rem",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="profileContainer h-full w-full flex flex-col items-center justify-between p-16"
          style={{ borderRadius: "20px", border: "1px solid #424242" }}
        >
          <div className="name_heading flex justify-between w-full items-center">
            <div className="nameSection text-5xl">
              Ayan
            </div>
            <div className="titleSection">Aviation enthusiast</div>
          </div>

          <div
            className="profileImage"
            style={{ width: "100%", height: "500px", position: "relative" }}
          >
            <img
              src="/ayan_port.JPG"
               style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
                filter: "grayscale(60%)",
               }}
            />
          </div>

          <div className="infoSection">
            <h2>Aphrem Doe</h2>
            <p>ayan@email.com</p>
            <p>+123 456 7890</p>
            <p>Location: City, Country</p>
            <div style={{ marginTop: "2rem" }}>
              <a
                href="https://github.com/ayan"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", marginRight: "1rem" }}
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ayan"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff" }}
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
              mt: 2,
              borderRadius: "30px", // Added for rounded corners
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
        style={{
          padding: "2rem",
          width: "100%",
          scrollBehavior: "smooth",
          overflowY: "auto",
          marginRight: "100px",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}>
      {/* Home Section */}
      <section id="home" style={{ marginBottom: "2rem", height: "100vh" }}>
        <h1>Hi, I'm Aphrem!</h1>
        <p>
          Welcome to my portfolio website. I'm a passionate developer with
          experience in building web applications using modern technologies.
        </p>
      </section>

      {/* About Me Section */}
      <section id="about" style={{ marginBottom: "2rem", height: "100vh" }}>
        <h2>About Me</h2>
        <p>
          I am an aviation enthusiast and software developer with a keen interest in building scalable and efficient web applications. My journey in tech started with curiosity and has grown into a passion for solving real-world problems through code.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ marginBottom: "2rem", height: "100vh" }}>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Portfolio Website:</strong> This website, built with Next.js and React.
          </li>
          <li>
            <strong>Todo App:</strong> A simple todo application with authentication and cloud sync.
          </li>
          <li>
            <strong>Blog Platform:</strong> A markdown-based blogging platform.
          </li>
        </ul>
      </section>

      {/* Achievements Section */}
      <section id="achievements" style={{ marginBottom: "2rem", height: "100vh" }}>
        <h2>Achievements</h2>
        <ul>
          <li>Winner, XYZ Hackathon 2023</li>
          <li>Dean's List, XYZ University (2021-2024)</li>
          <li>Published research paper on Web Performance Optimization</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ marginBottom: "2rem", height: "100vh" }}>
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Frontend Developer</strong> at ABC Corp (2023-Present)
            <br />
            Worked on building responsive web interfaces and optimizing user experience.
          </li>
          <li>
            <strong>Intern</strong> at DEF Solutions (Summer 2022)
            <br />
            Assisted in developing internal tools and automation scripts.
          </li>
        </ul>
      </section>{/* Intro Section */}
        <section style={{ marginBottom: "2rem", height: "100vh" }}>
          <h1>Hi, I'm Aphrem!</h1>
          <p>
            Welcome to my portfolio website. I'm a passionate developer with
            experience in building web applications using modern technologies.
          </p>
        </section>

        {/* Academics Section */}
        <section style={{ marginBottom: "2rem", height: "100vh" }}>
          <h2>Academics</h2>
          <ul>
            <li>B.Sc. in Computer Science, XYZ University (2020-2024)</li>
            <li>
              Relevant Courses: Data Structures, Algorithms, Web Development
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section style={{ marginBottom: "2rem", height: "100vh" }}>
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

        {/* Add more sections as needed */}
      </div>
      <div
        style={{
          position: "fixed",
          right: "30px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          background: "#232323",
          borderRadius: "20px",
          padding: "1rem 0.5rem",
          zIndex: 20,
          boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
          alignItems: "center",
        }}>
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          title={link.title}
          onClick={(e) => {setActiveSection(link.id);}}
          style={{
            color: activeSection === link.id ? "#fff" : "#60cc87",
            background: activeSection === link.id ? "#60cc87" : "transparent",
            borderRadius: "50%",
            padding: "0.3rem",
            transition: "background 0.2s, color 0.2s",
            boxShadow: activeSection === link.id ? "0 0 8px #60cc87" : "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {link.id === "home" && (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path d="M3 10.5L12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-5h-6v5H4a1 1 0 0 1-1-1V10.5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          )}
          {link.id === "about" && (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2"/>
            </svg>
          )}
          {link.id === "projects" && (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 3v4M8 3v4" stroke="currentColor" strokeWidth="2"/>
            </svg>
          )}
          {link.id === "achievements" && (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 13v7M9 20h6" stroke="currentColor" strokeWidth="2"/>
            </svg>
          )}
          {link.id === "experience" && (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 3v4M8 3v4M9 13h6" stroke="currentColor" strokeWidth="2"/>
            </svg>
          )}
        </a>
      ))}
    </div>
    </div>
  );
}
