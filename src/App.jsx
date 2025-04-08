import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { Link } from 'react-router-dom';
import Deck from './components/Deck';

const PageHeader = ({ title, link }) => (
  <div className="text-center">
    <p className="text-4xl font-bold text-[#000000] inline border-b-2 border-[#000000] sm:text leading-normal">
      {link ? (
        <Link to={link}>{title}</Link>
      ) : (
        title
      )}
    </p>
  </div>
);

const Home = () => (
  <div className="w-full h-screen bg-[#FFFAF0]">      
    <div className="flex flex-col items-center justify-center h-screen bg-[#FFFAF0]">
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





/*import React from 'react';
import './index.css';

const PageHeader = ({ title, link }) => (
  <div className="text-center">
    <p className="text-4xl font-bold text-[#000000] inline border-b-2 border-[#000000] sm:text leading-normal">
      {link ? (
        <a href={link}>{title}</a>
      ) : (
        title
      )}
    </p>
  </div>
);

function App() {
  return (
    <div className='w-full h-screen bg-[#FFFAF0]'>      
     <div className="flex flex-col items-center justify-center h-screen bg-[#FFFAF0]">
      <div className="max-w-[1000px] w-full pb-10">
        <PageHeader title="14 Kohdan pyykkilista" link="./Deck" /> 
      </div>
    </div>
    </div>
  )
}

export default App*/



/*import React from 'react';
//import Deck from './components/Deck'
import './index.css';

const PageHeader = ({ title }) => (
  <div className="text-center">
    <p className="text-4xl font-bold text-[#000000] inline border-b-2 border-[#000000] sm:text leading-normal">
      {title}
    </p>
  </div>
);

  function App() {

  return (
    <div className='w-full h-screen bg-[#FFFAF0]'>      
     <div className="flex flex-col items-center justify-center h-screen bg-[#FFFAF0]">
      <div className="max-w-[1000px] w-full pb-10">
        <PageHeader title="14 Kohdan pyykkilista" /> 
     
    </div>
    </div>
    </div>
  )
}

export default App*/