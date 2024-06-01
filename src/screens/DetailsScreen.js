// screens/DetailsScreen.js
import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {fetchMovieDetails} from '../services/MovieService';

const DetailsScreen = ({route}) => {
  const {movieId} = route.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetailsData();
  }, []);

  const fetchMovieDetailsData = async () => {
    try {
      const movieDetails = await fetchMovieDetails(movieId);
      setMovie(movieDetails);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  if (!movie) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: movie.Poster}} style={styles.poster} />
      <Text style={styles.title}>{movie.Title}</Text>
      <Text>{movie.Plot}</Text>
      <Text>Rating: {movie.imdbRating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  poster: {width: '100%', height: 300, marginBottom: 10},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 10},
});

export default DetailsScreen;
