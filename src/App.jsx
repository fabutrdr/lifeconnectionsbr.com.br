import Carousel from './components/Carousel';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Promotion from './components/Promotion';

function App() {

  return (
    <>
      <Navbar id="#inicio" />
      <Carousel />
      <Promotion />
      <Contato id="#contato" />
      <Footer />
    </>
  )
}

export default App;
