import { Link } from "react-router-dom";

const RecipeList = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Placeholder for recipe list */}
        <Link to="/recipes/1" className="border p-4 rounded-lg">
          <img src="/images/recipe1.jpg" alt="Recipe 1" className="w-full h-40 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold">Recipe 1</h2>
          <p className="text-sm text-muted-foreground">A short description of Recipe 1.</p>
        </Link>
        <Link to="/recipes/2" className="border p-4 rounded-lg">
          <img src="/images/recipe2.jpg" alt="Recipe 2" className="w-full h-40 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold">Recipe 2</h2>
          <p className="text-sm text-muted-foreground">A short description of Recipe 2.</p>
        </Link>
        <Link to="/recipes/3" className="border p-4 rounded-lg">
          <img src="/images/recipe3.jpg" alt="Recipe 3" className="w-full h-40 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold">Recipe 3</h2>
          <p className="text-sm text-muted-foreground">A short description of Recipe 3.</p>
        </Link>
      </div>
    </div>
  );
};

export default RecipeList;