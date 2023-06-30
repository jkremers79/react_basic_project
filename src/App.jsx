import { Box } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState("");

  return (
    <Box backgroundColor="hsl(111, 40%, 50%)">
      {selectedRecipe ? (
        <RecipePage clickFn={setSelectedRecipe} recipe={selectedRecipe} />
      ) : (
        <RecipeListPage clickFn={setSelectedRecipe} />
      )}
    </Box>
  );
};
