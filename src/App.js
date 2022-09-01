import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from 'react-social-icons';

import Events from "./pages/events";
import Hero from "./pages/hero";
import Navbar from "./components/navbar/index";
import Contact from "./pages/contact";
import ScrollToTop from './components/ScrollToTop';
import About from "./pages/about";
import Astrophotography from "./pages/astrophotography";
import Instruments from "./pages/instruments";
import NoPage from "./pages/NoPage";
import "./components/navbar/navbar.css"
import './App.css';

export default function App() {
  return (
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/instruments" element={<Instruments />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/astrophotography" element={<Astrophotography />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
