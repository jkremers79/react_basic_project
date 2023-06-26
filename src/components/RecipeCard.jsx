import { Tag, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

export const RecipeCard = ({ recipe }) => {
  return (
    <Card maxW={"sm"}>
      <CardBody>
        <img
          src={recipe.recipe.image}
          key={recipe.recipe.image}
          width="200px"
          height="auto"
        />
        {recipe.recipe.cautions.map((caution) => (
          <Tag key={caution}>{caution}</Tag>
        ))}
        {recipe.recipe.healthLabels.includes("Vegetarian") && (
          <Tag>Vegetarian</Tag>
        )}
        {recipe.recipe.healthLabels.includes("Vegan") && <Tag>Vegan</Tag>}
      </CardBody>
    </Card>
  );
};
