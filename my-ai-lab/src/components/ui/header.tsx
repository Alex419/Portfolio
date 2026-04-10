import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-mono">
        Alex Gu <span className="font-sans text-lg">| AI & Machine Learning</span>
      </h1>
      <nav>
        {/* Navigation links will go here */}
      </nav>
    </header>
  );
};

export default Header;
