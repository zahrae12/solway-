import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero, NosActivites, NosInnovations, NosSolutions, Partenaires, Footer } from "./Sections";
import Nav from "./Components/Nav";
import About from "./Pages/About"; // Import About page
import Contact from "./Pages/Contact";
import Verifidsn from "./Pages/Verifidsn";
import VerifidsnPlus from "./Pages/VerifidsnPlus";
import { SynchHr } from "./Pages/SynchHr";
import Soldesk from "./Pages/Soldesk";
import SolwayHR from "./Pages/SolwayHR";
import SolwayInvoice from "./Pages/SolwayInvoice";
import SolwayAssociation from "./Pages/SolwayAssociation";
import OffreEmploi from "./Pages/OffreEmploi";
import { Candidatures } from "./Pages/Candidatures";
import NosMissions from "./Pages/NosMissions"
import VosMissions from"./Pages/VosMissions"
import CookieBanner from "./Components/CookiesBanner";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="overflow-x-hidden w-full">
            <main className="p-0 bg-gray-50">
          
              {/* Hero Section */}
              <section className="bg-white relative overflow-hidden">
                <Hero />
              </section>
          
              {/* Nos Activites Section */}
              <section className="relative overflow-hidden">
                {/* Decorative Dots */}
                <img
                  src="assets/icons/frame.svg"
                  alt="dots left"
                  className="hidden xl:block absolute -left-8 top-22 object-cover"
                />
                <img
                  src="assets/icons/frameleft.svg"
                  alt="dots right"
                  className="hidden xl:block absolute right-0 top-22 object-cover z-0"
                />
                <div className="relative z-10">
                  <NosActivites />
                </div>
              </section>
          
              {/* Nos Innovations Section */}
              <section className="relative overflow-hidden mt-6">
                {/* Decorative Dots */}
                <img
                  src="assets/icons/frame.svg"
                  alt="dots left"
                  className="hidden xl:block absolute left-0 top-72 object-cover -ml-4"
                />
                <img
                  src="assets/icons/frameleft.svg"
                  alt="dots right"
                  className="hidden xl:block absolute right-0 top-72 object-cover z-0"
                />
                <div className="relative z-10 md:mt-6">
                  <NosInnovations />
                </div>
              </section>
          
              {/* Nos Solutions Section */}
              <section className="relative overflow-hidden pt-24">
                {/* Decorative Dots */}
                <img
                  src="assets/icons/frame.svg"
                  alt="dots left"
                  className="hidden xl:block absolute left-0 top-60 object-cover"
                />
                <img
                  src="assets/icons/frameleft.svg"
                  alt="dots right"
                  className="hidden xl:block absolute right-0 top-60 object-cover z-0"
                />
                <div className="relative z-10">
                  <NosSolutions />
                </div>
              </section>
          
              {/* Partenaires Section */}
              <section className="bg-gray-50 mt-0">
                <Partenaires />
              </section>
          
              {/* Footer Section */}
              <section className="relative overflow-hidden">
                {/* Decorative Dots */}
                <img
                  src="assets/icons/frame.svg"
                  alt="dots left"
                  className="hidden xl:block absolute left-0 top-12 object-cover -ml-4"
                />
                <img
                  src="assets/icons/frameleft.svg"
                  alt="dots right"
                  className="hidden xl:block absolute right-0 top-12 object-cover z-0"
                />
                <div className="relative z-10 mt-10">
                  <Footer />
                </div>
              </section>
          
              
              
            </main>
          </div>
          
          }
        />
        
        {/* About Page */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/verifi-dsn" element={<Verifidsn />} />
        <Route path="/verifi-dsn-plus" element={<VerifidsnPlus />} />
        <Route path="/solway-synchronisation-hr" element={< SynchHr/>} />
        <Route path="/soldesk" element={< Soldesk/>} />
        <Route path="/solway-hr" element={< SolwayHR/>} />
        <Route path="/solway-invoice" element={<SolwayInvoice/>} />
        <Route path="/association-solway" element={<SolwayAssociation/>} />
        <Route path="/offres-emploi" element={<OffreEmploi/>} />
        <Route path="/candidatures" element={<Candidatures/>} />
        <Route path="/nos-missions" element={<NosMissions/>} />
        <Route path="/vos-missions" element={<VosMissions/>} />
      </Routes>
      {/* Cookie Banner */}
      <CookieBanner />
    </Router>
  );
}

export default App;
