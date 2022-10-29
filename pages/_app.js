import React, { useEffect } from 'react';

//import styles
import '../styles/globals.css';
import '../styles/app.scss';
// import components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import FontAwesome
// import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// config.autoAddCss = false;


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const scrollHandler = e => {
      if (window.scrollY > 120) {
        document.querySelector('header').classList.add("active");
        console.log('window.scrollY', window.scrollY);
      } else {
        document.querySelector('header').classList.remove("active");
      }
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
