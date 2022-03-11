import React, { useEffect } from 'react';
import { Carousel, LatestNews, Footer } from './components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <main className="app">
      <Carousel />
      <LatestNews />
      <Footer />
    </main>
  );
};

export default App;
