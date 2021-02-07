import React, {createContext, useState} from 'react';
import GsheetUrlInput from "./containers/GsheetUrlInput";
import './App.css';

export const TechRadarContext = createContext({});

function App() {
  const [url, setUrl] = useState();

  return (
    <TechRadarContext.Provider  value={{url, setUrl}} className="App">
      <header className="tech-radar-header">
        <h1>React + Google sheet : Tech Radar</h1>
        <GsheetUrlInput />
      </header>
      <section className='tech-radar-section'>

      </section>
    </TechRadarContext.Provider>
  );
}

export default App;
