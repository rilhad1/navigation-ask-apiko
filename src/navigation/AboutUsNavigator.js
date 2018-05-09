import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import AboutUsScreen from '../screens/AboutUsScreen';

export default createStackNavigator({
  [screens.AboutUs]: { screen: AboutUsScreen },
});
