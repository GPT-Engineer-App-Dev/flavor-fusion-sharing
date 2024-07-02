const RecipeDetail = () => {
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
      <ol className="list-decimal list-inside">
        <li>Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
      </ol>
    </div>
  );
};

export default RecipeDetail;