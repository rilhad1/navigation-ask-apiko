import React from 'react';
import { View, Text } from 'react-native';
// import T from 'prop-types';
import s from './styles';
import DrawerBtn from '../../Components/DrawerBtn/DrawerBtn';

const SearchScreen = () => (
  <View style={s.container}>
    <Text style={s.text}>
      This is Search Screen
    </Text>
  </View>
);

SearchScreen.navigationOptions = ({ navigation }) => ({
  title: 'Search',
  headerLeft: (
    <DrawerBtn onPress={() => navigation.toggleDrawer()} />
  ),
});

SearchScreen.propTypes = {

};

export default SearchScreen;
