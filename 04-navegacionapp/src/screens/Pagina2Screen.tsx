import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../themes/appTheme';
import {useNavigation} from '@react-navigation/native';

export const Pagina2Screen = () => {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      title: 'Pagina 2',
      headerBackTitle: 'Regresar',
    });
  }, [navigator]);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 2</Text>
      <Button
        title="Ir a pagina 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};