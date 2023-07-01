import {
  Flex,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Button,
  Center,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const [filterOption, setFilterOption] = useState("");

  const handleChange = (event) => setSearchField(event.target.value);

  const matchedRecipes = data.hits.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  const filteredRecipes = matchedRecipes.filter((recipe) => {
    if (filterOption !== "") {
      return recipe.recipe.healthLabels.includes(filterOption);
    } else {
      return true;
    }
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
          color="hsl(214, 8%, 23%)"
          marginBottom={{ base: "0.5rem", md: "3rem" }}
        >
          Your Recipe App{" "}
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
        >
          <Radio value="Vegetarian">Vegetarian</Radio>
          <Radio value="Vegan" marginLeft={"0.5rem"}>
            Vegan
          </Radio>
          <Radio value="Pescatarian" marginLeft={"0.5rem"}>
            Pescatarian
          </Radio>
        </RadioGroup>
        <Button onClick={() => setFilterOption("")} size={"sm"}>
          Reset filter
        </Button>
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
