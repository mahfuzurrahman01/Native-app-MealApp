import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealsOverView = () => {
    const route = useRoute()
    const catId = route.params.categoryId;
    return (
        <View style={styles.container}>
            <Text>This is the Meals category page -{catId}</Text>
        </View>
    )
}

export default MealsOverView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center",

    }
})