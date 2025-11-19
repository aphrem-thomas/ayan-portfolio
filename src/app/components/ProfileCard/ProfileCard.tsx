import Image from "next/image";
import Button from "@mui/material/Button";

const ProfileCard = ({ windowHeight=null }: { windowHeight: any }) => {
    const minH = 60;
    const maxH = typeof window !== "undefined" ? window.innerHeight : 800;
    const h =
        typeof windowHeight === "number"
            ? windowHeight === 0? typeof window !== "undefined" ? window.innerHeight : 800 : windowHeight
            : typeof window !== "undefined"
            ? window.innerHeight
            : 800;
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
    const isFullSize = h && h >= (maxH / 2); // near max height
    const isCompact = h <= compactThreshold;
    const isSubCompact = h && h < (maxH / 2) && h > compactThreshold; // midpoint height

    return (
        <div className="text-[#d1d1d1] w-full p-8 md:h-screen flex flex-col items-center fixed md:relative"
            style={{
                zIndex: windowHeight < 150 ? 10 : -1,
            }}
        >
            <div
                className={`profileContainer rounded-[24px] w-full ${
                    isCompact ? "flex-row items-center justify-between px-4 py-2" : "flex flex-col items-center justify-center p-8 gap-6"
                }`}
                style={{
                    border: "1.5px solid rgba(255,255,255,0.25)",
                    boxShadow: "0 4px 32px 0 rgba(60,220,135,0.10)",
                    background: "rgba(255,255,255,0.10)",
                    backdropFilter: "blur(5px) saturate(180%)",
                    WebkitBackdropFilter: "blur(5px) saturate(180%)",
                    borderWidth: "1.5px",
                    height: !windowHeight ? "100vh" : `${windowHeight}px`,
                }}
            >
                {/* COMPACT HORIZONTAL LAYOUT (image - name - button) */}
                {isCompact && (
                    <>
                        <div className="flex items-center gap-3">
                            <img
                                src="/ayaan_port.JPG"
                                alt="Ayaan"
                                style={{
                                    width: imgSize,
                                    height: imgSize,
                                    objectFit: "cover",
                                    borderRadius: "9999px",
                                    border: "3px solid rgba(255,255,255,0.6)",
                                    boxShadow: "0 4px 20px rgba(60,220,135,0.08)",
                                    background: "rgba(255,255,255,0.12)",
                                }}
                            />
                            <div style={{ lineHeight: 1 }} className="flex flex-col">
                                <div
                                    className="font-extrabold"
                                    style={{
                                        fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif",
                                        fontSize: Math.max(14, Math.round(18 * (imgSize / imgMax))) + "px",
                                    }}
                                >
                                    Ayaan
                                </div>
                                <div className="text-[11px] text-white/60" style={{ marginTop: 2 }}>
                                    Aerospace enthusiast
                                </div>
                            </div>
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
                                    width: "auto",
                                    minWidth: "88px",
                                    fontWeight: "bold",
                                    fontSize: "0.9rem",
                                    borderRadius: "24px",
                                    boxShadow: "0 2px 12px 0 rgba(60,220,135,0.12)",
                                }}
                                disableElevation
                            >
                                Let's Connect
                            </Button>
                        </div>
                    </>
                )} 
                { isFullSize &&(
                    /* TALL / REGULAR VERTICAL LAYOUT */
                    <>
                        <div className="name_heading flex justify-between w-full items-center">
                            <div
                                className="nameSection text-6xl font-extrabold tracking-tight"
                                style={{ fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif" }}
                            >
                                Ayaan
                            </div>
                            <div
                                className="titleSection ml-4 px-4 py-2 mt-3 text-sm font-semibold"
                                style={{
                                    letterSpacing: "0.05em",
                                    fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif",
                                }}
                            >
                                Aerospace <br /> enthusiast
                            </div>
                        </div>

                        <div className="profileImage w-full relative 2xl:mb-24 flex justify-center">
                            <img
                                src="/ayaan_port.JPG"
                                className="object-cover rounded-full border-4 border-white/60 shadow-lg"
                                style={{
                                    width: imgSize,
                                    height: imgSize,
                                    boxShadow: "0 4px 24px 0 rgba(60, 220, 135, 0.10)",
                                    background: "rgba(255,255,255,0.18)",
                                    backdropFilter: "blur(4px)",
                                }}
                            />
                        </div>

                        <div className="infoSection flex flex-col items-center gap-1 mb-4 mt-8">
                            <p
                                className="text-xl mb-3"
                                style={{ letterSpacing: "0.05em", textShadow: "0 1px 8px rgba(60,220,135,0.08)" }}
                            >
                                ayaan.asish@gmail.com
                            </p>
                            <p style={{ letterSpacing: "0.05em", textAlign: "center", color:"#60cc87" }} className="text-2xl">
                                Student at WCSS, Ottawa
                            </p>
                            <div className="mt-4 flex items-center gap-4 text-white/50">
                                <a
                                    href="https://github.com/ayaan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image src="/github.png" alt="GitHub" width={28} height={28} style={{ filter: "opacity(0.7)" }} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/ayaan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image style={{ filter: "opacity(0.7)" }} src="/linkedin.svg" alt="LinkedIn" width={45} height={45} />
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
                                    zIndex:1000,
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
                                Let's Connect
                            </Button>
                        </div>
                    </>
                )}
                {
                    /* SUB-COMPACT MIDWAY LAYOUT (image - name - button stacked) */
                isSubCompact && (
                    <div className="flex flex-col items-center gap-4">
                        <div className="imageAndName flex items-center gap-2">
                        <img
                            src="/ayaan_port.JPG"
                            alt="Ayaan"
                            style={{
                                width: imgSize,
                                height: imgSize,
                                objectFit: "cover",
                                borderRadius: "9999px",
                                border: "3px solid rgba(255,255,255,0.6)",
                                boxShadow: "0 4px 20px rgba(60,220,135,0.08)",
                                background: "rgba(255,255,255,0.12)",
                            }}
                        />
                        <div
                            className="font-extrabold text-4xl"
                            style={{
                                fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif",
                                
                            }}
                        >
                            Ayaan
                            <br/>
                            <span
                                className="text-sm font-semibold  px-3 py-1 rounded-full mt-2 inline-block"
                                style={{
                                    letterSpacing: "0.05em",
                                    fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif",
                                    backdropFilter: "blur(8px)",
                                    WebkitBackdropFilter: "blur(8px)",
                                }}
                            >
                                Aerospace enthusiast
                            </span>
                        </div>
                        </div>
                        <div className="infoSection flex flex-col items-center gap-1 mb-4">
                            <p
                                className="text-xl mb-3"
                                style={{ letterSpacing: "0.05em", textShadow: "0 1px 8px rgba(60,220,135,0.08)" }}
                            >
                                ayaan.asish@gmail.com
                            </p>
                        </div>
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
                                width: "auto",
                                minWidth: "88px",
                                fontWeight: "bold",
                                fontSize: "0.9rem",
                                borderRadius: "24px",
                                boxShadow: "0 2px 12px 0 rgba(60,220,135,0.12)",
                            }}
                            disableElevation
                        >
                            Let's Connect
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileCard;
