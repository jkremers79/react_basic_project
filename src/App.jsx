import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState("");

  return <RecipeListPage />;
};
