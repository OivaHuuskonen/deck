
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { Link } from 'react-router-dom';
import Deck from './components/Deck';
import videoBg from './assets/SunRaysinForest.mp4';


const PageHeader = ({ title, link }) => (
  <div className="text-center">
    <p className="text-4xl font-normal text-[#FDFBD4] inline border-b-2 border-[#FDFBD4] sm:text leading-normal">
      {link ? (
        <Link to={link}>{title}</Link>
      ) : (
        title
      )}
    </p>
  </div>
);

/*const Home = () => (
  <div className="w-full h-screen bg-[#FFFAF0]">      
    <div className="flex flex-col items-center justify-center h-screen bg-[#FFFAF0]">
      <div className="max-w-[1000px] w-full pb-10">
        <PageHeader title="14 Kohdan pyykkilista" link="/deck" /> 
      </div>
    </div>
  </div>
);*/

const Home = () => (
  // 2. Pääkontti: Koko näyttö, suhteellinen asemointi videolle, piilottaa ylivuodon
  <div className="relative w-full h-screen overflow-hidden">
    {/* 3. Taustavideo */}
    <video
      autoPlay // Automaattinen toisto
      loop     // Toisto alusta loppuun tultua
      muted    // Mykistetty (pakollinen usein autoplaylle selaimissa)
      playsInline // Estää koko näytön tilan mobiililaitteilla (etenkin iOS)
      className="absolute top-0 left-0 w-full h-full object-cover -z-10" // Asemointi, koko, peitto ja taustalle vienti
      src={videoBg} // Videon lähde tuonnista
    >
      {/* Voit lisätä vaihtoehtoisia videolähteitä eri formaateille tägillä <source> */}
      Selaimesi ei tue video-tagia. {/* Fallback-teksti */}
    </video>

    {/* 4. Sisältökontti: Keskitetty, videon päällä */}
    {/* Lisätty relative ja z-10 varmistamaan, että sisältö on videon päällä */}
    {/* Poistettu bg-[#FFFAF0], koska video on taustana */}
    <div className="relative z-10 flex flex-col items-center justify-center h-screen">
      {/* Lisätty text-center tähän keskittämään PageHeader */}
      <div className="max-w-[1000px] w-full pb-10 text-center">
        <PageHeader title="14 Kohdan pyykkilista" link="/deck" />
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deck" element={<Deck />} />
      </Routes>
    </Router>
  );
}

export default App;


