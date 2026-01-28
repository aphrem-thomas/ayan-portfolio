import { Button, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import React, { RefObject, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import contentData from '@/data/content.json';
import { profile } from 'console';
import DetailsModal from '../DetailsModal/DetailsModal';

// Global accent color
const ACCENT_COLOR = '#60cc87';

interface MainProps {
  containerRef: RefObject<HTMLDivElement | null>;
}

const MainDsk: React.FC<MainProps> = ({containerRef}) => {
    const projects = contentData.projects.items;
    const [detailsModal, setDetailsModal] = useState<any>(null);
    useEffect(() => {
    AOS.init({
      // Optional configuration options
      duration: 1000, // values from 0 to 3000, step 50ms
      once: false, // whether animation should happen only once - default
    });
    // Call refresh to recalculate positions if content changes dynamically
    AOS.refresh(); 
  }, []);

    return (
        <div
          ref={containerRef}
          onScroll={()=>console.log("scrolling main container")}
          className="md:p-8 w-full overflow-y-auto mr-[100px] scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
            msOverflowStyle: "none", // IE and Edge
            scrollbarWidth: "none", // Firefox
            fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif",
            zIndex:99,
          }}
        >
            {/* Home Section*/}
            <section
              id="home"
              className="hidden md:flex section-height md:mb-8 flex-col justify-center items-start px-12 md:rounded-2xl shadow-lg"
            >
              <div 
                className="flex flex-col gap-8"
                data-aos="fade-up"
              >
                <h1
                  className="text-8xl 2xl:text-[10rem] tracking-tight"
                  style={{
                    fontFamily: "'Poppins', 'Montserrat', 'Inter', sans-serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {contentData.home.greeting}{" "}<span style={{ color: ACCENT_COLOR }}>{contentData.profile.name}</span>{","}
                </h1>
                <p data-aos="fade-left"className="text-6xl 2xl:text-[6rem] mt-6 text-white/50">
                    {contentData.mobile.punchline}
                </p>
              </div>
            </section>

          {/* About Me Section desktop only */}
            <section
            id="about"
            data-aos="fade-up"
            className="section-height mb-8 flex flex-col justify-center items-start px-12 shadow-lg"
            >
            <h2 className="text-6xl font-bold mb-4" style={{ color: ACCENT_COLOR }}>About Me</h2>
            <p data-aos="fade-left" className="text-white text-lg mb-4 max-w-xl">
              I’m a developer with a background in aerospace engineering. My journey began with curiosity about flight and technology, leading me to combine both passions in innovative projects. I enjoy collaborating, learning, and solving real-world problems through code.
            </p>
            <ul data-aos="fade-left" className="list-disc pl-6 text-white">
              <li>React, Next.js, TypeScript, Node.js</li>
              <li>UI/UX Design & Prototyping</li>
              <li>Cloud & DevOps Enthusiast</li>
              <li>Open Source Contributor</li>
            </ul>
            </section>

          {/* Projects Section */}
            <section
            id="projects"
            className="section-height mb-8 flex flex-col justify-center items-start p-12 shadow-lg"
            >
              <h2 data-aos="fade-up" className="text-6xl font-bold mb-12" style={{ color: ACCENT_COLOR }}>{contentData.projects.title}</h2>
            <div>
              <Grid container spacing={4}>
                {projects.map((p, idx) => (
                  <Grid size={{ xs: 12, sm: 6, md: 6 }} key={idx}>
                    <Card
                      data-aos="fade-up"
                       onClick={() => setDetailsModal(p)}
                      sx={{
                        backgroundColor: "transparent",
                        color: "#ffffff",
                        borderRadius: 3,
                        boxShadow: 6,
                        cursor: "pointer",
                        border: "1px solid #414345",
                        height: "100%",
                        transformOrigin: "center",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px) scale(1.02)",
                          boxShadow: 12,
                          borderColor: ACCENT_COLOR,
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="180"
                        image={p.image}
                        alt={`${p.title} image`}
                        sx={{ objectFit: "cover" }}
                      />
                      <CardContent>
                        <Typography
                          variant="h6"
                          sx={{ color: ACCENT_COLOR, fontWeight: 700 }}
                        >
                          {p.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#e0e0e0", mt: 1 }}>
                          {p.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
            </section>

            {/* Education Section */}
          <section
            id="education"
            className="section-height mb-8 flex flex-col justify-center items-start px-12"
          >
            <div
            >
              <h2 className="text-6xl font-bold mb-6" style={{ color: ACCENT_COLOR }}>{contentData.education.title}</h2>
              <div className="relative pl-8"
              >
                {/* Timeline vertical line */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] " style={{ left: '15px', backgroundColor: ACCENT_COLOR }}></div>
                
                {contentData.education.items.map((edu, idx) => (
                  <div key={idx} className="relative pb-12 last:pb-0" data-aos="fade-left" data-aos-delay={idx * 100}>
                    {/* Timeline node/milestone */}
                    <div 
                      className="absolute left-0 w-8 h-8 rounded-full border-4 bg-[#232526]"
                      style={{ 
                        borderColor: ACCENT_COLOR,
                        left: '-33px',
                        top: '4px'
                      }}
                    >
                      <div className="absolute inset-2 rounded-full" style={{ backgroundColor: ACCENT_COLOR }}></div>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-12">
                      <h3 className="text-2xl font-semibold" style={{ color: ACCENT_COLOR }}>{edu.institution}</h3>
                      <span className="text-white text-sm">{edu.period}</span>
                      <p className="text-white mt-2">
                        {edu.degree} - {edu.fieldOfStudy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section
            id="achievements"
            className="section-height mb-8 flex flex-col justify-center items-start px-12 bg-[#232526] md:bg-transparent shadow-lg"
          >
            <div
            >
              <h2 className="text-6xl font-bold mb-12" style={{ color: ACCENT_COLOR }}>{contentData.achievements.title}</h2>
              <ul className="list-disc pl-6 text-white text-lg">
                {contentData.achievements.items.map((achievement, idx) => (
                  <li key={idx} data-aos="fade-up" data-aos-delay={idx * 100} >
                    <span className="font-semibold" style={{ color: ACCENT_COLOR }}>{achievement.label}</span> {achievement.description}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            className="section-height md:mb-8 flex flex-col justify-center items-start px-12"
          >
            <div
            >
              <h2 className="text-6xl font-bold mb-6" style={{ color: ACCENT_COLOR }}>{contentData.experience.title}</h2>
              <div className="space-y-6"
              >
                {contentData.experience.items.map((exp, idx) => (
                  <div key={idx} data-aos="fade-left" data-aos-delay={idx * 100} >
                    <h3 className="text-2xl font-semibold" style={{ color: ACCENT_COLOR }}>{exp.title}</h3>
                    <span className="text-white text-sm">{exp.period}</span>
                    <p className="text-white mt-2">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Connect With Me Section */}
          <section
            id="connect"
            className="section-height mb-8 flex flex-col justify-center items-start px-12 md:rounded-2xl shadow-lg"
          >
            <div className="w-full">
              <h2 className="text-6xl font-bold mb-6" style={{ color: ACCENT_COLOR }}>Connect With Me</h2>
              <form className="w-full max-w-2xl space-y-4" 
                data-aos="fade-up"
              onSubmit={(e) => { 
              e.preventDefault(); 
              const formData = new FormData(e.currentTarget);
              const googleFormData = new FormData();
              googleFormData.append('entry.219776786', formData.get('name') as string);
              googleFormData.append('entry.413775452', formData.get('phone') as string);
              googleFormData.append('entry.1226142718', formData.get('email') as string);
              googleFormData.append('entry.539297120', formData.get('message') as string);
              
              fetch('https://docs.google.com/forms/d/e/1FAIpQLSfLDvQcy6Vr5VKwxiwYFn7A1CnMmAc4MO3mVEXdy4PEZGAkXw/formResponse', {
                method: 'POST',
                mode: 'no-cors',
                body: googleFormData
              }).then(() => {
                alert('Thank you for reaching out! I will get back to you soon.');
                e.currentTarget.reset();
              }).catch((error) => {
                console.error('Error!', error.message);
              });
            }}>
              <div>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-[#414345] text-white rounded-lg border focus:outline-none focus:ring-2"
                  style={{ borderColor: ACCENT_COLOR, outlineColor: ACCENT_COLOR }}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  style={{ borderColor: ACCENT_COLOR, outlineColor: ACCENT_COLOR }}
                  className="w-full px-4 py-3 bg-[#414345] text-white rounded-lg border focus:outline-none focus:ring-2"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  style={{ borderColor: ACCENT_COLOR, outlineColor: ACCENT_COLOR }}
                  className="w-full px-4 py-3 bg-[#414345] text-white rounded-lg border focus:outline-none focus:ring-2"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  style={{ borderColor: ACCENT_COLOR, outlineColor: ACCENT_COLOR }}
                  className="w-full px-4 py-3 bg-[#414345] text-white rounded-lg border focus:outline-none focus:ring-2 resize-none"
                  placeholder="Your message"
                />
              </div>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: ACCENT_COLOR,
                  color: "#232526",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  padding: "12px 32px",
                  fontSize: "1rem",
                  fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif",
                  "&:hover": {
                    backgroundColor: "#4bbd74",
                  },
                }}
              >
                Send Message
              </Button>
            </form>
            </div>
          </section>
  {detailsModal && <DetailsModal details={detailsModal} onClose={() => setDetailsModal(null)} />}
        </div>
    );
};

export default MainDsk;