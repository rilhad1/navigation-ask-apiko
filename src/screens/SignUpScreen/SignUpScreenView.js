import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import T from 'prop-types';
import s from './styles';

const SignUpScreen = ({
  navigateToSignIn,
  signUp,
}) => (
  <View style={s.container}>
    <TouchableOpacity onPress={navigateToSignIn}>
      <Text style={s.text}>Already has an account?</Text>
    </TouchableOpacity>
    <TouchableOpacity style={s.btn} onPress={signUp}>
      <Text>SIGN UP!</Text>
    </TouchableOpacity>
  </View>
);

SignUpScreen.navigationOptions = () => ({
  title: 'Sign Up',
});

SignUpScreen.propTypes = {
  navigateToSignIn: T.func,
  signUp: T.func,
};

export default SignUpScreen;
