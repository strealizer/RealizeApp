import * as React from 'react';
import { Button, View, Text, ImageBackground, Dimensions } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


import { AntDesign, MaterialIcons  } from '@expo/vector-icons';



import { Audio } from 'expo-av';



export default function HomeScreen(props) {


  
  const DeviceWidth    = Dimensions.get('window').width;
  const DeviceHeight   = Dimensions.get('window').height;

  // const [fontsLoaded] = useFonts({
  //   'Montserrat-Bold': require('../../fonts/Montserrat-Bold.ttf'),
  // });

  // const onLayoutRootView = React.useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return <View><Text>font doesn't loaded.</Text></View>;
  // }

  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../../storages/songs/Yoasobi/Gunjou/song.mp3'));
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
    
  return (

    <SafeAreaView style={{

      backgroundColor: "#1C1C1C"

    }}>
     <ScrollView style={{
          padding: 10,
          paddingVertical: 20
        }}>

          <View style={{
            marginBottom: 30
          }}>
              <ImageBackground source={require('../../storages/songs/Yoasobi/Gunjou/cover.jpg')} style={{ 
                width: "100%",
                height: 200,
               }} imageStyle={{
                borderRadius: 15
               }}>

                  <Text style={{
                    fontSize: 45,
                    color: "white",
                    paddingTop: 20,
                    paddingLeft: 20,
                    fontWeight: "bold",
                  }}>
                    Yoasobi
                  </Text>

                  <Text style={{
                    fontSize: 30,
                    color: "white",
                    paddingLeft: 20,
                    fontWeight: "bold",
                  }}>
                    Gunjou
                  </Text>

                  <View   style={{
                    paddingTop: 30,
                    paddingLeft: 20,
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                  }}>
                  <AntDesign name="play" size={24} color="white" onPress={playSound}/>
                  <AntDesign name="hearto" size={24} color="white" style={{
                    paddingLeft: 15
                  }}/>
                  <MaterialIcons name="playlist-add" size={35} color="white" style={{
                    paddingLeft: 15,
                    bottom: 5
                  }}/>
                  </View>

               </ImageBackground>
            </View>

           <Text style={{marginBottom: 30, color: "white"}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </Text>

           <Text style={{marginBottom: 30, color: "white"}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </Text>

           <Text style={{marginBottom: 30, color: "white"}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </Text>

           <Text style={{marginBottom: 30, color: "white"}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </Text>

           <Text style={{marginBottom: 30, color: "white"}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </Text>

           <Text style={{marginBottom: 30, color: "white"}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </Text>

           <Text style={{marginBottom: 30, color: "white"}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </Text>


           <Text style={{marginBottom: 30, color: "white"}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </Text>


           <Text style={{marginBottom: 30, color: "white"}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </Text>


           <Text style={{marginBottom: 30, color: "white"}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </Text>
           

        </ScrollView>


    </SafeAreaView>



      /* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */
  );
}
