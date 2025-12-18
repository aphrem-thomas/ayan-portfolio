import Image from "next/image";
import Button from "@mui/material/Button";

const ProfileMobile = ({
  windowHeight = null,
  isScrolledDoubleHeight = false,
  compact = false,
}: {
  windowHeight: any;
  isScrolledDoubleHeight: boolean;
  compact: boolean;
}) => {
  
  return (
    <div
      style={{
        background: "transparent",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
        <div className="name text-right mb-8 h-full flex-col justify-start items-end pr-8 pt-8">
            <h1
            style={{
            fontSize: "4rem",
            fontWeight: "500",
            color: "#888888",
            letterSpacing: "0.02em",
            lineHeight: "1.1",
            }}
            >
            Ayaan<br />Asish
            </h1>
        </div>
      <div
        style={{
          height: "50vh",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <div className="h-full p-8">
          <div className="swipebarContainer flex justify-center w-full">
            <div className="swipebar w-1/3 bg-[#FFFFFF] h-1 rounded-full"></div>
          </div>
          <div className="infoSection flex flex-col items-center gap-1 mt-8">
            <div className="salutationAndLinks flex justify-between items-center w-full">
              <div className="salutation text-sm italic">hi I am a student and <br /> an aerospace enthusiast</div>
              <div className="links flex items-center gap-4 text-white/50 justify-center">
                <a
                  href="https://github.com/ayaan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/githubnew.png"
                    alt="GitHub"
                    width={28}
                    height={28}
                  />
                </a>
                <a
                  href="https://linkedin.com/in/ayaan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/linkedinnew.png"
                    alt="LinkedIn"
                    width={45}
                    height={45}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="punchline">
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "500",
                textAlign: "left",
                marginTop: "1rem",
                color: "#888888",
              }}
            >
            Dreaming of rockets, building apps for now
            </h2>
          </div>

          <div className="networkingButtons">
            <Button
              variant="contained"
              sx={{
                marginTop: "2rem",
                background: "#60cc87",
                color: "#1c1c1c",
                border: "1.5px solid #60cc87",
                borderRadius: "30px",
                fontWeight: "bold",
                width: "100%",
                fontSize: "1.1rem",
                fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif",
                "&:hover": {
                  backgroundColor: "#4bbd74",
                  borderColor: "#4bbd74",
                  color: "#1c1c1c",
                },
              }}
            >
              Connect with Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMobile;
