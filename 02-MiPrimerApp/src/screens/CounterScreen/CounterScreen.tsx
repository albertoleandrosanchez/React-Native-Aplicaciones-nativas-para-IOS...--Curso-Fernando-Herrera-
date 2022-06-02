import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Fab from '../../components/Fab/Fab';
import styles from './CounterScreen.style';

const CounterScreen = () => {
  const [contador, setContador] = useState(11);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      <Fab title="+1" onPress={() => setContador(contador + 1)} position="bl" />
      <Fab title="-1" onPress={() => setContador(contador - 1)} position="br" />
      <TouchableOpacity
        onPress={() => {
          setContador(contador + 1);
        }}
        style={styles.fabLocationBR}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setContador(contador - 1);
        }}
        style={styles.fabLocationBL}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CounterScreen;
