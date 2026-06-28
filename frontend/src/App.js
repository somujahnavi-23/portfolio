import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import CaseStudy from "@/pages/CaseStudy";

const Portfolio = () => {
  const location = useLocation();

  // Support /#section navigation when returning from a case study.
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <div className="App bg-black min-h-screen">
      <div className="grain" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:slug" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
