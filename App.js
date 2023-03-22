
import { StatusBar, StyleSheet, View } from 'react-native';
import CategoriesScreen from './Screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverView from './Screens/MealsOverView';

const stack = createNativeStackNavigator()

export default function App() {
  console.log(StatusBar.currentHeight)
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer >
        <stack.Navigator>
          <stack.Screen name="Meal Categories" component={CategoriesScreen} />
          <stack.Screen name="Meal Overview" component={MealsOverView} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}


