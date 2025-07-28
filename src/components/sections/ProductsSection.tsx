'use client';
import { useState, useEffect } from 'react';
import { Product } from '@/lib/types';

export default function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><div className="custom-loader"></div></div>;
  }

  return (
    <section className="bg-[#FFFFFF]">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-center">
          <h2 className="font-inter text-4xl text-[#1C1C1C] font-semibold">Our Popular Product</h2>
        </div>
        <div className="grid grid-cols-4 gap-4 justify-items-center py-8">
          {products.map((product) => (
            <div key={product.id} className="relative w-full max-w-sm">
              {/* Conditional discount badge */}
              {product.hasDiscount && (
                <div className="bg-gradient-to-b from-red-600 to-red-700 text-white font-arsenal font-bold text-sm px-6 py-2 rounded-sm inline-block mb-2 absolute left-3 top-3 z-10">
                  50%
                </div>
              )}
              
              {/* Product image container */}
              <div className="bg-[#F2F2F2] px-6 py-12 flex items-center justify-center">
                <img 
                  className="w-[3000px] h-[300px] object-cover object-center"
                  src={product.image} 
                  alt={product.name} 
                />
              </div>
              
              {/* Product details */}
              <div className="py-4">
                <p className="font-dm-sans text-[#535151]">{product.brand}</p>
                <h3 className="font-arsenal text-2xl font-semibold text-[#1C1C1C]">{product.name}</h3>
                <p className="font-dm-sans text-[#ED0F0F]">Price: ${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}