import React from 'react';
import { WebView } from 'react-native';
import DrawerBtn from '../../Components/DrawerBtn/DrawerBtn';
import s from './styles';

const TermsAndConditionScreen = () => (
  <WebView
    style={s.container}
    source={{ uri: 'https://google.com' }}
  />
);

TermsAndConditionScreen.navigationOptions = ({ navigation }) => ({
  title: 'Terms & Condition',
  headerLevt: (
    <DrawerBtn onPress={() => navigation.toggleDrawer()} />
  ),
});

export default TermsAndConditionScreen;
