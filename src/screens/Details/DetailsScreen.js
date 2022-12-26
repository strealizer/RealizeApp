import * as React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen(props) {

  const { navigation } = props;
    
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
