import { StyleSheet, Text, View } from "react-native";

const MainQualities = ({duration, complexity, affordability}) => {
    return (
        <View style={styles.details}>

            <View style={styles.detailsRoot1}>
                <Text style={styles.option}>{duration} m</Text>
            </View>

            <View style={styles.detailsRoot2}>
                <Text style={styles.option}>{complexity}</Text>
            </View>

            <View style={styles.detailsRoot3}>
                <Text style={styles.option}>{affordability}</Text>
            </View>

        </View>
    )
};

export default MainQualities;

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        gap: 2,
    },
    detailsRoot1: {
        backgroundColor: "maroon",
        width: "28%",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    detailsRoot2: {
        backgroundColor: "maroon",
        width: "28%",
        borderRadius: 0,
    },
    detailsRoot3: {
        backgroundColor: "maroon",
        width: "28%",
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5,
    },
    option: {
        padding: 6,
        color: "white",
        textAlign: "center"
    },

})