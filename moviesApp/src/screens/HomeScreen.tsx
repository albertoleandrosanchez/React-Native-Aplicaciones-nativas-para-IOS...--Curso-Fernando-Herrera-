import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {HorizontalSlider} from '../components/HorizontalSlider';

export const HomeScreen = () => {
  const {popular, nowPlaying, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
  const {width: windowsWidth} = useWindowDimensions();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* <MoviePoster movie={peliculasEnCine[0]} /> */}
        <View style={{height: 440}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowsWidth}
            itemWidth={300}
          />
        </View>
        <HorizontalSlider title="Populares" movies={popular} />
        <HorizontalSlider title="Mas Votados" movies={topRated} />
        <HorizontalSlider title="Proximamente" movies={upcoming} />
      </View>
    </ScrollView>
  );
};
