import { createContext, useState } from "react";
import Meal from "../../models/meal";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {

  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    console.log("addFavorite favoriteMealids Count :::: " +id);
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    console.log("removeFavorite favoriteMealids Count :::: " + id);
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }
  console.log("FavoritesContextProvider");

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
