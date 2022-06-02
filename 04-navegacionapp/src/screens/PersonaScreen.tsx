import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {RootStackParam} from '../navigator/StackNavigator';
import {styles} from '../themes/appTheme';

// interface RouteParams {
//   id: number;
//   nombre: string;
//   edad: string;
// }

interface Props extends StackScreenProps<RootStackParam, 'PersonaScreen'> {}

const PersonaScreen = ({route, navigation}: Props) => {
  // const params = route.params as RouteParams;
  const params = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }),
    [];
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Persona</Text>
      <Text>Id: {params.id}</Text>
      <Text>Nombre: {params.nombre}</Text>
      <Text>Edad: {params.edad}</Text>
    </View>
  );
};

export default PersonaScreen;
