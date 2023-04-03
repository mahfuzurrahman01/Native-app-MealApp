import { createContext, useState } from 'react';

export const FavoriteContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { }
});

function FavoriteContextProvider({ children }) {
    const [favMealIds, setFavMealIds] = useState([])

    function addFavorite(id) {
        console.log('add' + id)
        setFavMealIds((currentIds) => [...currentIds, id])
    }

    function removeFavorite(id) {
        console.log('remove' + id)
        setFavMealIds((currentIds) => currentIds.filter(mealid => mealid !== id))
    }

    const value = {
        ids: favMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }

    return <FavoriteContext.Provider value={value}>
        {children}
    </FavoriteContext.Provider>

}

export default FavoriteContextProvider;
