import React, { useState } from 'react';

// Define the navLinks array
const navLinks = [
    { id: 1, href: '#home', name: 'Home' },
    { id: 2, href: '#about', name: 'About' },
    { id: 3, href: '#services', name: 'Services' },
    { id: 4, href: '#contact', name: 'Contact' }
];

const NavItems = () => {
    return (
        <ul className='nav-ul'>
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className='nav-li'>
                    <a href={href} className='text-neutral-400 hover:text-white transition-colors'>{name}</a>
                </li>
            ))}
        </ul>
    );
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
            <div className="max-w-7xl mx-auto">
                <div className='flex justify-between items-center p-5 mx-auto c-space'>
                    <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                        Jared
                    </a>

                    <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label="toggle menu">
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className='w-6 h-6' />
                    </button>
                    <nav className={`sm:flex ${isOpen ? 'block' : 'hidden'}`}>
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden transition-max-height duration-300`}>
                <nav className='p-5'>
                    <NavItems />
                </nav>
            </div>
        </header>
    );
}

export default Navbar;