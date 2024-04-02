import { View, Text, StyleSheet, Platform } from "react-native";

function MealDetails({ duration, complexity, affordability, style }) {
  return (
    <View style={[styles.details, style]}>
      <Text style={styles.detailsItem}>{duration}</Text>
      <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetails;
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent:'center'
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: "black",
    textAlign: "center",
  }
});
