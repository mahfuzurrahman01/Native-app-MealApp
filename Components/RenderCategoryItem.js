import { Pressable, StyleSheet, Text, View, Platform } from "react-native";


function RenderCategoryItem({ title, color, onPress }) {
    return (

        <View style={[styles.gridItem, { backgroundColor: color }]} >
            <Pressable onPress={onPress} android_ripple={{ color: "#ccc" }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}>
                <View style={styles.itemContainer}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View >

    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        height: 150,
        elevation: 4,
        margin: 10,
        marginHorizontal: 10,
        borderRadius: 8,
        backgroundColor: "white",
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    buttonPressed: {
        opacity: 0.5,
    },
    button: {
        flex: 1,
    },
    itemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 16,
        borderRadius: 8,
    },
    title: {
        fontSize: 15,
        fontWeight: "600",
        color: "white",
        fontStyle: "italic",
    }
})

export default RenderCategoryItem;