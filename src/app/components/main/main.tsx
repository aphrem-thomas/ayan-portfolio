import { Button, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import React, { RefObject, useEffect, useState } from 'react';
import contentData from '@/data/content.json';

interface MainProps {
  containerRef: RefObject<HTMLDivElement | null>;
}

const Main: React.FC<MainProps> = ({containerRef}) => {
    const projects = contentData.projects.items;
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
    const transitionValue = 'opacity 0.8s ease-out, transform 0.8s ease-out';

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => new Set(prev).add(entry.target.id));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
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
          {/* Home Section */}
            <section
              id="home"
              className="section-height md:mb-8 flex flex-col justify-center items-start px-12 md:rounded-2xl shadow-lg"
              style={{
                background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, #232526 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <div 
                className="flex flex-col gap-8"
                style={{
                  opacity: visibleSections.has('home') ? 1 : 0,
                  transform: visibleSections.has('home') ? 'translateY(0)' : 'translateY(40px)',
                  transition: transitionValue,
                }}
              >
                <h1
                  className="text-7xl font-extrabold tracking-tight"
                  style={{
                    background: "linear-gradient(180deg, #60cc87 0%, #ffffff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                    fontFamily: "'Poppins', 'Montserrat', 'Inter', sans-serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {contentData.home.greeting}
                </h1>
                <p className="text-lg text-white max-w-xl">
                    {contentData.home.introduction}
                </p>
                {/* <Button
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
                </Button> */}
              </div>
            </section>

          {/* About Me Section */}
            {/* <section
            id="about"
            className="section-height md:mb-8 flex flex-col justify-center items-start px-12 bg-[#232526] md:rounded-2xl shadow-lg"
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
            </section> */}

          {/* Projects Section */}
            <section
            id="projects"
            className="section-height md:mb-8 flex flex-col justify-center items-start p-12 bg-gradient-to-br from-[#232526] to-[#414345] md:rounded-2xl shadow-lg"
            >
              <h2 className="text-4xl font-bold text-[#60cc87] mb-4">{contentData.projects.title}</h2>
            <div
            style={{
                opacity: visibleSections.has('projects') ? 1 : 0,
                transform: visibleSections.has('projects') ? 'translateY(0)' : 'translateY(30px)',
                transition: transitionValue,
              }}>
              <Grid container spacing={4}>
                {projects.map((p, idx) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                    <Card
                      sx={{
                        backgroundColor: "#232526",
                        color: "#ffffff",
                        borderRadius: 3,
                        boxShadow: 6,
                        border: "1px solid #414345",
                        height: "100%",
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
                          sx={{ color: "#60cc87", fontWeight: 700 }}
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

          {/* Achievements Section */}
          <section
            id="achievements"
            className="section-height md:mb-8 flex flex-col justify-center items-start px-12 bg-[#232526] md:rounded-2xl shadow-lg"
          >
            <div
            >
              <h2 className="text-4xl font-bold text-[#60cc87] mb-4">{contentData.achievements.title}</h2>
              <ul className="list-disc pl-6 text-white text-lg"
                style={{
                  opacity: visibleSections.has('achievements') ? 1 : 0,
                  transform: visibleSections.has('achievements') ? 'translateY(0)' : 'translateY(30px)',
                  transition: transitionValue,
                }}>
                {contentData.achievements.items.map((achievement, idx) => (
                  <li key={idx}>
                    <span className="font-semibold text-[#60cc87]">{achievement.label}</span> {achievement.description}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            className="section-height md:mb-8 flex flex-col justify-center items-start px-12 bg-gradient-to-br from-[#232526] to-[#414345] md:rounded-2xl shadow-lg"
          >
            <div
            >
              <h2 className="text-4xl font-bold text-[#60cc87] mb-4">{contentData.experience.title}</h2>
              <div className="space-y-6"
              style={{
                opacity: visibleSections.has('experience') ? 1 : 0,
                transform: visibleSections.has('experience') ? 'translateY(0)' : 'translateY(30px)',
                transition: transitionValue,
              }}
              >
                {contentData.experience.items.map((exp, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl font-semibold text-[#60cc87]">{exp.title}</h3>
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
            className="section-height md:mb-8 flex flex-col justify-center items-start px-12 bg-[#232526] md:rounded-2xl shadow-lg"
          >
              <h2 className="text-4xl font-bold text-[#60cc87] mb-6">Connect With Me</h2>
              <form className="w-full max-w-2xl space-y-4" 
                style={{
                  opacity: visibleSections.has('connect') ? 1 : 0,
                  transform: visibleSections.has('connect') ? 'translateY(0)' : 'translateY(30px)',
                  transition: transitionValue,
                  width: '100%',
                }}
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
                  className="w-full px-4 py-3 bg-[#414345] text-white rounded-lg border border-[#60cc87] focus:outline-none focus:ring-2 focus:ring-[#60cc87]"
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
                  className="w-full px-4 py-3 bg-[#414345] text-white rounded-lg border border-[#60cc87] focus:outline-none focus:ring-2 focus:ring-[#60cc87]"
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
                  className="w-full px-4 py-3 bg-[#414345] text-white rounded-lg border border-[#60cc87] focus:outline-none focus:ring-2 focus:ring-[#60cc87]"
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
                  className="w-full px-4 py-3 bg-[#414345] text-white rounded-lg border border-[#60cc87] focus:outline-none focus:ring-2 focus:ring-[#60cc87] resize-none"
                  placeholder="Your message"
                />
              </div>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "#60cc87",
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
          </section>

        </div>
    );
};

export default Main;