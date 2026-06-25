import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Qualifications from './components/Qualifications';
import WhoIsThisFor from './components/WhoIsThisFor';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Qualifications />
        <WhoIsThisFor />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
