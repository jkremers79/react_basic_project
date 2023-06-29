import {
  Tag,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Flex,
  Box,
} from "@chakra-ui/react";

export const RecipeCard = ({ recipe, clickFn }) => {
  return (
    <Card
      width="300px"
      height="500px"
      backgroundColor="hsl(0, 0%, 96%)"
      onClick={() => clickFn(recipe)}
    >
      <Image
        src={recipe.recipe.image}
        width="300px"
        height="200px"
        objectFit="cover"
        borderTopRadius={"5px"}
      />
      <CardHeader>
        <Heading size="md">{recipe.recipe.label}</Heading>
      </CardHeader>
      <CardBody>
        <Flex direction={"column"} alignItems={"center"} gap={"1rem"}>
          <Box>
            {recipe.recipe.cautions.map((caution) => (
              <Tag key={caution} marginLeft={"0.5rem"}>
                {caution}
              </Tag>
            ))}
          </Box>
          <Box>
            {recipe.recipe.healthLabels.includes("Vegetarian") && (
              <Tag>Vegetarian</Tag>
            )}
            {recipe.recipe.healthLabels.includes("Vegan") && (
              <Tag marginLeft={"0.5rem"}>Vegan</Tag>
            )}
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};
