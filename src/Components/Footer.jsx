import React from 'react';
import { Github } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200 py-6">
      
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} FlexWearShop. All rights reserved.</p>

        <a
          href="https://github.com/Mainul-Islam-Nirob"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-blue-600 transition"
        >
          <Github className="mr-2 w-5 h-5" />
          Built by <span className="ml-1 font-medium">Mainul Islam</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
