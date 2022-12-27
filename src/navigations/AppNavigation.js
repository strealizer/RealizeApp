import * as React from "react";
import { Text, View, StatusBar, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import HomeScreen from "../screens/Home/HomeScreen";
import DetailsScreen from "../screens/Details/DetailsScreen";

const Drawer      = createDrawerNavigator();
const DeviceWidth = Dimensions.get('window').width;


function ScreenWrapper() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={({ navigation }) => ({
        drawerStyle: {
          backgroundColor: "#181818",
        },
        drawerActiveBackgroundColor: "#242424",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#6F7175",
        headerLeft: (props) => (
          
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: DeviceWidth,
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
                paddingStart: 20,
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
                zIndex: 1,
              }}
            />
            <View
              style={{
                position: "absolute",
                top: 20,
                right: 10,
                backgroundColor: "#ff5f5c",
                width: 10,
                height: 10,
                borderRadius: 10,
                zIndex: 2,
              }}
            ></View>
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
          drawerIcon: ({focused, size}) => (
            <View style={{ marginRight: -20 }}>
                <MaterialCommunityIcons
                name="home-roof"
                size={size}
                color={focused ? '#fff' : '#6F7175'}
              />
            </View>
          ),
        }}
      />

      <Drawer.Screen 
          name="Recently Played" 
          component={DetailsScreen} 
          options={{
            headerTitle: "",
            headerStyle: {
              backgroundColor: "#181818",
            },
            headerTintColor: "#fff",
            drawerIcon: ({focused, size}) => (
              <View style={{ marginRight: -20 }}>
                  <MaterialCommunityIcons 
                  name="playlist-play"
                  size={size}
                  color={focused ? '#fff' : '#6F7175'}
                />
              </View>
            ),
          }}
      />

      <Drawer.Screen 
          name="Playlists" 
          component={DetailsScreen} 
          options={{
            headerTitle: "",
            headerStyle: {
              backgroundColor: "#181818",
            },
            headerTintColor: "#fff",
            drawerIcon: ({focused, size}) => (
              <View style={{ marginRight: -20 }}>
                  <MaterialCommunityIcons 
                  name="playlist-music"
                  size={size}
                  color={focused ? '#fff' : '#6F7175'}
                />
              </View>
            ),
          }}
      />

      {/* <Drawer.Screen 
          name="Collections" 
          component={DetailsScreen} 
          options={{
            headerTitle: "",
            headerStyle: {
              backgroundColor: "#181818",
            },
            headerTintColor: "#fff",
            drawerIcon: ({focused, size}) => (
              <View style={{ marginRight: -20 }}>
                  <MaterialIcons 
                  name="library-music"
                  size={size}
                  color={focused ? '#fff' : '#6F7175'}
                />
              </View>
            ),
          }}
      /> */}

      <Drawer.Screen 
          name="Likes" 
          component={DetailsScreen} 
          options={{
            headerTitle: "",
            headerStyle: {
              backgroundColor: "#181818",
            },
            headerTintColor: "#fff",
            drawerIcon: ({focused, size}) => (
              <View style={{ marginRight: -20 }}>
                  <FontAwesome 
                  name="heart"
                  size={size}
                  color={focused ? '#fff' : '#6F7175'}
                />
              </View>
            ),
          }}
      />

    </Drawer.Navigator>
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
