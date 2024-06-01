// __tests__/HomeScreen.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen'; 

test('renders search bar', () => {
  const { getByPlaceholderText } = render(<HomeScreen />);
  const searchBar = getByPlaceholderText('Search for movies...');
  expect(searchBar).toBeTruthy();
});

test('search functionality works', () => {
  const { getByPlaceholderText } = render(<HomeScreen />);
  const searchBar = getByPlaceholderText('Search for movies...');
  fireEvent.changeText(searchBar, 'Inception');
  fireEvent(searchBar, 'submitEditing');
  // Additional checks can be added here to validate the search results
});
