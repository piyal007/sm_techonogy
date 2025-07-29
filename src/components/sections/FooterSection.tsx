import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-[#000000] text-white py-16">
      <div className="w-[90%] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Left Column - Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image 
                src="/images/footer_logo.png" 
                alt="Velvet Glow Logo" 
                className="w-8 h-8"
              />
              <h3 className="font-inter text-xl font-semibold">Velvet Glow</h3>
            </div>
            <p className="font-inter text-sm text-gray-300 leading-relaxed max-w-xs">
              At Northbound we specialize in aligning people strategies with 
              business goals. Whether you are planning a new venture or 
              adapting to new challenges, we help ensure your organization 
              has the right talent in the right place at the right time.
            </p>
          </div>

          {/* Middle Column - Services */}
          <div className="space-y-4">
            <h4 className="font-inter text-lg font-semibold">Services</h4>
            <ul className="space-y-2 font-inter text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Our model</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Skills and Workforce Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Optimize your Talent processes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Interim Consultants</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advisory Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recruitment and Executive Search</a></li>
            </ul>
          </div>

          {/* Right Column - Quick Links */}
          <div className="space-y-4">
            <h4 className="font-inter text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 font-inter text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Consulting Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Knowledge bank</a></li>
            </ul>
            
            {/* Social Media */}
            <div className="pt-4">
              <a 
                href="https://www.linkedin.com/in/piyal-islam/" target="_blank" 
                className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 pt-6">
          <p className="font-inter text-sm text-gray-400">
            2025 Copyright Residents | All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}