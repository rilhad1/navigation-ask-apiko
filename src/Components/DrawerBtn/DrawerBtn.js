import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import T from 'prop-types';

const DrawerBtn = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>DRAWER</Text>
  </TouchableOpacity>
);

DrawerBtn.propTypes = {
  onPress: T.func,
};

export default DrawerBtn;
