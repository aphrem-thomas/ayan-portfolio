import { Button } from '@mui/material';
import React, { RefObject } from 'react';

interface MainProps {
  containerRef: RefObject<HTMLDivElement | null>;
}

const Main: React.FC<MainProps> = ({containerRef}) => {
    return (
        <div
          ref={containerRef}
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
              className="mb-8 flex flex-col justify-center items-start px-12 rounded-2xl shadow-lg"
              style={{
                height: "calc(100vh - 4rem)",
                background: "linear-gradient(90deg, rgba(35,37,38,0.7) 0%, rgba(65,67,69,0.7) 100%)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(96,204,135,0.15)",
              }}
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
                  Hi, I'm Ayaan Asish
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
              <a href="https://github.com/ayaan/portfolio" target="_blank" rel="noopener noreferrer" className="text-[#60cc87] underline">GitHub Repo</a>
              </div>
              <div className="bg-[#1c1c1c] rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-[#60cc87] mb-2">Todo App</h3>
              <p className="text-white mb-2">A productivity app with authentication, cloud sync, and real-time updates. Built using React and Firebase.</p>
              <a href="https://github.com/ayaan/todo-app" target="_blank" rel="noopener noreferrer" className="text-[#60cc87] underline">GitHub Repo</a>
              </div>
              <div className="bg-[#1c1c1c] rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-[#60cc87] mb-2">Blog Platform</h3>
              <p className="text-white mb-2">Markdown-based blogging platform with custom themes and analytics. Built with Node.js and MongoDB.</p>
              <a href="https://github.com/ayaan/blog-platform" target="_blank" rel="noopener noreferrer" className="text-[#60cc87] underline">GitHub Repo</a>
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
    );
};

export default Main;