
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componunts/home';
import Header from './componunts/header';
import About from './componunts/about';
import Contact from './componunts/contact';
import Footer from './componunts/footer';
import Service from './componunts/service';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes className="mt-[95px]">
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path="/services" element={<Service/>}/>
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
