import * as React from 'react';
import { Button, View, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function HomeScreen(props) {

  const { navigation } = props;
    
  return (
    <View style={{ 
      flex: 1, 
      flexDirection: 'row',
      alignItems: 'center', 
      justifyContent: 'center',
    }}>
      <FontAwesome name="file-code-o" size={24} color="black" />
      <Text style={{ 
        fontSize: 18, 
        fontWeight: 'bold',
        paddingStart: 5 
      }}>
        ./src/screens/Home/HomeScreen.js
      </Text>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
    </View>
  );
}
