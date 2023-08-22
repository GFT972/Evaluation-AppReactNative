import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import AddScreen from './Screens/AddScreen';
import ProfileScreen from './Screens/ProfileScreen';
import Ionic from "react-native-vector-icons/Ionicons"

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    //faire le container pour la navigation
    <NavigationContainer>
    {/*creation du tab navigator*/}
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon:({focused,size,color})=>{
            let iconName;
            {/*conditions pour l'affichage des icones en fonction du composant appelé*/}
            if(route.name === "Jouer"){
              iconName=focused ? "game-controller-sharp":"game-controller-outline"
              size = focused ? size +8 : size +5;
          
            }else if(route.name === "Historique"){
              iconName=focused ? "beer-sharp":"beer-outline"
              size = focused ? size +8 : size +5;
            
            }else if(route.name === "Paramètres"){
              iconName=focused ? "settings-sharp":"settings-outline"
              size = focused ? size +8 : size +5;
            }
            return <Ionic name={iconName} size={size} color={color}/>
          },
          tabBarActiveTintColor : "purple",
          tabBarInactiveTintColor : "grey"
        })}>
        {/*Routing des screens*/}
        <Tab.Screen name="Jouer" component={HomeScreen}/>
        <Tab.Screen name="Historique" component={AddScreen}/>
        <Tab.Screen name="Paramètres" component={ProfileScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
