import { Center, Flex, Heading } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = ({ clickFn }) => {
  return (
    <>
      <Center>
        <Heading
          fontFamily={"Quicksand"}
          color="hsl(214, 8%, 23%)"
          marginBottom={"3rem"}
        >
          Your Recipe App
        </Heading>
      </Center>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        flexWrap={"wrap"}
        gap={"2rem"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {data.hits.map((recipe) => (
          <RecipeCard
            recipe={recipe}
            key={recipe.recipe.label}
            clickFn={clickFn}
          />
        ))}
      </Flex>
    </>
  );
};
