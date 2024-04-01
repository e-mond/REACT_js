import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Items from "./pages/Items";
import Details from "./pages/Details";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'; 

function App() {

  return (
    <BrowserRouter>
    <Navbar />
  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:id" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
