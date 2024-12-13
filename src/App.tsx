import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Mission from './components/Mission';
import Vision from './components/Vision';

const App: React.FC = () => {
  return (
    <div className='font-saira'>
      <Navbar />
      <Header />
      <Mission />
      <Categories />
      <div className='lg:mx-32 mx-6'>
        <Vision />
        <Products />
        <Testimonials />
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

export default App;