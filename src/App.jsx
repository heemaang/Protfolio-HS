import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* Hero Section with Navbar */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        {/* About Section */}
        <About />

        {/* Experience Section */}
        <Experience />

        {/* Tech Section */}
        <Tech />

        {/* Projects/Works Section */}
        <Works />

        {/* Feedbacks Section - Currently commented out */}
        {/* <Feedbacks /> */}

        {/* Contact Section with StarsCanvas Background */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
