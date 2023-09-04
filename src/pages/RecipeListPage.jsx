import {
  Flex,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Center,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";
import { useState } from "react";
import { useStore } from "../store";

export const RecipeListPage = ({ clickFn }) => {
  const events = useStore((state) => state.Events);
  const [searchField, setSearchField] = useState("");

  const [filterRecipes, setFilterRecipes] = useState("");

  const handleChange = (event) => setSearchField(event.target.value);

  const matchedRecipes = events.hits.filter((recipe) => {
    const recipeName = recipe.recipe.label;
    const healthLabels = recipe.recipe.healthLabels.join(" ");
    const searchItems = recipeName + " " + healthLabels;

    return searchItems.toLowerCase().includes(searchField.toLowerCase());
  });

  const filteredRecipes = matchedRecipes.filter((recipe) => {
    const healthLabels = recipe.recipe.healthLabels.join(" ");

    return healthLabels.includes(filterRecipes);
  });

  return (
    <>
      <Flex
        flexDirection={"column"}
        justifyContent={{ base: "flex-start", md: "center" }}
        alignItems={{ base: "center", md: "center" }}
        columnGap={{ base: "0", md: "2rem" }}
        padding={"2rem 0 2rem 0"}
      >
        <Heading size={{ base: "md", md: "lg" }} marginBottom={"0.5rem"}>
          Winc Recipe Finder
        </Heading>

        <Input
          placeholder={"Find a recipe"}
          width={{ base: "15rem", md: "20rem" }}
          variant={"outline"}
          backgroundColor={"hsl(0, 0%, 96%)"}
          color={"hsl(220, 9%, 15%)"}
          padding={"0.5rem"}
          borderRadius={"10px"}
          onChange={handleChange}
        />
      </Flex>

      <Center>
        <RadioGroup
          onChange={setFilterRecipes}
          value={filterRecipes}
          colorScheme={"green"}
          marginBottom={"0.75rem"}
        >
          <Center>
            <Text size="s">Filter recipes:</Text>
          </Center>
          <Stack
            spacing={{ base: "1", md: "4" }}
            direction={{ base: "column", md: "row" }}
          >
            <Radio value="Vegetarian">Vegetarian</Radio>
            <Radio value="Vegan">Vegan</Radio>
            <Radio value="Pescatarian">Pescatarian</Radio>

            {/* {filterRecipes ? ( */}
            <Button
              colorScheme="red"
              onClick={() => setFilterRecipes("")}
              size={"sm"}
              isDisabled={!filterRecipes}
            >
              Reset filter
            </Button>
          </Stack>
        </RadioGroup>
      </Center>

      <Flex
        flexDirection={{ base: "column", md: "row" }}
        flexWrap={"wrap"}
        gap={"2rem"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"1rem 2rem 1rem 2rem"}
      >
        {filteredRecipes.map((recipe) => (
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
