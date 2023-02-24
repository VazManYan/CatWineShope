import './App.css';
import Home from './pages/Home';
import Story from './pages/Story';
import Visit from './pages/Visit';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">  
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/story" element = {<Story/>}/>
            <Route path="/visit" element= {<Visit/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
