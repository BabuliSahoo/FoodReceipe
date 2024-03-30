import { Text,StyleSheet,View,Button } from "react-native";

function HomeScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>Home Screen Page</Text>
        <Button
        title="Go to Details"
        onPress={() =>  navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })}
      />
      </View>
    );
  }

  export default HomeScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    }});