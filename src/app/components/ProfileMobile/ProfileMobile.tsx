import Image from "next/image";
import Button from "@mui/material/Button";
import { BBH_Sans_Bartle } from "next/font/google";
import contentData from "@/data/content.json";

const bbhSansBartle = BBH_Sans_Bartle({
  weight: ["400"],
  subsets: ["latin"],
});

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
        height:"100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        color: "white",
      }}
    >
        <div className="name text-right mb-8 flex-1 flex-col justify-start items-end pr-8 pt-8">
            <h1
            style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "rgba(0, 0, 0, 0.8)",
            letterSpacing: "0.02em",
            lineHeight: "0.6",
            }}
            className={bbhSansBartle.className}
            >
            {contentData.profile.name}<br />
            <span className="text-3xl">{contentData.profile.lastName}</span>
            </h1>
        </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <div className="p-8 max-h-0"
          style={{
              animation: 'heightExpand 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s forwards',
            }}>
          <div className="swipebarContainer flex justify-center w-full">
            <div className="swipebar w-1/3 bg-[#FFFFFF] h-1 rounded-full"></div>
          </div>
          <div className="infoSection flex flex-col items-center gap-1 mt-8"
          >
            <div className="salutationAndLinks flex justify-between items-center w-full">
              <div className="salutation text-sm italic">{contentData.mobile.salutation}</div>
              <div className="links flex items-center gap-4 text-white/50 justify-center">
                <a
                  href={contentData.profile.github}
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
                  href={contentData.profile.linkedin}
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
            {contentData.mobile.punchline}
            </h2>
          </div>

          <div className="networkingButtons flex h-[40px] mt-1 w-4/5">
            <Button
              variant="contained"
              href={'#connect-mob'}
              sx={{
                background: "#60cc87",
                color: "#1c1c1c",
                border: "1.5px solid #60cc87",
                borderRadius: "30px",
                fontWeight: "bold",
                fontSize: "14px",
                marginRight: "1rem",
                textTransform: "none",
                fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif",
                "&:hover": {
                  backgroundColor: "#4bbd74",
                  borderColor: "#4bbd74",
                  color: "#1c1c1c",
                },
              }}
            >
              {contentData.buttons.connectWithMe}
              <img src="/right-up.png" alt="arrow" style={{ marginLeft: "0.5rem", height:"100%"}} />
            </Button>
            <Button
              variant="outlined"
              href={'#projects-mob'}
              sx={{
                color: "#888888",
                border: "1.5px solid #888888",
                borderRadius: "30px",
                fontWeight: "bold",
                fontSize: "12px",
                textTransform: "none",
                fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif",
                "&:hover": {
                  color: "#888888",
                },
              }}
            >
              {contentData.buttons.viewProjects}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMobile;
