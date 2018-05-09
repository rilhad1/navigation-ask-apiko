import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';
import DrawerBtn from '../../Components/DrawerBtn/DrawerBtn';

const CreateQuestionScreen = () => (
  <View style={s.container}>
    <Text style={s.text}>
      This is Create Question Screen
    </Text>
  </View>
);

CreateQuestionScreen.navigationOptions = ({ navigation }) => ({
  title: 'Create Question',
  headerLeft: (
    <DrawerBtn onPress={() => navigation.toggleDrawer()} />
  ),
});

export default CreateQuestionScreen;
