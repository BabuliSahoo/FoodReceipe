import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS,CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";


function MealsOverViewScreen({ route,navigation }) {
  const  categoryId  = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find((category) =>category.id === categoryId).title;
    navigation.setOptions({
      title:categoryTitle
    });
  })

  function renderMealItem(itemData){
    const item =itemData.item;
    const mealItemProps ={
      id:item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration
    }
    console.log( item.affordability);
    console.log( item.complexity);
    console.log( item.duration);

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
