import CarouselMain from './assets/Main/CarouselMain/CarouselMain.jsx';
import SocialMenu from './assets/SocialMenu/SocialMenu.jsx';
import Servicios from './assets/Main/Servicios/Servicios.jsx';
import Nosotros from './assets/Main/Nosotros/Nosotros.jsx';
import Header from './assets/Header/Header.jsx';
import Footer from './assets/Footer/Footer.jsx';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Galeria from './assets/Pages/Galeria/Galeria.jsx';
import FotosGaleria  from './assets/Pages/Galeria/FotosGaleria/FotosGaleria.jsx';

function App() {

  return (
    <div className='app'>

      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={[<CarouselMain /> , <Nosotros /> , <Servicios />, ] } />
          <Route path="/galeria/" element={[ <Galeria/>] }/>
          <Route path='/bernal-sargento-cabral/'  element={<FotosGaleria />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      <SocialMenu className="zindex1000" />
    </div>
  )
}

export default App
