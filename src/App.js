import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Service from './components/Service';



function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Portfolio />
        <Pricing />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
