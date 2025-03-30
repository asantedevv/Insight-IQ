import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white flex flex-col w-full shadow-sm">
      <div className="flex items-center justify-between p-4 w-full">
        <div className="font-bold text-xl text-cyan-500">InsightIQ</div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <button className="rounded-lg py-2 px-4 hover:bg-gray-100 transition-colors duration-300 cursor-pointer text-gray-800 font-medium text-sm tracking-wide">HOME</button>
          <button className="rounded-lg py-2 px-4 hover:bg-gray-100 transition-colors duration-300 cursor-pointer text-gray-800 font-medium text-sm tracking-wide">AI CHAT TUTOR</button>
          <button className="rounded-lg py-2 px-4 hover:bg-gray-100 transition-colors duration-300 cursor-pointer text-gray-800 font-medium text-sm tracking-wide">LESSONS & QUIZZES</button>
          <button className="rounded-lg py-2 px-4 hover:bg-gray-100 transition-colors duration-300 cursor-pointer text-gray-800 font-medium text-sm tracking-wide">SETTINGS</button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden rounded-lg p-2 hover:bg-gray-100 transition-colors duration-300 text-gray-800"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <nav className="md:hidden flex flex-col w-full bg-white border-t border-gray-100 shadow-inner">
          <button className="py-3 px-4 text-left hover:bg-gray-100 transition-colors duration-300 cursor-pointer text-gray-800 border-b border-gray-100 font-medium text-sm tracking-wide">HOME</button>
          <button className="py-3 px-4 text-left hover:bg-gray-100 transition-colors duration-300 cursor-pointer text-gray-800 border-b border-gray-100 font-medium text-sm tracking-wide">AI CHAT TUTOR</button>
          <button className="py-3 px-4 text-left hover:bg-gray-100 transition-colors duration-300 cursor-pointer text-gray-800 border-b border-gray-100 font-medium text-sm tracking-wide">LESSONS & QUIZZES</button>
          <button className="py-3 px-4 text-left hover:bg-gray-100 transition-colors duration-300 cursor-pointer text-gray-800 border-b border-gray-100 font-medium text-sm tracking-wide">SETTINGS</button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;