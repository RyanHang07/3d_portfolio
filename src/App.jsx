import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Hero from "./modules/landing/Hero"
import ShowcaseSection from "./modules/landing/ShowcaseSection"
import LandingTechStack from "./modules/landing/LandingTechStack"
import Testimonials from "./modules/landing/Testimonials"
import Contact from "./modules/landing/Contact"
import Footer from "./components/Footer"
import Projects from "./modules/projects/Projects";
import ScrollMemo from "./components/ScrollMemo";
import TechStack from "./modules/techstack/TechStack";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="border-b border-white-50 w-7xl mx-auto mt-10 mb-8"/>
              <ScrollMemo />
              <ShowcaseSection />
              <div className="border-b border-white-50 w-7xl mx-auto mt-10 mb-8"/>
              {/* <FeatureCards /> */}
              {/* <ExperienceSection /> */}
              <LandingTechStack />
              <div className="border-b border-white-50 w-7xl mx-auto mt-10 mb-8"/>
              <Testimonials />
              <div className="border-b border-white-50 w-7xl mx-auto mt-10 mb-8"/>
              <Contact />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/techstack" element={<TechStack />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App