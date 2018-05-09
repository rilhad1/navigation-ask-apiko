import { createSwitchNavigator } from 'react-navigation';
import screens from './src/navigation/screens';
import AuthorizedApplicationNavigator from './src/navigation/AuthorizedApplicationNavigator';
import UnauthorizedApplicationNavigator from './src/navigation/UnauthorizedApplicationNavigator';

export default createSwitchNavigator({
  [screens.AuthorizedApplication]: { screen: AuthorizedApplicationNavigator },
  [screens.UnauthorizedApplication]: { screen: UnauthorizedApplicationNavigator },
}, {
  initialRouteName: screens.UnauthorizedApplication,
});
