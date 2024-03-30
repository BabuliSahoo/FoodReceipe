import { Text,View ,StyleSheet} from "react-native";
import { MEALS } from "../data/dummy-data";

function MealsOverViewScreen({ route }) {
  const { title } = route.params;

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
container :{
    flex:1,
    padding:16
}
});