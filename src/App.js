import './App.css';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './Pages/Banner';
import Header from './Pages/Header';
import Main from './Pages/Main';
import BackToTopBtn from './Components/BackToTopBtn';
import { useState, useEffect } from 'react';

function App() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY)
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY)
      })
    }
  }, [scroll])

  return (
    <>
      <Header scroll={scroll} />
      <Banner />
      <Main />
      <BackToTopBtn scroll={scroll} />
    </>
  );
}

export default App;
