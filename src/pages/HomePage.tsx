import React from 'react';
import { ShoppingBag, Truck, RefreshCw, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-black text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')] bg-cover bg-center opacity-40"></div>
        <div className="relative py-32 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Elevate Your Style</h1>
            <p className="text-xl md:text-2xl mb-10 font-light">Curated collections for the modern lifestyle</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              <ShoppingBag className="h-5 w-5" />
              Explore Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all transform hover:scale-105"
          >
            View All Products
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Truck className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Free Shipping</h3>
              <p className="text-gray-600">Complimentary shipping on all orders over $100</p>
            </div>
            <div className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <RefreshCw className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Easy Returns</h3>
              <p className="text-gray-600">Hassle-free returns within 30 days</p>
            </div>
            <div className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure Payment</h3>
              <p className="text-gray-600">Fully encrypted checkout process</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};