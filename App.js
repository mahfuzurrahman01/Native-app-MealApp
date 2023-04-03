
import 'react-native-gesture-handler';
import { StatusBar, StyleSheet, View } from 'react-native';
import CategoriesScreen from './Screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverView from './Screens/MealsOverView';
import MealDetails from './Components/MealDetails';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Favorite from './Screens/Favorite';
import IonIcons from 'react-native-vector-icons/Ionicons'
import FavoriteContextProvider from './store/Context/FavoriteContext';



const stack = createNativeStackNavigator();
const drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "gray",
        sceneContainerStyle: {
          backgroundColor: "#000"
        },
      }}
    >
      <drawer.Screen name="Categories" component={CategoriesScreen} options={{
        drawerIcon: ({ color, size }) => (<IonIcons name='fast-food-outline' color={color} size={size} />)
      }} />
      <drawer.Screen name="Favorites" component={Favorite} options={{
        drawerIcon: ({ color, size }) => (<IonIcons name='heart-outline' color={color} size={size} />)
      }} />
    </drawer.Navigator>
  )
}

export default function App() {
  console.log(StatusBar.currentHeight)
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <FavoriteContextProvider>
        <NavigationContainer >
          <stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#ccc" },
            headerTintColor: "black",
            contentStyle: {
              backgroundColor: "#000"
            }
          }}>
            <stack.Screen name="Drawer categories" component={DrawerNavigation} options={{
              headerShown: false,

            }} />
            <stack.Screen name="Meal Overview" component={MealsOverView} />
            <stack.Screen name="Meal details" component={MealDetails} />
          </stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}


