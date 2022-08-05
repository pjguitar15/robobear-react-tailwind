import Navbar from './components/Navbar';
import Hero from './sections/Hero'
import NextToHero from './sections/NextToHero';
import Support from './sections/Support';
import AllInOnePlatform from './sections/AllInOnePlatform';
import Pricing from './sections/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NextToHero />
      <Support />
      <AllInOnePlatform />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
