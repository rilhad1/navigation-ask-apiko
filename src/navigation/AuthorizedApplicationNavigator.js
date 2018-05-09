import { createDrawerNavigator } from 'react-navigation';
import screens from './screens';
import HomeNavigator from './HomeNavigator';
import SearchNavigator from './SearchNavigator';
import CreateQuestionNavigator from './CreateQuestionNavigator';
import ProfileNavigator from './ProfileNavigator';
import AboutUsNavigator from './AboutUsNavigator';
import TermsAndConditionScreen from '../screens/TermsAndConditionScreen';
import SignOutNavigator from './SignOutNavigator';
import UnauthorizedDrawer from './component/Drawer/UnauthorizedDrawer';

export default createDrawerNavigator({
  [screens.Home]: {
    screen: HomeNavigator,
    drawerLabel: 'Home',
  },
  [screens.Search]: {
    screen: SearchNavigator,
    drawerLabel: 'Search',
  },
  [screens.CreateQuestion]: {
    screen: CreateQuestionNavigator,
    drawerLabel: 'CreateQuestion',
  },
  [screens.Profile]: {
    screen: ProfileNavigator,
    drawerLabel: 'Profile',
  },
  [screens.AboutUs]: {
    screen: AboutUsNavigator,
    drawerLabel: 'About Us',
  },
  [screens.Profile]: {
    screen: TermsAndConditionScreen,
    drawerLabel: 'Terms & Condition',
  },
  [screens.SignOut]: {
    screen: SignOutNavigator,
    drawerLabel: 'Sign Out',
  },
}, {
  initialRouteName: screens.Home,
  drawerWidth: 300,
  drawerPosition: 'left',
  contentComponent: UnauthorizedDrawer,
});
