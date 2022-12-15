import { React } from 'react';
import Header from './components/Header/Header';
import './App.sass';
import Main from './components/Main/Main';
import Deal from './components/Deal/Deal';
import Gallery from './components/Gallery/Gallery';
import Products from './components/Products/Products';
import Reviews from './components/Reviews/Reviews';
import Shop from './components/Shop/Shop';
import News from './components/News/News';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Deal />
      <Gallery />
      <Products />
      <Reviews />
      <Shop />
      <News />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
