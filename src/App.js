import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FeaturedProject from "./components/FeaturedProject";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Landing from "./components/landing";
import Projects from "./components/projects";
import Services from "./components/services";
import Interests from "./components/Interests";
import Experience from "./components/Experience";
import Offer from "./components/offer";
function RoutMe() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Services/offer" element={<Offer />} />
          <Route path="/Interests" element={<Interests />} />
          <Route path="/Experiences" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
function Home() {
  return (
    <>
      <Landing />
      <FeaturedProject />
    </>
  );
}

function App() {
  return (
    <>
    {/* comment */}
      <NavBar />
      <RoutMe />
      <Footer />
    </>
  );
}

export default App;
