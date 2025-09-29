import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-blue-600">IELTSPro</div>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Courses</li>
          <li className="hover:text-blue-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          <li>
            <button className="bg-yellow-400 text-blue-700 px-4 py-2 rounded-md font-semibold hover:bg-yellow-500">
              Enroll Now
            </button>
          </li>
        </ul>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-3 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Courses</li>
          <li className="hover:text-blue-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          <li>
            <button className="bg-yellow-400 text-blue-700 px-4 py-2 rounded-md font-semibold w-full hover:bg-yellow-500">
              Enroll Now
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
