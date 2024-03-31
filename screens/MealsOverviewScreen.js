import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverViewScreen({ route }) {
  const { title, categoryId } = route.params;

  const displayedMeals = MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(categoryId >=0);
  });

  function renderMealItem(itemData){
    const item =itemData.item;
    const mealItemProps ={
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration
    }
    // return <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl}/>
    return <MealItem {...mealItemProps}/>

  }

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} 
      renderItem={renderMealItem}/>
      
    </View>
  );
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});