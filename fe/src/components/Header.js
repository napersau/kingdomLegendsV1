import React from 'react';

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">Kingdom Legends</div>
          <div className="space-x-4">
            <a href="/" className="hover:text-indigo-200 transition">Home</a>
            <a href="/game" className="hover:text-indigo-200 transition">Play</a>
            <a href="/profile" className="hover:text-indigo-200 transition">Profile</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
