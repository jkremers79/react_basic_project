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
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const [filterOption, setFilterOption] = useState("");

  const handleChange = (event) => setSearchField(event.target.value);

  const matchedRecipes = data.hits.filter((recipe) => {
    const recipeName = recipe.recipe.label;

    return recipeName.toLowerCase().includes(searchField.toLowerCase());
  });

  const filteredRecipes = matchedRecipes.filter((recipe) => {
    const healthLabels = recipe.recipe.healthLabels.join(" ");

    return healthLabels.includes(filterOption);
  });

  return (
    <>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "flex-start", md: "center" }}
        alignItems={{ base: "center", md: "flex-start" }}
        columnGap={{ base: "0", md: "2rem" }}
        paddingTop={"2rem"}
      >
        <Heading
          size={{ base: "md", md: "lg" }}
          marginBottom={{ base: "0.5rem", md: "3rem" }}
        >
          Winc Recipe App
        </Heading>

        <Input
          placeholder="Find a recipe"
          width={"15rem"}
          variant={"outline"}
          backgroundColor={"hsl(0, 0%, 96%)"}
          color={"hsl(220, 9%, 15%)"}
          padding={"0.5rem"}
          marginBottom={{ base: "0.5rem", md: "0" }}
          borderRadius={"10px"}
          onChange={handleChange}
        />
      </Flex>

      <Center>
        <RadioGroup
          onChange={setFilterOption}
          value={filterOption}
          colorScheme={"green"}
          marginBottom={"0.75rem"}
        >
          <Center>
            <Text size="s">Set a diatary filter:</Text>
          </Center>
          <Stack
            spacing={{ base: "1", md: "4" }}
            direction={{ base: "column", md: "row" }}
          >
            <Radio value="Vegetarian">Vegetarian</Radio>
            <Radio value="Vegan">Vegan</Radio>
            <Radio value="Pescatarian">Pescatarian</Radio>

            {filterOption ? (
              <Button
                colorScheme="red"
                onClick={() => setFilterOption("")}
                size={"sm"}
              >
                Reset filter
              </Button>
            ) : (
              <Button size={"sm"} isDisabled={true} colorScheme="red">
                Reset filter
              </Button>
            )}
          </Stack>
        </RadioGroup>
      </Center>

      <Flex
        flexDirection={{ base: "column", md: "row" }}
        flexWrap={"wrap"}
        gap={"2rem"}
        justifyContent={"center"}
        alignItems={"center"}
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
