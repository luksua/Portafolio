import { useState } from 'react';
import { BackgroundGrid } from './components/BackgroundGrid';
import { IntroAnimation } from './components/IntroAnimation';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { TechStack } from './sections/TechStack';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { Certifications } from './sections/Certifications';
import { Languages } from './sections/Languages';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [introCompleted, setIntroCompleted] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FAF9FB] text-[#1C1A1F] selection:bg-[#B8A8C1]/30 selection:text-[#4B3557]">
      {/* Intro Animation Overlay */}
      {!introCompleted && (
        <IntroAnimation onComplete={() => setIntroCompleted(true)} />
      )}

      {/* Subtle Canva-inspired pastel shapes */}
      <BackgroundGrid />

      {/* Clean Minimalist Sticky Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Languages />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
