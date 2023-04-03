import { Pressable } from "react-native";
import IonIcons from 'react-native-vector-icons/Ionicons';

const iconButton = ({ name, onPress,color }) => {
    return (
        <Pressable>
            <IonIcons name={name} size={26} onPress={onPress} color={color} />
        </Pressable>
    )
}

export default iconButton;