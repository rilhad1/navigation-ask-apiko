import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import T from 'prop-types';
import s from './styles';

const RestorePasswordScreen = ({ navigateToHome }) => (
  <View style={s.container}>
    <TouchableOpacity onPress={navigateToHome}>
      <Text style={s.text}>Send and go to HOME</Text>
    </TouchableOpacity>
  </View>
);

RestorePasswordScreen.navigationOptions = () => ({
  title: 'Restore Password',
});

RestorePasswordScreen.propTypes = {
  navigateToHome: T.func,
};

export default RestorePasswordScreen;
