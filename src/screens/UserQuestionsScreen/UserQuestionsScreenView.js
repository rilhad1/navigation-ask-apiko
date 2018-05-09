import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import T from 'prop-types';
import s from './styles';
import DrawerBtn from '../../Components/DrawerBtn/DrawerBtn';

const UserQuestinsScreen = ({ navigateToDetailQuestion }) => (
  <View style={s.container}>
    <Text style={s.text}>
      This is User Questins Screen
    </Text>
    <TouchableOpacity
      style={s.btn}
      onPress={navigateToDetailQuestion}
    >
      <Text>Go To Question Details</Text>
    </TouchableOpacity>
  </View>
);

UserQuestinsScreen.navigationOptions = ({ navigation }) => ({
  title: 'User Questions',
  headerLeft: (
    <DrawerBtn onPress={() => navigation.toggleDrawer()} />
  ),
});

UserQuestinsScreen.propTypes = {
  navigateToDetailQuestion: T.func,
};

export default UserQuestinsScreen;
