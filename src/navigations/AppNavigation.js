import * as React from "react";
import { Button, View } from "react-native";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
// import {  } from '@expo/vector-icons';

import HomeScreen from "../screens/Home/HomeScreen";
import DetailsScreen from "../screens/Details/DetailsScreen";

const Drawer = createDrawerNavigator();

function ScreenWrapper() {
  return (
    // <FontAwesome name="search" size={32} color="white" />
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={({ navigation }) => ({
        headerLeft: (props) => (
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: 360,
            }}
          >
            <Ionicons
              name="ios-menu-outline"
              size={40}
              color="white"
              onPress={navigation.toggleDrawer}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                paddingStart: 30,
              }}
            />

            <Ionicons
              name="search-outline"
              size={32}
              color="white"
              onPress={() => alert("Seach icon clicked!!")}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                marginTop: 5,
                paddingStart: 20
              }}
            />
            <MaterialCommunityIcons
              name="bell-outline"
              size={32}
              color="white"
              onPress={() => alert("Notif icon clicked!")}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                width: 50,
                marginTop: 5,
                zIndex: 1
              }}
            />
            <View style={{
              position: "absolute",
              top: 20,
              right: 10,
              backgroundColor: "#ff5f5c",
              width: 10,
              height: 10,
              borderRadius: 10,
              zIndex: 2
            }}></View>
          </View>
        ),
      })}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#181818",
          },
          headerTintColor: "#fff",
          // headerRight: () => (
          //   <View style={{
          //     flexDirection: 'row',
          //     flex: 1,
          //     alignItems: 'center',
          //     justifyContent: 'center',
          //   }}>
          //     <MaterialIcons name="notifications-none"
          //      size={32}
          //      color="white"
          //      onPress={() => alert('This is a button!')}
          //      style={{
          //       paddingHorizontal: 10,
          //       paddingVertical: 10,
          //       paddingEnd: 10,
          //       marginTop: 5,
          //      }}
          //   />
          //   <Ionicons name="search-outline"
          //   size={32}
          //   color="white"
          //   onPress={() => alert('This is a button!')}
          //   style={{
          //    paddingHorizontal: 10,
          //    paddingVertical: 10,
          //    paddingEnd: 10,
          //    marginTop: 5
          //   }}
          //  />
          //   </View>
          // ),
        }}
      />
      <Drawer.Screen name="Details" component={DetailsScreen} />
    </Drawer.Navigator>
    // <Stack.Navigator
    //     screenOptions={{
    //       headerTitleAlign: 'center'
    //     }}>
    //   <Stack.Screen
    //     name="Home"
    //     component={HomeScreen}
    //     options={{
    //       title: "Realize App",
    //       headerStyle: {
    //         backgroundColor: "#181818"
    //       },
    //       headerTintColor: "#fff"
    //     }}
    //   />
    //   <Stack.Screen name="Details" component={DetailsScreen} />
    // </Stack.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#181818" barStyle="light-content" />
      <ScreenWrapper />
    </NavigationContainer>
  );
}
