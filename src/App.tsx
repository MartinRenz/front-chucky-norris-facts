import { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Loading from './components/LoadingIcon';
import QuoteArea from './components/QuoteArea';

import { getRandomFact } from './api/facts_api';
import chuckyNorrisImg from "./assets/chuck_norris_img.png";

function App() {
  const [fact, setFact] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  const colorClasses = {
    pink: 'bg-pink-100 border-pink-500',
    blue: 'bg-blue-100 border-blue-500',
    green: 'bg-green-100 border-green-500'
  };

  const [color, setColor] = useState<string>(colorClasses.pink);

  const handleColor = () => {
    setColor(prevColor => {
      console.log(prevColor);
      switch (prevColor) {
        case colorClasses.pink:
          return colorClasses.blue;
        case colorClasses.blue:
          return colorClasses.green;
        case colorClasses.green:
          return colorClasses.pink;
        default:
          return colorClasses.pink;
      }
    });
  }

  const getFact = async () => {
    setLoading(true);
    const response = await getRandomFact();
    handleColor();
    setFact(response.value);
    setLoading(false);
  }

  useEffect(() => {
    getFact();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <nav className="bg-amber-950 h-16"></nav>
      <div className="flex-grow flex flex-col justify-center items-center">
        <img src={chuckyNorrisImg} alt="Chuck Norris Face" className="w-40 h-auto mb-5 cursor-pointer transition-transform duration-600 ease-in-out hover:animate-spinAnimation" />
        <header className="font-rowdies text-center text-5xl text-amber-950 mb-5">CHUCK NORRIS FACTS</header>
        <div className="min-h-16 mb-4 flex items-center justify-center">
          {
            isLoading
              ? <Loading />
              : <QuoteArea quote={fact} color={color} />
          }
        </div>
        <Button title="Search Facts" onClick={getFact} />
      </div>
      <footer className="bg-amber-950 h-16 flex items-center justify-center">
        <div className="text-white">Created by <a href="https://www.linkedin.com/in/mártin-de-moura-renz-170113194/" target="_blank" rel="noopener noreferrer">Mártin Renz</a></div>
      </footer>
    </div>
  );
}

export default App;
