"use client";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

interface Cart {
  id: number;
  total: number;
  discountedTotal: number;
  totalProducts: number;
  totalQuantity: number;
}

const CartsPage = () => {
  const [carts, setCarts] = useState<Cart[]>([]);

  useEffect(() => {
    const fetchCarts = async () => {
      const response = await fetch("https://dummyjson.com/carts");
      const data = await response.json();
      setCarts(data.carts);
    };

    fetchCarts();
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Shopping Carts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {carts.map((cart) => (
          <div key={cart.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">Cart ID: {cart.id}</h2>
            <p className="text-gray-600">Total Items: {cart.totalProducts}</p>
            <p className="text-gray-600">Total Quantity: {cart.totalQuantity}</p>
            <p className="text-gray-800 font-semibold">Total Price: ${cart.total}</p>
            <p className="text-green-600 font-semibold">
              Discounted Price: ${cart.discountedTotal}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default CartsPage;
