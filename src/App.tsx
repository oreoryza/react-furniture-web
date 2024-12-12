import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
};

export default App;