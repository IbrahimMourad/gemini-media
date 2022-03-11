import React, { useEffect, useState } from 'react';
import { Carousel, LatestNews, Footer } from './components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setIsLoading(false);
  }, []);
  if (isLoading) return <Spinner />;
  return (
    <main className="app">
      <Carousel />
      <LatestNews />
      <Footer />
    </main>
  );
};

export default App;
