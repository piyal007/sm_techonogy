'use client';
import Link from "next/link";
import { Search, ShoppingBag, User } from 'lucide-react';

export default function Navbar() {
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    smoothScrollTo(sectionId);
  };

  return (
    <nav className="sticky top-0 z-50 w-full flex items-center bg-white/80 backdrop-blur-sm shadow-[0px_0px_4px_1.5px_#0000001A] opacity-100">
      <div className="w-[90%] mx-auto py-2 opacity-100 flex justify-between items-center">
        {/* Left section - Logo */}
        <div className="flex items-center gap-2">
          <div>
            <img
              src="/images/logo.png"
              alt="Velvet Glow Logo"
              className="w-10 h-10 rotate-0 opacity-100"
            />
          </div>
          <div>
            <h2 className="font-roboto font-bold text-[32px] leading-[48px] tracking-normal text-[#CE4E61]">Velvet Glow</h2>
          </div>
        </div>
        
        {/* Center section - Navigation Menu */}
        <div className="flex items-center gap-8">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="font-roboto font-medium text-base leading-6 tracking-normal text-[#1C1C1C] hover:text-[#CE4E61] transition-colors cursor-pointer"
          >
            Home
          </a>
          <a 
            href="#shop" 
            onClick={(e) => handleNavClick(e, 'shop')}
            className="font-roboto font-medium text-base leading-6 tracking-normal text-[#1C1C1C] hover:text-[#CE4E61] transition-colors cursor-pointer"
          >
            Shop
          </a>
          <a 
            href="#product" 
            onClick={(e) => handleNavClick(e, 'product')}
            className="font-roboto font-medium text-base leading-6 tracking-normal text-[#1C1C1C] hover:text-[#CE4E61] transition-colors cursor-pointer"
          >
            Product
          </a>
          <a 
            href="#blog" 
            onClick={(e) => handleNavClick(e, 'blog')}
            className="font-roboto font-medium text-base leading-6 tracking-normal text-[#1C1C1C] hover:text-[#CE4E61] transition-colors cursor-pointer"
          >
            Blog
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => handleNavClick(e, 'testimonials')}
            className="font-roboto font-medium text-base leading-6 tracking-normal text-[#1C1C1C] hover:text-[#CE4E61] transition-colors cursor-pointer"
          >
            Testimonials
          </a>
        </div>
        
        {/* Right section - Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
            <Search size={20} className="text-[#1C1C1C] hover:text-[#CE4E61]" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
            <ShoppingBag size={20} className="text-[#1C1C1C] hover:text-[#CE4E61]" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
            <User size={20} className="text-[#1C1C1C] hover:text-[#CE4E61]" />
          </button>
        </div>
      </div>
    </nav>
  );
}