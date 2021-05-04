import React, { useState } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import ThemeProvider from './Components/ThemeProvider';
import Timeline from './Components/Timeline';
import { ThemeContext } from './Contexts/ThemeContext';
import { ThemeDetector } from './Utils/ThemeDetector';

import './css/index.css';
let data = require("./data/events.json");

function App() {
  const [theme, setTheme] = useState(ThemeDetector());

  return (
      <div className="App">
        <ThemeContext.Provider value={{theme, setTheme}}>
            <ThemeProvider>
              <Header/>
              <MainContent>
                <Timeline data={data}/>
                <Footer/>
              </MainContent>
            </ThemeProvider>
        </ThemeContext.Provider>
      </div>
  );
}

export default App;
