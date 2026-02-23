import { Button, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import React, { RefObject, useEffect, useState } from 'react';
import contentData from '@/data/content.json';
import { profile } from 'console';
import DetailsModal from '../DetailsModal/DetailsModal';
import { motion } from 'framer-motion';

interface MainProps {
  containerRef: RefObject<HTMLDivElement | null>;
}

const MainMob: React.FC<MainProps> = ({containerRef}) => {
    const ACCENT_COLOR = '#60cc87';
    const projects = contentData.projects.items;
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
    const transitionValue = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    const [detailsModal, setDetailsModal] = useState<any>(null);

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
              className="homeSection md:hidden section-height flex flex-col justify-center items-start px-12 shadow-lg"
              style={{
                background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, #232526 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <div className="flex flex-col gap-8 text-white">
                <motion.h1
                  className="text-8xl 2xl:text-[10rem] tracking-tight"
                  style={{
                    fontFamily: "'Poppins', 'Montserrat', 'Inter', sans-serif",
                    letterSpacing: "-0.02em",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {contentData.home.greeting}{" "}<span className='text-[#60cc87]'>{contentData.profile.name}</span>{","}
                </motion.h1>
                <motion.p 
                  className="text-lg text-white max-w-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    {contentData.home.introduction}
                </motion.p>
              </div>
            </section>

          {/* About Me Section desktop only
            <section
            id="about"
            className="section-height md:mb-8 flex flex-col justify-center items-start px-12 shadow-lg"
            >
            <h2 className="text-4xl font-bold mb-4" style={{ color: ACCENT_COLOR }}>About Me</h2>
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
            {contentData.projects.showProjects && (
            <section
            id="projects"
            className="section-height md:mb-8 flex flex-col justify-center items-start p-12 bg-gradient-to-br from-[#232526] to-[#414345] md:bg-transparent shadow-lg"
            >
              <motion.h2 
                className="text-4xl font-bold mb-4" 
                style={{ color: ACCENT_COLOR }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >{contentData.projects.title}</motion.h2>
            <div>
              <Grid container spacing={4}>
                {projects.map((p, idx) => (
                  <Grid size={{ xs: 12, sm: 6, md: 6 }} key={idx}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <Card
                        onClick={() => setDetailsModal(p)}
                        sx={{
                          backgroundColor: "#232526",
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
                          image={p.thumbnail}
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
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </div>
            </section>)}


            {/* Education Section */}
          {contentData.education.showEducation && (
          <section
            id="education"
            className="section-height flex flex-col justify-center items-start p-12 bg-[#232526]"
          >
            <div
            >
              <motion.h2 
                className="text-6xl font-bold mb-6" 
                style={{ color: ACCENT_COLOR }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >{contentData.education.title}</motion.h2>
              <div className="relative pl-8"
              >
                {/* Timeline vertical line */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] " style={{ left: '15px', backgroundColor: ACCENT_COLOR }}></div>
                
                {contentData.education.items.map((edu, idx) => (
                  <div 
                    key={edu.degree} 
                    className="relative pb-12 last:pb-0"
                  >
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
                    <motion.div 
                      className="ml-12"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ delay: idx * 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <h3 
                        className="text-2xl font-semibold" 
                        style={{ color: ACCENT_COLOR }}
                      >{edu.institution}</h3>
                      <span 
                        className="text-white text-sm"
                      >{edu.period}</span>
                      <p 
                        className="text-white mt-2"
                      >
                        {edu.degree} - {edu.fieldOfStudy}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </section>)}

          {/* Achievements Section */}
          {contentData.achievements.showAchievements && (
          <section
            id="achievements"
            className="section-height md:mb-8 flex flex-col justify-center items-start px-12 bg-[#232526] md:bg-transparent shadow-lg"
          >
            <div
            >
              <motion.h2 
                className="text-4xl font-bold mb-4" 
                style={{ color: ACCENT_COLOR }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >{contentData.achievements.title}</motion.h2>
              <ul className="list-disc pl-6 text-white text-lg">
                {contentData.achievements.items.map((achievement, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2 + idx * 0.12, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <span className="font-semibold" style={{ color: ACCENT_COLOR }}>{achievement.label}</span> {achievement.description}
                  </motion.li>
                ))}
              </ul>
            </div>
          </section>)}

          {/* Experience Section */}
          {contentData.experience.showExperience && (
          <section
            id="experience"
            className="section-height md:mb-8 flex flex-col justify-center items-start px-12 bg-gradient-to-br from-[#232526] to-[#414345] md:rounded-2xl shadow-lg"
          >
            <div
            >
              <motion.h2 
                className="text-4xl font-bold mb-4" 
                style={{ color: ACCENT_COLOR }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >{contentData.experience.title}</motion.h2>
              <div className="space-y-6">
                {contentData.experience.items.map((exp, idx) => (
                  <div key={idx}>
                    <motion.h3 
                      className="text-2xl font-semibold" 
                      style={{ color: ACCENT_COLOR }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: idx * 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >{exp.title}</motion.h3>
                    <motion.span 
                      className="text-white text-sm"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: idx * 0.2 + 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >{exp.period}</motion.span>
                    <motion.p 
                      className="text-white mt-2"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: idx * 0.2 + 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      {exp.description}
                    </motion.p>
                  </div>
                ))}
              </div>
            </div>
          </section>)}

          {/* Connect With Me Section */}
          <section
            id="connect-mob"
            className="section-height md:mb-8 flex flex-col justify-center items-start px-12 bg-[#232526] md:rounded-2xl shadow-lg"
          >
              <h2 
                className="text-4xl font-bold mb-6" 
                style={{ color: ACCENT_COLOR }}
              >Connect With Me</h2>
              <form 
                className="w-full max-w-2xl space-y-4"
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
                  style={{ borderColor: ACCENT_COLOR, '--tw-ring-color': ACCENT_COLOR } as React.CSSProperties}
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
                  className="w-full px-4 py-3 bg-[#414345] text-white rounded-lg border focus:outline-none focus:ring-2"
                  style={{ borderColor: ACCENT_COLOR, '--tw-ring-color': ACCENT_COLOR } as React.CSSProperties}
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
                  className="w-full px-4 py-3 bg-[#414345] text-white rounded-lg border focus:outline-none focus:ring-2"
                  style={{ borderColor: ACCENT_COLOR, '--tw-ring-color': ACCENT_COLOR } as React.CSSProperties}
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
                  className="w-full px-4 py-3 bg-[#414345] text-white rounded-lg border focus:outline-none focus:ring-2 resize-none"
                  style={{ borderColor: ACCENT_COLOR, '--tw-ring-color': ACCENT_COLOR } as React.CSSProperties}
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
          </section>
                {detailsModal && <DetailsModal details={detailsModal} onClose={() => setDetailsModal(null)} />}
        </div>
    );
};

export default MainMob;