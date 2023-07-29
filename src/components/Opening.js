import Home from "../Home_page/Components/Home";
import About from "../Home_page/Components/About";
import Work from "../Home_page/Components/Work";
import Testimonial from "../Home_page/Components/Testimonial";
import Contact from "../Home_page/Components/Contact";
import Footer from "../Home_page/Components/Footer";

import "./Opening.css"

function Opening() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default Opening;