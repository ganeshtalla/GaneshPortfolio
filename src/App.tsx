// import ListGroup from "./components/ListGroup";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import "./App.css";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import WorkEducationSection from "./components/WorkEducationSection";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="app-css">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <WorkEducationSection />
      <Projects />
      <Footer />
    </div>
  );
}
export default App;
