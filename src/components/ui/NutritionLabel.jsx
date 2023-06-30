import { Text, Box } from "@chakra-ui/react";

export const NutritionLabel = ({ item, unit, label }) => {
  return (
    <Box>
      <Text>
        {Math.round(item)} {unit}
      </Text>
      <Text fontWeight={"bold"} fontSize="xs">
        {label}
      </Text>
    </Box>
  );
};
