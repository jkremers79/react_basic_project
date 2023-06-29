import { Box, Button, Heading } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState("");

  return (
    <Box backgroundColor="hsl(195, 52%, 76%)">
      {selectedRecipe ? (
        <RecipePage clickFn={setSelectedRecipe} recipe={selectedRecipe} />
      ) : (
        <RecipeListPage clickFn={setSelectedRecipe} />
      )}
    </Box>
  );
};
