import CarouselMain from './assets/Main/CarouselMain/CarouselMain.jsx';
import SocialMenu from './assets/SocialMenu/SocialMenu.jsx';
import Servicios from './assets/Main/Servicios/Servicios.jsx';
import Nosotros from './assets/Main/Nosotros/Nosotros.jsx';
import Header from './assets/Header/Header.jsx';
import Footer from './assets/Footer/Footer.jsx';
import './App.css';

function App() {

  return (
    <div className='app'>


      {/*  header  */}

      <header>

        <Header />

      </header>

      {/*  main  */}

      <main>

        <CarouselMain />

        <Nosotros />

        <Servicios />

      </main>

      {/*  footer  */}

      <footer>

        <Footer />

      </footer>

    </div>
  )
}

export default App
