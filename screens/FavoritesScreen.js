import { Text ,StyleSheet} from "react-native";
function FavoritesScreen() {
  return <Text style={styles.favText}>Favorites Screen!</Text>;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    favText: {
      flex: 1,
      padding: 16,
      textAlign:'center',
      fontSize:16,
      fontWeight:'bold'
    },
  });
  