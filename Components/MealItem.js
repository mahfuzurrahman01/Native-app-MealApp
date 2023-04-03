import { Image, Pressable, StyleSheet, Text, View, Platform } from "react-native"
import MainQualities from "./MainQualities"

const MealItem = ({ title, imageUrl, duration, affordability, complexity, navigation, id }) => {

    // this press function will redirect to the Each single meals Item full details page
    const handlePress = () => {
        navigation.navigate("Meal details", { id: id })
    }

    return (
        <View style={styles.root}>
            <Pressable
                onPress={handlePress}
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [pressed && Platform.OS == "ios" ? styles.buttonPressed : null]}
            >
                <View style={{ overflow: "hidden" }}>
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                    <Text style={styles.title}>{title}</Text>
                </View>

                <MainQualities duration={duration} complexity={complexity} affordability={affordability} />

            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    root: {
        borderRadius: 10,
        backgroundColor: 'white',
        marginHorizontal: 26,
        marginVertical: 10,
        overflow: "hidden",
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },

    image: {
        width: "100%",
        height: 200,
    },

    title: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
    },
    buttonPressed: {
        opacity: 0.7,
    },
})