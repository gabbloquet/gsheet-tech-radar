import React, {createContext, useState} from 'react';
import UrlInput from "./containers/UrlInput";
import TechRadar from "./containers/TechRadar";
import './App.css';

export const TechRadarContext = createContext({});

function App() {
  const [url, setUrl] = useState();

  return (
    <TechRadarContext.Provider  value={{url, setUrl}} className="App">
      <header className="tech-radar-header">
        <h1>React + Google sheet : Tech Radar</h1>
        <UrlInput label='Google sheet URL' setUrl={setUrl}/>
      </header>
      <section className='tech-radar-section'>
        <TechRadar />
      </section>
    </TechRadarContext.Provider>
  );
}

export default App;
