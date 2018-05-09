import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import T from 'prop-types';
import s from './styles';
import DrawerBtn from '../../Components/DrawerBtn/DrawerBtn';

const SignOutScreen = ({ unauthorize }) => (
  <View style={s.container}>
    <TouchableOpacity
      onPress={unauthorize}
    >
      <Text style={s.btn}>Sign Out</Text>
    </TouchableOpacity>
  </View>
);

SignOutScreen.navigationOptions = ({ navigation }) => ({
  title: 'Sign Out',
  headerLeft: (
    <DrawerBtn onPress={() => navigation.toggleDrawer()} />
  ),
});

SignOutScreen.propTypes = {
  unauthorize: T.func,
};

export default SignOutScreen;
