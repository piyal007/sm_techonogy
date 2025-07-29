import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section className="bg-[#FBFBFB]">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-center py-12">
          <h2 className="font-inter text-4xl text-[#1C1C1C] font-semibold">Customer Testimonials</h2>
        </div>

        <div className="flex relative h-[600px]">
          <div className="flex justify-center gap-6 absolute left-0 top-50 translate-y-[-50%] z-10">
            {/* Testimonial Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full border-2 border-blue-400 p-1">
                      <Image
                        className="w-full h-full rounded-full object-cover"
                        src="/images/testimonial_1.jpg"
                        alt="Afiya Jaman Sinigdha"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-inter text-lg font-semibold text-[#1C1C1C]">
                      Afiya Jaman Sinigdha
                    </h3>
                    <p className="font-inter text-sm text-gray-600">Designer</p>
                  </div>
                </div>
                <div className="text-gray-700 font-inter text-sm leading-relaxed">
                  Explore our collection of carefully chosen products expert advice and inspiring stories designed to help you discover your full potential. Whether you are seeking inspiration advice or the perfect product to elevate your routine.
                </div>
            </div>
            
            {/* Testimonial Card 2*/}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full border-2 border-blue-400 p-1">
                      <Image
                        className="w-full h-full rounded-full object-cover"
                        src="/images/testimonial_2.jpg"
                        alt="Afiya Jaman Sinigdha"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-inter text-lg font-semibold text-[#1C1C1C]">
                      Afiya Jaman Sinigdha
                    </h3>
                    <p className="font-inter text-sm text-gray-600">Designer</p>
                  </div>
                </div>
                <div className="text-gray-700 font-inter text-sm leading-relaxed">
                  Explore our collection of carefully chosen products expert advice and inspiring stories designed to help you discover your full potential. Whether you are seeking inspiration advice or the perfect product to elevate your routine.
                </div>
            </div>
          </div>
          
          {/* Testimonial card 3 */}
          <div className="w-[600px] h-[400px] absolute right-0">
                <Image className="w-full h-full object-cover object-center" src="/images/testimonial_3.png" alt="" />
          </div>

        </div>
      </div>
    </section>
  );
}