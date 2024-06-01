// services/MovieService.js
import axios from 'axios';

const API_KEY = 'your_api_key';
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchRandomMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?s=random&type=movie&apikey=${API_KEY}`);
    return response.data.Search;
  } catch (error) {
    console.error('Error fetching random movies:', error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?s=${query}&type=movie&apikey=${API_KEY}`);
    return response.data.Search;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}?i=${movieId}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};
