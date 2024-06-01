// __tests__/DetailsScreen.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import DetailsScreen from '../src/screens/DetailsScreen'; 

// Mock the navigation prop
const mockRoute = {
  params: {
    movieId: 'tt1234567', // Mock movie ID
  },
};

describe('DetailsScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<DetailsScreen route={mockRoute} />);
    expect(getByText('Loading...')).toBeDefined();
  });

 
});
