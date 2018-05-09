import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import RestorePasswordScreen from '../screens/RestorePasswordScreen';

export default createStackNavigator({
  [screens.SignUp]: { screen: SignUpScreen },
  [screens.SignIn]: { screen: SignInScreen },
  [screens.RestorePassword]: { screen: RestorePasswordScreen },
}, {
  initialRouteName: screens.SignUp,
});
