import { Text } from "react-native";

function MealDetailScreen({route,navigation}) {
  const mealId = route.params.mealId;
  return <Text>This is Meal Detail screen ({mealId}) </Text>;
}
export default MealDetailScreen;
