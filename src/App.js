import React from 'react';
import { Carousel, LatestNews, Footer } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <main className="app">
      <Carousel />
      <LatestNews />
      <Footer />
    </main>
  );
};

export default App;
