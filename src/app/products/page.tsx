"use client";

import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-center text-5xl font-extrabold text-gray-900 mb-10 tracking-wide uppercase">
          Exclusive Products
        </h1>

        {loading ? (
          <p className="text-center text-gray-600 text-lg">Loading products...</p>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative bg-white/40 backdrop-blur-lg shadow-lg rounded-2xl p-5 border border-gray-200 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative w-full h-52 rounded-xl overflow-hidden">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {product.stock > 0 ? (
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      In Stock
                    </span>
                  ) : (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      Out of Stock
                    </span>
                  )}
                </div>

                <h2 className="mt-4 text-2xl font-bold text-gray-900 truncate">{product.title}</h2>
                <p className="text-sm text-gray-700 mt-2 line-clamp-2">{product.description}</p>

                <div className="mt-5 flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">
                    ₱{product.price.toFixed(2)}
                  </span>
                  <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    -{product.discountPercentage}%
                  </span>
                </div>

                <div className="mt-4 flex justify-between items-center text-sm">
                  <span className="text-yellow-500 font-medium">⭐ {product.rating.toFixed(1)}</span>
                  <span className="text-xs text-gray-500 font-semibold">Brand: {product.brand}</span>
                </div>

                <p className="mt-2 text-xs text-gray-500">
                  <span className="font-semibold">Category:</span> {product.category}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg font-semibold text-red-600">No products found.</p>
        )}
      </div>
    </Layout>
  );
};

export default ProductsPage;
