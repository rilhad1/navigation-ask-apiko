import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import T from 'prop-types';

const DrawerItem = ({
  title,
  onPress,
  isActive,
  iconName
}) => (
  <View>
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  </View>
);

DrawerItem.propTypes = {
  title: T.string,
  onPress: T.func,
  isActive: T.bool,
  iconName: T.string,
};

export default DrawerItem;
