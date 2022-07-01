import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {RootStackParams} from '../navigation/ScreenNavigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route}: Props) => {
  const movie = route.params as Movie;
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <View style={styles.imageContainer}>
      <Image source={{uri}} style={styles.posterimage} />
    </View>
  );
};

const styles = StyleSheet.create({
  posterimage: {
    width: 300,
    height: 400,
    marginHorizontal: 2,
    paddingBottom: 20,
    paddingHorizontal: 7,
  },
  imageContainer: {
    flex: 1,
  },
});

export default DetailScreen;
// Language: typescript
// Path: moviesApp\src\screens\DetailScreen.tsx
// Compare this snippet from moviesApp\src\navigation\ScreenNavigation.tsx:
// import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import {HomeScreen} from '../screens/HomeScreen';
// import {DetailScreen} from '../screens/DetailScreen';
// import {Movie} from '../interfaces/movieInterface';
//
// export type RootStackParams = {
//   HomeScreen: undefined;
//   DetailScreen: Movie;
// };
//
// const Stack = createStackNavigator();
//
// export const ScreenNavigation = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//         cardStyle: {backgroundColor: '#fafafa'},
//       }}>
//       <Stack.Screen name="HomeScreen" component={HomeScreen} />
//       <Stack.Screen name="DetailScreen" component={DetailScreen} />
//     </Stack.Navigator>
//   );
// };
//
// Compare this snippet from moviesApp\src\components\MoviePoster.tsx:
// import {useNavigation} from '@react-navigation/native';
// import React from 'react';
// import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
// import {Movie} from '../interfaces/movieInterface';
//
// interface Props {
//   movie: Movie;
//   height?: number;
//   width?: number;
// }
//
// export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
//   const uri = `https://image.t
