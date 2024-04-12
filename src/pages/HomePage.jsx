import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Header />
        <section>
          <div className="container-hero">
            <h1><span>verde</span>Vogue</h1>
            <h3>Conscious | Classy & Cultivated</h3>
            <p>A curated selection of classy, conscious products.</p>
            <button className='button-primary'>MAKE IT YOURS</button>
          </div>
        </section>
      <Footer />
    </div>
  );
}

export default HomePage;
