import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-full py-6 text-white text-xl z-50 flex justify-between items-center px-10 bg-gradient-to-b from-black/70 to-transparent backdrop-blur-md'>
      <Link to="/" className='font-StyleScript text-4xl font-bold'>California</Link>
      <nav className="flex gap-8 items-center">
        <Link to="/" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100">Accueil</Link>
        <Link to="/reserver" className='relative after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100'>Réserver</Link>
        <Link to="/chart" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100">Panier</Link>
        <Link to="/login" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100">Se Connecter</Link>
        <a href="#footer" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100">Contact</a>
      </nav>
    </header>
  )
}

export default Header