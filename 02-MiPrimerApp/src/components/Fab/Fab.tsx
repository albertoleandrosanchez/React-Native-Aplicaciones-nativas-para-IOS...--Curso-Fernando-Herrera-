import React from 'react';
import {
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './Fab.style';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

function Fab({ onPress, title, position = 'br' }: Props) {
  return (
    // <TouchableOpacity
    //   onPress={onPress}
    //   style={[
    //     styles.fabLocation,
    //     position === 'bl' ? styles.fabLocationBL : styles.fabLocationBR,
    //   ]}>
    //   <View style={styles.fab}>
    //     <Text style={styles.fabText}>{title}</Text>
    //   </View>
    // </TouchableOpacity>
    <View
      style={[
        styles.fabLocation,
        position === 'bl' ? styles.fabLocationBL : styles.fabLocationBR,
      ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#28425b', true, 30)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default Fab;
