import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/Sections/About";
import Hero from "./components/Sections/Hero";
import Project from "./components/Sections/Project";
import Skill from "./components/Sections/Skill";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Skill />
            <About />
            <Project />
            <Footer />
        </>
    );
}

export default App;
