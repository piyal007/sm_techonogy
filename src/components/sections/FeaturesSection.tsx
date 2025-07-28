'use client';
import { ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function FeaturesSection() {
  const carouselItems = [
    {
      id: 1,
      image: '/images/carousel_1.png',
      title: 'Luxury Fragrance',
      description: 'Premium collection'
    },
    {
      id: 2,
      image: '/images/carousel_2.png',
      title: 'Eau de Parfum',
      description: 'The most luxurious fragrance for women'
    },
    {
      id: 3,
      image: '/images/carousel_1.png',
      title: 'Signature Scent',
      description: 'Exclusive blend'
    },
    {
      id: 4,
      image: '/images/carousel_2.png',
      title: 'Royal Collection',
      description: 'Timeless elegance'
    }
  ];

  return (
    <section className="bg-[#FBFBFB] py-16">
      <div className="w-[90%] mx-auto">
        {/* Four Column Grid - 2 for carousel, 2 for banner */}
        <div className="grid grid-cols-4 gap-8 items-center">
          
          {/* Left 2 Columns - Carousel */}
          <div className="col-span-2">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {carouselItems.map((item, index) => (
                  <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2">
                    <div className="relative h-80 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay Content */}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="text-center text-white">
                          <h3 className="font-inter text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="font-inter text-sm opacity-90">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/80 hover:bg-white border-none shadow-lg" />
              <CarouselNext className="right-4 bg-white/80 hover:bg-white border-none shadow-lg" />
            </Carousel>
          </div>

          {/* Right 2 Columns - Image Banner */}
          <div className="col-span-2">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8 h-80 flex flex-col justify-center text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-sm text-sm font-medium">
                    Ready to Shop
                  </span>
                </div>
                
                <h2 className="font-inter text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  Revolutionizing Your Skins<br />
                  Journey to Radiance
                </h2>
                
                <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-sm font-medium hover:bg-gray-100 transition-colors">
                  SHOP NOW
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border border-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}