import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, List, Plus } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Use the navbar layout
import Index from "./pages/Index.jsx";
import RecipeList from "./pages/RecipeList.jsx";
import RecipeDetail from "./pages/RecipeDetail.jsx";
import RecipeSubmission from "./pages/RecipeSubmission.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Recipes",
    to: "/recipes",
    icon: <List className="h-4 w-4" />,
  },
  {
    title: "Submit Recipe",
    to: "/submit-recipe",
    icon: <Plus className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="recipes" element={<RecipeList />} />
              <Route path="recipes/:id" element={<RecipeDetail />} />
              <Route path="submit-recipe" element={<RecipeSubmission />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;