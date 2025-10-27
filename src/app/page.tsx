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
            <section
              id="home"
              className="mb-8 flex flex-col justify-center items-start px-12 bg-gradient-to-br from-[#232526] to-[#414345] rounded-2xl shadow-lg"
              style={{ height: "calc(100vh - 4rem)" }}
            >
              <div className="flex flex-col gap-8">
                <h1
                  className="text-7xl font-extrabold"
                  style={{
                    background: "linear-gradient(90deg, #60cc87 0%, #ffffff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Hi, I'm Ayan Ashish
                </h1>
                <p className="text-lg text-white max-w-xl">
                  Welcome to my portfolio! I’m an aerospace enthusiast and full-stack developer, passionate about building scalable web applications and exploring new technologies.
                </p>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "transparent",
                    color: "#60cc87",
                    border: "2px solid #60cc87",
                    borderRadius: "30px",
                    fontWeight: "bold",
                    width: "300px",
                    fontSize: "1.1rem",
                    fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif",
                    "&:hover": {
                      backgroundColor: "#232526",
                      borderColor: "#4bbd74",
                      color: "#4bbd74",
                    },
                  }}
                >
                  View My Work
                </Button>
              </div>
            </section>

          {/* About Me Section */}
            <section
            id="about"
            className="mb-8 flex flex-col justify-center items-start px-12 bg-[#232526] rounded-2xl shadow-lg"
            style={{ height: "calc(100vh - 4rem)" }}
            >
            <h2 className="text-4xl font-bold text-[#60cc87] mb-4">About Me</h2>
            <p className="text-white text-lg mb-4 max-w-xl">
              I’m a developer with a background in aerospace engineering. My journey began with curiosity about flight and technology, leading me to combine both passions in innovative projects. I enjoy collaborating, learning, and solving real-world problems through code.
            </p>
            <ul className="list-disc pl-6 text-white">
              <li>React, Next.js, TypeScript, Node.js</li>
              <li>UI/UX Design & Prototyping</li>
              <li>Cloud & DevOps Enthusiast</li>
              <li>Open Source Contributor</li>
            </ul>
            </section>

          {/* Projects Section */}
            <section
            id="projects"
            className="mb-8 flex flex-col justify-center items-start px-12 bg-gradient-to-br from-[#232526] to-[#414345] rounded-2xl shadow-lg"
            style={{ height: "calc(100vh - 4rem)" }}
            >
            <h2 className="text-4xl font-bold text-[#60cc87] mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1c1c1c] rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-[#60cc87] mb-2">Portfolio Website</h3>
              <p className="text-white mb-2">Personal portfolio built with Next.js, React, and Tailwind CSS. Features smooth navigation and responsive design.</p>
              <a href="https://github.com/ayan/portfolio" target="_blank" rel="noopener noreferrer" className="text-[#60cc87] underline">GitHub Repo</a>
              </div>
              <div className="bg-[#1c1c1c] rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-[#60cc87] mb-2">Todo App</h3>
              <p className="text-white mb-2">A productivity app with authentication, cloud sync, and real-time updates. Built using React and Firebase.</p>
              <a href="https://github.com/ayan/todo-app" target="_blank" rel="noopener noreferrer" className="text-[#60cc87] underline">GitHub Repo</a>
              </div>
              <div className="bg-[#1c1c1c] rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-[#60cc87] mb-2">Blog Platform</h3>
              <p className="text-white mb-2">Markdown-based blogging platform with custom themes and analytics. Built with Node.js and MongoDB.</p>
              <a href="https://github.com/ayan/blog-platform" target="_blank" rel="noopener noreferrer" className="text-[#60cc87] underline">GitHub Repo</a>
              </div>
            </div>
            </section>

          {/* Achievements Section */}
          <section
            id="achievements"
            className="mb-8 flex flex-col justify-center items-start px-12 bg-[#232526] rounded-2xl shadow-lg"
             style={{ height: "calc(100vh - 4rem)" }}
          >
            <h2 className="text-4xl font-bold text-[#60cc87] mb-4">Achievements</h2>
            <ul className="list-disc pl-6 text-white text-lg">
              <li>
                <span className="font-semibold text-[#60cc87]">Winner, XYZ Hackathon 2023:</span> Developed an AI-powered flight planner.
              </li>
              <li>
                <span className="font-semibold text-[#60cc87]">Dean's List, XYZ University (2021-2024):</span> Recognized for academic excellence.
              </li>
              <li>
                <span className="font-semibold text-[#60cc87]">Published Research:</span> Authored a paper on Web Performance Optimization in IEEE Journal.
              </li>
              <li>
                <span className="font-semibold text-[#60cc87]">Open Source:</span> Contributor to several aviation and tech projects.
              </li>
            </ul>
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            className="mb-8 flex flex-col justify-center items-start px-12 bg-gradient-to-br from-[#232526] to-[#414345] rounded-2xl shadow-lg"
             style={{ height: "calc(100vh - 4rem)" }}
          >
            <h2 className="text-4xl font-bold text-[#60cc87] mb-4">Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-[#60cc87]">Frontend Developer, ABC Corp</h3>
                <span className="text-white text-sm">2023 - Present</span>
                <p className="text-white mt-2">
                  Building responsive web interfaces, optimizing user experience, and collaborating with cross-functional teams on product launches.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#60cc87]">Intern, DEF Solutions</h3>
                <span className="text-white text-sm">Summer 2022</span>
                <p className="text-white mt-2">
                  Developed internal tools, automation scripts, and contributed to process improvements in the engineering team.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#60cc87]">Freelance Projects</h3>
                <span className="text-white text-sm">2021 - 2023</span>
                <p className="text-white mt-2">
                  Delivered custom web solutions for startups, including e-commerce platforms and data dashboards.
                </p>
              </div>
            </div>
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
