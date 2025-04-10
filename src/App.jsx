
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { Link } from 'react-router-dom';
import Deck from './components/Deck';


const PageHeader = ({ title, link }) => (
  <div className="text-center">
    <p className="text-4xl font-normal text-[#E85A4F] inline border-b-2 border-[#8E8D8A] sm:text leading-normal">
      {link ? (
        <Link to={link}>{title}</Link>
      ) : (
        title
      )}
    </p>
  </div>
);

const Home = () => (
  <div className="w-full h-screen bg-[#EAE7DC]">      
    <div className="flex flex-col items-center justify-center h-screen bg-[#EAE7DC]">
      <div className="max-w-[1000px] w-full pb-10">
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


