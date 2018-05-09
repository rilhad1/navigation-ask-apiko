import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';
import DrawerBtn from '../../Components/DrawerBtn/DrawerBtn';

const AboutUsScreen = () => (
  <View style={s.container}>
    <Text style={s.text}>
      This is About Us Screen
    </Text>
  </View>
);

AboutUsScreen.navigationOptions = ({ navigation }) => ({
  title: 'About Us',
  headerLeft: (
    <DrawerBtn onPress={() => navigation.toggleDrawer()} />
  ),
});

export default AboutUsScreen;
