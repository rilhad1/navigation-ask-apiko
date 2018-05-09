import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import SignOutScreen from '../screens/SignOutScreen';

export default createStackNavigator({
  [screens.SignOut]: { screen: SignOutScreen },
});
