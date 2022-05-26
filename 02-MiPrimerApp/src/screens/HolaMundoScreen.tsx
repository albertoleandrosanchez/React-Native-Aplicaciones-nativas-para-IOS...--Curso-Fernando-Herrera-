import React from 'react';
import { Text, View } from 'react-native';

const HolaMundoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 45,
        }}>
        Hola Mundo
      </Text>
    </View>
  );
};

export default HolaMundoScreen;
