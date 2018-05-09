import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import SearchScreen from '../screens/SearchScreen';

export default createStackNavigator({
  [screens.Search]: { screen: SearchScreen },
});
