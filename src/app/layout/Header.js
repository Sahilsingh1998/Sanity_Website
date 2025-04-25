'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Optional: Use icons from `lucide-react` or swap with your own

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#2F3C7E] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-5 py-4">
        <Link href="/" className="text-2xl font-bold tracking-wide text-white hover:text-pink-200">
          MySite
        </Link>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4">
          <NavLinks />
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2F3C7E] px-5 pb-4 space-y-3 transition-all duration-300">
          <NavLinks />
        </div>
      )}
    </header>
  );
};

const NavLinks = () => (
  <>
    <Link
      href="/"
      className="block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
    >
      Home
    </Link>
    <Link
      href="/tutorials"
      className="block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
    >
      Tutorials
    </Link>
    <Link
      href="/blog"
      className="block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-full transition duration-300"
    >
      Blog
    </Link>
    <Link
      href="/contact"
      className="block bg-indigo-400 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
    >
      Contact
    </Link>
  </>
);

export default Header;