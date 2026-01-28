import React from 'react';
import contentData from '@/data/content.json';

const NavBar: React.FC<{activeSection: string, setActiveSection: React.Dispatch<React.SetStateAction<string>>}> = ({activeSection, setActiveSection}) => {
    // Define all sections with their corresponding titles
    const allNavLinks = [
      { id: "home", title: "Home" },
      { id: "about", title: "About Me" },
      { id: "projects", title: "Projects" },
      { id: "education", title: "Education" },
      { id: "achievements", title: "Achievements" },
      { id: "experience", title: "Experience" },
      { id: "connect", title: "Connect With Me" }
    ];
    
    return (
       <div className="fixed right-10 md:flex md:items-center md:justify-center md:h-lvh">
        <div className="flex md:flex-col gap-6 p-4  md:w-[60px] md:py-8 md:px-2 z-20 rounded-4xl border border-white/50 items-center justify-center" style={{ 
          borderWidth: "0.5px",
          transition: "transform 700ms cubic-bezier(.2,.9,.35,1), box-shadow 300ms ease",
          transform:  "translateY(-20px)",
          animation: "profile-bounce 2000ms ease-in-out infinite" ,
          WebkitAnimation: "profile-bounce 2000ms ease-in-out infinite" ,
          border: "1.5px solid rgba(255,255,255,0.25)",
          boxShadow: "0 4px 32px 0 rgba(60,220,135,0.10)",
          background: "rgba(255,255,255,0.10)",
          backdropFilter: "blur(5px) saturate(180%)",
          WebkitBackdropFilter: "blur(5px) saturate(180%)",
           }}>
        {allNavLinks.map((link) => (
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
          {link.id === "education" && (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path
              d="M12 3L2 8l10 5 10-5-10-5z"
              stroke={activeSection === link.id ? "#60cc87" : "#fff"}
              strokeWidth="1"
              strokeLinejoin="round"
            />
            <path
              d="M2 13l10 5 10-5M6 10v7c0 2-2 3-4 3"
              stroke={activeSection === link.id ? "#60cc87" : "#fff"}
              strokeWidth="1"
              strokeLinejoin="round"
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
          {link.id === "connect" && (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              stroke={activeSection === link.id ? "#60cc87" : "#fff"}
              strokeWidth="1"
              strokeLinejoin="round"
            />
            </svg>
          )}
          </a>
        ))}
        </div>
      </div>
    );
};

export default NavBar;