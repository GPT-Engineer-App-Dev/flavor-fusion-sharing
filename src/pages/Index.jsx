import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Recipe Haven</h1>
      <p className="text-lg mb-6">Discover and share amazing recipes from around the world.</p>
      <div className="flex justify-center mb-8">
        <Button as={Link} to="/recipes" variant="primary">
          View All Recipes
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Placeholder for featured recipes */}
        <div className="border p-4 rounded-lg">
          <img src="/images/recipe1.jpg" alt="Recipe 1" className="w-full h-40 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold">Recipe 1</h2>
        </div>
        <div className="border p-4 rounded-lg">
          <img src="/images/recipe2.jpg" alt="Recipe 2" className="w-full h-40 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold">Recipe 2</h2>
        </div>
        <div className="border p-4 rounded-lg">
          <img src="/images/recipe3.jpg" alt="Recipe 3" className="w-full h-40 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold">Recipe 3</h2>
        </div>
      </div>
    </div>
  );
};

export default Index;