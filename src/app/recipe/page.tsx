"use client";

import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  difficulty: string;
  cookingTimeMinutes: number;
  cuisine: string;
  mealType: string[];
  rating: number;
  reviewCount: number;
  stock: number; 
  image: string;
}

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes", { cache: "no-store" });
        const data = await res.json();
        setRecipes(data.recipes || []);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-center text-5xl font-extrabold text-gray-900 mb-10 tracking-wide uppercase">
          Recipes
        </h1>

        {loading ? (
          <p className="text-center text-gray-600 text-lg">Loading recipes...</p>
        ) : recipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">




                
          </div>
        ) : (
          <p className="text-center text-lg font-semibold text-red-600">No recipes found.</p>
        )}
      </div>
    </Layout>
  );
};

export default RecipesPage;
