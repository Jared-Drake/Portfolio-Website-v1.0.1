import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90 '> Navbar
    <div className="max-w-7xl mx-auto">
        <div className='flex justify-between items-center p-5 mx-auto c-space'>
            <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                    Jared
            </a>

            <button onClick={toggleMenu}>
                <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className='w-6 h-6' />
            </button>
            </div>
    </div>
    </header>
    
  );
}

export default Navbar;