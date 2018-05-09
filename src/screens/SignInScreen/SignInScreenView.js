import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import T from 'prop-types';
import s from './styles';

const SignInScreen = ({ navigateToRestorePassword }) => (
  <View style={s.container}>
    <TouchableOpacity onPress={navigateToRestorePassword}>
      <Text style={s.text}>Forgot password?</Text>
    </TouchableOpacity>
  </View>
);

SignInScreen.navigationOptions = () => ({
  title: 'Sign In',
});

SignInScreen.propTypes = {
  navigateToRestorePassword: T.func,
};

export default SignInScreen;
