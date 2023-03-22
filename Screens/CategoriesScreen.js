import { FlatList, StatusBar } from "react-native";
import RenderCategoryItem from "../Components/RenderCategoryItem";
import { CATEGORIES } from '../data/dummy-data'

function CategoriesScreen({ navigation }) {

    const handlePress = (itemData) => {
        navigation.navigate('Meal Overview', { categoryId: itemData.item.id })
    }

    // ****this function will start rendering from the categories****
    const renderedCategoryItem = (itemData) => {
        return (
            <RenderCategoryItem onPress={() => handlePress(itemData)} title={itemData.item.title} color={itemData.item.color} />
        )
    }

    return (

        <FlatList
            style={{ paddingTop: 2 }}
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderedCategoryItem}
            numColumns={2}
        />

    )
}



export default CategoriesScreen;