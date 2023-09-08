import { useStore } from "../store";
import { RecipeCard } from "../components/RecipeCard";
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

export const RecipeListPage = () => {
  const events = useStore((state) => state.events);
  const [searchField, setSearchField, filterRecipes, setFilterRecipes] =
    useStore((state) => [
      state.search,
      state.setSearch,
      state.filter,
      state.setFilter,
    ]);

  const filteredRecipes = events.hits
    .filter((recipe) => {
      const searchItems = recipe.recipe.label;
      return searchItems.toLowerCase().includes(searchField.toLowerCase());
    })
    .filter((recipe) => {
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
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
          placeholder={"Find a recipe"}
          width={{ base: "15rem", md: "20rem" }}
          variant={"outline"}
          backgroundColor={"hsl(0, 0%, 96%)"}
          color={"hsl(220, 9%, 15%)"}
          padding={"0.5rem"}
          borderRadius={"10px"}
        />
      </Flex>

      <Center>
        <RadioGroup
          value={filterRecipes}
          onChange={setFilterRecipes}
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
          <RecipeCard recipe={recipe} key={recipe.recipe.label} />
        ))}
      </Flex>
    </>
  );
};
