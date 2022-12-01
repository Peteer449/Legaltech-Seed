import Navbar from "./NavAndFooter/Navbar";
import Footer from "./NavAndFooter/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home/Home";
import Contenido from "./contenido/Contenido";
import NuestrasActividades from "./nuestrasActividades/nuestrasActividades";
import QuienesSomos from "./quienesSomos/QuienesSomos";
import SeParte from "./seParte/SeParte";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Contenido" element={<Contenido/>}/>
          <Route path="/NuestrasActividades" element={<NuestrasActividades/>}/>
          <Route path="/QuienesSomos" element={<QuienesSomos/>}/>
          <Route path="/SeParte" element={<SeParte/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;