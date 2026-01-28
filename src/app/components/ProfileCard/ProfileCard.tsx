import Image from "next/image";
import Button from "@mui/material/Button";
import contentData from "@/data/content.json";

const ProfileCard = ({
  windowHeight = null
}: {
  windowHeight: any;
}) => {
  const minH = 60;
  const maxH = typeof window !== "undefined" ? window.innerHeight : 800;
  const calculateHeight = (windowHeight: any): number => {
    console.log("Calculating height with windowHeight:", windowHeight);
    if (typeof windowHeight === "number" && windowHeight !== 0) {
      return windowHeight;
    }
    if (typeof window !== "undefined") {
      return window.innerHeight;
    }
    return 800;
  };

  const h = calculateHeight(windowHeight);
  // clamp height for calculations
  const clampedH = Math.max(minH, Math.min(h, maxH));
  // normalized [0..1]
  const t = (clampedH - minH) / (maxH - minH);

  // image scales between min and max sizes
  const imgMax = 180; // regular max on mobile
  const imgMin = 48; // smallest image at min height
  const imgSize = Math.round(imgMin + t * (imgMax - imgMin));

  // when near the minimum height use the compact horizontal layout
  const compactThreshold = minH + 20; // small cushion above min
  const isFullSize = h && h >= maxH / 2; // near max height
  const isSubCompact = h && h < maxH / 2 && h > compactThreshold; // midpoint height

  return (
    <div
      className="text-[#d1d1d1] w-full flex flex-col items-center justify-center p-12 sticky top-0"
      style={{
        height: "100dvh",
      }}
    >
      <div
        className={"profileContainer w-full flex flex-col items-center justify-center p-12 2xl:p-18 md:gap-4 h-full 2xl:h-3/4 2xl:gap-6"}
        style={{ 
          background: "rgba(30, 31, 32, 0.1)",
          backdropFilter: "blur(4px) saturate(180%)",
          WebkitBackdropFilter: "blur(4px) saturate(180%)",
          border: "1.5px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "16px",
          width: "100%",
        }}
      >
        {/* COMPACT HORIZONTAL LAYOUT (image - name - button) */}
        <>
          <div className="name_heading flex justify-between w-full items-center">
            <div
                className="nameSection tracking-tight"
                style={{
                  fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif",
                  fontSize: "40px",
                  fontWeight: "600",
                  letterSpacing: "0.075em",
                }}
              >
                {contentData.profile.name}
              </div>
              <div
                className="titleSection font-semibold mt-2"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.05em",
                  fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif",
                }}
              >
                {contentData.profile.title} <br /> {contentData.profile.subtitle}
              </div>
            </div>

            <div className="profileImage w-full relative flex justify-center ">
              <img
                src="/ayaan_port.JPG"
                className="object-cover shadow-lg rounded-2xl"
                style={{
                  boxShadow: "0 4px 24px 0 rgba(60, 220, 135, 0.10)",
                  background: "rgba(255,255,255,0.18)",
                  backdropFilter: "blur(4px)",
                  width:"100%",
                  aspectRatio: "1 / 1",
                }}
              />
            </div>

            <div className="infoSection flex flex-col items-center gap-1 mb-4 mt-4">
              {/* <p
                className="text-xl mb-3"
                style={{
                  letterSpacing: "0.05em",
                  textShadow: "0 1px 8px rgba(60,220,135,0.08)",
                }}
              >
                {contentData.profile.email}
              </p> */}
              <p
                style={{
                  letterSpacing: "0.05em",
                  textAlign: "center",
                  color: "rgb(135 135 135)",
                }}
                className="text-2xl"
              >
                {contentData.profile.school}
              </p>
              <div className="mt-4 flex items-center gap-4 text-white/50">
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

            <div className="hireMeButton w-full">
              <Button
                variant="contained"
                href={'#connect'}
                sx={{
                  background: "#60cc87",
                  color: "#1c1c1c",
                  border: "1.5px solid #60cc87",
                  zIndex: 1000,
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
                }}
                disableElevation
              >
                {contentData.buttons.connect}
              </Button>
            </div>
          </>
      </div>
    </div>
  );
};

export default ProfileCard;
