// screens/HomeScreen.js
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import {searchMovies, fetchRandomMovies} from '../services/MovieService';
const HomeScreen = ({navigation}) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchRandomMoviesData();
  }, []);

  const fetchRandomMoviesData = async () => {
    try {
      const randomMovies = await fetchRandomMovies();
      setMovies(randomMovies);
    } catch (error) {
      console.error('Error fetching random movies:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const searchResults = await searchMovies(search);
      setMovies(searchResults);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && (
        <View style={styles.iOSMessage}>
          <Text style={styles.iOSText}>Running on iOS!</Text>
        </View>
      )}
      <TextInput
        style={styles.searchBar}
        placeholder="Search for movies..."
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={movies}
        keyExtractor={item => item.imdbID}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Details', {movieId: item.imdbID})
            }>
            <View style={styles.movieItem}>
              <Image source={{uri: item.Poster}} style={styles.poster} />
              <Text>{item.Title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  movieItem: {flexDirection: 'row', marginBottom: 10},
  poster: {width: 50, height: 75, marginRight: 10},
  iOSMessage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'lightblue',
  },
  iOSText: {fontSize: 20, fontWeight: 'bold'},
});

export default HomeScreen;
