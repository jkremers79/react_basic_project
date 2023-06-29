import { Heading, Button } from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <>
      <Heading>{recipe.recipe.label}</Heading>
      <Button onClick={() => clickFn()}>Return</Button>
    </>
  );
};
