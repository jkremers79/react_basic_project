import { Center, Flex, Heading, Tag } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = () => {
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[0].recipe.healthLabels[3]);

  // const recipe = data.hits[4].recipe;

  // recipe.label

  return (
    <Center>
      <Heading>Your Recipe App</Heading>
      <Flex flexDirection={{ base: "column", lg: "row" }} flexWrap={"wrap"}>
        {data.hits.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.recipe.Heading} />
        ))}
      </Flex>
    </Center>
  );
};
