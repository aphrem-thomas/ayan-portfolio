import Image from "next/image";
import Button from "@mui/material/Button";

const ProfileCard = ({ windowHeight }: { windowHeight: number }) => {
  return (
    <div className="text-[#d1d1d1] w-full p-8 md:h-screen flex flex-col items-center fixed z-[-1] md:relative">
          <div
          className="profileContainer rounded-[32px] w-full flex flex-col items-center justify-center p-16 gap-8"
          style={{
            border: "1.5px solid rgba(255,255,255,0.25)",
            boxShadow: "0 4px 32px 0 rgba(60,220,135,0.10)",
            background: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(5px) saturate(180%)",
            WebkitBackdropFilter: "blur(5px) saturate(180%)",
            borderWidth: "1.5px",
            height: !windowHeight ? "100vh" : `${windowHeight}px`,
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
              className="text-xl mb-3"
              style={{ letterSpacing: "0.05em", textShadow: "0 1px 8px rgba(60,220,135,0.08)" }}
            >
              ayaan.asish@gmail.com
            </p>
            <p style={{ letterSpacing: "0.05em" }} className="text-2xl">Student at WCSS, Ottawa</p>
            <div className="mt-4 flex items-center gap-4 text-white/50">
              <a
          href="https://github.com/ayaan"
          target="_blank"
          rel="noopener noreferrer"
          className=""
          style={{
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
              >
          <Image
            src="/github.png"
            alt="GitHub"
            width={28}
            height={28}
            style={{ filter: "opacity(0.7)" }}
          />
              </a>
              <a
          href="https://linkedin.com/in/ayaan"
          target="_blank"
          rel="noopener noreferrer"
          className=""
          style={{
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
              >
          <Image
            style={{ filter: "opacity(0.7)" }}
            src="/linkedin.svg"
            alt="LinkedIn"
            width={45}
            height={45}
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
  );
}

export default ProfileCard;
