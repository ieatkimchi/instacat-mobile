import { Navigation } from 'react-native-navigation';

import FeedsScreen from './FeedsScreen';
import SecondScreen from './SecondScreen';

export const registerScreens = () => {
  Navigation.registerComponent('Instacat.FeedsScreen', () => FeedsScreen)
  Navigation.registerComponent('Instacat.SecondScreen', () => SecondScreen)

}
