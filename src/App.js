import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Timeline from './components/Timeline';
let data = require("./data/events.json");

function App() {
  return (
    <div className="App">
        <Header/>
        <MainContent>
          <Timeline data={data}/>
        </MainContent>
    </div>
  );
}

export default App;
