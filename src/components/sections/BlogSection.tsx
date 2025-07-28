import React from 'react'
import { Button } from '../ui/button'

export default function BlogSection() {
  return (
      <section>
          <div className='w-[90%] mx-auto'>
              <div className='flex justify-center'>
                  <h2 className='font-inter text-4xl text-[#1C1C1C] font-semibold'>Latest News and Blog</h2>
              </div>
              {/* Card area */}
              <div className='py-12 grid grid-cols-3 gap-8'>
                  {/* Card 1 */}
                  <div>
                      {/* card 1 content */}
                      <div className='py-8'>
                          <h3 className='font-semibold text-2xl'>Embrace the Art of Color Harmony</h3>
                          <p className='text-sm py-4'>
                              Explore our collection of carefully choosen products
                              expert advice and inspiring stories designed to
                              help your discover your full potensial. Wheter
                              you are seeking inspiration advice or the per
                              fect product to elevate your routine
                          </p>
                          <Button className='bg-[#CE4E61] rounded-sm'>Read More</Button>
                      </div>
                      {/* card 1 image */}
                      <div className='w-[400px] h-[400px]'>
                          <img className='w-full h-full object-cover ' src="/images/blog_1.png" alt="" />
                      </div>
                  </div>
                  {/* Card 2 */}
                  <div className='flex flex-col-reverse'>
                      {/* card 2 content */}
                      <div className='py-8'>
                          <h3 className='font-semibold text-2xl'>Embrace the Art of Color Harmony</h3>
                          <p className='text-sm py-4'>
                              Explore our collection of carefully choosen products
                              expert advice and inspiring stories designed to
                              help your discover your full potensial. Wheter
                              you are seeking inspiration advice or the per
                              fect product to elevate your routine
                          </p>
                          <Button className='bg-[#CE4E61] rounded-sm'>Read More</Button>
                      </div>
                      {/* card 2 image */}
                      <div className='w-[400px] h-[400px]'>
                          <img className='w-full h-full object-cover ' src="/images/blog_2.jpg" alt="" />
                      </div>
                  </div>
                  {/* Card 3 */}
                  <div>
                      {/* card 3 content */}
                      <div className='py-8'>
                          <h3 className='font-semibold text-2xl'>Embrace the Art of Color Harmony</h3>
                          <p className='text-sm py-4'>
                              Explore our collection of carefully choosen products
                              expert advice and inspiring stories designed to
                              help your discover your full potensial. Wheter
                              you are seeking inspiration advice or the per
                              fect product to elevate your routine
                          </p>
                          <Button className='bg-[#CE4E61] rounded-sm'>Read More</Button>
                      </div>
                      {/* card 3 image */}
                      <div className='w-[400px] h-[400px]'>
                          <img className='w-full h-full object-cover ' src="/images/blog_3.jpg" alt="" />
                      </div>
                  </div>
              </div>
              
          </div>
    </section>
  )
}
