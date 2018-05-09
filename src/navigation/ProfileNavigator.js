import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import ProfileScreen from '../screens/ProfileScreen';

export default createStackNavigator({
  [screens.Profile]: { screen: ProfileScreen },
});
