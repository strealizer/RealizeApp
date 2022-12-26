import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../screens/Home/HomeScreen';
import DetailsScreen from '../screens/Details/DetailsScreen';

const Stack = createNativeStackNavigator();

function ScreenWrapper() {
    return (
        <Stack.Navigator 
            screenOptions={{
              headerTitleAlign: 'center'
            }}>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              title: "Realize App",
              headerStyle: {
                backgroundColor: "#333"
              },
              headerTintColor: "#fff"
            }} 
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

export default function AppContainer() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor='#333' barStyle='light-content' />
        <ScreenWrapper />
      </NavigationContainer>
    );
}