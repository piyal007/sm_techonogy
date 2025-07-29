import { RiDoubleQuotesL } from "react-icons/ri";
import { ArrowUpRight, Minus } from 'lucide-react';
import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="bg-[#FBFBFB]">
      <div className="w-[90%] mx-auto pt-4 flex gap-2 *:w-1/2">
        {/* hero content */}
        <div className="flex flex-col justify-center py-8">
          {/* Badge */}
          <div className="flex items-center mb-6 relative">
            <div className="w-15 h-15 bg-[#FFC7CF] rounded-full"></div>
            <div className="w-15 h-15 bg-[#CE4E61] rounded-full absolute top-0 left-10"></div>
            <span className="font-maven-pro text-[#1D1818] text-lg leading-[1.2] absolute top-2 left-20">New Spring 2025<br/>Collections</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-maven-pro text-7xl font-semibold text-[#1D1818] leading-[1.1] tracking-[-0.04em] mb-6">
            Fashion That<br/>Feels As Good As<br/>It{' '}

            <span className="text-[#CE4E61] inline-block transform -skew-y-3">Looks</span>
          </h1>

          {/* Description */}
          <p className="font-montserrat text-[#161616] text-lg leading-relaxed mb-8">
            Streetwear-inspired and flavor-packed, every drop celebrates individuality, freedom, 
            and effortless style—where comfort meets cultural edge
          </p>

          {/* CTA Button */}
          <button className="font-montserrat bg-[#CE4E61] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#b8455a] transition-colors flex items-center gap-3 w-fit cursor-pointer">
            <span>Get Started</span><span><ArrowUpRight size={28} strokeWidth={2} /></span>
          </button>
        </div>
        {/* hero image */}
        <div className="px-30 relative"
          style={{
            background: 'radial-gradient(50% 50% at 50% 50%, #FFC7CF 34.62%, rgba(255, 255, 255, 0) 100%'

          }}>
          <Image className="w-full h-auto object-cover" src="/images/hero.png" alt="Fashion model wearing pink outfit" />
          {/* Floating testimonial quote */}
          <div className="absolute top-10 right-0 rounded-lg pl-4">
            <div className="text-[#CE4E61] text-3xl font-semibold mb-2"><RiDoubleQuotesL /></div>
            <p className="font-roboto text-[#535151] text-[10px] mb-3">
              I love that it&apos;s made with gentle ingredients — no<br/>irritation at all, even on my sensitive skin.
            </p>
            <div className="flex gap-4 items-center">
              <span>
                <Minus strokeWidth={0.5} style={{ transform: 'scaleX(3)' }} />
              </span>
              <span>
                <p className="font-roboto text-[#535151] text-[10px]">Afia Jaman</p>
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}