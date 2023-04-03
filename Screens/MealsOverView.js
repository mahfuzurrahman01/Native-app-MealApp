import { useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import MealItem from "../Components/MealItem";
import { MEALS } from "../data/dummy-data";
import { CATEGORIES } from "../data/dummy-data";
const MealsOverView = ({ navigation, categoryId }) => {
    const route = useRoute()
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((itemData) => {
        return itemData.categoryIds.indexOf(catId) >= 0;
    })


    const renderDisplayedMeals = (itemData) => {
        const item = itemData.item;
        const mealProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
            id: item.id,
        }
        return <MealItem {...mealProps} navigation={navigation} />
    }


    // SETTING THE DYNAMIC TITLE 

    useLayoutEffect(() => {
        const mealTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({
            title: mealTitle
        })
    }, [navigation, catId])


    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} key={(item) => item.id} renderItem={renderDisplayedMeals} />
        </View>
    )
}

export default MealsOverView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})