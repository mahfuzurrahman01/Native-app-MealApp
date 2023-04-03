import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MainQualities from '../Components/MainQualities'
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/Ionicons'
import { useContext, useLayoutEffect, useState } from "react";
import IconButton from '../Components/IconButton';
import { FavoriteContext } from "../store/Context/FavoriteContext";

const MealDetails = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const MealId = route.params.id;
    const MealDetails = MEALS.find((item) => item.id === MealId)
    // get all properties of a meal using object destructuring
    const {
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree
    } = MealDetails;

    const MealContext = useContext(FavoriteContext);
    const isFavMeal = MealContext.ids.includes(MealId);
    console.log(isFavMeal)
    function favoriteHandler() {
        if (isFavMeal) {
            MealContext.removeFavorite(MealId)
        } else {
            MealContext.addFavorite(MealId)
        }
    }

    // set the dynamic title 
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton onPress={favoriteHandler} name={isFavMeal ? "heart" : "heart-outline"} color='maroon' />
                )
            }
        })
    }, [navigation,favoriteHandler])

    return (
        <ScrollView>
            <View style={styles.root}>
                <View style={styles.intro}>
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                    <Text style={styles.title}>{title}</Text>
                    <MainQualities duration={duration} affordability={affordability} complexity={complexity} />
                </View>
            </View>
            <View style={styles.ingredientsSteps}>
                <Text style={styles.subTitle}>Ingredients</Text>
                {
                    ingredients.map((item) => <Text style={styles.ingredients} key={item}>{item}</Text>)
                }
                <Text style={styles.subTitle}>Steps</Text>
                {
                    steps.map((step) => <Text style={styles.steps} key={step}>{step}</Text>)
                }
            </View>
            <View style={styles.diet}>
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                    <Text style={styles.textIcons}>Gluten Free </Text>
                    {
                        isGlutenFree === true ? <View style={styles.iconYes}>
                            <Icon name="check" color="white"></Icon>
                        </View> : <View style={styles.iconNo}>
                            <Icon2 name="close" color="white"></Icon2>
                        </View>
                    }
                </View>
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                    <Text style={styles.textIcons}>Vegan </Text>
                    {
                        isVegan === true ? <View style={styles.iconYes}>
                            <Icon name="check" color="white"></Icon>
                        </View> : <View style={styles.iconNo}>
                            <Icon2 name="close" color="white"></Icon2>
                        </View>
                    }
                </View>
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                    <Text style={styles.textIcons}>Vegetarian </Text>
                    {
                        isVegetarian === true ? <View style={styles.iconYes}>
                            <Icon name="check" color="white"></Icon>
                        </View> : <View style={styles.iconNo}>
                            <Icon2 name="close" color="white"></Icon2>
                        </View>
                    }
                </View>
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                    <Text style={styles.textIcons}>Lactose Free </Text>
                    {
                        isLactoseFree === true ? <View style={styles.iconYes}>
                            <Icon name="check" color="white"></Icon>
                        </View> : <View style={styles.iconNo}>
                            <Icon2 name="close" color="white"></Icon2>
                        </View>
                    }
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetails;

const styles = StyleSheet.create({
    root: {
        margin: 10,
        padding: 5,
    },
    intro: {
        backgroundColor: '#000',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden",
    },
    image: {
        width: " 100%",
        height: 370,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        marginTop: 15,
    },
    ingredientsSteps: {
        backgroundColor: 'transparent',
        marginHorizontal: 15,
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomEndRadius: 10,

    },
    subTitle: {
        fontSize: 15,
        fontWeight: '500',
        backgroundColor: "maroon",
        borderRadius: 5,
        textAlign: "center",
        color: "white",
        padding: 5,
        marginVertical: 6,
    },
    ingredients: {
        backgroundColor: "white",
        color: "black",
        paddingHorizontal: 5,
        paddingVertical: 3,
        marginVertical: 2,
        borderRadius: 5,
    },
    steps: {

        paddingHorizontal: 5,
        paddingVertical: 3,
        marginVertical: 2,
        borderRadius: 5,
        fontSize: 14,
        backgroundColor: "white",
        color: 'black',
    },
    diet: {
        backgroundColor: "#fff5db",
        margin: 15,
        padding: 10,
        borderRadius: 9,
    },
    iconYes: {
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        padding: 1,
        backgroundColor: "green",
        marginLeft: 5,

    },
    iconNo: {
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        padding: 1,
        backgroundColor: "red",
        marginLeft: 5,

    },
    textIcons: {
        width: "93%",
        backgroundColor: "#ccc",
        borderRadius: 10,
        padding: 5,
        marginVertical: 3,
    },

})