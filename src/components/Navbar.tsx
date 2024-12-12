import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className='fixed top-0 flex justify-between items-center w-full py-7 px-32 text-white z-10'>
        <h3 className='text-3xl font-bold'>FurniShop</h3>
      <ul className='flex gap-16'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/about">Features</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;