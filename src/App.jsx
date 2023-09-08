import { useStore } from "./store";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { Box } from "@chakra-ui/react";

export const App = () => {
  const selectedRecipe = useStore((state) => state.selectedRecipe);

  return (
    <Box backgroundColor="hsl(216, 13%, 93%)">
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} />
      ) : (
        <RecipeListPage />
      )}
    </Box>
  );
};
