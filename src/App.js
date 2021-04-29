import './css/index.css';
import Header from './Components/Header/index.js';
import Footer from './Components/Footer/index.js';
import MainContent from './Components/MainContent/index.js';
import ThemeProvider from './Components/ThemeProvider/index.js';
import Timeline from './Components/Timeline/index.js';
import { ThemeContext } from './Contexts/ThemeContext';
import { ThemeDetector } from './Utils/ThemeDetector';
import React, { useState } from 'react';
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
