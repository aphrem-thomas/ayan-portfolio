import Image from "next/image";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Fixed Contact Info Sidebar */}
      <div
        style={{
          width: "500px",
          color: "#fff",
          padding: "2rem",
          position: "fixed",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <div
          className="profileContainer h-full w-full flex flex-col items-center justify-between p-16"
          style={{ borderRadius: "20px", border: "1px solid #424242" }}
        >
          <div className="name_heading flex justify-between w-full items-center">
            <div className="nameSection text-5xl">Ayan</div>
            <div className="titleSection">Aviation enthusiast</div>
          </div>

          <div
            className="profileImage"
            style={{ width: "100%", height: "500px", position: "relative" }}
          >
            <img
              src="/portfo.avif"
              alt="Profile Image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
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
        style={{
          marginLeft: "500px",
          padding: "2rem",
          width: "100%",
          overflowY: "auto",
        }}
      >
        {/* Intro Section */}
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
    </div>
  );
}
