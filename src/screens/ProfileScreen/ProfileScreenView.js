import React from 'react';
import { View, Text } from 'react-native';
// import T from 'prop-types';
import s from './styles';

const ProfileScreen = () => (
  <View style={s.container}>
    <Text style={s.text}>This is Profile Screen </Text>
  </View>
);

ProfileScreen.navigationOptions = () => ({
  title: 'Profile',
});

ProfileScreen.propTypes = {

};

export default ProfileScreen;
