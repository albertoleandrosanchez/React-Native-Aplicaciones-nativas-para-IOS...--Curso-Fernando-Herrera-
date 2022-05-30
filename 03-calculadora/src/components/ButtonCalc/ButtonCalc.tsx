import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../theme/appTheme';

interface ButtonCalcProps {
  text: string;
  color?: string;
  ancho?: boolean;
  action: (textNumber: string) => void;
}

function ButtonCalc({text, color = '#2D2D2D', ancho, action}: ButtonCalcProps) {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: ancho ? styles.button.width * 2 + 10 : styles.button.width,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: color === '#9B9B9B' ? '#000' : '#fff',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ButtonCalc;
