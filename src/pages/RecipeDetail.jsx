import React, { useState } from 'react';
import Rating from '@/components/Rating';

const RecipeDetail = () => {
  const [rating, setRating] = useState(0);
  const [averageRating, setAverageRating] = useState(4.2); // Mock average rating

  const handleRating = (newRating) => {
    setRating(newRating);
    // Here you would typically send the new rating to the server and update the average rating
    console.log(`New rating submitted: ${newRating}`);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Recipe Title</h1>
      <img src="/images/recipe1.jpg" alt="Recipe" className="w-full h-60 object-cover rounded-md mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Ingredient 1</li>
        <li>Ingredient 2</li>
        <li>Ingredient 3</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Preparation Steps</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
      </ol>
    <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Rate this Recipe</h2>
        <Rating rating={rating} onRate={handleRating} />
        <p className="mt-2">Average Rating: {averageRating.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;