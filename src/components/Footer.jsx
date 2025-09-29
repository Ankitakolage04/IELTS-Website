import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 p-8">
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div>
          <h3 className="font-bold text-xl mb-2">IELTSPro</h3>
          <p>Helping students achieve their dream scores worldwide.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <p className="text-center text-sm">© 2025 IELTSPro. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
