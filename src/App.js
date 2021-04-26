import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Timeline from './components/Timeline';
import ThemeProvider from './components/ThemeProvider';
let data = require("./data/events.json");

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header/>
        <MainContent>
          <Timeline data={data}/>
          <Footer/>
        </MainContent>
      </ThemeProvider>
    </div>
  );
}

export default App;
