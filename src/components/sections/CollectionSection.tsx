import React from 'react'

export default function CollectionSection() {
  return (
      <section className="bg-[#FFFFFF]">
      <div className="w-[90%] mx-auto py-12">
              <h2 className="text-center text-4xl font-semibold text-[#1C1C1C]">Browse by Collection</h2>
              <div className='grid grid-cols-4 gap-2 justify-items-center w-[65%] mx-auto py-12'>
                  
                  <div className="cursor-pointer">
                      <div className='w-48 h-64 mb-4 rounded-full overflow-hidden bg-gradient-to-b from-[#C8D5A0] to-[#A8C470]'>
                          <img
                              src="/images/collection_1.png"
                              alt="Oil Cleansers"
                              className="w-full h-full object-cover object-center"
                          />
                      </div>
                      <div className='flex flex-col items-center'>
                          <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">Oil Cleansers</h3>
                          <p className="text-[#CE4E61] font-medium">5 Items</p>
                      </div>
                  </div>
                  <div className="cursor-pointer">
                      <div className='w-48 h-64 mb-4 rounded-full overflow-hidden bg-gradient-to-b from-[#C8D5A0] to-[#A8C470]'>
                          <img
                              src="/images/collection_2.png"
                              alt="Hand Cream"
                              className="w-full h-full object-cover object-center"
                          />
                      </div>
                      <div className='flex flex-col items-center'>
                          <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">Hand Cream</h3>
                          <p className="text-[#CE4E61] font-medium">5 Items</p>
                      </div>
                  </div>
                  <div className="cursor-pointer">
                      <div className='w-48 h-64 mb-4 rounded-full overflow-hidden bg-gradient-to-b from-[#C8D5A0] to-[#A8C470]'>
                          <img
                              src="/images/collection_3.png"
                              alt="Toners Skin"
                              className="w-full h-full object-cover object-center"
                          />
                      </div>
                      <div className='flex flex-col items-center'>
                          <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">Toners Skin</h3>
                          <p className="text-[#CE4E61] font-medium">5 Items</p>
                      </div>
                  </div>
                  <div className="cursor-pointer">
                      <div className='w-48 h-64 mb-4 rounded-full overflow-hidden bg-gradient-to-b from-[#C8D5A0] to-[#A8C470]'>
                          <img
                              src="/images/collection_4.png"
                              alt="Fask Mask"
                              className="w-full h-full object-cover object-center"
                          />
                      </div>
                      <div className='flex flex-col items-center'>
                          <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">Fask Mask</h3>
                          <p className="text-[#CE4E61] font-medium">5 Items</p>
                      </div>
                  </div>

              </div>
      </div>
    </section>
  )
}
