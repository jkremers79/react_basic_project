import {
  Heading,
  CloseButton,
  Image,
  Flex,
  Box,
  Text,
  Tag,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Center>
      <Box
        backgroundColor={"hsl(0, 0%, 96%)"}
        maxWidth={"700px"}
        padding={"0.5rem 1rem 0.5em 1rem"}
      >
        <CloseButton
          colorScheme={"whiteAlpha"}
          size="md"
          onClick={() => clickFn()}
        />

        <Center>
          <Image
            src={recipe.recipe.image}
            height="400px"
            width="full"
            objectFit={"cover"}
            marginBottom={"2rem"}
          />
        </Center>

        <SimpleGrid
          columns={{ base: "1", md: "2" }}
          spacingX={{ base: "0", md: "10" }}
        >
          <Box marginBottom={{ base: "1rem", md: "0" }} width={"1fr"}>
            <Text size={"md"}>
              {recipe.recipe.dishType.join().toUpperCase()}
            </Text>

            <Heading marginBottom={"1rem"} size={"md"}>
              {recipe.recipe.label}
            </Heading>

            <Text>Total cooking time: {recipe.recipe.totalTime} minutes.</Text>

            <Text marginBottom={"1rem"}>Servings: {recipe.recipe.yield}</Text>

            <Heading marginBottom={"0.5rem"} size={"s"}>
              Ingredients:
            </Heading>

            {recipe.recipe.ingredientLines.map((ingredient) => (
              <Text key={ingredient} marginBottom={"0.5rem"}>
                {ingredient}
              </Text>
            ))}
          </Box>

          <Flex direction={"column"} gap={"2rem"} width={"1fr"}>
            <Box>
              <Heading size={"s"} marginBottom={"0.5rem"}>
                Health labels:
              </Heading>
              {recipe.recipe.healthLabels.map((healthLabel) => (
                <Tag
                  key={healthLabel}
                  marginBottom={"0.5rem"}
                  colorScheme="linkedin"
                  marginRight={"0.5rem"}
                >
                  {healthLabel}
                </Tag>
              ))}
            </Box>

            {recipe.recipe.dietLabels.length > 0 && (
              <Box>
                <Heading marginBottom={"0.5rem"} size={"s"}>
                  Diet:
                </Heading>
                {recipe.recipe.dietLabels.map((dietLabel) => (
                  <Tag
                    key={dietLabel}
                    marginRight={"0.5rem"}
                    marginBottom={"0.5rem"}
                    colorScheme="green"
                  >
                    {dietLabel}
                  </Tag>
                ))}
              </Box>
            )}

            {recipe.recipe.cautions.length > 0 && (
              <Box>
                <Heading marginBottom={"0.5rem"} size={"s"}>
                  Caution:
                </Heading>
                {recipe.recipe.cautions.map((caution) => (
                  <Tag
                    key={caution}
                    marginRight={"0.5rem"}
                    marginBottom={"0.5rem"}
                    colorScheme={"red"}
                  >
                    {caution}
                  </Tag>
                ))}
              </Box>
            )}

            <Heading size="s">Total nutrients:</Heading>

            <Flex gap={"1.5rem"} flexWrap={"wrap"}>
              <Box>
                <Text>
                  {Math.round(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)}
                </Text>
                <Text fontWeight={"bold"} fontSize="xs">
                  CALORIES
                </Text>
              </Box>

              <Box>
                <Text>
                  {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)} g
                </Text>
                <Text fontWeight={"bold"} fontSize="xs">
                  PROTEIN
                </Text>
              </Box>

              <Box>
                <Text>
                  {Math.round(recipe.recipe.totalNutrients.FAT.quantity)} g
                </Text>
                <Text fontWeight={"bold"} fontSize="xs">
                  FAT
                </Text>
              </Box>

              <Box>
                <Text>
                  {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)} g
                </Text>
                <Text fontWeight={"bold"} fontSize="xs">
                  CARBS
                </Text>
              </Box>

              <Box>
                <Text>
                  {Math.round(recipe.recipe.totalNutrients.CHOLE.quantity)} mg
                </Text>
                <Text fontWeight={"bold"} fontSize="xs">
                  CHOLESTEROL
                </Text>
              </Box>

              <Box>
                <Text>
                  {Math.round(recipe.recipe.totalNutrients.NA.quantity)} mg
                </Text>
                <Text fontWeight={"bold"} fontSize="xs">
                  SODIUM
                </Text>
              </Box>
            </Flex>
          </Flex>
        </SimpleGrid>
      </Box>
    </Center>
  );
};
