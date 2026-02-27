import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatWeDo from './components/services/Services';

function App() {
  return (
    <div className="min-h-screen bg-deep">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
         <section id="WhatWeDo">
          <WhatWeDo />
        </section>
        
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        {/* <section id="pricing">
          <Pricing />
        </section> */}
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
